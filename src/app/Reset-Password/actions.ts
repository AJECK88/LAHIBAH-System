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
     
        if (users.data.length === 0) {
            console.log("No user found with email:", email);
            return { error: "User not found" };
        } 
        else{
            generateConfirmation(email)
           
        }
        
        // Success logic here...
    } catch (error) {
        console.error("Password reset error:", error);
        return { error: "Internal server error" };
    }
}
export default verificationEmail;