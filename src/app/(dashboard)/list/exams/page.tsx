import Image from 'next/image';
import Table from '@/components/table'
import prisma from '@/lib/prisma';
import { Exam, Prisma, Subject } from '@prisma/client';
import { Items_Per_Page } from '../../Settings';
import SeedfileInput from '@/components/Forms/SeedfileInput';
import ExamForm from '@/components/Forms/QUERYDB/ExamQueryForm';
import UserId, { role } from '@/components/user';
import Pagination from '@/components/pagination';
import { User } from '@clerk/nextjs/server';
   type  examList = Exam & {course:Subject} 
    const Columns = [
        {
            header:"Course Title",
            accessorKey:"info"
        },
      
        {
            header:"Invigilators",
            accessorKey:"students",
            className: "hidden md:table-cell"
            
        },
        {
            header:"Start Time",
            accessorKey:"Start_time",
        },
           {
            header:"End Time",
            accessorKey:"End_Time",
            className: "hidden md:table-cell"
        },
        {
            header:"Date",
            accessorKey:"date",
            
        }
    ]
    
        const renderRow = (exam:examList ) => (
            <tr key={exam.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100 '>
                <td className='flex items-center gap-4  p-4'>
                <div className="">
                    <h3 className="font-semibold">{exam.course.name}</h3>
                </div>
                </td>

                <td className="hidden md:table-cell"> {exam.Invigilator}</td>
                <td className=""> {exam.startDate.toLocaleTimeString()}</td>
                <td className="hidden md:table-cell"> {exam.endDate.toLocaleTimeString()}</td>
                <td className=""> {exam.endDate.toLocaleDateString()}</td>
            </tr>
        )

const  ExamListpage = async(
   {searchParams}:
  {searchParams: Promise<{[key:string]:string|undefined}>}
) => { 
  const userRole = await role();  
  const userId  = await  UserId()
  const levels = await prisma.level.findMany({
     select:{
         id:true,
         LevelName:true
     }
  });
  const departments = await prisma.department.findMany({
     select:{
         id:true,
         name:true
     }
  });
   const params = await searchParams;
   const {page , ...qouryParams} = params
   const p = page ? parseInt(page):1; 
//  filter the exams based on the query parameters
   let examFilter = {};
   if (userRole === "student") {
  examFilter = {
    // Filter exams to match the student's specific Level and Department
    examDepartments:{
                some:{
                department:{
                    students:{
                        some:{
                            id: String(userId)
                        }
                    }
                }
                }
                 
             }
  };
} else if (userRole === "teacher") {
  examFilter = {
        course:{
                    teachers:{
                        some:{
                            id:String(userId)
                        }
                    }
                }
            
  };
}

   const[examData , count]= await prisma.$transaction([
      prisma.exam.findMany({
            where:examFilter,
         include:{ 
             course:{
                 include:{
                     teachers:{
                         select:{
                             firstName:true,
                             lastName:true,
                         },
                     }, 
                
                 },
             },
             
         },
         take:Items_Per_Page,
         skip:Items_Per_Page*(p-1)
      }),
      prisma.exam.count()
   ])
    return (
        /* Student Page */
        /* Right hand side */
        <div className=" flex-1 bg-white  rounded-md m-4 mt-0 h-full p-4 w-full" >
            {/* || top section */}
            <div className='flex md:flex  text-lg font-semibold bg-gray-300 h-12 items-center border-white'><h1 className='bg-white flex items-center h-full p-4 border-3 border-t-blue-500 border-r-blue-500  border-b-white border-l-white'>All Exams</h1></div> <br />
           
            <div className="flex flex-col md:flex-row gap-4  items-center md:w-auto justify-between w-full">
                 <div className='flex flex-col w-full' >

                 <div className="flex gap-2">  
            { userRole === "student" &&
             <div className="flex gap-2">
                    <button className='border-1 border-gray-500 p-2 cursor-pointer text-sm font-semibold text-gray-500'>PDF</button>
                    <button className='border-1 border-gray-500 p-2 cursor-pointer text-sm font-semibold text-gray-500'>Excel</button>
                </div>
}
               {userRole ==="admin" && <ExamForm levels={levels} departments={departments} />}

                </div>
               {userRole === "admin" && <SeedfileInput type='Exam'/>}
                </div>
                    
                 
                <div className="flex items-center gap-4 self-end">
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/filter.png" alt="Add" width={14} height={14} /></button>
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/sort.png" alt="Add" width={14} height={14} /></button>
                  {/*    <FormsContainer table='Course' type="Create" /> */}
                     </div>
            </div>
            {/* || List  */}
            <div className="m-auto flex flex-col gap-4 ">
            <div className="mt-4">
                <Table columns={Columns} renderRow ={renderRow} data ={examData} />

            </div>
            {/* || pagination */}
            <div className="w-inherit flex items-center justify-center">
                <Pagination
                 page={p}
                 count={count}
                />
            </div>
            </div>
        </div>
    )
}
export default ExamListpage;