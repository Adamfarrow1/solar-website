import { Metadata, Viewport } from "next"
import CareersClient from "./client"

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    colorScheme: "light",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#dc2626" },
        { media: "(prefers-color-scheme: dark)", color: "#b91c1c" },
    ],
}

export const metadata: Metadata = {
    title: "Careers | Join the Relentless Energy Team | Solar Installation Jobs",
    description: "Join Florida's premier Tesla Certified solar installation company. We're hiring closers, deal facilitators, sales professionals, and interns. Build your career in renewable energy.",
    keywords: [
        "solar jobs",
        "solar careers",
        "Tesla certified installer jobs",
        "solar sales jobs",
        "renewable energy careers",
        "Tampa solar jobs",
        "solar installer careers",
        "energy sales jobs",
        "solar internships",
        "Florida solar jobs",
        "deal facilitator jobs",
        "closer jobs"
    ],
    authors: [{ name: "Relentless Energy" }],
    creator: "Relentless Energy",
    publisher: "Relentless Energy",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://www.relentlessenergy.org"),
    alternates: {
        canonical: "https://www.relentlessenergy.org/about-us/careers",
    },
    openGraph: {
        title: "Careers | Join the Relentless Energy Team",
        description: "Join Florida's premier Tesla Certified solar installation company. We're hiring closers, deal facilitators, sales professionals, and interns.",
        url: "https://www.relentlessenergy.org/about-us/careers",
        siteName: "Relentless Energy",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://www.relentlessenergy.org/images/residential-solar-solutions.jpg",
                width: 1200,
                height: 630,
                alt: "Careers at Relentless Energy - Tesla Certified Solar Installer",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers | Join the Relentless Energy Team",
        description: "Join Florida's premier Tesla Certified solar installation company. We're hiring closers, deal facilitators, sales professionals, and interns.",
        images: ["https://www.relentlessenergy.org/images/residential-solar-solutions.jpg"],
        creator: "@RelentlessEnergy",
        site: "@RelentlessEnergy",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "Careers",
    classification: "Job Opportunities",
    referrer: "origin-when-cross-origin",
    other: {
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
        "apple-mobile-web-app-title": "Careers - Relentless Energy",
        "application-name": "Relentless Energy",
        "msapplication-TileColor": "#dc2626",
        "msapplication-config": "/browserconfig.xml",
        "theme-color": "#dc2626",
    },
}

export default function CareersPage() {
    return <CareersClient />
}
