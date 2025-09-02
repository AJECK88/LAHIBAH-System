import Image from 'next/image';
import Pagination from '@/components/pagination'
import Table from '@/components/table'
import Link from 'next/link';
 import TablesearchBar from '@/components/TablesearchBar'
import { role, subjectsData} from '@/lib/data';
import { type } from 'os';
import FormModel from '@/components/FormModel';
   type subjects = {
        id: string;
        name: string;
        teachers: string[];
    }
    const Columns = [
        {
            header:"Course Title",
            accessorKey:"info"
        },
        {
            header:"Teachers",
            accessorKey:"students",
            className: "hidden md:table-cell"
            
        },
    {
            header:"Actions",
            accessorKey:"actions",
            className: "hidden md:table-cell"
            
        }
    ]
    
const  SubjectsListpage = () => {

        const renderRow = (subject:subjects ) => (

            <tr key={subject.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100 '>
                <td className='flex items-center gap-4  p-4'>
                <div className="">
                    <h3 className="font-semibold">{subject .name}</h3>
                </div>
                </td>

                <td className="hidden md:table-cell"> {subject.teachers?.join(", ")}</td>

                <td className=" md:table-cell">
                    <div className="flex items-center gap-2 self-end" >
                  {role === "admin" && (
                    <>
                        <FormModel table="Courses" type="Update" id={subject.id} />
                        <FormModel table="Courses" type="Delete" id={subject.id} />
                   </>
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
            <div className="flex flex-col md:flex-row gap-4  items-center md:w-auto justify-between ">
                <h1 className='hidden md:block  text-lg font-semibold'>All Courses </h1>
                <div className=''><TablesearchBar/>
                </div>
                <div className="flex items-center gap-4 self-end">
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/filter.png" alt="Add" width={14} height={14} /></button>
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/sort.png" alt="Add" width={14} height={14} /></button>
                    <FormModel table="Courses" type="Create" />
                    </div>
            </div>
            {/* || List  */}
            <div className="">
                <Table columns={Columns} renderRow ={renderRow} data ={subjectsData} />
            </div>
            {/* || pagination */}
            <div className="w-full">
                <Pagination />
            </div>
        </div>
    )
}
export default SubjectsListpage;