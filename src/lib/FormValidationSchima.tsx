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
          teachers: z.array(z.string()).nonempty("Select at least one teacher"),
         
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
           age: z.number().min(2, { message: 'Age must be at least 16' }),
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
               .max(8, { message: 'Password must be at most 8 characters long' }),
               FirstName:z.string()
               .min(1 , { message: 'First Name must be at least 1 character long' }),
               LastName:z.string()
               .min(1 , { message: 'Last Name must be at least 1 character long' }),
               phoneNumber: z.string()
               .min(9, { message: 'Phone Number must be at least 10 characters long' })
               .max(15, { message: 'Phone Number must be at most 15 characters long' }),
               sex: z.enum(['male', 'female'], { message: 'sex is required' }),
               age: z.number().min( 22, { message: 'Age must be at least 22' }),
             
               Address:z.string()
               .min(5, { message: 'Address must be at least 5 characters long' })
               .max(15, { message: 'Address must be at most 15 characters long' }),
               BloodType :z.string()
               .min(1,{message:'required'}),
     });
       
      export type TeacherSchema = z.infer<typeof teacherSchema>