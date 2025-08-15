"use client"

import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Calculator,
    DollarSign,
    TrendingUp,
    Zap,
    CheckCircle,
    Star,
    ArrowRight,
    Sparkles,
    Sun,
    Battery,
    Calendar,
    PiggyBank,
    Leaf,
} from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"
import { useState, useEffect } from "react"

export default function PricingEstimatorPage() {
    const [monthlyBill, setMonthlyBill] = useState("")
    const [monthlyKwh, setMonthlyKwh] = useState("")
    const [roofType, setRoofType] = useState("")
    const [shadingLevel, setShadingLevel] = useState("")
    const [offsetPercent, setOffsetPercent] = useState("90") // %
    const [apr, setApr] = useState("6.0") // %
    const [termYears, setTermYears] = useState("20")
    const [estimatedResults, setEstimatedResults] = useState<any>(null)

    // constants (tune as you like)
    const BASE_PRODUCTION_PER_KW_YEAR = 1500; // kWh per kW per year (Tampa-ish)
    const ITC = 0.30;
    const UTILITY_ESCALATION = 0.025; // 2.5%/yr
    const PANEL_DEGRADATION = 0.005;  // 0.5%/yr
    const CO2_LBS_PER_KWH = 0.7;      // lbs CO2 avoided per kWh
    const BASE_PPW = 3.25;            // $/W base price

    // price multipliers by roof
    const ROOF_MULTIPLIER: Record<string, number> = {
        asphalt: 1.00,
        metal: 1.05,
        tile: 1.20,
        flat: 1.15,
    };

    // shading production multipliers
    const SHADING_MULTIPLIER: Record<string, number> = {
        minimal: 1.00,
        moderate: 0.85,
        heavy: 0.70,
    };

    // amortized monthly payment
    function monthlyPayment(principal: number, annualRatePct: number, years: number) {
        const r = annualRatePct / 100 / 12;
        const n = years * 12;
        if (r === 0) return principal / n;
        return (principal * r) / (1 - Math.pow(1 + r, -n));
    }

    const calculateEstimate = () => {
        if (!monthlyBill || !monthlyKwh || !roofType || !shadingLevel) return;

        const bill = Math.max(0, parseFloat(monthlyBill));
        const kwhUsage = Math.max(0, parseFloat(monthlyKwh));

        // Calculate utility rate from their bill data
        const rate = bill / kwhUsage;

        // Sanity check - typical rates in Florida are $0.10-$0.20/kWh
        if (rate < 0.05 || rate > 0.50) {
            alert("Please check your monthly bill and kWh usage - the calculated rate seems unusual.");
            return;
        }

        const offset = Math.min(100, Math.max(50, parseFloat(offsetPercent) || 90)) / 100; // clamp 50–100%
        const prodPerKwYr = BASE_PRODUCTION_PER_KW_YEAR * (SHADING_MULTIPLIER[shadingLevel] ?? 1);
        const roofMult = ROOF_MULTIPLIER[roofType] ?? 1;
        const pricePerWatt = BASE_PPW * roofMult;

        // Use actual kWh consumption instead of deriving from bill
        const annualKwh = kwhUsage * 12;

        // size system to hit target offset (before deg/esc)
        const targetAnnualKwhOffset = annualKwh * offset;
        const systemKw = targetAnnualKwhOffset / prodPerKwYr;

        // cost & incentives
        const systemCost = systemKw * 1000 * pricePerWatt;
        const federalTaxCredit = systemCost * ITC;
        const netCost = systemCost - federalTaxCredit;

        // year 1 savings (match offset against current rate)
        const year1Savings = targetAnnualKwhOffset * rate;

        // payback (simple) using year1 savings (conservative—not NPV)
        const simplePaybackYears = year1Savings > 0 ? netCost / year1Savings : Infinity;

        // 20-year savings model w/ utility escalation & panel degradation
        let totalSavings20 = 0;
        for (let y = 0; y < 20; y++) {
            const rateY = rate * Math.pow(1 + UTILITY_ESCALATION, y);
            const prodY = targetAnnualKwhOffset * Math.pow(1 - PANEL_DEGRADATION, y);
            totalSavings20 += prodY * rateY;
        }
        const twentyYearSavings = totalSavings20 - netCost;

        // financing
        const payment = Math.round(
            monthlyPayment(netCost, parseFloat(apr) || 0, parseInt(termYears || "20", 10) || 20)
        );

        // CO2
        const annualCO2Reduction = targetAnnualKwhOffset * CO2_LBS_PER_KWH;

        setEstimatedResults({
            systemSize: Math.round(systemKw * 10) / 10,
            systemCost: Math.round(systemCost),
            federalTaxCredit: Math.round(federalTaxCredit),
            netCost: Math.round(netCost),
            annualSavings: Math.round(year1Savings),
            paybackPeriod: Math.round(simplePaybackYears * 10) / 10,
            twentyYearSavings: Math.round(twentyYearSavings),
            annualCO2Reduction: Math.round(annualCO2Reduction),
            monthlyPayment: payment,
            calculatedUtilityRate: Math.round(rate * 100) / 100, // round to nearest cent
        });
    }; return (
        <div className="min-h-screen bg-white pt-24 sm:pt-32">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50"></div>
                <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute top-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-500"></div>

                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto">
                        <ScrollReveal direction="fade" delay={200}>
                            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-red-100 shadow-lg mb-6">
                                <Calculator className="w-4 h-4 mr-2 text-red-600" />
                                <span className="text-sm font-semibold text-red-700">Free Solar Pricing Calculator</span>
                                <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={400}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                                Solar System{" "}
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                                        Pricing Estimator
                                    </span>
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full transform scale-x-0 animate-pulse"></div>
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={600}>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                                Get an instant estimate for your solar system cost, savings, and payback period. See how much you could save with solar energy in Tampa Bay.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Calculator Form */}
                        <ScrollReveal direction="left" delay={200}>
                            {/* Instructions Card */}
                            <Card className="mb-6 border-blue-200 bg-blue-50">
                                <CardContent className="p-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">💡</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-blue-900 mb-2">What You'll Need From Your Electric Bill:</h3>
                                            <ul className="text-sm text-blue-800 space-y-1">
                                                <li>• <strong>Total Amount Due:</strong> Your monthly bill total</li>
                                                <li>• <strong>kWh Usage:</strong> Look for "kWh used", "Energy Delivered", or "Usage"</li>
                                                <li>• We'll calculate your exact utility rate for you!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-red-50">
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-2xl text-gray-900 flex items-center">
                                        <Calculator className="w-6 h-6 mr-3 text-red-600" />
                                        Solar Calculator
                                    </CardTitle>
                                    <CardDescription className="text-lg text-gray-600">
                                        Enter your information below to get a personalized solar estimate
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="monthly-bill" className="text-base font-semibold text-gray-700">
                                            Monthly Electricity Bill ($)
                                        </Label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="monthly-bill"
                                                type="number"
                                                placeholder="200"
                                                value={monthlyBill}
                                                onChange={(e) => setMonthlyBill(e.target.value)}
                                                className="pl-10 h-12 text-lg"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Your total monthly electric bill amount
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-base font-semibold text-gray-700">
                                            Roof Type
                                        </Label>
                                        <Select value={roofType} onValueChange={setRoofType}>
                                            <SelectTrigger className="h-12 text-lg">
                                                <SelectValue placeholder="Select your roof type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="asphalt">Asphalt Shingles</SelectItem>
                                                <SelectItem value="tile">Tile</SelectItem>
                                                <SelectItem value="metal">Metal</SelectItem>
                                                <SelectItem value="flat">Flat Roof</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <p className="text-sm text-gray-500">
                                            Different roof materials affect installation costs and methods
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-base font-semibold text-gray-700">
                                            Roof Shading Level
                                        </Label>
                                        <Select value={shadingLevel} onValueChange={setShadingLevel}>
                                            <SelectTrigger className="h-12 text-lg">
                                                <SelectValue placeholder="Select shading level" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="minimal">Minimal (Full sun most of the day)</SelectItem>
                                                <SelectItem value="moderate">Moderate (Some shade during the day)</SelectItem>
                                                <SelectItem value="heavy">Heavy (Significant shade)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <p className="text-sm text-gray-500">
                                            Shading from trees, buildings, or other obstructions affects solar panel efficiency
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="monthly-kwh" className="text-base font-semibold text-gray-700">
                                            Monthly kWh Usage
                                        </Label>
                                        <div className="relative">
                                            <Zap className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="monthly-kwh"
                                                type="number"
                                                placeholder="1200"
                                                value={monthlyKwh}
                                                onChange={(e) => setMonthlyKwh(e.target.value)}
                                                className="pl-10 h-12 text-lg"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Find this on your electric bill (look for "kWh used" or "Energy Delivered")
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="offset-percent" className="text-base font-semibold text-gray-700">
                                            Solar Offset Target (%)
                                        </Label>
                                        <div className="relative">
                                            <Zap className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                            <Input
                                                id="offset-percent"
                                                type="number"
                                                min="50"
                                                max="100"
                                                placeholder="90"
                                                value={offsetPercent}
                                                onChange={(e) => setOffsetPercent(e.target.value)}
                                                className="pl-10 h-12 text-lg"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Percentage of your electric bill you want solar to cover (90% is optimal)
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="apr" className="text-base font-semibold text-gray-700">
                                                Loan APR (%)
                                            </Label>
                                            <Input
                                                id="apr"
                                                type="number"
                                                step="0.1"
                                                placeholder="6.0"
                                                value={apr}
                                                onChange={(e) => setApr(e.target.value)}
                                                className="h-12 text-lg"
                                            />
                                            <p className="text-sm text-gray-500">
                                                Interest rate for solar financing
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="term-years" className="text-base font-semibold text-gray-700">
                                                Loan Term (Years)
                                            </Label>
                                            <Input
                                                id="term-years"
                                                type="number"
                                                placeholder="20"
                                                value={termYears}
                                                onChange={(e) => setTermYears(e.target.value)}
                                                className="h-12 text-lg"
                                            />
                                            <p className="text-sm text-gray-500">
                                                Length of financing (20 years is typical)
                                            </p>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={calculateEstimate}
                                        className="w-full h-14 text-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                                    >
                                        <Calculator className="w-5 h-5 mr-2" />
                                        Calculate My Solar Savings
                                    </Button>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        {/* Results Display */}
                        <ScrollReveal direction="right" delay={400}>
                            {estimatedResults ? (
                                <div className="space-y-6">
                                    <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                                        <CardHeader>
                                            <CardTitle className="text-xl text-gray-900 flex items-center">
                                                <Sun className="w-5 h-5 mr-2 text-yellow-500" />
                                                Your Solar System Estimate
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                                    <div className="text-2xl font-bold text-red-600">{estimatedResults.systemSize} kW</div>
                                                    <div className="text-sm text-gray-600">System Size</div>
                                                </div>
                                                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                                    <div className="text-2xl font-bold text-gray-900">${estimatedResults.systemCost.toLocaleString()}</div>
                                                    <div className="text-sm text-gray-600">Total Cost</div>
                                                </div>
                                            </div>
                                            <div className="text-center p-3 bg-blue-100 rounded-lg">
                                                <div className="text-lg font-semibold text-blue-800">
                                                    Your Calculated Utility Rate: ${estimatedResults.calculatedUtilityRate}/kWh
                                                </div>
                                                <div className="text-sm text-blue-600">
                                                    Based on your monthly bill and usage
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
                                        <CardHeader>
                                            <CardTitle className="text-xl text-gray-900 flex items-center">
                                                <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                                                Financial Benefits
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                    <span className="text-gray-700">Federal Tax Credit (30%)</span>
                                                    <span className="font-bold text-green-600">-${estimatedResults.federalTaxCredit.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                    <span className="text-gray-700">Net Cost After Credits</span>
                                                    <span className="font-bold text-gray-900">${estimatedResults.netCost.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                    <span className="text-gray-700">Est. Monthly Payment</span>
                                                    <span className="font-bold text-blue-600">${estimatedResults.monthlyPayment}/mo</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                                        <CardHeader>
                                            <CardTitle className="text-xl text-gray-900 flex items-center">
                                                <TrendingUp className="w-5 h-5 mr-2 text-purple-500" />
                                                Long-term Savings
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                    <span className="text-gray-700">Annual Savings</span>
                                                    <span className="font-bold text-green-600">${estimatedResults.annualSavings.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                    <span className="text-gray-700">Payback Period</span>
                                                    <span className="font-bold text-orange-600">{estimatedResults.paybackPeriod} years</span>
                                                </div>
                                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                    <span className="text-gray-700">20-Year Savings</span>
                                                    <span className="font-bold text-green-600">${estimatedResults.twentyYearSavings.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-lime-50">
                                        <CardHeader>
                                            <CardTitle className="text-xl text-gray-900 flex items-center">
                                                <Leaf className="w-5 h-5 mr-2 text-green-500" />
                                                Environmental Impact
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-center p-4 bg-white rounded-lg">
                                                <div className="text-2xl font-bold text-green-600">{estimatedResults.annualCO2Reduction.toLocaleString()} lbs</div>
                                                <div className="text-sm text-gray-600">CO₂ Reduced Annually</div>
                                                <div className="text-xs text-gray-500 mt-1">Equivalent to planting {Math.round(estimatedResults.annualCO2Reduction / 48)} trees per year</div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button asChild size="lg" className="flex-1 bg-red-600 hover:bg-red-700">
                                            <Link href="/free-solar-quote">
                                                <ArrowRight className="w-4 h-4 mr-2" />
                                                Get Detailed Quote
                                            </Link>
                                        </Button>
                                        <Button asChild size="lg" variant="outline" className="flex-1">
                                            <Link href="tel:386-832-1119">
                                                Call (386) 832-1119
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <Card className="border-0 shadow-lg h-full flex items-center justify-center">
                                    <CardContent className="text-center py-16">
                                        <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Ready to Calculate?</h3>
                                        <p className="text-gray-500">Fill out the form on the left to see your personalized solar estimate</p>
                                    </CardContent>
                                </Card>
                            )}
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Disclaimer Section */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal>
                        <Card className="border-0 shadow-sm">
                            <CardContent className="pt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h3>
                                <div className="text-sm text-gray-600 space-y-2">
                                    <p>• This calculator provides estimates based on general assumptions and should not be considered a final quote.</p>
                                    <p>• Actual savings depend on many factors including energy usage patterns, local utility rates, roof condition, and system performance.</p>
                                    <p>• Federal tax credit percentages are subject to change. Consult a tax professional for specific advice.</p>
                                    <p>• Contact Relentless Energy for a detailed site assessment and accurate pricing.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-6xl mx-auto text-center">
                    <ScrollReveal direction="up" delay={200}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Detailed Assessment?</h2>
                        <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                            Get a precise quote with our Tesla-certified team. We'll provide a detailed site assessment and customized solar solution for your home.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={400}>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                asChild
                            >
                                <Link href="/free-solar-quote">
                                    <Sun className="w-6 h-6 mr-3" />
                                    Get Professional Quote
                                    <ArrowRight className="w-6 h-6 ml-3" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-10 py-4 rounded-2xl bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                                asChild
                            >
                                <Link href="/solar-power-electricity-savings">
                                    View All Incentives
                                </Link>
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
