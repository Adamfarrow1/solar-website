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
    Battery,
    Zap,
    Shield,
    Home,
    Smartphone,
    Wrench,
    FileText,
    Users,
    Star,
    DollarSign,
    Award,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Tesla Powerwall & Home Battery Backup in Tampa Bay | Relentless Energy",
    description:
        "Tesla Powerwall installation in Tampa Bay, Florida. Keep your power on during outages with home battery backup systems. Tesla Certified installer with 10-year warranty.",
    keywords:
        "Tesla Powerwall Tampa Bay, home battery backup Florida, battery storage St Petersburg, power outage protection Clearwater, solar battery Largo, home energy storage Florida",
    alternates: {
        canonical: "/solutions/home-battery-backup",
    },
}

export default function HomeBatteryBackupPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-[120px] sm:pt-[140px] overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    {/* Large Animated Gradient Orbs */}
                    <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                        className="absolute top-1/2 right-1/3 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-red-400/25 to-orange-400/25 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                    ></div>

                    {/* Medium Floating Orbs */}
                    <div
                        className="absolute top-20 right-20 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-2xl animate-bounce"
                        style={{ animationDuration: "3s", animationDelay: "0.2s" }}
                    ></div>
                    <div
                        className="absolute bottom-20 left-20 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-300/15 to-red-300/15 rounded-full blur-2xl animate-bounce"
                        style={{ animationDuration: "4s", animationDelay: "1.5s" }}
                    ></div>
                    <div
                        className="absolute top-3/4 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-red-300/25 to-orange-300/25 rounded-full blur-xl animate-bounce"
                        style={{ animationDuration: "2.5s", animationDelay: "0.8s" }}
                    ></div>

                    {/* Small Floating Particles */}
                    <div
                        className="absolute top-32 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/40 rounded-full animate-ping"
                        style={{ animationDelay: "0.3s" }}
                    ></div>
                    <div
                        className="absolute bottom-40 right-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400/50 rounded-full animate-ping"
                        style={{ animationDelay: "1.2s" }}
                    ></div>
                    <div
                        className="absolute top-2/3 left-16 w-2 h-2 bg-red-400/60 rounded-full animate-ping"
                        style={{ animationDelay: "0.7s" }}
                    ></div>

                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.04)_1px,transparent_0)] bg-[length:40px_40px]"></div>

                    {/* Minimal geometric shapes */}
                    <div className="absolute top-32 right-20 w-16 h-16 sm:w-28 sm:h-28 border border-blue-100 rounded-lg rotate-12 opacity-40"></div>
                    <div className="absolute bottom-40 left-16 w-12 h-12 sm:w-20 sm:h-20 border border-purple-100 rounded-full opacity-30"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-6 sm:space-y-8">
                            {/* Simple Badge */}
                            <ScrollReveal direction="up">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                                    <Battery className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm font-medium text-blue-700">Home Battery Backup</span>
                                </div>
                            </ScrollReveal>

                            {/* Clean Typography */}
                            <ScrollReveal direction="up" delay={100}>
                                <div className="space-y-4 sm:space-y-6">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                        Never Lose Power
                                        <span className="text-blue-500 block">Again</span>
                                    </h1>
                                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                                        Keep your lights on during outages with Tesla Powerwall and home battery backup systems. Tesla
                                        Certified installer.
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Simple CTAs */}
                            <ScrollReveal direction="up" delay={200}>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold"
                                    >
                                        <Link href="/free-quote">
                                            Get Battery Quote
                                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold bg-transparent"
                                    >
                                        <Link href="tel:727-555-0123">
                                            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                            (727) 555-0123
                                        </Link>
                                    </Button>
                                </div>
                            </ScrollReveal>

                            {/* Clean Stats */}
                            <ScrollReveal direction="up" delay={300}>
                                <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">13.5</div>
                                        <div className="text-xs sm:text-sm text-gray-600">kWh Capacity</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">10</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Year Warranty</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">24/7</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Monitoring</div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Content - Clean Image */}
                        <ScrollReveal direction="right">
                            <div className="relative order-first lg:order-last">
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/images/tesla-powerwall-home.png"
                                        alt="Tesla Powerwall installed in modern home"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                        priority
                                    />
                                </div>

                                {/* Simple floating badge */}
                                <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg shadow-lg">
                                    <div className="text-xs sm:text-sm font-semibold">Tesla Certified</div>
                                </div>

                                {/* Simple backup indicator */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-3 sm:p-4 shadow-lg border">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-base sm:text-lg font-bold text-gray-900">24/7</div>
                                            <div className="text-xs sm:text-sm text-gray-600">Backup Power</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Why Battery Backup Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                Why Florida Homes Need Battery Backup
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Florida&apos;s weather can be unpredictable. Don&apos;t let power outages disrupt your life, work, or
                                family&apos;s comfort and safety.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <ScrollReveal direction="up" delay={0}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-red-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                                        <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Storm Protection</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Keep essential appliances running during hurricanes, thunderstorms, and grid outages.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={100}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                                        <Home className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Home Security</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Keep security systems, garage doors, and smart home devices powered and functional.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={200}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                                        <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Save Money</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Use stored energy during peak rate hours to reduce your electricity bills.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={300}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                                        <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Peace of Mind</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Never worry about power outages affecting your family&apos;s comfort and safety again.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Tesla Powerwall Features */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                                <Battery className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium text-blue-700">Tesla Powerwall</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                The World&apos;s Most Advanced Home Battery
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Tesla Powerwall is a compact home battery that stores energy from solar or the grid to power your home
                                when you need it most.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Left Content - Features */}
                        <ScrollReveal direction="left">
                            <div className="space-y-6 sm:space-y-8">
                                <div className="space-y-4 sm:space-y-6">
                                    {[
                                        {
                                            icon: Battery,
                                            title: "13.5 kWh Capacity",
                                            description: "Store enough energy to power your essential appliances for hours or even days.",
                                            color: "bg-blue-100 text-blue-600",
                                        },
                                        {
                                            icon: Zap,
                                            title: "Seamless Backup",
                                            description: "Automatically switches to battery power in milliseconds when the grid goes down.",
                                            color: "bg-yellow-100 text-yellow-600",
                                        },
                                        {
                                            icon: Smartphone,
                                            title: "Mobile App Control",
                                            description: "Monitor and control your Powerwall from anywhere with the Tesla mobile app.",
                                            color: "bg-green-100 text-green-600",
                                        },
                                        {
                                            icon: Shield,
                                            title: "Weather Resistant",
                                            description: "Built to withstand Florida&apos;s harsh weather conditions with IP67 rating.",
                                            color: "bg-purple-100 text-purple-600",
                                        },
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div
                                                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg ${feature.color} flex items-center justify-center flex-shrink-0`}
                                            >
                                                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-blue-50 p-4 sm:p-6 rounded-2xl border border-blue-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                                        <h4 className="text-base sm:text-lg font-semibold text-blue-900">Tesla Certified Installation</h4>
                                    </div>
                                    <p className="text-sm sm:text-base text-blue-700">
                                        As a Tesla Certified installer, we ensure your Powerwall is installed to Tesla&apos;s exact
                                        specifications with full warranty coverage.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Right Content - Image */}
                        <ScrollReveal direction="right">
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/images/tesla-powerwall-features.png"
                                        alt="Tesla Powerwall features and specifications"
                                        width={600}
                                        height={500}
                                        className="w-full h-auto"
                                    />
                                </div>

                                {/* Floating spec cards */}
                                <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-lg border">
                                    <div className="text-center">
                                        <div className="text-lg sm:text-xl font-bold text-blue-600">13.5</div>
                                        <div className="text-xs text-gray-600">kWh Storage</div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg border">
                                    <div className="text-center">
                                        <div className="text-lg sm:text-xl font-bold text-green-600">10</div>
                                        <div className="text-xs text-gray-600">Year Warranty</div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Battery Solutions */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                Complete Battery Backup Solutions
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Choose the perfect battery backup solution for your home&apos;s energy needs and budget.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                        <ScrollReveal direction="left">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <Image
                                        src="/images/single-powerwall.png"
                                        alt="Single Tesla Powerwall installation"
                                        width={400}
                                        height={250}
                                        className="w-full h-40 sm:h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Essential Backup</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Single Powerwall for essential circuits like lights, refrigerator, and Wi-Fi during outages.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm flex-grow">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            13.5 kWh storage capacity
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Powers essential circuits
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            8-12 hours backup time
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Mobile app monitoring
                                        </li>
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <div className="text-xl sm:text-2xl font-bold text-blue-600">Starting at $12,000</div>
                                        <div className="text-xs sm:text-sm text-gray-500">Installed with solar</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-blue-200 h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <Badge className="bg-blue-600 text-white w-fit mb-2">Most Popular</Badge>
                                    <Image
                                        src="/images/dual-powerwall.png"
                                        alt="Dual Tesla Powerwall installation"
                                        width={400}
                                        height={250}
                                        className="w-full h-40 sm:h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Whole Home Backup</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Two Powerwalls for complete home backup including AC, appliances, and all electrical loads.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm flex-grow">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            27 kWh total storage
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Powers entire home
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            1-3 days backup time
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Includes AC and appliances
                                        </li>
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <div className="text-xl sm:text-2xl font-bold text-blue-600">Starting at $22,000</div>
                                        <div className="text-xs sm:text-sm text-gray-500">Installed with solar</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <Image
                                        src="/images/triple-powerwall.png"
                                        alt="Triple Tesla Powerwall installation"
                                        width={400}
                                        height={250}
                                        className="w-full h-40 sm:h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Extended Backup</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Three or more Powerwalls for maximum backup duration and high-energy homes.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm flex-grow">
                                        <li className="flex items-center">
                                            <Battery className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-2" />
                                            40.5+ kWh storage
                                        </li>
                                        <li className="flex items-center">
                                            <Battery className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-2" />
                                            Multi-day backup power
                                        </li>
                                        <li className="flex items-center">
                                            <Battery className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-2" />
                                            Large homes & high usage
                                        </li>
                                        <li className="flex items-center">
                                            <Battery className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-2" />
                                            Maximum energy independence
                                        </li>
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <div className="text-xl sm:text-2xl font-bold text-blue-600">Custom Pricing</div>
                                        <div className="text-xs sm:text-sm text-gray-500">Based on home requirements</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Simple Installation Process</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Our Tesla Certified technicians handle everything from design to activation, ensuring a seamless
                                installation experience.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            {
                                step: "1",
                                title: "Home Assessment",
                                description: "Evaluate your home's electrical system and energy needs",
                                icon: Users,
                                color: "bg-blue-100 text-blue-600",
                            },
                            {
                                step: "2",
                                title: "Custom Design",
                                description: "Design the optimal battery backup system for your home",
                                icon: FileText,
                                color: "bg-green-100 text-green-600",
                            },
                            {
                                step: "3",
                                title: "Professional Installation",
                                description: "Tesla Certified installation in 4-6 hours",
                                icon: Wrench,
                                color: "bg-purple-100 text-purple-600",
                            },
                            {
                                step: "4",
                                title: "System Activation",
                                description: "Connect to Tesla app and begin monitoring",
                                icon: Smartphone,
                                color: "bg-orange-100 text-orange-600",
                            },
                        ].map((item, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 100}>
                                <div className="text-center space-y-4">
                                    <div className="relative">
                                        <div
                                            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300`}
                                        >
                                            <item.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                                            {item.step}
                                        </div>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">What Our Customers Say</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Florida homeowners love the peace of mind that comes with Tesla Powerwall backup power.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                name: "Maria Gonzalez",
                                location: "Tampa, FL",
                                rating: 5,
                                text: "During Hurricane Ian, our Powerwall kept our power on for 3 days while our neighbors were in the dark. Best investment we've ever made!",
                                system: "2 Powerwalls + Solar",
                            },
                            {
                                name: "David Thompson",
                                location: "St. Petersburg, FL",
                                rating: 5,
                                text: "The Tesla app is amazing - I can monitor our energy usage and battery levels from anywhere. Installation was quick and professional.",
                                system: "1 Powerwall + Solar",
                            },
                            {
                                name: "Lisa Chen",
                                location: "Clearwater, FL",
                                rating: 5,
                                text: "We save money during peak hours by using stored battery power. The system has paid for itself faster than expected.",
                                system: "3 Powerwalls + Solar",
                            },
                        ].map((testimonial, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 100}>
                                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                    <CardHeader className="flex-shrink-0">
                                        <div className="flex items-center space-x-1 mb-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <CardTitle className="text-base sm:text-lg text-gray-900">{testimonial.name}</CardTitle>
                                        <CardDescription className="text-xs sm:text-sm text-gray-500">
                                            {testimonial.location}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4 flex-grow flex flex-col">
                                        <p className="text-sm sm:text-base text-gray-600 italic flex-grow">
                                            &quot;{testimonial.text}&quot;
                                        </p>
                                        <div className="bg-blue-50 p-3 rounded-lg mt-auto">
                                            <div className="text-sm sm:text-base font-semibold text-blue-600">{testimonial.system}</div>
                                            <div className="text-xs text-blue-700">System Configuration</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal direction="up">
                        <div className="space-y-6 sm:space-y-8">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                Ready for Reliable Backup Power?
                            </h2>
                            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
                                Don&apos;t let the next storm leave you in the dark. Get Tesla Powerwall installed by Florida&apos;s
                                certified experts and enjoy peace of mind year-round.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto font-semibold group"
                                >
                                    <Link href="/free-quote">
                                        Get Your Battery Quote
                                        <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto bg-transparent"
                                >
                                    <Link href="tel:727-555-0123">
                                        <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                                        Call (727) 555-0123
                                    </Link>
                                </Button>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 sm:pt-8">
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                                    <span className="text-white font-medium text-sm sm:text-base">Tesla Certified</span>
                                </div>
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                                    <span className="text-white font-medium text-sm sm:text-base">10-Year Warranty</span>
                                </div>
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                                    <span className="text-white font-medium text-sm sm:text-base">Same Day Quote</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    )
}
