import Image from 'next/image';
import Pagination from '@/components/pagination'
import Table from '@/components/table'
import Link from 'next/link';
 import TablesearchBar from '@/components/TablesearchBar'
import { examsData, role, subjectsData} from '@/lib/data';
import { type } from 'os';
import FormModel from '@/components/FormModel';
   type subjects = {
        id: string;
        subject: string;
         teacher: string;
        time: string;
        date: string;
       
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
            header:"Time",
            accessorKey:"time",
            className: "hidden md:table-cell"
        },
        {
            header:"Date",
            accessorKey:"date",
            className: "hidden md:table-cell"
        },
    {
            header:"Actions",
            accessorKey:"actions",
            className: "hidden md:table-cell"
            
        }
    ]
    
const  ExamListpage = () => {

        const renderRow = (exam:subjects ) => (
            <tr key={exam.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100 '>
                <td className='flex items-center gap-4  p-4'>
                <div className="">
                    <h3 className="font-semibold">{exam.subject}</h3>
                </div>
                </td>

                <td className="hidden md:table-cell"> {exam.teacher}</td>
                <td className="hidden md:table-cell"> {exam.time}</td>
                <td className=""> {exam.date}</td>
                <td className=" md:table-cell">
                    <div className="flex items-center gap-2 self-end" >
                        <Link href={`/list/subjects/${exam.id}`} className="text-blue-500">
                          <button className='w-7 h-7 flex items-center justify-center rounded-full bg-[#271288]'><Image src="/edit.png" alt='' width={16} height={16} ></Image></button>
                        </Link>
                  {role === "admin" && (
                        <FormModel table="Exams" type="Delete" id={exam.id} />
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
                <h1 className='hidden md:block  text-lg font-semibold'>All Exams</h1>
                <div className=''><TablesearchBar/>
                </div>
                <div className="flex items-center gap-4 self-end">
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/filter.png" alt="Add" width={14} height={14} /></button>
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/sort.png" alt="Add" width={14} height={14} /></button>
                     <FormModel table="Exams" type="Create" />
                     </div>
            </div>
            {/* || List  */}
            <div className="">
                <Table columns={Columns} renderRow ={renderRow} data ={examsData} />
            </div>
            {/* || pagination */}
            <div className="w-full">
                <Pagination />
            </div>
        </div>
    )
}
export default ExamListpage;