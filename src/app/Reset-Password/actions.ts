"use server"
import {createClerkClient } from "@clerk/nextjs/server";
import generateConfirmation from "../server/Auth/verification";

const clerkClients = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });


 async function verificationEmail(formdata:string) {
  
    try {
        const email = formdata;
         const users = await clerkClients.users.getUserList({
            emailAddress: [email],
            limit: 1 //check if at least one user exists
        });
     
        if (!users.data || users.data.length === 0) {
            console.log("No user found with email:", email);
            return { error: "User not found" };
        } 
        else{
           await generateConfirmation(email);
            return { success: true, message: "Verification code sent" };
        }
        
        // Success logic here...
    } catch (error) {
        console.error("Password reset error:", error);
        return { error: "Internal server error" };
    }
}
export default verificationEmail;

export async function Reset_FonFormPasword( email: string, newPassword: string) {
    try {  // Clean the email by removing brackets and trimming whitespace
   const emails =decodeURIComponent(email)
   const cleanedEmail = emails.replace(/[\[\]]/g, "").trim();
    console.log("Decoded email:", cleanedEmail);
    // Check if the user exists
   const userList = await clerkClients.users.getUserList({
  emailAddress: [cleanedEmail],
  limit: 1,
});
        
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