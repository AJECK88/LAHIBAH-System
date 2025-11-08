"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, startTransition, useActionState, useEffect, useState } from "react";
import Input from "@/components/input";
import { StudentSchema, studentSchma } from "@/lib/FormValidationSchima";
import { CreatStudent, UpdateStudent } from "@/lib/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
 

/**
 * ✅ StudentsForms Component
 * Handles both creation and updating of student data.
 * Includes form validation using Zod + React Hook Form.
 */ 
const StudentsForms = ({
  type,
  data,
  SetOpen,
  relatedData,
}: {
  type: "Create" | "Update";
   data?: any ,
   relatedData?:any;
  SetOpen: Dispatch<SetStateAction<boolean>>
 
})=> { 

  
  const Router = useRouter()
  /**
   * 🎯 Initialize form handling with zod validation
   */
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentSchema>({
    resolver: zodResolver(studentSchma),
  });

  /**
   * 📦 Preview image state
   */
  const [preview, setPreview] = useState<string | null>(null);

  /**
   *  Handle file input change for previewing uploaded image
   */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  /**
   * 🔁 When updating, pre-fill the form with existing data
   */

  /* || Using react Formaction to check if the form is sumited  */
  const [state, formAction] = useActionState( type==="Create"? CreatStudent:UpdateStudent, {
     successMessage: false,
     errorMessage: false,
   }) 

  /**
   * 📁 Handle form submission (stub)
   * This can be extended to send data to your backend.
   */  
const onSubmit = handleSubmit((formData) => {
  startTransition(() => {
    formAction(formData);
  });
});

    useEffect(() => {
      if (state.successMessage) {
        toast(
          `Sudent has been ${type === "Create" ? "created" : "updated"} successfully`,
          { type: "success" }
        )
        SetOpen(false)
        Router.refresh()
      }
    }, [state, type, Router, SetOpen])
  /**
   *  Extract department list from relatedData (fallback to empty)
   */
  const departments = relatedData?.departments ?? [];
    /* || Updating the form default when editing data changes */
      useEffect(()=>{
 
         if(type === "Update" && data){
             let formattedDate = "";
    if (data.DateOfBirth) {
      const parsedDate = new Date(data.DateOfBirth);
      if (!isNaN(parsedDate.getTime())) {
        // Only format valid date
        formattedDate = parsedDate.toISOString().split("T")[0]; 
      }
    }
          
          reset({
            UserName: data.username,
            Address: data.address,
            age: data.age,
            email: data.email,
            password: data.password,
            FirstName: data.firstName,
            LastName: data.lastName,
            phoneNumber: data.phoneNumber,        
            dateOfBirth: formattedDate,
            sex: data.sex,
            MatriculeNo: data.matricule,
            department: data.department.id,
            id: data.id,
         })
         }
      }, [data, type, reset] )
  /**
   * JSX Render
   */
  return (
    <form
      className="flex flex-col p-2 lg:p-4 justify-center items-center gap-4"
      onSubmit={onSubmit}
    >
      {/* Title Section */}
      <h1 className="text-2xl font-semibold self-start">
        {type === "Create" ? "Create A New" : "Update"} Student
      </h1>

      {/* Authentication Info Section */}
      <h2 className="text-gray-500 self-start text-sm font-semibold">
        Authentication Info
      </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full">

        <Input
          type="text"
          name="UserName"
          id="UserName"
          register={register}
          errors={errors.UserName}
          label="UserName"
          Placeholder="Enter username"
        />

        <Input
          type="email"
          id="email"
          name="email"
          register={register}
          errors={errors.email}
          label="Email"
          Placeholder="example@gmail.com"
        />

        <Input
          name="password"
          id="password"
          type="password"
          register={register}
          errors={errors.password}
          label="Password"
          Placeholder="Password"
        />
      </div>

      {/* Personal Info Section */}
      <h2 className="self-start text-sm font-semibold text-gray-500">
        Personal Info
      </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full">
        {/* Row 1 */}
        <Input
          type="text"
          name="FirstName"
          id="FirstName"
          register={register}
          errors={errors.FirstName}
          label="First Name"
          Placeholder="First name"
        />

        <Input
          type="text"
          name="LastName"
          id="LastName"
          register={register}
          errors={errors.LastName}
          label="Last Name"
          Placeholder="Last name"
        />

        <Input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          register={register}
          errors={errors.phoneNumber}
          label="Phone"
          Placeholder="Phone number"
        />

        {/* Row 2 */}
        <Input
          type="text"
          name="Address"
          id="Address"
          register={register}
          errors={errors.Address}
          label="Address"
          Placeholder="Address"
        />

                <Input
          type="text"
          name="MatriculeNo"
          id="MatriculeNo"
          register={register}
          errors={errors.MatriculeNo}
          label="Matricule N°"
          Placeholder="MatriculeNo"
        />
          

        <Input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          register={register}
          errors={errors.dateOfBirth}
          label="Date of Birth"
          Placeholder="Date of birth"
        />
        {/* Row 3 */}
        {/* Gender Selection */}
        <div className="flex flex-col w-full">
          <label htmlFor="sex">Gender</label>
          <select
            className="h-[40px] border-2 border-amber-100 w-full p-2"
            {...register("sex")}
          
          >
          <option value="">Select Sex</option>
           <option value="Male">Male</option> 
           <option value="Female">Female</option> 
          </select>
          {errors.sex?.message && (
            <span className="text-sm text-red-600 font-light">
              {errors.sex?.message.toString()}
            </span>
          )}
        </div>
         <Input
           type="number"
          name="age"
          id="age"
          register={register}
          errors={errors.age}
          label="Age"
          Placeholder="Age"
        />
       {/*  || updating default date */}
      {type === "Update" && (
  <input type="hidden" {...register("id")} value={data?.id} />
)}
        {/* Department + Image Upload Section */}
        <div className="flex flex-col lg:col-start-3 w-full">
          {/* Department Select */}
          <div className="flex flex-col w-full">
            <label htmlFor="department">Department</label>
            <select
              id="department"
              {...register("department")}
              className="h-[40px] border-2 border-amber-100 w-full p-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select department
              </option>
              {departments.map((d: any) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>

            {errors.department && (
              <span className="text-sm text-red-500">
                {errors.department.message}
              </span>
            )}

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
      </div>

      {/* Submit Button */}

      <button type="submit" className="bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded-sm w-full text-white">
        
        {type === "Create" ? "Create" : "Update"}
      </button>
      {state.errorMessage && (
        <span className="text-red-500">
          Try again something went wrong!.
        </span>
      )}

    </form>
  );
};

export default StudentsForms;
