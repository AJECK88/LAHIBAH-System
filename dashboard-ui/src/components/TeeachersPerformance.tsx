"use client"
import Link from 'next/link';
import Image from "next/image"
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const PerformanceChart = () => {
  const data = [
    { name: 'performance', value: 100, fill: '#bfdbfe' },
    { name: 'performance', value: 260, fill:  '#F5F5F5' }
  ];

  return (
    <div className='w-full h-[300px] flex flex-col justify-between p-4 bg-white rounded-2xl relative'  >
        <div className='flex justify-between items-center '> 
            <h2 className='text-lg font-semibold'>Performance</h2>
            <Link href="/">
             <Image src="/moreDark.png" alt="View Details" width={24} height={24} />
            </Link>
        </div>
    <ResponsiveContainer className={'m-auto'}>
      <PieChart width={200} height={200} >
        <Pie
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
         
          fill="#8884d8"
        />
      </PieChart>
    </ResponsiveContainer>
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center">
        <h1 className='text-3xl font-bold'>21.6</h1>
        <span className="text-xs text-gray-300">of 100% capacity</span>
    </div>
      <div className='font-medium text-center absolute bottom-7 left-1/2 transform -translate-x-1/2'>First - Second Semester</div>
  </div>
  );
};

export default PerformanceChart;

  