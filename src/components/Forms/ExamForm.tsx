          "use client"
          import { date, z } from "zod";
          import { zodResolver } from "@hookform/resolvers/zod";
          import Input from "@/components/input";
          import Image from "next/image";
          import { useForm } from "react-hook-form";
          const schema = z.object({
          DepartmentName: z.string()
          .min(3, { message: 'Name must be at least 3 characters long' })
          .max(20, { message: 'Name must be at most 20 characters long' }),
          Supervisor: z.string()
          .min(1, { message: 'Supervisor is required' }),
         })


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
          < Input
            type="Supervisor"
            id="Supervisor"
            name="Supervisor"
            register={register}
            errors={ errors.Supervisor}
            label="Supervisor"
            Placeholder="Enter Supervisor Name" />

          </div>
          <button className="bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-sm w-full text-white">{type === "Create" ? "Create" : "Update"}</button>
          </form>
          );
          };

          export default StudentsForms;

