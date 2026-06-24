
import { sendOtp } from "@/app/server/sendOTP";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    const { email } = await req.json();

    const result = await sendOtp(email);

    return NextResponse.json(result);
}