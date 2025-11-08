"use client"
import React from 'react';
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Expense: 4000,
    Icome: 2400,
  },
  {
    name: 'Feb',
    Expense: 3000,
    Icome: 1398,
  },
  {
    name: 'Mar',
    Expense: 2000,
    Icome: 9800,
  },
  {
    name: 'Apr',
    Expense: 2780,
    Icome: 3908,
  },
  {
    name: 'May',
    Expense: 1890,
    Icome: 4800,
  },
  {
    name: 'Jun',
    Expense: 2390,
    Icome: 3800,
  },
  {
    name: 'Jul',
    Expense: 3490,
    Icome: 4300,
  },
  {
    name: 'Aug',
    Expense: 3490,
    Icome: 4300,
  },
  {
    name: 'Sep',
    Expense: 3490,
    Icome: 4300,
  },
  {
    name: 'Oct',
    Expense: 3490,
    Icome: 4300,
  },
   {
    name: 'Nov',
    Expense: 3490,
    Icome: 4300,
  },
   {
    name: 'Dec',
    Expense: 3490,
    Icome: 4300,
  },
];

const FinanceChart = () => {
  const [hoveringDataKey, setHoveringDataKey] = React.useState(null);

  let pvOpacity = 1;
  let uvOpacity = 1;

  if (hoveringDataKey === 'uv') {
    pvOpacity = 0.5;
  }

  if (hoveringDataKey === 'pv') {
    uvOpacity = 0.5;
  }

  const handleMouseEnter = (payload: any) => {
    setHoveringDataKey(payload.dataKey);
  };

  const handleMouseLeave = () => {
    setHoveringDataKey(null);
  }

  return (
    <div className='w-full flex rounded-xl bg-white  h-full flex-col pr-5 pl-5 pt-2 pb-2 justify-between'>
      <div className=" flex justify-between">
       <h1>Finance</h1>
        <Image src={"/moreDark.png"} alt='' width={20} height={20}/>
      </div>
    <div className=''>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"  stroke="#ddd"  />
          <XAxis dataKey="name"tickLine={false} tick={{fill:"#d1d5db"}} tickMargin={10}/>
          <YAxis  tickLine={false}tick={{fill:"#d1d5db"}} tickMargin={15} />
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  align='center' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"20px"}}/>
          <Line 
          type="monotone" 
          dataKey="Icome" 
          strokeOpacity={pvOpacity} 
          stroke="#FAE27C" 
           strokeWidth={4}
           />
          <Line 
          type="monotone" 
          dataKey="Expense" 
          strokeOpacity={uvOpacity} 
          stroke="#C3EBFA" 
          strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    
    </div>
    </div>
  );
};



export default FinanceChart;