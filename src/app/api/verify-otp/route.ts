import { NextResponse } from "next/server";
import { verifyCode } from "@/app/server/Auth/verification";

export async function POST(req: Request) {
    try {
        const { email, code } = await req.json();

        // wait for the verifyCode function to complete and store the result
        const result = await verifyCode(email, code);
        // return the result as a JSON response
        return NextResponse.json(result);

    } catch (error) {
        
        // Return a JSON response with an error message and a 500 status code
        return NextResponse.json(
            { success: false, message: "Internal Server Error" }, 
            { status: 500 }
        );
    }
}