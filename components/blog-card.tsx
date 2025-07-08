import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User } from "lucide-react"
import type { WordPressPost } from "@/types/wordpress"
import {
    getFeaturedImage,
    getAuthor,
    getPostCategories,
    formatDate,
    getReadingTime,
    stripHtml,
    getExcerpt,
} from "@/lib/wordpress"

interface BlogCardProps {
    post: WordPressPost
}

export default function BlogCard({ post }: BlogCardProps) {
    const featuredImage = getFeaturedImage(post)
    const author = getAuthor(post)
    const categories = getPostCategories(post)
    const readingTime = getReadingTime(post.content.rendered)
    const excerpt = getExcerpt(post.excerpt.rendered || post.content.rendered, 120)

    return (
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
            <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-video overflow-hidden">
                    {featuredImage ? (
                        <Image
                            src={featuredImage.url || "/placeholder.svg"}
                            alt={featuredImage.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                            <div className="text-red-600 text-4xl font-bold">{stripHtml(post.title.rendered).charAt(0)}</div>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </Link>

            <CardContent className="p-6 space-y-4">
                {/* Categories */}
                {categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {categories.slice(0, 2).map((category: any) => (
                            <Badge key={category.id} variant="secondary" className="text-xs bg-red-50 text-red-700 hover:bg-red-100">
                                {category.name}
                            </Badge>
                        ))}
                    </div>
                )}

                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="group">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                        {stripHtml(post.title.rendered)}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{excerpt}</p>

                {/* Meta Information */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                        {author && (
                            <div className="flex items-center space-x-1">
                                <User className="h-3 w-3" />
                                <span>{author.name}</span>
                            </div>
                        )}
                        <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(post.date)}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{readingTime} min read</span>
                    </div>
                </div>

                {/* Read More Link */}
                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700 transition-colors duration-200 group"
                >
                    Read More
                    <svg
                        className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </CardContent>
        </Card>
    )
}
