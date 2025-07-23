"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    CheckCircle,
    Phone,
    Mail,
    MapPin,
    Clock,
    Shield,
    Award,
    Calculator,
    Home,
    Zap,
    DollarSign,
    Loader2,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

interface FormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    propertyType: string
    roofType: string
    monthlyBill: string
    urgency: string
    solarType: string
    financing: string
    message: string
}

export default function FreeQuoteClient() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [toastMessage, setToastMessage] = useState<{
        title: string
        description: string
        type: "success" | "error"
    } | null>(null)

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        propertyType: "",
        roofType: "",
        monthlyBill: "",
        urgency: "",
        solarType: "",
        financing: "",
        message: "",
    })

    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => {
                setToastMessage(null)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [toastMessage])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error("Failed to submit form")
            }

            setIsSubmitted(true)
            setToastMessage({
                title: "Quote Request Submitted!",
                description: "We'll get back to you within 24 hours with your custom solar proposal.",
                type: "success",
            })

            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: "",
                propertyType: "",
                roofType: "",
                monthlyBill: "",
                urgency: "",
                solarType: "",
                financing: "",
                message: "",
            })
        } catch (error) {
            setToastMessage({
                title: "Submission Failed",
                description: "There was an error submitting your form. Please try again or call us directly.",
                type: "error",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 pt-[120px] sm:pt-[140px] flex items-center justify-center">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <Card className="shadow-xl border-0">
                        <CardContent className="p-8 sm:p-12">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h1>
                            <p className="text-lg text-gray-600 mb-6">
                                Your solar quote request has been submitted successfully. Our Tesla Certified experts will review your
                                information and get back to you within 24 hours with a custom proposal.
                            </p>
                            <div className="space-y-4 text-left bg-gray-50 rounded-lg p-6">
                                <h3 className="font-semibold text-gray-900">What happens next?</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>We'll review your property details and energy usage</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Our team will design a custom solar solution for your home</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>You'll receive a detailed proposal with savings projections</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>We'll schedule a consultation to discuss your options</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8 p-4 bg-red-50 rounded-lg">
                                <p className="text-sm text-gray-600">
                                    <strong>Need immediate assistance?</strong> Call us at{" "}
                                    <a href="tel:7275550123" className="text-red-600 font-semibold">
                                        (727) 555-0123
                                    </a>
                                </p>
                            </div>
                            <Button onClick={() => setIsSubmitted(false)} className="mt-6 bg-red-600 hover:bg-red-700">
                                Submit Another Quote Request
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-[120px] sm:pt-[140px]">
            {toastMessage && (
                <div
                    className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md ${toastMessage.type === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                        }`}
                >
                    <div className="flex items-start space-x-3">
                        {toastMessage.type === "success" ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        ) : (
                            <div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center mt-0.5">
                                <span className="text-white text-xs font-bold">!</span>
                            </div>
                        )}
                        <div className="flex-1">
                            <h4 className={`font-semibold ${toastMessage.type === "success" ? "text-green-900" : "text-red-900"}`}>
                                {toastMessage.title}
                            </h4>
                            <p className={`text-sm ${toastMessage.type === "success" ? "text-green-700" : "text-red-700"}`}>
                                {toastMessage.description}
                            </p>
                        </div>
                        <button
                            onClick={() => setToastMessage(null)}
                            className={`${toastMessage.type === "success" ? "text-green-600 hover:text-green-800" : "text-red-600 hover:text-red-800"}`}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                {/* Header */}
                <ScrollReveal direction="fade">
                    <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">Get Your Free Solar Quote</h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover how much you can save with solar energy. Our Tesla Certified experts will provide a custom
                            proposal with no obligation.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                    {/* Main Form */}
                    <ScrollReveal direction="left" className="lg:col-span-2">
                        <Card className="shadow-xl border-0">
                            <CardHeader className="space-y-2">
                                <CardTitle className="text-2xl sm:text-3xl text-gray-900">Tell Us About Your Project</CardTitle>
                                <CardDescription className="text-base sm:text-lg text-gray-600">
                                    Fill out the form below and we&apos;ll get back to you within 24 hours with a custom solar proposal.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6 sm:space-y-8">
                                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                                    {/* Personal Information */}
                                    <ScrollReveal direction="up" delay={300}>
                                        <div className="space-y-4 sm:space-y-6">
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                                Personal Information
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                                                        First Name *
                                                    </Label>
                                                    <Input
                                                        id="firstName"
                                                        name="firstName"
                                                        type="text"
                                                        required
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                                                        placeholder="John"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                                                        Last Name *
                                                    </Label>
                                                    <Input
                                                        id="lastName"
                                                        name="lastName"
                                                        type="text"
                                                        required
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                                                        placeholder="Smith"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                                        Email Address *
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                                        Phone Number *
                                                    </Label>
                                                    <Input
                                                        id="phone"
                                                        name="phone"
                                                        type="tel"
                                                        required
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                                                        placeholder="(727) 555-0123"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    {/* Property Information */}
                                    <ScrollReveal direction="up" delay={500}>
                                        <div className="space-y-4 sm:space-y-6">
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                                Property Information
                                            </h3>
                                            <div className="space-y-2">
                                                <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                                                    Property Address *
                                                </Label>
                                                <Input
                                                    id="address"
                                                    name="address"
                                                    type="text"
                                                    required
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                                                    placeholder="123 Main Street, Tampa, FL 33601"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="propertyType" className="text-sm font-medium text-gray-700">
                                                        Property Type *
                                                    </Label>
                                                    <Select
                                                        name="propertyType"
                                                        required
                                                        value={formData.propertyType}
                                                        onValueChange={(value) => handleSelectChange("propertyType", value)}
                                                    >
                                                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                                                            <SelectValue placeholder="Select property type" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="residential">Residential Home</SelectItem>
                                                            <SelectItem value="commercial">Commercial Building</SelectItem>
                                                            <SelectItem value="industrial">Industrial Facility</SelectItem>
                                                            <SelectItem value="other">Other</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="roofType" className="text-sm font-medium text-gray-700">
                                                        Roof Type
                                                    </Label>
                                                    <Select
                                                        name="roofType"
                                                        value={formData.roofType}
                                                        onValueChange={(value) => handleSelectChange("roofType", value)}
                                                    >
                                                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                                                            <SelectValue placeholder="Select roof type" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="asphalt">Asphalt Shingles</SelectItem>
                                                            <SelectItem value="tile">Tile</SelectItem>
                                                            <SelectItem value="metal">Metal</SelectItem>
                                                            <SelectItem value="flat">Flat Roof</SelectItem>
                                                            <SelectItem value="other">Other</SelectItem>
                                                            <SelectItem value="unknown">Not Sure</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    {/* Energy Information */}
                                    <ScrollReveal direction="up" delay={700}>
                                        <div className="space-y-4 sm:space-y-6">
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                                Energy Usage
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="monthlyBill" className="text-sm font-medium text-gray-700">
                                                        Average Monthly Electric Bill
                                                    </Label>
                                                    <Select
                                                        name="monthlyBill"
                                                        value={formData.monthlyBill}
                                                        onValueChange={(value) => handleSelectChange("monthlyBill", value)}
                                                    >
                                                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                                                            <SelectValue placeholder="Select bill range" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="under-100">Under $100</SelectItem>
                                                            <SelectItem value="100-150">$100 - $150</SelectItem>
                                                            <SelectItem value="150-200">$150 - $200</SelectItem>
                                                            <SelectItem value="200-300">$200 - $300</SelectItem>
                                                            <SelectItem value="300-400">$300 - $400</SelectItem>
                                                            <SelectItem value="over-400">Over $400</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="urgency" className="text-sm font-medium text-gray-700">
                                                        Timeline for Installation
                                                    </Label>
                                                    <Select
                                                        name="urgency"
                                                        value={formData.urgency}
                                                        onValueChange={(value) => handleSelectChange("urgency", value)}
                                                    >
                                                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                                                            <SelectValue placeholder="Select timeline" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="asap">As soon as possible</SelectItem>
                                                            <SelectItem value="1-3-months">1-3 months</SelectItem>
                                                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                                                            <SelectItem value="6-12-months">6-12 months</SelectItem>
                                                            <SelectItem value="just-researching">Just researching</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    {/* Solar Preferences */}
                                    <ScrollReveal direction="up" delay={900}>
                                        <div className="space-y-4 sm:space-y-6">
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                                Solar Preferences
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="solarType" className="text-sm font-medium text-gray-700">
                                                        Interested Solar Solution
                                                    </Label>
                                                    <Select
                                                        name="solarType"
                                                        value={formData.solarType}
                                                        onValueChange={(value) => handleSelectChange("solarType", value)}
                                                    >
                                                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                                                            <SelectValue placeholder="Select solution type" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="rooftop-panels">Rooftop Solar Panels</SelectItem>
                                                            <SelectItem value="tesla-solar-roof">Tesla Solar Roof</SelectItem>
                                                            <SelectItem value="solar-battery">Solar + Battery Storage</SelectItem>
                                                            <SelectItem value="solar-pergola">Solar Pergola</SelectItem>
                                                            <SelectItem value="battery-only">Battery Backup Only</SelectItem>
                                                            <SelectItem value="not-sure">Not Sure - Need Consultation</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="financing" className="text-sm font-medium text-gray-700">
                                                        Preferred Financing Option
                                                    </Label>
                                                    <Select
                                                        name="financing"
                                                        value={formData.financing}
                                                        onValueChange={(value) => handleSelectChange("financing", value)}
                                                    >
                                                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                                                            <SelectValue placeholder="Select financing" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="cash">Cash Purchase</SelectItem>
                                                            <SelectItem value="loan">Solar Loan</SelectItem>
                                                            <SelectItem value="lease">Solar Lease/PPA</SelectItem>
                                                            <SelectItem value="not-sure">Not Sure</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    {/* Additional Information */}
                                    <ScrollReveal direction="up" delay={1000}>
                                        <div className="space-y-4">
                                            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                                                Additional Information or Questions
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                                                placeholder="Tell us about any specific requirements, questions, or concerns you have about going solar..."
                                            />
                                        </div>
                                    </ScrollReveal>

                                    {/* Submit Button */}
                                    <ScrollReveal direction="up" delay={1100}>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isSubmitting}
                                            className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-4 h-auto font-semibold disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    Submitting Your Quote Request...
                                                </>
                                            ) : (
                                                "Get My Free Solar Quote"
                                            )}
                                        </Button>
                                    </ScrollReveal>
                                </form>
                            </CardContent>
                        </Card>
                    </ScrollReveal>

                    {/* Sidebar */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Benefits Card */}
                        <ScrollReveal direction="right">
                            <Card className="shadow-xl border-0">
                                <CardHeader>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Why Choose Relentless Energy?</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 sm:space-y-6">
                                    <ScrollReveal direction="up" delay={300}>
                                        <div className="flex items-start space-x-3">
                                            <Award className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Tesla Certified Installer</h4>
                                                <p className="text-sm text-gray-600">
                                                    Official Tesla partner with certified technicians and full warranty coverage.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={400}>
                                        <div className="flex items-start space-x-3">
                                            <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">25-Year Warranty</h4>
                                                <p className="text-sm text-gray-600">
                                                    Comprehensive warranty on panels, inverters, and workmanship for peace of mind.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={500}>
                                        <div className="flex items-start space-x-3">
                                            <Calculator className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">$0 Down Financing</h4>
                                                <p className="text-sm text-gray-600">
                                                    Multiple financing options available with competitive rates and no money down.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={600}>
                                        <div className="flex items-start space-x-3">
                                            <Home className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Local Tampa Bay Experts</h4>
                                                <p className="text-sm text-gray-600">
                                                    Florida-based team with deep knowledge of local regulations and weather conditions.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={700}>
                                        <div className="flex items-start space-x-3">
                                            <Zap className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Same Day Response</h4>
                                                <p className="text-sm text-gray-600">
                                                    We respond to all quote requests within 24 hours, usually the same day.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={800}>
                                        <div className="flex items-start space-x-3">
                                            <DollarSign className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Guaranteed Savings</h4>
                                                <p className="text-sm text-gray-600">
                                                    We guarantee your solar system will save you money or we&apos;ll make it right.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        {/* Contact Card */}
                        <ScrollReveal direction="right" delay={200}>
                            <Card className="shadow-xl border-0 bg-red-50">
                                <CardHeader>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Prefer to Talk?</CardTitle>
                                    <CardDescription className="text-base text-gray-600">
                                        Call us directly for immediate assistance
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <ScrollReveal direction="up" delay={900}>
                                        <div className="flex items-center space-x-3">
                                            <Phone className="h-5 w-5 text-red-600" />
                                            <div>
                                                <p className="font-semibold text-gray-900">(727) 555-0123</p>
                                                <p className="text-sm text-gray-600">Mon-Fri 8AM-6PM, Sat 9AM-4PM</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={1000}>
                                        <div className="flex items-center space-x-3">
                                            <Mail className="h-5 w-5 text-red-600" />
                                            <div>
                                                <p className="font-semibold text-gray-900">jfeliz@relentlessenergy.org</p>
                                                <p className="text-sm text-gray-600">Email response within 2 hours</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={1100}>
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="h-5 w-5 text-red-600 mt-1" />
                                            <div>
                                                <p className="font-semibold text-gray-900">Tampa Bay Service Area</p>
                                                <p className="text-sm text-gray-600">
                                                    Serving Tampa, St. Petersburg, Clearwater, Largo, and surrounding areas
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={1200}>
                                        <div className="flex items-center space-x-3">
                                            <Clock className="h-5 w-5 text-red-600" />
                                            <div>
                                                <p className="font-semibold text-gray-900">24-Hour Quote Guarantee</p>
                                                <p className="text-sm text-gray-600">Custom proposal delivered within 24 hours</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Bottom CTA */}
                <ScrollReveal direction="up" delay={300}>
                    <div className="mt-12 sm:mt-16 text-center">
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Ready to Start Saving with Solar?
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                                Join thousands of Florida homeowners and businesses who are saving money and helping the environment
                                with solar energy. Get your free, no-obligation quote today!
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <span className="text-sm font-medium text-gray-700">No Obligation</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <span className="text-sm font-medium text-gray-700">Same Day Response</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <span className="text-sm font-medium text-gray-700">Tesla Certified</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <span className="text-sm font-medium text-gray-700">25-Year Warranty</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    )
}
