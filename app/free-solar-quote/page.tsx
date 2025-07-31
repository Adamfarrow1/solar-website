import { Metadata, Viewport } from "next"
import FreeQuoteClient from "./client"

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
    title: "Free Solar Quote | Get Your Custom Solar Proposal Today | Relentless Energy",
    description: "Get your free solar quote from Tesla Certified installers. Custom proposals with $0 down financing, 25-year warranty, and guaranteed savings. Same-day response in Tampa Bay.",
    keywords: [
        "free solar quote",
        "solar estimate",
        "solar proposal",
        "solar cost calculator",
        "Tesla certified installer",
        "solar financing",
        "Tampa solar installer",
        "solar panels quote",
        "residential solar quote",
        "commercial solar quote",
        "solar installation cost",
        "solar savings calculator"
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
        canonical: "https://www.relentlessenergy.org/free-solar-quote",
    },
    openGraph: {
        title: "Free Solar Quote | Get Your Custom Solar Proposal Today",
        description: "Get your free solar quote from Tesla Certified installers. Custom proposals with $0 down financing, 25-year warranty, and guaranteed savings.",
        url: "https://www.relentlessenergy.org/free-solar-quote",
        siteName: "Relentless Energy",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://www.relentlessenergy.org/images/residential-solar-solutions.jpg",
                width: 1200,
                height: 630,
                alt: "Free Solar Quote - Relentless Energy Tesla Certified Solar Installer",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Solar Quote | Get Your Custom Solar Proposal Today",
        description: "Get your free solar quote from Tesla Certified installers. Custom proposals with $0 down financing, 25-year warranty, and guaranteed savings.",
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
    category: "Solar Energy",
    classification: "Solar Quote Form",
    referrer: "origin-when-cross-origin",
    other: {
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
        "apple-mobile-web-app-title": "Free Solar Quote - Relentless Energy",
        "application-name": "Relentless Energy",
        "msapplication-TileColor": "#dc2626",
        "msapplication-config": "/browserconfig.xml",
        "theme-color": "#dc2626",
    },
}

export default function FreeQuotePage() {
    return <FreeQuoteClient />
}
