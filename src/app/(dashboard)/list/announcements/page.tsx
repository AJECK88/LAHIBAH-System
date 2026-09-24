import Image from 'next/image';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';
import FormsContainer from '@/components/FormsContainer';
import AnnouncementsPage from '@/components/AnnouncementMessage';
import { role } from '@/components/user';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const AnnouncementsListPage = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const query = (params.query as string) || '';

  const { userId } = await auth();
  const userRole = await role();

  // 1. Mark unread notifications as read
  if (userId) {
    try {
      const roleFilter = {
        adminId: userRole === 'admin' ? userId : undefined,
        teacherId: userRole === 'teacher' ? userId : undefined,
        studentId: userRole === 'student' ? userId : undefined,
      };

      const unreadNotifications = await prisma.notification.findMany({
        where: {
          notificationRead: {
            none: roleFilter,
          },
        },
        select: { id: true },
      });

      if (unreadNotifications.length > 0) {
        const readRecords = unreadNotifications.map((notification) => ({
          notificationId: notification.id,
          read: true,
          readAt: new Date(),
          studentId: userRole === 'student' ? userId : null,
          teacherId: userRole === 'teacher' ? userId : null,
          adminId: userRole === 'admin' ? userId : null,
        }));

        await prisma.notificationRead.createMany({
          data: readRecords,
          skipDuplicates: true,
        });
      }
    } catch (err) {
      console.error('[NOTIFICATIONS_READ_ERROR]', err);
    }
  }

// 2. Fetch Announcements ordered chronologically
const announcementMessages = await prisma.announcement.findMany({
  where: query
    ? {
        OR: [
          { title: { contains: query } },
          { message: { contains: query } },
        ],
      }
    : {},
  select: {
    id: true,
    title: true,
    message: true,
    date: true,
    department: {
      select: {
        id: true,
        name: true,
      },
    },
  },
  orderBy: {
    date: 'desc',
  },
});

// Format the data for the AnnouncementsPage component
const formattedAnnouncements = announcementMessages.map((item) => {
  return {
    id: item.id,
    title: item.title,
    message: item.message,
    date: item.date.toISOString(),
    senderName: item.department?.name || 'School Office',
    senderPhoto: null,
    senderRole: 'Department',
  };
});
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 h-[calc(100vh-2rem)] bg-slate-50/60 rounded-2xl border border-slate-100">
      
      {/* Dynamic Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-200/80 shrink-0">
        
        {/* Left Info Group */}
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center h-14 w-14 rounded-2xl bg-slate-100/80 border border-slate-200/60 p-2 shrink-0">
            <Image
              src="/announcementM .png"
              alt="Announcements"
              height={48}
              width={48}
              className="object-contain mix-blend-multiply"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Announcements
              </h1>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
                {announcementMessages.length} Total
              </span>
            </div>
            
            <p className="text-xs md:text-sm font-medium text-slate-500">
              {userRole === 'admin'
                ? 'Create and manage broadcast notifications for the entire campus.'
                : 'Stay updated with official institutional announcements and schedules.'}
            </p>
          </div>
        </div>

        {/* Right Action Trigger (Admin Only) */}
        {userRole === 'admin' && (
          <div className="shrink-0 w-full sm:w-auto">
            <FormsContainer type="Create" table="announcement" />
          </div>
        )}
      </div>

      {/* Main Content Card Container */}
      <div className="flex-1 w-full overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col">
        
        {/* Sub-header Bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 shrink-0">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Recent Bulletins
          </h2>
          <span className="text-xs font-medium text-slate-400">
            Sorted by newest
          </span>
        </div>

        {/* Scrollable List Container */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
          <AnnouncementsPage AnnouncementData={formattedAnnouncements as any} />
        </div>

      </div>

    </div>
  );
};

export default AnnouncementsListPage;