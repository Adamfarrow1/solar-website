"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
    id: string
    text: string
    isBot: boolean
    timestamp: Date
}

interface LeadData {
    zipCode: string
    homeOwnership: "own" | "rent" | ""
    phone: string
    email: string
}

const CONVERSATION_STEPS = {
    GREETING: "greeting",
    ZIP_CODE: "zipCode",
    HOME_OWNERSHIP: "homeOwnership",
    PHONE: "phone",
    EMAIL: "email",
    COMPLETE: "complete",
} as const

type ConversationStep = (typeof CONVERSATION_STEPS)[keyof typeof CONVERSATION_STEPS]

export default function LeadChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [currentStep, setCurrentStep] = useState<ConversationStep>(CONVERSATION_STEPS.GREETING)
    const [input, setInput] = useState("")
    const [leadData, setLeadData] = useState<LeadData>({
        zipCode: "",
        homeOwnership: "",
        phone: "",
        email: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Initial greeting
            addBotMessage("Hi there! Interested in lowering your energy bill with solar? ☀️")
        }
    }, [isOpen])

    const addMessage = (text: string, isBot: boolean) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            isBot,
            timestamp: new Date(),
        }
        setMessages((prev) => [...prev, newMessage])
    }

    const addBotMessage = (text: string) => {
        setTimeout(() => {
            addMessage(text, true)
        }, 500)
    }

    const validateZipCode = (zip: string): boolean => {
        return /^\d{5}(-\d{4})?$/.test(zip.trim())
    }

    const validatePhone = (phone: string): boolean => {
        const cleaned = phone.replace(/\D/g, "")
        return cleaned.length === 10 || cleaned.length === 11
    }

    const validateEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    }

    const submitLead = async () => {
        setIsSubmitting(true)
        try {
            const response = await fetch("/api/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: "Chat",
                    lastName: "Lead",
                    email: leadData.email,
                    phone: leadData.phone,
                    zipCode: leadData.zipCode,
                    homeOwnership: leadData.homeOwnership,
                    source: "chatbot",
                    message: `Lead from chatbot conversation. Zip: ${leadData.zipCode}, Home: ${leadData.homeOwnership}, Phone: ${leadData.phone}, Email: ${leadData.email}`,
                }),
            })

            if (response.ok) {
                addBotMessage("Got it! A solar expert will be in touch soon to discuss your savings ☀️")
                setCurrentStep(CONVERSATION_STEPS.COMPLETE)
            } else {
                addBotMessage("Sorry, there was an issue. Please try calling us at (386) 832-1119")
            }
        } catch (error) {
            addBotMessage("Sorry, there was an issue. Please try calling us at (386) 832-1119")
        } finally {
            setIsSubmitting(false)
        }
    }

    const processUserResponse = (userInput: string) => {
        switch (currentStep) {
            case CONVERSATION_STEPS.GREETING:
                if (
                    userInput.toLowerCase().includes("yes") ||
                    userInput.toLowerCase().includes("sure") ||
                    userInput.toLowerCase().includes("interested") ||
                    userInput.toLowerCase().includes("tell me more")
                ) {
                    addBotMessage("Great! What's your zip code?")
                    setCurrentStep(CONVERSATION_STEPS.ZIP_CODE)
                } else {
                    addBotMessage(
                        "No problem! If you change your mind, we're here to help you save on energy costs. Feel free to call us at (386) 832-1119 ☀️",
                    )
                    setCurrentStep(CONVERSATION_STEPS.COMPLETE)
                }
                break

            case CONVERSATION_STEPS.ZIP_CODE:
                if (validateZipCode(userInput)) {
                    setLeadData((prev) => ({ ...prev, zipCode: userInput }))
                    addBotMessage("Awesome — do you own or rent your home?")
                    setCurrentStep(CONVERSATION_STEPS.HOME_OWNERSHIP)
                } else {
                    addBotMessage("Please enter a valid zip code (e.g., 32792)")
                }
                break

            case CONVERSATION_STEPS.HOME_OWNERSHIP:
                const ownership = userInput.toLowerCase()
                if (ownership.includes("own")) {
                    setLeadData((prev) => ({ ...prev, homeOwnership: "own" }))
                    addBotMessage("Perfect! What's the best number to reach you at?")
                    setCurrentStep(CONVERSATION_STEPS.PHONE)
                } else if (ownership.includes("rent")) {
                    setLeadData((prev) => ({ ...prev, homeOwnership: "rent" }))
                    addBotMessage("Thanks for letting me know! What's the best number to reach you at?")
                    setCurrentStep(CONVERSATION_STEPS.PHONE)
                } else {
                    addBotMessage("Please let me know if you own or rent your home")
                }
                break

            case CONVERSATION_STEPS.PHONE:
                if (validatePhone(userInput)) {
                    setLeadData((prev) => ({ ...prev, phone: userInput }))
                    addBotMessage("And your email in case we miss you?")
                    setCurrentStep(CONVERSATION_STEPS.EMAIL)
                } else {
                    addBotMessage("Please enter a valid phone number (e.g., (407) 555-1234)")
                }
                break

            case CONVERSATION_STEPS.EMAIL:
                if (validateEmail(userInput)) {
                    setLeadData((prev) => ({ ...prev, email: userInput }))
                    submitLead()
                } else {
                    addBotMessage("Please enter a valid email address")
                }
                break
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || isSubmitting) return

        const userInput = input.trim()
        addMessage(userInput, false)
        setInput("")
        processUserResponse(userInput)
    }

    const handleQuickReply = (reply: string) => {
        addMessage(reply, false)
        processUserResponse(reply)
    }

    const getQuickReplies = () => {
        switch (currentStep) {
            case CONVERSATION_STEPS.GREETING:
                return ["Yes!", "Tell me more", "Not interested"]
            case CONVERSATION_STEPS.HOME_OWNERSHIP:
                return ["Own", "Rent"]
            default:
                return []
        }
    }

    const shouldShowInput = () => {
        return [CONVERSATION_STEPS.ZIP_CODE, CONVERSATION_STEPS.PHONE, CONVERSATION_STEPS.EMAIL].includes(currentStep)
    }

    return (
        <>
            {/* Chat Widget Button */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    size="icon"
                >
                    <MessageCircle className="h-6 w-6 text-white" />
                </Button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-3rem)] shadow-2xl">
                    <Card className="border-red-200 overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 bg-red-600 text-white">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="font-medium">Solar Expert</span>
                            </div>
                            <Button
                                onClick={() => setIsOpen(false)}
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-white hover:bg-red-700"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Chat Content */}
                        <div className="flex flex-col h-96">
                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
                                {messages.map((message) => (
                                    <div key={message.id} className={cn("flex", message.isBot ? "justify-start" : "justify-end")}>
                                        <div
                                            className={cn(
                                                "max-w-[85%] px-3 py-2 rounded-lg text-sm break-words",
                                                message.isBot ? "bg-gray-100 text-gray-900" : "bg-red-600 text-white",
                                            )}
                                        >
                                            {message.text}
                                        </div>
                                    </div>
                                ))}
                                {isSubmitting && (
                                    <div className="flex justify-start">
                                        <div className="bg-gray-100 text-gray-900 px-3 py-2 rounded-lg text-sm">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div
                                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                    style={{ animationDelay: "0.1s" }}
                                                ></div>
                                                <div
                                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                    style={{ animationDelay: "0.2s" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Quick Replies - Show when not collecting personal info */}
                            {getQuickReplies().length > 0 && !shouldShowInput() && currentStep !== CONVERSATION_STEPS.COMPLETE && (
                                <div className="px-4 pb-3 border-t border-gray-100">
                                    <div className="flex flex-wrap gap-2 pt-3">
                                        {getQuickReplies().map((reply) => (
                                            <Button
                                                key={reply}
                                                onClick={() => handleQuickReply(reply)}
                                                variant="outline"
                                                size="sm"
                                                className="text-xs border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                                            >
                                                {reply}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Input Form - Only show for personal information steps */}
                            {shouldShowInput() && currentStep !== CONVERSATION_STEPS.COMPLETE && (
                                <div className="border-t border-gray-100 p-4">
                                    <form id="chatbot-form" onSubmit={handleSubmit} className="flex gap-2">
                                        <Input
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            placeholder={
                                                currentStep === CONVERSATION_STEPS.ZIP_CODE
                                                    ? "Enter your zip code..."
                                                    : currentStep === CONVERSATION_STEPS.PHONE
                                                        ? "Enter your phone number..."
                                                        : currentStep === CONVERSATION_STEPS.EMAIL
                                                            ? "Enter your email address..."
                                                            : "Type your message..."
                                            }
                                            className="flex-1 text-sm"
                                            disabled={isSubmitting}
                                            autoFocus
                                        />
                                        <Button
                                            type="submit"
                                            size="icon"
                                            className="bg-red-600 hover:bg-red-700 shrink-0"
                                            disabled={!input.trim() || isSubmitting}
                                        >
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            )}
        </>
    )
}
