"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollReveal from "@/components/scroll-reveal"
import { Sparkles, Plus, Minus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface FAQItem {
    question: string
    answer: string
    category: string
}

const faqData: FAQItem[] = [
    // Solar Basics
    {
        category: "Solar Basics",
        question: "How do solar panels work?",
        answer:
            "Solar panels convert sunlight into electricity through photovoltaic cells. When sunlight hits the panels, it creates an electric field that generates direct current (DC) electricity. An inverter then converts this DC power into alternating current (AC) electricity that can power your home.",
    },
    {
        category: "Solar Basics",
        question: "Will solar panels work on cloudy days?",
        answer:
            "Yes! Solar panels still generate electricity on cloudy days, though at reduced efficiency (typically 10-25% of peak output). Modern panels are designed to capture diffused sunlight, and Florida's abundant sunshine ensures excellent year-round production.",
    },
    {
        category: "Solar Basics",
        question: "How long do solar panels last?",
        answer:
            "Quality solar panels typically last 25-30 years or more. Most manufacturers offer 20-25 year performance warranties, guaranteeing at least 80% efficiency after 25 years. With proper maintenance, panels can continue producing electricity well beyond their warranty period.",
    },
    {
        category: "Solar Basics",
        question: "Do I need to replace my roof before installing solar?",
        answer:
            "Not necessarily. We'll inspect your roof during our assessment. If your roof is in good condition and less than 10 years old, it's typically suitable for solar. If repairs are needed, we can coordinate with trusted roofing partners.",
    },

    // Installation Process
    {
        category: "Installation",
        question: "How long does the installation process take?",
        answer:
            "The entire process typically takes 4-8 weeks from contract signing to system activation. This includes permitting (2-4 weeks), installation (1-3 days), inspection, and utility interconnection. Weather and permit processing times can affect the timeline.",
    },
    {
        category: "Installation",
        question: "Will I have power during installation?",
        answer:
            "Yes, your power will only be briefly interrupted during the final connection process, usually for 1-2 hours. We coordinate with you to schedule this at a convenient time and provide advance notice.",
    },
    {
        category: "Installation",
        question: "Do you handle permits and inspections?",
        answer:
            "We handle all permitting, inspections, and utility interconnection paperwork. Our team manages the entire process so you don't have to worry about bureaucratic details.",
    },
    {
        category: "Installation",
        question: "What happens if there's damage during installation?",
        answer:
            "We carry comprehensive insurance and bonding to protect your property. In the unlikely event of damage, we take full responsibility and ensure prompt repairs at no cost to you.",
    },

    // Financial & Incentives
    {
        category: "Financial",
        question: "How much can I save with solar?",
        answer:
            "Most homeowners save 70-90% on their electricity bills. With Florida's net metering and the federal tax credit, typical savings range from $20,000-$40,000 over 25 years. We provide personalized savings estimates during your consultation.",
    },
    {
        category: "Financial",
        question: "What financing options are available?",
        answer:
            "We offer multiple financing options including cash purchase, solar loans (0% down available), and leasing programs. Our financing partners provide competitive rates, and we'll help you choose the best option for your situation.",
    },
    {
        category: "Financial",
        question: "What is the federal solar tax credit?",
        answer:
            "The federal solar Investment Tax Credit (ITC) allows you to deduct 30% of your solar system cost from your federal taxes. This credit is available through 2032, then steps down to 26% in 2033 and 22% in 2034.",
    },
    {
        category: "Financial",
        question: "Does solar increase my home value?",
        answer:
            "Yes! Studies show solar panels increase home value by approximately 4% on average. In Florida's market, this typically means $15,000-$25,000 in added value, and solar homes sell 20% faster than non-solar homes.",
    },

    // Maintenance & Performance
    {
        category: "Maintenance",
        question: "How much maintenance do solar panels require?",
        answer:
            "Solar panels require minimal maintenance. Occasional cleaning and annual inspections are recommended. Florida's frequent rain naturally cleans panels, and our monitoring system alerts us to any performance issues.",
    },
    {
        category: "Maintenance",
        question: "What if a panel stops working?",
        answer:
            "Our monitoring system tracks each panel's performance in real-time. If issues arise, we're notified immediately and will schedule repairs under warranty. Most problems are quickly resolved with minimal impact on your system's output.",
    },
    {
        category: "Maintenance",
        question: "Can I monitor my system's performance?",
        answer:
            "Yes! Every system includes monitoring software accessible via smartphone app or web portal. You can track daily, monthly, and yearly production, plus receive alerts about system performance.",
    },
    {
        category: "Maintenance",
        question: "What happens during hurricanes or severe weather?",
        answer:
            "Our installations are engineered to withstand Florida's weather, including hurricane-force winds up to 180 mph. Panels are securely mounted and designed to handle hail, high winds, and heavy rain.",
    },

    // Tesla & Equipment
    {
        category: "Tesla & Equipment",
        question: "Why choose Tesla solar products?",
        answer:
            "Tesla offers cutting-edge technology, sleek aesthetics, and industry-leading efficiency. As a Tesla Certified Installer, we provide expert installation with full warranty support and access to Tesla's latest innovations.",
    },
    {
        category: "Tesla & Equipment",
        question: "What is Tesla Powerwall?",
        answer:
            "Tesla Powerwall is a home battery system that stores solar energy for use during outages or peak rate periods. It provides backup power, reduces grid dependence, and maximizes your solar investment.",
    },
    {
        category: "Tesla & Equipment",
        question: "Can I add battery storage later?",
        answer:
            "Yes! While it's most cost-effective to install batteries with your initial solar system, we can add Tesla Powerwall or other battery solutions to existing systems.",
    },
    {
        category: "Tesla & Equipment",
        question: "What's the difference between Tesla Solar Roof and panels?",
        answer:
            "Tesla Solar Roof integrates solar cells directly into roof tiles, replacing your entire roof. Traditional panels are mounted on existing roofs. Solar Roof is ideal for new construction or roof replacement, while panels work great for existing roofs.",
    },
]

function FAQAccordion() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set())
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    const categories = ["All", ...Array.from(new Set(faqData.map((item) => item.category)))]
    const filteredFAQs =
        selectedCategory === "All" ? faqData : faqData.filter((item) => item.category === selectedCategory)

    const toggleItem = (index: number) => {
        const newOpenItems = new Set(openItems)
        if (newOpenItems.has(index)) {
            newOpenItems.delete(index)
        } else {
            newOpenItems.add(index)
        }
        setOpenItems(newOpenItems)
    }

    return (
        <div className="space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "bg-red-600 hover:bg-red-700" : ""}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                    <Card key={index} className="overflow-hidden">
                        <CardContent className="p-0">
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                            >
                                <div>
                                    <div className="text-sm text-red-600 font-medium mb-1">{faq.category}</div>
                                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                                </div>
                                {openItems.has(index) ? (
                                    <Minus className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                                ) : (
                                    <Plus className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" />
                                )}
                            </button>
                            {openItems.has(index) && (
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default function FAQClientPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50 py-20 lg:py-32">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-50 to-transparent rounded-full opacity-30"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <ScrollReveal>
                            <Badge
                                variant="outline"
                                className="mb-6 px-4 py-2 text-red-600 border-red-200 bg-white/50 backdrop-blur-sm"
                            >
                                <Sparkles className="w-4 h-4 mr-2" />
                                Get Your Questions Answered
                            </Badge>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Frequently Asked{" "}
                                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                                    Questions
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Everything you need to know about solar panels, installation, financing, and more. Can't find what
                                you're looking for? Our experts are here to help.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/free-solar-quote">
                                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                                        Get Free Quote
                                    </Button>
                                </Link>
                                <Link href="/about-us/our-process">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-red-200 text-red-600 hover:bg-red-50 px-8 py-3 bg-transparent"
                                    >
                                        Learn Our Process
                                    </Button>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Stats Preview */}
                    <ScrollReveal delay={0.4}>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <Card className="text-center p-6 bg-white/70 backdrop-blur-sm border-red-100">
                                <CardContent className="p-0">
                                    <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                                    <div className="text-gray-600">Happy Customers</div>
                                </CardContent>
                            </Card>
                            <Card className="text-center p-6 bg-white/70 backdrop-blur-sm border-red-100">
                                <CardContent className="p-0">
                                    <div className="text-3xl font-bold text-red-600 mb-2">5★</div>
                                    <div className="text-gray-600">Average Rating</div>
                                </CardContent>
                            </Card>
                            <Card className="text-center p-6 bg-white/70 backdrop-blur-sm border-red-100">
                                <CardContent className="p-0">
                                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                                    <div className="text-gray-600">Support Available</div>
                                </CardContent>
                            </Card>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions About Solar</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Browse our comprehensive FAQ or use the category filters to find specific information about solar
                                installation, financing, and maintenance.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <FAQAccordion />
                    </ScrollReveal>
                </div>
            </section>

            {/* Still Have Questions Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Our solar experts are standing by to provide personalized answers and help you make the best decision for
                            your home.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/free-solar-quote">
                                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                                    Schedule Consultation
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-red-200 text-red-600 hover:bg-red-50 px-8 py-3 bg-transparent"
                            >
                                <a href="tel:+1-386-832-1119">Call (386) 832-1119</a>
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
