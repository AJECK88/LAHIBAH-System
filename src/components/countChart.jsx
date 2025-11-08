
"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from  "next/image"
const data = [
  {
    name: 'Tatal',
    count: 103,
    fill: 'white',
  },
    {
    name: 'Boys',
    count:68,
    fill: '#C3EBFA',
  },
  {
    name:'Girl',
    count: 45,
    fill: '#FAE27C',
  },

];
const CountChart  =  () => {
 
    return (
       <div className=' bg-white  rounded-xl w-full h-full  flex flex-col justify-between pr-5 pl-5 pt-2 pb-2'>

        {/* title */}
        <div className="flex justify-between items-center">
           <h2>Students</h2>
           <Image src={"/moreDark.png"} alt=''width={20} height={20}/> 
        </div>

        {/* Chart */}
        <div className="relative w-full h-[75%]">
      <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={35} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
         
        </RadialBarChart>
      </ResponsiveContainer>
        <Image src= "/maleFemale.png" alt ="" width={50} height={50}  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>

      </div>

      {/* Button  */}
      <div className="w-full flex flex-row  gap-4 items-center justify-center ">

        {/* Boys info */}
       <div className='flex flex-col gap-1'>
         <div className='w-3 h-3  rounded-full  bg-blue-700 '/>
        <h1 className='font-bold'>1240</h1>
        <h2 className='text-xs text-gray-300 '>Boys({50 + "%"})</h2>
  </div>

       {/* Girls info */}
        <div className='flex flex-col gap-1'>
        <div className='w-3 h-3  rounded-full bg-amber-500 '/>
        <h1 className='font-bold'>1240</h1>
        <h2 className='text-xs text-gray-300'>Girls({50 + "%"})</h2>
   </div>
       
      </div>
      </div>
    );
    
  }
export default CountChart