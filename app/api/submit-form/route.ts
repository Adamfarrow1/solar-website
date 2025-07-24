import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: NextRequest) {
    const data = await req.json()

    try {
        // Check if Resend API key is configured
        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is not configured")
            throw new Error("Email service not configured")
        }
        const resend = new Resend(process.env.RESEND_API_KEY)

        const recipients = ["adamfarrow1@gmail.com", "jfeliz@relentlessenergy.org"]

        // Send individual emails to ensure delivery to all recipients
        const emailPromises = recipients.map(async (email) => {
            return resend.emails.send({
                from: "Relentless Energy <leads@relentlessenergy.org>",
                to: [email],
                subject: `🌞 New Solar Quote Request from ${data.firstName} ${data.lastName}`,
                replyTo: "jfeliz@relentlessenergy.org",
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
                        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <div style="text-align: center; margin-bottom: 30px;">
                                <h1 style="color: #dc2626; margin: 0; font-size: 28px;">🌞 New Solar Quote Request</h1>
                                <p style="color: #666; margin: 10px 0 0 0;">Received: ${new Date().toLocaleString()}</p>
                            </div>
                            
                            <div style="background-color: #fef2f2; padding: 20px; border-radius: 6px; border-left: 4px solid #dc2626; margin-bottom: 25px;">
                                <h3 style="color: #dc2626; margin: 0 0 15px 0;">📞 Contact Information</h3>
                                <p style="margin: 5px 0;"><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #dc2626;">${data.email}</a></p>
                                <p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #dc2626;">${data.phone}</a></p>
                                <p style="margin: 5px 0;"><strong>Address:</strong> ${data.address}</p>
                            </div>
                            
                            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 6px; border-left: 4px solid #0ea5e9; margin-bottom: 25px;">
                                <h3 style="color: #0ea5e9; margin: 0 0 15px 0;">🏠 Property Details</h3>
                                <p style="margin: 5px 0;"><strong>Property Type:</strong> ${data.propertyType}</p>
                                <p style="margin: 5px 0;"><strong>Roof Type:</strong> ${data.roofType}</p>
                            </div>
                            
                            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 6px; border-left: 4px solid #22c55e; margin-bottom: 25px;">
                                <h3 style="color: #22c55e; margin: 0 0 15px 0;">⚡ Energy & Solar Preferences</h3>
                                <p style="margin: 5px 0;"><strong>Monthly Electric Bill:</strong> ${data.monthlyBill}</p>
                                <p style="margin: 5px 0;"><strong>Timeline:</strong> ${data.urgency}</p>
                                <p style="margin: 5px 0;"><strong>Solar Type:</strong> ${data.solarType}</p>
                                <p style="margin: 5px 0;"><strong>Financing Preference:</strong> ${data.financing}</p>
                            </div>
                            
                            ${data.message ? `
                                <div style="background-color: #fffbeb; padding: 20px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-bottom: 25px;">
                                    <h3 style="color: #f59e0b; margin: 0 0 15px 0;">💬 Additional Information</h3>
                                    <p style="margin: 0; line-height: 1.6;">${data.message}</p>
                                </div>
                            ` : ''}
                            
                            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                                <p style="color: #666; font-size: 14px; margin: 0;">
                                    This email was sent from the Relentless Energy website contact form.<br>
                                    <strong>Action Required:</strong> Please respond within 24 hours as promised to the customer.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
            })
        })

        const emailResults = await Promise.allSettled(emailPromises)

        // Log results for each email
        emailResults.forEach((result, index) => {
            const email = recipients[index]
            if (result.status === 'fulfilled') {
                if (result.value.error) {
                    console.error(`❌ Error for ${email}:`, result.value.error)
                }
            } else {
                console.error(`❌ Failed to send email to ${email}:`, result.reason)
            }
        })

        // Also submit to WordPress as backup
        const username = "Adam"
        const appPassword = process.env.FORM_SUBMIT

        if (appPassword) {
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
                console.error("WordPress submission failed:", await wpRes.text())
            }
        }

        return NextResponse.json({ message: "Success" })
    } catch (error) {
        console.error("Error processing form submission:", error)

        // More detailed error logging
        if (error instanceof Error) {
            console.error("Error message:", error.message)
            console.error("Error stack:", error.stack)
        }

        return new NextResponse(
            JSON.stringify({
                error: "Error processing form submission",
                details: error instanceof Error ? error.message : "Unknown error"
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" }
            }
        )
    }
}

