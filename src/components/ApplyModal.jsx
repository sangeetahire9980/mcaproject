import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  Send,
  Zap
} from 'lucide-react';

export default function ApplyModal({ job, onClose, onSubmitSuccess }) {
  const [applicantName, setApplicantName] = useState('Alex Morgan');
  const [applicantEmail, setApplicantEmail] = useState('alex.morgan@example.com');
  const [applicantPhone, setApplicantPhone] = useState('+91 98765 43210');
  const [portfolioLink, setPortfolioLink] = useState('https://github.com/alexmorgan');
  const [submitted, setSubmitted] = useState(false);
  const [applicationId] = useState(() => `CAI-${Math.floor(100000 + Math.random() * 900000)}`);

  if (!job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess(job);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gradient Banner */}
        <div className="h-3 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600" />

        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${job.logoBg} text-white font-extrabold flex items-center justify-center text-lg shadow-sm shrink-0`}>
              {job.logoLetter}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{job.company}</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <Zap className="w-3 h-3 text-emerald-600" />
                  {job.matchScore}% AI Match
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                {job.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900">
                  Application Submitted Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                  Your profile and AI skill vector summary have been forwarded to the recruiting team at <strong className="text-slate-900">{job.company}</strong> with a <strong className="text-emerald-700">{job.matchScore}% Match Index</strong>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-left space-y-2">
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-500">Applicant:</span>
                  <span className="text-slate-800">{applicantName}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-500">Application ID:</span>
                  <span className="text-indigo-600 font-mono">{applicationId}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-500">Target Role:</span>
                  <span className="text-slate-800">{job.title}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* AI Auto-Match Highlight */}
              <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200/80 flex items-center gap-2.5 text-xs text-purple-900">
                <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                <span>
                  <strong>AI Match Highlight:</strong> Your competencies match <strong>{job.skills.slice(0, 3).join(', ')}</strong> perfectly.
                </span>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>

              {/* Phone & Portfolio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Portfolio / GitHub Link
                  </label>
                  <input
                    type="url"
                    value={portfolioLink}
                    onChange={(e) => setPortfolioLink(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>

              {/* Simulated Resume Upload File */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Attached Resume
                </label>
                <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 text-xs">
                    <FileText className="w-4 h-4 text-purple-600" />
                    <div>
                      <p className="font-semibold text-slate-800">Alex_Morgan_Resume_2026.pdf</p>
                      <p className="text-[10px] text-slate-400">Parsed by CareerAI Engine • 240 KB</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                    Verified
                  </span>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 hover:from-blue-950 hover:via-indigo-800 hover:to-purple-700 shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
