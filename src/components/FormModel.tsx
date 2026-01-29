      "use client"
      import Image from "next/image";
      import dynamic from "next/dynamic";
      import { Dispatch, JSX, SetStateAction, startTransition, useActionState, useCallback, useEffect, useState } from "react"
import { deletCourse, DeleteAnnouncement, DeleteDepartment, deleteParent, deleteStudent, deleteTeacher } from "@/lib/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FormsContainerProps } from "./FormsContainer";
import { d } from "node_modules/@clerk/elements/dist/step-MsK0UT__";
import { de } from "zod/v4/locales";
const deletActionMap: Record<
  | "Teacher"
  | "Student"
  | "Parent"
  | "Course"
  | "Department"
  | "announcement"
  | "Lesson",
  (currentState: any, data: FormData) => Promise<{ successMessage: boolean; errorMessage: boolean }>
> = {

  Teacher: deleteTeacher,
  Student: deleteStudent,
  Parent: deleteParent,
  Course: deletCourse,
  Department: DeleteDepartment,
  announcement: DeleteAnnouncement,
  /*
  Exams: deleteExam,
  Result: deleteResult,
  Class: deleteClass,
  Attendance: deleteAttendance,
  Assignments: deleteAssignment,
  */
  Lesson: deletCourse, 

}

      const StudentsForms = dynamic(() => import("@/components/Forms/StusdentForm"), { 
            loading:() => <h1>Loading...</h1>
       }); 
       const TeachersForms = dynamic( () => import("@/components/Forms/TeachersForms"),{
            loading :() => <h1>Loading...</h1>
       })
       const ParentForm = dynamic(() => import('@/components/Forms/PerantsForm'),{
            loading: () => <h1>Loading...</h1>
       })
        const Courseform = dynamic(()=> import('@/components/Forms/Courseform'),
        {loading:() => <h1>Loading..</h1>}
     )
        const DepartmentForm = dynamic(()=> import('@/components/Forms/DepertmentForm'))
        const AnnouncementForm = dynamic(()=> import('@/components/Forms/AnnouncementForm'))
        const ExamForm  = dynamic( () => import('@/components/Forms/ExamForm'))
        const LessonForm = dynamic( () => import('@/components/Forms/LessonForm'))

      const Forms:{
            [key:string]:( SetOpen:Dispatch<SetStateAction<boolean>> , type: "Create" | "Update" , data?: any , relatedData?:any , relatedData2?:any)=>JSX.Element;
 } = { 
       Teacher: ( SetOpen, type, data , relatedData) => (
       <TeachersForms  type={type} data={data}  SetOpen={SetOpen} relatedData={relatedData}/>
       ),
       Student: ( SetOpen,type, data , relatedData , relatedData2) => (
      <StudentsForms  type={type} data={data}  SetOpen={SetOpen} relatedData={relatedData} relatedData2={relatedData2}/>
       ),
       Parent: ( SetOpen,type, data , relatedData) =>(
      <ParentForm  type={type} data={data}   SetOpen={SetOpen} relatedData={relatedData}/>
       ),
       Course: (  SetOpen,type, data, relatedData) => (
       <Courseform  type={type} data={data} SetOpen={SetOpen} relatedData={relatedData} hidden/>
      ),
       Department: ( SetOpen,type ,data ,relatedData) =>(
             <DepartmentForm  type={type} data={data}   SetOpen={SetOpen} relatedData={relatedData}/> 
       ),
       announcement:(SetOpen,type, data , relatedData) => (
       <AnnouncementForm  type={type} data={data} SetOpen={SetOpen} relatedData={relatedData}/>
      ),
      Lesson:(SetOpen , type , data , relatedData) =>(
         <LessonForm type={type} data={data} SetOpen={SetOpen} relatedData={relatedData} />
      )

 }



      const FormModel = ({type ,table, data, id , relatedData, relatedData2 }:FormsContainerProps & {relatedData?:any , relatedData2?:any}) => {
      const size = type === "Create" ? "w-8 h-8" : "w-8 h-8"
      const bgColor =
      type === "Create" ? "bg-green-100" :
      type === "Update" ? "bg-blue-300"
      : "bg-red-400"
      const [open , SetOpen] = useState (false)
          
      const Form = ( {data}:{data:any}) => {
      
        const [state, formAction] = useActionState( deletActionMap[table], {
          successMessage: false,
          errorMessage: false,
        })
        formAction
         const router = useRouter();
         const getSuccesMessage =useCallback((table:string)=>{
           switch(table){
          case "Course":
          return `Course ${data.name} has been deleted!`;
          case "Student":
          return `Student has been deleted!`;
          case "Teacher":
          return `Teacher has been deleted!`;
          case "Department":
          return `Department ${data.name} has been deleted!`;
          case "Parent":
          return `Parent has been deleted!`;
          case "announcement":
          return `Announcement has been deleted!`;
          case "Assignments":
          return `Assignment has been deleted!`;
          case "Lessons":
          return `Lesson has been deleted!`;
             default:
            return "Operation completed successfully!";
           }
          
         }
       ,[data?.name] )
        
          useEffect(() => {
            if (state.successMessage) {
            toast(getSuccesMessage(table),
                { type: "success" }
              )
              SetOpen(false)
              router.refresh()
            }
          }, [state,  router, getSuccesMessage ])
          
             return type === "Delete" ? (
      <form action={formAction} className="flex flex-col gap-4">
     <input type="hidden" name="id" value={data?.id} />
      <div className=" flex flex-col gap-6 p-4">
      <div className="text-center font-semibold"><span className="font-bold">Warning!!:</span> All data related to this {table} will be lost. Are you sure you want to delete this {table}?</div>
      <button className="bg-red-500 text-white py-2 px-4 rounded w-max self-center">Delete</button>
      </div>

      </form>
      ): Forms[table]( SetOpen ,type, data, relatedData , relatedData2);

      }
  
      return (
      <>
      {
      table==="announcement" ? type==="Create" ?
      <button onClick={ ()=> SetOpen(true)}className="text-white bg-blue-400 rounded-sm font-bold p-2 md:w-2xs h-10 text-center flex items-center justify-center cursor-pointer hover:bg-blue-600"> Add  <span className="hidden md:block pl-1">New Announcemnet </span></button>
      : 
      <button className="text-white hover:bg-blue-400 w-full flex items-center justify-between pl-3 pr-3 rounded-sm"> <Image src={"/Delete.png"} alt="." height={20} width={20}/> <span className="pl-2">delete</span></button>
      :
      <button onClick={ ()=> SetOpen(true)
      } className={`${size} flex items-center justify-center rounded-full ${bgColor}`}>
      <Image src={`/${type}.png`} alt="" height={14} width={14} />
      </button>
      }
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
