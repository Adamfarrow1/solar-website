"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone, Mail, ChevronRight } from "lucide-react"
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
            { name: "Our Team", href: "/about/our-team" },
            { name: "Our Process", href: "/about/our-process" },
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
            { name: "Pinellas County", href: "/service-area/pinellas-county" },
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
    const [expandedItems, setExpandedItems] = useState<string[]>([])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
            setExpandedItems([]) // Reset expanded items when menu closes
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [mobileMenuOpen])

    const toggleExpanded = (itemName: string) => {
        setExpandedItems((prev) =>
            prev.includes(itemName) ? prev.filter((item) => item !== itemName) : [...prev, itemName],
        )
    }

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-white/90 backdrop-blur-sm"
                }`}
        >
            {/* Top bar with contact info */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 text-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-3 sm:space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone className="h-3 w-3" />
                            <span className="font-medium text-xs sm:text-sm">(386) 832-1119</span>
                        </div>
                        <div className="hidden sm:flex items-center space-x-2">
                            <Mail className="h-3 w-3" />
                            <span className="text-xs sm:text-sm">jfeliz@relentlessenergy.org</span>
                        </div>
                    </div>
                    <div className="text-xs font-medium hidden md:block">⚡ Tesla Certified Installer | Licensed & Insured</div>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 sm:h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
                            <div className="relative p-1.5 sm:p-2 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                <Image
                                    src="/images/relentless-energy-logo.png"
                                    alt="Relentless Energy Logo"
                                    width={36}
                                    height={36}
                                    className="sm:w-11 sm:h-11 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                                    Relentless Energy
                                </span>
                                <span className="text-xs text-gray-500 font-medium -mt-1 hidden sm:block">Solar Excellence</span>
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
                            className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 relative z-50"
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
                <div className="lg:hidden fixed inset-0 z-[100]">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ease-out"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Menu Panel - Full Screen Height */}
                    <div className="fixed top-0 right-0 w-full max-w-sm h-screen bg-white shadow-2xl transform transition-all duration-300 ease-out border-l border-gray-100">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50">
                            <Link href="/" className="flex items-center space-x-3 group" onClick={() => setMobileMenuOpen(false)}>
                                <div className="relative p-2 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                                    <Image src="/images/relentless-energy-logo.png" alt="Relentless Energy Logo" width={32} height={32} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                                        Relentless Energy
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium -mt-0.5">Solar Excellence</span>
                                </div>
                            </Link>
                            <button
                                type="button"
                                className="rounded-xl p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200 hover:scale-105"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Navigation Items */}
                        <div className="px-6 py-6 space-y-2 h-[calc(100vh-240px)] overflow-y-auto bg-white">
                            {navigation.map((item, index) => (
                                <div key={item.name} className="space-y-1">
                                    <div className="flex items-center">
                                        <Link
                                            href={item.href}
                                            className="flex-1 flex items-center px-4 py-4 text-base font-semibold text-gray-900 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-50/50 rounded-xl transition-all duration-300 min-h-[52px] group border border-transparent hover:border-red-100 hover:shadow-sm"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="flex-1">{item.name}</span>
                                        </Link>
                                        {item.children && (
                                            <button
                                                onClick={() => toggleExpanded(item.name)}
                                                className="ml-2 p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                                            >
                                                <ChevronRight
                                                    className={`h-4 w-4 transition-transform duration-300 ${expandedItems.includes(item.name) ? "rotate-90" : ""
                                                        }`}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {item.children && expandedItems.includes(item.name) && (
                                        <div className="ml-4 space-y-1 animate-in slide-in-from-top-2 duration-300">
                                            <div className="border-l-2 border-red-200 pl-4 space-y-1">
                                                {item.children.map((child, childIndex) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50/80 hover:to-transparent rounded-lg transition-all duration-200 min-h-[44px] flex items-center group border border-transparent hover:border-red-100/50"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        style={{
                                                            animationDelay: `${childIndex * 50}ms`,
                                                        }}
                                                    >
                                                        <span className="flex-1">{child.name}</span>
                                                        <ChevronRight className="h-3 w-3 text-gray-300 group-hover:text-red-400 transition-colors duration-200" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Subtle separator */}
                                    {index < navigation.length - 1 && (
                                        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-2" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Footer CTA - Fixed at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                            <Button
                                asChild
                                className="w-full bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:via-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl text-base min-h-[52px] transition-all duration-300 hover:scale-[1.02] border border-red-500/20"
                            >
                                <Link href="/free-quote" onClick={() => setMobileMenuOpen(false)}>
                                    <span className="flex items-center justify-center space-x-2">
                                        <span>Get Free Quote</span>
                                        <ChevronRight className="h-4 w-4" />
                                    </span>
                                </Link>
                            </Button>

                            {/* Contact info */}
                            <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                    <Phone className="h-3 w-3" />
                                    <span className="font-medium">(386) 832-1119</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
