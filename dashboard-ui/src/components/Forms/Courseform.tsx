          "use client"
          import { date, z } from "zod";
          import { zodResolver } from "@hookform/resolvers/zod";
          import Input from "@/components/input";
          import Image from "next/image";
          import { useForm } from "react-hook-form";
          const schema = z.object({
          CourseName: z.string()
          .min(3, { message: 'Name must be at least 3 characters long' })
          .max(20, { message: 'Name must be at most 20 characters long' }),
          Teacher: z.string()
          .min(1, { message: 'Teacher is required' }),
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
            /*  This form should be validated if and only there  the perant have a student in the school with a 
             proof of the student name */
          <form className="flex flex-col p-2 lg:p-4 justify-center items-center gap-4 " onSubmit={SubmiteData}>
          <h1 className="text-2xl font-semibold self-start">Create A New Course</h1>
          {/* Top */}
          <h2 className="text-gray-500 self-start tex-sm font-semibold">Authentification info</h2>
          <div className="grid lg:grid-cols-3 justify-between gap-5 w-full grid-cols-1">

          < Input 
          type="text" 
          name="CourseName" 
          id="CourseName"
          register={register}
            Defaultvalue={data?.CourseName} 
            errors={ errors.CourseName} 
            label="Course Name"
            Placeholder="Enter Course Name"/>
          < Input
            type="Teacher"
            id="Teacher"
            name="Teacher"
            register={register}
            Defaultvalue={data?.Teacher}
            errors={ errors.Teacher}
            label="Teacher"
            Placeholder="Enter Teacher Name" />

          </div>
          <button className="bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-sm w-full text-white">{type === "Create" ? "Create" : "Update"}</button>
          </form>
          );
          };

          export default StudentsForms;

