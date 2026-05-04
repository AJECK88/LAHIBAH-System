"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { sendOtp } from "@/app/server/sendOTP";

export default function VerifyCodePage()  
    {
  const [canResend, setcanResend] = useState(false); 
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in milliseconds  
  const params = useParams();
  const email =decodeURIComponent(params.email as string)
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const handleChange = (value: string, index: number) => {
    if (value.length === 1 && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

const requestcode = async() =>{
  console.log("requesting new code")
   setcanResend(false)
   setTimeLeft(180) 
  await sendOtp(email);
 } 
  useEffect(()=>{
    if(timeLeft<=0){
       setcanResend(true)
    }
    const timer = setInterval(()=>{
      setTimeLeft((prev)=>prev-1)
    } ,1000)
    return ()=> clearInterval(timer)
  } ,[timeLeft])

  
  // distructing the time left into minutes and seconds
  const formatTime = (timer: number) => {
    if(timeLeft!=0){
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
  }
  
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
      inputsRef.current[index - 1]?.focus();
    }
  };
   
  const handleVerify = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

  };
 
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form 
        onSubmit={handleVerify}
        className="space-y-5 bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
      >
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
        <Image src="/image/mail.png" alt="Email Icon" width={35} height={35} />
        </div>
        <h1 className="font-semibold text-xl m-0">
          Verify Your Email
        </h1>
            <h3 className="text-gray-700 m-0">
              Please Enter The Verification Code We Sent .
            </h3>
            <h3 className="text-gray-700">
              To Your <span className="font-semibold">{email}</span> .
            </h3>
      <div>     
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <input
          type="text"
          key={i}
          className="border border-gray-400 p-2 m-1 w-[45px] h-[35px] rounded-md text-center bg-blue-100" 
          maxLength={1}
          ref={(el) => {inputsRef.current[i] = el;}}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
        
           ))}
           </div>
        <button className="bg-blue-500 text-white p-2 w-full rounded-sm font-semibold ">
          Verify
        </button>
        <button disabled={!canResend} onClick = {requestcode} className="bg-gray-300 text-gray-700 p-2 w-full rounded-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
          Resend Code  {canResend ? "": formatTime(timeLeft)}
        </button>
      </form>
    </div>
  );
}