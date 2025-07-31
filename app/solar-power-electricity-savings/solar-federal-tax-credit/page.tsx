import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Calculator,
    DollarSign,
    Calendar,
    FileText,
    Clock,
    Award,
    CheckCircle,
    AlertTriangle,
    Star,
    ArrowRight,
    TrendingUp,
    Home,
    Zap,
    Shield,
    Users,
    Building,
    HelpCircle,
} from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Federal Solar Tax Credit (ITC) 2024 | 30% Tax Credit Florida | Relentless Energy",
    description:
        "Learn about the 30% Federal Solar Investment Tax Credit (ITC) in Florida. Maximize your solar savings with expert guidance from Tesla-certified installers in Tampa Bay.",
    keywords:
        "federal solar tax credit, ITC tax credit, solar investment tax credit, 30% tax credit, solar tax incentives Florida, Tampa Bay solar tax credit, federal solar rebate",
    alternates: {
        canonical: "/solar-power-electricity-savings/solar-federal-tax-credit",
    },
    openGraph: {
        title: "Federal Solar Tax Credit (ITC) 2024 | 30% Tax Credit Florida",
        description:
            "Get 30% back on your solar installation with the Federal Investment Tax Credit. Expert guidance from Tesla-certified installers in Tampa Bay.",
        url: "https://relentlessenergy.org/solar-power-electricity-savings/solar-federal-tax-credit",
    },
}

