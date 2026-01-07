          "use client"
          import { zodResolver } from "@hookform/resolvers/zod";
          import Input from "@/components/input";
          import { useForm } from "react-hook-form";
         import { Dispatch, SetStateAction, startTransition, useActionState, useEffect } from "react";
import { parentschema, ParentSchema } from "@/lib/FormValidationSchima";
import Select from "react-select";
import { CreateParent, UpdateParent } from "@/lib/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
          const ParentForms = ( {
            type ,
             data,
             SetOpen,
             relatedData
            }:
          {type : 
          | "Create"| "Update",
            data?: any
           SetOpen: Dispatch<SetStateAction<boolean>>
            relatedData?:any
          }) => {
          const {
          register,
          reset,
          setValue,
          handleSubmit,
          formState: { errors },
          } = useForm<ParentSchema>({
          resolver: zodResolver(parentschema),

          });
           const Route = useRouter();
           /* || Using react Formaction to check if the form is sumited  */
            const [state ,FormAction ] = useActionState(type === "Create" ? CreateParent: UpdateParent,{
             successMessage:false,
             errorMessage:false
               
          })
          const SubmiteData = handleSubmit( (formData) =>{
            startTransition(()=>{
              FormAction(formData)
            })
          })
           useEffect(()=>{
             if(state.successMessage){
               toast(`Perant have been ${type ==="Create"?'Create':"Update"} successfully`),
               {type : "success"}
               SetOpen(false);
               Route.refresh()
             }
             
           })
            useEffect(()=>{
          if (type === "Update" && data) {
              reset({ 
                UserName: data.username ,
                email: data.email,
                password: data.password ,
                FirstName: data.firstName,
                LastName: data.lastName,
                phoneNumber: data.phoneNumber,
                Address: data.address,
                sex: data.sex,
                id: data.id,
                studentName:data.students?.map((t: any) => t.id )||[],
               BloodType: data.bloodType,
              })
            }
            }, [data, reset, type])
          
          const students = relatedData?.Students || [];
           
          return (
            /*  This form should be validated if and only there  the perant have a student in the school with a 
             proof of the student name */
          <form className="flex flex-col p-2 lg:p-4 justify-center items-center gap-4 " onSubmit={SubmiteData}>
          <h1 className="text-2xl font-semibold self-start">{type === "Create" ? "Create A New" : "Update"} Parent</h1>
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
          {/* Middle */}
          <h1 className="font-semibold text-sm  text-gray-500  self-start">
           Proofs of the student in the LAHIBA
          </h1>
           <div className="grid lg:grid-cols-3 justify-between gap-5 w-full grid-cols-1">
 
 <Select
  isMulti
  styles={{
    control: (base) => ({
      ...base,
      border: "2px solid #fef3c7"
    }),
  }}
  options={students.map((t: any) =>({
    value:t.id,
    label:t.firstName + " " + t.lastName,
  }))}
  defaultValue={
    data?.studens?.map((t: any) => ( console.log(t),{
      value:t.id,
      label:`${t.firstName} ${t.lastName}`,
    })) || []
        }
  onChange={(selected) => {
    setValue("studentName", selected.map((s) => s.value).join(","))
  }}
/>
{errors.studentName&&<span className="text-red-500">Select a Course</span>}
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
      
          {/* row 3 */}
          <div className="flex flex-col w-full">
          <label htmlFor="">Gender</label>
          <select className="h-10 border-2 border-amber-100 w-full p-2 " {...register('sex')}>
           <option>select sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          </select>
          {errors.sex?.message && <span className="text-sm text-red-600 font-light">{errors.sex?.message.toString()}</span>}
          </div>
          <div className="flex flex-col lg:col-start-3 w-full">
         
     
          </div>
          </div>
          <button className="bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-sm w-full text-white">{type === "Create" ? "Create" : "Update"}</button>
          </form>
          );
          };

          export default ParentForms