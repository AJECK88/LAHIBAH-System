"use server"
import { createClerkClient } from "@clerk/nextjs/server";
import generateConfirmation from "../server/Auth/verification";
const clerkClients = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export async function verificationEmail(formdata: string) {
    try {
        const email = formdata;
        const users = await clerkClients.users.getUserList({
            emailAddress: [email],
            limit: 1 // check if at least one user exists
        });
     
        if (!users.data || users.data.length === 0) {
            console.log("No user found with email:", email);
            return { error: "User not found" };
        } 
        else {
            await generateConfirmation(email);
            return { success: true, message: "Verification code sent" };
        }
    } catch (error) {
        console.error("Verification email error:", error);
        return { error: "Internal server error" };
    }
}

export async function Reset_FonFormPasword(email: string, newPassword: string) {
    try {
        // Clean the email input accurately
        const decodedEmail = decodeURIComponent(email);
        const cleanedEmail = decodedEmail.replace(/[\[\]]/g, "").trim();
        console.log("Decoded email to update:", cleanedEmail);

        // 2. Fetch the user safely inside the try block
        const userList = await clerkClients.users.getUserList({
            emailAddress: [cleanedEmail],
            limit: 1,
        });

        //  Check if the user exists before accessing index [0]
        if (!userList || !userList.data || userList.data.length === 0) {
            console.warn("Reset aborted: User not found for email:", cleanedEmail);
            return { success: false, message: "No user account found with that email." };
        }

        // Safe to extract the ID now
        const userId = userList.data[0].id; 
        
        await clerkClients.users.updateUser(userId, {
            password: newPassword,
        });

        return { success: true, message: "Password reset successful" };

    } catch (error) {
        console.error("Password reset error:", error);
        return { success: false, message: "Internal server error" };
    }
}