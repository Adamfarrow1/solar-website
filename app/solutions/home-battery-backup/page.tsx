"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Battery,
    Zap,
    Shield,
    Home,
    DollarSign,
    Clock,
    CheckCircle,
    ArrowRight,
    Sun,
    Lightbulb,
    Wifi,
    Thermometer,
    Star,
    TrendingUp,
    Award,
    Users,
    Phone,
} from "lucide-react"
import Link from "next/link"

export default function HomeBatteryBackupPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-[140px] overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    {/* Large Animated Gradient Orbs */}
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-red-400/30 to-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-400/25 to-red-400/25 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                    ></div>

                    {/* Medium Floating Orbs */}
                    <div
                        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-red-300/20 to-orange-300/20 rounded-full blur-2xl animate-bounce"
                        style={{ animationDuration: "3s", animationDelay: "0.2s" }}
                    ></div>
                    <div
                        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-orange-300/15 to-yellow-300/15 rounded-full blur-2xl animate-bounce"
                        style={{ animationDuration: "4s", animationDelay: "1.5s" }}
                    ></div>
                    <div
                        className="absolute top-3/4 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-300/25 to-red-300/25 rounded-full blur-xl animate-bounce"
                        style={{ animationDuration: "2.5s", animationDelay: "0.8s" }}
                    ></div>

                    {/* Small Floating Particles */}
                    <div
                        className="absolute top-32 left-1/2 w-4 h-4 bg-red-400/40 rounded-full animate-ping"
                        style={{ animationDelay: "0.3s" }}
                    ></div>
                    <div
                        className="absolute bottom-40 right-1/3 w-3 h-3 bg-orange-400/50 rounded-full animate-ping"
                        style={{ animationDelay: "1.2s" }}
                    ></div>
                    <div
                        className="absolute top-2/3 left-16 w-2 h-2 bg-yellow-400/60 rounded-full animate-ping"
                        style={{ animationDelay: "0.7s" }}
                    ></div>

                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(239,68,68,0.04)_1px,transparent_0)] bg-[length:40px_40px]"></div>

                    {/* Minimal geometric shapes */}
                    <div className="absolute top-32 right-20 w-28 h-28 border border-red-100 rounded-lg rotate-12 opacity-40"></div>
                    <div className="absolute bottom-40 left-16 w-20 h-20 border border-orange-100 rounded-full opacity-30"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Simple Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full">
                                <Battery className="w-4 h-4 text-red-500" />
                                <span className="text-sm font-medium text-red-700">Home Battery Backup</span>
                            </div>

                            {/* Clean Typography */}
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                    Never Lose
                                    <span className="text-red-500 block">Power Again</span>
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                    Keep your home powered during outages with advanced battery backup systems. Store solar energy and
                                    gain energy independence.
                                </p>
                            </div>

                            {/* Simple CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold"
                                >
                                    <Link href="/free-quote">
                                        Get Free Quote
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold bg-transparent"
                                >
                                    <Link href="tel:727-555-0123">
                                        <Phone className="mr-2 h-5 w-5" />
                                        (727) 555-0123
                                    </Link>
                                </Button>
                            </div>

                            {/* Clean Stats */}
                            <div className="grid grid-cols-3 gap-8 pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-red-600 mb-1">10+</div>
                                    <div className="text-sm text-gray-600">Years Backup</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
                                    <div className="text-sm text-gray-600">Monitoring</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-1">99%</div>
                                    <div className="text-sm text-gray-600">Efficiency</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Clean Image */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gray-200">
                                    <div className="text-center mb-6">
                                        <Battery className="w-24 h-24 text-red-500 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Tesla Powerwall</h3>
                                        <p className="text-gray-600">13.5 kWh Capacity</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between text-gray-900">
                                            <span>Battery Level</span>
                                            <span className="text-green-600 font-semibold">95%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full w-[95%]"></div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mt-6">
                                            <div className="text-center p-4 bg-gray-50 rounded-xl border">
                                                <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                                                <div className="text-gray-900 font-semibold">5.2 kW</div>
                                                <div className="text-gray-600 text-sm">Output</div>
                                            </div>
                                            <div className="text-center p-4 bg-gray-50 rounded-xl border">
                                                <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                                <div className="text-gray-900 font-semibold">12 hrs</div>
                                                <div className="text-gray-600 text-sm">Runtime</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Simple floating badge */}
                            <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-20">
                                <div className="text-sm font-semibold">Grid Independent</div>
                            </div>

                            {/* Simple savings indicator */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg border z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                        <DollarSign className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-gray-900">$2,000+</div>
                                        <div className="text-sm text-gray-600">Annual Savings</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Battery Backup?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Protect your home and family with reliable backup power that keeps you connected when the grid goes down.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Power Security",
                                description:
                                    "Keep essential appliances running during outages - refrigerator, lights, medical equipment, and more.",
                            },
                            {
                                icon: DollarSign,
                                title: "Lower Bills",
                                description:
                                    "Store cheap off-peak electricity and use it during expensive peak hours to reduce your energy costs.",
                            },
                            {
                                icon: Sun,
                                title: "Solar Integration",
                                description:
                                    "Maximize your solar investment by storing excess energy for use when the sun isn't shining.",
                            },
                            {
                                icon: Home,
                                title: "Whole Home Backup",
                                description: "Power your entire home or select critical circuits based on your needs and budget.",
                            },
                            {
                                icon: Wifi,
                                title: "Smart Monitoring",
                                description:
                                    "Monitor and control your system remotely with intelligent apps and real-time notifications.",
                            },
                            {
                                icon: TrendingUp,
                                title: "Increase Home Value",
                                description: "Add significant value to your property with modern energy storage technology.",
                            },
                        ].map((benefit, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <benefit.icon className="w-12 h-12 text-red-500 mb-4" />
                                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Battery Options Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Battery Storage Options</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose from industry-leading battery systems designed for reliability, efficiency, and longevity.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Tesla Powerwall",
                                capacity: "13.5 kWh",
                                power: "5.8 kW",
                                features: ["Integrated inverter", "Weather resistant", "10-year warranty", "Mobile app control"],
                                price: "From $11,500",
                                popular: true,
                            },
                            {
                                name: "Enphase IQ Battery",
                                capacity: "10.1 kWh",
                                power: "5.76 kW",
                                features: ["Modular design", "Safe LFP chemistry", "15-year warranty", "Easy expansion"],
                                price: "From $9,800",
                            },
                            {
                                name: "SolarEdge Energy Bank",
                                capacity: "9.7 kWh",
                                power: "5 kW",
                                features: ["DC-coupled", "High efficiency", "Compact design", "Smart monitoring"],
                                price: "From $8,900",
                            },
                        ].map((battery, index) => (
                            <Card
                                key={index}
                                className={`relative ${battery.popular ? "border-red-500 border-2" : "border-gray-200"} shadow-lg hover:shadow-xl transition-all duration-300`}
                            >
                                {battery.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-red-500 text-white px-4 py-1">Most Popular</Badge>
                                    </div>
                                )}
                                <CardHeader className="text-center">
                                    <Battery className="w-16 h-16 text-red-500 mx-auto mb-4" />
                                    <CardTitle className="text-2xl">{battery.name}</CardTitle>
                                    <div className="text-3xl font-bold text-gray-900 mt-2">{battery.price}</div>
                                    <p className="text-gray-600">Installed</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Capacity:</span>
                                            <span className="font-semibold">{battery.capacity}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Power Output:</span>
                                            <span className="font-semibold">{battery.power}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        {battery.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className={`w-full ${battery.popular ? "bg-red-500 hover:bg-red-600" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                                        asChild
                                    >
                                        <Link href="/free-quote">Get Quote</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Installation Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our certified technicians handle everything from permits to final inspection.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Site Assessment",
                                description:
                                    "We evaluate your home's electrical system and energy needs to design the perfect battery solution.",
                            },
                            {
                                step: "02",
                                title: "Permits & Design",
                                description:
                                    "Our team handles all permits and creates detailed installation plans for your battery system.",
                            },
                            {
                                step: "03",
                                title: "Professional Install",
                                description:
                                    "Certified electricians install your battery system with minimal disruption to your daily routine.",
                            },
                            {
                                step: "04",
                                title: "System Activation",
                                description:
                                    "We test, commission, and connect your system, then train you on monitoring and operation.",
                            },
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Advanced technology designed for maximum performance and reliability.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-6">
                                {[
                                    {
                                        label: "Battery Chemistry",
                                        value: "Lithium Iron Phosphate (LiFePO4)",
                                        icon: Battery,
                                    },
                                    {
                                        label: "Cycle Life",
                                        value: "6,000+ cycles at 80% capacity",
                                        icon: TrendingUp,
                                    },
                                    {
                                        label: "Operating Temperature",
                                        value: "-4°F to 122°F (-20°C to 50°C)",
                                        icon: Thermometer,
                                    },
                                    {
                                        label: "Efficiency",
                                        value: "97.5% round-trip efficiency",
                                        icon: Zap,
                                    },
                                    {
                                        label: "Warranty",
                                        value: "10-15 years comprehensive coverage",
                                        icon: Shield,
                                    },
                                    {
                                        label: "Monitoring",
                                        value: "24/7 remote monitoring & alerts",
                                        icon: Wifi,
                                    },
                                ].map((spec, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                            <spec.icon className="w-6 h-6 text-red-500" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{spec.label}</div>
                                            <div className="text-gray-600">{spec.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">System Capabilities</h3>

                            <div className="space-y-4">
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-600">Essential Loads (8-12 hours)</span>
                                        <Lightbulb className="w-5 h-5 text-yellow-500" />
                                    </div>
                                    <div className="text-sm text-gray-500">Lights, refrigerator, internet, security system</div>
                                </div>

                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-600">Partial Home (4-6 hours)</span>
                                        <Home className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div className="text-sm text-gray-500">Above + HVAC, washer/dryer, some outlets</div>
                                </div>

                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-600">Whole Home (2-4 hours)</span>
                                        <Zap className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div className="text-sm text-gray-500">Complete home backup with all appliances</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real experiences from homeowners who chose battery backup systems.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                location: "Austin, TX",
                                rating: 5,
                                text: "During the winter storm, we were the only house on our block with power. The Tesla Powerwall kept our family safe and comfortable for 3 days straight.",
                                savings: "$1,800/year saved",
                            },
                            {
                                name: "Mike Chen",
                                location: "Phoenix, AZ",
                                rating: 5,
                                text: "The battery system pays for itself with time-of-use savings. We charge during cheap hours and use stored power during peak rates.",
                                savings: "$2,200/year saved",
                            },
                            {
                                name: "Lisa Rodriguez",
                                location: "Miami, FL",
                                rating: 5,
                                text: "Hurricane season used to stress us out. Now we have peace of mind knowing our medical equipment and security system will stay powered.",
                                savings: "$1,600/year saved",
                            },
                        ].map((testimonial, index) => (
                            <Card key={index} className="border-0 shadow-lg">
                                <CardHeader>
                                    <div className="flex items-center space-x-1 mb-2">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                                    <p className="text-gray-600">{testimonial.location}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 mb-4">&quot;{testimonial.text}&quot;</p>
                                    <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-semibold">
                                        {testimonial.savings}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing & Financing */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Financing Options</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Make battery backup affordable with our financing solutions and available incentives.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Breakdown</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-600">Single Battery System</span>
                                    <span className="font-semibold">$8,900 - $11,500</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-600">Dual Battery System</span>
                                    <span className="font-semibold">$16,800 - $21,000</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-600">Installation & Permits</span>
                                    <span className="font-semibold">$2,000 - $3,500</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-600">Federal Tax Credit (30%)</span>
                                    <span className="font-semibold text-green-600">-$3,270 - $7,350</span>
                                </div>
                                <div className="flex justify-between items-center py-3 font-bold text-lg">
                                    <span>Net Investment</span>
                                    <span>$7,630 - $18,150</span>
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-6">
                                <h4 className="font-semibold text-blue-900 mb-2">Financing Available</h4>
                                <ul className="text-blue-800 space-y-1">
                                    <li>• 0% APR for 12 months</li>
                                    <li>• Low-rate loans up to 20 years</li>
                                    <li>• No money down options</li>
                                    <li>• Same-as-cash programs</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Return on Investment</h3>

                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-red-500 mb-2">6-8 Years</div>
                                    <div className="text-gray-600">Typical Payback Period</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-white rounded-lg">
                                        <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                        <div className="font-semibold">$2,000+</div>
                                        <div className="text-sm text-gray-600">Annual Savings</div>
                                    </div>
                                    <div className="text-center p-4 bg-white rounded-lg">
                                        <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                        <div className="font-semibold">15%</div>
                                        <div className="text-sm text-gray-600">Home Value Increase</div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8" asChild>
                                        <Link href="/free-quote">
                                            Calculate Your Savings
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready for Energy Independence?</h2>
                    <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of homeowners who have secured their power with battery backup systems. Get your free
                        consultation today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                            asChild
                        >
                            <Link href="/free-quote">
                                Get Free Quote
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold bg-transparent"
                        >
                            <span className="mr-2">📞</span>
                            Call (555) 123-4567
                        </Button>
                    </div>

                    <div className="mt-8 flex items-center justify-center space-x-8 text-red-100">
                        <div className="flex items-center">
                            <Award className="w-5 h-5 mr-2" />
                            <span>Licensed & Insured</span>
                        </div>
                        <div className="flex items-center">
                            <Users className="w-5 h-5 mr-2" />
                            <span>1000+ Installations</span>
                        </div>
                        <div className="flex items-center">
                            <Star className="w-5 h-5 mr-2" />
                            <span>5-Star Rated</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
