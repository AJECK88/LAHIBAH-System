"use cle"
import Input from "@/components/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { error } from "node:console"
import { resolve } from "node:path"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import z from "zod"
const LessonSchema = z.object ({
    title:z.string(),
    description:z.string().min(4,('Discription should be more than 3 words'))
     
})
 type Input =z.infer<typeof LessonSchema >

  const   LessonForm = (
     {type,
     relatedData,
     SetOpen,
     data}:{
        type: 
        'Create' | 'Update', 
        data:any , 
        SetOpen:Dispatch<SetStateAction<boolean>> 
        relatedData:any
     }
  ) => {
    const {
         register , 
         formState:{errors}
         } = useForm<Input>({
            resolver :zodResolver(LessonSchema)
         })
    
    
    return (
        <div>
            <form>
       < Input
            type="Hearding"
            id="Hearding"
            name="Hearding"
            register={register}
            errors={errors.title}
            label="Heading"
            Placeholder="Enter Supervisor Name" />
          <button className="bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-sm w-full text-white">{type === "Create" ? "Create" : "Update"}</button>

        </form>
        </div>
    )
}
export default LessonForm