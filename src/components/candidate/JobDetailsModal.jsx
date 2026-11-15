import React from 'react';
import { 
  X, 
  MapPin, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Bookmark, 
  Send,
  DollarSign
} from 'lucide-react';
import { useCandidate } from '../../context/useCandidate';

export default function JobDetailsModal({ job, onClose, onApplySuccess }) {
  const { savedJobIds, toggleSaveJob, applyToJob, applications } = useCandidate();

  if (!job) return null;

  const isSaved = savedJobIds.includes(job.id);
  const isApplied = applications.some((a) => a.jobId === job.id);

  const handleApply = () => {
    const success = applyToJob(job);
    if (success && onApplySuccess) {
      onApplySuccess(job);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="h-3 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600" />

        <div className="p-6 sm:p-8">
          
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-2xl ${job.logoBg || 'bg-purple-600'} text-white font-extrabold flex items-center justify-center text-xl shadow-md shrink-0`}>
                {job.logoLetter || job.company.charAt(0)}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{job.company}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                    {job.categoryName}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  {job.title}
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-5 border-b border-slate-100 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block mb-0.5">Location</span>
              <span className="font-bold text-slate-800 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                {job.location}
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block mb-0.5">Offered Package</span>
              <span className="font-bold text-slate-800 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                {job.salary}
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-400 block mb-0.5">Workplace & Type</span>
              <span className="font-bold text-slate-800">
                {job.workplaceType} • {job.employmentType}
              </span>
            </div>
            <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl">
              <span className="text-emerald-700 font-semibold block mb-0.5">AI Match Score</span>
              <span className="font-extrabold text-emerald-800 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                {job.matchScore}% Match
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="py-5 space-y-3">
            <h4 className="text-sm font-bold text-slate-900">About the Role</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Required Skills */}
          <div className="py-4 border-t border-slate-100 space-y-2.5">
            <h4 className="text-sm font-bold text-slate-900">Required Competencies & Skills</h4>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span 
                  key={skill}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-purple-50 text-purple-700 border border-purple-100 rounded-lg text-xs font-semibold"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI Match Diagnostic */}
          <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-100 flex items-start gap-3 mt-2 text-xs">
            <Sparkles className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-purple-900 block mb-0.5">CareerAI Matching Insight</span>
              <p className="text-purple-800 leading-relaxed">
                Your profile demonstrates high alignment in <strong>{job.skills.slice(0, 3).join(', ')}</strong>. Candidates with your background have an 88% interview conversion rate for this role.
              </p>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3 mt-6">
            <button
              type="button"
              onClick={() => toggleSaveJob(job.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isSaved 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-purple-600 text-purple-600' : ''}`} />
              <span>{isSaved ? 'Saved to Bookmarks' : 'Save Job'}</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                disabled={isApplied}
                onClick={handleApply}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white transition-all shadow-md cursor-pointer ${
                  isApplied
                    ? 'bg-emerald-600 opacity-90 cursor-default'
                    : 'bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 hover:from-blue-950 hover:via-indigo-800 hover:to-purple-700 shadow-indigo-600/30'
                }`}
              >
                {isApplied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Applied (Demo)</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Apply Now</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
