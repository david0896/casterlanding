import { NextRequest, NextResponse } from "next/server";

//req is short for request
export async function GET(req) {
    return NextResponse.json(
      { message: "this is a get request" },
      { status: 200 }
    );
  }