import { Prisma } from "@prisma/client";
import FormModel from "./FormModel"
import prisma from "@/lib/prisma";
import { tuple } from "zod";

export type FormsContainerProps =  {
      table :
      "Teacher" 
      | "Student"
      | "Parent" 
      | "Result"
      | "Class" 
      | "Department"
      | "Attendance"
      | "announcement"
      | "Course"
      | "Assignments"
      | "Lessons"
      | "Exams",
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
       
    }
   }
     return (
       <div><FormModel  data={data} type={type} id={id} table={table} relatedData = {relatedData}/></div>
     )
}
export default FormsContainer