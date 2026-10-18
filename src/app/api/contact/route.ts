
import { NextRequest, NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name?.trim() || !email?.includes("@") || !message?.trim()) {
      return NextResponse.json(
        { error: "Please complete all fields with a valid email address." },
        { status: 400 },
      );
    }

    const whatsappMessage = [
      "Hello Liviah Lash Tech! I'd like to make an inquiry.",
      "",
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n");

    const whatsappNumber = SITE.whatsapp.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    return NextResponse.json({
      ok: true,
      message: "Your inquiry is ready to send through WhatsApp.",
      whatsappUrl,
    });
  } catch {
    return NextResponse.json(
      { error: "Could not prepare your inquiry. Please try again." },
      { status: 400 },
    );
  }
}
