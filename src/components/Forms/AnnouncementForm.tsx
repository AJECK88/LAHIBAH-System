"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/input";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/nextjs"; // Hook imported
import { announcementschema, AnnouncementSchema } from "@/lib/FormValidationSchima";
import { startTransition, useActionState } from "react";
import { CreateAnnouncement } from "@/lib/actions";

const AnnouncementForm = ({ type, data, relatedData, SetOpen }: {
  type: "Create" | "Update",
  data?: any,
  relatedData: any,
  SetOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  
  // 1. CRITICAL: Call your hook at the top level of the component body
  const { user } = useUser(); 
  const userId = user?.id;
  const userRole = user?.publicMetadata?.role;
  console.log(userId)
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

  const [state, FormAction] = useActionState(CreateAnnouncement, {
    successMessage: false,
    errorMessage: false
  });

  // 2. The submit handler is now a regular, hook-free function
  const SubmiteData = handleSubmit(async (formData) => {
    startTransition(() => {
      FormAction(formData);
    });

    if (!userId) {
      console.error("User is not authenticated yet.");
      return;
    }

    const res = await fetch('/api/announcement', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: formData.AnnouncementMessage,
        title: formData.AnnouncementTitle,
        adminId: userRole === "admin" ? userId : null,
        teacherId: userRole === "teacher" ? userId : null,
      }),
    });

    if (res.ok) {
      console.log("Announcement Created Successfully");
      SetOpen(false);
    } else {
      console.log("Failed to create Announcement");
    }
  });

  return (
    <form className="flex flex-col p-2 lg:p-4 justify-center items-center gap-4" onSubmit={SubmiteData}>
      <h1 className="text-2xl font-semibold self-start">{type === "Create" ? "Create A New" : "Update"} Announcement</h1>
      <h2 className="text-gray-500 self-start text-sm font-semibold">Announcement info</h2>
      
      <div className="grid lg:grid-cols-1 justify-between gap-5 w-full grid-cols-1">
        <Input
          type="text"
          name="AnnouncementTitle"
          id="AnnouncementTitle"
          register={register}
          errors={errors.AnnouncementTitle}
          label="Title"
          Placeholder="subject"
        />
        <textarea
          id="textArea"
          placeholder="Message..."
          {...register("AnnouncementMessage")}
          className="h-[100px] border-2 border-amber-100 w-full p-2"
        />
        {errors.AnnouncementMessage?.message && (
          <span className="text-sm text-red-600 font-light">
            {errors.AnnouncementMessage?.message.toString()}
          </span>
        )}
      </div>
      
      <button className="bg-blue-300 hover:bg-blue-400 font-semibold py-2 px-4 rounded-sm w-full text-white">
        Send
      </button>
    </form>
  );
};

export default AnnouncementForm;