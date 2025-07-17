export interface ServiceArea {
    slug: string
    name: string
    fullName: string
    title: string
    metaDescription: string
    keywords: string[]
    description: string
    heroImage: string
    population: string
    averageSunHours: string
    solarPotential: string
    neighborhoods: string[]
    landmarks: string[]
    solarIncentives: string[]
    averageElectricBill: string
    averageSolarSavings: string
    paybackPeriod: string
    coordinates: {
        latitude: number
        longitude: number
    }
    zipCodes: string[]
    testimonials: AreaTestimonial[]
    projects: AreaProject[]
    localUtility: string
    netMeteringRate: string
    permittingInfo: string
}

export interface AreaTestimonial {
    name: string
    neighborhood: string
    text: string
    rating: number
    systemSize: string
    installDate: string
}

export interface AreaProject {
    type: string
    size: string
    location: string
    savings: string
}

export interface ServiceAreasData {
    serviceAreas: ServiceArea[]
}

export interface ServiceAreaStructuredData {
    "@context": string
    "@type": string
    name: string
    description: string
    geo: {
        "@type": string
        latitude: number
        longitude: number
    }
    address: {
        "@type": string
        addressLocality: string
        addressRegion: string
        addressCountry: string
    }
    serviceArea: {
        "@type": string
        name: string
    }
    provider: {
        "@type": string
        name: string
        url: string
        telephone: string
    }
}
