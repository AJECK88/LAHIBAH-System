import React, { startTransition, useActionState, useState } from 'react';
import type { FormEvent } from 'react';
import { AlertTriangle, CheckCircle2, X } from 'lucide-react';
import CreatTimeTable from '@/lib/actions';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const START_TIMES: Record<number, string> = {
  1: '08:00',
  2: '10:00',
  3: '12:00',
  4: '14:00',
  5: '16:00',
};

const END_TIMES: Record<number, string> = {
  1: '10:00',
  2: '12:00',
  3: '14:00',
  4: '16:00',
  5: '18:00',
};

const TIME_SLOTS = [
  { id: 1, label: '8:00 AM - 10:00 AM', isBreak: false },
  { id: 2, label: '10:00 AM - 12:00 PM', isBreak: false },
  { id: 3, label: '12:00 PM - 2:00 PM', isBreak: false },
  { id: 4, label: '2:00 PM - 4:00 PM', isBreak: false },
  { id: 5, label: '4:00 PM - 6:00 PM', isBreak: false },
];

type Target = {
  day?: string;
  timeSlotId?: number;
};

type Slot = {
  day: string;
  timeSlotId: number;
  level: number;
  courseName: string;
  lecturer: string;
  room: string;
  hasConflict: boolean;
  conflictMsg: string | null;
};

type courseType = {
  name: string;
  id: number;
};

interface ClassRoomType {
  id: string;
  name: string;
}

type teachersType = {
  id: string;
  firstName: string;
  lastName: string;
};

type AddSlotModalProps = {
  target?: Target;
  courses: courseType[];
  teachers: teachersType[];
  classRoom: ClassRoomType[];
  departments: { id: string; name: string }[];
  prog?: string;
  level?: { LevelName: string; id: number };
  onClose: () => void;
  onSave: (slot: Slot) => void;
};

export function AddSlotModal({
  target,
  onClose,
  onSave,
  courses,
  teachers,
  classRoom,
  level,
  departments,
}: AddSlotModalProps) {
  const [courseId, setCourseId] = useState<number | ''>('');
  const [courseName, setCourseName] = useState('');
  const [lecturerId, setLecturerId] = useState('');
  const [lecturerName, setLecturerName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [roomName, setRoomName] = useState('');
  const [day, setDay] = useState(target?.day || 'Monday');
  const [timeSlotId, setTimeSlotId] = useState(target?.timeSlotId || 1);

  // Mock Conflict Detection Logic
  const hasConflict = lecturerName === 'Dr. Ambe' && day === 'Monday' && timeSlotId === 3;

  const [stateAction, statActionFunction] = useActionState(CreatTimeTable, {
    successMessage: false,
    errorMessage: false,
  });

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      const formdata = new FormData(e.currentTarget);

      // Explicitly attach missing structure
      if (departments?.[0]?.id) {
        formdata.set('departments', departments[0].id);
      }
      if (level?.id) {
        formdata.set('levelId', String(level.id));
      }

   
     const data = {
        departmentId: formdata.get('departments'),
        lecturerId: formdata.get('LecturalId'),
        levelId: formdata.get('levelId'),
        courseId: formdata.get('CourseId'),
        roomId: formdata.get('roomId'),
        day: formdata.get('Day'),
        startTime: formdata.get('startTime'),
        endTime: formdata.get('endTime')
      };
         statActionFunction(data);
    });

    onSave({
      day,
      timeSlotId: Number(timeSlotId),
      level: Number(level?.id || 0),
      courseName,
      lecturer: lecturerName,
      room: roomName,
      hasConflict,
      conflictMsg: hasConflict ? 'Lecturer assigned to another level at this time!' : null,
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <h2 className="text-lg font-bold text-slate-900">Add Timetable Slot</h2>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={onsubmit} className="p-6 space-y-4 text-sm">
          
          {/* Hidden Inputs to ensure FormData receives values */}
          <input type="hidden" name="startTime" value={START_TIMES[timeSlotId]} />
          <input type="hidden" name="endTime" value={END_TIMES[timeSlotId]} />
          <input type="hidden" name="levelId" value={level?.id || ''} />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Day of Week</label>
              <select 
                value={day} 
                name="Day"
                onChange={(e) => setDay(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-medium text-slate-800"
              >
                {DAYS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Time Period</label>
              <select 
                value={timeSlotId} 
                name="time"
                onChange={(e) => setTimeSlotId(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-medium text-slate-800"
              >
                {TIME_SLOTS.filter(t => !t.isBreak).map((t) => (
                  <option key={t.id} value={t.id}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Level</label>
              <input
                value={level?.LevelName || ''}  
                disabled 
                readOnly
                className="w-full bg-slate-100 text-slate-500 border border-slate-200 rounded-xl p-2.5 font-medium cursor-not-allowed"
                placeholder={level?.LevelName || 'Select Level'}
              />
            </div>

            <div className="col-span-2">
              <label className="block text-xs font-medium text-slate-600 mb-1">Course Name</label>
              <select
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-medium text-slate-800"
                required
                name="CourseId"
                value={courseId}
                onChange={(e) => {
                  const selectedId = Number(e.target.value);
                  setCourseId(selectedId);
                  const selectedCourse = courses.find((c) => c.id === selectedId);
                  setCourseName(selectedCourse?.name || '');
                }}
              >
                <option value="" disabled>select course</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Assigned Lecturer</label>
              <select 
                value={lecturerId}
                onChange={(e) => {
                  setLecturerId(e.target.value);
                  setLecturerName(e.target.options[e.target.selectedIndex].text);
                }}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-medium text-slate-800"
                required
                name="LecturalId"
              >
                <option value="" disabled>Select teacher</option>
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.firstName} {teacher.lastName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Assigned Hall / Lab</label>
              <select 
                value={roomId}
                onChange={(e) => {
                  setRoomId(e.target.value);
                  setRoomName(e.target.options[e.target.selectedIndex].text);
                }}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-medium text-slate-800"
                required
                name="roomId"
              >
                <option value="" disabled>Select Room</option>
                {classRoom.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Validation Alert Box */}
          <div className="pt-2">
            {hasConflict ? (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-800">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Conflict Warning:</span> Dr. Ambe is already teaching in Level 300 during this time slot.
                </div>
              </div>
            ) : (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No scheduling conflicts detected for this lecturer or room.</span>
              </div>
            )}
          </div>

          {/* Modal Actions */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl font-medium"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-sm transition-all"
            >
              Save Slot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}