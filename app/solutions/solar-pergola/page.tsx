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
    Sun,
    Home,
    Palette,
    Wrench,
    FileText,
    Users,
    Star,
    Award,
    Leaf,
    Shield,
    Zap,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
    title: "Solar Pergola Installation in Tampa Bay | Relentless Energy",
    description:
        "Custom solar pergola installation in Tampa Bay, Florida. Combine outdoor living with solar energy generation. Beautiful, functional structures that increase property value.",
    keywords:
        "solar pergola Tampa Bay, solar patio cover Florida, outdoor solar structure St Petersburg, solar shade structure Clearwater, custom solar pergola Largo, solar canopy Florida",
    alternates: {
        canonical: "/solutions/solar-pergola",
    },
}

export default function SolarPergolaPage() {
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
                                    <span className="text-sm font-medium text-red-700">Solar Pergola Solutions</span>
                                </div>
                            </ScrollReveal>

                            {/* Clean Typography */}
                            <ScrollReveal direction="up" delay={100}>
                                <div className="space-y-4 sm:space-y-6">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                        Shade + Solar
                                        <span className="text-red-500 block">Combined</span>
                                    </h1>
                                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                                        Beautiful outdoor living spaces that generate clean energy. Custom solar pergolas designed for
                                        Florida homes.
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
                                            Get Custom Design
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
                                        <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-1">100%</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Custom Design</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">25</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Year Warranty</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">20%</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Home Value</div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Content - Clean Image */}
                        <ScrollReveal direction="right">
                            <div className="relative order-first lg:order-last">
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/images/solar-pergola-solutions.jpg"
                                        alt="Beautiful solar pergola in Florida backyard"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                        priority
                                    />
                                </div>

                                {/* Simple floating badge */}
                                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg shadow-lg">
                                    <div className="text-xs sm:text-sm font-semibold">Custom Built</div>
                                </div>

                                {/* Simple value indicator */}
                                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-lg p-3 sm:p-4 shadow-lg border">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <Home className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-base sm:text-lg font-bold text-gray-900">+20%</div>
                                            <div className="text-xs sm:text-sm text-gray-600">Property Value</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Why Choose a Solar Pergola?</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Solar pergolas combine the best of outdoor living with clean energy generation, creating beautiful and
                                functional spaces.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <ScrollReveal direction="up" delay={0}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-red-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                                        <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Dual Purpose</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Provide shade and comfort while generating clean solar energy for your home.
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
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Increase Property Value</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Add significant value to your property with a beautiful, functional outdoor structure.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={200}>
                            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-gray-200 h-full flex flex-col">
                                <CardHeader className="flex-grow">
                                    <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                                        <Palette className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Custom Design</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Tailored to your home&apos;s architecture and your family&apos;s outdoor living needs.
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
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">Weather Resistant</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex items-center">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Built to withstand Florida&apos;s harsh weather conditions including hurricanes and storms.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Design Options */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Solar Pergola Design Options</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Choose from our popular designs or work with our team to create a completely custom solar pergola for
                                your home.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                        <ScrollReveal direction="left">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">

                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Attached Pergola</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Connected to your home for seamless integration with existing architecture and easy electrical
                                        connection.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm flex-grow">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Seamless home integration
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Easy electrical connection
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Cost-effective installation
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Perfect for patios
                                        </li>
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <div className="text-xl sm:text-2xl font-bold text-red-600">Starting at $18,000</div>
                                        <div className="text-xs sm:text-sm text-gray-500">12&apos; x 16&apos; structure</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-red-200 h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">
                                    <Badge className="bg-red-600 text-white w-fit mb-2">Most Popular</Badge>

                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Freestanding Pergola</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Independent structure that can be placed anywhere in your yard for maximum design flexibility.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm flex-grow">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Complete design flexibility
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Optimal solar positioning
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Creates defined outdoor space
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mr-2" />
                                            Pool area friendly
                                        </li>
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <div className="text-xl sm:text-2xl font-bold text-red-600">Starting at $22,000</div>
                                        <div className="text-xs sm:text-sm text-gray-500">14&apos; x 18&apos; structure</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                                <CardHeader className="flex-shrink-0">

                                    <CardTitle className="text-xl sm:text-2xl text-gray-900">Custom Design</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <CardDescription className="text-sm sm:text-base text-gray-600">
                                        Completely custom pergola designed specifically for your home, landscape, and energy needs.
                                    </CardDescription>
                                    <ul className="space-y-2 text-xs sm:text-sm flex-grow">
                                        <li className="flex items-center">
                                            <Palette className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500 mr-2" />
                                            Unique architectural design
                                        </li>
                                        <li className="flex items-center">
                                            <Palette className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500 mr-2" />
                                            Material and color options
                                        </li>
                                        <li className="flex items-center">
                                            <Palette className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500 mr-2" />
                                            Integrated lighting & features
                                        </li>
                                        <li className="flex items-center">
                                            <Palette className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500 mr-2" />
                                            Maximum energy production
                                        </li>
                                    </ul>
                                    <div className="pt-4 mt-auto">
                                        <div className="text-xl sm:text-2xl font-bold text-red-600">Custom Pricing</div>
                                        <div className="text-xs sm:text-sm text-gray-500">Based on design complexity</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Features & Materials */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Premium Materials & Features</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Every solar pergola is built with high-quality materials designed to last decades in Florida&apos;s
                                climate.
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
                                            icon: Shield,
                                            title: "Hurricane-Rated Structure",
                                            description: "Engineered to withstand 150+ mph winds with reinforced aluminum construction.",
                                            color: "bg-red-100 text-red-600",
                                        },
                                        {
                                            icon: Zap,
                                            title: "High-Efficiency Solar Panels",
                                            description: "Tier 1 solar panels with 25-year warranty and maximum energy production.",
                                            color: "bg-blue-100 text-blue-600",
                                        },
                                        {
                                            icon: Palette,
                                            title: "Custom Color Options",
                                            description: "Choose from dozens of powder-coated finishes to match your home perfectly.",
                                            color: "bg-green-100 text-green-600",
                                        },
                                        {
                                            icon: Leaf,
                                            title: "Integrated Drainage",
                                            description: "Built-in gutters and downspouts to handle Florida&apos;s heavy rainfall.",
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

                                <div className="bg-red-50 p-4 sm:p-6 rounded-2xl border border-red-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Award className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                                        <h4 className="text-base sm:text-lg font-semibold text-red-900">25-Year Comprehensive Warranty</h4>
                                    </div>
                                    <p className="text-sm sm:text-base text-red-700">
                                        Complete warranty coverage on structure, solar panels, and electrical components for peace of mind.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Right Content - Image */}
                        <ScrollReveal direction="right">
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/images/solar-pergola-materials.jpg"
                                        alt="Solar pergola construction materials and features"
                                        width={600}
                                        height={500}
                                        className="w-full h-auto"
                                    />
                                </div>

                                {/* Floating feature cards */}
                                <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-lg border">
                                    <div className="text-center">
                                        <div className="text-lg sm:text-xl font-bold text-red-600">150+</div>
                                        <div className="text-xs text-gray-600">MPH Rated</div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg border">
                                    <div className="text-center">
                                        <div className="text-lg sm:text-xl font-bold text-green-600">25</div>
                                        <div className="text-xs text-gray-600">Year Warranty</div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                Our Design & Installation Process
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                From initial consultation to final installation, we handle every detail of your solar pergola project.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
                        {[
                            {
                                step: "1",
                                title: "Site Consultation",
                                description: "Assess your space and discuss design preferences",
                                icon: Users,
                                color: "bg-red-100 text-red-600",
                            },
                            {
                                step: "2",
                                title: "Custom Design",
                                description: "Create 3D renderings and engineering plans",
                                icon: FileText,
                                color: "bg-blue-100 text-blue-600",
                            },
                            {
                                step: "3",
                                title: "Permits & Approvals",
                                description: "Handle all permits and HOA approvals",
                                icon: CheckCircle,
                                color: "bg-green-100 text-green-600",
                            },
                            {
                                step: "4",
                                title: "Professional Installation",
                                description: "Expert installation in 2-3 days",
                                icon: Wrench,
                                color: "bg-purple-100 text-purple-600",
                            },
                            {
                                step: "5",
                                title: "System Activation",
                                description: "Connect to grid and begin energy production",
                                icon: Zap,
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

            {/* Testimonials */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">What Our Customers Say</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Florida homeowners love their solar pergolas for both the energy savings and outdoor living benefits.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                name: "Robert & Linda Martinez",
                                location: "Clearwater, FL",
                                rating: 5,
                                text: "Our solar pergola is the centerpiece of our backyard! It provides perfect shade for entertaining and generates enough power to run our pool equipment.",
                                system: "16' x 20' Freestanding",
                            },
                            {
                                name: "Jennifer Walsh",
                                location: "St. Petersburg, FL",
                                rating: 5,
                                text: "The design process was amazing - they created exactly what we envisioned. The pergola survived Hurricane Ian without any damage and kept producing power.",
                                system: "12' x 18' Attached",
                            },
                            {
                                name: "Michael Chen",
                                location: "Tampa, FL",
                                rating: 5,
                                text: "Best investment we've made! The pergola adds so much value to our home and the energy savings pay for the morning coffee every month.",
                                system: "14' x 22' Custom Design",
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
                                        <div className="bg-red-50 p-3 rounded-lg mt-auto">
                                            <div className="text-sm sm:text-base font-semibold text-red-600">{testimonial.system}</div>
                                            <div className="text-xs text-red-700">Pergola Configuration</div>
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
                                Ready to Create Your Dream Outdoor Space?
                            </h2>
                            <p className="text-lg sm:text-xl text-red-100 max-w-3xl mx-auto">
                                Transform your backyard with a beautiful solar pergola that provides shade, generates clean energy, and
                                increases your home&apos;s value. Get your custom design today!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-red-600 hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto font-semibold group"
                                >
                                    <Link href="/free-quote">
                                        Get Custom Design Quote
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
                                    <span className="text-white font-medium text-sm sm:text-base">Free Design Consultation</span>
                                </div>
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                                    <span className="text-white font-medium text-sm sm:text-base">25-Year Warranty</span>
                                </div>
                                <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                                    <span className="text-white font-medium text-sm sm:text-base">Custom Built</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    )
}

