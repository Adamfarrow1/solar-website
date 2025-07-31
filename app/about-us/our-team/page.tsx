import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ScrollReveal from "@/components/scroll-reveal"
import CountUpStats from "@/components/count-up-stats"
import { Sparkles, Users, Award, Shield, Star, Phone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Our Team - Expert Solar Professionals | Relentless Energy",
    description:
        "Meet the dedicated team of solar experts at Relentless Energy. From certified installers to customer support, we're committed to your solar success.",
    alternates: {
        canonical: "/about-us/our-team",
    },
    openGraph: {
        title: "Our Team - Expert Solar Professionals | Relentless Energy",
        description: "Meet the dedicated team of solar experts at Relentless Energy.",
        url: "/about-us/our-team",
    },
}

export default function OurTeamPage() {
    const founders = [
        {
            name: "Michael Johnson",
            role: "Co-Founder & CEO",
            bio: "With over 15 years in renewable energy, Michael leads our vision of making solar accessible to every Florida family. Tesla-certified master installer with 2,000+ successful installations.",
            certifications: ["Tesla Certified Installer", "NABCEP Certified", "Master Electrician"],
            initials: "MJ",
        },
        {
            name: "David Thompson",
            role: "Co-Founder & CTO",
            bio: "David brings 12 years of electrical engineering expertise to every project. Specializes in complex commercial installations and cutting-edge battery storage solutions.",
            certifications: ["Licensed Electrical Engineer", "Tesla Powerwall Certified", "Commercial Solar Specialist"],
            initials: "DT",
        },
    ]

    const teamMembers = [
        {
            name: "Sarah Martinez",
            role: "Lead Installation Manager",
            department: "Installation Team",
            experience: "8 years",
            specialty: "Residential Solar Systems",
            initials: "SM",
        },
        {
            name: "James Wilson",
            role: "Senior Electrician",
            department: "Installation Team",
            experience: "10 years",
            specialty: "Electrical Integration",
            initials: "JW",
        },
        {
            name: "Lisa Chen",
            role: "Customer Success Manager",
            department: "Customer Service",
            experience: "6 years",
            specialty: "Project Coordination",
            initials: "LC",
        },
        {
            name: "Robert Garcia",
            role: "Solar Design Engineer",
            department: "Design Team",
            experience: "7 years",
            specialty: "System Optimization",
            initials: "RG",
        },
        {
            name: "Amanda Foster",
            role: "Permitting Specialist",
            department: "Operations",
            experience: "5 years",
            specialty: "Regulatory Compliance",
            initials: "AF",
        },
        {
            name: "Carlos Rodriguez",
            role: "Quality Assurance Lead",
            department: "Installation Team",
            experience: "9 years",
            specialty: "Safety & Standards",
            initials: "CR",
        },
    ]

    const departments = [
        {
            name: "Installation Team",
            description: "Our certified installers ensure every system is installed to perfection",
            icon: Users,
            teamSize: 12,
        },
        {
            name: "Design Team",
            description: "Engineers who optimize every system for maximum efficiency",
            icon: Award,
            teamSize: 4,
        },
        {
            name: "Customer Service",
            description: "Dedicated support from consultation through post-installation",
            icon: Shield,
            teamSize: 6,
        },
        {
            name: "Operations",
            description: "Handling permits, inspections, and project management",
            icon: Star,
            teamSize: 5,
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
                                Meet Our Solar Experts
                            </Badge>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                The Team Behind Your{" "}
                                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                                    Solar Success
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl">
                                Meet the dedicated professionals who make your solar dreams a reality. From certified installers to
                                customer success specialists, every team member is committed to excellence.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                                    <Link href="/free-solar-quote">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Get Free Quote
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

            {/* Founders Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Meet Our Founders</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Founded by two passionate solar experts who saw the need for honest, reliable solar installation in
                                Tampa Bay.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {founders.map((founder, index) => (
                            <ScrollReveal key={founder.name} delay={index * 0.1}>
                                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-8 text-center">
                                        <div className="w-32 h-32 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-600 mx-auto mb-6">
                                            {founder.initials}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                                        <p className="text-red-600 font-medium mb-4">{founder.role}</p>
                                        <p className="text-gray-600 mb-6">{founder.bio}</p>
                                        <div className="space-y-2">
                                            {founder.certifications.map((cert) => (
                                                <Badge key={cert} variant="secondary" className="mr-2 mb-2">
                                                    {cert}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Departments */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Departments</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Each department plays a crucial role in delivering exceptional solar solutions.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {departments.map((dept, index) => (
                            <ScrollReveal key={dept.name} delay={index * 0.1}>
                                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                                            <dept.icon className="h-8 w-8 text-red-600" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.name}</h3>
                                        <p className="text-gray-600 mb-4">{dept.description}</p>
                                        <Badge variant="outline" className="border-red-200 text-red-700">
                                            {dept.teamSize} Team Members
                                        </Badge>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Key Team Members</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                The professionals who make your solar installation seamless and successful.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <ScrollReveal key={member.name} delay={index * 0.1}>
                                <Card className="hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-lg font-bold text-red-600 mx-auto mb-4">
                                            {member.initials}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                                        <p className="text-red-600 font-medium mb-2">{member.role}</p>
                                        <div className="space-y-1 text-sm text-gray-600">
                                            <p>
                                                <span className="font-medium">Department:</span> {member.department}
                                            </p>
                                            <p>
                                                <span className="font-medium">Experience:</span> {member.experience}
                                            </p>
                                            <p>
                                                <span className="font-medium">Specialty:</span> {member.specialty}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-red-600">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Ready to Work with Our Team?</h2>
                            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                                Experience the difference that comes from working with Tampa Bay's most dedicated solar professionals.
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
                                    <Link href="/about-us/testimonials">Read Customer Reviews</Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
