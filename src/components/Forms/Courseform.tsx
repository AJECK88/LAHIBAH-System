"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Input from "@/components/input"
import { useForm } from "react-hook-form"
import { CourseSchema, courseSchema } from "@/lib/FormValidationSchima"
import { CreateCourse, UpdateCourse } from "@/lib/actions"
import Select from "react-select"
import {
  Dispatch,
  SetStateAction,
  startTransition,
  useActionState,
  useEffect,
} from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

const CourseForm = ({
  type,
  data,
  SetOpen,
  relatedData,
}: {
  type: "Create" | "Update";
  data?: any ;
   hidden:any
   relatedData?:any;
  SetOpen: Dispatch<SetStateAction<boolean>>
 
}) => {
  const router = useRouter()

  const {
    setValue, 
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CourseSchema>({
    resolver: zodResolver(courseSchema),
  
  })
  const [state, formAction] = useActionState(type==='Create'? CreateCourse: UpdateCourse, {
    successMessage: false,
    errorMessage: false,
  })

  const onSubmit = handleSubmit((formData) => {
    startTransition(() => {
      formAction(formData)
    })
  })

  useEffect(() => {
    if (state.successMessage) {
      toast(
        `Course has been ${type === "Create" ? "created" : "updated"} successfully`,
        { type: "success" }
      )
      SetOpen(false)
      router.refresh()
    }
  }, [state, type, router, SetOpen])
 // Update the form defaults when editing data changes
  useEffect(() => {
  if (type === "Update" && data) {
    reset({
      CourseName: data.name,
      id: data.id,
      teachers: data.teachers?.map((t: any) => t.id) || []
    })
  }
}, [data, type, reset])

        const teachers= relatedData?.teachers?? []
  return (
    <form
      className="flex flex-col p-2 lg:p-4 justify-center items-center gap-4"
      onSubmit={onSubmit}
    >
      <h1 className="text-2xl font-semibold self-start">
        {type === "Create" ? "Create a New" : "Update"} Course
      </h1>

      <h2 className="text-gray-500 self-start text-sm font-semibold">
        Course Info
      </h2>

      <div className="grid lg:grid-cols-3 justify-between gap-5 w-full grid-cols-1">
        <Input
          type="text"
          name="CourseName"
          id="CourseName"
          register={register}
          errors={errors.CourseName}
          label="Course Name"
          Placeholder="Enter Course Name"
        />
 

         <div className="flex flex-col w-full">
        <label htmlFor="">Teacher</label>
 
<Select
  isMulti
  styles={{
    control: (base) => ({
      ...base,
      border: "2px solid #fef3c7"
    }),
  }}
  options={teachers.map((t: any) => ({
    value: t.id,
    label: `${t.firstName} ${t.lastName}`,
  }))}
  defaultValue={
    data?.teachers?.map((t: any) => ({
      value: t.id,
      label: `${t.firstName} ${t.lastName}`,
    })) || []
  }
  onChange={(selected) => {
    setValue("teachers", selected.map((s: any) => s.value))
  }}
/>


          </div> 
      </div>
        
      {state.errorMessage && (
        <span className="text-red-500">
          Try again something went wrong!.
        </span>
      )}

      <button className="bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded-sm w-full text-white">
        {type === "Create" ? "Create" : "Update"}
      </button>
    </form>
  )
}

export default CourseForm
