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
    Building,
    Zap,
    Shield,
    DollarSign,
    Award,
    Factory,
    Store,
    School,
    Star,
    Sparkles,
    Target,
    Lightbulb,
    TrendingUp,
    Users,
    Briefcase,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Solar Solutions in Tampa Bay | Residential & Commercial Solar | Relentless Energy",
    description:
        "Comprehensive solar solutions in Tampa Bay, Florida. Residential solar panels, commercial installations, Tesla Solar Roof, Powerwall batteries, and solar pergolas. Tesla Certified installer with 25-year warranty.",
    keywords:
        "solar solutions Tampa Bay, residential solar panels Florida, commercial solar installation, Tesla Solar Roof, Tesla Powerwall, solar pergola, battery backup systems, solar energy solutions St Petersburg",
    alternates: {
        canonical: "/solutions/solar-power-systems",
    },
}

export default function SolutionsPage() {
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
                    <div className="text-center space-y-8 sm:space-y-12">
                        {/* Floating Badge */}
                        <ScrollReveal direction="up">
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl">
                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
                                <span className="text-white font-semibold text-sm sm:text-base">Complete Solar Ecosystem</span>
                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
                            </div>
                        </ScrollReveal>

                        {/* Hero Title with Gradient Text */}
                        <ScrollReveal direction="up" delay={200}>
                            <div className="space-y-6 sm:space-y-8">
                                <h1 className="font-black">
                                    <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                                        Solar Solutions
                                    </span>
                                    <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight pb-4">
                                        Reimagined
                                    </span>
                                </h1>
                                <div className="max-w-5xl mx-auto px-4">
                                    <p className="text-gray-200 leading-relaxed font-light text-base sm:text-lg md:text-xl lg:text-2xl">
                                        From cutting-edge residential installations to enterprise-scale commercial systems, we&apos;re
                                        redefining what&apos;s possible with solar energy in Florida.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Floating Action Buttons */}
                        <ScrollReveal direction="up" delay={400}>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto px-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 border-2 border-orange-400/50"
                                >
                                    <Link href="/free-solar-quote" className="flex items-center justify-center">
                                        <Target className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                                        <span>Discover Your Solution</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-2xl bg-transparent hover:scale-105 transition-all duration-300"
                                >
                                    <Link href="tel:386-832-1119" className="flex items-center justify-center">
                                        <Phone className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                                        <span>(386) 832-1119</span>
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>

                        {/* Floating Stats Cards */}
                        <ScrollReveal direction="up" delay={600}>
                            <div className="pt-8 sm:pt-12">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                                    {[
                                        { number: "10K+", label: "Homes Powered", icon: Home },
                                        { number: "25", label: "Year Warranty", icon: Shield },
                                        { number: "$0", label: "Down Available", icon: DollarSign },
                                        { number: "100%", label: "Satisfaction", icon: Star },
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
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Unique Solutions Showcase with Diagonal Layout */}
            <section className="py-32 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.15)_1px,transparent_0)] bg-[length:60px_60px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    {/* Section Header */}
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-6 mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-2 border-red-100 rounded-full">
                                <Lightbulb className="w-5 h-5 text-red-500" />
                                <span className="text-red-700 font-semibold">Innovative Solutions</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                                Choose Your
                                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent pb-2">
                                    Solar Journey
                                </span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Diagonal Grid Layout */}
                    <div className="space-y-32">
                        {/* Residential Solar - Left Aligned */}
                        <ScrollReveal direction="left">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-2xl shadow-lg">
                                            <Home className="h-8 w-8 text-white" />
                                        </div>
                                        <div>
                                            <Badge className="bg-red-600 text-white mb-2">Most Popular</Badge>
                                            <h3 className="text-4xl font-bold text-gray-900">Residential Solar</h3>
                                        </div>
                                    </div>

                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        Transform your home into a clean energy powerhouse with our premium residential solar solutions. Cut
                                        your electricity bills by up to 90% while increasing your property value.
                                    </p>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-100">
                                            <div className="text-3xl font-black text-green-600">90%</div>
                                            <div className="text-green-700 font-semibold">Bill Reduction</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-red-100">
                                            <div className="text-3xl font-black text-red-600">$15K</div>
                                            <div className="text-red-700 font-semibold">Starting Price</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            "Tier 1 panels with 25-year warranty",
                                            "Professional installation & monitoring",
                                            "$0 down financing available",
                                            "Free energy audit & custom design",
                                        ].map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="bg-green-100 p-1 rounded-full">
                                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                                </div>
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        asChild
                                        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                        <Link href="/solutions/home-solar-panel-installation">
                                            Explore Residential Solar
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>

                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl blur opacity-20"></div>
                                    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                                        <Image
                                            src="/images/residential-solar-solutions.jpg"
                                            alt="Residential solar installation"
                                            width={600}
                                            height={400}
                                            className="w-full h-auto hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Commercial Solar - Right Aligned */}
                        <ScrollReveal direction="right">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="relative lg:order-1">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl blur opacity-20"></div>
                                    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                                        <Image
                                            src="/images/commercial-solar-solutions.jpg"
                                            alt="Commercial solar installation"
                                            width={600}
                                            height={400}
                                            className="w-full h-auto hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-8 lg:order-2">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-2xl shadow-lg">
                                            <Building className="h-8 w-8 text-white" />
                                        </div>
                                        <div>
                                            <Badge className="bg-red-600 text-white mb-2">Business Solution</Badge>
                                            <h3 className="text-4xl font-bold text-gray-900">Commercial Solar</h3>
                                        </div>
                                    </div>

                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        Scale your business operations with enterprise-grade solar solutions. Reduce operating costs by up
                                        to 75% while demonstrating environmental leadership to customers and stakeholders.
                                    </p>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-100">
                                            <div className="text-3xl font-black text-green-600">75%</div>
                                            <div className="text-green-700 font-semibold">Cost Reduction</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-red-100">
                                            <div className="text-3xl font-black text-red-600">30%</div>
                                            <div className="text-red-700 font-semibold">Tax Credit</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            "Federal tax credits & accelerated depreciation",
                                            "Scalable systems for any business size",
                                            "Performance guarantees & monitoring",
                                            "Enhanced brand reputation",
                                        ].map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="bg-green-100 p-1 rounded-full">
                                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                                </div>
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        asChild
                                        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                        <Link href="/solutions/commercial-solar-panel-installation">
                                            Explore Commercial Solar
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Tesla Solutions with Company Colors */}
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
                                <span className="text-red-700 font-semibold">Tesla Certified Solutions</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                                Next-Generation
                                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent pb-2">
                                    Tesla Technology
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Experience the future of solar energy with Tesla&apos;s revolutionary technology, professionally
                                installed by Florida&apos;s certified experts.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Tesla Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Tesla Solar Panels",
                                description: "Revolutionary solar panels with industry-leading efficiency and sleek design",
                                image: "/images/tesla-solar-solutions.jpg",
                                color: "from-red-500 to-orange-500",
                                bgColor: "from-red-50 to-orange-50",
                                borderColor: "border-red-200",
                                features: ["22.8% efficiency rating", "25-year warranty", "Sleek low-profile design"],
                                link: "/tesla-certified-solar-installer",
                            },
                            {
                                title: "Tesla Powerwall",
                                description: "Store solar energy for use during outages or peak hours with Tesla's home battery system",
                                image: "/images/tesla-charge.webp",
                                color: "from-orange-500 to-red-500",
                                bgColor: "from-orange-50 to-red-50",
                                borderColor: "border-orange-200",
                                features: ["13.5 kWh capacity", "Seamless backup power", "Mobile app monitoring"],
                                link: "/solutions/home-battery-backup",
                            },
                            {
                                title: "Solar Pergola",
                                description: "Combine outdoor living with solar energy generation in a beautiful, functional structure",
                                image: "/images/solar-pergola-solutions.jpg",
                                color: "from-red-600 to-orange-500",
                                bgColor: "from-red-50 to-orange-50",
                                borderColor: "border-red-200",
                                features: ["Custom design", "Shade + energy", "Increases property value"],
                                link: "/solutions/solar-pergolas",
                            },
                        ].map((solution, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 200}>
                                <div className="group relative h-full">
                                    {/* Subtle Glow Effect */}
                                    <div
                                        className={`absolute -inset-1 bg-gradient-to-r ${solution.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                                    ></div>

                                    <Card
                                        className={`relative bg-gradient-to-br ${solution.bgColor} border-2 ${solution.borderColor} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col`}
                                    >
                                        <div className="relative overflow-hidden">
                                            <Image
                                                src={solution.image || "/placeholder.svg"}
                                                alt={solution.title}
                                                width={400}
                                                height={250}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${solution.color} opacity-10`}></div>
                                        </div>

                                        <CardHeader className="flex-shrink-0">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge className={`bg-gradient-to-r ${solution.color} text-white`}>Tesla Certified</Badge>
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-gray-900">{solution.title}</CardTitle>
                                        </CardHeader>

                                        <CardContent className="space-y-6 flex-grow flex flex-col">
                                            <CardDescription className="text-gray-700 text-base leading-relaxed">
                                                {solution.description}
                                            </CardDescription>

                                            <div className="space-y-3 flex-grow">
                                                {solution.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center gap-3">
                                                        <div className="bg-green-100 p-1 rounded-full">
                                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                                        </div>
                                                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <Button
                                                asChild
                                                className={`w-full bg-gradient-to-r ${solution.color} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white font-bold py-3 rounded-2xl mt-auto shadow-md`}
                                            >
                                                <Link href={solution.link}>
                                                    Explore Solution
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Solutions - Compact Grid */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-6 mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full shadow-lg">
                                <Briefcase className="w-4 h-4" />
                                <span className="font-semibold text-sm">Industry Expertise</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
                                Powering Every
                                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent pb-2">
                                    Industry Forward
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Tailored solar solutions for the unique energy demands of your industry.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Compact Industry Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Factory,
                                title: "Manufacturing",
                                savings: "$100K+",
                                color: "from-red-500 to-orange-500",
                                delay: 0,
                            },
                            {
                                icon: Store,
                                title: "Retail",
                                savings: "$50K+",
                                color: "from-orange-500 to-red-500",
                                delay: 100,
                            },
                            {
                                icon: Building,
                                title: "Offices",
                                savings: "$60K+",
                                color: "from-red-600 to-orange-500",
                                delay: 200,
                            },
                            {
                                icon: School,
                                title: "Education",
                                savings: "$75K+",
                                color: "from-orange-600 to-red-600",
                                delay: 300,
                            },
                            {
                                icon: Users,
                                title: "Healthcare",
                                savings: "$80K+",
                                color: "from-red-500 to-orange-600",
                                delay: 400,
                            },
                            {
                                icon: TrendingUp,
                                title: "Hospitality",
                                savings: "$45K+",
                                color: "from-orange-500 to-red-500",
                                delay: 500,
                            },
                        ].map((industry, index) => (
                            <ScrollReveal key={index} direction="up" delay={industry.delay}>
                                <div className="group relative">
                                    {/* Hexagonal Card */}
                                    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                                        {/* Gradient Top Bar */}
                                        <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>

                                        {/* Card Content */}
                                        <div className="p-6 text-center">
                                            <div
                                                className={`w-16 h-16 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                            >
                                                <industry.icon className="w-8 h-8 text-white" />
                                            </div>

                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h3>

                                            <div
                                                className={`inline-flex items-center gap-1 bg-gradient-to-r ${industry.color} text-white px-3 py-1 rounded-full text-sm font-bold shadow-md`}
                                            >
                                                <span>{industry.savings}</span>
                                                <span className="text-xs opacity-90">/year</span>
                                            </div>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                        ></div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <ScrollReveal direction="up" delay={600}>
                        <div className="text-center mt-12">
                            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                                Don&apos;t see your industry? We&apos;ve installed solar across dozens of sectors.
                            </p>
                            <Button
                                asChild
                                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                <Link href="/free-solar-quote">
                                    Discuss Your Industry
                                    <ArrowRight className="ml-2 h-4 w-4" />
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
                                    <span className="text-white font-semibold text-sm">Ready to Transform?</span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                                    Start Your
                                    <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent pb-4">
                                        Solar Journey Today
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                                    Join thousands of Florida homeowners saving money with clean energy. Get your free, personalized solar
                                    quote today!
                                </p>
                            </div>

                            {/* Action Buttons with Company Colors */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 border-2 border-orange-400/50"
                                >
                                    <Link href="/free-solar-quote">
                                        <Target className="mr-2 h-5 w-5" />
                                        Get Free Quote
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md font-bold px-8 py-4 text-lg rounded-xl bg-transparent hover:scale-105 transition-all duration-300"
                                >
                                    <Link href="tel:386-832-1119">
                                        <Phone className="mr-2 h-5 w-5" />
                                        (386) 832-1119
                                    </Link>
                                </Button>
                            </div>

                            {/* Trust Indicators with Company Colors */}
                            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                                {[
                                    { icon: CheckCircle, text: "Free Consultation", color: "text-green-300" },
                                    { icon: Shield, text: "25-Year Warranty", color: "text-blue-300" },
                                    { icon: Award, text: "Tesla Certified", color: "text-yellow-300" },
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

