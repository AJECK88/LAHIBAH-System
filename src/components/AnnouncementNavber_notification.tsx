
"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Announcement_Notification = ()=>{
      const  [set , setNewMassage] =useState(4)
  const handleAnnous = ()=>{
     setNewMassage(porv => porv = 0)
  }
    return(
         <Link href={'/list/announcements'}><figure onClick={handleAnnous} className="rounded-full w-7 h-7 flex  items-center justify-center cursor-pointer relative">
     <Image src="/announcement.png" alt="User Profile" width={20} height={20} /> 
       <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs ">{set}</div> 
     </figure> </Link> 
    )
}
export default Announcement_Notification ;