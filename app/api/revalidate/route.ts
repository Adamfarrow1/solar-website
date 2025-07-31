import { revalidateTag, revalidatePath } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get("secret")
    const path = request.nextUrl.searchParams.get("path")
    const tag = request.nextUrl.searchParams.get("tag")

    // Check for secret to confirm this is a valid request
    if (secret !== process.env.REVALIDATION_SECRET) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
    }

    try {
        if (path) {
            // Revalidate specific path
            revalidatePath(path)

        }

        if (tag) {
            // Revalidate specific cache tag
            revalidateTag(tag)

        }

        if (!path && !tag) {
            // Revalidate all blog-related content
            revalidateTag("posts")
            revalidatePath("/about-us/solar-power-company-blog")

        }

        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
            path: path || "all",
            tag: tag || "posts",
        })
    } catch (err) {
        console.error("Error revalidating:", err)
        return NextResponse.json({ message: "Error revalidating", error: err }, { status: 500 })
    }
}

// Handle GET requests for testing
export async function GET(request: NextRequest) {
    return NextResponse.json({
        message: "Revalidation endpoint is working. Use POST with secret parameter.",
    })
}
