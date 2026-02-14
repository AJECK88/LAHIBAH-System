import Image from 'next/image';
import Table from '@/components/table'
 import TablesearchBar from '@/components/TablesearchBar'
import prisma from '@/lib/prisma';
import { Exam, Prisma, Subject } from '@prisma/client';
import { Items_Per_Page } from '../../Settings';
import SeedfileInput from '@/components/SeedfileInput';
import { UploadExam } from '@/app/api/seeds/exams/upload/route';
   type  examList = Exam & {course:Subject  & {teachers:{firstName:string , lastName:string}[]}} 
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
        }
    ]
    
        const renderRow = (exam:examList ) => (
            <tr key={exam.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100 '>
                <td className='flex items-center gap-4  p-4'>
                <div className="">
                    <h3 className="font-semibold">{exam.course.name}</h3>
                </div>
                </td>

                <td className="hidden md:table-cell"> {exam.course.teachers.map(teacher => teacher.firstName + " " + teacher.lastName).join(", ")}</td>
                <td className="hidden md:table-cell"> {exam.startDate.toLocaleTimeString()}</td>
                <td className=""> {exam.endDate.toLocaleDateString()}</td>
                <td className=" md:table-cell">
                   {/*  <div className="flex items-center gap-2 self-end" >
                        <Link href={`/list/subjects/${exam.id}`} className="text-blue-500">
                          <button className='w-7 h-7 flex items-center justify-center rounded-full bg-[#271288]'><Image src="/edit.png" alt='' width={16} height={16} ></Image></button>
                        </Link>
                  {role === "admin" && (
                        <FormModel table="Exams" type="Delete" id={exam.id} />
                    )}
                    </div> */}
                </td>
            </tr>
        )

const  ExamListpage = async(
   {searchParams}:
  {searchParams: Promise<{[key:string]:string|undefined}>}
) => { 
   const params = await searchParams;
   const {page , ...qouryParams} = params
   const p = page ? parseInt(page):1;
   const[examData , count]= await prisma.$transaction([
      prisma.exam.findMany({
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
        <div className=" flex-1 bg-white  rounded-md m-4 mt-0 h-full p-4" >
            {/* || top section */}
            <div className='flex md:flex  text-lg font-semibold bg-gray-300 h-12 items-center border-white'><h1 className='bg-white flex items-center h-full p-4 border-3 border-t-blue-500 border-r-blue-500  border-b-white border-l-white'>All Exams</h1></div> <br />
            <div className="flex flex-col md:flex-row gap-4  items-center md:w-auto justify-between">
             
                <div className="flex gap-2">
                    <button className='border-1 border-gray-500 p-2 cursor-pointer text-sm font-semibold text-gray-500'>PDF</button>
                    <button className='border-1 border-gray-500 p-2 cursor-pointer text-sm font-semibold text-gray-500'>Excel</button>
                </div>
                <div className=''><SeedfileInput type='Exam'/>
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
                <h1 className="text-lg font-semibold">{}Department</h1>
                <Table columns={Columns} renderRow ={renderRow} data ={examData} />

            </div>
            {/* || pagination */}
        {/*     <div className="w-inherit flex start">
                <Pagination 
                 page={p}
                 count={count}
                />
            </div> */}
            </div>
        </div>
    )
}
export default ExamListpage;