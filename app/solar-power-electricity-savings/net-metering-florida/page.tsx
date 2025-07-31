import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Calculator,
    DollarSign,
    TrendingUp,
    Zap,
    Grid3X3,
    Shield,
    CheckCircle,
    ArrowRight,
    Award,
    HelpCircle,
} from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Florida Net Metering Program | Sell Solar Power Back to the Grid | Relentless Energy",
    description:
        "Learn how Florida's net metering program lets you sell excess solar power back to the grid and reduce your electricity bills. Get credit for the energy you produce.",
    keywords:
        "Florida net metering, solar net metering, sell solar power, grid tie solar, solar credits, electricity buyback, solar savings Florida, Tampa Bay net metering",
    alternates: {
        canonical: "/solar-power-electricity-savings/net-metering-florida",
    },
    openGraph: {
        title: "Florida Net Metering Program | Sell Solar Power Back to the Grid",
        description:
            "Learn how Florida's net metering program lets you sell excess solar power back to the grid and reduce your electricity bills.",
        url: "https://relentlessenergy.org/solar-power-electricity-savings/net-metering-florida",
    },
}

export default function NetMeteringPage() {
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
                                <Grid3X3 className="w-4 h-4 mr-2 text-red-600" />
                                <span className="text-sm font-semibold text-red-700">Florida Net Metering Program</span>
                                <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={400}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                                Turn Your Solar Into a{" "}
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 bg-clip-text text-transparent">
                                        Money Machine
                                    </span>
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-full"></div>
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                                With Florida's net metering program, sell excess solar power back to the grid at retail rates. Watch
                                your electricity meter run backwards and earn credits for every kilowatt-hour you produce.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                                <Button
                                    size="lg"
                                    className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                    asChild
                                >
                                    <Link href="/free-solar-quote">
                                        <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                                        Calculate My Earnings
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

                        {/* Quick Stats */}
                        <ScrollReveal direction="up" delay={1000}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">Retail Rate</div>
                                    <div className="text-gray-700 font-medium">Credit Value</div>
                                    <div className="text-sm text-gray-500">Full electricity rate</div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-orange-600 mb-2">$432+</div>
                                    <div className="text-gray-700 font-medium">Annual Earnings</div>
                                    <div className="text-sm text-gray-500">Typical Tampa Bay home</div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">20 Years</div>
                                    <div className="text-gray-700 font-medium">Rate Protection</div>
                                    <div className="text-sm text-gray-500">Grandfathered rates</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* How Net Metering Works */}
            <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                How It Works
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Florida Net Metering Process
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Understanding the simple 4-step process that turns your solar panels into a revenue generator.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="h-full text-center bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Zap className="w-10 h-10 text-yellow-600" />
                                    </div>
                                    <CardTitle className="text-lg text-gray-900">1. Solar Production</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Your solar panels generate electricity during daylight hours, often producing more than you use.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <Card className="h-full text-center bg-gradient-to-br from-green-50 to-white border-2 border-green-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Grid3X3 className="w-10 h-10 text-green-600" />
                                    </div>
                                    <CardTitle className="text-lg text-gray-900">2. Excess to Grid</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Surplus power flows back to the utility grid through your bi-directional smart meter.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <Card className="h-full text-center bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <DollarSign className="w-10 h-10 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-lg text-gray-900">3. Earn Credits</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Utility credits your account at full retail rates for every kWh of excess power you send.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1000}>
                            <Card className="h-full text-center bg-gradient-to-br from-purple-50 to-white border-2 border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <TrendingUp className="w-10 h-10 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-lg text-gray-900">4. Use Credits</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Apply credits during evenings, cloudy days, or high-usage periods to reduce your bill.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Florida Net Metering Benefits */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 px-4 py-2 text-sm font-semibold">
                                Program Benefits
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Why Florida Net Metering is Exceptional
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Florida offers one of the most favorable net metering programs in the nation with generous benefits for
                                solar homeowners.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="left" delay={400}>
                            <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-2xl text-gray-900">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                            <Award className="w-6 h-6 text-red-600" />
                                        </div>
                                        Florida Net Metering Advantages
                                    </CardTitle>
                                    <CardDescription className="text-base text-gray-600 ml-14">
                                        What makes Florida's program special
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100">
                                            <span className="font-semibold text-gray-700">Credit Rate:</span>
                                            <span className="text-lg font-bold text-green-600">Full Retail Rate</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                                            <span className="font-semibold text-blue-800">System Size Limit:</span>
                                            <span className="text-lg font-bold text-blue-700">No Limit</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200">
                                            <span className="font-semibold text-green-800">Credit Rollover:</span>
                                            <span className="text-lg font-bold text-green-700">Monthly</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                                            <span className="font-semibold text-purple-800">Rate Protection:</span>
                                            <span className="text-lg font-bold text-purple-700">20 Years</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={600}>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Program Features:</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Retail Rate Credits</h4>
                                                <p className="text-gray-600">Get full retail electricity rate, not wholesale prices</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">No System Size Restrictions</h4>
                                                <p className="text-gray-600">Install a system sized to meet 100% of your energy needs</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Grandfathered Protection</h4>
                                                <p className="text-gray-600">Current rates protected for 20 years from installation date</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start group">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">Battery Storage Compatible</h4>
                                                <p className="text-gray-600">Tesla Powerwall and other batteries work with net metering</p>
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
                                            <h4 className="font-bold text-green-800 text-lg mb-2">Future-Proof Investment</h4>
                                            <p className="text-green-700">
                                                Florida's net metering rules are grandfathered for 20 years, protecting your investment from
                                                future policy changes.
                                                <strong className="block mt-2 text-green-800">
                                                    Lock in today's favorable rates for decades!
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Real Savings Example */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Real Results
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Tampa Bay Net Metering Example
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                See how a typical Florida homeowner earns money with net metering every month.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300">
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl text-gray-900">Monthly Net Metering Breakdown</CardTitle>
                                    <CardDescription className="text-base text-gray-600">
                                        8kW solar system on 2,400 sq ft Tampa Bay home
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-lg text-gray-900 text-center">Energy Flow</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300">
                                                    <span className="font-medium text-green-800">Solar Production</span>
                                                    <span className="text-xl font-bold text-green-700">1,200 kWh</span>
                                                </div>
                                                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300">
                                                    <span className="font-medium text-blue-800">Home Usage</span>
                                                    <span className="text-xl font-bold text-blue-700">900 kWh</span>
                                                </div>
                                                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl border border-orange-200 hover:shadow-md transition-all duration-300">
                                                    <span className="font-medium text-orange-800">Excess to Grid</span>
                                                    <span className="text-xl font-bold text-orange-700">300 kWh</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-lg text-gray-900 text-center">Financial Impact</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200 hover:shadow-md transition-all duration-300">
                                                    <span className="font-medium text-red-800">Credits Earned</span>
                                                    <span className="text-xl font-bold text-red-700">$36.00</span>
                                                </div>
                                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                                                    <span className="font-medium text-gray-800">Grid Usage Cost</span>
                                                    <span className="text-xl font-bold text-gray-700">$0.00</span>
                                                </div>
                                                <div className="flex justify-between items-center p-4 bg-green-100 rounded-xl border-2 border-green-300 hover:shadow-md transition-all duration-300">
                                                    <span className="font-bold text-green-800">Monthly Bill</span>
                                                    <span className="text-xl font-bold text-green-700">-$36.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl text-white text-center">
                                        <div className="grid md:grid-cols-2 gap-6 items-center">
                                            <div>
                                                <p className="text-2xl font-bold mb-2">Annual Earnings: $432+</p>
                                                <p className="text-red-100">Plus additional savings during high-usage months</p>
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold mb-2">25-Year Value: $10,800+</p>
                                                <p className="text-red-100 text-sm">Protected by grandfathered rates</p>
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
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Net Metering FAQ</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Get answers to the most frequently asked questions about Florida's net metering program.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-6">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        What happens to excess credits at the end of the year?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        In Florida, most utilities allow you to carry over excess credits month to month. At the end of your
                                        annual billing cycle, any remaining credits are typically forfeited, so it's best to size your
                                        system to match your annual usage rather than overproduce significantly.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        Do I still pay connection fees with net metering?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        Yes, you'll still pay monthly connection fees and any applicable taxes or surcharges. Net metering
                                        credits only apply to the energy portion of your bill. However, these fixed charges are typically
                                        small ($10-30/month) compared to your energy savings.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        How long does it take to get net metering approved?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        The net metering approval process typically takes 2-6 weeks after your solar installation is
                                        complete. We handle all the paperwork, including the interconnection agreement, meter installation
                                        coordination, and final utility approval to begin earning credits.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1000}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        Can I add battery storage to my net metered system?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        Adding battery storage like Tesla Powerwall gives you even more control over your energy usage. You
                                        can store excess solar power for use during outages or peak rate periods, while still sending
                                        surplus power to the grid for credits. Battery storage also qualifies for the 30% federal tax
                                        credit.
                                    </p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1200}>
                            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-lg text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                        <HelpCircle className="w-6 h-6 mr-3 text-red-600" />
                                        What if I move? Can net metering transfer to new owners?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        Yes! Net metering agreements typically transfer with the property when you sell your home. This can
                                        actually increase your home's value, as new owners will benefit from the ongoing solar savings and
                                        net metering credits. The grandfathered rate protection also transfers to the new homeowner.
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
                                <Grid3X3 className="w-12 h-12 text-white" />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Start Earning From Your Roof Today</h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                                Join thousands of Florida homeowners who are already earning money with net metering. Get a free,
                                personalized analysis and see exactly how much you can earn from your solar investment.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                                <Button
                                    size="lg"
                                    className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                    asChild
                                >
                                    <Link href="/free-solar-quote">
                                        Calculate My Net Metering Earnings
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
                                        View All Solar Incentives
                                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                                <div className="flex flex-col items-center space-y-3 group">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Free Net Metering Analysis</span>
                                </div>
                                <div className="flex flex-col items-center space-y-3 group">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">We Handle All Paperwork</span>
                                </div>
                                <div className="flex flex-col items-center space-y-3 group">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Tesla Certified Installer</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
                                    * Net metering earnings based on current Florida utility rates and typical solar production.
                                    Individual results may vary based on energy usage, system size, and local utility policies.
                                    Grandfathered rate protection applies for 20 years from installation date.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
