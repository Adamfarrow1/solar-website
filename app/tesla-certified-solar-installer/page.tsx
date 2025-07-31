import { Metadata } from "next"
import TeslaSolarClient from "./client"

export const metadata: Metadata = {
    title: "Tesla Solar Panels Installation | Certified Tesla Solar Installer | Relentless Energy",
    description: "Experience Tesla solar excellence with 22.8% peak efficiency panels, 25-year warranty, and seamless Powerwall integration. Get your free Tesla solar quote today from certified installers.",
    keywords: [
        "Tesla solar panels",
        "Tesla solar installation",
        "Tesla Powerwall",
        "certified Tesla installer",
        "solar panels Florida",
        "Tesla solar efficiency",
        "solar energy system",
        "renewable energy",
        "solar financing",
        "Tesla solar warranty"
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
        canonical: "https://www.relentlessenergy.org/tesla-certified-solar-installer",
    },
    openGraph: {
        title: "Tesla Solar Panels Installation | Certified Tesla Solar Installer",
        description: "Experience Tesla solar excellence with 22.8% peak efficiency panels, 25-year warranty, and seamless Powerwall integration. Get your free Tesla solar quote today.",
        url: "https://www.relentlessenergy.org/tesla-certified-solar-installer",
        siteName: "Relentless Energy",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://www.relentlessenergy.org/images/tesla-solar-solutions.jpg",
                width: 1200,
                height: 630,
                alt: "Tesla Solar Panels Installation by Relentless Energy - Certified Tesla Installer",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tesla Solar Panels Installation | Certified Tesla Solar Installer",
        description: "Experience Tesla solar excellence with 22.8% peak efficiency panels, 25-year warranty, and seamless Powerwall integration.",
        images: ["https://www.relentlessenergy.org/images/tesla-solar-solutions.jpg"],
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
    classification: "Solar Panel Installation Services",
    referrer: "origin-when-cross-origin",
    colorScheme: "light",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ef4444" },
        { media: "(prefers-color-scheme: dark)", color: "#dc2626" },
    ],
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
    },
    other: {
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
        "apple-mobile-web-app-title": "Tesla Solar - Relentless Energy",
        "application-name": "Relentless Energy",
        "msapplication-TileColor": "#ef4444",
        "msapplication-config": "/browserconfig.xml",
        "theme-color": "#ef4444",
    },
}

export default function TeslaSolarPage() {
    return <TeslaSolarClient />
}
