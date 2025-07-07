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
    Building,
    DollarSign,
    Calculator,
    Clock,
    Wrench,
    FileText,
    TrendingUp,
    Award,
    Factory,
    School,
    Store,
    Briefcase,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Commercial Solar Panel Installation in Tampa Bay | Relentless Energy",
    description:
        "Professional commercial solar panel installation in Tampa Bay, Florida. Reduce operating costs, earn tax incentives, and demonstrate environmental leadership. Tesla Certified installer with proven ROI.",
    keywords:
        "commercial solar panels Tampa Bay, business solar installation Florida, commercial solar St Petersburg, industrial solar Clearwater, office building solar Largo, warehouse solar panels Florida",
    alternates: {
        canonical: "/solutions/commercial-solar-panels",
    },
}

export default function CommercialSolarPage() {
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
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.04)_1px,transparent_0)] bg-[length:40px_40px]"></div>

                    {/* Minimal geometric shapes */}
                    <div className="absolute top-32 right-20 w-16 h-16 sm:w-28 sm:h-28 border border-blue-100 rounded-lg rotate-12 opacity-40"></div>
                    <div className="absolute bottom-40 left-16 w-12 h-12 sm:w-20 sm:h-20 border border-red-100 rounded-full opacity-30"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 sm:pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-6 sm:space-y-8">
                            {/* Simple Badge */}
                            <ScrollReveal direction="up">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full">
                                    <Building className="w-4 h-4 text-red-500" />
                                    <span className="text-sm font-medium text-red-700">Commercial Solar Solutions</span>
                                </div>
                            </ScrollReveal>

                            {/* Clean Typography */}
                            <ScrollReveal direction="up" delay={100}>
                                <div className="space-y-4 sm:space-y-6">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                        Solar for Your
                                        <span className="text-red-500 block">Business</span>
                                    </h1>
                                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                                        Cut operating costs by up to 75% while demonstrating environmental leadership. Tesla Certified
                                        commercial installer.
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
                                            Get ROI Analysis
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
                                        <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-1">75%</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Cost Reduction</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">30%</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Tax Credit</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">5-7</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Year Payback</div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Content - Clean Image */}
                        <ScrollReveal direction="right">
                            <div className="relative order-first lg:order-last">
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/images/commercial-solar-hero.png"
                                        alt="Commercial building with solar panel installation"
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
                                            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-base sm:text-lg font-bold text-gray-900">$50K+</div>
                                            <div className="text-xs sm:text-sm text-gray-600">Avg. Annual Savings</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Business Types Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                Perfect for Every Business Type
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                From small offices to large industrial facilities, we design commercial solar solutions that maximize
                                your ROI and environmental impact.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <ScrollReveal direction="up" delay={0}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-red-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                                        <Building className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Office Buildings</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Reduce overhead costs and create a professional, environmentally conscious image for your business.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={100}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                                        <Factory className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Manufacturing</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Power energy-intensive operations with clean solar energy and significantly reduce utility costs.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={200}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                                        <Store className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Retail & Hospitality</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Attract eco-conscious customers while cutting operational expenses for restaurants, hotels, and
                                        stores.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={300}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-orange-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                                        <School className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Schools & Nonprofits</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Maximize budget efficiency and teach sustainability while reducing long-term operational costs.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                Why Businesses Choose Commercial Solar
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Commercial solar offers compelling financial and strategic advantages that smart business owners
                                can&apos;t ignore.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <ScrollReveal direction="left">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                                        <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Immediate Cost Savings</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 flex-grow">
                                        Reduce electricity costs by 50-90% from day one. Lock in predictable energy costs for 25+ years.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Immediate 50-90% bill reduction
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Predictable energy costs
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Protection from rate increases
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-red-200 h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <Badge className="bg-red-600 text-white w-fit mb-2">Tax Advantage</Badge>
                                    <div className="bg-red-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors duration-300">
                                        <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Federal Tax Incentives</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 flex-grow">
                                        Take advantage of the 30% federal tax credit plus accelerated depreciation benefits.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            30% federal tax credit
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            MACRS depreciation
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            State and local incentives
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                                        <Award className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Brand Enhancement</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 flex-grow">
                                        Demonstrate environmental leadership and attract eco-conscious customers and employees.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Enhanced brand reputation
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Marketing advantages
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Employee satisfaction
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Our Commercial Solar Process</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                We handle every aspect of your commercial solar project from initial assessment to ongoing maintenance.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            {
                                step: "1",
                                title: "Site Assessment",
                                description: "Comprehensive energy audit and roof analysis",
                                icon: Briefcase,
                                color: "bg-red-100 text-red-600",
                            },
                            {
                                step: "2",
                                title: "Custom Design",
                                description: "Engineering and financial modeling for maximum ROI",
                                icon: FileText,
                                color: "bg-green-100 text-green-600",
                            },
                            {
                                step: "3",
                                title: "Permits & Financing",
                                description: "Handle all paperwork and financing arrangements",
                                icon: CheckCircle,
                                color: "bg-purple-100 text-purple-600",
                            },
                            {
                                step: "4",
                                title: "Installation & Monitoring",
                                description: "Professional installation with ongoing performance monitoring",
                                icon: Wrench,
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

            {/* Case Studies Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Success Stories</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                See how Florida businesses are saving money and reducing their environmental impact with commercial
                                solar.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                company: "Tampa Manufacturing Co.",
                                industry: "Manufacturing",
                                systemSize: "500kW",
                                savings: "$85,000/year",
                                payback: "5.2 years",
                                description: "Reduced electricity costs by 78% with rooftop and ground-mount solar installation.",
                            },
                            {
                                company: "Clearwater Medical Center",
                                industry: "Healthcare",
                                systemSize: "300kW",
                                savings: "$52,000/year",
                                payback: "6.1 years",
                                description: "Enhanced sustainability profile while significantly reducing operational expenses.",
                            },
                            {
                                company: "St. Pete Hotel Group",
                                industry: "Hospitality",
                                systemSize: "250kW",
                                savings: "$38,000/year",
                                payback: "5.8 years",
                                description: "Attracted eco-conscious guests while cutting energy costs across multiple properties.",
                            },
                        ].map((study, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 100}>
                                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                    <CardHeader className="flex-shrink-0">
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge className="bg-green-100 text-green-700">{study.industry}</Badge>
                                            <div className="text-xs sm:text-sm text-gray-500">{study.systemSize} System</div>
                                        </div>
                                        <CardTitle className="text-lg sm:text-xl text-gray-900">{study.company}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4 flex-grow flex flex-col">
                                        <CardDescription className="text-sm sm:text-base text-gray-600 flex-grow">
                                            {study.description}
                                        </CardDescription>
                                        <div className="grid grid-cols-2 gap-4 pt-4 mt-auto">
                                            <div className="bg-green-50 p-3 rounded-lg text-center">
                                                <div className="text-base sm:text-lg font-bold text-green-600">{study.savings}</div>
                                                <div className="text-xs text-green-700">Annual Savings</div>
                                            </div>
                                            <div className="bg-red-50 p-3 rounded-lg text-center">
                                                <div className="text-base sm:text-lg font-bold text-red-600">{study.payback}</div>
                                                <div className="text-xs text-red-700">Payback Period</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Financing Options */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Commercial Solar Financing</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Flexible financing options designed to maximize your ROI and cash flow benefits.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        <ScrollReveal direction="left">
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Cash Purchase</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 flex-grow">
                                        Maximize tax benefits and achieve the fastest payback with direct ownership.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm text-left">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Full 30% tax credit
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            MACRS depreciation
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Fastest ROI
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up">
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-red-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <Badge className="bg-red-600 text-white w-fit mx-auto mb-2">Most Popular</Badge>
                                    <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Solar Loan</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 flex-grow">
                                        Preserve capital while still owning the system and claiming all tax benefits.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm text-left">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Preserve working capital
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Competitive rates
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            You own the system
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Power Purchase Agreement</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600 flex-grow">
                                        No upfront costs with immediate savings and predictable energy rates.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm text-left">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            $0 upfront investment
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Immediate savings
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Maintenance included
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-red-600 to-red-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal direction="up">
                        <div className="space-y-6 sm:space-y-8">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                Ready to Reduce Your Business Costs?
                            </h2>
                            <p className="text-lg sm:text-xl text-red-100 max-w-3xl mx-auto">
                                Join hundreds of Florida businesses saving money with commercial solar. Get your free ROI analysis and
                                custom proposal today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-red-600 hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto font-semibold group"
                                >
                                    <Link href="/free-quote">
                                        Get Free ROI Analysis
                                        <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto bg-transparent"
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
                                    <span className="text-white font-medium text-sm sm:text-base">Free Site Assessment</span>
                                </div>
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                                    <span className="text-white font-medium text-sm sm:text-base">Custom ROI Analysis</span>
                                </div>
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                                    <span className="text-white font-medium text-sm sm:text-base">Same Day Response</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    )
}
