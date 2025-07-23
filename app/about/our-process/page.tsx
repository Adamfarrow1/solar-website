import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollReveal from "@/components/scroll-reveal"
import CountUpStats from "@/components/count-up-stats"
import { Sparkles, Phone, CheckCircle, Wrench, Zap, FileCheck, Home, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Our Solar Installation Process | Relentless Energy",
    description:
        "Learn about our proven 7-step solar installation process. From consultation to activation, we make going solar simple and stress-free.",
    alternates: {
        canonical: "/about/our-process",
    },
    openGraph: {
        title: "Our Solar Installation Process | Relentless Energy",
        description: "Learn about our proven 7-step solar installation process.",
        url: "/about/our-process",
    },
}

export default function OurProcessPage() {
    const processSteps = [
        {
            step: 1,
            title: "Free Consultation",
            description:
                "We start with a comprehensive assessment of your energy needs, roof condition, and solar potential. Our experts analyze your electricity bills and discuss your goals.",
            icon: Phone,
            duration: "1-2 hours",
            details: [
                "Energy usage analysis",
                "Roof inspection and measurements",
                "Shading analysis",
                "Financial assessment",
                "Custom system design",
            ],
        },
        {
            step: 2,
            title: "Custom Design & Proposal",
            description:
                "Using advanced software, we create a detailed system design optimized for your roof and energy needs. You'll receive a comprehensive proposal with financing options.",
            icon: FileCheck,
            duration: "2-3 days",
            details: [
                "3D system modeling",
                "Production estimates",
                "Financial projections",
                "Equipment specifications",
                "Warranty information",
            ],
        },
        {
            step: 3,
            title: "Contract & Financing",
            description:
                "Once you approve the design, we handle all paperwork and help you secure the best financing options, including federal tax credits and local incentives.",
            icon: CheckCircle,
            duration: "1-2 days",
            details: [
                "Contract signing",
                "Financing approval",
                "Incentive applications",
                "Insurance coordination",
                "Timeline confirmation",
            ],
        },
        {
            step: 4,
            title: "Permits & Approvals",
            description:
                "Our team handles all permitting and utility interconnection applications. We work with local authorities to ensure everything meets code requirements.",
            icon: FileCheck,
            duration: "2-4 weeks",
            details: [
                "Building permit applications",
                "Utility interconnection",
                "HOA approvals (if needed)",
                "Engineering reviews",
                "Code compliance verification",
            ],
        },
        {
            step: 5,
            title: "Professional Installation",
            description:
                "Our certified installers complete your system installation in 1-2 days. We use only premium equipment and follow strict safety protocols.",
            icon: Wrench,
            duration: "1-2 days",
            details: [
                "Roof preparation",
                "Panel and inverter installation",
                "Electrical connections",
                "Safety testing",
                "System commissioning",
            ],
        },
        {
            step: 6,
            title: "Inspection & Approval",
            description:
                "Local authorities and your utility company inspect the completed installation. We coordinate all inspections and address any requirements.",
            icon: CheckCircle,
            duration: "1-2 weeks",
            details: [
                "City/county inspection",
                "Utility inspection",
                "Final approvals",
                "System testing",
                "Documentation completion",
            ],
        },
        {
            step: 7,
            title: "System Activation",
            description:
                "Once approved, we activate your system and provide comprehensive training on monitoring and maintenance. You start saving immediately!",
            icon: Zap,
            duration: "1 day",
            details: [
                "System activation",
                "Monitoring setup",
                "Owner training",
                "Warranty registration",
                "Ongoing support setup",
            ],
        },
    ]

    const whyOurProcess = [
        {
            title: "Transparent Communication",
            description: "We keep you informed at every step with regular updates and clear timelines.",
            icon: Phone,
        },
        {
            title: "Quality Assurance",
            description: "Multiple quality checks ensure your system meets our high standards.",
            icon: CheckCircle,
        },
        {
            title: "Expert Installation",
            description: "Tesla-certified installers with years of experience handle your project.",
            icon: Wrench,
        },
        {
            title: "Hassle-Free Experience",
            description: "We handle all permits, inspections, and utility coordination for you.",
            icon: Home,
        },
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
                                Proven Installation Process
                            </Badge>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                Our{" "}
                                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                                    7-Step Process
                                </span>{" "}
                                Makes Solar Simple
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl">
                                From initial consultation to system activation, our proven process ensures a smooth, hassle-free solar
                                installation experience with transparent communication every step of the way.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                                    <Link href="/free-quote">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Start Your Journey
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                                >
                                    <Link href="/about/guarantee">View Our Guarantee</Link>
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

            {/* Process Steps */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Your Solar Journey, Step by Step</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Our streamlined process takes you from consultation to clean energy production with minimal hassle and
                                maximum transparency.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-12">
                        {processSteps.map((step, index) => (
                            <ScrollReveal key={step.step} delay={index * 0.1}>
                                <div className="relative">
                                    {/* Connector Line */}
                                    {index < processSteps.length - 1 && (
                                        <div className="absolute left-8 top-20 h-12 w-0.5 bg-red-200 hidden lg:block"></div>
                                    )}

                                    <Card className="hover:shadow-lg transition-shadow duration-300">
                                        <CardContent className="p-8">
                                            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                                {/* Step Number & Icon */}
                                                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:gap-2">
                                                    <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold">
                                                        {step.step}
                                                    </div>
                                                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center lg:mt-2">
                                                        <step.icon className="h-6 w-6 text-red-600" />
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                                                        <Badge variant="outline" className="border-red-200 text-red-700 w-fit">
                                                            {step.duration}
                                                        </Badge>
                                                    </div>

                                                    <p className="text-gray-600 mb-6 text-lg">{step.description}</p>

                                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                        {step.details.map((detail, detailIndex) => (
                                                            <div key={detailIndex} className="flex items-center gap-2">
                                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                                <span className="text-sm text-gray-600">{detail}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Arrow */}
                                                {index < processSteps.length - 1 && (
                                                    <div className="hidden lg:flex items-center justify-center">
                                                        <ArrowRight className="h-6 w-6 text-red-300" />
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Our Process */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Why Our Process Works</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Years of experience have refined our process to deliver exceptional results with minimal stress for our
                                customers.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyOurProcess.map((item, index) => (
                            <ScrollReveal key={item.title} delay={index * 0.1}>
                                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="h-8 w-8 text-red-600" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Summary */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Typical Timeline</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Most installations are completed within 6-8 weeks from contract signing to system activation.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="bg-red-50 rounded-2xl p-8 max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-red-600 mb-2">1-2 Days</div>
                                    <div className="text-gray-900 font-medium mb-1">Design & Contract</div>
                                    <div className="text-sm text-gray-600">From consultation to signed agreement</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-red-600 mb-2">2-4 Weeks</div>
                                    <div className="text-gray-900 font-medium mb-1">Permits & Approvals</div>
                                    <div className="text-sm text-gray-600">All paperwork and approvals</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-red-600 mb-2">1-2 Days</div>
                                    <div className="text-gray-900 font-medium mb-1">Installation & Activation</div>
                                    <div className="text-sm text-gray-600">From installation to producing power</div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-red-600">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Ready to Start Your Solar Journey?</h2>
                            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                                Experience our proven process firsthand. Get your free consultation and custom solar design today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" variant="secondary">
                                    <Link href="/free-quote">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Get Free Quote
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                                >
                                    <Link href="/about/our-team">Meet Our Team</Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
