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
import { getWeeklyAttendanceData } from "@/lib/actions";
import { useEffect, useState } from "react";
type AttendanceItem = { name: string; Presents: number; Absents: number };

// fetch data on client
const AttendanceChart = () => {
  const [data, setData] = useState<AttendanceItem[]>([]);

  useEffect(() => {
    let mounted = true;
    getWeeklyAttendanceData().then((res) => {
      if (!mounted) return;
      if (!res) {
        setData([]);
        return;
      }
      // normalize backend grouped shape to AttendanceItem[]
      const normalized: AttendanceItem[] = res.map((r: any) => ({
        name: r.name,
        Presents: Array.isArray(r.Presents) ? r.Presents.length : Number(r.Presents) || 0,
        Absents: Array.isArray(r.Absents) ? r.Absents.length : Number(r.Absents) || 0,
      }));
      setData(normalized);
    });
    return () => { mounted = false };
  }, []);

  return (
    <div className="flex rounded-xl bg-white  w-full h-[100%] flex-col pr-5 pl-5 pt-2 pb-2 justify-between">
       {/* title */}
        <div className="flex justify-between items-center">
           <h2>Attendance</h2>
           <Image src={"/moreDark.png"} alt=''width={20} height={20}/> 
        </div>
        <div className=" w-full h-full">
    <ResponsiveContainer>
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
