"use client"

import { useEffect, useRef, useState } from "react"

interface CountUpProps {
    end: number
    duration?: number
    prefix?: string
    suffix?: string
    className?: string
}

function CountUp({ end, duration = 2000, prefix = "", suffix = "", className = "" }: CountUpProps) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const countRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.5 },
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => observer.disconnect()
    }, [isVisible])

    useEffect(() => {
        if (!isVisible) return

        let startTime: number
        let animationFrame: number

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            // Improved easing function for smoother animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3)

            // Calculate the current count with better precision
            const currentCount = easeOutCubic * end

            // Use Math.round instead of Math.floor for smoother transitions
            setCount(Math.round(currentCount))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            } else {
                // Ensure we end exactly at the target number
                setCount(end)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame)
            }
        }
    }, [isVisible, end, duration])

    return (
        <div ref={countRef} className={className}>
            {prefix}
            {count.toLocaleString()}
            {suffix}
        </div>
    )
}

export default function CountUpStats() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2 hover:scale-105 transition-transform duration-300">
                        <CountUp
                            end={10000}
                            suffix="+"
                            className="text-4xl font-bold text-red-600 hover:text-red-700 transition-colors"
                        />
                        <div className="text-gray-600">Homes Powered</div>
                    </div>
                    <div className="space-y-2 hover:scale-105 transition-transform duration-300">
                        <CountUp
                            prefix="$"
                            end={2400}
                            className="text-4xl font-bold text-red-600 hover:text-red-700 transition-colors"
                        />
                        <div className="text-gray-600">Average Annual Savings</div>
                    </div>
                    <div className="space-y-2 hover:scale-105 transition-transform duration-300">
                        <CountUp end={25} className="text-4xl font-bold text-red-600 hover:text-red-700 transition-colors" />
                        <div className="text-gray-600">Year Warranty</div>
                    </div>
                    <div className="space-y-2 hover:scale-105 transition-transform duration-300">
                        <CountUp
                            end={100}
                            suffix="%"
                            className="text-4xl font-bold text-red-600 hover:text-red-700 transition-colors"
                        />
                        <div className="text-gray-600">Customer Satisfaction</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
