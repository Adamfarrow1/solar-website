import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Relentless Energy - Premier Solar Installation in Tampa Bay, Florida",
    template: "%s | Relentless Energy - Solar Installation Florida",
  },
  description:
    "Leading solar panel installation company in Tampa Bay, Florida. Tesla Certified installer offering residential & commercial solar solutions, Powerwall batteries, and solar financing options.",
  keywords:
    "solar panels Florida, solar installation Tampa Bay, Tesla solar installer, solar energy St Petersburg, residential solar panels, commercial solar installation, solar financing Florida",
  authors: [{ name: "Relentless Energy" }],
  creator: "Relentless Energy",
  publisher: "Relentless Energy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://relentlessenergy.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://relentlessenergy.org",
    title: "Relentless Energy - Premier Solar Installation in Tampa Bay, Florida",
    description:
      "Leading solar panel installation company in Tampa Bay, Florida. Tesla Certified installer offering residential & commercial solar solutions.",
    siteName: "Relentless Energy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relentless Energy - Premier Solar Installation in Tampa Bay, Florida",
    description:
      "Leading solar panel installation company in Tampa Bay, Florida. Tesla Certified installer offering residential & commercial solar solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
