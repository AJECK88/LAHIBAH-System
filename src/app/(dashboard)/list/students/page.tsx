import Image from 'next/image';
import Pagination from '@/components/pagination'
import Table from '@/components/table'
import Link from 'next/link';
 import TablesearchBar from '@/components/TablesearchBar'
import {role} from '@/lib/data';
import { type } from 'os';
import FormModel from '@/components/FormModel';
import { Department, Grade, Prisma, Student } from '@prisma/client';
import prisma from '@/lib/prisma';
import { count } from 'console';
import { skip } from '@prisma/client/runtime/library';
import { Items_Per_Page } from '../../Settings';
import { Key } from 'react';
import { NoResultFound } from '@/components/NoResult';
import { promises } from 'dns';
import { string } from 'zod/v4/core/regexes.cjs';
import { object } from 'zod';
   type StudentList  = Student & {department:Department, grade:Grade}
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
            header:"Department",
            accessorKey:"department",
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

       const renderRow = (student: StudentList) => (
            <tr key={student.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-gray-100 '>
                <td className='flex items-center gap-4  p-4'><Image className='md:hidden xl:block w-10 h-10 rounded-full object-cover' alt='' width={40} height={40} src={student.image || student.sex ==="Female"?"/FemaleIcon.png":"/maleIcon.png"} />
                <div className="">
                    <h3 className="font-semibold">{student.firstName+" "+ student.lastName}</h3>
                    <p className="text-xs text-gray-400 font-semibold ">{student.email}</p>
                </div>
                </td>
                <td className="hidden md:table-cell">{student.sex}</td>
                <td className="hidden md:table-cell">{student.department.name}</td>
                <td className="hidden md:table-cell">{student.phoneNumber}</td>
                <td className="hidden md:table-cell">{student.address}</td>
                <td className=" md:table-cell">
                    <div className="flex items-center gap-2 self-end" >
                        <Link href={`/list/students/${student.id}`} className="text-blue-500">
                          <button className='w-7 h-7 flex items-center justify-center rounded-full bg-[#271288]'><Image src="/view.png" alt='' width={16} height={16} ></Image></button>
                        </Link>
                  {role === "admin" && (
                    <>  <FormModel table="Student" type="Update" id={student.id} />
                          <FormModel table="Student" type="Delete" id={student.id} />
                    </>
                    )}
                    </div>
                </td>
            </tr>
        )

const  StudentListpage = async({
    searchParams,
}:{searchParams :Promise<{[key:string]:string|undefined}>

})=> {
      const params = await searchParams
       const {page,...quoryParams} = params;
       const p =page? parseInt(page):1
        /* || url params conditions */
        const query: Prisma.StudentWhereInput ={};
        if(quoryParams){
            for(const [key , value] of Object.entries(quoryParams)){
               if(value!== undefined && value !==""){
                switch (key){
                    case "search":
                      query.OR =[{firstName :{ contains: value  }},
                                 {lastName:{contains:value}}

                      ] 
                     
                   break
               
            }
        }
        }
       
    }
        const[ studentData, count ]= await prisma.$transaction([
            prisma.student.findMany(
                {
              where:query,
            include:{
                department:true,
                grade:true
                   
            }, 
             take:Items_Per_Page,
             skip : Items_Per_Page*(p-1)
        }
      
         
            ),
            prisma.student.count({ where: query })
        ]
        
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
                     <FormModel table="Student" type="Create" />
                     </div>
            </div>
            {/* || List  */}
            <div className={`${count==0?' flex items-center justify-center mt-4 h-[90vh]':""}`}>
             {count!==0 ? <Table columns={Columns} renderRow ={renderRow} data={studentData} />
              :<NoResultFound 
               Result='Student not Found !! please Input the right Name'/>
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
export default StudentListpage;