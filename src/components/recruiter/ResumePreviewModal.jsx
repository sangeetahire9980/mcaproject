import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  Calendar,
  X,
  FileText,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const STATUS_STYLES = {
  Applied: "bg-blue-100 text-blue-700",
  "Under Review": "bg-amber-100 text-amber-700",
  Shortlisted: "bg-purple-100 text-purple-700",
  Interview: "bg-indigo-100 text-indigo-700",
  Rejected: "bg-rose-100 text-rose-700",
};

function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] ?? "bg-slate-100 text-slate-600";
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${style}`}>
      {status}
    </span>
  );
}

function SectionHeading({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-4 h-4 text-indigo-500" />
      <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
        {label}
      </h3>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-2 text-sm text-slate-700">
      <Icon className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
      <span className="text-slate-500 w-24 shrink-0">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

export default function ResumePreviewModal({ isOpen, onClose, candidate }) {
  if (!isOpen || !candidate) return null;

  const {
    name,
    email,
    phone,
    location,
    appliedJobTitle,
    experience,
    currentCompany,
    education,
    matchScore,
    skills,
    appliedDate,
    status,
    resumeSummary,
    notes,
  } = candidate;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl font-bold text-slate-800">{name}</h2>
              {matchScore != null && (
                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  AI Match: {matchScore}%
                </span>
              )}
            </div>
            {appliedJobTitle && (
              <p className="text-sm text-slate-500 mt-1">{appliedJobTitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition shrink-0 ml-4"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status + Applied Date Row */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          {status && <StatusBadge status={status} />}
          {appliedDate && (
            <span className="inline-flex items-center gap-1 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              Applied {appliedDate}
            </span>
          )}
        </div>

        <div className="space-y-6">
          {/* Personal Info */}
          <div className="bg-slate-50 rounded-xl p-4">
            <SectionHeading icon={User} label="Personal Info" />
            <div className="space-y-2">
              <InfoRow icon={Mail} label="Email" value={email} />
              <InfoRow icon={Phone} label="Phone" value={phone} />
              <InfoRow icon={MapPin} label="Location" value={location} />
            </div>
          </div>

          {/* Professional Background */}
          <div className="bg-slate-50 rounded-xl p-4">
            <SectionHeading icon={Briefcase} label="Professional Background" />
            <div className="space-y-2">
              <InfoRow
                icon={Briefcase}
                label="Experience"
                value={experience}
              />
              <InfoRow
                icon={Briefcase}
                label="Company"
                value={currentCompany}
              />
              <InfoRow
                icon={GraduationCap}
                label="Education"
                value={education}
              />
            </div>
          </div>

          {/* Skills */}
          {skills && skills.length > 0 && (
            <div className="bg-slate-50 rounded-xl p-4">
              <SectionHeading icon={Star} label="Skills" />
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Resume Summary */}
          {resumeSummary && (
            <div className="bg-slate-50 rounded-xl p-4">
              <SectionHeading icon={FileText} label="Resume Summary" />
              <p className="text-sm text-slate-600 leading-relaxed">
                {resumeSummary}
              </p>
            </div>
          )}

          {/* Recruiter Notes */}
          {notes && (
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <SectionHeading icon={MessageSquare} label="Recruiter Notes" />
              <p className="text-sm text-slate-600 leading-relaxed">{notes}</p>
            </div>
          )}
        </div>

        {/* Footer close */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="border border-slate-300 text-slate-700 rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-slate-50 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
