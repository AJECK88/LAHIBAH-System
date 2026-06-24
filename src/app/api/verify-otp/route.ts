import { NextResponse } from "next/server";
import { verifyCode } from "@/app/server/Auth/verification";

export async function POST(req: Request) {
    try {
        const { email, code } = await req.json();

        // 1. Await the execution of your verification logic
        const result = await verifyCode(email, code);
       console.log("Verification result:", result);
        return NextResponse.json(result);

    } catch (error) {
        console.error("API ROUTE CRASHED BECAUSE:", error);
        
        // 3. Ensure the catch block also explicitly RETURNS a response
        return NextResponse.json(
            { success: false, message: "Internal Server Error" }, 
            { status: 500 }
        );
    }
}