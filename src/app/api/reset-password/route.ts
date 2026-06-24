import { Reset_FonFormPasword } from "@/app/Reset-Password/actions";
import { NextResponse } from "next/server";

export async  function POST(req:Request){
     
    try {
        const {email, newPassword} = await req.json();
        const result = await Reset_FonFormPasword(email, newPassword)

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Internal Server Error" }, 
            { status: 500 }
        );
    }
}