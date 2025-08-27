import Image from 'next/image';
import Pagination from '@/components/pagination'
import Table from '@/components/table'
import Link from 'next/link';
 import TablesearchBar from '@/components/TablesearchBar'
import {announcementsData,  role,} from '@/lib/data';
import { type } from 'os';
   type announcements = {
        id: string;
        title: string;
        class: string;
        teacher: string;
        date: string;
       
    }
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
        },
    {
            header:"Actions",
            accessorKey:"actions",
            className: "hidden md:table-cell"
            
        }
    ]

const  announcementsListpage = () => {

    const renderRow = (announcement:announcements) => (
            <tr key={announcement.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100 '>
                <td className='flex items-center gap-4  p-4'>
                <div className="">
                    <h3 className="font-semibold">{announcement.title}</h3>
                </div>
                </td>
                <td className="hidden md:table-cell"> {announcement.class}</td>
                <td className=""> {announcement.date}</td>
                <td className=" md:table-cell">
                    <div className="flex items-center gap-2 self-end" >
                        <Link href={`/list/subjects/${announcement.id}`} className="text-blue-500">
                          <button className='w-7 h-7 flex items-center justify-center rounded-full bg-[#271288]'><Image src="/view.png" alt='' width={16} height={16} ></Image></button>
                        </Link>
                  {role === "admin" && (
                          <button className='w-7 h-7 flex items-center justify-center rounded-full  bg-red-500'><Image src="/delete.png" alt='' width={16} height={16} ></Image></button>
                    )}
                    </div>
                </td>
            </tr>
        )

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
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/plus.png" alt="Add" width={14} height={14} /></button>
                     </div>
            </div>
            {/* || List  */}
            <div className="">
                <Table columns={Columns} renderRow ={renderRow} data ={announcementsData} />
            </div>
            {/* || pagination */}
            <div className="w-full">
                <Pagination />
            </div>
        </div>
    )
}
export default announcementsListpage;