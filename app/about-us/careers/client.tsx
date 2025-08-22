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
    Users,
    Briefcase,
    TrendingUp,
    Heart,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

interface FormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    position: string
    experience: string
    availability: string
    education: string
    previousIndustry: string
    desiredSalary: string
    message: string
    resume: string
}

export default function CareersClient() {
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
        position: "",
        experience: "",
        availability: "",
        education: "",
        previousIndustry: "",
        desiredSalary: "",
        message: "",
        resume: "",
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
                body: JSON.stringify({
                    ...formData,
                    formType: "career",
                }),
            })

            if (!response.ok) {
                throw new Error("Failed to submit application")
            }

            setIsSubmitted(true)
            setToastMessage({
                title: "Application Submitted!",
                description: "We'll review your application and get back to you within 3-5 business days.",
                type: "success",
            })

            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: "",
                position: "",
                experience: "",
                availability: "",
                education: "",
                previousIndustry: "",
                desiredSalary: "",
                message: "",
                resume: "",
            })
        } catch (error) {
            setToastMessage({
                title: "Submission Failed",
                description: "There was an error submitting your application. Please try again or email us directly.",
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
                                Your job application has been submitted successfully. Our hiring team will review your
                                information and get back to you within 3-5 business days.
                            </p>
                            <div className="space-y-4 text-left bg-gray-50 rounded-lg p-6">
                                <h3 className="font-semibold text-gray-900">What happens next?</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Our HR team will review your application and qualifications</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>If selected, we'll schedule an initial phone screening</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>Qualified candidates will be invited for an in-person interview</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span>We'll discuss compensation, benefits, and next steps</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8 p-4 bg-red-50 rounded-lg">
                                <p className="text-sm text-gray-600">
                                    <strong>Questions about your application?</strong> Contact us at{" "}
                                    <a href="mailto:jfeliz@relentlessenergy.org" className="text-red-600 font-semibold">
                                        jfeliz@relentlessenergy.org
                                    </a>
                                </p>
                            </div>
                            <Button onClick={() => setIsSubmitted(false)} className="mt-6 bg-red-600 hover:bg-red-700">
                                Submit Another Application
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
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">Join Our Team</h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Build your career with Florida&apos;s premier Tesla Certified solar installation company.
                            We&apos;re growing fast and looking for passionate people to join our mission.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Available Positions */}
                <ScrollReveal direction="up" delay={200}>
                    <div className="mb-12 sm:mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Current Openings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                                <CardContent className="p-6">
                                    <Briefcase className="h-8 w-8 text-red-600 mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Closer</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Close qualified solar leads and help customers make the decision to go solar.
                                    </p>
                                    <div className="space-y-1 text-xs text-gray-500">
                                        <p>• Experience in sales closing</p>
                                        <p>• Strong communication skills</p>
                                        <p>• Commission-based earnings</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                                <CardContent className="p-6">
                                    <Users className="h-8 w-8 text-blue-600 mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Deal Facilitator</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Coordinate between sales, installation, and customers to ensure smooth processes.
                                    </p>
                                    <div className="space-y-1 text-xs text-gray-500">
                                        <p>• Project management skills</p>
                                        <p>• Customer service experience</p>
                                        <p>• Detail-oriented approach</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                                <CardContent className="p-6">
                                    <TrendingUp className="h-8 w-8 text-green-600 mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Professional</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Generate leads, conduct consultations, and educate customers about solar benefits.
                                    </p>
                                    <div className="space-y-1 text-xs text-gray-500">
                                        <p>• Solar industry experience preferred</p>
                                        <p>• Self-motivated and driven</p>
                                        <p>• Excellent presentation skills</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                                <CardContent className="p-6">
                                    <Heart className="h-8 w-8 text-purple-600 mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Intern</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Learn the solar industry from the ground up with hands-on experience and mentorship.
                                    </p>
                                    <div className="space-y-1 text-xs text-gray-500">
                                        <p>• Current student or recent graduate</p>
                                        <p>• Interest in renewable energy</p>
                                        <p>• Eager to learn and grow</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
                    {/* Main Form */}
                    <ScrollReveal direction="left" className="lg:col-span-2">
                        <Card className="shadow-xl border-0">
                            <CardHeader className="space-y-2">
                                <CardTitle className="text-2xl sm:text-3xl text-gray-900">Apply Now</CardTitle>
                                <CardDescription className="text-base sm:text-lg text-gray-600">
                                    Tell us about yourself and which position interests you. We&apos;ll get back to you within 3-5 business days.
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
                                                        placeholder="(813) 761-1631"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                                                    Address
                                                </Label>
                                                <Input
                                                    id="address"
                                                    name="address"
                                                    type="text"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                                                    placeholder="123 Main Street, Tampa, FL 33601"
                                                />
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    {/* Position Information */}
                                    <ScrollReveal direction="up" delay={500}>
                                        <div className="space-y-4 sm:space-y-6">
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                                Position Information
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="position" className="text-sm font-medium text-gray-700">
                                                        Position of Interest *
                                                    </Label>
                                                    <Select
                                                        name="position"
                                                        required
                                                        value={formData.position}
                                                        onValueChange={(value) => handleSelectChange("position", value)}
                                                    >
                                                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                                                            <SelectValue placeholder="Select position" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="closer">Closer</SelectItem>
                                                            <SelectItem value="deal-facilitator">Deal Facilitator</SelectItem>
                                                            <SelectItem value="sales-professional">Sales Professional</SelectItem>
                                                            <SelectItem value="intern">Intern</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
                                                        Years of Experience
                                                    </Label>
                                                    <Select
                                                        name="experience"
                                                        value={formData.experience}
                                                        onValueChange={(value) => handleSelectChange("experience", value)}
                                                    >
                                                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                                                            <SelectValue placeholder="Select experience level" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="entry">Entry Level (0-1 years)</SelectItem>
                                                            <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                                                            <SelectItem value="mid">Mid-Level (3-5 years)</SelectItem>
                                                            <SelectItem value="senior">Senior (5+ years)</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="availability" className="text-sm font-medium text-gray-700">
                                                        Availability
                                                    </Label>
                                                    <Select
                                                        name="availability"
                                                        value={formData.availability}
                                                        onValueChange={(value) => handleSelectChange("availability", value)}
                                                    >
                                                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                                                            <SelectValue placeholder="When can you start?" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="immediately">Immediately</SelectItem>
                                                            <SelectItem value="2-weeks">2 Weeks Notice</SelectItem>
                                                            <SelectItem value="1-month">1 Month</SelectItem>
                                                            <SelectItem value="2-months">2+ Months</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="education" className="text-sm font-medium text-gray-700">
                                                        Education Level
                                                    </Label>
                                                    <Select
                                                        name="education"
                                                        value={formData.education}
                                                        onValueChange={(value) => handleSelectChange("education", value)}
                                                    >
                                                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                                                            <SelectValue placeholder="Select education level" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="high-school">High School</SelectItem>
                                                            <SelectItem value="some-college">Some College</SelectItem>
                                                            <SelectItem value="associates">Associate&apos;s Degree</SelectItem>
                                                            <SelectItem value="bachelors">Bachelor&apos;s Degree</SelectItem>
                                                            <SelectItem value="masters">Master&apos;s Degree</SelectItem>
                                                            <SelectItem value="other">Other</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    {/* Experience Information */}
                                    <ScrollReveal direction="up" delay={700}>
                                        <div className="space-y-4 sm:space-y-6">
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                                Background
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="previousIndustry" className="text-sm font-medium text-gray-700">
                                                        Previous Industry Experience
                                                    </Label>
                                                    <Select
                                                        name="previousIndustry"
                                                        value={formData.previousIndustry}
                                                        onValueChange={(value) => handleSelectChange("previousIndustry", value)}
                                                    >
                                                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                                                            <SelectValue placeholder="Select industry background" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="solar">Solar/Renewable Energy</SelectItem>
                                                            <SelectItem value="sales">Sales</SelectItem>
                                                            <SelectItem value="construction">Construction</SelectItem>
                                                            <SelectItem value="electrical">Electrical</SelectItem>
                                                            <SelectItem value="customer-service">Customer Service</SelectItem>
                                                            <SelectItem value="project-management">Project Management</SelectItem>
                                                            <SelectItem value="marketing">Marketing</SelectItem>
                                                            <SelectItem value="other">Other</SelectItem>
                                                            <SelectItem value="student">Student/No Experience</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="desiredSalary" className="text-sm font-medium text-gray-700">
                                                        Desired Salary Range
                                                    </Label>
                                                    <Select
                                                        name="desiredSalary"
                                                        value={formData.desiredSalary}
                                                        onValueChange={(value) => handleSelectChange("desiredSalary", value)}
                                                    >
                                                        <SelectTrigger className="h-12 text-base border-gray-300 focus:border-red-500 focus:ring-red-500">
                                                            <SelectValue placeholder="Select salary range" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="30k-40k">$30,000 - $40,000</SelectItem>
                                                            <SelectItem value="40k-50k">$40,000 - $50,000</SelectItem>
                                                            <SelectItem value="50k-60k">$50,000 - $60,000</SelectItem>
                                                            <SelectItem value="60k-75k">$60,000 - $75,000</SelectItem>
                                                            <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                                                            <SelectItem value="100k+">$100,000+</SelectItem>
                                                            <SelectItem value="commission">Commission-Based</SelectItem>
                                                            <SelectItem value="negotiate">Open to Negotiation</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    {/* Resume and Cover Letter */}
                                    <ScrollReveal direction="up" delay={900}>
                                        <div className="space-y-4">
                                            <Label htmlFor="resume" className="text-sm font-medium text-gray-700">
                                                Resume/CV Link or Summary
                                            </Label>
                                            <Textarea
                                                id="resume"
                                                name="resume"
                                                rows={3}
                                                value={formData.resume}
                                                onChange={handleInputChange}
                                                className="text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                                                placeholder="Please provide a link to your resume (Google Drive, LinkedIn, etc.) or a brief summary of your background..."
                                            />
                                        </div>
                                    </ScrollReveal>

                                    {/* Additional Information */}
                                    <ScrollReveal direction="up" delay={1000}>
                                        <div className="space-y-4">
                                            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                                                Cover Letter / Why You Want to Join Us
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                                                placeholder="Tell us why you're interested in working at Relentless Energy and what you can bring to our team..."
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
                                                    Submitting Your Application...
                                                </>
                                            ) : (
                                                "Submit Application"
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
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Why Work With Us?</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 sm:space-y-6">
                                    <ScrollReveal direction="up" delay={300}>
                                        <div className="flex items-start space-x-3">
                                            <Award className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Tesla Certified Team</h4>
                                                <p className="text-sm text-gray-600">
                                                    Work with the latest technology and gain Tesla certification training.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={400}>
                                        <div className="flex items-start space-x-3">
                                            <DollarSign className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Competitive Compensation</h4>
                                                <p className="text-sm text-gray-600">
                                                    Base salary plus commission structure with unlimited earning potential.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={500}>
                                        <div className="flex items-start space-x-3">
                                            <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Full Benefits Package</h4>
                                                <p className="text-sm text-gray-600">
                                                    Health insurance, dental, vision, 401k, and paid time off.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={600}>
                                        <div className="flex items-start space-x-3">
                                            <TrendingUp className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Growth Opportunities</h4>
                                                <p className="text-sm text-gray-600">
                                                    Fast-growing company with plenty of advancement opportunities.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={700}>
                                        <div className="flex items-start space-x-3">
                                            <Home className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Flexible Schedule</h4>
                                                <p className="text-sm text-gray-600">
                                                    Work-life balance with flexible hours and remote work options.
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={800}>
                                        <div className="flex items-start space-x-3">
                                            <Zap className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Make an Impact</h4>
                                                <p className="text-sm text-gray-600">
                                                    Help Florida families save money and protect the environment.
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
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Questions?</CardTitle>
                                    <CardDescription className="text-base text-gray-600">
                                        Contact our HR team for more information
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <ScrollReveal direction="up" delay={900}>
                                        <div className="flex items-center space-x-3">
                                            <Phone className="h-5 w-5 text-red-600" />
                                            <div>
                                                <p className="font-semibold text-gray-900">(813) 761-1631</p>
                                                <p className="text-sm text-gray-600">Mon-Fri 8AM-6PM</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={1000}>
                                        <div className="flex items-center space-x-3">
                                            <Mail className="h-5 w-5 text-red-600" />
                                            <div>
                                                <p className="font-semibold text-gray-900">jfeliz@relentlessenergy.org</p>
                                                <p className="text-sm text-gray-600">HR & Hiring Inquiries</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={1100}>
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="h-5 w-5 text-red-600 mt-1" />
                                            <div>
                                                <p className="font-semibold text-gray-900">Tampa Bay Office</p>
                                                <p className="text-sm text-gray-600">
                                                    625 E Twiggs St Ste 110a<br />
                                                    Tampa, FL 33602
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal direction="up" delay={1200}>
                                        <div className="flex items-center space-x-3">
                                            <Clock className="h-5 w-5 text-red-600" />
                                            <div>
                                                <p className="font-semibold text-gray-900">3-5 Day Response</p>
                                                <p className="text-sm text-gray-600">We review all applications promptly</p>
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
                                Ready to Power Your Career with Solar?
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                                Join our growing team and help Florida families transition to clean, renewable energy while building
                                a rewarding career in one of the fastest-growing industries.
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <span className="text-sm font-medium text-gray-700">Equal Opportunity Employer</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <span className="text-sm font-medium text-gray-700">Competitive Benefits</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <span className="text-sm font-medium text-gray-700">Career Growth</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <span className="text-sm font-medium text-gray-700">Tesla Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    )
}
