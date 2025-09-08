"use client"
import Image from "next/image"
import "./login.css"
import React from "react"
const Sign_In  = ()=>{
  const [passWordset , passWordFunction] =React.useState(false);
   const handlePasswordToggle = () => {
      passWordFunction(!passWordset);
   };
   /* || reseting the default of the form  */
   const HandleForm = (event)=>{
      
    
   }

 return (
    < div className="flex justify-center items-center h-screen bg-gray-100">
     <div className=" flex w-1/2 bg-gray-200 " style={{boxShadow: "-2px 4px 31px 6px rgba(0,0,0,0.33)"}} >
        {/* || left */}
        <div className=" w-1/2 flex flex-col justify-start bg-gray-100 gap-4 m-auto p-5">
         <div className="flex items-center gap-2"><Image alt="" src={"/image/Lahiba.png"} width={30} height={30} /><h1>LAHIBA</h1></div>
          <div className=" flex flex-col  items-center justify-center gap-4">
         
      
             <form className="flex flex-col gap-4 w-full pl-4" action="">
                 <div className="relative">
                    <input className="border p-2 rounded w-full" type="text" name="name"  placeholder="" required />
                     <label className="absolute left-2 top-1/2 transform -translate-y-1/2" htmlFor="name">Full Name</label>
                 </div>
                 <div className="relative">
                    <input className="border p-2 rounded w-full" type={ passWordset ? "text" : "password"}name="password" placeholder="" required/>
                    <label className="absolute left-2 top-1/2 transform -translate-y-1/2" htmlFor="password">Password</label>
                    <Image  className="absolute right-2 top-1/2 transform -translate-y-1/2" alt="" onClick={handlePasswordToggle} src={passWordset ? "/visibility_password.png" : "/visibility_off.png"} width={20} height={20} />
                 </div>
                 <button className="bg-blue-500 text-white p-2 rounded w-full" id="Submit" onClick={HandleForm} type="submit">Login</button>
             </form>
             <h3>Login as:</h3>
             <div className="flex  gap-2 w-full justify-between pl-4" id="login_as">
                <button className="text-white bg-blue-500 rounded  p-2 w-2/3 ">Student</button>
                <button className="text-white bg-blue-500 rounded w-2/3 p-2">Teacher</button>
             </div>
          </div>

        </div>
        {/* || Right  */}
         <div className="w-1/2" style={{backgroundImage: "url('/image/future.png')",
             backgroundSize: "cover", backgroundRepeat:"no-repeat" ,
             backgroundPosition:"center",
             fontFamily: " Arial,sans-serif",
            fontStyle: "italic",
             padding:"3rem 1rem 1rem 2rem ",
             color:"white"
             ,}}>THe Future Belongs To Those Who See It First</div>
     </div>

    </div>
 )
}
export default Sign_In;