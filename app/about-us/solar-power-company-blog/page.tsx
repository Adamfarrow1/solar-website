import { Suspense } from "react"
import type { Metadata } from "next"
import BlogCard from "@/components/blog-card"
import BlogPagination from "@/components/blog-pagination"
import { Skeleton } from "@/components/ui/skeleton"
import { getPosts } from "@/lib/wordpress"
import type { BlogPageProps } from "@/types/wordpress"

export const metadata: Metadata = {
    title: "Solar Energy Blog | Latest News & Insights - Relentless Energy",
    description:
        "Stay updated with the latest solar energy news, tips, and insights from Florida's premier Tesla Certified solar installer. Learn about solar panels, battery storage, and renewable energy solutions.",
    keywords:
        "solar energy blog, solar panels, renewable energy, Tesla solar, Florida solar installation, solar news, battery storage, solar incentives",
    openGraph: {
        title: "Solar Energy Blog | Latest News & Insights - Relentless Energy",
        description:
            "Stay updated with the latest solar energy news, tips, and insights from Florida's premier Tesla Certified solar installer.",
        url: "https://www.relentlessenergy.org/about-us/solar-power-company-blog",
        siteName: "Relentless Energy",
        type: "website",
        images: [
            {
                url: "/images/blog-og.jpg",
                width: 1200,
                height: 630,
                alt: "Relentless Energy Solar Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Solar Energy Blog | Latest News & Insights - Relentless Energy",
        description:
            "Stay updated with the latest solar energy news, tips, and insights from Florida's premier Tesla Certified solar installer.",
        images: ["/images/blog-og.jpg"],
    },
    alternates: {
        canonical: "https://www.relentlessenergy.org/about-us/solar-power-company-blog",
        types: {
            "application/rss+xml": [
                {
                    url: "/about-us/solar-power-company-blog/rss.xml",
                    title: "Relentless Energy Blog RSS Feed",
                },
            ],
        },
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

function BlogSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <Skeleton className="aspect-video w-full" />
                    <div className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                        <Skeleton className="h-6 w-full mb-3" />
                        <Skeleton className="h-6 w-3/4 mb-4" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

async function BlogContent({ searchParams }: BlogPageProps) {
    const resolvedSearchParams = await searchParams
    const page = Number.parseInt(resolvedSearchParams.page || "1", 10)
    const { data: posts, totalPages, totalPosts } = await getPosts(page, 9)

    if (posts.length === 0) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">No posts found</h2>
                <p className="text-gray-600">Check back later for new content!</p>
            </div>
        )
    }

    return (
        <>
            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>

            {/* Pagination */}
            <BlogPagination currentPage={page} totalPages={totalPages} />

            {/* Results Info */}
            <div className="text-center text-gray-600 mt-8">
                Showing {(page - 1) * 9 + 1} - {Math.min(page * 9, totalPosts)} of {totalPosts} posts
            </div>
        </>
    )
}

// ISR: Generate static pages for first few pages at build time
export async function generateStaticParams() {
    try {
        const { totalPages } = await getPosts(1, 9)
        const pages = []

        // Generate first 5 pages statically
        for (let i = 1; i <= Math.min(5, totalPages); i++) {
            pages.push({ page: i.toString() })
        }

        return pages
    } catch (error) {
        console.error("Error generating static params for blog:", error)
        return [{ page: "1" }]
    }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
    return (
        <div className="min-h-screen bg-gray-50 pt-32">
            {/* Hero Section - Matching your website's red theme */}
            <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Solar Energy Blog</h1>
                        <p className="text-xl md:text-2xl text-red-100 mb-8">
                            Stay informed with the latest solar energy news, tips, and insights from industry experts
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <span className="bg-red-500 bg-opacity-50 px-4 py-2 rounded-full">Solar Panels</span>
                            <span className="bg-red-500 bg-opacity-50 px-4 py-2 rounded-full">Battery Storage</span>
                            <span className="bg-red-500 bg-opacity-50 px-4 py-2 rounded-full">Energy Efficiency</span>
                            <span className="bg-red-500 bg-opacity-50 px-4 py-2 rounded-full">Sustainability</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <Suspense fallback={<BlogSkeleton />}>
                        <BlogContent searchParams={searchParams} />
                    </Suspense>
                </div>
            </section>

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        name: "Relentless Energy Solar Blog",
                        description:
                            "Expert solar energy news, tips, and insights from Florida's premier Tesla Certified installer",
                        url: "https://www.relentlessenergy.org/about-us/solar-power-company-blog",
                        publisher: {
                            "@type": "Organization",
                            name: "Relentless Energy",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://www.relentlessenergy.org/logo.png",
                            },
                        },
                    }),
                }}
            />
        </div>
    )
}
