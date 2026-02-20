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
    });
      await prisma.student.create({
         data:{
         username:data.UserName,
         address:data.Address,
         age:Number(data.age),
         email:data.email,
         firstName:data.FirstName,
         lastName:data.LastName,
         phoneNumber:data.phoneNumber,
         DateOfBirth:new Date(data.dateOfBirth),
         sex:data.sex,
         matricule:data.MatriculeNo,
         id:clerkId.id,
         department:{
           connect:{id:data.department}
         }, 
         level:{ 
            connect:{id:Number(data.level)}
         }
         }
         
      }) 
      
    // 3️⃣ Send welcome email with credentials
    await fetch("http://localhost:3000/api/send-mail"
, {
method: "POST",
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify({
  to: data.email,
  subject: "Student Account details",
  html: `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:30px 0;">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">

            <!-- School Logo -->
            <tr>
              <td align="center" style="padding:20px;">
                <img
                  src=""
                  alt="School Logo"
                  width="120"
                  style="display:block;"
                />
              </td>
            </tr>

            <!-- Header -->
            <tr>
              <td style="padding:20px; text-align:center;">
                <h2 style="margin:0; color:#1f2937;">
                  Welcome to LAHIBA 🎓
                </h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:20px; color:#374151; font-size:14px; line-height:1.6;">
                <p>
                  Dear <strong>${data.FirstName}</strong>,
                </p>

                <p>
                  We are pleased to inform you that your student account has been successfully created.
                  Below are your login details for the school portal:
                </p>

                <!-- Student Info -->
                <table width="100%" cellpadding="8" cellspacing="0" style="background:#f9fafb; border:1px solid #e5e7eb;">
                  <tr>
                    <td><strong>Username:</strong></td>
                    <td>${data.UserName}</td>
                  </tr>
                  <tr>
                    <td><strong>Temporary Password:</strong></td>
                    <td>${data.password}</td>
                  </tr>
                </table>

                <p style="margin-top:20px;">
                  For security reasons, please change your password after logging in for the first time.
                </p>

                <!-- Portal Button -->
                <p style="text-align:center; margin:30px 0;">
                  <a
                    href="https://yourschoolwebsite.com/login"
                    style="
                      background:#0f766e;
                      color:#ffffff;
                      padding:12px 24px;
                      text-decoration:none;
                      border-radius:5px;
                      font-weight:bold;
                      display:inline-block;
                    "
                  >
                    Access Student Portal
                  </a>
                </p>

                <p>
                  If you need any assistance, please contact the school administration.
                </p>

                <p>
                  Kind regards,<br />
                  <strong>School Administration</strong><br />
                  Lahiba University
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:15px; background:#f1f5f9; text-align:center; font-size:12px; color:#6b7280;">
                <p style="margin:0;">
                  🌐 <a href="https://yourschoolwebsite.com" style="color:#0f766e; text-decoration:none;">
                    www.yourschoolwebsite.com
                  </a>
                </p>
                <p style="margin:5px 0 0;">
                  📞 +123 456 7890 | ✉️ info@yourschoolwebsite.com
                </p>
                <p style="margin:5px 0 0;">
                  © 2026 Your School Name. All rights reserved.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `,
})

});

       return { successMessage:true , errorMessage:false };
    }
    catch(error){
      console.log(error +" << error from creating student ");
      console.log(data.level +" << level data ");
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
    });
   await prisma.teacher.create({
         data:{
         username:data.UserName,
         address:data.Address,
         email:data.email,
         firstName:data.FirstName,
         lastName:data.LastName,
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
          // 3️⃣ Send welcome email with credentials
    await fetch("http://localhost:3000/api/send-mail"
, {
method: "POST",
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify({
  to: data.email,
  subject: "Teacher Account details",
  html: `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:30px 0;">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">

            <!-- School Logo -->
            <tr>
              <td align="center" style="padding:20px;">
                <img
                  src=""
                  alt="School Logo"
                  width="120"
                  style="display:block;"
                />
              </td>
            </tr>

            <!-- Header -->
            <tr>
              <td style="padding:20px; text-align:center;">
                <h2 style="margin:0; color:#1f2937;">
                  Welcome to LAHIBA 🎓
                </h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:20px; color:#374151; font-size:14px; line-height:1.6;">
                <p>
                  Dear <strong>${data.FirstName}</strong>,
                </p>

                <p>
                  We are pleased to inform you that your teacher account has been successfully created.
                  Below are your login details for the school portal:
                </p>

                <!-- Student Info -->
                <table width="100%" cellpadding="8" cellspacing="0" style="background:#f9fafb; border:1px solid #e5e7eb;">
                  <tr>
                    <td><strong>Username:</strong></td>
                    <td>${data.UserName}</td>
                  </tr>
                  <tr>
                    <td><strong>Temporary Password:</strong></td>
                    <td>${data.password}</td>
                  </tr>
                </table>

                <p style="margin-top:20px;">
                  For security reasons, please change your password after logging in for the first time.
                </p>

                <!-- Portal Button -->
                <p style="text-align:center; margin:30px 0;">
                  <a
                    href="https://yourschoolwebsite.com/login"
                    style="
                      background:#0f766e;
                      color:#ffffff;
                      padding:12px 24px;
                      text-decoration:none;
                      border-radius:5px;
                      font-weight:bold;
                      display:inline-block;
                    "
                  >
                    Access Teacher Portal
                  </a>
                </p>

                <p>
                  If you need any assistance, please contact the school administration.
                </p>

                <p>
                  Kind regards,<br />
                  <strong>School Administration</strong><br />
                  Lahiba University
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:15px; background:#f1f5f9; text-align:center; font-size:12px; color:#6b7280;">
                <p style="margin:0;">
                  🌐 <a href="https://yourschoolwebsite.com" style="color:#0f766e; text-decoration:none;">
                    www.yourschoolwebsite.com
                  </a>
                </p>
                <p style="margin:5px 0 0;">
                  📞 +123 456 7890 | ✉️ info@yourschoolwebsite.com
                </p>
                <p style="margin:5px 0 0;">
                  © 2026 Your School Name. All rights reserved.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `,
})

});
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
    });
     await prisma.parent.create({
       data:{
          firstName:data.FirstName, 
          lastName:data.LastName,
          email:data.email,
          phoneNumber:data.phoneNumber,
          address:data.Address,
          username:data.UserName,
          sex:data.sex,
          id:clerkId.id,
          students:{
            connect: data.studentName?.split(",").map((studentId:string) =>({id:studentId.trim()}))
          }
        }
      })
          // 3️⃣ Send welcome email with credentials
    await fetch("http://localhost:3000/api/send-mail"
, {
method: "POST",
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify({
  to: data.email,
  subject: "Parent Account details",
  html: `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:30px 0;">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">

            <!-- School Logo -->
            <tr>
              <td align="center" style="padding:20px;">
                <img
                  src=""
                  alt="School Logo"
                  width="120"
                  style="display:block;"
                />
              </td>
            </tr>

            <!-- Header -->
            <tr>
              <td style="padding:20px; text-align:center;">
                <h2 style="margin:0; color:#1f2937;">
                  Welcome to LAHIBA 🎓
                </h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:20px; color:#374151; font-size:14px; line-height:1.6;">
                <p>
                  Dear <strong>${data.FirstName}</strong>,
                </p>

                <p>
                  We are pleased to inform you that your Parent account has been successfully created.
                  Below are your login details for the school portal, where you can monitor your child's academic progress:
                </p>

                <!-- Student Info -->
                <table width="100%" cellpadding="8" cellspacing="0" style="background:#f9fafb; border:1px solid #e5e7eb;">
                  <tr>
                    <td><strong>Username:</strong></td>
                    <td>${data.UserName}</td>
                  </tr>
                  <tr>
                    <td><strong>Temporary Password:</strong></td>
                    <td>${data.password}</td>
                  </tr>
                </table>

                <p style="margin-top:20px;">
                  For security reasons, please change your password after logging in for the first time.
                </p>

                <!-- Portal Button -->
                <p style="text-align:center; margin:30px 0;">
                  <a
                    href="https://yourschoolwebsite.com/login"
                    style="
                      background:#0f766e;
                      color:#ffffff;
                      padding:12px 24px;
                      text-decoration:none;
                      border-radius:5px;
                      font-weight:bold;
                      display:inline-block;
                    "
                  >
                    Access Parent Portal
                  </a>
                </p>

                <p>
                  If you need any assistance, please contact the school administration.
                </p>

                <p>
                  Kind regards,<br />
                  <strong>School Administration</strong><br />
                  Lahiba University
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:15px; background:#f1f5f9; text-align:center; font-size:12px; color:#6b7280;">
                <p style="margin:0;">
                  🌐 <a href="https://yourschoolwebsite.com" style="color:#0f766e; text-decoration:none;">
                    www.yourschoolwebsite.com
                  </a>
                </p>
                <p style="margin:5px 0 0;">
                  📞 +123 456 7890 | ✉️ info@yourschoolwebsite.com
                </p>
                <p style="margin:5px 0 0;">
                  © 2026 Your School Name. All rights reserved.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `,
})

});
      return { successMessage:true , errorMessage:false };
    } catch(error){
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