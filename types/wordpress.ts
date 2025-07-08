export interface WordPressPost {
    id: number
    date: string
    date_gmt: string
    guid: {
        rendered: string
    }
    modified: string
    modified_gmt: string
    slug: string
    status: string
    type: string
    link: string
    title: {
        rendered: string
    }
    content: {
        rendered: string
        protected: boolean
    }
    excerpt: {
        rendered: string
        protected: boolean
    }
    author: number
    featured_media: number
    comment_status: string
    ping_status: string
    sticky: boolean
    template: string
    format: string
    meta: any[]
    categories: number[]
    tags: number[]
    yoast_head?: string
    yoast_head_json?: {
        title?: string
        description?: string
        robots?: {
            index?: string
            follow?: string
            "max-snippet"?: string
            "max-image-preview"?: string
            "max-video-preview"?: string
        }
        canonical?: string
        og_locale?: string
        og_type?: string
        og_title?: string
        og_description?: string
        og_url?: string
        og_site_name?: string
        article_published_time?: string
        article_modified_time?: string
        og_image?: Array<{
            width?: number
            height?: number
            url?: string
            type?: string
        }>
        twitter_card?: string
        twitter_creator?: string
        twitter_site?: string
        twitter_misc?: {
            "Written by"?: string
            "Est. reading time"?: string
        }
        schema?: {
            "@context"?: string
            "@graph"?: any[]
        }
    }
    _embedded?: {
        author?: Array<{
            id: number
            name: string
            url: string
            description: string
            link: string
            slug: string
            avatar_urls: {
                24: string
                48: string
                96: string
            }
        }>
        "wp:featuredmedia"?: Array<{
            id: number
            date: string
            slug: string
            type: string
            link: string
            title: {
                rendered: string
            }
            author: number
            caption: {
                rendered: string
            }
            alt_text: string
            media_type: string
            mime_type: string
            media_details: {
                width: number
                height: number
                file: string
                sizes: {
                    [key: string]: {
                        file: string
                        width: number
                        height: number
                        mime_type: string
                        source_url: string
                    }
                }
            }
            source_url: string
        }>
        "wp:term"?: Array<
            Array<{
                id: number
                link: string
                name: string
                slug: string
                taxonomy: string
            }>
        >
    }
}

export interface WordPressCategory {
    id: number
    count: number
    description: string
    link: string
    name: string
    slug: string
    taxonomy: string
    parent: number
}

export interface WordPressTag {
    id: number
    count: number
    description: string
    link: string
    name: string
    slug: string
    taxonomy: string
}

export interface WordPressAuthor {
    id: number
    name: string
    url: string
    description: string
    link: string
    slug: string
    avatar_urls: {
        24: string
        48: string
        96: string
    }
}

export interface BlogPageProps {
    searchParams: Promise<{
        page?: string
    }>
}

export interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export interface PostsResponse {
    data: WordPressPost[]
    totalPages: number
    totalPosts: number
}
