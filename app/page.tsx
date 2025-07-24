import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Shield, Award, Phone, ArrowRight, CheckCircle, Star, Zap } from "lucide-react"
import CountUpStats from "@/components/count-up-stats"
import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"
import LeadChatbot from "@/components/lead-chatbot"

export const metadata: Metadata = {
  title: "Premier Solar Panel Installation in Tampa Bay, Florida | Relentless Energy",
  description:
    "Get solar panels installed by Florida's #1 Tesla Certified solar company. Serving St Petersburg, Clearwater, Largo & Tampa Bay. Free quotes, 25-year warranty, $0 down financing available.",
  keywords: [
    "solar panels Tampa Bay",
    "solar installation Florida",
    "Tesla solar installer St Petersburg",
    "residential solar panels Clearwater",
    "commercial solar Largo",
    "solar financing Florida",
  ],
  alternates: {
    canonical: "https://www.relentlessenergy.org/",
  },
  openGraph: {
    title: "Premier Solar Panel Installation in Tampa Bay, Florida | Relentless Energy",
    description:
      "Get solar panels installed by Florida's #1 Tesla Certified solar company. Serving St Petersburg, Clearwater, Largo & Tampa Bay.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/residential-solar.jpg", // ✅ Replace with your real OG image URL
        width: 1200,
        height: 630,
        alt: "Solar panels installed by Relentless Energy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Solar Panel Installation in Tampa Bay, Florida | Relentless Energy",
    description: "Florida's #1 Tesla Certified solar company. Free quotes and $0 down financing in Tampa Bay.",
    images: ["/images/residential-solar.jpg"], // ✅ Replace with your real OG image URL
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  return (
    <>
      {/* Video Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/home-poster.webp"
            preload="none"
          >
            <source src="/videos/solar-neighborhood.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/images/home-poster.webp"
              alt="Solar panel installation on Florida home"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority
            />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <Badge className="bg-red-600 text-white hover:bg-red-700 text-sm sm:text-lg px-3 py-1 sm:px-4 sm:py-2 hover:scale-105 transition-all duration-300">
                Tesla Certified Solar Installer
              </Badge>
              <ScrollReveal direction="up">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Power Your Home with
                  <span className="text-red-500"> Florida Sunshine</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={200}>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto px-4">
                  Save thousands on electricity bills with premium solar panel installation in Tampa Bay. Get a free
                  quote today and join 10,000+ satisfied Florida homeowners who&apos;ve gone solar.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 h-auto hover:scale-105 transition-all duration-300 group"
                >
                  <Link href="/free-quote">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 h-auto bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Link href="tel:386-832-1119">
                    <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                    (386) 832-1119
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-8 pt-6 sm:pt-8 px-4">
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2 hover:bg-opacity-20 transition-all duration-300">
                  <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium text-sm sm:text-base">25-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2 hover:bg-opacity-20 transition-all duration-300">
                  <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium text-sm sm:text-base">$0 Down Available</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2 hover:bg-opacity-20 transition-all duration-300">
                  <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium text-sm sm:text-base">Licensed & Insured</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-red-500 rounded-full flex justify-center hover:border-white transition-colors duration-300">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Count-up Stats Section */}
      <CountUpStats />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Why Tampa Bay Homeowners Choose Relentless Energy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As Florida&apos;s premier Tesla Certified solar installer, we deliver unmatched quality, service, and
                savings for your solar energy investment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal direction="up" delay={0}>
              <Card className="text-center border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                    <Award className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Tesla Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Official Tesla Powerwall and Solar Roof installer with advanced training and certification.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <Card className="text-center border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">25-Year Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Industry-leading warranty coverage on panels, inverters, and workmanship for complete peace of mind.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <Card className="text-center border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                    <Sun className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Premium Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Top-tier solar panels and inverters from leading manufacturers for maximum efficiency and
                    durability.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <Card className="text-center border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                    <Star className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Local Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Florida-based team with deep knowledge of local permits, incentives, and weather conditions.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Complete Solar Solutions for Florida Homes & Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From residential rooftop installations to commercial solar farms, we provide comprehensive solar energy
                solutions tailored to your needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollReveal direction="left" delay={0}>
              <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 hover:-translate-y-2 group">
                <CardHeader>
                  <Image
                    src="/images/residential-solar.webp"
                    alt="Residential solar panel installation on Florida home roof"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardTitle className="text-2xl text-gray-900">Residential Solar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-gray-600">
                    Custom solar panel systems designed for Florida homes. Reduce your electricity bills by up to 90%
                    with our premium residential solar installations.
                  </CardDescription>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Free energy audit & design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Professional installation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Monitoring & maintenance
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 group">
                    <Link href="/solutions/residential-solar-panels">
                      Learn more about residential solar
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 hover:-translate-y-2 group">
                <CardHeader>
                  <Image
                    src="/images/tesla-charge.webp"
                    alt="Tesla Powerwall home battery backup system for energy storage"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardTitle className="text-2xl text-gray-900">Tesla Powerwall</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-gray-600">
                    Store solar energy for use during outages or peak hours. Tesla Powerwall provides reliable backup
                    power and energy independence for your home.
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
                      Mobile app monitoring
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 group">
                    <Link href="/tesla-solar/powerwall">
                      Learn more about Tesla Powerwall
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 hover:-translate-y-2 group">
                <CardHeader>
                  <Image
                    src="/images/commercial-solar.webp"
                    alt="Commercial solar panel installation on business building in Florida"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <CardTitle className="text-2xl text-gray-900">Commercial Solar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-gray-600">
                    Reduce operating costs and demonstrate environmental leadership with commercial solar installations.
                    Perfect for businesses, schools, and organizations.
                  </CardDescription>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Tax incentives & rebates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Scalable systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Performance guarantees
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 group">
                    <Link href="/solutions/commercial-solar-panels">
                      Learn more about commercial solar
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Start Saving with Solar Energy?</h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Join thousands of satisfied Florida homeowners who&apos;ve made the switch to clean, renewable solar
                energy. Get your free quote today and start saving immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="text-lg px-10 py-4 h-auto hover:scale-105 transition-all duration-300 group"
                >
                  <Link href="/free-quote">
                    Get Your Free Solar Quote
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-lg px-10 py-4 h-auto bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Link href="tel:386-832-1119">
                    <Phone className="mr-2 h-6 w-6" />
                    Call (386) 832-1119
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


    </>
  )
}
