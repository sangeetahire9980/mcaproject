import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  DollarSign, 
  Bookmark, 
  ArrowRight, 
  Sliders, 
  TrendingUp, 
  Zap, 
  Eye
} from 'lucide-react';
import { useCandidate } from '../../context/useCandidate';
import JobDetailsModal from '../../components/candidate/JobDetailsModal';

export default function CandidateDashboard() {
  const { 
    profile, 
    profileCompletion, 
    applications, 
    savedJobIds, 
    jobs, 
    skills, 
    missingSkills, 
    courses, 
    improvementTips,
    toggleSaveJob, 
    applyToJob,
    toggleMissingItem
  } = useCandidate();

  const [selectedJobForModal, setSelectedJobForModal] = useState(null);

  // Recommended jobs: Top 6 by match score
  const recommendedJobs = jobs.slice(0, 6);

  // Status badge colors
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Interview':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Shortlisted':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Under Review':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Applied':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Rejected':
        return 'bg-slate-100 text-slate-600 border-slate-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* 1. Dashboard Welcome Hero Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 overflow-hidden shadow-xl border border-indigo-900/50">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>AI Matching Engine Telemetry Active</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Hello, {profile.name}!
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Targeting <strong className="text-white font-bold">{profile.targetRole}</strong>. We've matched your profile against 45,000+ active requisitions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/candidate/jobs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Explore AI Matches</span>
            </Link>
            <Link
              to="/candidate/profile"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>Edit Profile</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Key Statistics Cards (Required: Recommended Jobs, Applied Jobs, Profile Completion, Identified Skills) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        
        {/* Recommended Jobs */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-purple-200 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Recommended Jobs
            </span>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900">
            {jobs.length * 3 + 4}
          </h3>
          <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>6 jobs with 95%+ match score</span>
          </p>
        </div>

        {/* Applied Jobs */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Applied Jobs
            </span>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Send className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900">
            {applications.length}
          </h3>
          <p className="text-xs text-blue-600 font-semibold mt-1 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>1 interview round scheduled</span>
          </p>
        </div>

        {/* Profile Completion */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-indigo-200 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Profile Completion
            </span>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900">
            {profileCompletion}%
          </h3>
          <p className="text-xs text-indigo-600 font-semibold mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Top 15% profile strength</span>
          </p>
        </div>

        {/* Identified Skills */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-emerald-200 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Identified Skills
            </span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900">
            {skills.length}
          </h3>
          <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>10 Core + 4 AI frameworks</span>
          </p>
        </div>

      </div>

      {/* 3. Profile Completion & Missing Information Card (Requirement 4) */}
      <div className="p-6 sm:p-7 bg-white rounded-3xl border border-slate-200/90 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-extrabold text-slate-900">
                Candidate Profile Strength & Optimization
              </h3>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                {profileCompletion}% Complete
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
              Complete remaining credentials to boost recruiter visibility and unlock higher-compatibility job matches.
            </p>
          </div>

          <Link
            to="/candidate/profile"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-indigo-700 transition-colors cursor-pointer shrink-0"
          >
            <span>Complete Profile</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Progress Bar */}
        <div className="my-5">
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-900 via-indigo-600 to-purple-600 rounded-full transition-all duration-500"
              style={{ width: `${profileCompletion}%` }}
            />
          </div>
        </div>

        {/* Missing Profile Items */}
        <div className="space-y-2.5">
          <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Recommended Actions to Reach 100%:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {profile.missingItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => toggleMissingItem(item.id)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  item.completed 
                    ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900' 
                    : 'bg-slate-50/70 border-slate-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                    item.completed ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {item.completed ? '✓' : '+'}
                  </div>
                  <div>
                    <p className={`text-xs font-semibold ${item.completed ? 'line-through text-slate-500' : 'text-slate-800'}`}>
                      {item.label}
                    </p>
                    <span className="text-[10px] text-purple-700 font-bold">
                      {item.impact}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800">
                  {item.completed ? 'Mark Incomplete' : 'Complete Now'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Recommended Jobs Section (Requirement 5: At least 6 professional job cards) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700">AI Recommendations</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Recommended Jobs For You
            </h3>
          </div>

          <Link
            to="/candidate/jobs?tab=recommended"
            className="text-xs sm:text-sm font-bold text-purple-600 hover:text-purple-800 flex items-center gap-1.5"
          >
            <span>View All {jobs.length} Matches</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Recommended Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recommendedJobs.map((job) => {
            const isSaved = savedJobIds.includes(job.id);
            const isApplied = applications.some((a) => a.jobId === job.id);

            return (
              <div
                key={job.id}
                className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-indigo-950/5 hover:border-purple-300 transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header: Company Avatar & Save Button */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl ${job.logoBg} text-white font-extrabold text-base flex items-center justify-center shadow-xs shrink-0`}>
                        {job.logoLetter}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800">{job.company}</h4>
                        <span className="text-[11px] text-slate-400 font-medium">{job.department}</span>
                      </div>
                    </div>

                    {/* Save Button */}
                    <button
                      type="button"
                      onClick={() => toggleSaveJob(job.id)}
                      className={`p-2 rounded-xl transition-all cursor-pointer ${
                        isSaved 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'bg-slate-50 text-slate-400 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                      title={isSaved ? 'Saved to bookmarks' : 'Save job'}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-purple-600 text-purple-600' : ''}`} />
                    </button>
                  </div>

                  {/* Title & AI Match Badge */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                        {job.categoryName}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <Zap className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                        {job.matchScore}% Match
                      </span>
                    </div>

                    <h4 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">
                      {job.title}
                    </h4>
                  </div>

                  {/* Location, Salary & Type */}
                  <div className="space-y-1.5 text-xs text-slate-600 mb-3.5">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{job.location} ({job.workplaceType})</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-extrabold text-slate-900">{job.salary}</span>
                      <span className="text-slate-400">• {job.employmentType}</span>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {job.skills.slice(0, 3).map((skill) => (
                      <span 
                        key={skill}
                        className="text-[11px] font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="text-[10px] text-slate-400 px-1 py-0.5">
                        +{job.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Buttons: View Details & Apply Now */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedJobForModal(job)}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    type="button"
                    disabled={isApplied}
                    onClick={() => applyToJob(job)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                      isApplied
                        ? 'bg-emerald-600 text-white opacity-90'
                        : 'bg-slate-900 hover:bg-gradient-to-r hover:from-blue-900 hover:via-indigo-700 hover:to-purple-600 text-white'
                    }`}
                  >
                    {isApplied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Applied</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Apply Now</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 5. My Applications Tracking Table (Requirement 6) */}
      <div className="p-6 sm:p-7 bg-white rounded-3xl border border-slate-200/90 shadow-xs">
        <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Send className="w-4 h-4 text-indigo-600" />
              <h3 className="text-lg font-extrabold text-slate-900">
                My Job Applications
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Track live review milestones and recruiter pipeline updates in demo mode.
            </p>
          </div>

          <Link
            to="/candidate/applications"
            className="text-xs font-bold text-purple-600 hover:text-purple-800"
          >
            View All ({applications.length}) →
          </Link>
        </div>

        {/* Applications Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="pb-3 font-semibold">Job Title</th>
                <th className="pb-3 font-semibold">Company</th>
                <th className="pb-3 font-semibold">Application Date</th>
                <th className="pb-3 font-semibold">AI Match</th>
                <th className="pb-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {applications.slice(0, 5).map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 font-bold text-slate-900">
                    {app.title}
                  </td>
                  <td className="py-3.5 text-slate-600 font-medium">
                    {app.company}
                  </td>
                  <td className="py-3.5 text-slate-500">
                    {app.appliedDate}
                  </td>
                  <td className="py-3.5">
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md text-xs">
                      {app.matchScore}%
                    </span>
                  </td>
                  <td className="py-3.5">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusBadge(app.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Skill Analysis & Gap Visualization (Requirement 7) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Identified Skills Proficiency */}
        <div className="lg:col-span-6 p-6 sm:p-7 bg-white rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                Candidate Verified Skills
              </h3>
              <p className="text-xs text-slate-500">Extracted from resume & technical profile</p>
            </div>
            <Link to="/candidate/skills" className="text-xs font-bold text-purple-600 hover:text-purple-800">
              Manage Skills →
            </Link>
          </div>

          <div className="space-y-3.5">
            {skills.slice(0, 5).map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-800">{skill.name}</span>
                  <span className="text-indigo-600 font-bold">{skill.proficiency}% • {skill.level}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-900 via-indigo-600 to-purple-600 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Missing Skills Gap Visualization */}
        <div className="lg:col-span-6 p-6 sm:p-7 bg-white rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <span>Skill Gap Visualization</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  Target: AI Architect
                </span>
              </h3>
              <p className="text-xs text-slate-500">Benchmark against top 10% candidate profiles</p>
            </div>
            <Link to="/candidate/skills" className="text-xs font-bold text-purple-600 hover:text-purple-800">
              Details →
            </Link>
          </div>

          <div className="space-y-3">
            {missingSkills.slice(0, 3).map((gap) => (
              <div key={gap.name} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-800">{gap.name}</span>
                  <span className="text-[11px] font-extrabold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">
                    {gap.impact}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mb-2 leading-relaxed">
                  {gap.recommendation}
                </p>
                <div className="flex items-center gap-2 text-[10px] text-slate-600">
                  <span>Current: <strong>{gap.currentProficiency}%</strong></span>
                  <span className="text-slate-300">•</span>
                  <span>Target: <strong>{gap.targetProficiency}%</strong></span>
                  <span className="text-slate-300">•</span>
                  <span className="text-amber-700 font-bold">Gap: -{gap.gap}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 7. Career Guidance & Curated Courses (Requirement 8) */}
      <div className="p-6 sm:p-7 bg-white rounded-3xl border border-slate-200/90 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Actionable Growth</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">
              Personalized Career Guidance & Course Suggestions
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Hand-picked modules to bridge identified technical skill gaps.
            </p>
          </div>

          <Link
            to="/candidate/career-guidance"
            className="text-xs font-bold text-purple-600 hover:text-purple-800"
          >
            Explore Full Roadmap →
          </Link>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.slice(0, 3).map((course) => (
            <div key={course.id} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-md mb-2 inline-block">
                  Bridges: {course.targetGap}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-1">
                  {course.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                  {course.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-600">{course.duration} • ⭐ {course.rating}</span>
                <Link
                  to="/candidate/career-guidance"
                  className="font-bold text-purple-600 hover:text-purple-800"
                >
                  View Course →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Improvement Recommendations Strip */}
        <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-purple-900">
                Top Priority Career Tip: {improvementTips[0].title}
              </p>
              <p className="text-[11px] text-purple-700 mt-0.5">
                {improvementTips[0].description}
              </p>
            </div>
          </div>

          <Link
            to="/candidate/career-guidance"
            className="px-4 py-2 bg-white text-purple-700 hover:bg-purple-100 font-bold text-xs rounded-xl shadow-xs shrink-0 transition-colors"
          >
            Review Tips
          </Link>
        </div>

      </div>

      {/* Modal for Job Details */}
      <JobDetailsModal
        job={selectedJobForModal}
        onClose={() => setSelectedJobForModal(null)}
      />

    </div>
  );
}
