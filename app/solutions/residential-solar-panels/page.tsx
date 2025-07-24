import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Shield,
    Phone,
    ArrowRight,
    CheckCircle,
    Star,
    Zap,
    DollarSign,
    Calculator,
    Users,
    Battery,
    Wrench,
    FileText,
    Sun,
    CreditCard,
    TrendingUp,
    Award,
    Smartphone,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Residential Solar Panel Installation in Tampa Bay | Relentless Energy",
    description:
        "Professional residential solar panel installation in Tampa Bay, Florida. Tesla Certified installer offering custom solar solutions, flexible financing options, 25-year warranty, and $0 down financing. Get your free quote today!",
    keywords:
        "residential solar panels Tampa Bay, home solar installation Florida, solar panels for homes St Petersburg, residential solar Clearwater, home solar systems Largo, solar panel installation cost Florida, solar financing options",
    alternates: {
        canonical: "/solutions/residential-solar-panels",
    },
}

export default function ResidentialSolarPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-[120px] sm:pt-[140px] overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    {/* Large Animated Gradient Orbs */}
                    <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-red-400/30 to-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                        className="absolute top-1/2 right-1/3 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-yellow-400/25 to-red-400/25 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                    ></div>

                    {/* Medium Floating Orbs */}
                    <div
                        className="absolute top-20 right-20 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-red-300/20 to-orange-300/20 rounded-full blur-2xl animate-bounce"
                        style={{ animationDuration: "3s", animationDelay: "0.2s" }}
                    ></div>
                    <div
                        className="absolute bottom-20 left-20 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-orange-300/15 to-yellow-300/15 rounded-full blur-2xl animate-bounce"
                        style={{ animationDuration: "4s", animationDelay: "1.5s" }}
                    ></div>
                    <div
                        className="absolute top-3/4 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-yellow-300/25 to-red-300/25 rounded-full blur-xl animate-bounce"
                        style={{ animationDuration: "2.5s", animationDelay: "0.8s" }}
                    ></div>

                    {/* Small Floating Particles */}
                    <div
                        className="absolute top-32 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-red-400/40 rounded-full animate-ping"
                        style={{ animationDelay: "0.3s" }}
                    ></div>
                    <div
                        className="absolute bottom-40 right-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-orange-400/50 rounded-full animate-ping"
                        style={{ animationDelay: "1.2s" }}
                    ></div>
                    <div
                        className="absolute top-2/3 left-16 w-2 h-2 bg-yellow-400/60 rounded-full animate-ping"
                        style={{ animationDelay: "0.7s" }}
                    ></div>

                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.04)_1px,transparent_0)] bg-[length:40px_40px]"></div>

                    {/* Minimal geometric shapes */}
                    <div className="absolute top-32 right-20 w-16 h-16 sm:w-24 sm:h-24 border border-red-100 rounded-full opacity-40"></div>
                    <div className="absolute bottom-40 left-16 w-12 h-12 sm:w-16 sm:h-16 border border-orange-100 rotate-45 opacity-30"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 sm:pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-6 sm:space-y-8">
                            {/* Simple Badge */}
                            <ScrollReveal direction="up">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full">
                                    <Sun className="w-4 h-4 text-red-500" />
                                    <span className="text-sm font-medium text-red-700">Residential Solar Solutions</span>
                                </div>
                            </ScrollReveal>

                            {/* Clean Typography */}
                            <ScrollReveal direction="up" delay={100}>
                                <div className="space-y-4 sm:space-y-6">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                        Solar for Your
                                        <span className="text-red-500 block">Florida Home</span>
                                    </h1>
                                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                                        Achieve energy independence with flexible financing options. Own your system from day one with $0
                                        down solar loans or choose hassle-free lease options.
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Simple CTAs */}
                            <ScrollReveal direction="up" delay={200}>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold"
                                    >
                                        <Link href="/free-quote">
                                            Free Solar Consultation
                                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold bg-transparent"
                                    >
                                        <Link href="tel:386-832-1119">
                                            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                            (386) 832-1119
                                        </Link>
                                    </Button>
                                </div>
                            </ScrollReveal>

                            {/* Clean Stats */}
                            <ScrollReveal direction="up" delay={300}>
                                <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-1">25</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Year Warranty</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">$0</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Down Payment</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">90%</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Bill Reduction</div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Content - Clean Image */}
                        <ScrollReveal direction="right">
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/images/residential-solar-installation.jpg"
                                        alt="Modern home with solar panels"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                        priority
                                    />
                                </div>

                                {/* Simple floating badge */}
                                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg shadow-lg">
                                    <div className="text-xs sm:text-sm font-semibold">Tesla Certified</div>
                                </div>

                                {/* Simple savings indicator */}
                                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-lg p-3 sm:p-4 shadow-lg border">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-base sm:text-lg font-bold text-gray-900">$2,400</div>
                                            <div className="text-xs sm:text-sm text-gray-600">Avg. Annual Savings</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Flexible Financing Options Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Flexible Financing Options</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Choose the payment option that works best for your budget and financial goals. We make solar affordable
                                for every homeowner.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <ScrollReveal direction="up" delay={0}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-red-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <Badge className="bg-red-600 text-white w-fit mx-auto mb-2">Most Popular</Badge>
                                    <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Solar Loan</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">
                                        Own your system from day one. Replace your utility bill with a predictable, often lower loan
                                        payment.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm text-left mb-4">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            $0 down payment available
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            You own the system immediately
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Eligible for all tax credits
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Competitive interest rates
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={100}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Solar Lease</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">
                                        Pay a fixed monthly fee to "rent" the system. We own and maintain it for you.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm text-left mb-4">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Little to no upfront cost
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            No maintenance responsibility
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Immediate energy savings
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Fixed monthly payment
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={200}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Power Purchase Agreement</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">
                                        Pay only for the power you produce at a rate lower than your utility company.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm text-left mb-4">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            No upfront cost
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Pay per kWh produced
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Lower rate than utility
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Direct bill comparison
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={300}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-yellow-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Cash Purchase</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">
                                        Pay upfront for the highest return on investment and immediate ownership benefits.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm text-left mb-4">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Highest ROI
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            No loan payments
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Full ownership benefits
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Maximum tax benefits
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Equipment Tiers Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                Good, Better, Best Equipment Options
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Choose the solar technology that matches your budget and performance needs. All options come with
                                comprehensive warranties and professional installation.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                        <ScrollReveal direction="left">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <Badge className="bg-gray-600 text-white w-fit mb-2">Good</Badge>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Standard Tier</CardTitle>
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Reliable, cost-effective solar solution for budget-conscious homeowners
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-gray-900">Solar Panels:</h4>
                                        <p className="text-sm text-gray-600">Qcells, Trina Solar - Proven reliability and performance</p>

                                        <h4 className="font-semibold text-gray-900">Inverters:</h4>
                                        <p className="text-sm text-gray-600">
                                            String Inverters - Cost-effective for simple, unshaded roofs
                                        </p>
                                    </div>

                                    <ul className="space-y-2 text-xs sm:text-sm flex-grow">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            20-year panel warranty
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Reliable performance guarantee
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Professional installation
                                        </li>
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <div className="text-xl sm:text-2xl font-bold text-gray-900">Most Affordable</div>
                                        <div className="text-xs sm:text-sm text-gray-500">Best value for budget-conscious buyers</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-blue-200 h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <Badge className="bg-blue-600 text-white w-fit mb-2">Better</Badge>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Premium Tier</CardTitle>
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        High-efficiency panels with advanced monitoring for optimal performance
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-gray-900">Solar Panels:</h4>
                                        <p className="text-sm text-gray-600">REC, SunPower - High-efficiency, all-black aesthetic</p>

                                        <h4 className="font-semibold text-gray-900">Inverters:</h4>
                                        <p className="text-sm text-gray-600">
                                            Microinverters/Optimizers - Panel-level monitoring and optimization
                                        </p>
                                    </div>

                                    <ul className="space-y-2 text-xs sm:text-sm flex-grow">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            25-year panel warranty
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Panel-level monitoring
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Ideal for complex roofs
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Sleek all-black design
                                        </li>
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <div className="text-xl sm:text-2xl font-bold text-blue-600">Enhanced Performance</div>
                                        <div className="text-xs sm:text-sm text-gray-500">Perfect balance of cost and performance</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-red-200 h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <Badge className="bg-red-600 text-white w-fit mb-2">Best</Badge>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Premium + Storage</CardTitle>
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Complete energy independence with premium panels and battery backup
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-gray-900">Solar Panels:</h4>
                                        <p className="text-sm text-gray-600">
                                            Maxeon, SunPower - Highest efficiency and longest warranties
                                        </p>

                                        <h4 className="font-semibold text-gray-900">Energy Storage:</h4>
                                        <p className="text-sm text-gray-600">Tesla Powerwall, Enphase IQ Battery, SolarEdge Energy Bank</p>
                                    </div>

                                    <ul className="space-y-2 text-xs sm:text-sm flex-grow">
                                        <li className="flex items-center">
                                            <Battery className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-2" />
                                            Backup power during outages
                                        </li>
                                        <li className="flex items-center">
                                            <Battery className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-2" />
                                            Store excess solar energy
                                        </li>
                                        <li className="flex items-center">
                                            <Battery className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-2" />
                                            Avoid peak utility rates
                                        </li>
                                        <li className="flex items-center">
                                            <Battery className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-2" />
                                            Complete energy independence
                                        </li>
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <div className="text-xl sm:text-2xl font-bold text-red-600">Ultimate Solution</div>
                                        <div className="text-xs sm:text-sm text-gray-500">Maximum performance and energy security</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Turnkey Service Model */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Hassle-Free Turnkey Service</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                We handle everything from initial consultation to system activation. Sit back and let our experts take
                                care of your solar journey.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
                        {[
                            {
                                step: "1",
                                title: "Free Solar Consultation",
                                description: "Detailed analysis of your energy usage, roof condition, and potential savings",
                                icon: Users,
                                color: "bg-red-100 text-red-600",
                            },
                            {
                                step: "2",
                                title: "Custom System Design",
                                description: "Professional proposal with 3D rendering and clear financial projections",
                                icon: FileText,
                                color: "bg-blue-100 text-blue-600",
                            },
                            {
                                step: "3",
                                title: "Full Project Management",
                                description: "We handle permits, HOA applications, and utility interconnection paperwork",
                                icon: CheckCircle,
                                color: "bg-green-100 text-green-600",
                            },
                            {
                                step: "4",
                                title: "Professional Installation",
                                description: "Certified installation crews complete your system in 1-2 days",
                                icon: Wrench,
                                color: "bg-purple-100 text-purple-600",
                            },
                            {
                                step: "5",
                                title: "System Activation & Support",
                                description: "System activation, monitoring app walkthrough, and warranty information",
                                icon: Smartphone,
                                color: "bg-yellow-100 text-yellow-600",
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
                                        <div className="absolute -top-2 -right-2 bg-red-600 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
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

            {/* Warranties Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                Rock-Solid Warranty Protection
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Your investment is protected with our comprehensive three-tiered warranty system, giving you complete
                                peace of mind.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        <ScrollReveal direction="left">
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Product Warranty</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 flex-grow">
                                        Manufacturer warranty covering defects in materials and workmanship for your solar panels and
                                        equipment.
                                    </CardDescription>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <div className="text-2xl font-bold text-blue-600">25-30 Years</div>
                                        <div className="text-sm text-blue-700">Panel Coverage</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up">
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-red-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <Badge className="bg-red-600 text-white w-fit mx-auto mb-2">Performance Guarantee</Badge>
                                    <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Performance Warranty</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 flex-grow">
                                        Manufacturer guarantee that panels will produce a certain percentage of their rated power after 25
                                        years.
                                    </CardDescription>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600">80-85%</div>
                                        <div className="text-sm text-green-700">Power After 25 Years</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-red-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Workmanship Warranty</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 flex-grow">
                                        Our guarantee on installation quality and workmanship. This is our key differentiator that builds
                                        trust.
                                    </CardDescription>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <div className="text-2xl font-bold text-red-600">10-25 Years</div>
                                        <div className="text-sm text-red-700">Installation Quality</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">What Our Customers Say</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Don&apos;t just take our word for it. Here&apos;s what Florida homeowners are saying about their solar
                                experience.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                location: "St. Petersburg, FL",
                                rating: 5,
                                text: "The solar loan option made going solar so affordable! Our monthly loan payment is less than our old electric bill, and we own the system. The installation was professional and completed in one day.",
                                savings: "$3,300/year",
                                financing: "Solar Loan",
                            },
                            {
                                name: "Mike Rodriguez",
                                location: "Clearwater, FL",
                                rating: 5,
                                text: "We chose the Premium tier with Tesla Powerwall. The panel-level monitoring is amazing, and the battery keeps our power on during storms. Best investment we've ever made!",
                                savings: "$2,400/year",
                                financing: "Cash Purchase",
                            },
                            {
                                name: "Jennifer Chen",
                                location: "Largo, FL",
                                rating: 5,
                                text: "The lease option was perfect for us - no upfront costs and immediate savings. The team handled everything from permits to installation. Our system produces more energy than expected!",
                                savings: "$1,800/year",
                                financing: "Solar Lease",
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
                                        <Badge className="bg-blue-100 text-blue-700 w-fit">{testimonial.financing}</Badge>
                                    </CardHeader>
                                    <CardContent className="space-y-4 flex-grow flex flex-col">
                                        <p className="text-sm sm:text-base text-gray-600 italic flex-grow">
                                            &quot;{testimonial.text}&quot;
                                        </p>
                                        <div className="bg-green-50 p-3 rounded-lg mt-auto">
                                            <div className="text-base sm:text-lg font-bold text-green-600">Saving {testimonial.savings}</div>
                                            <div className="text-xs sm:text-sm text-green-700">Annual electricity savings</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-red-600 to-red-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal direction="up">
                        <div className="space-y-6 sm:space-y-8">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                Ready to Start Your Solar Journey?
                            </h2>
                            <p className="text-lg sm:text-xl text-red-100 max-w-3xl mx-auto">
                                Join thousands of Florida homeowners who are saving money and achieving energy independence with
                                flexible solar financing options. Get your free, no-obligation consultation today!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-red-600 hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto font-semibold group"
                                >
                                    <Link href="/free-quote">
                                        Free Solar Consultation
                                        <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto bg-transparent"
                                >
                                    <Link href="tel:386-832-1119">
                                        <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                                        Call (386) 832-1119
                                    </Link>
                                </Button>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 sm:pt-8">
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                                    <span className="text-white font-medium text-sm sm:text-base">Free Consultation</span>
                                </div>
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                                    <span className="text-white font-medium text-sm sm:text-base">Flexible Financing</span>
                                </div>
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                                    <span className="text-white font-medium text-sm sm:text-base">Turnkey Service</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    )
}

