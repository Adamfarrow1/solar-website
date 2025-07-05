import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Shield,
    Award,
    CheckCircle,
    Phone,
    ArrowRight,
    Star,
    Users,
    Wrench,
    Zap,
    Clock,
    TrendingUp,
    Battery,
    Home,
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Tesla Certified Solar Installer in Tampa Bay, Florida | Relentless Energy",
    description:
        "Official Tesla Certified solar installer serving Tampa Bay, St Petersburg, Clearwater. Expert installation of Tesla Solar Roof, Powerwall, and solar panels. Licensed, insured, and Tesla trained.",
    keywords:
        "Tesla certified installer Florida, Tesla solar installer Tampa Bay, Tesla Powerwall installer St Petersburg, Tesla Solar Roof Clearwater, certified Tesla contractor",
    alternates: {
        canonical: "/tesla-solar/certified-installer",
    },
}

export default function TeslaCertifiedInstallerPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[108px]">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-red-100">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    {/* Floating Elements */}
                    <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute bottom-40 left-20 w-24 h-24 bg-red-300 rounded-full opacity-20 animate-pulse delay-2000"></div>
                    <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-300 rounded-full opacity-20 animate-pulse delay-3000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-8">
                            <ScrollReveal direction="left">
                                <div className="space-y-6">
                                    <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 text-lg px-6 py-3 hover:scale-105 transition-all duration-300">
                                        <Award className="mr-2 h-5 w-5" />
                                        Official Tesla Certified Installer
                                    </Badge>
                                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                        <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent px-1">
                                            Tesla Certified
                                        </span>
                                        <br />
                                        Solar Excellence
                                    </h1>
                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        As an official Tesla Certified installer in Tampa Bay, we bring you the highest standards of solar
                                        installation expertise. Trust your Tesla Solar Roof, Powerwall, and solar panel installation to
                                        Florida&apos;s premier certified professionals.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={200}>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-lg px-8 py-4 h-auto hover:scale-105 transition-all duration-300 group"
                                    >
                                        <Link href="/free-quote">
                                            Get Tesla Quote
                                            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-lg px-8 py-4 h-auto hover:scale-105 transition-all duration-300 bg-transparent"
                                    >
                                        <Link href="tel:727-555-0123">
                                            <Phone className="mr-2 h-6 w-6" />
                                            (727) 555-0123
                                        </Link>
                                    </Button>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={400}>
                                <div className="grid grid-cols-2 gap-6 pt-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-red-600">500+</div>
                                        <div className="text-sm text-gray-600">Tesla Installations</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-orange-600">5 Years</div>
                                        <div className="text-sm text-gray-600">Tesla Certified</div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Image */}
                        <ScrollReveal direction="right">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl transform rotate-3 opacity-20"></div>
                                <Image
                                    src="/placeholder.svg?height=600&width=500"
                                    alt="Tesla Certified installer team with Tesla products"
                                    width={500}
                                    height={600}
                                    className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border-2 border-red-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-red-100 p-2 rounded-lg">
                                            <Shield className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Tesla Certified</div>
                                            <div className="text-sm text-gray-600">Since 2019</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* What Tesla Certification Means */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">What Tesla Certification Means</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Tesla certification isn&apos;t just a badge—it&apos;s a commitment to excellence, ongoing training, and adherence
                                to the highest installation standards in the solar industry.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ScrollReveal direction="up" delay={0}>
                            <Card className="text-center border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                                <CardHeader>
                                    <div className="bg-gradient-to-r from-red-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-red-200 group-hover:to-orange-200 transition-colors duration-300">
                                        <Wrench className="h-8 w-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Rigorous Training</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="text-base text-gray-600">
                                        Extensive hands-on training at Tesla facilities covering installation techniques, safety protocols,
                                        and product specifications for all Tesla energy products.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={100}>
                            <Card className="text-center border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                                <CardHeader>
                                    <div className="bg-gradient-to-r from-red-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-red-200 group-hover:to-orange-200 transition-colors duration-300">
                                        <CheckCircle className="h-8 w-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Quality Standards</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="text-base text-gray-600">
                                        Adherence to Tesla&apos;s strict quality control measures, installation guidelines, and performance
                                        standards to ensure optimal system performance and longevity.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={200}>
                            <Card className="text-center border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                                <CardHeader>
                                    <div className="bg-gradient-to-r from-red-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-red-200 group-hover:to-orange-200 transition-colors duration-300">
                                        <TrendingUp className="h-8 w-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Ongoing Education</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="text-base text-gray-600">
                                        Continuous education on new Tesla products, software updates, and emerging technologies to stay
                                        current with the latest innovations in solar energy.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={300}>
                            <Card className="text-center border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                                <CardHeader>
                                    <div className="bg-gradient-to-r from-red-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-red-200 group-hover:to-orange-200 transition-colors duration-300">
                                        <Shield className="h-8 w-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Warranty Support</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="text-base text-gray-600">
                                        Direct access to Tesla warranty support and technical assistance, ensuring faster resolution of any
                                        issues and comprehensive customer protection.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={400}>
                            <Card className="text-center border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                                <CardHeader>
                                    <div className="bg-gradient-to-r from-red-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-red-200 group-hover:to-orange-200 transition-colors duration-300">
                                        <Zap className="h-8 w-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Advanced Tools</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="text-base text-gray-600">
                                        Access to Tesla&apos;s proprietary installation tools, software, and diagnostic equipment for precise
                                        installation and optimal system configuration.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={500}>
                            <Card className="text-center border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                                <CardHeader>
                                    <div className="bg-gradient-to-r from-red-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-red-200 group-hover:to-orange-200 transition-colors duration-300">
                                        <Users className="h-8 w-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Network Access</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="text-base text-gray-600">
                                        Membership in Tesla&apos;s exclusive installer network, providing access to technical support, best
                                        practices, and collaboration with top installers nationwide.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Tesla Products We Install */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Tesla Products We Install</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                As a Tesla Certified installer, we&apos;re authorized to install the complete range of Tesla energy products
                                with factory-backed warranties and support.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <ScrollReveal direction="left" delay={0}>
                            <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 hover:-translate-y-2 group h-full">
                                <CardHeader>
                                    <Image
                                        src="/placeholder.svg?height=200&width=400"
                                        alt="Tesla Solar Roof installation"
                                        width={400}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-2xl text-gray-900">Tesla Solar Roof</CardTitle>
                                        <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                                            <Home className="mr-1 h-3 w-3" />
                                            Integrated
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1">
                                    <CardDescription className="text-base text-gray-600">
                                        Beautiful solar roof tiles that generate clean energy while protecting your home. Combines solar
                                        cells with premium roofing materials for a seamless aesthetic.
                                    </CardDescription>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Integrated solar technology
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Weather-resistant design
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            25-year warranty
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 group"
                                    >
                                        <Link href="/tesla-solar/solar-roof">
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={100}>
                            <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 hover:-translate-y-2 group h-full">
                                <CardHeader>
                                    <Image
                                        src="/placeholder.svg?height=200&width=400"
                                        alt="Tesla Powerwall installation"
                                        width={400}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-2xl text-gray-900">Tesla Powerwall</CardTitle>
                                        <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                                            <Battery className="mr-1 h-3 w-3" />
                                            Storage
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1">
                                    <CardDescription className="text-base text-gray-600">
                                        Home battery system that stores solar energy for use during outages or peak hours. Provides energy
                                        independence and backup power protection.
                                    </CardDescription>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center">
                                            <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                                            13.5 kWh capacity
                                        </li>
                                        <li className="flex items-center">
                                            <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                                            Seamless backup power
                                        </li>
                                        <li className="flex items-center">
                                            <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                                            Mobile app control
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 group"
                                    >
                                        <Link href="/tesla-solar/powerwall">
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={200}>
                            <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 hover:-translate-y-2 group h-full">
                                <CardHeader>
                                    <Image
                                        src="/placeholder.svg?height=200&width=400"
                                        alt="Tesla solar panels installation"
                                        width={400}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-2xl text-gray-900">Tesla Solar Panels</CardTitle>
                                        <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                                            <Star className="mr-1 h-3 w-3" />
                                            Premium
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1">
                                    <CardDescription className="text-base text-gray-600">
                                        High-efficiency solar panels designed and manufactured by Tesla. Sleek, low-profile design with
                                        industry-leading performance and durability.
                                    </CardDescription>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            High efficiency rating
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            Low-profile design
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                            25-year warranty
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 group"
                                    >
                                        <Link href="/solutions/residential-solar-panels">
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Why Choose Relentless Energy */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal direction="up">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                Why Choose Relentless Energy as Your Tesla Installer
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Beyond our Tesla certification, we bring years of local experience, exceptional customer service, and a
                                commitment to excellence that sets us apart.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="left">
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 rounded-lg">
                                        <Clock className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">5+ Years Tesla Certified</h3>
                                        <p className="text-gray-600">
                                            One of the first Tesla certified installers in Florida with extensive experience installing Tesla
                                            energy products across Tampa Bay.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 rounded-lg">
                                        <Users className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">500+ Tesla Installations</h3>
                                        <p className="text-gray-600">
                                            Proven track record with hundreds of successful Tesla Solar Roof, Powerwall, and solar panel
                                            installations throughout Florida.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 rounded-lg">
                                        <Star className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Florida Expertise</h3>
                                        <p className="text-gray-600">
                                            Deep understanding of Florida building codes, permitting processes, and weather conditions
                                            specific to Tesla product installations.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-gradient-to-r from-red-100 to-orange-100 p-3 rounded-lg">
                                        <Shield className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Warranty</h3>
                                        <p className="text-gray-600">
                                            Full Tesla product warranties plus our own workmanship guarantee, providing complete protection
                                            for your investment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl transform -rotate-3 opacity-20"></div>
                                <Image
                                    src="/placeholder.svg?height=500&width=600"
                                    alt="Tesla certified installation team"
                                    width={600}
                                    height={500}
                                    className="relative rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border-2 border-orange-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-orange-100 p-2 rounded-lg">
                                            <Award className="h-6 w-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Top Rated</div>
                                            <div className="text-sm text-gray-600">Tesla Installer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal direction="up">
                        <div className="space-y-8">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready for Tesla Solar Excellence?</h2>
                            <p className="text-xl text-red-100 max-w-3xl mx-auto">
                                Experience the difference of working with Florida&apos;s premier Tesla Certified installer. Get your free
                                consultation and discover how Tesla energy products can transform your home.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    variant="secondary"
                                    className="text-lg px-10 py-4 h-auto hover:scale-105 transition-all duration-300 group bg-white text-red-600 hover:bg-gray-100"
                                >
                                    <Link href="/free-quote">
                                        Get Your Tesla Quote
                                        <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-lg px-10 py-4 h-auto bg-transparent hover:scale-105 transition-all duration-300"
                                >
                                    <Link href="tel:727-555-0123">
                                        <Phone className="mr-2 h-6 w-6" />
                                        Call (727) 555-0123
                                    </Link>
                                </Button>
                            </div>
                            <div className="pt-8">
                                <p className="text-red-100 text-sm">
                                    Licensed & Insured • Tesla Certified Since 2019 • 25-Year Warranty
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    )
}
