"use server"
import { clerkClient } from "@clerk/nextjs/server";
import type { CourseSchema, DepartmentSchema, ParentSchema , StudentSchema, TeacherSchema, teacherSchema } from "./FormValidationSchima"
import prisma from "./prisma"
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
     const client = await clerkClient();

    const clerkId = await client.users.createUser({
      username: data.UserName,

      emailAddress: [data.email],
      password: data.password,
      firstName: data.FirstName,
      lastName: data.LastName,
      publicMetadata: {
        role: "student",
      },
     skipPasswordChecks: true, 
    });
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
         id:clerkId.id,
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
    const client = await clerkClient();
    const id = data.get("id") as string



  try{
       // 1️⃣ Find student
  const student = await prisma.student.findUnique({
    where: { id:id },
  });
   
  if (!student || !student.id) {
    throw new Error("Student not found or not linked to Clerk");
  }
    await client.users.deleteUser(student.id);

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
        const client = await clerkClient();
  try {
    const clerkId = await client.users.createUser({
      username: data.UserName,
      emailAddress: [data.email],
      password: data.password,
      firstName: data.FirstName,
      lastName: data.LastName,
      publicMetadata: {
        role: "teacher",
      },
     skipPasswordChecks: true, 
    });
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
         teachersId :data.teachersId,
         id:clerkId.id,
         courses:{
           connect: data.Courses?.map((courseId:any) => ({ id: courseId })),
         } 
         
         }
         
      }) 
       return { successMessage:true , errorMessage:false };
    }
       catch(error){ 
        console.log(error)

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


 const id = data.get("id") as string
 const client = await clerkClient();
  try{
             // 1️⃣ Find teacher
  const teacher = await prisma.teacher.findUnique({
    where: { id:id },
  });
   
  if (!teacher || !teacher.id) {
    throw new Error("Student not found or not linked to Clerk");
  }
    await client.users.deleteUser(teacher.id);

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

/* || The parent section to Create , delet , and update */
 export const CreateParent = async(
  currentState :currentState,
  data : ParentSchema
)=>{
   const client = await clerkClient();
  try{
    const clerkId = await client.users.createUser({
      username: data.UserName,
      emailAddress: [data.email],
      password: data.password,
      firstName: data.FirstName,
      lastName: data.LastName,
      publicMetadata: {
        role: "teacher",
      },
     skipPasswordChecks: true, 
    });
     await prisma.parent.create({
       data:{
          firstName:data.FirstName, 
          lastName:data.LastName,
          email:data.email,
          phoneNumber:data.phoneNumber,
          address:data.Address,
          username:data.UserName,
          password:data.password,
          sex:data.sex,
          id:clerkId.id,
          students:{
            connect: data.studentName?.split(",").map((studentId:string) =>({id:studentId.trim()}))
          }
        }
      })
      return { successMessage:true , errorMessage:false };
    } catch(error){
      console.log(error +" << error from creating parent ");
      return { successMessage:false , errorMessage:true     
       } 
  }
}

export const UpdateParent = async(
  currentState :currentState,
  data : ParentSchema
)=>{
  try{
     await prisma.parent.update({
       where:{
          id:(data.id)
       },
       data:{
          firstName:data.FirstName, 
          lastName:data.LastName,
          email:data.email,
          phoneNumber:data.phoneNumber,
          address:data.Address,
          username:data.UserName,
          sex:data.sex,
          password:data.password, 
          students:{
            set:[],
            connect: data.studentName?.split(",").map((student:string)=> ({id:student.trim()}))
          }
        }
      })
      return { successMessage:true , errorMessage:false };
    } catch(error){
      return { successMessage:false , errorMessage:true } 
  }
       }
export const  deleteParent = async(
   currentState:currentState,
   data: FormData,
)=>{
   const  id = data.get("id") as string
   const client = await clerkClient();

   try{
  // 1️⃣ Find student
  const parent = await prisma.parent.findUnique({
    where: { id:id },
  });
   
  if (!parent || !parent.id) {
    throw new Error("Prarent not found or not linked to Clerk");
  }
    await client.users.deleteUser(parent.id);
    
    await prisma.parent.delete({
      where:{
        id:(id)
      }
    })

 return{ successMessage:true , errorMessage:false}
}
    
   catch(error){

    
      return {successMessage:false , errorMessage:true}
   }
}
/* || End */


/* || Creating , updating and Deleting Depertment function Action */
export const CreateDepartment = async(
   currentState:currentState,
   data:DepartmentSchema,

  )=>{
    try{
    await prisma.department.create({
       data:{
        name:data.DepartmentName,
        id: data.id,
        supervisor:{
          connect : {id:data.Supervisor}
       }
      }
    })
    return { successMessage:false , errorMessage:true } 
  }catch(error){
     return{ successMessage:true , errorMessage:false}
  }
 

}
 export const UpdateDepartment =async(
   currentState:currentState,
   data:DepartmentSchema,

)=>{
try {
  await prisma.department.update({
    where: {
      id: data.id,
    },
    data: {
      name: data.DepartmentName,
      supervisor: {
        connect: { id: data.Supervisor },
      },
    },
  });

  return { successMessage: true, errorMessage: false };
} catch (error) {
  console.log(error);
  return { successMessage: false, errorMessage: true };
}

}
export const DeleteDepartment = async(
   currentState:currentState,
   data:FormData
)=>{
   const id = data.get("id") as string
     try{
     await prisma.department.delete({
       where:{
        id:id
       }
     })
     return{ successMessage:true , errorMessage:false}
   
   }
   catch(error){
      return { successMessage:false , errorMessage:true } 

   }
}
/* || End */
 /* || Announcement action  */
 const CreateAnnouncement = async(
   currentState:currentState,
   data:any
 )=>{
   try{
      await prisma.announcement.create({
        data:{
          title:data.AnnouncementTitle,
          message:data.AnnouncementMessage,
          date:data.date,
         
        }
      })
      return { successMessage:true , errorMessage:false}
   }catch(error){
      return { successMessage:false , errorMessage:true }
   }
 }
 export { CreateAnnouncement } 
 
 const DeleteAnnouncement = async(
   currentState:currentState,
   data:FormData
)=>{
   const id = data.get("id") as string
     try{
     await prisma.announcement.delete({
       where:{
        id:(id)
       }
     })
     return{ successMessage:true , errorMessage:false}
   
   }
   catch(error){
      return { successMessage:false , errorMessage:true } 

   }
}
export { DeleteAnnouncement } 
 /* || End */