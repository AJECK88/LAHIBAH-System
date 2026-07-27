
import { TimeTableChart } from '@/components/Time-TableChart';
import { 
  Plus, Calendar, Sparkles, Printer 
} from 'lucide-react';

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


const LEVELS = [
  { id: 'l100', name: 'Level 100 / Year 1' },
  { id: 'l200', name: 'Level 200 / Year 2' },
  { id: 'l300', name: 'Level 300 / Year 3' },
  { id: 'l400', name: 'Level 400 / Year 4' }
];

type SlotData = {
  day: string;
  timeSlotId: number;
  courseCode: string;
  courseName: string;
  room: string;
  lecturer: string;
  color: string;
  hasConflict?: boolean;
  conflictMsg?: string;
};

type TimetableSlot = SlotData & {
  id: number;
};

// Initial slots pre-populated with data
const INITIAL_SLOTS: TimetableSlot[] = [
  {
    id: 101,
    day: 'Monday',
    timeSlotId: 1,
    courseCode: 'CS201',
    courseName: 'Data Structures',
    room: 'Lab 1',
    lecturer: 'Dr. Ambe',
    color: 'blue'
  },
  {
    id: 102,
    day: 'Tuesday',
    timeSlotId: 1,
    courseCode: 'CS203',
    courseName: 'MySQL Database',
    room: 'Room 202',
    lecturer: 'Eng. Nkwenti',
    color: 'emerald'
  },
    {
    id: 10,
    day: 'Tuesday',
    timeSlotId: 1,
    courseCode: 'CS20sss',
    courseName: 'Math',
    room: 'Room 202',
    lecturer: 'Eng',
    color: 'emerald'
  },
  {
    id: 103,
    day: 'Wednesday',
    timeSlotId: 1,
    courseCode: 'MATH201',
    courseName: 'Linear Algebra',
    room: 'Amphitheater A',
    lecturer: 'Prof. Fon',
    color: 'amber'
  },
  {
    id: 104,
    day: 'Sunday',
    timeSlotId: 3,
    courseCode: 'CS201 Lab',
    courseName: 'Data Struct Practical',
    room: 'Lab 1',
    lecturer: 'Dr. Ambe',
    hasConflict: true,
    conflictMsg: 'Dr. Ambe is double-booked in Level 300!',
    color: 'rose'
  }
];

export default function TimetableDashboard() {

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
          <button 
            // onClick={() => handleOpenAddModal()} 
             className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2.5 rounded-xl shadow-sm transition-all text-sm"
          >
            <Plus className="w-4 h-4" />
            Upload Time Table
          </button>
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
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
            Department
          </label>
          <select 
          
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-medium"
          >
            {DEPARTMENTS.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
            Program
          </label>
          {/* <select 
    
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-medium"
          >
            {PROGRAMS.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select> */}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
            Academic Level
          </label>
          <select 
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-medium"
          >
            {LEVELS.map((l) => (
              <option key={l.id} value={l.id}>{l.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
            Semester
          </label>
          <select 
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all font-medium"
          >
            <option value="sem1">Semester 1</option>
            <option value="sem2">Semester 2</option>
          </select>
        </div>
      </div>

      {/* TIMETABLE GRID MATRIX */}
  
      <TimeTableChart INITIAL_SLOTS={INITIAL_SLOTS} />
   
    </div>
  );
}

