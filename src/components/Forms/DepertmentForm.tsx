          "use client"
          import { date, z } from "zod";
          import { zodResolver } from "@hookform/resolvers/zod";
          import Input from "@/components/input";
          import Image from "next/image";
          import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, startTransition, useActionState, useEffect } from "react";
import { departmentschema, DepartmentSchema } from "@/lib/FormValidationSchima";
import Select from "react-select";
import { CreateDepartment, UpdateDepartment } from "@/lib/actions";
import { success } from "zod/v4-mini";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
          const StudentsForms = ( 
            {
              type ,
              data,
              relatedData,
              SetOpen
              }:{

            type :"Create"| "Update",
            data?: any
            relatedData:any
            SetOpen:Dispatch<SetStateAction<boolean>>
          }) => {
          const {
          register,
          setValue,
          reset,
          handleSubmit,
          formState: { errors },
          } = useForm<DepartmentSchema>({
          resolver: zodResolver(departmentschema),

          });

   /* || Using react Formaction to check if the form is sumited  */
            const [state ,FormAction ] = useActionState(type === "Create" ? CreateDepartment: UpdateDepartment,{
             successMessage:false,
             errorMessage:false
               
          })
          const SubmiteData = handleSubmit( (formData) =>{
            startTransition ( ()=> {
              FormAction(formData)
            })

          })
           const Route = useRouter()
          useEffect( ()=> {
             if(state.successMessage){
              toast.success(`Department ${type === "Create" ? "Created" : "Updated"} Successfully`, 
                {type:"success"})
              SetOpen(false)
              Route.refresh()
             }
          },[state, Route ,SetOpen, type])
          const teachers = relatedData?.teachers || [];
          useEffect( ()=> {
             if(type === "Update" && data){ 
              reset(
                {
                  DepartmentName: data.name,
                  Supervisor: data.supervisor?.id || "",
                  id: data.id
                }
              )
             }
          }, [data, type, setValue , Route , reset])

        

          return (
          <form className="flex flex-col p-2 lg:p-4 justify-center items-center gap-4 " onSubmit={SubmiteData}>
          <h1 className="text-2xl font-semibold self-start">{type === "Create" ? "Create A New" : "Update"} Department</h1>
          {/* Top */}
          <h2 className="text-gray-500 self-start tex-sm font-semibold">Department info</h2>
          <div className="grid lg:grid-cols-3 justify-between gap-5 w-full grid-cols-1">

          < Input 
          type="text" 
          name="DepartmentName" 
          id="DepartmentName"
          register={register}
            errors={ errors.DepartmentName} 
            label="Department Name"
            Placeholder="Enter Department Name"/>

    <div className="flex flex-col w-full">
            <label htmlFor="department">Select Supervisor</label>
            <select
              id="department"
              {...register("Supervisor")}
              className="h-10 border-2 border-amber-100 w-full p-2"
                defaultValue=""
            >
              <option value="" disabled>
                Select supervisor
              </option>
              {teachers.map((d: any) => (
                <option key={d.id} value={d.id}>
                  {d.firstName + " " + d.lastName}
                </option>
              ))}
            </select>

            {errors.Supervisor && (
              <span className="text-sm text-red-500">
                {errors.Supervisor.message}
              </span>
            )}
</div>

          </div>
          <button className="bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-sm w-full text-white">{type === "Create" ? "Create" : "Update"}</button>
          </form>
          );
          };

          export default StudentsForms;

