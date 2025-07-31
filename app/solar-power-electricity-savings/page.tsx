import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Calculator,
    DollarSign,
    TrendingUp,
    Zap,
    FileText,
    Clock,
    Award,
    Home,
    CheckCircle,
    Star,
    ArrowRight,
    Sparkles,
} from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Solar Incentives & Tax Credits Florida | Relentless Energy",
    description:
        "Maximize your solar savings with federal tax credits, Florida incentives, net metering, and financing options. Learn about available solar rebates and ROI in Tampa Bay.",
    keywords:
        "solar tax credit Florida, solar incentives Tampa Bay, federal solar tax credit, net metering Florida, solar financing, solar rebates, ITC tax credit, solar ROI",
    alternates: {
        canonical: "/solar-power-electricity-savings",
    },
    openGraph: {
        title: "Solar Incentives & Tax Credits Florida | Relentless Energy",
        description:
            "Maximize your solar savings with federal tax credits, Florida incentives, and financing options available in Tampa Bay.",
        url: "https://relentlessenergy.org/incentives",
    },
}

export default function IncentivesPage() {
    return (
        <div className="min-h-screen bg-white pt-24 sm:pt-32">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50"></div>
                <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute top-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-500"></div>

                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto">
                        <ScrollReveal direction="fade" delay={200}>
                            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-red-100 shadow-lg mb-6">
                                <Sparkles className="w-4 h-4 mr-2 text-red-600" />
                                <span className="text-sm font-semibold text-red-700">Maximum Savings Available Now</span>
                                <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={400}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                                Solar Incentives &{" "}
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                                        Tax Credits
                                    </span>
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full transform scale-x-0 animate-pulse"></div>
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                                Take advantage of federal tax credits, Florida incentives, and flexible financing options to make solar
                                more affordable than ever. Our Tesla-certified team helps you maximize every available savings
                                opportunity.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                                <Button
                                    size="lg"
                                    className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                    asChild
                                >
                                    <Link href="/free-solar-quote">
                                        <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                                        Calculate Your Savings
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group border-2 border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 px-8 sm:px-10 py-3 sm:py-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                                    asChild
                                >
                                    <Link href="#federal-credit">
                                        Explore Incentives
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>

                        {/* Stats Preview */}
                        <ScrollReveal direction="up" delay={1000}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">30%</div>
                                    <div className="text-gray-700 font-medium">Federal Tax Credit</div>
                                    <div className="text-sm text-gray-500">Through 2032</div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">$0</div>
                                    <div className="text-gray-700 font-medium">Down Payment</div>
                                    <div className="text-sm text-gray-500">Multiple options</div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                                    <div className="text-gray-700 font-medium">Year Warranty</div>
                                    <div className="text-sm text-gray-500">Performance guaranteed</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Federal Tax Credit Section */}
            <section id="federal-credit" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-12">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Federal Incentive
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Federal Solar Tax Credit (ITC)
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                The federal Investment Tax Credit allows you to deduct 30% of your solar system cost from your federal
                                taxes. This is a dollar-for-dollar reduction in your tax liability.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="left" delay={400}>
                            <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-2xl text-gray-900">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                            <Award className="w-6 h-6 text-red-600" />
                                        </div>
                                        30% Federal Tax Credit
                                    </CardTitle>
                                    <CardDescription className="text-base text-gray-600 ml-14">
                                        Available through 2032 • No maximum limit
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                                            <span className="font-semibold text-gray-700">System Cost:</span>
                                            <span className="text-xl font-bold text-gray-900">$30,000</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-red-100 rounded-xl border border-red-200 hover:shadow-md transition-all duration-300">
                                            <span className="font-semibold text-red-800">Federal Tax Credit (30%):</span>
                                            <span className="text-xl font-bold text-red-700">-$9,000</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-green-100 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300">
                                            <span className="font-semibold text-green-800">Your Net Investment:</span>
                                            <span className="text-xl font-bold text-green-700">$21,000</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-sm text-gray-600 text-center">
                                            <Star className="w-4 h-4 inline mr-1 text-yellow-500" />
                                            Includes installation, equipment, and battery storage when paired with solar
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={600}>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits & Features:</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">30% of Total System Cost</h4>
                                                <p className="text-gray-600">Includes panels, inverters, installation, and permitting</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">No Maximum Limit</h4>
                                                <p className="text-gray-600">Credit applies to systems of any size</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Carryover Allowed</h4>
                                                <p className="text-gray-600">Unused credit can be carried to future tax years</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Battery Storage Included</h4>
                                                <p className="text-gray-600">
                                                    Tesla Powerwall and other batteries qualify when paired with solar
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-xl hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                            <Clock className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-yellow-800 text-lg mb-2">Time-Sensitive Opportunity</h4>
                                            <p className="text-yellow-700">
                                                The 30% credit is locked in through 2032, then decreases to 26% in 2033 and 22% in 2034 before
                                                expiring.
                                                <strong className="block mt-2 text-yellow-800">Act now to secure maximum savings!</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Florida Incentives Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Florida Benefits
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Florida Solar Incentives
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Florida offers additional state-level incentives that stack with federal credits to maximize your solar
                                savings in the Tampa Bay area.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Home className="w-8 h-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Property Tax Exemption</CardTitle>
                                    <CardDescription className="text-gray-600">Florida Statute 196.175</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Solar installations are 100% exempt from property tax assessments. Your home value increases without
                                        higher property taxes, adding to your long-term savings.
                                    </p>
                                    <Badge className="bg-green-100 text-green-700 border-green-200 px-3 py-1">100% Tax Exemption</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <FileText className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Sales Tax Exemption</CardTitle>
                                    <CardDescription className="text-gray-600">Florida Statute 212.08</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        No sales tax on solar equipment purchases in Florida. This exemption applies to panels, inverters,
                                        batteries, and installation materials.
                                    </p>
                                    <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">0% Sales Tax</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Zap className="w-8 h-8 text-yellow-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Net Metering Program</CardTitle>
                                    <CardDescription className="text-gray-600">Statewide Policy</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Sell excess solar energy back to the grid at full retail rates. Earn credits during sunny days to
                                        offset evening and cloudy day usage.
                                    </p>
                                    <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 px-3 py-1">1:1 Credit Ratio</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal direction="up" delay={1000}>
                        <div className="mt-12 text-center">
                            <div className="inline-flex items-center px-8 py-4 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <span className="text-gray-700 font-medium mr-3">Combined Florida Savings:</span>
                                <span className="text-3xl font-bold text-red-600">$2,000 - $4,000+</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Financing Options Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Financing Solutions
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Flexible Payment Options
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Choose from multiple financing solutions designed to fit your budget and maximize your solar investment
                                returns.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="h-full text-center bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <DollarSign className="w-10 h-10 text-green-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Cash Purchase</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col justify-between h-full">
                                    <div className="text-3xl font-bold text-green-600 mb-3">Best ROI</div>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        Maximum savings with full tax credit benefits and no interest payments. Typical payback in 6-8
                                        years.
                                    </p>
                                    <Badge className="bg-green-100 text-green-700 px-3 py-1">Highest Savings</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <Card className="h-full text-center bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <TrendingUp className="w-10 h-10 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Solar Loans</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col justify-between h-full">
                                    <div className="text-3xl font-bold text-blue-600 mb-3">2.99% APR</div>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        $0 down options with competitive rates and terms up to 25 years. Start saving from day one.
                                    </p>
                                    <Badge className="bg-blue-100 text-blue-700 px-3 py-1">Most Popular</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <Card className="h-full text-center bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Home className="w-10 h-10 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Solar Lease</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col justify-between h-full">
                                    <div className="text-3xl font-bold text-purple-600 mb-3">$0 Down</div>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        Fixed monthly payments with maintenance included. No upfront costs or system ownership required.
                                    </p>
                                    <Badge className="bg-purple-100 text-purple-700 px-3 py-1">No Maintenance</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1000}>
                            <Card className="h-full text-center bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Zap className="w-10 h-10 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Power Purchase Agreement</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col justify-between h-full">
                                    <div className="text-3xl font-bold text-orange-600 mb-3">$0 Down</div>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        Pay only for the solar power you use at a discounted rate. Immediate savings with no upfront
                                        investment.
                                    </p>
                                    <Badge className="bg-orange-100 text-orange-700 px-3 py-1">Pay As You Go</Badge>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ROI Calculator Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden relative">
                {/* Background Animation */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Solar Investment Returns</h2>
                            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                                See the real numbers behind solar savings in Tampa Bay. Our customers typically see these results with
                                current incentives.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <ScrollReveal direction="up" delay={400}>
                            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                <div className="text-5xl font-bold mb-3">6-8 Years</div>
                                <div className="text-lg opacity-90 mb-2">Payback Period</div>
                                <div className="text-sm opacity-75">With current incentives</div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                <div className="text-5xl font-bold mb-3">25+ Years</div>
                                <div className="text-lg opacity-90 mb-2">System Warranty</div>
                                <div className="text-sm opacity-75">Performance guaranteed</div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                <div className="text-5xl font-bold mb-3">$40K+</div>
                                <div className="text-lg opacity-90 mb-2">Lifetime Savings</div>
                                <div className="text-sm opacity-75">Average Tampa Bay home</div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal direction="up" delay={1000}>
                        <div className="text-center">
                            <Button
                                size="lg"
                                className="group bg-white text-red-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                asChild
                            >
                                <Link href="/free-solar-quote">
                                    <Calculator className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                                    Calculate Your Exact Savings
                                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-red-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-red-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300">
                                <Calculator className="w-12 h-12 text-white" />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Ready to Maximize Your Solar Savings?
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                                Our Tesla-certified experts will help you navigate all available incentives and design the perfect solar
                                solution for your Tampa Bay home. Get started with a free, no-obligation consultation.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                                <Button
                                    size="lg"
                                    className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                    asChild
                                >
                                    <Link href="/free-solar-quote">
                                        Get Your Free Quote Today
                                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group border-2 border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 px-10 py-4 rounded-2xl bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                                    asChild
                                >
                                    <Link href="/solutions/solar-power-systems">
                                        Explore Solar Solutions
                                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                                <div className="flex flex-col items-center space-y-3 group">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Tesla Certified Installer</span>
                                </div>
                                <div className="flex flex-col items-center space-y-3 group">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Licensed & Insured</span>
                                </div>
                                <div className="flex flex-col items-center space-y-3 group">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">25-Year Warranty</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
                                    * Incentives and tax credits are subject to change and individual circumstances. Savings estimates are
                                    based on average Tampa Bay area conditions. Consult with a tax professional for specific advice
                                    regarding your situation.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
