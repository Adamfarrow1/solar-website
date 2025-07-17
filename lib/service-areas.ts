import serviceAreasData from "@/data/service-areas.json"
import type { ServiceArea, ServiceAreasData, ServiceAreaStructuredData } from "@/types/service-areas"

export function getAllServiceAreas(): ServiceArea[] {
    const data = serviceAreasData as ServiceAreasData
    return data.serviceAreas
}

export function getServiceAreaBySlug(slug: string): ServiceArea | null {
    const serviceAreas = getAllServiceAreas()
    return serviceAreas.find((area) => area.slug === slug) || null
}

export function getServiceAreaSlugs(): string[] {
    const serviceAreas = getAllServiceAreas()
    return serviceAreas.map((area) => area.slug)
}

export function getRelatedServiceAreas(currentSlug: string, limit = 3): ServiceArea[] {
    const serviceAreas = getAllServiceAreas()
    return serviceAreas.filter((area) => area.slug !== currentSlug).slice(0, limit)
}

export function generateServiceAreaStructuredData(area: ServiceArea): ServiceAreaStructuredData {
    return {
        "@context": "https://schema.org",
        "@type": "Place",
        name: area.fullName,
        description: area.description,
        geo: {
            "@type": "GeoCoordinates",
            latitude: area.coordinates.latitude,
            longitude: area.coordinates.longitude,
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: area.name,
            addressRegion: "Florida",
            addressCountry: "US",
        },
        serviceArea: {
            "@type": "GeoCircle",
            name: area.fullName,
        },
        provider: {
            "@type": "LocalBusiness",
            name: "Relentless Energy",
            url: "https://relentlessenergy.org",
            telephone: "(727) 555-0123",
        },
    }
}
