          "use client"
          import { date, z } from "zod";
          import { zodResolver } from "@hookform/resolvers/zod";
          import Input from "@/components/input";
          import Image from "next/image";
          import { useForm } from "react-hook-form";
          const schema = z.object({
          AnnouncementTitle: z.string()
          .min(3, { message: 'Title must be at least 3 characters long' }),
          AnnouncementMessage: z.string()
          .min(30, { message: 'This Information is require "words most be more than 20"' }),
         })


          type Input = z.infer<typeof schema>

          const AnnouncementForm = ( {type , data}:
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
          <h1 className="text-2xl font-semibold self-start">{type === "Create" ? "Create A New" : "Update"} Announcement</h1>
          {/* Top */}
          <h2 className="text-gray-500 self-start tex-sm font-semibold">Announcement info</h2>
          <div className="grid lg:grid-cols-1 justify-between gap-5 w-full grid-cols-1">

          < Input 
          type="text" 
          name="AnnouncementTitle" 
          id="AnnouncementTitle"
          register={register}
            Defaultvalue={data?.AnnouncementTitle} 
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
          <button className="bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-sm w-full text-white">{type === "Create" ? "Create" : "Update"}</button>
          </form>
          );
          };

          export default AnnouncementForm;

