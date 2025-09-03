          "use client"
          import { date, z } from "zod";
          import { zodResolver } from "@hookform/resolvers/zod";
          import Input from "@/components/input";
          import Image from "next/image";
          import { useForm } from "react-hook-form";
          const schema = z.object({
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
          img:z.instanceof(File, { message: 'Image is required' }),
          Address:z.string()
          .min(5, { message: 'Address must be at least 5 characters long' })
          .max(15, { message: 'Address must be at most 15 characters long' }),
          BloodType :z.string()
          .min(1,{message:'required'}),
         dateOfBirth: z.date()
         /* still to work on the date validation form  */
/*   .max(new Date(), { message: "Invalid date (cannot be in the future)" })
  .refine((date) => {
    const today = new Date();
    const minDate = new Date(
      today.getFullYear() - 20,
      today.getMonth(),
      today.getDate()
    );
    return date <= minDate;
  }, { message: "You must be at least 20 years old" }),
         */ })


          type Input = z.infer<typeof schema>

          const StudentsForms = ( {type , data}:
          {type : 
          | "Create"
          | "Update",
          data?: any
          }) => {
          const {
          register,
          handleSubmit,
          formState: { errors },
          } = useForm<Input>({
          resolver: zodResolver(schema),

          });
          const SubmiteData = handleSubmit( (data) =>{
          

          })
          return (
          <form className="flex flex-col p-2 lg:p-4 justify-center items-center gap-4 " onSubmit={SubmiteData}>
          <h1 className="text-2xl font-semibold self-start">Create A New Student</h1>
          {/* Top */}
          <h2 className="text-gray-500 self-start tex-sm font-semibold">Authentification info</h2>
          <div className="grid lg:grid-cols-3 justify-between gap-5 w-full grid-cols-1">

          < Input 
          type="text" 
          name="UserName" 
          id="UserName"
          register={register}
            Defaultvalue={data?.UserName} 
            errors={ errors.UserName} 
            label="UserName"
            Placeholder="Enter username"/>
          < Input
            type="email"
            id="email"
            name="email"
            register={register}
            Defaultvalue={data?.email}
            errors={ errors.email}
            label="Email"
            Placeholder="example@gmail.com" />

          < Input 
          name="password"
          id="password"
          type="password"
          register={register} 
          Defaultvalue={data?.password} 
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
          Defaultvalue={data?.FirstName} 
          errors={ errors.FirstName}
          label="First Name"
          Placeholder=" first name"
          />

          <Input
          type="text"
          name="LastName"
          id="LastName"
          register={register}
          Defaultvalue={data?.LastName}
          errors={ errors.LastName} 
          label="Last Name" 
          Placeholder=" last name" 
          />
          < Input 
          type="number" 
          name="phoneNumber"
          id="phoneNumber"
          register={register} 
          Defaultvalue={data?.phoneNumber} 
          errors={ errors.phoneNumber}  
          label="Phone" 
          Placeholder=" phone number"/>

          {/* row 2 */}
          <Input
          type="text"
          name="Address"
          id="Address"
          register={register}
          Defaultvalue={data?.Address}
          errors={ errors.Address} 
          label="Address" 
          Placeholder=" address" 
          />
          <Input
          type="text"
          name="BloodType"
          id="BloodType"
          register={register}
          Defaultvalue={data?.BloodType}
          errors={ errors.BloodType} 
          label="Blood type" 
          Placeholder="A+" 
          />
          <Input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          register={register}
          Defaultvalue={data?.dateOfBirth}
          errors={ errors.dateOfBirth} 
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
          <label className=" flex items-center" htmlFor="image">  <Image src="/upload.png" alt="" width={40} height={40} />
          <span>Upload Image</span>
          <input  type="file" id="image"  className="hidden w-full"/> 
          </label>
          {errors.img?.message && <span className="text-sm text-red-600 font-light">{errors.img?.message.toString()}</span>}
          </div>
          </div>
          <button className="bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-sm w-full text-white">{type === "Create" ? "Create" : "Update"}</button>
          </form>
          );
          };

          export default StudentsForms;

