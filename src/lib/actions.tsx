"use server"

import { revalidatePath } from "next/cache";
import { CourseSchema } from "./FormValidationSchima"
import prisma from "./prisma"
import { get } from "http";
import { Teacher } from "@prisma/client";
type currentState = {
    successMessage:boolean ;
    errorMessage:boolean
}
export  const CreateCourse =  async( currentState :currentState, data: CourseSchema)  =>{
  try{ 
     await prisma.subject.create({
     data:{
         name: data.CourseName,
         teachers:{
             connect: data.teachers.map((teacherId: string) => ({ id: teacherId })),
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
          connect: data.teachers.map((id: string) => ({ id })),
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

}