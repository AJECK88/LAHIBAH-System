          "use client"
          import { date, z } from "zod";
          import { zodResolver } from "@hookform/resolvers/zod";
          import Input from "@/components/input";
          import Image from "next/image";
          import { useForm } from "react-hook-form";
import { announcementschema, AnnouncementSchema } from "@/lib/FormValidationSchima";
import { startTransition, useActionState } from "react";
import { CreateAnnouncement } from "@/lib/actions";
          const AnnouncementForm =( {type , data, relatedData ,SetOpen}:
          {type : 
          | "Create"
          | "Update",
          data?: any
          relatedData: any
          SetOpen:React.Dispatch<React.SetStateAction<boolean>>
          }) => {
          const {
          register, 
          handleSubmit,
          formState: { errors },
          } = useForm<AnnouncementSchema>({
          resolver: zodResolver(announcementschema),

          });
            const formattedDate = new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          }).format(new Date());
                  const formattedTime = new Date().toLocaleTimeString();

           const [state , FormAction]= useActionState(CreateAnnouncement ,{          
            successMessage:false,
             errorMessage:false
            })
          const SubmiteData =  handleSubmit ( async (formData) =>{
            startTransition(()=>{
              FormAction(formData)
            })
          const res = await fetch('http://localhost:3000/api/announc', {
            method:"POST",
            headers: {
              "Content-Type":"application/json"
            },
            body: JSON.stringify({
            message: formData.AnnouncementMessage,
            title: formData.AnnouncementTitle,
            date: formattedDate,
            time: formattedTime,
        }),
           
          })
          const result = await res.json();
          if(res.ok){
            console.log("Announcement Created Successfully"  + res)
            SetOpen(false)
          }else{
            console.log("Failed to create Announcement")
          }
          })
          return (
          <form className="flex flex-col p-2 lg:p-4 justify-center items-center gap-4 " onSubmit={SubmiteData}>
          <h1 className="text-2xl font-semibold self-start">{type === "Create" ? "Create A New" : "Update"} Announcement</h1>
          {/* Top */}
          <h2 className="text-gray-500 self-start tex-sm font-semibold">Announcement info</h2>
          <div className="grid lg:grid-cols-1 justify-between gap-5 w-full grid-cols-1">

          < Input 
          type="text" 
          name="AnnouncementTitle" 
          id="AnnouncementTitle"
          register={register}
            errors={ errors.AnnouncementTitle} 
            label="Title"
            Placeholder="subject"/>
          < textarea
            id="textArea"
            placeholder="Message..."
            {...register("AnnouncementMessage")}
            className="h-[100px] border-2 border-amber-100 w-full p-2"
            />
          {errors.AnnouncementMessage?.message && <span className="text-sm text-red-600 font-light">{errors.AnnouncementMessage?.message.toString()}</span>}


          </div>
          <button className="bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-sm w-full text-white">Send</button>
          </form>
          );
          };

          export default AnnouncementForm;

