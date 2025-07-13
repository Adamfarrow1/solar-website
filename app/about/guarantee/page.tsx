import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollReveal from "@/components/scroll-reveal"

import CountUpStats from "@/components/count-up-stats"
import { Sparkles, Phone, Shield, CheckCircle, Clock, Wrench, Zap, Award, AlertTriangle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Solar Guarantee & Warranties | Relentless Energy",
    description:
        "Learn about our comprehensive solar guarantees and warranties. We stand behind our work with industry-leading protection for your investment.",
}

export default function GuaranteePage() {
    const guarantees = [
        {
            title: "25-Year Performance Guarantee",
            description: "Your solar panels are guaranteed to produce at least 80% of their rated capacity after 25 years.",
            icon: Zap,
            coverage: "Power Production",
            duration: "25 Years",
            details: [
                "Linear performance warranty",
                "Annual degradation < 0.5%",
                "Free panel replacement if underperforming",
                "Production monitoring included",
                "Proactive maintenance alerts",
            ],
        },
        {
            title: "10-Year Workmanship Warranty",
            description:
                "All installation work is guaranteed against defects in materials and workmanship for a full decade.",
            icon: Wrench,
            coverage: "Installation Quality",
            duration: "10 Years",
            details: [
                "All labor and installation work",
                "Roof penetrations and sealing",
                "Electrical connections",
                "Mounting system integrity",
                "Free repairs for covered issues",
            ],
        },
        {
            title: "Equipment Manufacturer Warranties",
            description: "Premium equipment comes with comprehensive manufacturer warranties for maximum protection.",
            icon: Shield,
            coverage: "Equipment Defects",
            duration: "10-25 Years",
            details: [
                "Solar panels: 25-year product warranty",
                "Inverters: 10-25 year warranty",
                "Tesla Powerwall: 10-year warranty",
                "Mounting hardware: 10-year warranty",
                "Direct manufacturer support",
            ],
        },
        {
            title: "Roof Integrity Guarantee",
            description: "We guarantee your roof will remain watertight and structurally sound after our installation.",
            icon: Shield,
            coverage: "Roof Protection",
            duration: "10 Years",
            details: [
                "Leak-free guarantee",
                "Structural integrity protection",
                "Professional roof assessment",
                "Insurance coordination",
                "Emergency repair response",
            ],
        },
    ]

    const serviceGuarantees = [
        {
            title: "24/7 System Monitoring",
            description: "Continuous monitoring ensures optimal performance and immediate issue detection.",
            icon: Clock,
            features: [
                "Real-time performance tracking",
                "Automatic alerts for issues",
                "Monthly performance reports",
                "Mobile app access",
                "Expert analysis and recommendations",
            ],
        },
        {
            title: "Lifetime Customer Support",
            description: "Our relationship doesn't end at installation. We provide ongoing support for life.",
            icon: Phone,
            features: [
                "Dedicated customer success team",
                "Technical support hotline",
                "Annual system health checks",
                "Maintenance reminders",
                "Upgrade consultation services",
            ],
        },
        {
            title: "Satisfaction Guarantee",
            description: "If you're not completely satisfied, we'll work to make it right or provide a full refund.",
            icon: Award,
            features: [
                "30-day satisfaction period",
                "Full refund if not satisfied",
                "No-questions-asked policy",
                "Professional system removal",
                "Roof restoration included",
            ],
        },
    ]

    const whatsCovered = [
        {
            category: "System Performance",
            items: [
                "Power production below guaranteed levels",
                "Inverter failures and replacements",
                "Panel defects and degradation",
                "Monitoring system malfunctions",
                "Electrical component failures",
            ],
        },
        {
            category: "Installation Quality",
            items: [
                "Roof leaks from penetrations",
                "Mounting system failures",
                "Electrical connection issues",
                "Code compliance problems",
                "Structural damage from installation",
            ],
        },
        {
            category: "Service & Support",
            items: [
                "Emergency repair services",
                "System troubleshooting",
                "Performance optimization",
                "Warranty claim processing",
                "Insurance claim assistance",
            ],
        },
    ]

    const whatsNotCovered = [
        "Damage from natural disasters (covered by homeowner's insurance)",
        "Normal wear and tear beyond warranty periods",
        "Damage from unauthorized modifications",
        "Issues caused by third-party equipment",
        "Cosmetic damage that doesn't affect performance",
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50 py-20 lg:py-32">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-100 opacity-20 blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-red-100 opacity-20 blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 h-60 w-60 rounded-full bg-red-50 opacity-30 blur-2xl animate-pulse delay-500"></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <ScrollReveal>
                            <Badge variant="outline" className="mb-6 border-red-200 bg-red-50 text-red-700 hover:bg-red-100">
                                <Sparkles className="mr-2 h-4 w-4" />
                                Industry-Leading Protection
                            </Badge>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                Our{" "}
                                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                                    Solar Guarantee
                                </span>{" "}
                                Protects Your Investment
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl">
                                We stand behind our work with comprehensive warranties and guarantees that protect your solar investment
                                for decades. Your peace of mind is our priority.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                                    <Link href="/free-quote">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Get Protected Quote
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                                >
                                    <Link href="/about/our-process">Learn Our Process</Link>
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Stats Preview */}
                    <ScrollReveal delay={0.4}>
                        <div className="mt-16">
                            <CountUpStats />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main Guarantees */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Comprehensive Protection Coverage</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Our multi-layered guarantee system ensures your solar investment is protected from every angle.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {guarantees.map((guarantee, index) => (
                            <ScrollReveal key={guarantee.title} delay={index * 0.1}>
                                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-8">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                                <guarantee.icon className="h-8 w-8 text-red-600" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{guarantee.title}</h3>
                                                <div className="flex gap-4 mb-3">
                                                    <Badge variant="outline" className="border-red-200 text-red-700">
                                                        {guarantee.coverage}
                                                    </Badge>
                                                    <Badge variant="secondary">{guarantee.duration}</Badge>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-6">{guarantee.description}</p>

                                        <div className="space-y-3">
                                            {guarantee.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="flex items-center gap-3">
                                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm text-gray-600">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Guarantees */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Service & Support Guarantees</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Beyond equipment warranties, we guarantee exceptional service and support throughout your solar journey.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {serviceGuarantees.map((service, index) => (
                            <ScrollReveal key={service.title} delay={index * 0.1}>
                                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                                            <service.icon className="h-8 w-8 text-red-600" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                                        <p className="text-gray-600 mb-6">{service.description}</p>
                                        <div className="space-y-2 text-left">
                                            {service.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center gap-2">
                                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage Details */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">What's Covered</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Detailed breakdown of what our comprehensive guarantee covers.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {whatsCovered.map((category, index) => (
                            <ScrollReveal key={category.category} delay={index * 0.1}>
                                <Card className="h-full">
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                            {category.category}
                                        </h3>
                                        <div className="space-y-3">
                                            {category.items.map((item, itemIndex) => (
                                                <div key={itemIndex} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                                                    <span className="text-sm text-gray-600">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* What's Not Covered */}
                    <ScrollReveal>
                        <Card className="bg-yellow-50 border-yellow-200">
                            <CardContent className="p-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                                    What's Not Covered
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {whatsNotCovered.map((item, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                </div>
            </section>

            {/* Warranty Process */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Simple Warranty Process</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                If you ever need warranty service, our streamlined process makes it easy to get help.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: 1, title: "Contact Us", description: "Call our warranty hotline or submit online" },
                                { step: 2, title: "Assessment", description: "We diagnose the issue remotely or on-site" },
                                { step: 3, title: "Resolution", description: "We repair or replace covered components" },
                                { step: 4, title: "Follow-up", description: "We ensure everything is working perfectly" },
                            ].map((step, index) => (
                                <ScrollReveal key={step.step} delay={index * 0.1}>
                                    <div className="text-center">
                                        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                                            {step.step}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-600">{step.description}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-red-600">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Invest with Confidence</h2>
                            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                                Our comprehensive guarantees mean you can go solar with complete peace of mind. Your investment is
                                protected every step of the way.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" variant="secondary">
                                    <Link href="/free-quote">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Get Protected Quote
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                                >
                                    <Link href="/about/testimonials">Read Success Stories</Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
