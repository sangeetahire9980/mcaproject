import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Bookmark, 
  ArrowRight, 
  Search, 
  Clock, 
  RotateCcw,
  BadgeCheck,
  Zap
} from 'lucide-react';
import { sampleJobsData, jobCategories } from '../data/jobsData';

export default function FeaturedJobs({
  searchQuery,
  setSearchQuery,
  locationQuery,
  setLocationQuery,
  selectedCategory,
  setSelectedCategory,
  savedJobIds,
  onToggleSaveJob,
  onApplyJob
}) {
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  // Filter jobs based on search query (title or skills), location, and category
  const filteredJobs = sampleJobsData.filter((job) => {
    // 1. Saved filter toggle
    if (showSavedOnly && !savedJobIds.includes(job.id)) {
      return false;
    }

    // 2. Category filter
    if (selectedCategory && selectedCategory !== 'all') {
      if (job.category !== selectedCategory) {
        return false;
      }
    }

    // 3. Search query (matches title or skills or company)
    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const matchesTitle = job.title.toLowerCase().includes(q);
      const matchesCompany = job.company.toLowerCase().includes(q);
      const matchesSkills = job.skills.some((skill) =>
        skill.toLowerCase().includes(q)
      );
      if (!matchesTitle && !matchesCompany && !matchesSkills) {
        return false;
      }
    }

    // 4. Location query
    if (locationQuery && locationQuery.trim() !== '') {
      const loc = locationQuery.toLowerCase().trim();
      const matchesLocation = job.location.toLowerCase().includes(loc);
      const matchesWorkplace = job.workplaceType.toLowerCase().includes(loc);
      if (!matchesLocation && !matchesWorkplace) {
        return false;
      }
    }

    return true;
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setLocationQuery('');
    setSelectedCategory('all');
    setShowSavedOnly(false);
  };

  const getCategoryName = (catId) => {
    if (catId === 'all') return 'All Roles';
    const found = jobCategories.find((c) => c.id === catId);
    return found ? found.name : catId;
  };

  return (
    <section id="jobs" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2.5">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>Tailored For You</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Job Openings
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Curated positions ranked with real-time AI Match compatibility scores for seamless career transitions.
            </p>
          </div>

          {/* Quick Stats / Saved toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                showSavedOnly
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${showSavedOnly ? 'fill-white text-white' : 'text-purple-600'}`} />
              <span>{showSavedOnly ? 'Showing Saved Jobs' : `Saved Jobs (${savedJobIds.length})`}</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200 mb-8 space-y-4">
          
          {/* Top row: search + location + category select */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            
            <div className="sm:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by title, skill, e.g., 'React', 'AI'..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="sm:col-span-4 relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                placeholder="Filter by city or 'Remote'..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2.5 px-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
              >
                <option value="all">All Categories</option>
                {jobCategories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Active Filter Chips & Counter */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-slate-500">
                Found <strong className="text-slate-900">{filteredJobs.length}</strong> available {filteredJobs.length === 1 ? 'position' : 'positions'}
              </span>

              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-100 text-purple-800 rounded-lg font-semibold">
                  Category: {getCategoryName(selectedCategory)}
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('all')}
                    className="hover:text-purple-950 font-bold ml-1 cursor-pointer"
                  >
                    ×
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-100 text-blue-800 rounded-lg font-semibold">
                  Query: "{searchQuery}"
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="hover:text-blue-950 font-bold ml-1 cursor-pointer"
                  >
                    ×
                  </button>
                </span>
              )}

              {locationQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-100 text-indigo-800 rounded-lg font-semibold">
                  Location: "{locationQuery}"
                  <button
                    type="button"
                    onClick={() => setLocationQuery('')}
                    className="hover:text-indigo-950 font-bold ml-1 cursor-pointer"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>

            {(selectedCategory !== 'all' || searchQuery || locationQuery || showSavedOnly) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-slate-500 hover:text-indigo-600 font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset all filters</span>
              </button>
            )}
          </div>

        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16 px-4 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              No matching jobs found
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              We couldn't find any positions matching your specific criteria. Try broadening your search or resetting active filters.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 text-white rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Show All Available Jobs</span>
            </button>
          </div>
        ) : (
          /* Jobs Grid: At least 6 professional job cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => {
              const isSaved = savedJobIds.includes(job.id);

              return (
                <div
                  key={job.id}
                  className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-slate-200/60 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between p-6 hover:-translate-y-1"
                >
                  
                  {/* Top Header: Company Avatar, Name, Category & Save Bookmark Button */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl ${job.logoBg} text-white font-extrabold text-lg flex items-center justify-center shadow-sm shrink-0`}
                        >
                          {job.logoLetter}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                              {job.company}
                            </span>
                            <BadgeCheck className="w-4 h-4 text-blue-600 shrink-0" />
                          </div>
                          <span className="text-xs text-slate-500 font-medium">
                            {job.department}
                          </span>
                        </div>
                      </div>

                      {/* Save Job Toggle Button */}
                      <button
                        type="button"
                        onClick={() => onToggleSaveJob(job)}
                        className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                          isSaved
                            ? 'bg-purple-100 text-purple-700 ring-1 ring-purple-300'
                            : 'bg-slate-50 text-slate-400 hover:text-purple-600 hover:bg-purple-50'
                        }`}
                        title={isSaved ? 'Remove from saved' : 'Save job'}
                        aria-label="Save job"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${
                            isSaved ? 'fill-purple-600 text-purple-600' : ''
                          }`}
                        />
                      </button>

                    </div>

                    {/* Job Title & AI Match Score */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                          {job.categoryName}
                        </span>
                        
                        {/* AI Match Score Badge */}
                        <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <Zap className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                          <span>{job.matchScore}% Match</span>
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">
                        {job.title}
                      </h3>
                    </div>

                    {/* Location, Workplace & Type Pills */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 mb-3">
                      <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
                        <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                        {job.employmentType}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-50 text-indigo-700">
                        {job.workplaceType}
                      </span>
                    </div>

                    {/* Salary Range */}
                    <div className="mb-4">
                      <span className="text-xs font-medium text-slate-400 block mb-0.5">
                        Offered Compensation:
                      </span>
                      <span className="text-base font-extrabold text-slate-900 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-800 bg-clip-text text-transparent">
                        {job.salary}
                      </span>
                    </div>

                    {/* Brief description */}
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Required Skills */}
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-1.5">
                        {job.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 4 && (
                          <span className="text-[11px] font-semibold px-2 py-1 bg-slate-50 text-slate-400 rounded-lg">
                            +{job.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Card Footer: Posted date & Apply Now Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
                    <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {job.postedDate}
                    </span>

                    {/* Apply Now Button */}
                    <button
                      type="button"
                      onClick={() => onApplyJob(job)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-gradient-to-r hover:from-blue-900 hover:via-indigo-700 hover:to-purple-600 shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-98"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
