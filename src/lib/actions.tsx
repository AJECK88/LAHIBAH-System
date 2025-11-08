"use server"

import { revalidatePath } from "next/cache";
import { CourseSchema, StudentSchema, TeacherSchema, teacherSchema } from "./FormValidationSchima"
import prisma from "./prisma"
import { tr } from "zod/locales";
import { currentUser } from "@clerk/nextjs/server";
import { Console } from "console";
type currentState = {
    successMessage:boolean ;
    errorMessage:boolean
}
/* || Course section to creat update and delete */
export  const CreateCourse =  async( currentState :currentState, data: CourseSchema)  =>{
  try{ 
     await prisma.subject.create({
     data:{
         name: data.CourseName,
         teachers:{
             connect: data.teachers?.map((teacherId: string) => ({ id: teacherId })),
         }
     }
   });
/*    revalidatePath(" /list/courses") */
    return { successMessage:true , errorMessage:false };

  } catch(error){
    return { successMessage:false , errorMessage:true };

  }

};
export const UpdateCourse = async (
  currentState: currentState,
  data: CourseSchema
) => {
  try {
    await prisma.subject.update({
      where: {
        id: Number(data.id),
      },
      data: {
        name: data.CourseName,
        teachers: {
          set: [],
          connect: data.teachers?.map((id: string) => ({ id })),
        },
      },
    });

    return { successMessage: true, errorMessage: false };
  } catch (error) {
    return { successMessage: false, errorMessage: true };
  }
};



export const deletCourse = async(
  currentState:currentState,
  data : FormData
)=>{
  const id = data.get("id") as string
  try{
     await prisma.subject.delete({
     where: {
     id: parseInt(id),
     }
   });
   return { successMessage:true , errorMessage:false };
 
  } catch(error){
        return { successMessage:false , errorMessage:true };
  }

} /* || End */ 

  /* || student section to update , create and delete */
 export const  CreatStudent = async( currentState :currentState, data:StudentSchema)  =>{  
  try{
      await prisma.student.create({
         data:{
         username:data.UserName,
         address:data.Address,
         age:Number(data.age),
         email:data.email,
         firstName:data.FirstName,
         lastName:data.LastName,
         password:data.password,
         phoneNumber:data.phoneNumber,
         DateOfBirth:new Date(data.dateOfBirth),
         sex:data.sex,
         matricule:data.MatriculeNo,
         department:{
           connect:{id:data.department}
         } 
         
         }
         
      }) 
       return { successMessage:true , errorMessage:false };
    }
    catch(error){
       return { successMessage:false , errorMessage:true };
    }
 }
 export const deleteStudent = async(
  currentState:currentState,
  data : FormData
)=>{
  const id = data.get("id") as string
  try{
     await prisma.student.delete({
     where: {
     id: (id),
     }
   });
   return { successMessage:true , errorMessage:false };

 
  } catch(error){
        return { successMessage:false , errorMessage:true };
  }
}
export const  UpdateStudent = async( 
  currentState :currentState , 
  data :StudentSchema


)=>{
   try{
    await prisma.student.update({
      where: {
        id: (data.id),
      },
          data:{
         username:data.UserName,
         address:data.Address,
         age:Number(data.age),
         email:data.email,
         firstName:data.FirstName,
         lastName:data.LastName,
         password:data.password,
         phoneNumber:data.phoneNumber,
         DateOfBirth:new Date(data.dateOfBirth),
         sex:data.sex,
         matricule:data.MatriculeNo,
         department:{
           connect:{id:data.department}
         } 
         
         }

    });

    return { successMessage: true, errorMessage: false };
  } catch (error) {
    return { successMessage: false, errorMessage: true };
  }
};
/* || end */
/* || Teacher section to create , update and delete */
export const CreatTeache = async(currentState :currentState , data:TeacherSchema)=>{
  try {
   await prisma.teacher.create({
         data:{
         username:data.UserName,
         address:data.Address,
         email:data.email,
         firstName:data.FirstName,
         lastName:data.LastName,
         password:data.password,
         phoneNumber:data.phoneNumber,
         sex:data.sex,
         DateOfBirth:new Date(data.dateOfBirth),
         bloodGroup:data.BloodType,
         teachersId  :data.teachersId,
         courses:{
           connect: data.Courses?.map((courseId:any) => ({ id: courseId })),
         } 
         
         }
         
      }) 
      console.log("Teacher created successfully");
       return { successMessage:true , errorMessage:false };
    }
       catch(error){ 
        console.error("Error creating teacher:", error);  
        return( { successMessage:false , errorMessage:true } );   
       }
    
}
export const UpdateTeache = async (
  currentState:currentState
  , data:TeacherSchema

) =>{
  try{
    await prisma.teacher.update({
      where:{
        id:(data.id)
      },
      data:{
       username:data.UserName,
         address:data.Address,
         email:data.email,
         firstName:data.FirstName,
         lastName:data.LastName,
         password:data.password,
         phoneNumber:data.phoneNumber,
         sex:data.sex,
         DateOfBirth:new Date(data.dateOfBirth),
         bloodGroup:data.BloodType,
         teachersId  :data.teachersId,
         courses:{
          set:[],
           connect: data.Courses?.map((courseId:any) => ({ id: courseId }) ),
         } 

      }
      
    });
    
    return { successMessage:true , errorMessage:false };
  }
        catch(error){  
        return( { successMessage:false , errorMessage:true } );   
       }  
}

export const deleteTeacher = async(
   currentState:currentState,
    data:FormData
)=>{
  console.log("deleting teacher with data:", data);
 const id = data.get("id") as string
  try{
    await prisma.teacher.delete({
      where:{
        id:(id)
      }
    })
    return{ successMessage:true , errorMessage:false}
  } 
 catch(error){
        return{ successMessage:false , errorMessage:true
 }
}
}