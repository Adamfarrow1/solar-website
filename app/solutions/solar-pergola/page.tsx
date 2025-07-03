import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Phone,
    ArrowRight,
    CheckCircle,
    Home,
    Zap,
    DollarSign,
    Palette,
    Wrench,
    Users,
    Umbrella,
    TrendingUp,
    Star,
    Calculator,
    Clock,
    Battery,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Solar Pergola Installation in Tampa Bay | Outdoor Living + Solar Energy | Relentless Energy",
    description:
        "Transform your outdoor space with a beautiful solar pergola in Tampa Bay, Florida. Combine shade, style, and solar energy generation. Custom designs, professional installation, Tesla Certified installer.",
    keywords:
        "solar pergola Tampa Bay, outdoor solar structure Florida, solar patio cover St Petersburg, solar shade structure Clearwater, solar pergola installation Largo, outdoor solar canopy Florida",
    alternates: {
        canonical: "/solutions/solar-pergola",
    },
}

export default function SolarPergolaPage() {
    return (
        <>
            {/* Hero Section - Matching Layout */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-[140px] overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
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

                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.04)_1px,transparent_0)] bg-[length:40px_40px]"></div>

                    {/* Minimal geometric shapes */}
                    <div className="absolute top-32 right-20 w-28 h-28 border border-red-100 rounded-lg rotate-12 opacity-40"></div>
                    <div className="absolute bottom-40 left-16 w-20 h-20 border border-orange-100 rounded-full opacity-30"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Simple Badge */}
                            <ScrollReveal direction="up">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full">
                                    <Umbrella className="w-4 h-4 text-red-500" />
                                    <span className="text-sm font-medium text-red-700">Solar Pergola Solutions</span>
                                </div>
                            </ScrollReveal>

                            {/* Clean Typography */}
                            <ScrollReveal direction="up" delay={100}>
                                <div className="space-y-6">
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                        Solar Pergola for Your
                                        <span className="text-red-500 block">Outdoor Space</span>
                                    </h1>
                                    <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                        Transform your outdoor living with beautiful shade structures that generate clean energy. Custom
                                        designs with professional installation.
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Simple CTAs */}
                            <ScrollReveal direction="up" delay={200}>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold"
                                    >
                                        <Link href="/free-quote">
                                            Get Free Design
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold bg-transparent"
                                    >
                                        <Link href="tel:727-555-0123">
                                            <Phone className="mr-2 h-5 w-5" />
                                            (727) 555-0123
                                        </Link>
                                    </Button>
                                </div>
                            </ScrollReveal>

                            {/* Clean Stats */}
                            <ScrollReveal direction="up" delay={300}>
                                <div className="grid grid-cols-3 gap-8 pt-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-red-600 mb-1">100%</div>
                                        <div className="text-sm text-gray-600">Custom Design</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-green-600 mb-1">25</div>
                                        <div className="text-sm text-gray-600">Year Warranty</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-1">$0</div>
                                        <div className="text-sm text-gray-600">Down Available</div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Content - Clean Image */}
                        <ScrollReveal direction="right">
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/images/solar-pergola-hero.png"
                                        alt="Beautiful solar pergola with outdoor seating area"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                        priority
                                    />
                                </div>

                                {/* Simple floating badge */}
                                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
                                    <div className="text-sm font-semibold">Shade + Energy</div>
                                </div>

                                {/* Simple savings indicator */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg border">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <TrendingUp className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-gray-900">+15%</div>
                                            <div className="text-sm text-gray-600">Property Value</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Why Choose Solar Pergolas?</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Discover the incredible benefits of combining outdoor living with clean energy generation in one
                                beautiful structure.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ScrollReveal direction="up" delay={0}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                                        <Umbrella className="h-8 w-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Perfect Shade</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-base text-gray-600">
                                        Create comfortable outdoor living spaces protected from Florida's intense sun.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={100}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                                        <Zap className="h-8 w-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Clean Energy</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-base text-gray-600">
                                        Generate renewable solar power while enhancing your outdoor aesthetics.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={200}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                                        <Home className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Property Value</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-base text-gray-600">
                                        Increase your home's value with a beautiful, functional outdoor structure.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={300}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                                        <Palette className="h-8 w-8 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Custom Design</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-base text-gray-600">
                                        Tailored to your space, style preferences, and energy needs.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Simple 5-Step Process</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From initial consultation to system activation, we make your solar pergola project easy and stress-free.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Free Consultation",
                                description: "We assess your space and discuss your vision",
                                icon: Users,
                                color: "bg-red-100 text-red-600",
                            },
                            {
                                step: "2",
                                title: "Custom Design",
                                description: "3D modeling and engineering for your specific needs",
                                icon: Palette,
                                color: "bg-blue-100 text-blue-600",
                            },
                            {
                                step: "3",
                                title: "Permits & Approvals",
                                description: "We handle all paperwork and regulatory requirements",
                                icon: CheckCircle,
                                color: "bg-green-100 text-green-600",
                            },
                            {
                                step: "4",
                                title: "Professional Installation",
                                description: "Expert construction and solar system integration",
                                icon: Wrench,
                                color: "bg-purple-100 text-purple-600",
                            },
                            {
                                step: "5",
                                title: "System Activation",
                                description: "Testing, commissioning, and handover",
                                icon: Zap,
                                color: "bg-yellow-100 text-yellow-600",
                            },
                        ].map((item, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 100}>
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div
                                            className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300`}
                                        >
                                            <item.icon className="h-10 w-10" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                            {item.step}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solar Pergola Solutions Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Complete Solar Pergola Solutions</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We offer comprehensive solar pergola solutions tailored to your outdoor space and energy requirements.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <ScrollReveal direction="left">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <Image
                                        src="/images/modern-solar-pergola.png"
                                        alt="Modern solar pergola design"
                                        width={400}
                                        height={250}
                                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <CardTitle className="text-2xl text-gray-900">Modern Minimalist</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-base text-gray-600">
                                        Clean lines and sleek design for contemporary homes with integrated smart controls and LED lighting.
                                    </CardDescription>
                                    <ul className="space-y-2 text-sm flex-grow">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Aluminum frame construction
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Integrated LED lighting system
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Smart controls & monitoring
                                        </li>
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <div className="text-2xl font-bold text-red-600">Starting at $25,000</div>
                                        <div className="text-sm text-gray-500">After federal tax credits</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-red-200 h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <Badge className="bg-red-600 text-white w-fit mb-2">Most Popular</Badge>
                                    <Image
                                        src="/images/traditional-solar-pergola.png"
                                        alt="Traditional solar pergola design"
                                        width={400}
                                        height={250}
                                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <CardTitle className="text-2xl text-gray-900">Traditional Elegance</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-base text-gray-600">
                                        Classic wood-look design with timeless appeal, perfect for traditional and transitional home styles.
                                    </CardDescription>
                                    <ul className="space-y-2 text-sm flex-grow">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Wood-grain finish options
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Decorative column elements
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Natural landscape integration
                                        </li>
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <div className="text-2xl font-bold text-red-600">Starting at $35,000</div>
                                        <div className="text-sm text-gray-500">Premium materials & finishes</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <Image
                                        src="/images/tropical-solar-pergola.png"
                                        alt="Tropical solar pergola design"
                                        width={400}
                                        height={250}
                                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <CardTitle className="text-2xl text-gray-900">Tropical Paradise</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-base text-gray-600">
                                        Hurricane-rated design perfect for Florida's coastal lifestyle with integrated planters and louvered
                                        elements.
                                    </CardDescription>
                                    <ul className="space-y-2 text-sm flex-grow">
                                        <li className="flex items-center">
                                            <Battery className="h-4 w-4 text-yellow-500 mr-2" />
                                            Hurricane-rated construction
                                        </li>
                                        <li className="flex items-center">
                                            <Battery className="h-4 w-4 text-yellow-500 mr-2" />
                                            Corrosion-resistant materials
                                        </li>
                                        <li className="flex items-center">
                                            <Battery className="h-4 w-4 text-yellow-500 mr-2" />
                                            Integrated planter systems
                                        </li>
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <div className="text-2xl font-bold text-red-600">Starting at $45,000</div>
                                        <div className="text-sm text-gray-500">Marine-grade construction</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Financing Options */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Flexible Financing Options</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Make your solar pergola affordable with our variety of financing options designed to fit your budget.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal direction="left">
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <DollarSign className="h-8 w-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-2xl text-gray-900">Cash Purchase</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-base text-gray-600 flex-grow">
                                        Pay upfront and maximize your savings with the full federal tax credit and immediate ownership
                                        benefits.
                                    </CardDescription>
                                    <ul className="space-y-2 text-sm text-left">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Maximum ROI and savings
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Full 30% federal tax credit
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            No monthly payments
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up">
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-red-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <Badge className="bg-red-600 text-white w-fit mx-auto mb-2">Most Popular</Badge>
                                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Calculator className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-2xl text-gray-900">Solar Loan</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-base text-gray-600 flex-grow">
                                        Finance your solar pergola with low-interest loans and start saving from day one.
                                    </CardDescription>
                                    <ul className="space-y-2 text-sm text-left">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            $0 down payment options
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Competitive interest rates
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            You own the system
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Clock className="h-8 w-8 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-2xl text-gray-900">Custom Financing</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-base text-gray-600 flex-grow">
                                        Flexible payment plans tailored to your budget and project scope.
                                    </CardDescription>
                                    <ul className="space-y-2 text-sm text-left">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Flexible terms available
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Quick approval process
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Competitive rates
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">What Our Customers Say</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Don't just take our word for it. Here's what Florida homeowners are saying about their solar pergola
                                experience.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Maria & Carlos Rodriguez",
                                location: "St. Petersburg, FL",
                                rating: 5,
                                text: "Our solar pergola transformed our backyard into an outdoor paradise! We love entertaining under it, and the energy savings are incredible. Best investment we've made!",
                                savings: "$180/month",
                            },
                            {
                                name: "Jennifer Thompson",
                                location: "Clearwater, FL",
                                rating: 5,
                                text: "The design process was amazing - they created exactly what we envisioned. The pergola is beautiful and functional, providing perfect shade while generating clean energy.",
                                savings: "$220/month",
                            },
                            {
                                name: "David & Susan Chen",
                                location: "Largo, FL",
                                rating: 5,
                                text: "Professional installation, beautiful craftsmanship, and it's already paying for itself through energy savings. Our property value increased significantly too!",
                                savings: "$195/month",
                            },
                        ].map((testimonial, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 100}>
                                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                    <CardHeader className="flex-shrink-0">
                                        <div className="flex items-center space-x-1 mb-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <CardTitle className="text-lg text-gray-900">{testimonial.name}</CardTitle>
                                        <CardDescription className="text-sm text-gray-500">{testimonial.location}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4 flex-grow flex flex-col">
                                        <p className="text-gray-600 italic flex-grow">"{testimonial.text}"</p>
                                        <div className="bg-green-50 p-3 rounded-lg mt-auto">
                                            <div className="text-lg font-bold text-green-600">Saving {testimonial.savings}</div>
                                            <div className="text-sm text-green-700">Monthly energy savings</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal direction="up">
                        <div className="space-y-8">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Transform Your Outdoor Space?</h2>
                            <p className="text-xl text-red-100 max-w-3xl mx-auto">
                                Create the perfect blend of outdoor living and clean energy generation. Get your free custom design
                                consultation today!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-red-600 hover:bg-gray-100 text-lg px-10 py-4 h-auto font-semibold group"
                                >
                                    <Link href="/free-quote">
                                        Get Your Free Design Consultation
                                        <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-lg px-10 py-4 h-auto bg-transparent"
                                >
                                    <Link href="tel:727-555-0123">
                                        <Phone className="mr-2 h-6 w-6" />
                                        Call (727) 555-0123
                                    </Link>
                                </Button>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <CheckCircle className="h-6 w-6 text-green-400" />
                                    <span className="text-white font-medium">Free 3D Design</span>
                                </div>
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <CheckCircle className="h-6 w-6 text-green-400" />
                                    <span className="text-white font-medium">25-Year Warranty</span>
                                </div>
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2">
                                    <CheckCircle className="h-6 w-6 text-green-400" />
                                    <span className="text-white font-medium">Licensed & Insured</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    )
}
