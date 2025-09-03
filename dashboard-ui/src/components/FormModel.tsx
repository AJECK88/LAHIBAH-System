      "use client"
      import Image from "next/image";
      import dynamic from "next/dynamic";
      import { JSX, useState } from "react"
      const StudentsForms = dynamic(() => import("@/components/Forms/StusdentForm"), { 
            loading:() => <h1>Loading...</h1>
       }); 
       const TeachersForms = dynamic( () => import("@/components/Forms/TeachersForms"),{
            loading :() => <h1>Loading...</h1>
       })
       const ParentFoorem = dynamic(() => import('@/components/Forms/ PerantsForm'),{
            loading: () => <h1>Loading...</h1>
       })
        const Courseform = dynamic(()=> import('@/components/Forms/Courseform'))
          
      const Forms:{
            [key:string]:(type: "Create" | "Update" , data?: any)=>JSX.Element;
 } = { 
       Teacher: (type, data) => <TeachersForms  type={type} data={data} />,
       Student: (type, data) => <StudentsForms  type={type} data={data} />,
       Parent: (type, date) =><ParentFoorem  type={type} data={date} />,
       Course: (type, date) => <Courseform  type={type} data={date} />
 }

      
      const FormModel = ({type ,table, data, id}:{
      table :
      "Teacher" 
      | "Student"
      | "Parent" 
      | "Result"
      | "Class" 
      | "Department"
      | "Attendance"
      | "announcement"
      | "Course"
      | "Assignments"
      | "Lessons"
      | "Exams",
      type : 
      "Create" 
      | "Delete" 
      | "Update" ,
      data?: any,
      id?: string | number
  }) => {
      const size = type === "Create" ? "w-8 h-8" : "w-8 h-8"
      const bgColor =
      type === "Create" ? "bg-green-100" :
      type === "Update" ? "bg-blue-300"
      : "bg-red-400"
      const [open , SetOpen] = useState (false)

      const Form = () => {
       return type === "Delete" ? (
      <form action={""} className="flex flex-col gap-4">
      <div className=" flex flex-col gap-6 p-4">
      <div className="text-center font-semibold"><span className="font-bold">Warning!!:</span> All data related to this {table} will be lost. Are you sure you want to delete this {table}?</div>
      <button className="bg-red-500 text-white py-2 px-4 rounded w-max self-center">Delete</button>
      </div>

      </form>
      ): Forms[table](type, data)

      }
  
      return (
      <>
      <button onClick={ ()=> SetOpen(true)
      } className={`${size} flex items-center justify-center rounded-full ${bgColor}`}>
      <Image src={`/${type}.png`} alt="" height={14} width={14} />
      </button>
      {open && (
      <div className="absolute inset-0 bg-black/60 z-50 flex justify-center p-2 items-center overflow-scroll">
      {/* Modal */}
      <div className="relative bg-white p-4 rounded w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-auto">
      <Form />
      {/* Close button */}
      <button
      onClick={() => SetOpen(false)}
      className="absolute top-2 right-2"
      >
      <Image src="/close.png" alt="close" height={14} width={14} />
      </button>
      </div>
      </div>
      )}

      </>
      );
      };

      export default FormModel;
