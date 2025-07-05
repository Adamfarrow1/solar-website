import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Shield,
    Award,
    CheckCircle,
    Phone,
    ArrowRight,
    Star,
    Users,
    Wrench,
    Zap,
    Clock,
    TrendingUp,
    Battery,
    Home,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Tesla Certified Solar Installer in Tampa Bay, Florida | Relentless Energy",
    description:
        "Official Tesla Certified solar installer serving Tampa Bay, St Petersburg, Clearwater. Expert installation of Tesla Solar Roof, Powerwall, and solar panels. Licensed, insured, and Tesla trained.",
    keywords:
        "Tesla certified installer Florida, Tesla solar installer Tampa Bay, Tesla Powerwall installer St Petersburg, Tesla Solar Roof Clearwater, certified Tesla contractor",
    alternates: {
        canonical: "/tesla-solar/certified-installer",
    },
}

export default function TeslaCertifiedInstallerPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[140px] pb-20">
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900">
                    {/* Animated Elements */}
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-red-400/30 to-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>

                    {/* Geometric Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rotate-45 rounded-lg animate-spin"
                            style={{ animationDuration: "20s" }}
                        ></div>
                        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-white/15 rotate-12 rounded-full animate-pulse"></div>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
                    <div className="text-center space-y-8 sm:space-y-12">
                        {/* Tesla Badge */}
                        <ScrollReveal direction="up">
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl">
                                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
                                <span className="text-white font-semibold text-sm sm:text-base">
                                    Official Tesla Certified Installer
                                </span>
                                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
                            </div>
                        </ScrollReveal>

                        {/* Hero Title */}
                        <ScrollReveal direction="up" delay={200}>
                            <div className="space-y-6 sm:space-y-8">
                                <h1 className="font-black">
                                    <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                                        Tesla Certified
                                    </span>
                                    <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight pb-4">
                                        Solar Excellence
                                    </span>
                                </h1>
                                <div className="max-w-5xl mx-auto px-4">
                                    <p className="text-gray-200 leading-relaxed font-light text-base sm:text-lg md:text-xl lg:text-2xl">
                                        As an official Tesla Certified installer in Tampa Bay, we bring you the highest standards of solar
                                        installation expertise. Trust your Tesla Solar Roof, Powerwall, and solar panel installation to
                                        Florida&apos;s premier certified professionals.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Action Buttons */}
                        <ScrollReveal direction="up" delay={400}>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto px-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 border-2 border-orange-400/50"
                                >
                                    <Link href="/free-quote" className="flex items-center justify-center">
                                        <ArrowRight className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
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

                        {/* Key Stats */}
                        <ScrollReveal direction="up" delay={600}>
                            <div className="pt-8 sm:pt-12">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                                    {[
                                        { number: "500+", label: "Tesla Installations", icon: Users },
                                        { number: "5", label: "Years Certified", icon: Award },
                                        { number: "24/7", label: "Support Available", icon: Clock },
                                        { number: "100%", label: "Tesla Certified", icon: Shield },
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

            {/* What Tesla Certification Means */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.15)_1px,transparent_0)] bg-[length:60px_60px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-6 mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-2 border-red-100 rounded-full">
                                <Award className="w-5 h-5 text-red-500" />
                                <span className="text-red-700 font-semibold">Tesla Certification Excellence</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                                What Tesla Certification
                                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent pb-2">
                                    Means for You
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Tesla certification isn&apos;t just a badge—it&apos;s a commitment to excellence, ongoing training, and adherence
                                to the highest installation standards in the solar industry.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Wrench,
                                title: "Rigorous Training",
                                description:
                                    "Extensive hands-on training at Tesla facilities covering installation techniques, safety protocols, and product specifications for all Tesla energy products.",
                                color: "from-red-500 to-orange-500",
                                bgColor: "from-red-50 to-orange-50",
                                borderColor: "border-red-200",
                            },
                            {
                                icon: CheckCircle,
                                title: "Quality Standards",
                                description:
                                    "Adherence to Tesla's strict quality control measures, installation guidelines, and performance standards to ensure optimal system performance and longevity.",
                                color: "from-orange-500 to-red-500",
                                bgColor: "from-orange-50 to-red-50",
                                borderColor: "border-orange-200",
                            },
                            {
                                icon: TrendingUp,
                                title: "Ongoing Education",
                                description:
                                    "Continuous education on new Tesla products, software updates, and emerging technologies to stay current with the latest innovations in solar energy.",
                                color: "from-red-600 to-orange-500",
                                bgColor: "from-red-50 to-orange-50",
                                borderColor: "border-red-200",
                            },
                            {
                                icon: Shield,
                                title: "Warranty Support",
                                description:
                                    "Direct access to Tesla warranty support and technical assistance, ensuring faster resolution of any issues and comprehensive customer protection.",
                                color: "from-orange-600 to-red-600",
                                bgColor: "from-orange-50 to-red-50",
                                borderColor: "border-orange-200",
                            },
                            {
                                icon: Zap,
                                title: "Advanced Tools",
                                description:
                                    "Access to Tesla's proprietary installation tools, software, and diagnostic equipment for precise installation and optimal system configuration.",
                                color: "from-red-500 to-orange-600",
                                bgColor: "from-red-50 to-orange-50",
                                borderColor: "border-red-200",
                            },
                            {
                                icon: Users,
                                title: "Network Access",
                                description:
                                    "Membership in Tesla's exclusive installer network, providing access to technical support, best practices, and collaboration with top installers nationwide.",
                                color: "from-orange-500 to-red-500",
                                bgColor: "from-orange-50 to-red-50",
                                borderColor: "border-orange-200",
                            },
                        ].map((cert, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 100}>
                                <div className="group relative h-full">
                                    <div
                                        className={`absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                                    ></div>

                                    <Card
                                        className={`relative bg-gradient-to-br ${cert.bgColor} border-2 ${cert.borderColor} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col`}
                                    >
                                        <CardHeader className="text-center pb-4">
                                            <div
                                                className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                            >
                                                <cert.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <CardTitle className="text-xl font-bold text-gray-900">{cert.title}</CardTitle>
                                        </CardHeader>

                                        <CardContent className="flex-grow flex flex-col justify-center">
                                            <CardDescription className="text-gray-700 text-center leading-relaxed">
                                                {cert.description}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tesla Products We Install */}
            <section className="py-32 bg-gradient-to-br from-gray-50 to-red-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.15)_1px,transparent_0)] bg-[length:60px_60px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-6 mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-2 border-red-100 rounded-full shadow-lg">
                                <Zap className="w-5 h-5 text-red-500" />
                                <span className="text-red-700 font-semibold">Tesla Product Portfolio</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                                Tesla Products
                                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent pb-2">
                                    We Install
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                As a Tesla Certified installer, we&apos;re authorized to install the complete range of Tesla energy products
                                with factory-backed warranties and support.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <ScrollReveal direction="left" delay={0}>
                            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:-translate-y-2 group h-full bg-white rounded-3xl overflow-hidden">
                                <CardHeader className="p-0">
                                    <div className="relative overflow-hidden rounded-t-3xl">
                                        <Image
                                            src="/placeholder.svg?height=200&width=400"
                                            alt="Tesla Solar Roof installation"
                                            width={400}
                                            height={200}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <CardTitle className="text-2xl text-gray-900">Tesla Solar Roof</CardTitle>
                                            <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                                                <Home className="mr-1 h-3 w-3" />
                                                Integrated
                                            </Badge>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1 px-6 pb-6">
                                    <CardDescription className="text-base text-gray-600">
                                        Beautiful solar roof tiles that generate clean energy while protecting your home. Combines solar
                                        cells with premium roofing materials for a seamless aesthetic.
                                    </CardDescription>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Integrated solar technology
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Weather-resistant design
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            25-year warranty
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 group mt-4"
                                    >
                                        <Link href="/tesla-solar/solar-roof">
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={100}>
                            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:-translate-y-2 group h-full bg-white rounded-3xl overflow-hidden">
                                <CardHeader className="p-0">
                                    <div className="relative overflow-hidden rounded-t-3xl">
                                        <Image
                                            src="/placeholder.svg?height=200&width=400"
                                            alt="Tesla Powerwall installation"
                                            width={400}
                                            height={200}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <CardTitle className="text-2xl text-gray-900">Tesla Powerwall</CardTitle>
                                            <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                                                <Battery className="mr-1 h-3 w-3" />
                                                Storage
                                            </Badge>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1 px-6 pb-6">
                                    <CardDescription className="text-base text-gray-600">
                                        Home battery system that stores solar energy for use during outages or peak hours. Provides energy
                                        independence and backup power protection.
                                    </CardDescription>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center">
                                            <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                                            13.5 kWh capacity
                                        </li>
                                        <li className="flex items-center">
                                            <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                                            Seamless backup power
                                        </li>
                                        <li className="flex items-center">
                                            <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                                            Mobile app control
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 group mt-4"
                                    >
                                        <Link href="/tesla-solar/powerwall">
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={200}>
                            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:-translate-y-2 group h-full bg-white rounded-3xl overflow-hidden">
                                <CardHeader className="p-0">
                                    <div className="relative overflow-hidden rounded-t-3xl">
                                        <Image
                                            src="/placeholder.svg?height=200&width=400"
                                            alt="Tesla solar panels installation"
                                            width={400}
                                            height={200}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <CardTitle className="text-2xl text-gray-900">Tesla Solar Panels</CardTitle>
                                            <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                                                <Star className="mr-1 h-3 w-3" />
                                                Premium
                                            </Badge>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1 px-6 pb-6">
                                    <CardDescription className="text-base text-gray-600">
                                        High-efficiency solar panels designed and manufactured by Tesla. Sleek, low-profile design with
                                        industry-leading performance and durability.
                                    </CardDescription>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            High efficiency rating
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Low-profile design
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            25-year warranty
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 group mt-4"
                                    >
                                        <Link href="/solutions/residential-solar-panels">
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Why Choose Relentless Energy */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-6 mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full shadow-lg">
                                <Star className="w-4 h-4" />
                                <span className="font-semibold text-sm">Why Choose Us</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                                Why Choose Relentless Energy
                                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent pb-2">
                                    as Your Tesla Installer
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Beyond our Tesla certification, we bring years of local experience, exceptional customer service, and a
                                commitment to excellence that sets us apart.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal direction="left">
                            <div className="space-y-8">
                                {[
                                    {
                                        icon: Clock,
                                        title: "5+ Years Tesla Certified",
                                        description:
                                            "One of the first Tesla certified installers in Florida with extensive experience installing Tesla energy products across Tampa Bay.",
                                    },
                                    {
                                        icon: Users,
                                        title: "500+ Tesla Installations",
                                        description:
                                            "Proven track record with hundreds of successful Tesla Solar Roof, Powerwall, and solar panel installations throughout Florida.",
                                    },
                                    {
                                        icon: Star,
                                        title: "Local Florida Expertise",
                                        description:
                                            "Deep understanding of Florida building codes, permitting processes, and weather conditions specific to Tesla product installations.",
                                    },
                                    {
                                        icon: Shield,
                                        title: "Comprehensive Warranty",
                                        description:
                                            "Full Tesla product warranties plus our own workmanship guarantee, providing complete protection for your investment.",
                                    },
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 rounded-lg">
                                            <feature.icon className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl blur opacity-20"></div>
                                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                                    <Image
                                        src="/placeholder.svg?height=500&width=600"
                                        alt="Tesla certified installation team"
                                        width={600}
                                        height={500}
                                        className="w-full h-auto hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border-2 border-orange-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-orange-100 p-2 rounded-lg">
                                            <Award className="h-6 w-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Top Rated</div>
                                            <div className="text-sm text-gray-600">Tesla Installer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-yellow-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <ScrollReveal direction="up">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                                    <Award className="w-4 h-4 text-yellow-400 animate-pulse" />
                                    <span className="text-white font-semibold text-sm">Tesla Certified Installation</span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                                    Ready for Tesla Solar
                                    <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent pb-4">
                                        Excellence?
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                                    Experience the difference of working with Florida&apos;s premier Tesla Certified installer. Get your free
                                    consultation and discover how Tesla energy products can transform your home.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 border-2 border-orange-400/50"
                                >
                                    <Link href="/free-quote">
                                        <ArrowRight className="mr-2 h-5 w-5" />
                                        Get Your Tesla Quote
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
                                        Call (727) 555-0123
                                    </Link>
                                </Button>
                            </div>

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
