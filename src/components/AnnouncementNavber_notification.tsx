"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
 type pop={
  userId:string,
  UserRole:string
 }
const Announcement_Notification = (
   {userId , UserRole }:pop
)=>{
  
    // Store the unread count in state (defaults to 0)
  const [unreadCount, setUnreadCount] = useState(0);

  const handleAnnous = ()=>{
      setUnreadCount(0);
  }

    useEffect( ()=>{
 if(!userId) return;
fetch(`/api/announcement?userId=${userId}&userType=${UserRole}`)
      .then((res) => res.json())
      .then((data) => {
        // 'unread' because this badge is for unread alerts
        setUnreadCount(data.unread || 0);
      })
    
      .catch((err) => console.error("Failed to load initial notification count:", err));
  }, [userId, UserRole]);

  // 2. Optional: Connect to your live SSE stream to update the badge in real-time
  useEffect(() => {
    const protocol = window.location.protocol;
    const eventSource = new EventSource(`${protocol}//${window.location.host}/api/ws`);

    eventSource.onmessage = () => {
      // Increment the unread counter live whenever a new broadcast arrives
      setUnreadCount((prev) => {
         if(UserRole !== "admin") return prev + 1
         
         return prev
      });
    };

    return () => {
      eventSource.close();
    };
  }, [UserRole]);

 
    return(
         <Link href={'/list/announcements'}><figure onClick={handleAnnous} className="rounded-full w-7 h-7 flex  items-center justify-center cursor-pointer relative">
     <Image src="/announcement.png" alt="User Profile" width={20} height={20} /> 
       { unreadCount > 0  && <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs ">{unreadCount}</div> }
     </figure> </Link> 
    )
}
export default Announcement_Notification ;
