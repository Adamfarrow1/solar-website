import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollReveal from "@/components/scroll-reveal"
import CountUpStats from "@/components/count-up-stats"
import { Sparkles, Phone, Star, Quote, MapPin, Calendar, DollarSign, Zap, Home, Building } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Customer Testimonials & Reviews | Relentless Energy",
    description:
        "Read real customer testimonials and success stories from Tampa Bay homeowners who chose Relentless Energy for their solar installation.",
    alternates: {
        canonical: "/about-us/testimonials",
    },
    openGraph: {
        title: "Customer Testimonials & Reviews | Relentless Energy",
        description: "Read real customer testimonials and success stories.",
        url: "/about-us/testimonials",
    },
}

export default function TestimonialsPage() {
    const featuredTestimonials = [
        {
            name: "Sarah & Mike Johnson",
            location: "Tampa, FL",
            system: "8.5kW Residential Solar",
            savings: "$2,400/year",
            date: "March 2024",
            rating: 5,
            quote:
                "Relentless Energy exceeded our expectations in every way. From the initial consultation to system activation, their team was professional, knowledgeable, and transparent. Our electric bills went from $280/month to just $15! The installation was completed in one day with zero mess left behind.",
            highlights: ["Professional team", "One-day installation", "Huge savings", "Clean work"],
        },
        {
            name: "Robert Chen",
            location: "St. Petersburg, FL",
            system: "12kW + Tesla Powerwall",
            savings: "$3,200/year",
            date: "January 2024",
            rating: 5,
            quote:
                "As an engineer, I was very particular about the installation quality. The Relentless Energy team demonstrated exceptional technical expertise and attention to detail. The Tesla Powerwall integration was flawless, and we've had zero issues in 6 months. Highly recommend!",
            highlights: ["Technical expertise", "Perfect integration", "Zero issues", "Engineer approved"],
        },
        {
            name: "Maria Rodriguez",
            location: "Clearwater, FL",
            system: "6.2kW Residential Solar",
            savings: "$1,800/year",
            date: "February 2024",
            rating: 5,
            quote:
                "The entire process was seamless from start to finish. They handled all the permits, utility coordination, and even helped us navigate the federal tax credits. Our system has been producing more energy than projected. Couldn't be happier with our decision!",
            highlights: ["Seamless process", "Handled everything", "Exceeding projections", "Great support"],
        },
    ]

    const customerReviews = [
        {
            name: "David Thompson",
            location: "Brandon, FL",
            rating: 5,
            date: "April 2024",
            review:
                "Outstanding service from consultation to completion. The team was punctual, professional, and cleaned up perfectly after installation. Our solar system is performing exactly as promised.",
            system: "7.8kW Residential",
        },
        {
            name: "Jennifer Martinez",
            location: "Wesley Chapel, FL",
            rating: 5,
            date: "March 2024",
            review:
                "Relentless Energy made going solar so easy! They explained everything clearly, handled all the paperwork, and the installation was completed faster than expected. Highly recommend!",
            system: "9.1kW Residential",
        },
        {
            name: "Michael Foster",
            location: "Lutz, FL",
            rating: 5,
            date: "February 2024",
            review:
                "Excellent communication throughout the entire process. They kept us informed at every step and delivered exactly what they promised. Our electric bill is now practically zero!",
            system: "10.5kW + Battery",
        },
        {
            name: "Lisa Wang",
            location: "Carrollwood, FL",
            rating: 5,
            date: "January 2024",
            review:
                "Professional installation team that clearly takes pride in their work. The system looks great on our roof and is producing more energy than we expected. Great investment!",
            system: "8.2kW Residential",
        },
        {
            name: "Carlos Gutierrez",
            location: "Town 'n' Country, FL",
            rating: 5,
            date: "December 2023",
            review:
                "From design to activation, everything was handled professionally. The team answered all our questions and made sure we understood how everything worked. Very satisfied!",
            system: "11.3kW Commercial",
        },
        {
            name: "Amanda Wilson",
            location: "Riverview, FL",
            rating: 5,
            date: "November 2023",
            review:
                "The quality of work is exceptional. Clean installation, great communication, and the system is performing better than projected. Would definitely recommend to friends and family.",
            system: "6.8kW Residential",
        },
    ]

    const successStats = [
        {
            number: "500+",
            label: "Happy Customers",
            icon: Home,
        },
        {
            number: "4.9/5",
            label: "Average Rating",
            icon: Star,
        },
        {
            number: "$2.1M+",
            label: "Customer Savings",
            icon: DollarSign,
        },
        {
            number: "98%",
            label: "Referral Rate",
            icon: Zap,
        },
    ]

    const businessTestimonials = [
        {
            name: "Tampa Bay Manufacturing",
            contact: "John Stevens, Facilities Manager",
            system: "250kW Commercial Solar",
            savings: "$45,000/year",
            quote:
                "Relentless Energy delivered a complex commercial installation on time and under budget. The system has exceeded performance expectations and our ROI timeline is ahead of schedule.",
            type: "Manufacturing",
        },
        {
            name: "Sunshine Retail Center",
            contact: "Patricia Lee, Property Manager",
            system: "180kW Commercial Solar",
            savings: "$32,000/year",
            quote:
                "Professional project management from start to finish. The installation had minimal impact on our tenants and the system is performing flawlessly. Excellent work!",
            type: "Retail",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50 py-20 lg:py-32">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-100 opacity-20 blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-red-100 opacity-20 blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 h-60 w-60 rounded-full bg-red-50 opacity-30 blur-2xl animate-pulse delay-500"></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <ScrollReveal>
                            <Badge variant="outline" className="mb-6 border-red-200 bg-red-50 text-red-700 hover:bg-red-100">
                                <Sparkles className="mr-2 h-4 w-4" />
                                Real Customer Stories
                            </Badge>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                What Our{" "}
                                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                                    Customers Say
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl">
                                Don't just take our word for it. Read real testimonials from Tampa Bay homeowners and businesses who
                                chose Relentless Energy for their solar journey.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                                    <Link href="/free-solar-quote">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Join Our Success Stories
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                                >
                                    <Link href="/about-us/our-process">Learn Our Process</Link>
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Stats Preview */}
                    <ScrollReveal delay={0.4}>
                        <div className="mt-16">
                            <CountUpStats />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Success Stats */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Customer Success by the Numbers</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Our track record speaks for itself with hundreds of satisfied customers across Tampa Bay.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-4 gap-8">
                        {successStats.map((stat, index) => (
                            <ScrollReveal key={stat.label} delay={index * 0.1}>
                                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                                            <stat.icon className="h-8 w-8 text-red-600" />
                                        </div>
                                        <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                        <div className="text-gray-600">{stat.label}</div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Featured Customer Stories</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Real experiences from Tampa Bay families who made the switch to solar with Relentless Energy.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-12">
                        {featuredTestimonials.map((testimonial, index) => (
                            <ScrollReveal key={testimonial.name} delay={index * 0.1}>
                                <Card className="hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-8">
                                        <div className="flex flex-col lg:flex-row gap-8">
                                            {/* Customer Info */}
                                            <div className="lg:w-1/3">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-lg font-bold text-red-600">
                                                        {testimonial.name
                                                            .split(" ")
                                                            .map((n) => n[0])
                                                            .join("")}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                                                        <div className="flex items-center gap-1 text-yellow-500 mb-1">
                                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                                <Star key={i} className="h-4 w-4 fill-current" />
                                                            ))}
                                                        </div>
                                                        <div className="flex items-center gap-1 text-sm text-gray-600">
                                                            <MapPin className="h-3 w-3" />
                                                            {testimonial.location}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-3 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Home className="h-4 w-4 text-red-600" />
                                                        <span className="text-gray-600">{testimonial.system}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <DollarSign className="h-4 w-4 text-green-600" />
                                                        <span className="text-gray-600">{testimonial.savings} saved</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="h-4 w-4 text-gray-400" />
                                                        <span className="text-gray-600">{testimonial.date}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Testimonial Content */}
                                            <div className="lg:w-2/3">
                                                <Quote className="h-8 w-8 text-red-200 mb-4" />
                                                <blockquote className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</blockquote>

                                                <div className="flex flex-wrap gap-2">
                                                    {testimonial.highlights.map((highlight, highlightIndex) => (
                                                        <Badge key={highlightIndex} variant="secondary" className="bg-red-50 text-red-700">
                                                            {highlight}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Reviews Grid */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">More Customer Reviews</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Hundreds of satisfied customers across Tampa Bay have chosen Relentless Energy for their solar needs.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {customerReviews.map((review, index) => (
                            <ScrollReveal key={review.name} delay={index * 0.1}>
                                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="font-bold text-gray-900">{review.name}</h3>
                                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                                    <MapPin className="h-3 w-3" />
                                                    {review.location}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-yellow-500">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-current" />
                                                ))}
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">"{review.review}"</p>

                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <span>{review.system}</span>
                                            <span>{review.date}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Commercial Success Stories</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Tampa Bay businesses trust Relentless Energy for their commercial solar installations.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {businessTestimonials.map((business, index) => (
                            <ScrollReveal key={business.name} delay={index * 0.1}>
                                <Card className="hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-8">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                                                <Building className="h-8 w-8 text-red-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-1">{business.name}</h3>
                                                <p className="text-red-600 font-medium mb-2">{business.contact}</p>
                                                <Badge variant="outline" className="border-red-200 text-red-700">
                                                    {business.type}
                                                </Badge>
                                            </div>
                                        </div>

                                        <Quote className="h-6 w-6 text-red-200 mb-3" />
                                        <blockquote className="text-gray-700 mb-6 italic">"{business.quote}"</blockquote>

                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2">
                                                <Zap className="h-4 w-4 text-red-600" />
                                                <span className="text-gray-600">{business.system}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <DollarSign className="h-4 w-4 text-green-600" />
                                                <span className="text-gray-600">{business.savings} saved</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Testimonials CTA */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">See More Success Stories</h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Watch video testimonials and see before/after photos from our satisfied customers on our social media
                                channels.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                                >
                                    <Link href="https://www.facebook.com/relentlessenergysolar/" target="_blank">
                                        View Facebook Reviews
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                                >
                                    <Link href="https://google.com/business/relentlessenergy" target="_blank">
                                        Read Google Reviews
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-red-600">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Ready to Join Our Success Stories?</h2>
                            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                                Experience the same exceptional service and results that our customers rave about. Start your solar
                                journey today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" variant="secondary">
                                    <Link href="/free-solar-quote">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Get Free Quote
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                                >
                                    <Link href="/about-us/our-process">Learn Our Process</Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
