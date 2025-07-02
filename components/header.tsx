"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import Image from "next/image"

const navigation = [
    { name: "Home", href: "/" },
    {
        name: "Solutions",
        href: "/solutions",
        children: [
            { name: "Residential Solar", href: "/solutions/residential-solar-panels" },
            { name: "Commercial Solar", href: "/solutions/commercial-solar-panels" },
            { name: "Solar Pergola", href: "/solutions/solar-pergola" },
            { name: "Battery Backup", href: "/solutions/home-battery-backup" },
        ],
    },
    {
        name: "Tesla Solar",
        href: "/tesla-solar",
        children: [
            { name: "Certified Installer", href: "/tesla-solar/certified-installer" },
            { name: "Solar Roof", href: "/tesla-solar/solar-roof" },
            { name: "Powerwall", href: "/tesla-solar/powerwall" },
        ],
    },
    {
        name: "Incentives",
        href: "/solar-incentives",
        children: [
            { name: "Electricity Savings", href: "/solar-incentives/electricity-savings" },
            { name: "Federal Tax Credits", href: "/solar-incentives/federal-tax-credits" },
            { name: "Net Metering", href: "/solar-incentives/net-metering" },
            { name: "Solar Financing", href: "/solar-incentives/solar-financing" },
        ],
    },
    {
        name: "About",
        href: "/about",
        children: [
            { name: "Our Team", href: "/about/team" },
            { name: "Our Process", href: "/about/process" },
            { name: "Guarantee", href: "/about/guarantee" },
            { name: "Testimonials", href: "/about/testimonials" },
            { name: "FAQ", href: "/about/faq" },
            { name: "Blog", href: "/blog" },
        ],
    },
    {
        name: "Service Areas",
        href: "/service-area",
        children: [
            { name: "Pinellas County", href: "/service-area/pinellas" },
            { name: "St Petersburg", href: "/service-area/st-petersburg" },
            { name: "Clearwater", href: "/service-area/clearwater" },
            { name: "Largo", href: "/service-area/largo" },
            { name: "Palm Harbor", href: "/service-area/palm-harbor" },
        ],
    },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-white/90 backdrop-blur-sm"
                }`}
        >
            {/* Top bar with contact info */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 text-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone className="h-3 w-3" />
                            <span className="font-medium">(727) 555-0123</span>
                        </div>
                        <div className="hidden sm:flex items-center space-x-2">
                            <Mail className="h-3 w-3" />
                            <span>info@relentlessenergy.org</span>
                        </div>
                    </div>
                    <div className="text-xs font-medium">⚡ Tesla Certified Installer | Licensed & Insured</div>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative p-2 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                <Image
                                    src="/images/relentless-energy-logo.png"
                                    alt="Relentless Energy Logo"
                                    width={44}
                                    height={44}
                                    className="transition-transform duration-300"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                                    Relentless Energy
                                </span>
                                <span className="text-xs text-gray-500 font-medium -mt-1">Solar Excellence</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-1">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className="flex items-center px-4 py-2 text-sm font-semibold text-gray-700 hover:text-red-600 transition-all duration-200 rounded-lg hover:bg-red-50 group"
                                >
                                    {item.name}
                                    {item.children && (
                                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.children && (
                                    <div className="absolute left-0 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 backdrop-blur-sm">
                                            <div className="px-4 py-2 border-b border-gray-100">
                                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                    {item.name}
                                                </span>
                                            </div>
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 border-l-2 border-transparent hover:border-red-500"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        <Button
                            asChild
                            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <Link href="/free-quote">Get Free Quote</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50">
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                    <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <Link href="/" className="flex items-center space-x-3">
                                <div className="relative p-1.5 rounded-lg bg-white shadow-md">
                                    <Image src="/images/relentless-energy-logo.png" alt="Relentless Energy Logo" width={32} height={32} />
                                </div>
                                <span className="text-xl font-bold text-gray-900">Relentless Energy</span>
                            </Link>
                            <button
                                type="button"
                                className="rounded-lg p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="px-6 py-4 space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                            {navigation.map((item) => (
                                <div key={item.name} className="space-y-1">
                                    <Link
                                        href={item.href}
                                        className="block px-4 py-3 text-base font-semibold text-gray-900 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.children && (
                                        <div className="ml-4 space-y-1">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50">
                            <Button
                                asChild
                                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-xl shadow-lg"
                            >
                                <Link href="/free-quote" onClick={() => setMobileMenuOpen(false)}>
                                    Get Free Quote
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
