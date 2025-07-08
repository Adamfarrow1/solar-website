import type { WordPressPost, WordPressCategory, WordPressTag, PostsResponse } from "@/types/wordpress"

const WORDPRESS_API_URL = "https://solar4.wpenginepowered.com/wp-json/wp/v2"

// Cache configuration
const CACHE_REVALIDATE = {
    posts: 300, // 5 minutes
    post: 600, // 10 minutes
    categories: 3600, // 1 hour
    tags: 3600, // 1 hour
}

export async function getPosts(page = 1, perPage = 12): Promise<PostsResponse> {
    try {
        const response = await fetch(
            `${WORDPRESS_API_URL}/posts?page=${page}&per_page=${perPage}&_embed=true&status=publish&orderby=date&order=desc`,
            {
                next: {
                    revalidate: CACHE_REVALIDATE.posts,
                    tags: ["posts", `posts-page-${page}`],
                },
            },
        )

        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${response.status}`)
        }

        const posts: WordPressPost[] = await response.json()
        const totalPosts = Number.parseInt(response.headers.get("X-WP-Total") || "0", 10)
        const totalPages = Number.parseInt(response.headers.get("X-WP-TotalPages") || "1", 10)

        return {
            data: posts,
            totalPages,
            totalPosts,
        }
    } catch (error) {
        console.error("Error fetching posts:", error)
        return {
            data: [],
            totalPages: 1,
            totalPosts: 0,
        }
    }
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
    try {
        const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true&status=publish`, {
            next: {
                revalidate: CACHE_REVALIDATE.post,
                tags: ["posts", `post-${slug}`],
            },
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch post: ${response.status}`)
        }

        const posts: WordPressPost[] = await response.json()
        return posts.length > 0 ? posts[0] : null
    } catch (error) {
        console.error("Error fetching post:", error)
        return null
    }
}

export async function getCategories(): Promise<WordPressCategory[]> {
    try {
        const response = await fetch(`${WORDPRESS_API_URL}/categories?per_page=100`, {
            next: {
                revalidate: CACHE_REVALIDATE.categories,
                tags: ["categories"],
            },
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch categories: ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.error("Error fetching categories:", error)
        return []
    }
}

export async function getTags(): Promise<WordPressTag[]> {
    try {
        const response = await fetch(`${WORDPRESS_API_URL}/tags?per_page=100`, {
            next: {
                revalidate: CACHE_REVALIDATE.tags,
                tags: ["tags"],
            },
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch tags: ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.error("Error fetching tags:", error)
        return []
    }
}

// Utility functions
export function stripHtml(html: string): string {
    return html
        .replace(/<[^>]*>/g, "")
        .replace(/&[^;]+;/g, " ")
        .trim()
}

export function getExcerpt(content: string, length = 160): string {
    const text = stripHtml(content)
    return text.length > length ? text.substring(0, length) + "..." : text
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

export function getReadingTime(content: string): number {
    const wordsPerMinute = 200
    const words = stripHtml(content).split(/\s+/).length
    return Math.ceil(words / wordsPerMinute)
}

export function getFeaturedImage(post: WordPressPost) {
    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0]
    if (!featuredMedia) return null

    return {
        url: featuredMedia.source_url,
        alt: featuredMedia.alt_text || stripHtml(post.title.rendered),
        width: featuredMedia.media_details?.width || 800,
        height: featuredMedia.media_details?.height || 600,
    }
}

export function getAuthor(post: WordPressPost) {
    return post._embedded?.author?.[0] || null
}

export function getPostCategories(post: WordPressPost) {
    return post._embedded?.["wp:term"]?.[0] || []
}

export function getPostTags(post: WordPressPost) {
    return post._embedded?.["wp:term"]?.[1] || []
}

// Generate structured data for SEO
export function generatePostStructuredData(post: WordPressPost, baseUrl = "") {
    const author = getAuthor(post)
    const featuredImage = getFeaturedImage(post)

    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: stripHtml(post.title.rendered),
        description: getExcerpt(post.excerpt.rendered || post.content.rendered),
        image: featuredImage ? [featuredImage.url] : [],
        datePublished: post.date,
        dateModified: post.modified,
        author: author
            ? {
                "@type": "Person",
                name: author.name,
                url: author.url,
            }
            : undefined,
        publisher: {
            "@type": "Organization",
            name: "Relentless Energy",
            logo: {
                "@type": "ImageObject",
                url: `${baseUrl}/logo.png`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${post.slug}`,
        },
    }
}
