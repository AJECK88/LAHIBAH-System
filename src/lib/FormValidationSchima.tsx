import z from "zod"
import { id } from "zod/locales"
 
 
 export  const courseSchema = z.object({
           id :z.number().optional(),
          CourseName: z.string()
          .min(3, { message: 'Name must be at least 3 characters long' })
          .max(20, { message: 'Name must be at most 20 characters long' }),
          teachers: z.array(z.string()).nonempty("Select at least one teacher"),
         
         })

         export type CourseSchema = z.infer<typeof courseSchema>
 