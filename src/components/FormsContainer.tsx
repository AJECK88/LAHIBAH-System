import { Prisma } from "@prisma/client";
import FormModel from "./FormModel"
import prisma from "@/lib/prisma";
import { tuple } from "zod";

export type FormsContainerProps =  {
      table :
   "Teacher"
  | "Student"
  | "Parent"
  | "Course"
  | "Department"
  | "announcement"
  |  "Lesson",
  
      type : 
      "Create" 
      | "Delete" 
      | "Update" ,
      data?: any,
      id?: string | number,
  }
const FormsContainer = async( {
    table,
    type ,
    data,
    id
}: FormsContainerProps)=>{
   let relatedData ={};

   if(type !== "Delete"){
    switch(table){
       
        case "Student":
          const StudentDepartmant = await prisma.department.findMany(
            {
              select:{
                id:true,
                name:true,
              }
            }
          )
           relatedData={departments:StudentDepartmant}
            
        break;
        case "Course" :
          const SubjectTeachers =  await prisma.teacher.findMany(
              {
                select:{
                    id :true,
                    firstName:true,
                    lastName:true,
                }
                
              }  

            )
            relatedData ={teachers :SubjectTeachers}
            
        
       break;
       case "Teacher":
         const TeacherCourses = await prisma.subject.findMany(
            {
              select:{
                id:true,
                name:true,
              }
            }
         )
         relatedData={teachers:TeacherCourses}
       break;
       case "Parent":
         const Students = await prisma.student.findMany(
            {
              where:{
                parentId: null  // fetch students without a parent,
              },
              select:{
                id:true,
                firstName:true,
                lastName:true,
                
              }
            }
         )
         relatedData={Students:Students}
       break;

       case "Department":
          const DepartmentTeachers = await prisma.teacher.findMany(
              {
                select:{
                    id :true,
                    firstName:true,
                    lastName:true,
                }
                
              })
            relatedData = {teachers :DepartmentTeachers}
        
       break;
   }
  }
     return (
       <div><FormModel  data={data} type={type} id={id} table={table} relatedData = {relatedData}/></div>
     )
}
export default FormsContainer