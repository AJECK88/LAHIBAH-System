"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function VerifyCodePage()  
    {
  const [feedback, setFeedback] = useState("");
  const [result, setResult] = useState(false);
  const [canResend, setcanResend] = useState(false); 
  const [timeLeft, setTimeLeft] = useState(10); // 3 minutes in milliseconds  
  const params = useParams();
  const email =decodeURIComponent(params.email as string)
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const handleChange = (value: string, index: number) => {
    if (value.length === 1 && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

const requestcode = async() =>{

   setcanResend(false)
   setTimeLeft(180) 
await fetch("/api/send-otp", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ email })
});
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
    const code = inputsRef.current.map((input) => input?.value).join("");
    try {
     const response = await fetch("/api/verify-otp", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email,
    code
  })
});

const  result = await response.json();
      if (result.success==false) {
          setFeedback(result.message);
      } else {
        // Show success  message
        setFeedback(result.message);
        setResult(true)
        // Redirect to the reset password page
        window.location.href = `/Reset-Password/[${encodeURIComponent(email)}]`;

      }
    } catch (error) {
      // Show error message
      setFeedback("An error occurred. Please try again.");
      
    }
  };
  
  return (
    <div className="w-full h-screen flex items-center justify-center">
    <div className="space-y-5 bg-white p-6 rounded-xl inset-shadow-xs shadow-xl/30 m-2 flex flex-col items-center">
      <form 
        className="flex flex-col items-center space-y-5"
        onSubmit={handleVerify}
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
        {feedback  && <p className= { result == true? `text-green-500` : `text-red-500` }>{feedback}</p>}  
        
        <button className="bg-blue-500 text-white p-2 w-full rounded-sm font-semibold ">
          Verify
        </button>
        
      </form>
      <button disabled={!canResend} onClick = {requestcode} className="bg-gray-300 text-gray-700 p-2 w-full rounded-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
          Resend Code  {canResend ? "": formatTime(timeLeft)}
        </button>
    </div>
    </div>
  );
}