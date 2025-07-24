import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getAllServiceAreas } from "@/lib/service-areas"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ScrollReveal from "@/components/scroll-reveal"
import {
    ChevronRight,
    MapPin,
    Sun,
    Users,
    Phone,
    Star,
    Zap,
    DollarSign,
    Home,
    Building,
    ArrowRight,
    TrendingUp,
    Award,
    Shield,
} from "lucide-react"

export const metadata: Metadata = {
    title: "Solar Installation Service Areas | Tampa Bay | Relentless Energy",
    description:
        "Professional solar installation throughout Tampa Bay and Pinellas County. Serving St. Petersburg, Clearwater, Largo, Palm Harbor, and surrounding areas. Tesla Certified installer.",
    keywords: [
        "Tampa Bay solar installation",
        "Pinellas County solar",
        "St Petersburg solar panels",
        "Clearwater solar installation",
        "Largo solar panels",
        "Palm Harbor solar",
        "Florida solar installer",
        "Tesla Certified installer",
    ],
    openGraph: {
        title: "Solar Installation Service Areas | Tampa Bay | Relentless Energy",
        description:
            "Professional solar installation throughout Tampa Bay and Pinellas County. Tesla Certified installer serving all major cities.",
        images: ["/images/st-petersburg-florida.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Solar Installation Service Areas | Tampa Bay | Relentless Energy",
        description:
            "Professional solar installation throughout Tampa Bay and Pinellas County. Tesla Certified installer serving all major cities.",
        images: ["/images/st-petersburg-florida.jpg"],
    },
    alternates: {
        canonical: "https://www.relentlessenergy.org/service-area",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function ServiceAreasPage() {
    const serviceAreas = getAllServiceAreas()

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Relentless Energy",
        description:
            "Tesla Certified solar installation company serving Tampa Bay and Pinellas County with residential and commercial solar solutions.",
        url: "https://relentlessenergy.org",
        telephone: "(386) 832-1119",
        // address: {
        //     "@type": "PostalAddress",
        //     streetAddress: "123 Solar Street",
        //     addressLocality: "St Petersburg",
        //     addressRegion: "FL",
        //     postalCode: "33701",
        //     addressCountry: "US",
        // },
        // geo: {
        //     "@type": "GeoCoordinates",
        //     latitude: 27.7676,
        //     longitude: -82.6403,
        // },
        areaServed: serviceAreas.map((area) => ({
            "@type": "City",
            name: area.fullName,
        })),
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
                            <span className="text-gray-900 font-medium">Service Areas</span>
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

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <ScrollReveal>
                            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-red-200 mb-8">
                                <Award className="h-4 w-4 text-red-600 mr-2" />
                                <span className="text-sm font-medium text-red-700">Tesla Certified Installer</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-red-700 to-red-600 bg-clip-text text-transparent mb-6">
                                Tampa Bay Solar
                            </h1>
                            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                                Professional solar installation throughout Pinellas County and Tampa Bay.
                                <span className="text-red-600 font-semibold"> Trusted by 1,000+ families</span> to deliver clean energy
                                solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <Link href="/free-quote">
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
                        </ScrollReveal>
                    </div>
                </section>

                {/* Service Area Stats */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    { value: "975K+", label: "Residents Served", icon: Users, color: "from-blue-500 to-blue-600" },
                                    { value: "24", label: "Cities & Areas", icon: MapPin, color: "from-green-500 to-green-600" },
                                    { value: "8.1", label: "Sun Hours/Day", icon: Sun, color: "from-yellow-500 to-orange-500" },
                                    { value: "$1,800", label: "Avg. Annual Savings", icon: DollarSign, color: "from-red-500 to-red-600" },
                                ].map((stat, index) => (
                                    <div key={index} className="group">
                                        <div className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
                                            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
                                            <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${stat.color} mb-4`}>
                                                <stat.icon className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                            <div className="text-gray-600 font-medium">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Service Areas Grid */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-20">
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Service Areas</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    We proudly serve communities throughout Tampa Bay and Pinellas County with
                                    <span className="text-red-600 font-semibold"> premium solar installation services</span>.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviceAreas.map((area, index) => (
                                <ScrollReveal key={area.slug} delay={index * 150}>
                                    <Card className="group h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 overflow-hidden">
                                        <div className="relative h-56 overflow-hidden">
                                            <Image
                                                src={area.heroImage || "/placeholder.svg"}
                                                alt={`Solar installation in ${area.name}`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <Badge className="bg-white/90 text-red-600 border-0 font-semibold">
                                                    <MapPin className="h-3 w-3 mr-1" />
                                                    {area.solarPotential}
                                                </Badge>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 font-semibold">
                                                    <Sun className="h-3 w-3 mr-1" />
                                                    {area.averageSunHours}
                                                </Badge>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="text-2xl font-bold text-white mb-1">{area.name}</h3>
                                                <div className="text-green-400 font-semibold text-lg">{area.averageSolarSavings} savings</div>
                                            </div>
                                        </div>

                                        <CardContent className="p-8">
                                            <CardDescription className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                                                {area.description}
                                            </CardDescription>

                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <Users className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                                                    <span className="font-medium">{area.population}</span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <DollarSign className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                    <span className="font-medium">{area.averageElectricBill}</span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <Zap className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                                                    <span className="font-medium">{area.paybackPeriod}</span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <TrendingUp className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                                                    <span className="font-medium">High ROI</span>
                                                </div>
                                            </div>

                                            <Button
                                                asChild
                                                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105"
                                            >
                                                <Link href={`/service-area/${area.slug}`}>
                                                    Explore {area.name}
                                                    <ArrowRight className="h-4 w-4 ml-2" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Local */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-20">
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose Local Solar?</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    As your trusted Tampa Bay solar installer, we understand the unique needs and opportunities in our
                                    community.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: MapPin,
                                    title: "Local Expertise",
                                    description:
                                        "Deep knowledge of local permitting, utilities, and weather patterns for optimal installations.",
                                    color: "from-blue-500 to-blue-600",
                                },
                                {
                                    icon: Users,
                                    title: "Community Focus",
                                    description: "Committed to helping our neighbors achieve energy independence and save money.",
                                    color: "from-green-500 to-green-600",
                                },
                                {
                                    icon: Star,
                                    title: "Proven Results",
                                    description: "Over 1,000 successful installations with 5-star customer satisfaction ratings.",
                                    color: "from-yellow-500 to-orange-500",
                                },
                                {
                                    icon: Shield,
                                    title: "Local Support",
                                    description: "Always available for service, maintenance, and support when you need us most.",
                                    color: "from-red-500 to-red-600",
                                },
                            ].map((item, index) => (
                                <ScrollReveal key={index} delay={index * 100}>
                                    <div className="group">
                                        <div className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 h-full">
                                            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
                                            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-6`}>
                                                <item.icon className="h-8 w-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Projects */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-20">
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Recent Success Stories</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    See how we're helping homeowners and businesses throughout Tampa Bay
                                    <span className="text-red-600 font-semibold"> save thousands</span> with solar energy.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    location: "St. Petersburg",
                                    type: "Residential",
                                    size: "8.5kW",
                                    savings: "$1,920/year",
                                    image: "/images/st-petersburg-florida.jpg",
                                    badge: "Residential",
                                    icon: Home,
                                },
                                {
                                    location: "Clearwater",
                                    type: "Commercial",
                                    size: "78kW",
                                    savings: "$14,200/year",
                                    image: "/images/clearwater-fl.jpg",
                                    badge: "Commercial",
                                    icon: Building,
                                },
                                {
                                    location: "Palm Harbor",
                                    type: "Tesla Solar Roof",
                                    size: "11.2kW",
                                    savings: "$2,400/year",
                                    image: "/images/palmharbor.jpg",
                                    badge: "Tesla Roof",
                                    icon: Zap,
                                },
                            ].map((project, index) => (
                                <ScrollReveal key={index} delay={index * 150}>
                                    <Card className="group overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0">
                                        <div className="relative h-56">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={`${project.type} solar installation in ${project.location}`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-white/90 text-red-600 border-0 font-semibold">
                                                    <project.icon className="h-3 w-3 mr-1" />
                                                    {project.badge}
                                                </Badge>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="text-xl font-bold text-white mb-1">{project.location}</h3>
                                                <div className="text-green-400 font-semibold">{project.savings}</div>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <div className="text-sm text-gray-500 mb-1">System Size</div>
                                                    <div className="font-bold text-gray-900">{project.size}</div>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-500 mb-1">Annual Savings</div>
                                                    <div className="font-bold text-green-600">{project.savings}</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </ScrollReveal>
                            ))}
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
                            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
                                <Award className="h-4 w-4 text-white mr-2" />
                                <span className="text-sm font-medium text-white">Tesla Certified • 5-Star Rated</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Go Solar?</h2>
                            <p className="text-xl text-red-100 mb-12 leading-relaxed">
                                Join your neighbors who are already saving money with clean solar energy. Get your free consultation and
                                see how much you can save.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-red-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <Link href="/free-quote">
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
