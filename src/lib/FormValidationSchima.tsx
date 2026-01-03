import z from "zod"
import { id } from "zod/locales"
import { zodResolver } from "@hookform/resolvers/zod";
import { max } from "moment";
 
    /* || zod auth for courseSchema validation */
 export  const courseSchema = z.object({
           id :z.number().optional(),
          CourseName: z.string()
          .min(3, { message: 'Name must be at least 3 characters long' })
          .max(20, { message: 'Name must be at most 20 characters long' }),
          teachers: z.array(z.string()).optional(),
         
         })

         export type CourseSchema = z.infer<typeof courseSchema>
 /* || zod auth StudentSchema validation */
 export const  studentSchma = z.object({
           UserName: z.string()
           .min(3, { message: 'Name must be at least 3 characters long' })
           .max(20, { message: 'Name must be at most 20 characters long' }),
           email: z.string().email({ message: 'Invalid email address' }),
           password: z.string()
           .min(4, { message: 'Password must be at least 4 characters long' })
           .max(8, { message: 'Password must be at most 8 characters long' }),
           FirstName:z.string()
           .min(1 , { message: 'First Name must be at least 1 character long' }),
           LastName:z.string()
           .min(1 , { message: 'Last Name must be at least 1 character long' }),
           phoneNumber: z.string().regex(/^\d{9}$/, { message: "Invalid phone number" })
          .min(9, { message: 'Phone Number must be at least 10 characters long' })
           .max(15, { message: 'Phone Number must be at most 15 characters long' }),
           sex: z.enum(['Male', 'Female'], { message: 'sex is required' }),
           age: z.string().min(2, { message: 'Age must be at least 16' }),
           MatriculeNo:z.string(),
           department :z.string()
          .min(1, {message:"Department is requird"}),
           Address:z.string()
           .min(5, { message: 'Address must be at least 5 characters long' })
           .max(15, { message: 'Address must be at most 15 characters long' }),
           dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
           message: "Invalid date",
  }),
        
            id :z.string().optional()
       })
 
 
     export type StudentSchema = z.infer<typeof studentSchma>;

     /* || Auth for TeacherSchema validation */
       export const teacherSchema = z.object({
               UserName: z.string()
               .min(3, { message: 'Name must be at least 3 characters long' })
               .max(20, { message: 'Name must be at most 20 characters long' }),
               email: z.string().email({ message: 'Invalid email address' }),
               password: z.string()
               .min(4, { message: 'Password must be at least 4 characters long' })
               .max(10, { message: 'Password must be at most 8 characters long' }),
               FirstName:z.string()
               .min(1 , { message: 'First Name must be at least 1 character long' }),
               Courses:z.array(z.number()).nonempty({message:"At least one course must be selected"}).optional(),
               LastName:z.string()
               .min(1 , { message: 'Last Name must be at least 1 character long' }),
               phoneNumber: z.string()
               .min(9, { message: 'Phone Number must be at least 10 characters long' })
               .max(15, { message: 'Phone Number must be at most 15 characters long' }),
               sex: z.enum(['Male', 'Female'], { message: 'sex is required' }),
               teachersId  :z.string().min(4, { message: 'TeacherID must be at most 10 characters long' }),
               Address:z.string()
               .min(5, { message: 'Address must be at least 5 characters long' })
               .max(15, { message: 'Address must be at most 15 characters long' }),
               BloodType:z.string()
               .min(1,{message:'required'}),
              dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
              message: "Invalid date",
              }),
               id :z.string().optional()
               
     });
       
      export type TeacherSchema = z.infer<typeof teacherSchema>

      /* || Auth for ParentSchema validation */
            export   const parentschema = z.object({
          UserName: z.string()
          .min(3, { message: 'Name must be at least 3 characters long' })
          .max(20, { message: 'Name must be at most 20 characters long' }),
          email: z.string().email({ message: 'Invalid email address' }),
          password: z.string()
          .min(4, { message: 'Password must be at least 4 characters long' })
          .max(8, { message: 'Password must be at most 8 characters long' }),
          FirstName:z.string()
          .min(1 , { message: 'First Name must be at least 1 character long' }),
          LastName:z.string()
          .min(1 , { message: 'Last Name must be at least 1 character long' }),
          phoneNumber: z.string()
          .min(9, { message: 'Phone Number must be at least 10 characters long' })
          .max(15, { message: 'Phone Number must be at most 15 characters long' }),
          sex: z.enum(['Male', 'Female'], { message: 'sex is required' }),
          Address:z.string()
          .min(5, { message: 'Address must be at least 5 characters long' })
          .max(15, { message: 'Address must be at most 15 characters long' }),
          studentName: z.string()
          .min(1, { message: 'Student Name is required' }),
          BloodType: z.string()
          .min(1, { message: 'Blood Type is required' }),
          id:z.string().optional()
 })
    export  type ParentSchema = z.infer<typeof parentschema>

     export  const departmentschema = z.object({
          DepartmentName: z.string()
          .min(3, { message: 'Name must be at least 3 characters long' })
          .max(20, { message: 'Name must be at most 20 characters long' }),
           Supervisor: z.string().optional(),
           id:z.string().optional(),
         })
        export  type DepartmentSchema = z.infer<typeof departmentschema>

    export  const  announcementschema  = z.object({
          AnnouncementTitle: z.string()
          .min(3, { message: 'Title must be at least 3 characters long' }),
          AnnouncementMessage: z.string()
          .min(30, { message: 'This Information is require "words most be more than 20"' }),
           id:z.string().optional(),
         })


     export     type AnnouncementSchema = z.infer<typeof announcementschema>