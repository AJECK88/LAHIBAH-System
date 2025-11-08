import Image from 'next/image';
import Pagination from '@/components/pagination'
import Table from '@/components/table'
import Link from 'next/link';
 import TablesearchBar from '@/components/TablesearchBar'
import { studentsData , role, parentsData} from '@/lib/data';
import FormModel from '@/components/FormModel';
import { Parent, Student } from '@prisma/client';
import prisma from '@/lib/prisma';
import { Items_Per_Page } from '../../Settings';
import { Key } from 'react';
   type ParentList  = Parent & {students:Student[]}
    const Columns = [
        {
            header:"Info",
            accessorKey:"info"
        },
        {
            header:"Students Name",
            accessorKey:"students",
            className: "hidden md:table-cell"
            
        },
            {
            header:"Phone",
            accessorKey:"phone",
            className: "hidden md:table-cell"
            
        },
            {
            header:"Address",
            accessorKey:"address",
            className: "hidden md:table-cell"
            
        },
            {
            header:"Actions",
            accessorKey:"actions",
            className: "hidden md:table-cell"
            
        }
    ]
     const renderRow = (parent:ParentList ) => (
            <tr key={parent.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100 '>
                <td className='flex items-center gap-4  p-4'>
                <div className="">
                    <h3 className="font-semibold">{parent.firstName +" " +parent.lastName}</h3>
                    <p className="text-xs text-gray-400 font-semibold ">{parent.email}</p>
                </div>
                </td>
                <td className="hidden md:table-cell"> {parent.students.map(student =>student.firstName+student.lastName).join(", ")}</td>
                <td className="hidden md:table-cell">{parent.phoneNumber}</td>
                <td className="hidden md:table-cell">{parent.address}</td>
                <td className=" md:table-cell">
                    <div className="flex items-center gap-2 self-end" >
                        <Link href={`/list/students/${parent.id}`} className="text-blue-500">
                          <button className='w-7 h-7 flex items-center justify-center rounded-full bg-[#271288]'><Image src="/view.png" alt='' width={16} height={16} ></Image></button>
                        </Link>
                  {role === "admin" && (
                    <><FormModel table="Parent" type="Update" id={parent.id} />
                      <FormModel table="Parent" type="Delete" id={parent.id} />
                    </>
                  )}
                    </div>
                </td>
            </tr>
        )

const  ParentsListpage = async({
   searchParams,
}:{searchParams :Promise<{[key:string]:string|undefined }>

}) => {
    const params = await searchParams
    const {page, ...quoryParams} =params
    const p = page?parseInt(page):1;
    const [parentsData , count] = await prisma.$transaction([
           prisma.parent.findMany({
            include:{
                students:true
            },
            take:Items_Per_Page,
            skip : Items_Per_Page*(p-1)
           }),
           prisma.parent.count()
    ]) 
    return (
        /* Student Page */
        /* Right hand side */
        <div className=" flex-1 bg-white p-4 rounded-md m-4 mt-0 h-full" >
            {/* || top section */}
            <div className="flex flex-col md:flex-row gap-4  items-center md:w-auto justify-between ">
                <h1 className='hidden md:block  text-lg font-semibold'>All Parents </h1>
                <div className=''><TablesearchBar/>
                </div>
                <div className="flex items-center gap-4 self-end">
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/filter.png" alt="Add" width={14} height={14} /></button>
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/sort.png" alt="Add" width={14} height={14} /></button>
                   <FormModel table="Parent" type="Create" />
                 </div>
            </div>
            {/* || List  */}
            <div className="">
                <Table columns={Columns} renderRow ={renderRow} data ={parentsData} />
            </div>
            {/* || pagination */}
            <div className="w-full">
                <Pagination 
                count={count}
                page={p}
                />
            </div>
        </div>
    )
}
export default ParentsListpage;