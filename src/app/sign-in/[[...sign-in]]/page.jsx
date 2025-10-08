"use client"
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Image from "next/image"
import "./login.css"
import React, { useEffect } from "react"
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Sign_In  = ()=>{
const { isSignedIn, user, isLoaded } = useUser()
  const [passWordset , passWordFunction] =React.useState(false);
   const handlePasswordToggle = () => {
      passWordFunction(!passWordset);
   };
   /* || reseting the default of the form  */
   const HandleForm = (event)=>{
      
     
   }
    const route = useRouter() 
    
   useEffect(()=>{
    if(isSignedIn && user){
       const role=user?.publicMetadata.role;
     if(role){
         route.push(`/${role}`)
      }
    }
   },[user, route ,isSignedIn])
  
 return (

        <div className=" grid w-full flex-grow items-center bg-zinc-100 px-4 sm:justify-center h-[100vh]">
         <SignIn.Root>
           <SignIn.Step
          name="start"
          className=" space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
        >
         <div className="flex items-center flex-col gap-2"><Image alt="" src={"/image/Lahiba.png"} width={50} height={50} /><h1 className='mt-4 text-xl font-medium tracking-tight text-zinc-950'>Sign in to LAHIBA</h1></div>
          <div className=" flex flex-col  items-center justify-center gap-4">

           <Clerk.GlobalError className="text-sm text-red-600 mt-1" />
            <div className="relative w-full">
             
              <Clerk.Field name="identifier" className="w-full">
                <Clerk.Input className="border p-2 rounded w-full h-14" type="text" placeholder="" required />
                <Clerk.Label className="absolute left-2 top-1/2 transform -translate-y-1/2 " htmlFor="name">User Name</Clerk.Label>
                <Clerk.FieldError className="text-sm text-red-600 mt-1" />
              </Clerk.Field>
            </div>
            
              <Clerk.Field name="password" className="w-full">
                <div className=" w-full relative">
                <Clerk.Input className="border p-2 rounded w-full h-14" type={ passWordset ? "text" : "password"}name="password" placeholder="" required/>
                <Clerk.Label className="absolute left-2 top-1/2 transform -translate-y-1/2" htmlFor="password">Password</Clerk.Label>
                <Image  className="absolute right-2 top-1/2 transform -translate-y-1/2" alt="" onClick={handlePasswordToggle} src={passWordset ? "/visibility_password.png" : "/visibility_off.png"} width={20} height={20} />
                  </div>
                  <Clerk.FieldError className="text-sm text-red-600 mt-1" />
              </Clerk.Field> 
                

                 <SignIn.Action submit className="bg-blue-500 text-white p-2 rounded w-full" id="Submit"  >Login</SignIn.Action>

               <Clerk.Link
              navigate="sign-up"
              className="font-medium  text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline text-center "
            >
               Forget Password?
            </Clerk.Link>
          </div>
           
          </SignIn.Step> 
          </SignIn.Root>
</div>
   
 )
}
export default Sign_In;