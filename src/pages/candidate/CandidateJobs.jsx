import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Bookmark, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Send, 
  Eye, 
  RotateCcw
} from 'lucide-react';
import { useCandidate } from '../../context/useCandidate';
import { jobCategories } from '../../data/jobsData';
import JobDetailsModal from '../../components/candidate/JobDetailsModal';

export default function CandidateJobs() {
  const { jobs, savedJobIds, toggleSaveJob, applyToJob, applications } = useCandidate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Search & Filter State derived from params
  const initialTab = searchParams.get('tab') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // 1. Tab filter
      if (activeTab === 'recommended' && job.matchScore < 94) {
        return false;
      }
      if (activeTab === 'saved' && !savedJobIds.includes(job.id)) {
        return false;
      }

      // 2. Category filter
      if (selectedCategory !== 'all' && job.category !== selectedCategory) {
        return false;
      }

      // 3. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesCompany = job.company.toLowerCase().includes(q);
        const matchesSkill = job.skills.some((s) => s.toLowerCase().includes(q));
        const matchesLocation = job.location.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCompany && !matchesSkill && !matchesLocation) {
          return false;
        }
      }

      return true;
    });
  }, [jobs, activeTab, selectedCategory, searchQuery, savedJobIds]);

  const handleResetFilters = () => {
    setActiveTab('all');
    setSearchQuery('');
    setSelectedCategory('all');
    setSearchParams({});
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Explore & Find Jobs
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse verified tech vacancies scored against your candidate profile.
          </p>
        </div>

        {/* View Mode Tabs */}
        <div className="flex items-center p-1 bg-slate-200/70 rounded-2xl">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Positions ({jobs.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('recommended')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'recommended'
                ? 'bg-white text-purple-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Top Matches (94%+)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('saved')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'saved'
                ? 'bg-white text-purple-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 text-purple-600" />
            <span>Saved ({savedJobIds.length})</span>
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 sm:p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          
          {/* Search Input */}
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job title, skill (e.g. PyTorch, React), or company..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Category Dropdown */}
          <div className="sm:col-span-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 font-medium focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
            >
              <option value="all">All Tech Domains</option>
              {jobCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
          <span>
            Displaying <strong className="text-slate-900">{filteredJobs.length}</strong> matching vacancies
          </span>

          {(selectedCategory !== 'all' || searchQuery || activeTab !== 'all') && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 font-semibold text-purple-600 hover:text-purple-800 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset active filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 p-6">
          <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-3">
            <Search className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-slate-900">No matching jobs found</h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto mb-4">
            Try adjusting your search query, selecting another category, or resetting all filters.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            Show All Available Jobs
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredJobs.map((job) => {
            const isSaved = savedJobIds.includes(job.id);
            const isApplied = applications.some((a) => a.jobId === job.id);

            return (
              <div
                key={job.id}
                className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-indigo-950/5 hover:border-purple-300 transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header */}
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

                  {/* Title & Match Score */}
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

                  {/* Location & Salary */}
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
                    {job.skills.slice(0, 4).map((skill) => (
                      <span 
                        key={skill}
                        className="text-[11px] font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
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
      )}

      {/* Modal */}
      <JobDetailsModal
        job={selectedJobForModal}
        onClose={() => setSelectedJobForModal(null)}
      />

    </div>
  );
}
