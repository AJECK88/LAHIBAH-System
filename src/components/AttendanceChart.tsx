"use client";
import Image from "next/image"
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Mon',
    Presents: 150,
    Absents: 50,
  },
  {
    name: 'Tues',
    Presents: 151,
    Absents: 49,
    Total: 2210,
  },
  {
    name: 'Wed',
    Presents: 2000,
    Absents: 9800,

  },
  {
    name: 'Thur',
    Presents: 2780,
    Absents: 3908,
    
  },
  {
    name: 'Fri',
    Presents: 1890,

  },
  {
    name: 'Sat',
    Presents: 2390,
    Absents: 3800,
   
  },
];

const AttendanceChart = () => {
  return (
    <div className="flex rounded-xl bg-white  w-full h-[100%] flex-col pr-5 pl-5 pt-2 pb-2 justify-between">
       {/* title */}
        <div className="flex justify-between items-center">
           <h2>Attendance</h2>
           <Image src={"/moreDark.png"} alt=''width={20} height={20}/> 
        </div>
        <div className=" w-full h-full">
    <ResponsiveContainer >
      <BarChart
        width={500}
        height={300}
        data={data}
        barSize={20}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
        <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
        <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
        <Tooltip />
        <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
        <Bar
         dataKey="Presents"
           fill="#C3EBFA" 
           legendType="circle"
             radius={[10, 10, 0 ,0]}
           />
        <Bar
         dataKey="Absents"
         fill="#FAE27C"
         legendType="circle"
         radius={[10, 10, 0 ,0]}
         />
      </BarChart>
    </ResponsiveContainer>
    </div>
    </div>
  )
}
export default AttendanceChart;
