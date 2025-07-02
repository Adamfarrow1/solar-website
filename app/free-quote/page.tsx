import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
    title: "Get Your Free Solar Quote | No Obligation Solar Estimate Florida",
    description:
        "Get a free, no-obligation solar quote for your Florida home. Custom solar panel system design, financing options, and savings analysis. Tesla Certified installer serving Tampa Bay.",
    keywords:
        "free solar quote Florida, solar estimate Tampa Bay, solar panel cost calculator, residential solar quote St Petersburg, solar financing options",
}

export default function FreeQuotePage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-[140px] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Get Your Free Solar Quote</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover how much you can save with solar energy. Our Tesla Certified experts will design a custom solar
                        solution for your Florida home with no obligation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Quote Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Solar Savings Calculator</CardTitle>
                                <CardDescription>
                                    Fill out the form below to receive your personalized solar quote and savings analysis.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name *</Label>
                                            <Input id="firstName" placeholder="Enter your first name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name *</Label>
                                            <Input id="lastName" placeholder="Enter your last name" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input id="email" type="email" placeholder="your@email.com" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number *</Label>
                                            <Input id="phone" type="tel" placeholder="(727) 555-0123" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="address">Home Address *</Label>
                                        <Input id="address" placeholder="123 Main Street, St Petersburg, FL 33701" required />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="electricBill">Monthly Electric Bill</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select your average bill" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="under-100">Under $100</SelectItem>
                                                    <SelectItem value="100-150">$100 - $150</SelectItem>
                                                    <SelectItem value="150-200">$150 - $200</SelectItem>
                                                    <SelectItem value="200-300">$200 - $300</SelectItem>
                                                    <SelectItem value="over-300">Over $300</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="homeType">Home Type</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select your home type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="single-family">Single Family Home</SelectItem>
                                                    <SelectItem value="townhouse">Townhouse</SelectItem>
                                                    <SelectItem value="condo">Condominium</SelectItem>
                                                    <SelectItem value="mobile">Mobile Home</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="roofCondition">Roof Condition</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="How would you describe your roof?" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="excellent">Excellent (New or recently replaced)</SelectItem>
                                                <SelectItem value="good">Good (5-10 years old)</SelectItem>
                                                <SelectItem value="fair">Fair (10-20 years old)</SelectItem>
                                                <SelectItem value="needs-repair">Needs repair or replacement</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="timeline">Installation Timeline</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="When would you like to install solar?" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="asap">As soon as possible</SelectItem>
                                                <SelectItem value="1-3-months">1-3 months</SelectItem>
                                                <SelectItem value="3-6-months">3-6 months</SelectItem>
                                                <SelectItem value="6-12-months">6-12 months</SelectItem>
                                                <SelectItem value="just-researching">Just researching</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="comments">Additional Comments</Label>
                                        <Textarea
                                            id="comments"
                                            placeholder="Tell us about any specific requirements or questions you have..."
                                            rows={4}
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700">
                                        Get My Free Solar Quote
                                    </Button>

                                    <p className="text-sm text-gray-600 text-center">
                                        By submitting this form, you agree to receive communications from Relentless Energy. We respect your
                                        privacy and will never share your information.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Benefits & Contact */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>What You'll Receive</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Custom System Design</h4>
                                        <p className="text-sm text-gray-600">Tailored solar solution for your home's energy needs</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Savings Analysis</h4>
                                        <p className="text-sm text-gray-600">Detailed breakdown of your potential savings</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Financing Options</h4>
                                        <p className="text-sm text-gray-600">$0 down and flexible payment plans available</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Incentive Information</h4>
                                        <p className="text-sm text-gray-600">Federal tax credits and local rebates explained</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Prefer to Talk?</CardTitle>
                                <CardDescription>Speak directly with one of our solar experts</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-red-600" />
                                    <div>
                                        <p className="font-semibold">(727) 555-0123</p>
                                        <p className="text-sm text-gray-600">Mon-Fri 8AM-6PM</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-red-600" />
                                    <div>
                                        <p className="font-semibold">info@relentlessenergy.org</p>
                                        <p className="text-sm text-gray-600">Email us anytime</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 text-red-600 mt-1" />
                                    <div>
                                        <p className="font-semibold">123 Solar Street</p>
                                        <p className="text-sm text-gray-600">St Petersburg, FL 33701</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
