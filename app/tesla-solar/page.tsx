"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Phone,
    CheckCircle,
    Zap,
    Shield,
    Smartphone,
    Battery,
    TrendingUp,
    Sun,
    Home,
    Wrench,
    FileCheck,
    Target,
    Sparkles,
    Award,
    Star,
    DollarSign,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function TeslaSolarPage() {
    const [currentStep, setCurrentStep] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % 4)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const steps = [
        { icon: Home, title: "Site Assessment", description: "Professional evaluation of your property" },
        { icon: FileCheck, title: "Custom Design", description: "Tesla engineers design your system" },
        { icon: Wrench, title: "Installation", description: "Certified Tesla installers handle everything" },
        { icon: Zap, title: "Activation", description: "System goes live and starts saving money" },
    ]

    const features = [
        {
            icon: Sun,
            title: "Tesla Solar Panels",
            description:
                "Industry-leading efficiency with sleek, low-profile design that complements your home's architecture.",
            color: "from-red-500 to-orange-500",
            bgColor: "from-red-50 to-orange-50",
            borderColor: "border-red-200",
        },
        {
            icon: Battery,
            title: "Powerwall Integration",
            description: "Seamlessly integrates with Tesla Powerwall for complete energy independence and backup power.",
            color: "from-orange-500 to-red-500",
            bgColor: "from-orange-50 to-red-50",
            borderColor: "border-orange-200",
        },
        {
            icon: Smartphone,
            title: "Tesla App Control",
            description: "Monitor and control your entire energy system from anywhere with the intuitive Tesla mobile app.",
            color: "from-red-600 to-orange-500",
            bgColor: "from-red-50 to-orange-50",
            borderColor: "border-red-200",
        },
        {
            icon: Shield,
            title: "25-Year Warranty",
            description: "Comprehensive warranty coverage with Tesla's commitment to long-term performance and reliability.",
            color: "from-orange-600 to-red-600",
            bgColor: "from-orange-50 to-red-50",
            borderColor: "border-orange-200",
        },
    ]

    return (
        <>
            {/* Animated Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[140px] pb-20">
                {/* Animated Dynamic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900">
                    {/* Large Animated Gradient Orbs */}
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-red-400/30 to-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-400/25 to-red-400/25 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                    ></div>

                    {/* Medium Floating Orbs */}
                    <div
                        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-red-300/20 to-orange-300/20 rounded-full blur-2xl animate-bounce"
                        style={{ animationDuration: "3s", animationDelay: "0.2s" }}
                    ></div>
                    <div
                        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-orange-300/15 to-yellow-300/15 rounded-full blur-2xl animate-bounce"
                        style={{ animationDuration: "4s", animationDelay: "1.5s" }}
                    ></div>
                    <div
                        className="absolute top-3/4 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-300/25 to-red-300/25 rounded-full blur-xl animate-bounce"
                        style={{ animationDuration: "2.5s", animationDelay: "0.8s" }}
                    ></div>

                    {/* Small Floating Particles */}
                    <div
                        className="absolute top-32 left-1/2 w-4 h-4 bg-red-400/40 rounded-full animate-ping"
                        style={{ animationDelay: "0.3s" }}
                    ></div>
                    <div
                        className="absolute bottom-40 right-1/3 w-3 h-3 bg-orange-400/50 rounded-full animate-ping"
                        style={{ animationDelay: "1.2s" }}
                    ></div>
                    <div
                        className="absolute top-2/3 left-16 w-2 h-2 bg-yellow-400/60 rounded-full animate-ping"
                        style={{ animationDelay: "0.7s" }}
                    ></div>
                    <div
                        className="absolute top-40 right-40 w-3 h-3 bg-red-300/40 rounded-full animate-ping"
                        style={{ animationDelay: "2s" }}
                    ></div>
                    <div
                        className="absolute bottom-32 left-1/4 w-2 h-2 bg-orange-300/50 rounded-full animate-ping"
                        style={{ animationDelay: "1.8s" }}
                    ></div>

                    {/* Animated Geometric Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10">
                        {/* Rotating Squares */}
                        <div
                            className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-lg animate-spin"
                            style={{ animationDuration: "20s" }}
                        ></div>
                        <div
                            className="absolute bottom-32 right-32 w-24 h-24 border-2 border-white/15 rounded-lg animate-spin"
                            style={{ animationDuration: "15s", animationDirection: "reverse" }}
                        ></div>
                        <div
                            className="absolute top-1/2 left-16 w-16 h-16 border-2 border-white/25 rounded-lg animate-spin"
                            style={{ animationDuration: "25s" }}
                        ></div>

                        {/* Floating Circles */}
                        <div
                            className="absolute top-1/3 right-1/4 w-20 h-20 border border-white/10 rounded-full animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                        ></div>
                        <div
                            className="absolute bottom-1/4 left-1/3 w-28 h-28 border border-white/15 rounded-full animate-pulse"
                            style={{ animationDelay: "1.2s" }}
                        ></div>

                        {/* Moving Lines */}
                        <div
                            className="absolute top-1/4 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"
                            style={{ animationDelay: "0.8s" }}
                        ></div>
                        <div
                            className="absolute bottom-1/3 right-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"
                            style={{ animationDelay: "1.5s" }}
                        ></div>
                    </div>

                    {/* Subtle Moving Gradient Overlay */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent animate-pulse"
                        style={{ animationDuration: "4s" }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
                    <div className="text-center">
                        {/* Floating Badge */}
                        <ScrollReveal direction="up">
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl mb-8">
                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
                                <span className="text-white font-semibold text-sm sm:text-base">Tesla Solar Technology</span>
                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
                            </div>
                        </ScrollReveal>

                        {/* Hero Title with Gradient Text */}
                        <ScrollReveal direction="up" delay={200}>
                            <div className="space-y-6 sm:space-y-8 mb-12">
                                <h1 className="font-black">
                                    <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                                        Tesla Solar
                                    </span>
                                    <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight pb-4">
                                        Revolution
                                    </span>
                                </h1>
                                <div className="max-w-4xl mx-auto px-4">
                                    <p className="text-gray-200 leading-relaxed font-light text-base sm:text-lg md:text-xl lg:text-2xl">
                                        Experience the future of solar energy with Tesla&apos;s cutting-edge panels. Sleek design meets maximum
                                        efficiency for the ultimate clean energy solution.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Floating Action Buttons */}
                        <ScrollReveal direction="up" delay={400}>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto px-4 mb-16">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 border-2 border-orange-400/50"
                                >
                                    <Link href="/free-quote" className="flex items-center justify-center">
                                        <Target className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                                        <span>Get Tesla Quote</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-2xl bg-transparent hover:scale-105 transition-all duration-300"
                                >
                                    <Link href="tel:727-555-0123" className="flex items-center justify-center">
                                        <Phone className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                                        <span>(727) 555-0123</span>
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>

                        {/* Floating Stats Cards */}
                        <ScrollReveal direction="up" delay={600}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                                {[
                                    { number: "22.8%", label: "Peak Efficiency", icon: TrendingUp },
                                    { number: "25", label: "Year Warranty", icon: Shield },
                                    { number: "$0", label: "Down Available", icon: DollarSign },
                                    { number: "100%", label: "Tesla Quality", icon: Star },
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                                    >
                                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mx-auto mb-2" />
                                        <div className="text-xl sm:text-2xl font-bold text-white">{stat.number}</div>
                                        <div className="text-xs sm:text-sm text-gray-300 leading-tight">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Tesla Features with Company Colors */}
            <section className="py-32 bg-gradient-to-br from-gray-50 to-red-50 relative overflow-hidden">
                {/* Background Pattern with Company Colors */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.15)_1px,transparent_0)] bg-[length:60px_60px]"></div>
                </div>

                {/* Subtle Floating Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-32 h-32 border-2 border-red-100 rotate-45 rounded-lg opacity-30"></div>
                    <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-orange-100 rotate-12 rounded-full opacity-40"></div>
                    <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-red-200 -rotate-12 opacity-25"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-6 mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-2 border-red-100 rounded-full shadow-lg">
                                <Zap className="w-5 h-5 text-red-500" />
                                <span className="text-red-700 font-semibold">Tesla Technology</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                                Why Choose
                                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent pb-2">
                                    Tesla Solar?
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Tesla solar panels combine cutting-edge technology with sleek design to deliver maximum energy
                                production and seamless integration with your home.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Tesla Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 200}>
                                <div className="group relative h-full">
                                    {/* Subtle Glow Effect */}
                                    <div
                                        className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                                    ></div>

                                    <Card
                                        className={`relative bg-gradient-to-br ${feature.bgColor} border-2 ${feature.borderColor} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col`}
                                    >
                                        <CardHeader className="text-center pb-4 flex-shrink-0">
                                            <div
                                                className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                            >
                                                <feature.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                                        </CardHeader>

                                        <CardContent className="flex-grow flex flex-col justify-center">
                                            <CardDescription className="text-gray-700 text-center leading-relaxed">
                                                {feature.description}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation Process with Company Colors */}
            <section className="py-32 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.15)_1px,transparent_0)] bg-[length:60px_60px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-6 mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-2 border-red-100 rounded-full shadow-lg">
                                <Wrench className="w-5 h-5 text-red-500" />
                                <span className="text-red-700 font-semibold">Installation Process</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                                Simple Tesla
                                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent pb-2">
                                    Installation
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From initial consultation to system activation, our Tesla-certified team handles every detail of your
                                solar installation.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Process Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 200}>
                                <div
                                    className={`relative group ${currentStep === index ? "scale-105" : ""} transition-all duration-500`}
                                >
                                    {/* Step Card */}
                                    <div
                                        className={`bg-gradient-to-br ${currentStep === index
                                            ? "from-red-50 to-orange-50 border-red-200 shadow-2xl"
                                            : "from-gray-50 to-white border-gray-200 shadow-lg"
                                            } border-2 rounded-3xl p-8 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col`}
                                    >
                                        {/* Step Number */}
                                        <div
                                            className={`w-12 h-12 rounded-full ${currentStep === index
                                                ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                                                : "bg-gray-200 text-gray-600"
                                                } flex items-center justify-center font-bold text-lg mx-auto mb-6 transition-all duration-500`}
                                        >
                                            {index + 1}
                                        </div>

                                        {/* Step Icon */}
                                        <div
                                            className={`w-16 h-16 rounded-full ${currentStep === index ? "bg-gradient-to-r from-red-500 to-orange-500" : "bg-gray-300"
                                                } flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110`}
                                        >
                                            <step.icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Step Content */}
                                        <div className="flex-grow flex flex-col justify-center">
                                            <h3
                                                className={`text-xl font-bold mb-4 ${currentStep === index ? "text-gray-900" : "text-gray-700"
                                                    } transition-colors duration-500`}
                                            >
                                                {step.title}
                                            </h3>
                                            <p
                                                className={`${currentStep === index ? "text-gray-700" : "text-gray-600"
                                                    } leading-relaxed transition-colors duration-500`}
                                            >
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Connection Line (hidden on mobile) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-red-300 to-orange-300 transform -translate-y-1/2 z-10"></div>
                                    )}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <ScrollReveal direction="up" delay={800}>
                        <div className="text-center mt-16">
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
                                Ready to experience the Tesla difference? Get your personalized quote today.
                            </p>
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                <Link href="/free-quote">
                                    Start Tesla Installation
                                    <Target className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Company-Themed CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 relative overflow-hidden">
                {/* Company Color Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-yellow-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

                    {/* Geometric Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-20 w-24 h-24 border-2 border-red-300/30 rotate-45 rounded-lg"></div>
                        <div className="absolute bottom-32 right-32 w-16 h-16 border-2 border-orange-300/30 rotate-12 rounded-full"></div>
                        <div className="absolute top-1/2 right-20 w-12 h-12 border-2 border-yellow-300/30 -rotate-12"></div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <ScrollReveal direction="up">
                        <div className="space-y-8">
                            {/* Header with Company Colors */}
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                                    <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                                    <span className="text-white font-semibold text-sm">Tesla Solar Awaits</span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                                    Experience Tesla
                                    <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent pb-4">
                                        Solar Excellence
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                                    Join the solar revolution with Tesla&apos;s cutting-edge technology. Get your free consultation and
                                    discover how much you can save!
                                </p>
                            </div>

                            {/* Action Buttons with Company Colors */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 border-2 border-orange-400/50"
                                >
                                    <Link href="/free-quote">
                                        <Target className="mr-2 h-5 w-5" />
                                        Get Tesla Quote
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md font-bold px-8 py-4 text-lg rounded-xl bg-transparent hover:scale-105 transition-all duration-300"
                                >
                                    <Link href="tel:727-555-0123">
                                        <Phone className="mr-2 h-5 w-5" />
                                        (727) 555-0123
                                    </Link>
                                </Button>
                            </div>

                            {/* Trust Indicators with Company Colors */}
                            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                                {[
                                    { icon: CheckCircle, text: "Tesla Certified", color: "text-green-300" },
                                    { icon: Shield, text: "25-Year Warranty", color: "text-blue-300" },
                                    { icon: Award, text: "Premium Quality", color: "text-yellow-300" },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm hover:bg-white/20 transition-all duration-300"
                                    >
                                        <item.icon className={`h-4 w-4 ${item.color}`} />
                                        <span className="text-white font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    )
}
