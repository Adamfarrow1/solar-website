import Link from "next/link"
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-red-500">Relentless Energy</h3>
                        <p className="text-gray-300">
                            Florida&apos;s premier Tesla Certified solar installation company serving the Tampa Bay area with
                            reliable, efficient solar energy solutions.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-red-400">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-red-400">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-red-400">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Solutions & Tesla Solar */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-red-500">Solutions</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/solutions/residential-solar-panels" className="text-gray-300 hover:text-white">
                                    Residential Solar Panels
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/commercial-solar-panels" className="text-gray-300 hover:text-white">
                                    Commercial Solar Panels
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/solar-pergola" className="text-gray-300 hover:text-white">
                                    Solar Pergola
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/home-battery-backup" className="text-gray-300 hover:text-white">
                                    Battery Backup
                                </Link>
                            </li>
                        </ul>
                        <h4 className="text-md font-semibold text-red-400 mt-6">Tesla Solar</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/tesla-solar/certified-installer" className="text-gray-300 hover:text-white">
                                    Certified Installer
                                </Link>
                            </li>
                            <li>
                                <Link href="/tesla-solar/solar-roof" className="text-gray-300 hover:text-white">
                                    Solar Roof
                                </Link>
                            </li>
                            <li>
                                <Link href="/tesla-solar/powerwall" className="text-gray-300 hover:text-white">
                                    Powerwall
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Incentives & About */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-red-500">Incentives</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/solar-incentives/electricity-savings" className="text-gray-300 hover:text-white">
                                    Electricity Savings
                                </Link>
                            </li>
                            <li>
                                <Link href="/solar-incentives/federal-tax-credits" className="text-gray-300 hover:text-white">
                                    Federal Tax Credits
                                </Link>
                            </li>
                            <li>
                                <Link href="/solar-incentives/net-metering" className="text-gray-300 hover:text-white">
                                    Net Metering
                                </Link>
                            </li>
                            <li>
                                <Link href="/solar-incentives/solar-financing" className="text-gray-300 hover:text-white">
                                    Solar Financing
                                </Link>
                            </li>
                        </ul>
                        <h4 className="text-md font-semibold text-red-400 mt-6">About</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about/our-team" className="text-gray-300 hover:text-white">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/testimonials" className="text-gray-300 hover:text-white">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-300 hover:text-white">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Service Areas & Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-red-500">Service Areas</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/service-area/pinellas-county" className="text-gray-300 hover:text-white">
                                    Pinellas County
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-area/st-petersburg" className="text-gray-300 hover:text-white">
                                    St Petersburg
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-area/clearwater" className="text-gray-300 hover:text-white">
                                    Clearwater
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-area/largo" className="text-gray-300 hover:text-white">
                                    Largo
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-area/palm-harbor" className="text-gray-300 hover:text-white">
                                    Palm Harbor
                                </Link>
                            </li>
                        </ul>

                        {/* Contact Info */}
                        <div className="mt-6">
                            <h4 className="text-md font-semibold text-red-400 mb-3">Contact Us</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-4 w-4 text-red-500" />
                                    <span className="text-gray-300 text-sm">(727) 555-0123</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-4 w-4 text-red-500" />
                                    <span className="text-gray-300 text-sm">info@relentlessenergy.org</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-4 w-4 text-red-500 mt-1" />
                                    <span className="text-gray-300 text-sm">
                                        123 Solar Street
                                        <br />
                                        St Petersburg, FL 33701
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 Relentless Energy. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                                Terms of Service
                            </Link>
                            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
