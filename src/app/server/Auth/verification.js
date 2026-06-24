import { sendMail } from "@/app/api/send-mail/route";
import crypto from "crypto";
import Redis from "ioredis"

  // Store in Redis with a 5-minute expiration
 const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});
async function generateConfirmation(userId) {
  //Generate a secure 6-digit code
  const code = crypto.randomInt(100000, 999999).toString(); 
  console.log(`Generated code for user ${userId}: ${code}`); // For debugging, remove in production

  await redis.set(`auth_code:${userId}`, code, 'EX', 300);

  //Send via external service
 await sendMail({
   to:userId,
   subject: "Your LAHIBA Account Confirmation Code",
   html: `
 <!DOCTYPE html>
 <html>
   <body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, sans-serif;">
     <table width="100%" cellpadding="0" cellspacing="0">
       <tr>
         <td align="center" style="padding:30px 0;">
           <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">
 
             <!-- School Logo -->
             <tr>
               <td align="center" style="padding:20px;">
                 <img
                   src="/Lahiba.png"
                   alt="School Logo"
                   width="120"
                   style="display:block;"
                 />
               </td>
             </tr>
 
             <!-- Header -->
             <tr>
               <td style="padding:20px; text-align:center;">
                 <h2 style="margin:0; color:#1f2937;">
                   Reset Password 🎓
                 </h2>
               </td>
             </tr>
 
             <!-- Body -->
             <tr>
               <td style="padding:20px; color:#374151; font-size:14px; line-height:1.6;">
                
 
                 <p>
                    Dear User, 
                 </p>
 
                 <!-- Student Info -->
                 <table width="100%" cellpadding="8" cellspacing="0" style="background:#f9fafb; border:1px solid #e5e7eb;">
                   <tr>
                     <td><strong>Confirmation Code:</strong></td>
                     <td>${code}</td>
                   </tr>
                 </table>
 
                 <p style="margin-top:20px;">
                   Please use the above code to confirm your account.
                 </p>
                 <p>
                   If you need any assistance, please contact the school administration.
                 </p>
 
                 <p>
                   Kind regards,<br />
                   <strong>School Administration</strong><br />
                   Lahiba University
                 </p>
               </td>
             </tr>
 
             <!-- Footer -->
             <tr>
               <td style="padding:15px; background:#f1f5f9; text-align:center; font-size:12px; color:#6b7280;">
                 <p style="margin:0;">
                   🌐 <a href="https://yourschoolwebsite.com" style="color:#0f766e; text-decoration:none;">
                     www.yourschoolwebsite.com
                   </a>
                 </p>
                 <p style="margin:5px 0 0;">
                    ✉️ info@laureateinstitute.com
                 </p>
                 <p style="margin:5px 0 0;">
                   © ${new Date().getFullYear()} LAHIBA. All rights reserved.
                 </p>
               </td>
             </tr>
 
           </table>
         </td>
       </tr>
     </table>
   </body>
 </html>
   `,
});
}
export default generateConfirmation;


export async function verifyCode(userId, inputCode) {
  const storedCode = await redis.get(`auth_code:${userId}`);
  

  
  if (!storedCode)
    return{
      success: false,
      message: "Code expired or not found. Please request a new code.",
    };

  if (storedCode !== inputCode) {
    return {
      success: false,
      message: "Invalid code. Please try again.",
    };
  }

  // Success: Clear the code so it can't be used again
  await redis.del(`auth_code:${userId}`);
  return {
    success: true,
    message: "Code verified successfully.",
  };
}