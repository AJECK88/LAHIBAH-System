import Image from 'next/image';
import Pagination from '@/components/pagination'
import Table from '@/components/table'
import Link from 'next/link';
import { role } from '@/lib/data';
 import TablesearchBar from '@/components/TablesearchBar'
import { teachersData } from '@/lib/data';
import { Items_Per_Page } from '../../Settings';
import prisma from '@/lib/prisma';
import { Teacher, Subject, Prisma } from '@prisma/client';
import FormModel from '@/components/FormModel';
import { promises } from 'dns';
import { NoResultFound } from '@/components/NoResult';
import FormsContainer from '@/components/FormsContainer';
import { date } from 'zod';
type TeacherList = Teacher & { courses: Subject[] }


    const Columns = [
        {
            header:"Info",
            accessorKey:"info"
        },
        {
            header:"Teacher ID",
            accessorKey:"teacherId ",
            className: "hidden md:table-cell"
            
        },
            {
            header:"Subjects",
            accessorKey:"subjects",
            className: "hidden md:table-cell"
            
        },
 /*            {
            header:"Classes",
            accessorKey:"classes",
            className: "hidden md:table-cell"
            
        }, */
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
    
    
        const renderRow = (teacher: TeacherList ) => (
            <tr key={teacher.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100 '>
                <td className='flex items-center gap-4  p-4'><Image className='md:hidden xl:block w-10 h-10 rounded-full object-cover' alt='' width={40} height={40} src={teacher.image || teacher.sex =="Female" ?"/FemaleIcon.png":"/maleIcon.png"} />
                <div className="">
                    <h3 className="font-semibold">{teacher.firstName +" " + teacher.lastName}</h3>
                    <p className="text-xs text-gray-500 hidden md:table-cell">{teacher.email}</p>
                </div>
                </td>

              <td className="hidden md:table-cell">{teacher.teachersId}</td>
                <td className="hidden md:table-cell">{teacher.courses.map(course => course.name).join(", ")}</td> 
                <td className="hidden md:table-cell">{teacher.phoneNumber}</td>
                <td className="hidden md:table-cell">{teacher.address}</td>
                <td className=" md:table-cell">
                    <div className="flex items-center gap-2 self-end" >
                        <Link href={`/list/teachers/${teacher.id}`} className="text-blue-500">
                          <button className='w-7 h-7 flex items-center justify-center rounded-full bg-[#271288]'><Image src="/view.png" alt='' width={16} height={16} ></Image></button>
                        </Link>
                  {role === "admin" && (
                    <>  <FormsContainer table="Teacher" type="Update" id={teacher.id} data={teacher}/>
                        <FormsContainer table="Teacher" type="Delete" id={teacher.id}  data={teacher}/>
                        
                    </>
                    )}
                    </div>
                </td>
            </tr>
        )

const  TeacherListpage = async({ 
    searchParams ,
}:{
   searchParams :Promise<{[key:string]: string | undefined}>;
 
}) => {
        const Params = await searchParams
        const {page, ...queryParams} = Params
        /* || checking if page ex */
       const p = page ? parseInt(page) :1;
      /* || uRL SEARCHE CONDITION */
       const query:Prisma.TeacherWhereInput={}
       if(queryParams){
        for( const [key, value] of Object.entries(queryParams)){
            if(value !== undefined  && value !== 
                ""
             ){
                switch(key){
                    case "search":
                        query.OR= [
                            {lastName:{contains:value}},
                            {firstName:{contains:value}}
                    ]
                }
             }
        }

       }
   const [teachers , count ]= await prisma.$transaction([
    prisma.teacher.findMany({
where:query,
include:{
   courses:true
},
  take :Items_Per_Page,
  skip: Items_Per_Page*(p-1)
}),
  prisma.teacher.count({where:query})

]);
 
    return (
        /* Teacher Page */
        /* Right hand side */
        <div className=" flex-1 bg-white p-4 rounded-md m-4 mt-0 " >
            {/* || top section */}
            <div className=" mb-5 flex flex-col md:flex-row gap-4  items-center md:w-auto justify-between ">
                <h1 className='hidden md:block  text-lg font-semibold'>All Teachers </h1>
                
                <div className=''><TablesearchBar/>
                </div>
                <div className="flex items-center gap-4 self-end">
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/filter.png" alt="Add" width={14} height={14} /></button>
                     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100"><Image src="/sort.png" alt="Add" width={14} height={14} /></button>
                      <FormsContainer table="Teacher" type="Create"  />
                     </div>
            </div>
            {/* || List  */}
            <div className={`${count== 0?' flex items-center justify-center mt-4 h-[90vh]':""}`}>
           { count !==0? <Table columns={Columns} renderRow={renderRow} data={teachers} />
          :<NoResultFound Result='Teacher not Found !! please Input the right Name'/> 
        }
            </div>
            {/* || pagination */}
            <div className="w-full">{ count!==0
             ?
                <Pagination  
                page={p}
                count={count}
                /> 
                :
                ""
                }
            </div>
        </div>
    )
}
export default TeacherListpage;