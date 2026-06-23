"use client"

import verificationEmail from "./actions"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link  from "next/link"
const  ResetPassword =  (
)=>{
   const router = useRouter();
   const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{     
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const UserEmail = formData.get("Email") as string; 
      
      
      try{
       verificationEmail(UserEmail)
       .then((res)=>{
        if(res?.error){
          console.log(res.error)
        }
        else{
      router.push(`/OTPVerification/${encodeURIComponent(UserEmail)}`);
      }})

       
      
      
   }
   catch(err){
    if(!UserEmail?.toString().endsWith("@gmail.com")){
      throw(err="invalid email")
    }
    else{
     
    }
    }

   }
   
   
     return (
        <div className="w-full h-screen flex items-center justify-center">
         <form onSubmit={handleSubmit}
          className=" space-y-5 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8 flex-col"
         >
         <h1 className="font-semibold text-gray-700">Password Reset</h1>
          <label htmlFor="Email">Email <strong className="text-red-700">*</strong></label>
          <input className="w-full p-2 border rounded-sm" type="email" placeholder="example@gmail.com" required name="Email"/>
          <h3>{}</h3>
         <button className="w-full bg-blue-500 p-2 text-white consure  font-semibold rounded-sm">Reset Password </button>
         <Link href = '/sign-in' className="text-blue-600 flex justify-end w-full underline ">Back to Login <Image alt="arrow" src={"/arrow.png"} width={20} height={20} /> </Link> 
         </form>
     
        </div>
        
     )
}
export default  ResetPassword