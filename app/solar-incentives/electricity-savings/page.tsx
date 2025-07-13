import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Calculator,
    DollarSign,
    TrendingUp,
    Zap,
    TrendingDown,
    Shield,
    Home,
    CheckCircle,
    ArrowRight,
    Sparkles,
    BarChart3,
    PiggyBank,
    Lightbulb,
    Battery,
} from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Electricity Bill Savings with Solar | Reduce Your Electricity Costs Florida",
    description:
        "Discover how solar panels can dramatically reduce your electricity bill in Tampa Bay. See real savings examples, cost comparisons, and learn how to eliminate your electricity costs with solar energy.",
    keywords:
        "electricity bill savings Florida, reduce electricity costs Tampa Bay, solar savings calculator, eliminate electricity bill, solar vs utility costs, Tampa Bay electric rates, solar ROI Florida",
    alternates: {
        canonical: "/solar-incentives/electricity-savings",
    },
    openGraph: {
        title: "Electricity Bill Savings with Solar | Reduce Your Electricity Costs Florida",
        description:
            "Discover how solar panels can dramatically reduce your electricity bill in Tampa Bay with real savings examples and cost comparisons.",
        url: "https://relentlessenergy.org/solar-incentives/electricity-savings",
    },
}

export default function ElectricitySavingsPage() {
    return (
        <div className="min-h-screen bg-white pt-24 sm:pt-32">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50"></div>
                <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-500"></div>

                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto">
                        <ScrollReveal direction="fade" delay={200}>
                            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-red-100 shadow-lg mb-6">
                                <TrendingDown className="w-4 h-4 mr-2 text-red-600" />
                                <span className="text-sm font-semibold text-red-700">Slash Your Electricity Bill</span>
                                <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={400}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                                Eliminate Your{" "}
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 bg-clip-text text-transparent">
                                        Electricity Bill
                                    </span>
                                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-full"></span>
                                </span>{" "}
                                with Solar
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                                Stop paying rising electricity rates forever. Our Tampa Bay customers save an average of $150-300 per
                                month on their electricity bills with solar, and many achieve $0 electricity bills year-round.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                                <Button
                                    size="lg"
                                    className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                    asChild
                                >
                                    <Link href="/free-quote">
                                        <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                                        Calculate My Savings
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group border-2 border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 px-8 sm:px-10 py-3 sm:py-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                                    asChild
                                >
                                    <Link href="#savings-examples">
                                        See Real Examples
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>

                        {/* Quick Stats */}
                        <ScrollReveal direction="up" delay={1000}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">90-100%</div>
                                    <div className="text-gray-700 font-medium">Bill Reduction</div>
                                    <div className="text-sm text-gray-500">Average customer</div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-orange-600 mb-2">$2,400</div>
                                    <div className="text-gray-700 font-medium">Annual Savings</div>
                                    <div className="text-sm text-gray-500">Typical Tampa Bay home</div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">25+ Years</div>
                                    <div className="text-gray-700 font-medium">Guaranteed Savings</div>
                                    <div className="text-sm text-gray-500">System warranty</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Rising Electricity Rates Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-12">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                The Problem
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Florida Electricity Rates Keep Rising
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                While utility rates increase every year, solar provides predictable, locked-in energy costs that protect
                                you from future rate hikes.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="left" delay={400}>
                            <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-2xl text-gray-900">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                            <TrendingUp className="w-6 h-6 text-red-600" />
                                        </div>
                                        Tampa Electric Rate Increases
                                    </CardTitle>
                                    <CardDescription className="text-base text-gray-600 ml-14">
                                        Historical rate increases over the past decade
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100">
                                            <span className="font-semibold text-gray-700">2014 Average Rate:</span>
                                            <span className="text-lg font-bold text-gray-900">$0.11/kWh</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                                            <span className="font-semibold text-orange-800">2024 Average Rate:</span>
                                            <span className="text-lg font-bold text-orange-700">$0.14/kWh</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-red-100 rounded-xl border border-red-200">
                                            <span className="font-semibold text-red-800">Rate Increase:</span>
                                            <span className="text-xl font-bold text-red-700">+27%</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-red-200 rounded-xl border border-red-300">
                                            <span className="font-semibold text-red-900">Projected 2034:</span>
                                            <span className="text-xl font-bold text-red-800">$0.18/kWh</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={600}>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Rates Keep Rising:</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <TrendingUp className="w-5 h-5 text-red-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Infrastructure Upgrades</h4>
                                                <p className="text-gray-600">Aging power grid requires billions in modernization</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <TrendingUp className="w-5 h-5 text-red-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Fuel Costs</h4>
                                                <p className="text-gray-600">Natural gas and coal price volatility</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <TrendingUp className="w-5 h-5 text-red-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Storm Recovery</h4>
                                                <p className="text-gray-600">Hurricane damage repair costs passed to customers</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <TrendingUp className="w-5 h-5 text-red-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Regulatory Fees</h4>
                                                <p className="text-gray-600">Environmental compliance and regulatory costs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-400 rounded-xl">
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                            <Shield className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-green-800 text-lg mb-2">Solar Protection</h4>
                                            <p className="text-green-700">
                                                With solar, you lock in your energy costs for 25+ years. No more rate shock, no more
                                                unpredictable bills.
                                                <strong className="block mt-2 text-green-800">Your rate: $0.00/kWh from the sun!</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Real Savings Examples */}
            <section
                id="savings-examples"
                className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50"
            >
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 px-4 py-2 text-sm font-semibold">
                                Real Results
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Tampa Bay Customer Electricity Savings
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                See how our customers eliminated their electricity bills and started saving money from day one.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Home className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Tampa Family Home</CardTitle>
                                    <CardDescription className="text-gray-600">2,400 sq ft • 4 bedrooms</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center space-y-4">
                                    <div className="space-y-3">
                                        <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                                            <div className="text-sm text-red-600 font-medium">Before Solar</div>
                                            <div className="text-2xl font-bold text-red-700">$285/month</div>
                                        </div>
                                        <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                                            <div className="text-sm text-green-600 font-medium">After Solar</div>
                                            <div className="text-2xl font-bold text-green-700">$12/month</div>
                                        </div>
                                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                                            <div className="text-sm text-blue-600 font-medium">Monthly Savings</div>
                                            <div className="text-2xl font-bold text-blue-700">$273</div>
                                        </div>
                                    </div>
                                    <Badge className="bg-green-100 text-green-700 border-green-200 px-3 py-1">96% Reduction</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4 text-center">
                                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Home className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">St. Petersburg Condo</CardTitle>
                                    <CardDescription className="text-gray-600">1,800 sq ft • 3 bedrooms</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center space-y-4">
                                    <div className="space-y-3">
                                        <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                                            <div className="text-sm text-red-600 font-medium">Before Solar</div>
                                            <div className="text-2xl font-bold text-red-700">$195/month</div>
                                        </div>
                                        <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                                            <div className="text-sm text-green-600 font-medium">After Solar</div>
                                            <div className="text-2xl font-bold text-green-700">$0/month</div>
                                        </div>
                                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                                            <div className="text-sm text-blue-600 font-medium">Monthly Savings</div>
                                            <div className="text-2xl font-bold text-blue-700">$195</div>
                                        </div>
                                    </div>
                                    <Badge className="bg-green-100 text-green-700 border-green-200 px-3 py-1">100% Reduction</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4 text-center">
                                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Home className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Clearwater Pool Home</CardTitle>
                                    <CardDescription className="text-gray-600">3,200 sq ft • Pool & Spa</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center space-y-4">
                                    <div className="space-y-3">
                                        <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                                            <div className="text-sm text-red-600 font-medium">Before Solar</div>
                                            <div className="text-2xl font-bold text-red-700">$425/month</div>
                                        </div>
                                        <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                                            <div className="text-sm text-green-600 font-medium">After Solar</div>
                                            <div className="text-2xl font-bold text-green-700">$18/month</div>
                                        </div>
                                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                                            <div className="text-sm text-blue-600 font-medium">Monthly Savings</div>
                                            <div className="text-2xl font-bold text-blue-700">$407</div>
                                        </div>
                                    </div>
                                    <Badge className="bg-green-100 text-green-700 border-green-200 px-3 py-1">96% Reduction</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal direction="up" delay={1000}>
                        <div className="text-center">
                            <div className="inline-flex items-center px-8 py-4 bg-white rounded-2xl shadow-md border border-gray-100">
                                <span className="text-gray-700 font-medium mr-3">Average Annual Savings:</span>
                                <span className="text-3xl font-bold text-green-600">$3,276</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* How Solar Eliminates Your Bill */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                How It Works
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                How Solar Eliminates Your Electricity Bill
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Understanding the simple process of how solar panels reduce your electricity costs to near zero.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="h-full text-center bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Lightbulb className="w-10 h-10 text-yellow-600" />
                                    </div>
                                    <CardTitle className="text-lg text-gray-900">1. Solar Production</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Your solar panels convert sunlight into electricity throughout the day, powering your home directly.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <Card className="h-full text-center bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Zap className="w-10 h-10 text-green-600" />
                                    </div>
                                    <CardTitle className="text-lg text-gray-900">2. Net Metering</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Excess energy is sent to the grid, earning you credits at full retail rates for later use.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <Card className="h-full text-center bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Battery className="w-10 h-10 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-lg text-gray-900">3. Evening Usage</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        At night, you use your banked credits instead of paying for expensive grid electricity.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1000}>
                            <Card className="h-full text-center bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <PiggyBank className="w-10 h-10 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-lg text-gray-900">4. Zero Bill</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Your solar production offsets your usage, resulting in minimal or zero electricity bills.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Lifetime Savings Calculator */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600 text-white overflow-hidden relative">
                {/* Background Animation */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your 25-Year Electricity Savings Projection</h2>
                            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                                See how much you'll save over the life of your solar system with rising electricity rates.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="left" delay={400}>
                            <div className="space-y-6">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-medium">Without Solar (25 years):</span>
                                        <span className="text-2xl font-bold text-red-200">$89,500</span>
                                    </div>
                                    <div className="text-sm opacity-75">Assuming 3% annual rate increases</div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-medium">With Solar (25 years):</span>
                                        <span className="text-2xl font-bold text-green-200">$4,500</span>
                                    </div>
                                    <div className="text-sm opacity-75">Minimal connection fees only</div>
                                </div>

                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xl font-bold">Total Savings:</span>
                                        <span className="text-3xl font-bold text-yellow-200">$85,000</span>
                                    </div>
                                    <div className="text-sm opacity-75">Over 25 years</div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={600}>
                            <div className="text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                    <BarChart3 className="w-24 h-24 mx-auto mb-6 text-white/80" />
                                    <h3 className="text-2xl font-bold mb-4">Break-Even Analysis</h3>
                                    <div className="space-y-4 text-left">
                                        <div className="flex justify-between">
                                            <span>System Cost:</span>
                                            <span className="font-bold">$30,000</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Federal Tax Credit (30%):</span>
                                            <span className="font-bold text-green-200">-$9,000</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Net Investment:</span>
                                            <span className="font-bold">$21,000</span>
                                        </div>
                                        <div className="border-t border-white/20 pt-4">
                                            <div className="flex justify-between text-lg">
                                                <span>Payback Period:</span>
                                                <span className="font-bold text-yellow-200">7.2 Years</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal direction="up" delay={800}>
                        <div className="text-center mt-12">
                            <Button
                                size="lg"
                                className="group bg-white text-red-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                asChild
                            >
                                <Link href="/free-quote">
                                    <Calculator className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                                    Get My Personal Savings Report
                                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Additional Benefits */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Beyond Savings
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Additional Benefits of Solar
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Electricity bill savings are just the beginning. Solar provides multiple financial and lifestyle
                                benefits.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <TrendingUp className="w-8 h-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Increased Home Value</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        Solar systems increase home value by an average of 4%, with no additional property taxes in Florida.
                                    </p>
                                    <Badge className="bg-green-100 text-green-700 border-green-200 px-3 py-1">+$12,000 Value</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Shield className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Energy Independence</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        Reduce dependence on the grid and protect against power outages with battery backup options.
                                    </p>
                                    <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">24/7 Power</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4 text-center">
                                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Sparkles className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Environmental Impact</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        Reduce your carbon footprint by 3-4 tons of CO2 annually - equivalent to planting 100+ trees.
                                    </p>
                                    <Badge className="bg-purple-100 text-purple-700 border-purple-200 px-3 py-1">Green Energy</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-orange-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-red-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300">
                                <DollarSign className="w-12 h-12 text-white" />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Start Saving Today</h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                                Join thousands of Tampa Bay homeowners who have eliminated their electricity bills with solar. Get a
                                free, personalized savings analysis and see exactly how much you can save.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                                <Button
                                    size="lg"
                                    className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                    asChild
                                >
                                    <Link href="/free-quote">
                                        Calculate My Exact Savings
                                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group border-2 border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 px-10 py-4 rounded-2xl bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                                    asChild
                                >
                                    <Link href="/incentives">
                                        View All Incentives
                                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                                <div className="flex flex-col items-center space-y-3 group">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Free Consultation</span>
                                </div>
                                <div className="flex flex-col items-center space-y-3 group">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">No Obligation Quote</span>
                                </div>
                                <div className="flex flex-col items-center space-y-3 group">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Tesla Certified</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
                                    * Savings estimates based on average Tampa Bay area electricity usage and current utility rates.
                                    Individual results may vary based on energy consumption, roof conditions, and system size. All
                                    calculations include applicable federal and state incentives.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
