import type { Metadata } from "next"
import FAQClientPage from "./FAQClientpage"

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Relentless Energy",
    description:
        "Get answers to common questions about solar panels, installation, financing, and more from Tampa Bay's premier Tesla-certified solar installer.",
    alternates: {
        canonical: "/about-us/faq",
    },
    openGraph: {
        title: "Frequently Asked Questions | Relentless Energy",
        description: "Get answers to common questions about solar panels, installation, financing, and more.",
        url: "/about-us/faq",
    },
}

export default function FAQPage() {
    return <FAQClientPage />
}
