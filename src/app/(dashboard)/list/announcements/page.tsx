
import Image from 'next/image';
import prisma from '@/lib/prisma';
import FormsContainer from '@/components/FormsContainer';
import AnnouncementsPage from '@/components/AnnouncementMessage';
import { auth } from '@clerk/nextjs/server';
import { role } from '@/components/user';

 export const  AnnouncementsListpage = async({ 
  
}:{ 
    searchParams:Promise<{[key:string]:string|undefined}>
}) => { 
   const { userId, sessionClaims } = await auth();
   const Role= await role()
 if (userId) { 
    try {
      const UnreadNotifications = await prisma.notification.findMany({ 
        where: {
          notificationRead: {
            none: {
              adminId: Role === "admin" ? userId : undefined,
              teacherId:Role === "teacher" ? userId : undefined,
              studentId: Role === "student" ? userId : undefined
            }
          }
        },
        select: { id: true }
      });

      if (UnreadNotifications.length > 0) {
        const readRecordsData = UnreadNotifications.map((notification: any) => ({
          notificationId: notification.id,
          read: true,
          readAt: new Date(), 
          studentId: Role === "student" ? userId : null,
          teacherId: Role === "teacher" ? userId : null,
          adminId:   Role === "admin"   ? userId : null,
        }));

        await prisma.notificationRead.createMany({
          data: readRecordsData
        });
        console.log("Successfully marked notifications as read"); 
      }
    } catch (err) {
      console.error("CRITICAL READ-TRACKING ERROR:", err);
    }
  }
   const AnnouncementMessage =  await prisma.announcement.findMany({
      select:{
     id:true,
     title:true,
     date:true,
     message:true,
      }
   })  
  return (
    <div className='h-full  bg-white p-4 flex flex-col gap-4 m-2 fixed pb-20'>
      <h1 className='font-extrabold text-gray-700'>Announcement </h1>
    <div className='bg-gray-200 p-1 h-full w-full flex flex-col gap-4 overflow-y-auto'>
      <div className='flex justify-between items-center bg-white shadow-md p-2 h-25'>
        <div className='flex gap-4 p-4 items-center'>
        <Image src={'/announcementM .png'} className='rounded-3xl p-1' alt={"announcement"} height={70} width={70}></Image>
        { Role === "admin" ?<div className=''>
          <h1 className="hidden md:block font-semibold text-gray-500">Create announcement</h1>
          <p className="text-sm sm:font-semibold text-gray-900">notisfy all student</p>
        </div> : "All Announcements"}
</div>
        {Role === "admin" && <FormsContainer  type={'Create'} table={"announcement"} />}
      </div> 
      <AnnouncementsPage
        AnnouncementData={AnnouncementMessage}
      />

    </div>

    </div>
  ) 
}
export default AnnouncementsListpage;