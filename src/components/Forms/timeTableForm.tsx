import { useState } from 'react';
import type { FormEvent } from 'react';
import { AlertTriangle, CheckCircle2, X } from 'lucide-react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
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
  courseCode: string;
  courseName: string;
  lecturer: string;
  room: string;
  hasConflict: boolean;
  conflictMsg: string | null;
};

type AddSlotModalProps = {
  target?: Target;
  dept?: string;
  prog?: string;
  level?: string | number;
  onClose: () => void;
  onSave: (slot: Slot) => void;
};

export function AddSlotModal({ target, onClose, onSave }: AddSlotModalProps) {
  const [courseCode, setCourseCode] = useState('CS205');
  const [courseName, setCourseName] = useState('Web Development');
  const [lecturer, setLecturer] = useState('Mr. Tanyi');
  const [room, setRoom] = useState('Lab 3');
  const [day, setDay] = useState(target?.day || 'Monday');
  const [timeSlotId, setTimeSlotId] = useState(target?.timeSlotId || 1);

  // Mock Conflict Detection Logic
  const hasConflict = lecturer === 'Dr. Ambe' && day === 'Monday' && timeSlotId === 3;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave({
      day,
      timeSlotId: Number(timeSlotId),
      courseCode,
      courseName,
      lecturer,
      room,
      hasConflict,
      conflictMsg: hasConflict ? 'Lecturer assigned to another level at this time!' : null
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
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Day of Week</label>
              <select 
                value={day} 
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
              <label className="block text-xs font-medium text-slate-600 mb-1">Course Code</label>
              <input 
                type="text" 
                value={courseCode} 
                onChange={(e) => setCourseCode(e.target.value)} 
                required 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-medium"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-slate-600 mb-1">Course Name</label>
              <input 
                type="text" 
                value={courseName} 
                onChange={(e) => setCourseName(e.target.value)} 
                required 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Assigned Lecturer</label>
              <select 
                value={lecturer} 
                onChange={(e) => setLecturer(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-medium text-slate-800"
              >
                <option value="Dr. Ambe">Dr. Ambe</option>
                <option value="Eng. Nkwenti">Eng. Nkwenti</option>
                <option value="Prof. Fon">Prof. Fon</option>
                <option value="Mr. Tanyi">Mr. Tanyi</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Assigned Hall / Lab</label>
              <select 
                value={room} 
                onChange={(e) => setRoom(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-medium text-slate-800"
              >
                <option value="Lab 1">Lab 1 (Comp Center)</option>
                <option value="Lab 2">Lab 2 (Comp Center)</option>
                <option value="Room 202">Room 202</option>
                <option value="Amphitheater A">Amphitheater A</option>
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