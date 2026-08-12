"use server";
import SeedfileInput from '@/components/Forms/SeedfileInput';
import TimeTableFilter from '@/components/Forms/TimeTableFilter';
import { TimeTableChart } from '@/components/Time-TableChart';
import prisma from '@/lib/prisma';
import { 
  Plus, Calendar, Sparkles, Printer 
} from 'lucide-react';
import { S } from 'node_modules/@upstash/redis/error-8y4qG0W2.mjs';

// Sample Data
const DEPARTMENTS = [
  { id: 'cs', name: 'Computer Science' },
  { id: 'ee', name: 'Electrical Engineering' },
  { id: 'bm', name: 'Business Management' }
];

const PROGRAMS = {
  cs: [
    { id: 'hnd-cs', name: 'HND Computer Science' },
    { id: 'bsc-se', name: 'B.Sc. Software Engineering' }
  ],
  ee: [
    { id: 'hnd-ee', name: 'HND Electrical Tech' }
  ],
  bm: [
    { id: 'bsc-bm', name: 'B.Sc. Business Admin' }
  ]
};

interface PageProps {
  searchParams: Promise<{
    department?: string;
    level?: string;   
    semester?: string;
  }>;
}

export default async function TimetableDashboard({ searchParams }: PageProps) {

const params = await searchParams
const department = await prisma.department.findMany()
const level = await prisma.level.findMany()
const departmentData = await prisma.department.findMany({
  where: {
    id: params.department,
  },
  include: {
    timetables: {
    where: {
    // Every active property inside this object MUST be true (Implicit AND)
       semester:params.semester==='SEMESTER_1'?'SEMESTER_1':'SEMESTER_2',
       levelId: Number(params.level)

  },
      
      include: {
        course: {
          select: {
            name: true,
            teachers: {
              select: {
                id: true,
                username: true,
                firstName: true, 
                lastName: true, 
              },
            },
          },
        },
        classroom: {
          select: {
            name: true,
          },
        },
      },
    },
  },
});

// 2. Map Prisma timetables to match your initialSlots shape (and fallback to [] if null)
const INITIAL_SLOTS= (departmentData?.flatMap((dept , index)  => dept.timetables) ?? []).map((slot, index)=> ({
  id: Number (index),
  day: slot.dayOfWeek,
  StartTime: slot.startTime,
  EndTime: slot.endTime,
  semester: slot.semester,
  courseName: slot.course?.name ?? "No Course Name",
  room: slot.classroom?.name ?? "TBD",
  lecturer: slot.course?.teachers?.[0]?.username ?? "Unassigned",


}));
console.log(INITIAL_SLOTS)
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 space-y-6 font-sans">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
        <div>
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-indigo-600" />
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Timetable Management</h1>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Configure schedule slots, assign lecturers, and handle hall allocations.
          </p>
        </div>

        <div className="flex items-center gap-3">
      
            <SeedfileInput type="TimeTable" />
        
          <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-4 py-2.5 rounded-xl transition-all text-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Auto-Generate
          </button>
          <button className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-all">
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CASCADING FILTER BAR */}
      <TimeTableFilter department={department} level={level} />

      {/* TIMETABLE GRID MATRIX */}
  
      <TimeTableChart INITIAL_SLOTS={INITIAL_SLOTS} />
   
    </div>
  );
}

