import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    services: [],
    message:
      "Service listings are provided by the website frontend. Please visit the Services page to browse treatments.",
  });
}