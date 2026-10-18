import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    staff: [],
    message:
      "Staff information is currently provided by the website directly.",
  });
}