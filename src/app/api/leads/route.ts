import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, treatment, message } = body;

        // Validate essential fields
        if (!name || !email) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 1. Send Email via SMTP
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || "mail.agenturserver.de",
                port: Number(process.env.SMTP_PORT) || 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER || "info@tkbeautystudio.de",
                    pass: process.env.SMTP_PASSWORD,
                },
            });

            const mailOptions = {
                from: `"Website Kontaktformular" <${process.env.SMTP_USER || "info@tkbeautystudio.de"}>`,
                to: process.env.EMAIL_RECEIVER || "info@branova.de",
                replyTo: email,
                subject: `Neue Anfrage von ${name} - ${treatment}`,
                text: `
                    Name: ${name}
                    Email: ${email}
                    Telefon: ${phone || "Nicht angegeben"}
                    Behandlung: ${treatment}
                    Nachricht: ${message || "Keine Nachricht hinterlassen"}
                `,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee;">
                        <h2 style="color: #8A7A65;">Neue Anfrage erhalten</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Telefon:</strong> ${phone || "Nicht angegeben"}</p>
                        <p><strong>Behandlung:</strong> ${treatment}</p>
                        <p><strong>Nachricht:</strong><br>${message || "Keine Nachricht hinterlassen"}</p>
                        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                        <p style="font-size: 12px; color: #999;">Gesendet über das Kontaktformular von TK BEAUTYSTUDIO.</p>
                    </div>
                `,
            };

            await transporter.sendMail(mailOptions);
            console.log("Email sent successfully to info@branova.de");
        } catch (emailError) {
            console.error("Email Error:", emailError);
            // We continue even if email fails, so the lead is at least saved in Supabase
        }

        // 2. Attempt to save to Supabase if configured
        if (supabaseServer) {
            const { error } = await supabaseServer
                .from('leads')
                .insert([
                    {
                        name,
                        email,
                        phone,
                        treatment,
                        message,
                        source: 'website_modal',
                        status: 'new'
                    }
                ]);

            if (error) {
                console.error("Supabase Error:", error);
            }
        } else {
            console.warn("Supabase not configured. Lead data logged to console:");
            console.log(body);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
