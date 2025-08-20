import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import { getPostBySlug, getPosts } from "@/lib/wordpress"
import {
    getFeaturedImage,
    getAuthor,
    getPostCategories,
    getPostTags,
    formatDate,
    getReadingTime,
    stripHtml,
    generatePostStructuredData,
} from "@/lib/wordpress"
import type { BlogPostPageProps, WordPressPost } from "@/types/wordpress"

interface GenerateMetadataProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return {
            title: "Post Not Found",
            description: "The requested blog post could not be found.",
        }
    }

    const featuredImage = getFeaturedImage(post)
    const author = getAuthor(post)
    const tags = getPostTags(post)
    // Use Yoast SEO data if available
    const yoastData = post.yoast_head_json
    return {
        title: yoastData?.title || stripHtml(post.title.rendered),
        description: yoastData?.description || stripHtml(post.excerpt.rendered).substring(0, 160),
        keywords: yoastData?.schema?.["@graph"]?.[0]?.keywords
            || tags.map((tag: any) => tag.name).join(", ")
            || undefined,

        authors: author ? [{ name: author.name, url: author.url }] : undefined,
        openGraph: {
            title: yoastData?.og_title || stripHtml(post.title.rendered),
            description: yoastData?.og_description || stripHtml(post.excerpt.rendered).substring(0, 160),
            type: "article",
            url: yoastData?.canonical || `https://www.relentlessenergy.org/about-us/solar-power-company-blog/${post.slug}`,
            siteName: yoastData?.og_site_name || "Relentless Energy",
            publishedTime: yoastData?.article_published_time || post.date,
            modifiedTime: yoastData?.article_modified_time || post.modified,
            images: featuredImage
                ? [
                    {
                        url: featuredImage.url,
                        width: featuredImage.width,
                        height: featuredImage.height,
                        alt: featuredImage.alt,
                    },
                ]
                : [],
        },
        twitter: {
            card: (yoastData?.twitter_card as "summary_large_image" | "summary") || "summary_large_image",
            creator: yoastData?.twitter_creator || undefined,
            site: yoastData?.twitter_site || undefined,
            images: featuredImage ? [featuredImage.url] : [],
        },
        alternates: {
            canonical: yoastData?.canonical || `https://www.relentlessenergy.org/about-us/solar-power-company-blog/${post.slug}`,
        },
        robots: {
            index: true,
            follow: true,
        },
    }
}

// Generate static params for popular posts
export async function generateStaticParams() {
    try {
        const { data: posts } = await getPosts(1, 20)
        return posts.map((post) => ({
            slug: post.slug,
        }))
    } catch (error) {
        console.error("Error generating static params for blog posts:", error)
        return []
    }
}

interface RelatedPostsProps {
    currentPost: WordPressPost
}

async function RelatedPosts({ currentPost }: RelatedPostsProps) {
    const { data: posts } = await getPosts(1, 6)
    const relatedPosts = posts.filter((post) => post.id !== currentPost.id).slice(0, 3)

    if (relatedPosts.length === 0) return null

    return (
        <section className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((post) => {
                    const featuredImage = getFeaturedImage(post)
                    const readingTime = getReadingTime(post.content.rendered)

                    return (
                        <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                            <Link href={`/about-us/solar-power-company-blog/${post.slug}`}>
                                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                                    {featuredImage ? (
                                        <Image
                                            src={featuredImage.url || "/placeholder.svg"}
                                            alt={featuredImage.alt}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                                            <div className="text-red-600 text-2xl font-bold">{stripHtml(post.title.rendered).charAt(0)}</div>
                                        </div>
                                    )}
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 mb-2">
                                        {stripHtml(post.title.rendered)}
                                    </h3>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        <span className="mr-3">{formatDate(post.date)}</span>
                                        <Clock className="h-3 w-3 mr-1" />
                                        <span>{readingTime} min read</span>
                                    </div>
                                </CardContent>
                            </Link>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const featuredImage = getFeaturedImage(post)
    const author = getAuthor(post)
    const categories = getPostCategories(post)
    const tags = getPostTags(post)
    const readingTime = getReadingTime(post.content.rendered)

    return (
        <div className="min-h-screen bg-gray-50 pt-32">
            <article className="container mx-auto px-4 py-8">
                {/* Back to Blog */}
                <div className="mb-8">
                    <Link href="/about-us/solar-power-company-blog">
                        <Button variant="outline" className="hover:bg-red-50 hover:text-red-600 bg-transparent">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>

                {/* Article Header */}
                <header className="mb-8">
                    {/* Categories */}
                    {categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {categories.map((category: any) => (
                                <Badge key={category.id} className="bg-red-600 hover:bg-red-700">
                                    {category.name}
                                </Badge>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h1
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                        {author && (
                            <div className="flex items-center space-x-2">
                                <User className="h-4 w-4" />
                                <span>{author.name}</span>
                            </div>
                        )}
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <time dateTime={post.date}>{formatDate(post.date)}</time>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{readingTime} minute read</span>
                        </div>
                        <Button variant="outline" size="sm" className="hover:bg-red-50 hover:text-red-600 bg-transparent">
                            <Share2 className="h-4 w-4 mr-1" />
                            Share
                        </Button>
                    </div>
                </header>

                {/* Featured Image */}
                {featuredImage && (
                    <div className="relative aspect-video mb-8 rounded-xl overflow-hidden">
                        <Image
                            src={featuredImage.url || "/placeholder.svg"}
                            alt={featuredImage.alt}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        />
                    </div>
                )}

                {/* Article Content */}
                <div className="max-w-4xl mx-auto">
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-lg"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />

                    {/* Tags */}
                    {tags.length > 0 && (
                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag: any) => (
                                    <Badge key={tag.id} variant="outline" className="hover:bg-red-50 hover:text-red-600">
                                        #{tag.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Author Bio */}
                    {author && author.description && (
                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <Image
                                        src={author.avatar_urls[96] || "/placeholder.svg"}
                                        alt={author.name}
                                        width={64}
                                        height={64}
                                        className="rounded-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">About {author.name}</h3>
                                    <p className="text-gray-600 leading-relaxed">{author.description}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-2xl font-bold mb-4">Ready to Go Solar?</h3>
                                <p className="text-red-100 mb-6">
                                    Get a free quote from Florida's premier Tesla Certified solar installer.
                                </p>
                                <Link href="/contact">
                                    <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                                        Get Free Quote
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Related Posts */}
                    <RelatedPosts currentPost={post} />
                </div>
            </article>

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generatePostStructuredData(post, "https://www.relentlessenergy.org")),
                }}
            />
        </div>
    )
}
