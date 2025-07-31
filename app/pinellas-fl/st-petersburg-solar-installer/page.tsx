import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ScrollReveal from "@/components/scroll-reveal"
import {
    ChevronRight,
    Phone,
    Star,
    MapPin,
    Sun,
    Users,
    DollarSign,
    Zap,
    CheckCircle,
    Home,
    Building,
    Award,
    ArrowRight,
    Shield,
    Clock,
    FileText,
    Building2,
    Info,
} from "lucide-react"

export const metadata: Metadata = {
    title: "St. Petersburg Solar Installer | Tesla Certified | Relentless Energy",
    description: "Professional solar panel installation in St. Petersburg, FL. Tesla Certified installer serving downtown, Old Northeast, and all neighborhoods. Free solar consultation and quotes!",
    keywords: [
        "St Petersburg solar panels",
        "St Pete solar installation",
        "downtown St Petersburg solar",
        "Old Northeast solar",
        "Florida solar installer",
        "Tesla Powerwall St Petersburg",
        "St Petersburg solar installer",
        "Pinellas County solar"
    ],
    openGraph: {
        title: "St. Petersburg Solar Installer | Tesla Certified | Relentless Energy",
        description: "Professional solar panel installation in St. Petersburg, FL. Tesla Certified installer serving all neighborhoods.",
        images: ["/images/st-petersburg-florida.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "St. Petersburg Solar Installer | Tesla Certified | Relentless Energy",
        description: "Professional solar panel installation in St. Petersburg, FL. Tesla Certified installer serving all neighborhoods.",
        images: ["/images/st-petersburg-florida.jpg"],
    },
    alternates: {
        canonical: "https://www.relentlessenergy.org/pinellas-fl/st-petersburg-solar-installer",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function StPetersburgSolarInstallerPage() {
    const areaData = {
        name: "St. Petersburg",
        fullName: "St. Petersburg, Florida",
        description: "St. Petersburg is leading Florida's solar revolution with abundant sunshine and progressive energy policies. Our Tesla Certified installation team serves all neighborhoods from downtown to the beaches, helping residents reduce energy costs and increase home values with premium solar solutions.",
        heroImage: "/images/st-petersburg-florida.jpg",
        population: "265,000",
        averageSunHours: "8.2 hours/day",
        solarPotential: "Excellent",
        neighborhoods: [
            "Downtown St. Petersburg",
            "Old Northeast",
            "Kenwood",
            "Historic Roser Park",
            "Crescent Lake",
            "Bayboro Harbor",
            "Snell Isle",
            "Venetian Isles",
            "Lakewood Estates",
            "Azalea"
        ],
        solarIncentives: [
            "Federal Solar Tax Credit (30%)",
            "Florida Solar Rights Act",
            "Net Metering Program",
            "Property Tax Exemption",
            "Sales Tax Exemption"
        ],
        averageElectricBill: "$145/month",
        averageSolarSavings: "$1,740/year",
        paybackPeriod: "6-8 years",
        testimonials: [
            {
                name: "Sarah Johnson",
                neighborhood: "Old Northeast",
                text: "Our solar system has been fantastic! We're saving over $200 per month and love supporting clean energy in St. Pete.",
                rating: 5,
                systemSize: "8.5kW",
                installDate: "2023"
            },
            {
                name: "Mike Rodriguez",
                neighborhood: "Downtown",
                text: "The installation team was professional and completed everything in two days. Our condo association loves the reduced common area costs!",
                rating: 5,
                systemSize: "12kW",
                installDate: "2023"
            }
        ],
        localUtility: "Duke Energy Florida",
        netMeteringRate: "Full retail rate",
        permittingInfo: "City of St. Petersburg requires electrical permits for solar installations. We handle all permitting and inspections."
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Relentless Energy - St. Petersburg Solar Installer",
        description: "Tesla Certified solar installation company serving St. Petersburg, Florida with residential and commercial solar solutions.",
        url: "https://relentlessenergy.org/pinellas-fl/st-petersburg-solar-installer",
        telephone: "(386) 832-1119",
        address: {
            "@type": "PostalAddress",
            addressLocality: "St. Petersburg",
            addressRegion: "FL",
            addressCountry: "US",
        },
        areaServed: {
            "@type": "City",
            name: "St. Petersburg, Florida",
        },
        serviceType: "Solar Installation",
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

            <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
                {/* Breadcrumbs */}
                <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4 mt-20 sticky top-20 z-40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-red-600 transition-colors duration-200">
                                Home
                            </Link>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                            <Link href="/pinellas-fl" className="hover:text-red-600 transition-colors duration-200">
                                Pinellas County
                            </Link>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-900 font-medium">St. Petersburg Solar Installer</span>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 lg:py-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-orange-500/5 to-yellow-400/10"></div>
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <ScrollReveal>
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <Badge className="bg-white/90 text-red-600 border-0 font-semibold px-4 py-2">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            {areaData.solarPotential} Solar Potential
                                        </Badge>
                                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 font-semibold px-4 py-2">
                                            <Sun className="h-4 w-4 mr-2" />
                                            {areaData.averageSunHours}
                                        </Badge>
                                    </div>
                                    <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-red-700 to-red-600 bg-clip-text text-transparent mb-6">
                                        St. Petersburg Solar Installer
                                    </h1>
                                    <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">{areaData.description}</p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                        >
                                            <Link href="/free-solar-quote">
                                                Get Free Quote
                                                <ArrowRight className="h-5 w-5 ml-2" />
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="lg"
                                            className="border-2 border-gray-300 hover:border-red-600 text-gray-700 hover:text-red-600 font-semibold px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                                        >
                                            <Link href="tel:(386)832-1119">
                                                <Phone className="h-5 w-5 mr-2" />
                                                Call (386) 832-1119
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <div className="relative">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={areaData.heroImage}
                                            alt={`Solar installation in ${areaData.name}`}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>
                                    <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                                                {areaData.averageSolarSavings}
                                            </div>
                                            <div className="text-sm text-gray-600 font-medium">Average Savings</div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Area Stats */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { icon: Users, value: areaData.population, label: "Population", color: "from-blue-500 to-blue-600" },
                                    {
                                        icon: Sun,
                                        value: areaData.averageSunHours,
                                        label: "Daily Sun Hours",
                                        color: "from-yellow-500 to-orange-500",
                                    },
                                    {
                                        icon: DollarSign,
                                        value: areaData.averageElectricBill,
                                        label: "Avg. Electric Bill",
                                        color: "from-green-500 to-green-600",
                                    },
                                    { icon: Clock, value: areaData.paybackPeriod, label: "Payback Period", color: "from-red-500 to-red-600" },
                                ].map((stat, index) => (
                                    <div key={index} className="group">
                                        <div className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
                                            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
                                            <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${stat.color} mb-4`}>
                                                <stat.icon className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                            <div className="text-gray-600 font-medium">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Neighborhoods We Serve */}
                <section className="py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"></div>
                    <div className="absolute top-10 right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"></div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-4">
                                    <MapPin className="h-3 w-3 text-blue-600 mr-1" />
                                    <span className="text-xs font-medium text-blue-700">Service Coverage</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent mb-4">
                                    St. Petersburg Neighborhoods We Serve
                                </h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Professional solar installation throughout{" "}
                                    <span className="font-semibold text-blue-600">St. Petersburg</span>
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
                            {areaData.neighborhoods.map((neighborhood, index) => (
                                <ScrollReveal key={index} delay={index * 30}>
                                    <div className="group relative">
                                        <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:border-blue-300/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                                            <div className="text-center">
                                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                                    <Building2 className="h-5 w-5 text-white" />
                                                </div>
                                                <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-1">
                                                    {neighborhood}
                                                </h3>
                                                <div className="flex items-center justify-center text-xs text-green-600 font-medium">
                                                    <CheckCircle className="h-3 w-3 mr-1" />
                                                    <span>Available</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solar Incentives */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <ScrollReveal>
                                <div>
                                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Solar Incentives</h2>
                                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                        Take advantage of these valuable incentives available to {areaData.name} residents and businesses.
                                    </p>
                                    <div className="space-y-4">
                                        {areaData.solarIncentives.map((incentive, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start space-x-4 p-4 bg-green-50 rounded-2xl border border-green-100"
                                            >
                                                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 font-medium leading-relaxed">{incentive}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={200}>
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Savings Calculator</h3>
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center p-6 bg-gray-50 rounded-2xl">
                                            <span className="text-gray-600 font-medium">Current Electric Bill:</span>
                                            <span className="font-bold text-gray-900 text-lg">{areaData.averageElectricBill}</span>
                                        </div>
                                        <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
                                            <span className="text-gray-600 font-medium">Annual Solar Savings:</span>
                                            <span className="font-bold text-green-600 text-lg">{areaData.averageSolarSavings}</span>
                                        </div>
                                        <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                                            <span className="text-gray-600 font-medium">System Payback:</span>
                                            <span className="font-bold text-blue-600 text-lg">{areaData.paybackPeriod}</span>
                                        </div>
                                    </div>
                                    <Button
                                        asChild
                                        className="w-full mt-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
                                    >
                                        <Link href="/free-solar-quote">
                                            Get Your Custom Quote
                                            <ArrowRight className="h-5 w-5 ml-2" />
                                        </Link>
                                    </Button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Customer Testimonials */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Customer Success Stories</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Real reviews from satisfied customers in {areaData.name} who chose our solar installation services.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {areaData.testimonials.map((testimonial, index) => (
                                <ScrollReveal key={index} delay={index * 150}>
                                    <Card className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0">
                                        <CardContent className="p-0">
                                            <div className="flex items-center mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                                                    <div className="text-gray-600">{testimonial.neighborhood}</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-bold text-red-600">{testimonial.systemSize}</div>
                                                    <div className="text-sm text-gray-500">Installed {testimonial.installDate}</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Local Solar Information */}
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100"></div>
                    <div className="absolute top-10 left-10 w-72 h-72 bg-slate-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl"></div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-slate-200 mb-6">
                                    <FileText className="h-4 w-4 text-slate-600 mr-2" />
                                    <span className="text-sm font-medium text-slate-700">Local Information</span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent mb-6">
                                    Local Solar Information
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Essential details about solar installation requirements and processes in{" "}
                                    <span className="font-semibold text-slate-600">{areaData.name}</span>
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <ScrollReveal>
                                <div className="group relative h-full">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    <Card className="relative bg-white/90 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden h-full">
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                                        <div className="p-8">
                                            <div className="flex items-center space-x-4 mb-6">
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                                                        <Zap className="h-6 w-6 text-white" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900">Utility Information</h3>
                                                    <p className="text-sm text-gray-500">Power company details</p>
                                                </div>
                                            </div>
                                            <div className="space-y-6">
                                                <div className="flex items-center justify-between p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                                                    <div className="flex items-center space-x-3">
                                                        <Building className="h-5 w-5 text-blue-600" />
                                                        <span className="text-gray-700 font-medium">Utility Company</span>
                                                    </div>
                                                    <span className="font-bold text-gray-900">{areaData.localUtility}</span>
                                                </div>
                                                <div className="flex items-center justify-between p-4 bg-green-50/50 rounded-2xl border border-green-100/50">
                                                    <div className="flex items-center space-x-3">
                                                        <Info className="h-5 w-5 text-green-600" />
                                                        <span className="text-gray-700 font-medium">Net Metering</span>
                                                    </div>
                                                    <span className="font-bold text-green-600">{areaData.netMeteringRate}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={100}>
                                <div className="group relative h-full">
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    <Card className="relative bg-white/90 backdrop-blur-sm border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden h-full">
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                                        <div className="p-8">
                                            <div className="flex items-center space-x-4 mb-6">
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                                                        <Shield className="h-6 w-6 text-white" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900">Permitting Process</h3>
                                                    <p className="text-sm text-gray-500">Local requirements</p>
                                                </div>
                                            </div>
                                            <div className="p-6 bg-green-50/50 rounded-2xl border border-green-100/50">
                                                <p className="text-gray-700 leading-relaxed mb-4">{areaData.permittingInfo}</p>
                                                <div className="flex items-center text-sm text-green-700">
                                                    <CheckCircle className="h-4 w-4 mr-2" />
                                                    <span className="font-medium">We handle all permits</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800"></div>
                    <div className="absolute inset-0">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <ScrollReveal>
                            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
                                <Award className="h-5 w-5 text-white mr-2" />
                                <span className="font-medium text-white">Tesla Certified • 5-Star Rated • Local Experts</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Go Solar in {areaData.name}?</h2>
                            <p className="text-xl text-red-100 mb-12 leading-relaxed">
                                Join your neighbors who are already saving money with clean solar energy. Get your free consultation and
                                see how much you can save in {areaData.name}.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-red-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <Link href="/free-solar-quote">
                                        Get Free Quote
                                        <ArrowRight className="h-5 w-5 ml-2" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-10 py-4 rounded-2xl bg-transparent backdrop-blur-sm transition-all duration-300"
                                >
                                    <Link href="tel:(386) 832-1119">
                                        <Phone className="h-5 w-5 mr-2" />
                                        Call (386) 832-1119
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
        </>
    )
}
