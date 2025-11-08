import Image from 'next/image';
import Pagination from '@/components/pagination'
import Table from '@/components/table'
import Link from 'next/link';
 import TablesearchBar from '@/components/TablesearchBar'
import {announcementsData,  role,} from '@/lib/data';
import { type } from 'os';
import FormModel from '@/components/FormModel';
import { count } from 'console';
import prisma from '@/lib/prisma';
import { Announcement, Department } from '@prisma/client';
import { de } from 'zod/v4/locales';
   type announcementsList = Announcement & {department:Department[]}
    const Columns = [
        {
            header:"Info",
            accessorKey:"Info"
        },
      
   
            {
                header:"class",
                accessorKey:"class",
                className: "hidden md:table-cell"
            },

        {

            header:"Date",
            accessorKey:"date",
            className: ""
        },  {        header:"message",
            accessorKey:"message",
            className: ""
        },
    {
            header:"Actions",
            accessorKey:"actions",
            className: "hidden md:table-cell"
            
        }
    ]
   const renderRow = (announcement:announcementsList) => (
            <tr key={announcement.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100 '>
                <td className='flex items-center gap-4  p-4'>
                <div className="">
                    <h3 className="font-semibold">{announcement.title}</h3>
                </div>
                </td>
                <td className="hidden md:table-cell"> {announcement.department?.length >1?"General":announcement.department?.map(dep=>dep.name)}</td>
                <td className=""> {announcement.date.toLocaleDateString()}</td>
                <td className=""> {announcement.message}</td>
                <td className=" md:table-cell">
                    <div className="flex items-center gap-2 self-end" >
                  {role === "admin" && (
                    <>
                    <FormModel table='announcement' type='Update' id={announcement.id} />
                    <FormModel table='announcement' type='Delete' id={announcement.id} />
                    </>
                    )}
                    </div>
                </td>
            </tr>
        )
const  announcementsListpage = async({
    searchParams
}:{
    searchParams:Promise<{[key:string]:string|undefined}>
}) => {
     const [announcementsData , count]= await prisma.$transaction([
        prisma.announcement.findMany({
            include:{
                 department:true
            }
        }),
        prisma.announcement.count()
         
     ])
     const Params = await searchParams;
     const {page, ...qouryParams} = Params;
     const p = page? parseInt(page):1;
     
 

    return (
        /* Student Page */
        /* Right hand side */
        <div className=" flex-1 bg-white p-4 rounded-md m-4 mt-0 h-full " >
            {/* || top section */}
            <div className="mb-5 flex flex-col md:flex-row gap-4  items-center md:w-auto justify-between ">
                <h1 className='hidden md:block  text-lg font-semibold'>Results</h1>
                <div className=''><TablesearchBar/>
                </div>
                <div className="flex items-center gap-4 self-end">
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/filter.png" alt="Add" width={14} height={14} /></button>
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/sort.png" alt="Add" width={14} height={14} /></button>
                     <FormModel table='announcement' type='Create'/>
                     </div>
            </div>
            {/* || List  */}
            <div className="">
                <Table columns={Columns} renderRow ={renderRow} data ={announcementsData} />
            </div>
            {/* || pagination */}
            <div className="w-full">
                <Pagination 
                count={count}
                page={p}/>
            </div>
        </div>
    )
}
export default announcementsListpage;