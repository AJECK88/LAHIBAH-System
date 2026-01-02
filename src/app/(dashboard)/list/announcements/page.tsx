
import Image from 'next/image';
import prisma from '@/lib/prisma';
import FormsContainer from '@/components/FormsContainer';
import AnnouncementsPage from '@/components/AnnouncementMessage';

 export const  AnnouncementsListpage = async({
  
}:{ 
    searchParams:Promise<{[key:string]:string|undefined}>
}) => {
   const AnnouncementMessage =  await prisma.announcement.findMany({
      select:{
     id:true,
     title:true,
     date:true,
     message:true,
      }
   }) 
   
  return (
    <div className='h-full  bg-white p-4 flex flex-col gap-4 m-2'>
      <h1 className='font-extrabold text-gray-700'>Announcement </h1>
    <div className='bg-gray-200 p-1 h-full w-full flex flex-col gap-4'>
      <div className='flex justify-between items-center bg-white shadow-md p-2 h-25'>
        <div className='flex gap-4 p-4 items-center'>
        <Image src={'/announcementM .png'} className='rounded-3xl p-1' alt={"announcement"} height={70} width={70}></Image>
        <div className=''>
          <h1 className="hidden md:block font-semibold text-gray-500">Create announcement</h1>
          <p className="text-sm sm:font-semibold text-gray-900">notisfy all student</p>
        </div>
</div>
        <FormsContainer  type={'Create'} table={"announcement"} />
      </div> 
      <AnnouncementsPage
        AnnouncementData={AnnouncementMessage}
      />

    </div>

    </div>
  ) 
}
export default AnnouncementsListpage;