import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Phone, Mail, MapPin, Clock, Shield, Award, Calculator, Home, Zap, DollarSign } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Get Your Free Solar Quote | Relentless Energy Tampa Bay",
    description:
        "Get a free, no-obligation solar quote for your Tampa Bay home or business. Tesla Certified installer with 25-year warranty. Same day response guaranteed.",
    keywords:
        "free solar quote Tampa Bay, solar estimate Florida, solar consultation St Petersburg, solar pricing Clearwater, solar cost Largo, Tesla solar quote Florida",
    alternates: {
        canonical: "/free-quote",
    },
}

export default function FreeQuotePage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-[120px] sm:pt-[140px]">
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
                                <form className="space-y-6 sm:space-y-8">
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
                                                    className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                                                    placeholder="123 Main Street, Tampa, FL 33601"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="propertyType" className="text-sm font-medium text-gray-700">
                                                        Property Type *
                                                    </Label>
                                                    <Select name="propertyType" required>
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
                                                    <Select name="roofType">
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
                                                    <Select name="monthlyBill">
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
                                                    <Select name="urgency">
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
                                                    <Select name="solarType">
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
                                                    <Select name="financing">
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
                                            className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-4 h-auto font-semibold"
                                        >
                                            Get My Free Solar Quote
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
                                                <p className="font-semibold text-gray-900">info@relentlessenergy.com</p>
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
