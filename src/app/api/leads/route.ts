import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, treatment, message } = body;

        // Validate essential fields
        if (!name || !email) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Attempt to save to Supabase if configured
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
                // We still return 200 to the client as a graceful fallback 
                // but log the error on the server
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
