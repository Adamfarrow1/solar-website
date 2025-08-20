import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Calculator,
    CreditCard,
    Home,
    CheckCircle,
    ArrowRight,
    HelpCircle,
    Banknote,
    PiggyBank,
    Clock,
} from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Solar Financing Options Florida | $0 Down Solar Loans | Relentless Energy",
    description:
        "Explore flexible solar financing options in Florida. $0 down solar loans, PACE financing, and cash purchase options. Make solar affordable with our financing programs.",
    keywords:
        "solar financing Florida, solar loans, $0 down solar, PACE financing, solar payment plans, affordable solar, Tampa Bay solar financing, solar lease alternatives",
    alternates: {
        canonical: "/solar-power-electricity-savings/solar-panel-financing",
    },
    openGraph: {
        title: "Solar Financing Options Florida | $0 Down Solar Loans",
        description:
            "Explore flexible solar financing options in Florida. $0 down solar loans, PACE financing, and cash purchase options.",
        url: "https://relentlessenergy.org/solar-power-electricity-savings/solar-panel-financing",
    },
}

export default function SolarFinancingPage() {
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
                                <CreditCard className="w-4 h-4 mr-2 text-red-600" />
                                <span className="text-sm font-semibold text-red-700">Solar Financing Options</span>
                                <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={400}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                                Make Solar{" "}
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 bg-clip-text text-transparent">
                                        Affordable Today
                                    </span>
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-full"></div>
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                                Go solar with $0 down and start saving immediately. Choose from flexible financing options designed to
                                fit your budget, with payments often lower than your current electricity bill.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                                <Button
                                    size="lg"
                                    className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                    asChild
                                >
                                    <Link href="/contact">
                                        <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                                        Get Pre-Qualified
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group border-2 border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 px-8 sm:px-10 py-3 sm:py-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                                    asChild
                                >
                                    <Link href="#financing-options">
                                        Compare Options
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>

                        {/* Quick Stats */}
                        <ScrollReveal direction="up" delay={1000}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">$0 Down</div>
                                    <div className="text-gray-700 font-medium">Start Saving</div>
                                    <div className="text-sm text-gray-500">No upfront costs</div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-orange-600 mb-2">2.99%</div>
                                    <div className="text-gray-700 font-medium">Starting APR</div>
                                    <div className="text-sm text-gray-500">Qualified buyers</div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">25 Years</div>
                                    <div className="text-gray-700 font-medium">Loan Terms</div>
                                    <div className="text-sm text-gray-500">Flexible options</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Financing Options */}
            <section id="financing-options" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Financing Options
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Choose Your Perfect Payment Plan
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                We offer multiple financing solutions to make solar accessible for every budget and financial situation.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-gradient-to-l from-green-500 to-green-600 text-white px-4 py-2 rounded-bl-lg text-sm font-semibold">
                                    Most Popular
                                </div>
                                <CardHeader className="pb-4 text-center pt-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Banknote className="w-8 h-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-2xl text-gray-900">Solar Loan</CardTitle>
                                    <CardDescription className="text-gray-600">$0 down • Own your system</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center space-y-6">
                                    <div className="space-y-4">
                                        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                                            <div className="text-3xl font-bold text-green-700 mb-1">2.99% - 6.99%</div>
                                            <div className="text-sm text-green-600">APR (based on credit)</div>
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">No money down required</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">Own your solar system</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">Claim all tax credits</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">12-25 year terms available</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">Fixed monthly payments</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                                        <Link href="/contact">Get Pre-Qualified</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Home className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-2xl text-gray-900">PACE Financing</CardTitle>
                                    <CardDescription className="text-gray-600">Property tax assessment</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center space-y-6">
                                    <div className="space-y-4">
                                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                            <div className="text-3xl font-bold text-blue-700 mb-1">3.99% - 7.99%</div>
                                            <div className="text-sm text-blue-600">Fixed rate</div>
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">100% financing available</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">Paid through property taxes</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">Transfers with property</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">Up to 20-year terms</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">No credit check required</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4 text-center">
                                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <PiggyBank className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-2xl text-gray-900">Cash Purchase</CardTitle>
                                    <CardDescription className="text-gray-600">Maximum savings</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center space-y-6">
                                    <div className="space-y-4">
                                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                                            <div className="text-3xl font-bold text-purple-700 mb-1">Best ROI</div>
                                            <div className="text-sm text-purple-600">Highest savings</div>
                                        </div>
                                        <div className="space-y-3 text-left">
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">No interest payments</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">Maximum lifetime savings</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">Full 30% tax credit</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">6-8 year payback period</span>
                                            </div>
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700">Immediate ownership</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" asChild>
                                        <Link href="/contact">Get Quote</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Payment Comparison */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 px-4 py-2 text-sm font-semibold">
                                Payment Comparison
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Solar vs. Electricity Bills
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                See how solar loan payments compare to your current electricity bill and start saving from day one.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300">
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl text-gray-900">Tampa Bay Home Payment Comparison</CardTitle>
                                    <CardDescription className="text-base text-gray-600">
                                        $30,000 solar system with $0 down solar loan
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <h4 className="font-semibold text-xl text-gray-900 text-center">Without Solar</h4>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200 hover:shadow-md transition-all duration-300">
                                                    <span className="font-medium text-red-800">Current Electric Bill</span>
                                                    <span className="text-xl font-bold text-red-700">$285/month</span>
                                                </div>
                                                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl border border-orange-200 hover:shadow-md transition-all duration-300">
                                                    <span className="font-medium text-orange-800">Annual Rate Increases</span>
                                                    <span className="text-xl font-bold text-orange-700">3-5%</span>
                                                </div>
                                                <div className="flex justify-between items-center p-4 bg-red-100 rounded-xl border border-red-300 hover:shadow-md transition-all duration-300">
                                                    <span className="font-medium text-red-800">25-Year Total Cost</span>
                                                    <span className="text-xl font-bold text-red-700">$89,500+</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <h4 className="font-semibold text-xl text-gray-900 text-center">With Solar Loan</h4>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300">
                                                    <span className="font-medium text-green-800">Solar Loan Payment</span>
                                                    <span className="text-xl font-bold text-green-700">$195/month</span>
                                                </div>
                                                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300">
                                                    <span className="font-medium text-blue-800">Remaining Electric Bill</span>
                                                    <span className="text-xl font-bold text-blue-700">$15/month</span>
                                                </div>
                                                <div className="flex justify-between items-center p-4 bg-green-100 rounded-xl border-2 border-green-300 hover:shadow-md transition-all duration-300">
                                                    <span className="font-bold text-green-800">Total Monthly Cost</span>
                                                    <span className="text-xl font-bold text-green-700">$210/month</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl text-white">
                                        <div className="grid md:grid-cols-3 gap-6 text-center">
                                            <div>
                                                <div className="text-2xl font-bold mb-2">$75/month</div>
                                                <div className="text-red-100">Immediate Savings</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold mb-2">$22,500</div>
                                                <div className="text-red-100">25-Year Savings</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold mb-2">$9,000</div>
                                                <div className="text-red-100">Federal Tax Credit</div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Qualification Requirements */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Qualification
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Easy Qualification Process
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Most homeowners qualify for solar financing. Here's what you need to know about the application process.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="left" delay={400}>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Requirements:</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Homeownership</h4>
                                                <p className="text-gray-600">You must own your home or have permission to install solar</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Credit Score</h4>
                                                <p className="text-gray-600">
                                                    Minimum 650 credit score for best rates (lower scores considered)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Stable Income</h4>
                                                <p className="text-gray-600">Verifiable income to support loan payments</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Suitable Roof</h4>
                                                <p className="text-gray-600">Adequate roof space and condition for solar installation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={600}>
                            <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-2xl text-gray-900">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                            <Clock className="w-6 h-6 text-red-600" />
                                        </div>
                                        Application Timeline
                                    </CardTitle>
                                    <CardDescription className="text-base text-gray-600 ml-14">
                                        From application to installation
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold text-sm">
                                                1
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">Pre-Qualification</div>
                                                <div className="text-sm text-gray-600">5 minutes online</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold text-sm">
                                                2
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">Full Application</div>
                                                <div className="text-sm text-gray-600">24-48 hours approval</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold text-sm">
                                                3
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">System Design</div>
                                                <div className="text-sm text-gray-600">1-2 weeks</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 font-bold text-sm">
                                                4
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">Installation</div>
                                                <div className="text-sm text-gray-600">1-3 days</div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Common Questions
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Solar Financing FAQ</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Get answers to the most frequently asked questions about solar financing options.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-6">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        What credit score do I need for solar financing?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        Most solar loans require a minimum credit score of 650 for the best rates, though some lenders work
                                        with scores as low as 600. Higher credit scores (720+) qualify for the lowest interest rates. We
                                        work with multiple lenders to find the best option for your credit profile.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        Can I really get solar with $0 down?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        Yes! Many of our solar loans require no money down. You can start saving on your electricity bill
                                        immediately while your solar loan payment is often lower than your previous electric bill. The
                                        system pays for itself through energy savings.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        How do I use the federal tax credit with financing?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        When you finance your solar system, you still own it and can claim the full 30% federal tax credit.
                                        Many homeowners use their tax credit refund to make a principal payment on their loan, reducing
                                        monthly payments. We'll help you plan the best strategy for your situation.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1000}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        What happens if I sell my home with a solar loan?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        Solar loans are typically personal loans that stay with you, not the property. You can pay off the
                                        loan with proceeds from the home sale, or the new buyer may assume the loan (with lender approval).
                                        Solar systems typically increase home value, often covering the remaining loan balance.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1200}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        Is solar financing better than leasing?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        Solar financing is generally better than leasing because you own the system, claim all tax credits,
                                        benefit from net metering, and build equity. Lease payments often increase annually, while loan
                                        payments are fixed. After the loan is paid off, you get free electricity for 15+ years.
                                    </p>
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
                                <CreditCard className="w-12 h-12 text-white" />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Pre-Qualified in Minutes</h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                                Take the first step toward solar ownership with our quick pre-qualification process. No impact to your
                                credit score and no obligation to proceed.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                                <Button
                                    size="lg"
                                    className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                    asChild
                                >
                                    <Link href="/contact">
                                        Start Pre-Qualification
                                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group border-2 border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 px-10 py-4 rounded-2xl bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                                    asChild
                                >
                                    <Link href="/solar-power-electricity-savings">
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
                                    <span className="text-sm font-medium text-gray-700">Soft Credit Check Only</span>
                                </div>
                                <div className="flex flex-col items-center space-y-3 group">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Multiple Lender Options</span>
                                </div>
                                <div className="flex flex-col items-center space-y-3 group">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Expert Guidance</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
                                    * Financing terms and rates subject to credit approval and may vary based on creditworthiness, loan
                                    amount, and other factors. All financing options include the ability to claim federal and state solar
                                    incentives. Pre-qualification does not guarantee final loan approval.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
