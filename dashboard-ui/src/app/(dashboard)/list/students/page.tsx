import Image from 'next/image';
import Pagination from '@/components/pagination'
import Table from '@/components/table'
import Link from 'next/link';
 import TablesearchBar from '@/components/TablesearchBar'
import { studentsData , role} from '@/lib/data';
import { type } from 'os';
   type Student = {
        id: string;
        name: string;
        photo:string;
        studentId: string;
        grade: string;
        class: string;
        phone: string;
        address: string;
    }
    const Columns = [
        {
            header:"Info",
            accessorKey:"info"
        },
        {
            header:"Matricule N°",
            accessorKey:"studentId",
            className: "hidden md:table-cell"
            
        },
            {
            header:"Grade",
            accessorKey:"grade",
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
    
const  StudentListpage = () => {

        const renderRow = (student: Student) => (
            <tr key={student.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100 '>
                <td className='flex items-center gap-4  p-4'><Image className='md:hidden xl:block w-10 h-10 rounded-full object-cover' alt='' width={40} height={40} src={student.photo} />
                <div className="">
                    <h3 className="font-semibold">{student.name}</h3>
                    <p className="text-xs text-gray-100 font-semibold ">{student.class}</p>
                </div>
                </td>
                <td className="hidden md:table-cell">{student.studentId}</td>
                <td className="hidden md:table-cell">{student.grade}</td>
                <td className="hidden md:table-cell">{student.phone}</td>
                <td className="hidden md:table-cell">{student.address}</td>
                <td className=" md:table-cell">
                    <div className="flex items-center gap-2 self-end" >
                        <Link href={`/list/students/${student.id}`} className="text-blue-500">
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
        <div className=" flex-1 bg-white p-4 rounded-md m-4 mt-0 " >
            {/* || top section */}
            <div className="flex flex-col md:flex-row gap-4  items-center md:w-auto justify-between ">
                <h1 className='hidden md:block  text-lg font-semibold'>All Students </h1>
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
                <Table columns={Columns} renderRow ={renderRow} data={studentsData} />
            </div>
            {/* || pagination */}
            <div className="w-full">
                <Pagination />
            </div>
        </div>
    )
}
export default StudentListpage;