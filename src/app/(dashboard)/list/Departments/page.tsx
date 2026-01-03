import Image from 'next/image';
import Pagination from '@/components/pagination'
import Table from '@/components/table'
import Link from 'next/link';
 import TablesearchBar from '@/components/TablesearchBar'
 import FormModel from '@/components/FormModel';
import { role, DepartmentsData} from '@/lib/data';
import { type } from 'os';
import { Department, Subject, Teacher } from '@prisma/client';
import prisma from '@/lib/prisma';
import FormsContainer from '@/components/FormsContainer';
   type DepartmentList = Department & {supervisor:Teacher}
    const Columns = [
        {
            header:"Department",
            accessorKey:"info"
        },
        {
            header:"Supervisor",
            accessorKey:"supavisor",
            className: "hidden md:table-cell"
            
        },
    {
            header:"Actions",
            accessorKey:"actions",
            className: "hidden md:table-cell"
            
        }
    ]
    const renderRow = (department:DepartmentList) => (

            <tr key={department.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100 '>
                <td className='flex items-center gap-4  p-4'>
                <div className="">
                    <h3 className="font-semibold">{department.name}</h3>
                </div>
                </td>
             <td className="hidden md:table-cell"> 
                    { department.supervisor?.firstName !==undefined ||department.supervisor?.lastName!==undefined?
                     department.supervisor?.firstName+ ' ' + department.supervisor?.lastName :"-----------"}</td> 
         
                <td className=" md:table-cell">
                    <div className="flex items-center gap-2 self-end" >
                    
                  {role === "admin" && (
                     <>
                    <FormsContainer table='Department' type='Update' id={department.id}  data={department}/>
                    <FormsContainer table='Department' type='Delete' id={department.id} data={department} />
                    </>
                    )}
                    </div>
                </td>
            </tr>
        )
const  DepartmentsListpage = async(
    {searchParams
    }:{searchParams:Promise<{[key:string]:string|undefined}>}
    
) => {
     const [DepartmentData , count] =await prisma.$transaction([
         prisma.department.findMany({
        
           select: {
        id: true,
        name: true,
        supervisor: true,
       

        
        },
         }),
         prisma.department.count()
     ])
    const params = await searchParams;
    const {page ,...qouryParams} =params;
    const p = page?parseInt(page):1;
    const roles = await role();
    return (
        /* Student Page */
        /* Right hand side */
        <div className=" flex-1 bg-white p-4 rounded-md m-4 mt-0 h-full " >
            {/* || top section */}
            <div className="flex flex-col md:flex-row gap-4  items-center md:w-auto justify-between ">
                <h1 className='hidden md:block  text-lg font-semibold'>All Departments </h1>
                <div className=''><TablesearchBar/>
                </div>
                <div className="flex items-center gap-4 self-end">
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/filter.png" alt="Add" width={14} height={14} /></button>
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/sort.png" alt="Add" width={14} height={14} /></button>
                     { roles === "admin" && <FormsContainer type='Create' table='Department' />}    
                     </div>
            </div>
            {/* || List  */}
            <div className="">
                <Table columns={Columns} renderRow ={renderRow} data ={DepartmentData} />
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
export default DepartmentsListpage;