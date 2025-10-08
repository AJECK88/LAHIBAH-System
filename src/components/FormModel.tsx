      "use client"
      import Image from "next/image";
      import dynamic from "next/dynamic";
      import { Dispatch, JSX, SetStateAction, startTransition, useActionState, useEffect, useState } from "react"
import { deletCourse } from "@/lib/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FormsContainerProps } from "./FormsContainer";
const deletActionMap: Record<
  | "Teacher"
  | "Student"
  | "Parent"
  | "Course"
  | "Department"
  | "announcement"
  | "Exams"
  | "Result"
  | "Class"
  | "Attendance"
  | "Assignments"
  | "Lessons",
  (currentState: any, data: FormData) => Promise<{ successMessage: boolean; errorMessage: boolean }>
> = {
  Teacher: deletCourse,
  Student: deletCourse,
  Parent: deletCourse,
  Course: deletCourse,
  Department: deletCourse,
  announcement: deletCourse,
  Exams: deletCourse,
  Result: deletCourse,
  Class: deletCourse,
  Attendance: deletCourse,
  Assignments: deletCourse,
  Lessons: deletCourse,
}

      const StudentsForms = dynamic(() => import("@/components/Forms/StusdentForm"), { 
            loading:() => <h1>Loading...</h1>
       }); 
       const TeachersForms = dynamic( () => import("@/components/Forms/TeachersForms"),{
            loading :() => <h1>Loading...</h1>
       })
       const ParentFoorem = dynamic(() => import('@/components/Forms/ PerantsForm'),{
            loading: () => <h1>Loading...</h1>
       })
        const Courseform = dynamic(()=> import('@/components/Forms/Courseform'),
        {loading:() => <h1>Loading..</h1>}
     )
        const DepartmentForm = dynamic(()=> import('@/components/Forms/DepertmentForm'))
        const AnnouncementForm = dynamic(()=> import('@/components/Forms/AnnouncementForm'))
        const ExamForm  = dynamic( () => import('@/components/Forms/ExamForm'))

      const Forms:{
            [key:string]:( SetOpen:Dispatch<SetStateAction<boolean>> , type: "Create" | "Update" , data?: any , relatedData?:any)=>JSX.Element;
 } = { 
       Teacher: ( SetOpen, type, data) => (
       <TeachersForms  type={type} data={data}  SetOpen={SetOpen} relatedData={relatedData}/>
       ),
       Student: ( SetOpen,type, data) => (
      <StudentsForms  type={type} data={data}  SetOpen={SetOpen} relatedData={relatedData} />
       ),
       Parent: ( SetOpen,type, data) =>(
      <ParentFoorem  type={type} data={data}   SetOpen={SetOpen} relatedData={relatedData}/>
       ),
       Course: (  SetOpen,type, data, relatedData) => (
       <Courseform  type={type} data={data}   SetOpen={SetOpen} relatedData={relatedData}/>
      ),
       Department: ( SetOpen,type ,data) =>(
             <DepartmentForm  type={type} data={data}   SetOpen={SetOpen} relatedData={relatedData}/>
       ),
       announcement:(SetOpen,type, data) => (
       <AnnouncementForm  type={type} data={data} SetOpen={SetOpen} relatedData={relatedData}/>
      ),
       Exams  : (SetOpen,type, date)=>(
             <ExamForm type={type} data={date}  SetOpen={SetOpen} relatedData={relatedData}/>
       )
 }

      
      const FormModel = ({type ,table, data, id , relatedData }:FormsContainerProps & {relatedData?:any}) => {
      const size = type === "Create" ? "w-8 h-8" : "w-8 h-8"
      const bgColor =
      type === "Create" ? "bg-green-100" :
      type === "Update" ? "bg-blue-300"
      : "bg-red-400"
      const [open , SetOpen] = useState (false)
          
      const Form = ( {data}:{data:any}) => {
      
        const [state, formAction] = useActionState(deletActionMap[table] , {
          successMessage: false,
          errorMessage: false,
        })
         const router = useRouter();
         
          useEffect(() => {
            if (state.successMessage) {
              toast(
                `Course ${data.name} has been deleted `,
                { type: "success" }
              )
              SetOpen(false)
              router.refresh()
            }
          }, [state, type, router, SetOpen])
             return type === "Delete" ? (
      <form action={formAction} className="flex flex-col gap-4">
       <input type="hidden" name="id" defaultValue={id} />

      <div className=" flex flex-col gap-6 p-4">
      <div className="text-center font-semibold"><span className="font-bold">Warning!!:</span> All data related to this {table} will be lost. Are you sure you want to delete this {table}?</div>
      <button className="bg-red-500 text-white py-2 px-4 rounded w-max self-center">Delete</button>
      </div>

      </form>
      ): Forms[table]( SetOpen ,type, data, relatedData)

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
      <Form data={data} />
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
