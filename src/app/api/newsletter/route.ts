import { NextRequest, NextResponse } from "next/server";

const WHATSAPP_NUMBER = "254769899548";

export async function POST(req: NextRequest) {
  try {
    const { email } = (await req.json()) as { email?: string };
    const clean = email?.trim().toLowerCase();

    if (!clean || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const message = [
      "Hello Liviah Lash Tech!",
      "",
      "I'd like to join the Royal Circle for beauty updates and exclusive offers.",
      `My email address: ${clean}`,
      "",
      "Please let me know how I can subscribe.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    return NextResponse.json({
      ok: true,
      message: "Please continue through WhatsApp to request your subscription.",
      whatsappUrl,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request. Please try again." },
      { status: 400 },
    );
  }
}