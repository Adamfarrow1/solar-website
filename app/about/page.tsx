import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Award,
    Users,
    Shield,
    Star,
    CheckCircle,
    ArrowRight,
    Sparkles,
    Sun,
    Zap,
    Heart,
    Target,
    TrendingUp,
    Phone,
    Mail,
    MapPin,
} from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"

export const metadata: Metadata = {
    title: "About Relentless Energy | Tesla Certified Solar Installer Tampa Bay",
    description:
        "Learn about Relentless Energy, Florida's premier Tesla Certified solar installation company. Serving Tampa Bay with 10+ years experience, 10,000+ satisfied customers, and industry-leading warranties.",
    keywords:
        "about Relentless Energy, Tesla certified solar installer, Tampa Bay solar company, Florida solar experts, solar installation team, solar company history",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Relentless Energy | Tesla Certified Solar Installer Tampa Bay",
        description:
            "Florida's premier Tesla Certified solar installation company with 10+ years experience serving Tampa Bay.",
        url: "https://relentlessenergy.netlify.app/about",
        type: "website",
    },
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white pt-24 sm:pt-32">
            {/* Hero Section - Matching Solar Incentives Style */}
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
                                <span className="text-sm font-semibold text-red-700">Florida's #1 Tesla Certified Installer</span>
                                <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={400}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                                Powering Florida with{" "}
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                                        Relentless Energy
                                    </span>
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full transform scale-x-0 animate-pulse"></div>
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                                For over a decade, we've been Tampa Bay's trusted solar energy partner, helping 10,000+ homeowners and
                                businesses harness the power of Florida sunshine with premium Tesla-certified installations.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                                <Button
                                    size="lg"
                                    className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                    asChild
                                >
                                    <Link href="/free-quote">
                                        <Sun className="w-4 h-4 sm:w-5 sm:h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                                        Start Your Solar Journey
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group border-2 border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 px-8 sm:px-10 py-3 sm:py-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                                    asChild
                                >
                                    <Link href="#our-story">
                                        Learn Our Story
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>

                        {/* Stats Preview */}
                        <ScrollReveal direction="up" delay={1000}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">10,000+</div>
                                    <div className="text-gray-700 font-medium">Happy Customers</div>
                                    <div className="text-sm text-gray-500">Across Tampa Bay</div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
                                    <div className="text-gray-700 font-medium">Years Experience</div>
                                    <div className="text-sm text-gray-500">Industry expertise</div>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                                    <div className="text-gray-700 font-medium">Tesla Certified</div>
                                    <div className="text-sm text-gray-500">Official installer</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section id="our-story" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="left" delay={200}>
                            <div className="space-y-8">
                                <div>
                                    <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                        Our Story
                                    </Badge>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                        Founded on Florida Sunshine & Innovation
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        Relentless Energy was born from a simple belief shared by two renewable energy enthusiasts: every
                                        Florida home deserves access to clean, affordable solar energy. Founded in 2013 by Michael Johnson
                                        and David Thompson, we started with a mission to make solar accessible to Tampa Bay families.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        What began as a small local business has grown into Florida's premier Tesla Certified solar
                                        installation company. We've helped over 10,000 families reduce their carbon footprint while saving
                                        thousands on electricity bills.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start group">
                                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            <Target className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Our Mission</h4>
                                            <p className="text-gray-600">
                                                Accelerate Florida's transition to sustainable energy through premium solar solutions and
                                                exceptional customer service.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start group">
                                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            <Heart className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Our Values</h4>
                                            <p className="text-gray-600">
                                                Integrity, innovation, and customer-first approach in every installation, backed by
                                                industry-leading warranties.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={400}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl transform rotate-3 opacity-10"></div>
                                <Image
                                    src="/images/aerial-view-solar-panels.jpg"
                                    alt="Relentless Energy team installing solar panels on Florida home"
                                    width={600}
                                    height={400}
                                    className="relative rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">Tesla Certified</div>
                                            <div className="text-sm text-gray-600">Since 2018</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-red-50">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Why Choose Us
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                What Sets Relentless Energy Apart
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Our commitment to excellence, cutting-edge technology, and customer satisfaction has made us Tampa Bay's
                                most trusted solar installation company.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Award className="w-8 h-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Tesla Certified Excellence</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 leading-relaxed">
                                        Official Tesla Powerwall and Solar Roof installer with advanced training and certification. We meet
                                        Tesla's highest standards for quality and performance.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Local Florida Experts</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 leading-relaxed">
                                        Born and raised in Tampa Bay, our team understands Florida's unique climate, building codes, and
                                        energy needs better than anyone else.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Shield className="w-8 h-8 text-green-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Industry-Leading Warranties</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 leading-relaxed">
                                        25-year performance warranty on panels, 25-year warranty on inverters, and comprehensive workmanship
                                        guarantee for complete peace of mind.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1000}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Star className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">5-Star Customer Service</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 leading-relaxed">
                                        From initial consultation to post-installation support, our customer service team is dedicated to
                                        exceeding your expectations at every step.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1200}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <TrendingUp className="w-8 h-8 text-yellow-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Proven Track Record</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 leading-relaxed">
                                        Over 10,000 successful installations across Tampa Bay with a 99.8% customer satisfaction rate and
                                        countless 5-star reviews.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1400}>
                            <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Zap className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">Cutting-Edge Technology</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 leading-relaxed">
                                        We use the latest solar technology, monitoring systems, and installation techniques to maximize your
                                        energy production and system efficiency.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Our Team
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet the Solar Experts</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Meet the two visionaries who founded Relentless Energy and built Tampa Bay's most trusted solar
                                installation company through their combined expertise and unwavering commitment to excellence.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <ScrollReveal direction="up" delay={400}>
                            <Card className="text-center bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-32 h-32 bg-gradient-to-r from-red-600 to-red-700 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-3xl font-bold text-white">MJ</span>
                                    </div>
                                    <CardTitle className="text-2xl text-gray-900">Michael Johnson</CardTitle>
                                    <CardDescription className="text-red-600 font-semibold text-lg">Co-Founder & CEO</CardDescription>
                                </CardHeader>
                                <CardContent className="px-8">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Tesla Master Installer with 15+ years in renewable energy. Michael co-founded Relentless Energy with
                                        a vision to make premium solar accessible to every Florida family. His expertise in system design
                                        and project management has helped deliver over 5,000 successful installations.
                                    </p>
                                    <div className="mt-6 space-y-2">
                                        <div className="flex items-center justify-center text-sm text-gray-500">
                                            <Award className="w-4 h-4 mr-2" />
                                            Tesla Master Installer
                                        </div>
                                        <div className="flex items-center justify-center text-sm text-gray-500">
                                            <Shield className="w-4 h-4 mr-2" />
                                            NABCEP Certified
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <Card className="text-center bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 group">
                                <CardHeader className="pb-4">
                                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-3xl font-bold text-white">DT</span>
                                    </div>
                                    <CardTitle className="text-2xl text-gray-900">David Thompson</CardTitle>
                                    <CardDescription className="text-blue-600 font-semibold text-lg">Co-Founder & CTO</CardDescription>
                                </CardHeader>
                                <CardContent className="px-8">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Licensed electrical contractor and solar technology innovator with 12+ years in the industry. David
                                        co-founded Relentless Energy to bring cutting-edge solar solutions to Tampa Bay. He oversees all
                                        technical operations and ensures every installation meets the highest quality standards.
                                    </p>
                                    <div className="mt-6 space-y-2">
                                        <div className="flex items-center justify-center text-sm text-gray-500">
                                            <Zap className="w-4 h-4 mr-2" />
                                            Licensed Electrical Contractor
                                        </div>
                                        <div className="flex items-center justify-center text-sm text-gray-500">
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                            Solar Technology Specialist
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up" delay={200}>
                        <div className="text-center mb-16">
                            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-semibold">
                                Certifications & Awards
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Recognized Excellence in Solar
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Our commitment to quality and customer satisfaction has earned us industry recognition and prestigious
                                certifications.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <ScrollReveal direction="up" delay={400}>
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Award className="w-10 h-10 text-red-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Tesla Certified</h4>
                                <p className="text-sm text-gray-600">Official Tesla Powerwall & Solar Roof Installer</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="w-10 h-10 text-blue-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">NABCEP Certified</h4>
                                <p className="text-sm text-gray-600">North American Board of Certified Energy Practitioners</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={800}>
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Star className="w-10 h-10 text-green-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">A+ BBB Rating</h4>
                                <p className="text-sm text-gray-600">Better Business Bureau Accredited Business</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={1000}>
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle className="w-10 h-10 text-yellow-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h4>
                                <p className="text-sm text-gray-600">Florida State Certified Electrical Contractor</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden relative">
                {/* Background Animation */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-6xl mx-auto text-center">
                    <ScrollReveal direction="up" delay={200}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join the Solar Revolution?</h2>
                        <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                            Experience the Relentless Energy difference. Our Tesla-certified team is ready to design the perfect solar
                            solution for your Tampa Bay home or business.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={400}>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                            <Button
                                size="lg"
                                className="group bg-white text-red-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                asChild
                            >
                                <Link href="/free-quote">
                                    <Sun className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                                    Get Your Free Quote
                                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="group border-2 border-white text-white hover:bg-white hover:text-red-600 px-10 py-4 rounded-2xl bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                                asChild
                            >
                                <Link href="tel:727-555-0123">
                                    <Phone className="w-6 h-6 mr-3" />
                                    Call (727) 555-0123
                                </Link>
                            </Button>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={600}>
                        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
                            <div className="flex flex-col items-center space-y-3">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">Call Us</div>
                                    <div className="text-sm opacity-90">(727) 555-0123</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-3">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">Email Us</div>
                                    <div className="text-sm opacity-90">jfeliz@relentlessenergy.com</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-3">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">Visit Us</div>
                                    <div className="text-sm opacity-90">Tampa Bay, Florida</div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
