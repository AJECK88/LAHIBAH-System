          "use client"
          import { date, z } from "zod";
          import { zodResolver } from "@hookform/resolvers/zod";
          import Input from "@/components/input";
          import Image from "next/image";
          import { useForm } from "react-hook-form";
          import { Dispatch, SetStateAction, useEffect } from "react";
import { teacherSchema, TeacherSchema } from "@/lib/FormValidationSchima";
         

          const TeachersForms = ( 
            { type ,
               data,  
               SetOpen,
               relatedData,
                
        }:{
            type : 
          | "Create"
          | "Update",
          data?: any;
           relatedData?:any;
           SetOpen: Dispatch<SetStateAction<boolean>>
          }) => {
          const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
          } = useForm<TeacherSchema>({
          resolver: zodResolver(teacherSchema),

          });
          const SubmiteData = handleSubmit( (data) =>{
          
           useEffect(() => {
           if (type === "Update" && data) {
             reset({
               FirstName: data.FirstName,
               LastName:data.LastName,
              
               /* department: data.department?.map((t: any) => t.id) || [] */
             })
           }
         }, [data, type, reset])
         
                 const department= relatedData?.teachers?? []
          })
          return (
          <form className="flex flex-col p-2 lg:p-4 justify-center items-center gap-4 " onSubmit={SubmiteData}>
          <h1 className="text-2xl font-semibold self-start">{type === "Create" ? "Create A New" : "Update"} Teacher</h1>
          {/* Top */}
          <h2 className="text-gray-500 self-start tex-sm font-semibold">Authentification info</h2>
          <div className="grid lg:grid-cols-3 justify-between gap-5 w-full grid-cols-1">

          < Input 
          type="text" 
          name="UserName" 
          id="UserName"
          register={register}
            errors={ errors.UserName} 
            label="UserName"
            Placeholder="Enter username"/>
          < Input
            type="email"
            id="email"
            name="email"
            register={register}
            errors={ errors.email}
            label="Email"
            Placeholder="example@gmail.com" />

          < Input 
          name="password"
          id="password"
          type="password"
          register={register} 
          errors={ errors.password} 
          label="Password" 
          Placeholder=" password"
          />

          </div>
          <h2 className="self-start text-sm font-semibold text-gray-500">personal Info</h2>
          {/* Buttom */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-between  items-center ">
          {/* row 1 */} 
          < Input 
          type="text"
          name="FirstName"
          id="FirstName"
          register={register}  
          errors={ errors.FirstName}
          label="First Name"
          Placeholder=" first name"
          />

          <Input
          type="text"
          name="LastName"
          id="LastName"
          register={register}
          errors={ errors.LastName} 
          label="Last Name" 
          Placeholder=" last name" 
          />
          < Input 
          type="number" 
          name="phoneNumber"
          id="phoneNumber"
          register={register}  
          errors={ errors.phoneNumber}  
          label="Phone" 
          Placeholder=" phone number"/>

          {/* row 2 */}
          <Input
          type="text"
          name="Address"
          id="Address"
          register={register}
          errors={ errors.Address} 
          label="Address" 
          Placeholder=" address" 
          />
          <Input
          type="text"
          name="BloodType"
          id="BloodType"
          register={register}
          errors={ errors.BloodType} 
          label="Blood type" 
          Placeholder="A+" 
          />
          <Input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          register={register}
         
         
          label="Date Of Birth" 
          Placeholder=" date of birth" 
          />
          {/* row 3 */}
          <div className="flex flex-col w-full">
          <label htmlFor="">Gender</label>
          <select className="h-[40px] border-2 border-amber-100 w-full p-2 " {...register('sex')} defaultValue="male">
          <option value="male">Male</option>
          <option value="female">Female</option>
          </select>
          {errors.sex?.message && <span className="text-sm text-red-600 font-light">{errors.sex?.message.toString()}</span>}
          </div>
          <div className="flex flex-col lg:col-start-3 w-full">
      <label
  htmlFor="image"
  className="flex items-center gap-2 cursor-pointer border p-2 rounded-lg hover:bg-gray-100"
>
  <Image src="/upload.png" alt="Upload icon" width={40} height={40} />
  <span>Upload Image</span>
</label>

<input
  type="file"
  id="image"
  className="hidden"
  onChange={(e) => {
    const file = e.target.files?.[0]
    if (file) {
      console.log("Selected file:", file.name)
    }
  }}
/>

          
          </div>
          </div>
          <button className="bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-sm w-full text-white">{type === "Create" ? "Create" : "Update"}</button>
          </form>
          );
          };

          export default TeachersForms;

