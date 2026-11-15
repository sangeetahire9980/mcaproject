import { useState } from "react";
import {
  CalendarCheck,
  Clock,
  Video,
  MapPin,
  User,
  X,
  ChevronDown,
} from "lucide-react";

export default function ScheduleInterviewModal({
  isOpen,
  onClose,
  candidate,
  onSchedule,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [interviewType, setInterviewType] = useState("");
  const [platform, setPlatform] = useState("Google Meet");
  const [meetingLink, setMeetingLink] = useState("");
  const [interviewer, setInterviewer] = useState("");
  const [agenda, setAgenda] = useState("");
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    if (!interviewType) newErrors.interviewType = "Interview type is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSchedule({
      candidateId: candidate?.id,
      candidateName: candidate?.name,
      jobTitle: candidate?.appliedJobTitle,
      date,
      time,
      type: interviewType,
      platform,
      meetingLink,
      interviewer,
      agenda,
    });
  };

  const inputBase =
    "w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-slate-50 placeholder:text-slate-400 transition";

  const selectBase =
    "w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-slate-50 appearance-none cursor-pointer transition";

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CalendarCheck className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold text-slate-800">
                Schedule Interview
              </h2>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-slate-600 font-medium">
                {candidate?.name}
              </span>
              {candidate?.appliedJobTitle && (
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium">
                  {candidate.appliedJobTitle}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Date & Time Row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1 flex items-center gap-1">
                <CalendarCheck className="w-3.5 h-3.5" /> Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={inputBase}
              />
              {errors.date && (
                <p className="text-xs text-rose-500 mt-1">{errors.date}</p>
              )}
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={inputBase}
              />
              {errors.time && (
                <p className="text-xs text-rose-500 mt-1">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Interview Type */}
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 flex items-center gap-1">
              <Video className="w-3.5 h-3.5" /> Interview Type
            </label>
            <div className="relative">
              <select
                value={interviewType}
                onChange={(e) => setInterviewType(e.target.value)}
                className={selectBase}
              >
                <option value="">Select interview type</option>
                <option>Technical Video Call</option>
                <option>Coding &amp; System Design</option>
                <option>Portfolio Review</option>
                <option>HR Discussion</option>
                <option>On-site Interview</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
            {errors.interviewType && (
              <p className="text-xs text-rose-500 mt-1">
                {errors.interviewType}
              </p>
            )}
          </div>

          {/* Platform */}
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 flex items-center gap-1">
              <Video className="w-3.5 h-3.5" /> Platform
            </label>
            <div className="relative">
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className={selectBase}
              >
                <option>Google Meet</option>
                <option>Zoom Video</option>
                <option>Microsoft Teams</option>
                <option>In-person</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* Meeting Link */}
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> Meeting Link / Location
            </label>
            <input
              type="text"
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
              placeholder="Paste meeting link or office location"
              className={inputBase}
            />
          </div>

          {/* Interviewer */}
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 flex items-center gap-1">
              <User className="w-3.5 h-3.5" /> Interviewer
            </label>
            <input
              type="text"
              value={interviewer}
              onChange={(e) => setInterviewer(e.target.value)}
              placeholder="Interviewer name and designation"
              className={inputBase}
            />
          </div>

          {/* Agenda */}
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 flex items-center gap-1">
              Agenda / Notes
            </label>
            <textarea
              value={agenda}
              onChange={(e) => setAgenda(e.target.value)}
              placeholder="Interview agenda or notes..."
              rows={3}
              className={`${inputBase} resize-none`}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-slate-300 text-slate-700 rounded-xl py-2.5 text-sm font-medium hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-navy-700 to-purple-600 from-[#1e3a5f] to-[#7c3aed] text-white rounded-xl py-2.5 text-sm font-semibold hover:opacity-90 transition shadow-md"
              style={{
                background: "linear-gradient(to right, #1e3a5f, #7c3aed)",
              }}
            >
              Confirm Interview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
