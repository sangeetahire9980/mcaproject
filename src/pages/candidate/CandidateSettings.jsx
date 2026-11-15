import React, { useState } from 'react';
import { 
  Bell, 
  Save, 
  Eye, 
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import { useCandidate } from '../../context/useCandidate';

export default function CandidateSettings() {
  const { profile, updateProfile } = useCandidate();

  const [jobAlerts, setJobAlerts] = useState(true);
  const [interviewAlerts, setInterviewAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState('open'); // 'open' | 'semi-private' | 'hidden'
  const [desiredSalary, setDesiredSalary] = useState('₹22 - 32 LPA');
  const [workPreference, setWorkPreference] = useState('Hybrid & Remote');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    updateProfile({ targetRole: profile.targetRole });
    setTimeout(() => {
      setSavedSuccess(false);
    }, 2500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Account & Notification Settings
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Configure your AI job alerts, privacy settings, and recruiter discovery preferences.
          </p>
        </div>

        {savedSuccess && (
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Preferences Saved</span>
          </span>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* Recruiter Visibility & Job Search Status */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-5">
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <Eye className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-extrabold text-slate-900">
              Recruiter Discovery & Visibility
            </h3>
          </div>

          <div className="space-y-3">
            <label className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200 cursor-pointer">
              <input
                type="radio"
                name="visibility"
                checked={profileVisibility === 'open'}
                onChange={() => setProfileVisibility('open')}
                className="mt-1 text-purple-600 focus:ring-purple-500"
              />
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                  Actively Looking (Recommended)
                </span>
                <span className="text-xs text-slate-500 leading-relaxed">
                  Your profile and AI skill match score are visible to all verified hiring managers and automated sourcers.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200 cursor-pointer">
              <input
                type="radio"
                name="visibility"
                checked={profileVisibility === 'semi-private'}
                onChange={() => setProfileVisibility('semi-private')}
                className="mt-1 text-purple-600 focus:ring-purple-500"
              />
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                  Semi-Private (Only for jobs I apply to)
                </span>
                <span className="text-xs text-slate-500 leading-relaxed">
                  Recruiters can only review your credentials after you explicitly submit an application.
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Job Matching Preferences */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-purple-600" />
            <h3 className="text-base font-extrabold text-slate-900">
              Target Career Parameters
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                Expected Annual Compensation (CTC)
              </label>
              <input
                type="text"
                value={desiredSalary}
                onChange={(e) => setDesiredSalary(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                Workplace Mode Preference
              </label>
              <input
                type="text"
                value={workPreference}
                onChange={(e) => setWorkPreference(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>
        </div>

        {/* Notification Alert Toggles */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <Bell className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-extrabold text-slate-900">
              Notification & Telemetry Preferences
            </h3>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl cursor-pointer">
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 block">
                  Instant High-Match Alerts (95%+)
                </span>
                <span className="text-xs text-slate-500">
                  Receive email notifications when an employer posts an urgent opening matching your core skills.
                </span>
              </div>
              <input
                type="checkbox"
                checked={jobAlerts}
                onChange={(e) => setJobAlerts(e.target.checked)}
                className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl cursor-pointer">
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 block">
                  Application Status & Interview Updates
                </span>
                <span className="text-xs text-slate-500">
                  Immediate alerts when a recruiter shortlists, reviews, or schedules an interview.
                </span>
              </div>
              <input
                type="checkbox"
                checked={interviewAlerts}
                onChange={(e) => setInterviewAlerts(e.target.checked)}
                className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl cursor-pointer">
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 block">
                  Weekly Skill Gap Digest
                </span>
                <span className="text-xs text-slate-500">
                  Summary of newly trending technologies across the Indian tech market.
                </span>
              </div>
              <input
                type="checkbox"
                checked={weeklyDigest}
                onChange={(e) => setWeeklyDigest(e.target.checked)}
                className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
              />
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 hover:from-blue-950 hover:via-indigo-800 hover:to-purple-700 shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save Preferences</span>
          </button>
        </div>

      </form>

    </div>
  );
}
