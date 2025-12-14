import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image"
export  async function  Navber()  {
 const user = await currentUser(); 
   const role =  user?.publicMetadata.role as string ;
   const UserName =user?.fullName as string ;
  return(
 <div className="flex text-center justify-between w-full" >
  {/* Search Bar */}
  <div className=" hidden md:flex items-center justify-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-2" >
     <Image src = "/search.png" alt=" " width={14} height = {14} />
     <input type="text" placeholder="Search... "className="w-[200px] p-2 bg-transperent outline-none"/>
  </div>
 
    {/* User Profile */}
    <div className="flex items-center justify-end w-full gap-6">
        <figure className="rounded-full w-7 h-7 flex  items-center justify-center cursor-pointer">
     <Image src="/message.png" alt="User Profile" width={20} height={20} />   
     </figure>
       <figure className="rounded-full w-7 h-7 flex  items-center justify-center cursor-pointer relative">
     <Image src="/announcement.png" alt="User Profile" width={20} height={20} /> 
       <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs ">2</div> 
     </figure>
      <div className="flex flex-col">
        <span className="text-xs leading-3 font-medium">{UserName}</span>
        <span className="text-[10px] text-gray-500 text-right">{role}</span>
     </div>
 {/*     <Image src={"/avatar.png"} alt="" width={ 36} height={36} className="rounded-full" /> */}

     <UserButton  />
   </div>
 </div>
  );
}
