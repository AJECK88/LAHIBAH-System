          "use client"
          import { date, set, z } from "zod";
          import { zodResolver } from "@hookform/resolvers/zod";
          import Input from "@/components/input";
          import Image from "next/image";
          import { useForm } from "react-hook-form";
          import { Dispatch, SetStateAction, startTransition, use, useActionState, useEffect, useState } from "react";
import { teacherSchema, TeacherSchema } from "@/lib/FormValidationSchima";
import { CreatTeache, UpdateTeache } from "@/lib/actions";
import Select from "react-select";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
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
          setValue,
          register,
          handleSubmit,
          reset,
          formState: { errors },
          } = useForm<TeacherSchema>({
          resolver: zodResolver(teacherSchema),

          });
            /**
             * 📦 Preview image state
             */
            const [preview, setPreview] = useState<string | null>(null);
            /**
             * 
   *  Handle file input change for previewing uploaded image
   */
  useEffect(()=>{
   
})
    const Route = useRouter();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
    
  const [state , formAction] = useActionState ( type === "Create" ?  CreatTeache : UpdateTeache ,
    { successMessage:false , errorMessage:false }
  )
   const SubmiteData = handleSubmit( (formData) =>{
      startTransition(() => {
       formAction(formData)
    })
   })    
   useEffect(()=>{
    if(state.successMessage){
      toast(`Teacher has been ${type === "Create" ? "created" : "updated"} successfully`,{type:"success"})
      SetOpen(false)
       Route.refresh()
    }
   }, [state,  type, Route,SetOpen])        
           useEffect(() => {        
        if (type === "Update" && data) {
           let formatedDate = "";
           if(data.DateOfBirth){
     
      const ParsedData  = new Date(data.DateOfBirth);
      if (!isNaN(ParsedData.getTime())) {
       
        // Only format valid date
        formatedDate = ParsedData.toISOString().split("T")[0]; 
       
        
      }
    }
          reset({
        UserName:data.username,
        Address:data.address,
         email:data.email,
        FirstName:data.firstName,
        LastName:data.lastName,
         password:data.password,
         phoneNumber:data.phoneNumber,
        sex:data.sex,
        teachersId:data.teachersId,
        BloodType:data.bloodGroup,
        dateOfBirth: formatedDate,
         id:data.id,
         Courses:data.Courses?.map((t: any) => t.id) || []
              
               /* department: data.department?.map((t: any) => t.id) || [] */
             })
           }
         }, [data, type, reset])
           const Course= relatedData?.teachers?? []  
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
          errors={errors.BloodType} 
          label="Blood type" 
          Placeholder="A+" 
          />
          <Input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          register={register}
          errors={ errors. dateOfBirth}
          label="Date Of Birth" 
          Placeholder=" date of birth" 
          />
          {/* row 3 */}
          <div className="flex flex-col w-full">
          <label htmlFor="">Gender</label>
          <select className="h-[40px] border-2 border-amber-100 w-full p-2 " {...register('sex')} defaultValue="Male">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          </select>
          {errors.sex?.message && <span className="text-sm text-red-600 font-light">{errors.sex?.message.toString()}</span>}
          </div>
            <Input
          type="text"
          name="teachersId"
          id="teachersId"
          register={register}
          errors={ errors.  teachersId } 
          label=" TeacherID" 
          Placeholder="TeacherID No" 
          />
          

 <div className="flex flex-col w-full">
        <label htmlFor="Courses">Courses</label>
 
<div><Select {...register("Courses")}
  isMulti
  styles={{
    control: (base) => ({
      ...base,
      border: "2px solid #fef3c7"
    }),
  }}
  options={Course.map((t: any) => ({
    value:t.id,
    label:t.name,
  }))}
  defaultValue={
    data?.Courses?.map((t: any) => ( console.log(t),{
      value:t.id,
      label:t.name,
    })) || []
        }
  onChange={(selected) => {
    setValue("Courses", selected.map((s: any) => s.value))
  }}
/>
{errors.Courses&&<span className="text-red">Select a Course</span>}
</div>

          </div> 
           {/* Image Upload */}
                 
                  <div>
                    <label
                      htmlFor="image"
                      className="flex items-center gap-2 cursor-pointer p-2"
                    >
                      {preview ? (
                        <Image
                          src={preview}
                          alt="Preview"
                          width={40}
                          height={40}
                          className="mt-2 rounded"
                        />
                      ) : (
                        <Image src="/upload.png" alt="Upload icon" width={40} height={40} />
                      )}
                      <span>Upload Image</span>
                    </label>
                    <input
                      id="image"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
          </div>
          <button className="bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-sm w-full text-white">{type === "Create" ? "Create" : "Update"}</button>
          </form>
          );
          };

          export default TeachersForms;

