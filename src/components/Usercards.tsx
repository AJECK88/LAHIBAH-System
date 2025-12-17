import Image from "next/image";

const Usercarsd =(
    {type,
      UserData  
    }:{UserData:Promise <number> , type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-purple-500 even:bg-amber-500 pr-5   p-4 flex-1 min-w[130px]:"> 
        <div className="flex justify-between items-center gap-3 ">
         <span className="text-[10px] bg-white px-2 py-2 rounded-full  text-green-600"> 2024/25</span>
         <Image src= "/more.png" alt="" width={20} height ={20} className="" />
</div>  
       <h1 className="text-2xl font-semibold   my-4">{UserData}</h1>
         <h2 className="capitalize font-medium text-sm text-gray-500 ">{type}s</h2>
         </div>
    )
}
 export default Usercarsd; 