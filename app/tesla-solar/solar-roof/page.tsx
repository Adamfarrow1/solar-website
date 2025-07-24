import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Phone,
    CheckCircle,
    Home,
    Zap,
    Shield,
    Award,
    Sparkles,
    Target,
    Sun,
    Battery,
    Smartphone,
    TrendingUp,
    Leaf,
    DollarSign,
    Clock,
    Building,
    Eye,
    Wrench,
    MapPin,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Tesla Solar Roof Installation Tampa Bay | Certified Tesla Installer | Relentless Energy",
    description:
        "Professional Tesla Solar Roof installation in Tampa Bay, Florida. Certified Tesla installer offering Solar Roof tiles with integrated solar technology. Beautiful, durable, and energy-efficient roofing solution.",
    keywords:
        "Tesla Solar Roof Tampa Bay, Tesla Solar Roof installation Florida, Tesla certified installer, solar roof tiles, integrated solar roofing, Tesla Solar Roof St Petersburg, solar roof replacement",
    alternates: {
        canonical: "/tesla-solar/solar-roof",
    },
}

export default function TeslaSolarRoofPage() {
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
                                <span className="text-white font-semibold text-sm sm:text-base">Tesla Certified Installer</span>
                                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
                            </div>
                        </ScrollReveal>

                        {/* Hero Title */}
                        <ScrollReveal direction="up" delay={200}>
                            <div className="space-y-6 sm:space-y-8">
                                <h1 className="font-black">
                                    <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                                        Tesla Solar Roof
                                    </span>
                                    <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight pb-4">
                                        Beautiful Energy
                                    </span>
                                </h1>
                                <div className="max-w-5xl mx-auto px-4">
                                    <p className="text-gray-200 leading-relaxed font-light text-base sm:text-lg md:text-xl lg:text-2xl">
                                        Transform your home with Tesla&apos;s revolutionary Solar Roof tiles that generate clean energy
                                        while providing superior protection and stunning aesthetics.
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
                                        <Target className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                                        <span>Get Solar Roof Quote</span>
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

                        {/* Key Stats */}
                        <ScrollReveal direction="up" delay={600}>
                            <div className="pt-8 sm:pt-12">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                                    {[
                                        { number: "25", label: "Year Warranty", icon: Shield },
                                        { number: "3x", label: "Stronger Than Tiles", icon: Home },
                                        { number: "22%", label: "Efficiency Rating", icon: Zap },
                                        { number: "100%", label: "Tesla Certified", icon: Award },
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

            {/* Tesla Solar Roof Overview */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.15)_1px,transparent_0)] bg-[length:60px_60px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-6 mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-2 border-red-100 rounded-full">
                                <Sun className="w-5 h-5 text-red-500" />
                                <span className="text-red-700 font-semibold">Revolutionary Technology</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                                The Future of
                                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent pb-2">
                                    Roofing is Here
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Tesla Solar Roof combines premium glass solar tiles with steel roofing tiles to create a beautiful,
                                durable roof that generates clean energy for decades.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal direction="left">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-gray-900">Integrated Solar Technology</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Unlike traditional solar panels mounted on top of your roof, Tesla Solar Roof tiles ARE your roof.
                                        Each glass tile contains photovoltaic cells that capture sunlight and convert it to electricity, all
                                        while maintaining the aesthetic appeal of premium roofing materials.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-100">
                                        <div className="text-3xl font-black text-green-600">3x</div>
                                        <div className="text-green-700 font-semibold">Stronger Than Tiles</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-red-100">
                                        <div className="text-3xl font-black text-red-600">25</div>
                                        <div className="text-red-700 font-semibold">Year Warranty</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        "Tempered glass tiles stronger than traditional roofing",
                                        "Seamless integration with Tesla Powerwall",
                                        "Weather-resistant and fire-rated materials",
                                        "Mobile app monitoring and control",
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="bg-green-100 p-1 rounded-full">
                                                <CheckCircle className="h-5 w-5 text-green-600" />
                                            </div>
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl blur opacity-20"></div>
                                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                                    <Image
                                        src="/images/tesla-solar-roof-installation.jpg"
                                        alt="Tesla Solar Roof installation"
                                        width={600}
                                        height={500}
                                        className="w-full h-auto hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Tesla Solar Roof Features */}
            <section className="py-32 bg-gradient-to-br from-gray-50 to-red-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.15)_1px,transparent_0)] bg-[length:60px_60px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-6 mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-2 border-red-100 rounded-full shadow-lg">
                                <Sparkles className="w-5 h-5 text-red-500" />
                                <span className="text-red-700 font-semibold">Premium Features</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                                Engineered for
                                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent pb-2">
                                    Performance & Beauty
                                </span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Eye,
                                title: "Aesthetic Excellence",
                                description:
                                    "Sleek, low-profile design that complements your home's architecture with premium glass tiles.",
                                color: "from-red-500 to-orange-500",
                                bgColor: "from-red-50 to-orange-50",
                                borderColor: "border-red-200",
                            },
                            {
                                icon: Shield,
                                title: "Superior Durability",
                                description:
                                    "Tempered glass tiles are 3x stronger than standard roofing tiles and built to last decades.",
                                color: "from-orange-500 to-red-500",
                                bgColor: "from-orange-50 to-red-50",
                                borderColor: "border-orange-200",
                            },
                            {
                                icon: Zap,
                                title: "Maximum Efficiency",
                                description: "Industry-leading 22% efficiency rating captures more energy from every ray of sunlight.",
                                color: "from-red-600 to-orange-500",
                                bgColor: "from-red-50 to-orange-50",
                                borderColor: "border-red-200",
                            },
                            {
                                icon: Smartphone,
                                title: "Smart Monitoring",
                                description: "Tesla mobile app provides real-time energy production monitoring and system control.",
                                color: "from-orange-600 to-red-600",
                                bgColor: "from-orange-50 to-red-50",
                                borderColor: "border-orange-200",
                            },
                        ].map((feature, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 200}>
                                <div className="group relative h-full">
                                    <div
                                        className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                                    ></div>

                                    <Card
                                        className={`relative bg-gradient-to-br ${feature.bgColor} border-2 ${feature.borderColor} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col`}
                                    >
                                        <CardHeader className="text-center pb-4">
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

            {/* Installation Process */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-6 mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full shadow-lg">
                                <Wrench className="w-4 h-4" />
                                <span className="font-semibold text-sm">Professional Installation</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                                Seamless Installation
                                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent pb-2">
                                    Process
                                </span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Site Assessment",
                                description: "Comprehensive evaluation of your roof structure, electrical system, and energy needs.",
                                icon: MapPin,
                                color: "from-red-500 to-orange-500",
                            },
                            {
                                step: "02",
                                title: "Custom Design",
                                description:
                                    "3D modeling and custom design tailored to your home's architecture and energy requirements.",
                                icon: Building,
                                color: "from-orange-500 to-red-500",
                            },
                            {
                                step: "03",
                                title: "Professional Install",
                                description: "Tesla-certified technicians handle complete roof replacement and system integration.",
                                icon: Wrench,
                                color: "from-red-600 to-orange-500",
                            },
                            {
                                step: "04",
                                title: "System Activation",
                                description: "Final inspection, grid connection, and Tesla app setup for monitoring and control.",
                                icon: Zap,
                                color: "from-orange-600 to-red-600",
                            },
                        ].map((process, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 200}>
                                <div className="relative">
                                    <div className="text-center space-y-6">
                                        <div className="relative">
                                            <div
                                                className={`w-20 h-20 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center mx-auto shadow-lg`}
                                            >
                                                <process.icon className="w-10 h-10 text-white" />
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                                                <span className="text-xs font-bold text-gray-700">{process.step}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="text-xl font-bold text-gray-900">{process.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{process.description}</p>
                                        </div>
                                    </div>

                                    {/* Connection Line */}
                                    {index < 3 && (
                                        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-red-200 to-orange-200 transform translate-x-4"></div>
                                    )}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-32 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-6 mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full shadow-lg">
                                <TrendingUp className="w-4 h-4" />
                                <span className="font-semibold text-sm">Maximum Benefits</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                                Why Choose
                                <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent pb-2">
                                    Tesla Solar Roof
                                </span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: DollarSign,
                                title: "Increase Home Value",
                                description:
                                    "Tesla Solar Roof can increase your home's value by up to 4% while providing decades of energy savings.",
                                stats: "Up to 4% value increase",
                            },
                            {
                                icon: Leaf,
                                title: "Environmental Impact",
                                description:
                                    "Reduce your carbon footprint by generating clean, renewable energy directly from your roof.",
                                stats: "Zero emissions energy",
                            },
                            {
                                icon: Shield,
                                title: "Superior Protection",
                                description: "Weather-resistant tiles protect your home better than traditional roofing materials.",
                                stats: "Class A fire rating",
                            },
                            {
                                icon: Clock,
                                title: "Long-Term Savings",
                                description:
                                    "Eliminate or drastically reduce your electricity bills for 25+ years with comprehensive warranty coverage.",
                                stats: "25+ year lifespan",
                            },
                            {
                                icon: Battery,
                                title: "Energy Independence",
                                description:
                                    "Pair with Tesla Powerwall for complete energy independence and backup power during outages.",
                                stats: "24/7 backup power",
                            },
                            {
                                icon: Smartphone,
                                title: "Smart Control",
                                description:
                                    "Monitor and control your energy system from anywhere with the intuitive Tesla mobile app.",
                                stats: "Real-time monitoring",
                            },
                        ].map((benefit, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 100}>
                                <Card className="bg-white border-2 border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                    <CardHeader className="text-center pb-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                            <benefit.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <CardTitle className="text-xl font-bold text-gray-900">{benefit.title}</CardTitle>
                                    </CardHeader>

                                    <CardContent className="space-y-4 flex-grow flex flex-col">
                                        <CardDescription className="text-gray-700 leading-relaxed flex-grow">
                                            {benefit.description}
                                        </CardDescription>
                                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-lg p-3 text-center">
                                            <span className="text-red-700 font-semibold text-sm">{benefit.stats}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
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
                                    Ready for Your
                                    <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent pb-4">
                                        Tesla Solar Roof?
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                                    Transform your home with the most advanced roofing technology available. Get your personalized Tesla
                                    Solar Roof quote today.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 border-2 border-orange-400/50"
                                >
                                    <Link href="/free-quote">
                                        <Target className="mr-2 h-5 w-5" />
                                        Get Solar Roof Quote
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

