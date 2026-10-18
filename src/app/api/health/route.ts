import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    ok: true,
    mode: "frontend-only",
    message: "The website server is responding. Database services are disabled.",
  });
}