export default function FederalTaxCreditsPage() {
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
                                <Award className="w-4 h-4 mr-2 text-red-600" />
                                <span className="text-sm font-semibold text-red-700">Federal Investment Tax Credit</span>
                                <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={400}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                                        30% Federal
                                    </span>
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full transform scale-x-0 animate-pulse"></div>
                                </span>{" "}
                                Solar Tax Credit
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                                The Federal Investment Tax Credit (ITC) allows you to deduct 30% of your solar system cost from your
                                federal taxes. This is a dollar-for-dollar reduction that can save you thousands on your solar
                                investment.
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
                                        Calculate Your Tax Credit
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group border-2 border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 px-8 sm:px-10 py-3 sm:py-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                                    asChild
                                >
                                    <Link href="#how-it-works">
                                        Learn How It Works
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>

                        {/* Key Stats */}
                        <ScrollReveal direction="up" delay={1000}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">30%</div>
                                    <div className="text-gray-700 font-medium">Tax Credit Rate</div>
                                    <div className="text-sm text-gray-500">Through 2032</div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">No Limit</div>
                                    <div className="text-gray-700 font-medium">Maximum Credit</div>
                                    <div className="text-sm text-gray-500">Any system size</div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">$9,000</div>
                                    <div className="text-gray-700 font-medium">Average Savings</div>
                                    <div className="text-sm text-gray-500">On $30k system</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                How It Works
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Understanding the Federal Solar Tax Credit
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                The Investment Tax Credit (ITC) is a federal tax credit that allows you to deduct 30% of the cost of
                                installing a solar energy system from your federal taxes.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <ScrollReveal direction="left" delay={400}>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features:</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Dollar-for-Dollar Credit</h4>
                                                <p className="text-gray-600">
                                                    Unlike deductions, tax credits reduce your tax liability dollar-for-dollar
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Includes All Costs</h4>
                                                <p className="text-gray-600">
                                                    Covers equipment, installation, permits, and interconnection fees
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Battery Storage Eligible</h4>
                                                <p className="text-gray-600">
                                                    Tesla Powerwall and other batteries qualify when paired with solar
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Carryover Allowed</h4>
                                                <p className="text-gray-600">Unused credits can be carried forward to future tax years</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={600}>
                            <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-2xl text-gray-900">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                            <Calculator className="w-6 h-6 text-red-600" />
                                        </div>
                                        Tax Credit Example
                                    </CardTitle>
                                    <CardDescription className="text-base text-gray-600 ml-14">
                                        Typical Tampa Bay residential installation
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
                                            <span className="font-semibold text-gray-700">Solar System Cost:</span>
                                            <span className="text-xl font-bold text-gray-900">$30,000</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300">
                                            <span className="font-semibold text-blue-800">Tesla Powerwall (Optional):</span>
                                            <span className="text-xl font-bold text-blue-700">+$15,000</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                                            <span className="font-semibold text-gray-700">Total System Cost:</span>
                                            <span className="text-xl font-bold text-gray-900">$45,000</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-red-100 rounded-xl border border-red-200 hover:shadow-md transition-all duration-300">
                                            <span className="font-semibold text-red-800">Federal Tax Credit (30%):</span>
                                            <span className="text-xl font-bold text-red-700">-$13,500</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-green-100 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300">
                                            <span className="font-semibold text-green-800">Your Net Investment:</span>
                                            <span className="text-xl font-bold text-green-700">$31,500</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-sm text-gray-600 text-center">
                                            <Star className="w-4 h-4 inline mr-1 text-yellow-500" />
                                            30% savings on your entire solar + battery investment
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Important Timeline
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Federal Tax Credit Schedule
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                The ITC is scheduled to decrease over time. Act now to secure the maximum 30% credit before it's reduced
                                or eliminated.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            <ScrollReveal direction="up" delay={400}>
                                <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group border-l-4 border-green-500">
                                    <CardContent className="p-8">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <Calendar className="w-8 h-8 text-green-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900">2022 - 2032</h3>
                                                    <p className="text-gray-600">Current Period</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-4xl font-bold text-green-600">30%</div>
                                                <Badge className="bg-green-100 text-green-700 border-green-200">Best Rate</Badge>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-gray-600 leading-relaxed">
                                            Maximum tax credit available. Perfect time to invest in solar with the highest possible savings.
                                        </p>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={600}>
                                <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group border-l-4 border-yellow-500">
                                    <CardContent className="p-8">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <TrendingUp className="w-8 h-8 text-yellow-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900">2033</h3>
                                                    <p className="text-gray-600">Reduction Begins</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-4xl font-bold text-yellow-600">26%</div>
                                                <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Reduced</Badge>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-gray-600 leading-relaxed">
                                            Tax credit decreases to 26%. You'll save less compared to installing solar today.
                                        </p>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={800}>
                                <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group border-l-4 border-orange-500">
                                    <CardContent className="p-8">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <AlertTriangle className="w-8 h-8 text-orange-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900">2034</h3>
                                                    <p className="text-gray-600">Further Reduction</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-4xl font-bold text-orange-600">22%</div>
                                                <Badge className="bg-orange-100 text-orange-700 border-orange-200">Lower</Badge>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-gray-600 leading-relaxed">
                                            Tax credit drops to 22%. Significant reduction in federal savings compared to current rates.
                                        </p>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>

                            <ScrollReveal direction="up" delay={1000}>
                                <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group border-l-4 border-red-500">
                                    <CardContent className="p-8">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <Clock className="w-8 h-8 text-red-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900">2035+</h3>
                                                    <p className="text-gray-600">Residential Expiration</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-4xl font-bold text-red-600">0%</div>
                                                <Badge className="bg-red-100 text-red-700 border-red-200">Expired</Badge>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-gray-600 leading-relaxed">
                                            Federal tax credit expires for residential installations. Commercial systems retain 10% credit.
                                        </p>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal direction="up" delay={1200}>
                            <div className="mt-12 p-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-yellow-800 text-xl mb-3">Time-Sensitive Opportunity</h4>
                                        <p className="text-yellow-700 leading-relaxed mb-4">
                                            The current 30% federal tax credit represents the highest savings available. After 2032, the
                                            credit will decrease significantly before expiring completely for residential installations.
                                        </p>
                                        <div className="bg-yellow-100 rounded-lg p-4 border border-yellow-200">
                                            <p className="text-yellow-800 font-semibold">
                                                💡 <strong>Pro Tip:</strong> Systems must be installed and operational by December 31st of the
                                                tax year to qualify for that year's credit rate.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Eligibility Requirements
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Who Qualifies for the Tax Credit?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Most homeowners and businesses can take advantage of the federal solar tax credit. Here are the key
                                requirements and considerations.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <ScrollReveal direction="left" delay={400}>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    </div>
                                    You Qualify If:
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start group">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            <Home className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Own Your Home or Business</h4>
                                            <p className="text-gray-600">You must own the property where the solar system is installed</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start group">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            <DollarSign className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Have Tax Liability</h4>
                                            <p className="text-gray-600">You must owe federal income taxes to claim the credit</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start group">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            <Zap className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">New Solar System</h4>
                                            <p className="text-gray-600">System must be new and placed in service during the tax year</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start group">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            <Shield className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Meet Safety Standards</h4>
                                            <p className="text-gray-600">System must meet applicable fire and electrical code requirements</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={600}>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                        <FileText className="w-5 h-5 text-blue-500" />
                                    </div>
                                    What's Included:
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start group">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            <Zap className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Solar Panels & Equipment</h4>
                                            <p className="text-gray-600">Photovoltaic panels, inverters, and mounting hardware</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start group">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            <Users className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Installation Labor</h4>
                                            <p className="text-gray-600">Professional installation and system commissioning</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start group">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            <FileText className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Permits & Inspections</h4>
                                            <p className="text-gray-600">All required permits and inspection fees</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start group">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            <Building className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Battery Storage</h4>
                                            <p className="text-gray-600">Tesla Powerwall and other batteries when paired with solar</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Federal Tax Credit FAQ</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Get answers to the most frequently asked questions about the federal solar tax credit.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-6">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        What if I don't owe enough taxes to use the full credit?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        The ITC can be carried forward to future tax years if you can't use the full credit in the year your
                                        system is installed. There's no expiration date for using the carried-forward credit, giving you
                                        flexibility to maximize your savings over time.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        Can I claim the credit for a leased solar system?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        No, you must own the solar system to claim the federal tax credit. If you lease your system or enter
                                        a power purchase agreement (PPA), the leasing company claims the credit. However, they often pass
                                        some savings to you through lower lease payments.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        Does the credit apply to battery storage systems?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        Yes! Battery storage systems like the Tesla Powerwall qualify for the 30% tax credit when installed
                                        with a solar system. The battery must be charged by the solar panels to be eligible. Standalone
                                        batteries (without solar) do not qualify.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1000}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        When do I claim the credit on my taxes?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        You claim the credit on your federal tax return for the year your solar system was installed and
                                        placed in service. Use IRS Form 5695 to calculate your credit. The system must be operational by
                                        December 31st to qualify for that tax year.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1200}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        Are there any income limits for the tax credit?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        No, there are no income limits for the federal solar tax credit. Whether you earn $50,000 or
                                        $500,000 annually, you can claim the full 30% credit as long as you have sufficient tax liability.
                                        This makes solar accessible to homeowners across all income levels.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden relative">
                {/* Background Animation */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300">
                            <Award className="w-12 h-12 text-white" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Claim Your 30% Federal Tax Credit Today</h2>
                        <p className="text-xl mb-10 opacity-90 leading-relaxed max-w-2xl mx-auto">
                            Don't miss out on thousands in federal tax savings. Our Tesla-certified experts will help you maximize
                            every available incentive and design the perfect solar solution for your Tampa Bay home.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                            <Button
                                size="lg"
                                className="group bg-white text-red-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                asChild
                            >
                                <Link href="/free-solar-quote">
                                    <Calculator className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                                    Get Your Free Quote & Tax Credit Estimate
                                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-2">$13,500</div>
                                <div className="opacity-90">Average Tax Credit</div>
                                <div className="text-sm opacity-75">On $45k system</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-2">30%</div>
                                <div className="opacity-90">Maximum Credit</div>
                                <div className="text-sm opacity-75">Through 2032</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-2">No Limit</div>
                                <div className="opacity-90">Credit Cap</div>
                                <div className="text-sm opacity-75">Any system size</div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/20">
                            <p className="text-sm opacity-75 max-w-2xl mx-auto leading-relaxed">
                                * Tax credit information is based on current federal law and is subject to change. Consult with a tax
                                professional for advice specific to your situation. System must be installed and operational by December
                                31st to qualify for that tax year's credit.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
