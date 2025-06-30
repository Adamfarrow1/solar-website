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
                            Florida's premier Tesla Certified solar installation company serving the Tampa Bay area with reliable,
                            efficient solar energy solutions.
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

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-red-500">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/solutions/residential-solar-panels" className="text-gray-300 hover:text-white">
                                    Residential Solar Panels
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/commercial-solar-panels" className="text-gray-300 hover:text-white">
                                    Commercial Solar Installation
                                </Link>
                            </li>
                            <li>
                                <Link href="/tesla-solar/powerwall" className="text-gray-300 hover:text-white">
                                    Tesla Powerwall
                                </Link>
                            </li>
                            <li>
                                <Link href="/tesla-solar/solar-roof" className="text-gray-300 hover:text-white">
                                    Tesla Solar Roof
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/home-battery-backup" className="text-gray-300 hover:text-white">
                                    Battery Backup Systems
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-red-500">Service Areas</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/service-area/st-petersburg" className="text-gray-300 hover:text-white">
                                    St Petersburg Solar
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-area/clearwater" className="text-gray-300 hover:text-white">
                                    Clearwater Solar
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-area/largo" className="text-gray-300 hover:text-white">
                                    Largo Solar
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-area/palm-harbor" className="text-gray-300 hover:text-white">
                                    Palm Harbor Solar
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-area/pinellas" className="text-gray-300 hover:text-white">
                                    Pinellas County
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-red-500">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-red-500" />
                                <span className="text-gray-300">(727) 555-0123</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-red-500" />
                                <span className="text-gray-300">info@relentlessenergy.org</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-red-500 mt-1" />
                                <span className="text-gray-300">
                                    123 Solar Street
                                    <br />
                                    St Petersburg, FL 33701
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 Relentless Energy. All rights reserved. Licensed Solar Contractor #CVC123456
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
