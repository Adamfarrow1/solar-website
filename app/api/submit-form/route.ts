import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const data = await req.json()

    const username = "Adam"

    const appPassword = process.env.FORM_SUBMIT

    const auth = Buffer.from(`${username}:${appPassword}`).toString("base64")

    const wpRes = await fetch("https://solar4.wpenginepowered.com/wp-json/wp/v2/form_submission", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
            title: `${data.firstName} ${data.lastName}`,
            content: JSON.stringify(data, null, 2),
            status: "publish",
        }),
    })

    if (!wpRes.ok) {
        const errorText = await wpRes.text()

        return new NextResponse(`Error from WP: ${errorText}`, { status: 500 })
    }

    return NextResponse.json({ message: "Success" })
}

