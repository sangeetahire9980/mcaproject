import React from 'react';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Brain, 
  Star
} from 'lucide-react';

export default function Hero({ 
  searchQuery, 
  setSearchQuery, 
  locationQuery, 
  setLocationQuery, 
  onSearch 
}) {
  const quickTags = [
    'AI Engineer',
    'React Developer',
    'Data Scientist',
    'UI/UX Designer',
    'Cybersecurity'
  ];

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    if (onSearch) onSearch();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch();
  };

  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10">
        <div className="absolute top-4 left-1/4 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute top-12 right-1/4 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & Search */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/80 text-purple-700 text-xs sm:text-sm font-semibold mb-6 shadow-xs w-fit">
              <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
              <span>Next-Generation Career Intelligence Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Find Your Dream Job with{' '}
              <span className="bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 bg-clip-text text-transparent">
                AI-Powered
              </span>{' '}
              Career Matching
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              CareerAI utilizes state-of-the-art semantic matching algorithms to evaluate your technical competencies, uncover hidden skill gaps, and connect you with tailored opportunities where your profile truly shines.
            </p>

            {/* Search Input Box */}
            <form 
              onSubmit={handleSubmit}
              className="bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 mb-4 transition-all focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-3 items-center">
                
                {/* Job Title / Skill Input */}
                <div className="sm:col-span-6 flex items-center gap-3 px-3 py-2 bg-slate-50 sm:bg-transparent rounded-xl sm:rounded-none">
                  <Search className="w-5 h-5 text-indigo-600 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Job title, skills, or role..."
                    className="w-full text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
                  />
                </div>

                {/* Divider on sm */}
                <div className="hidden sm:block w-px h-8 bg-slate-200 sm:col-span-1 mx-auto" />

                {/* Location Input */}
                <div className="sm:col-span-5 flex items-center gap-2 px-3 py-2 bg-slate-50 sm:bg-transparent rounded-xl sm:rounded-none">
                  <MapPin className="w-5 h-5 text-purple-600 shrink-0" />
                  <input
                    type="text"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    placeholder="Location or 'Remote'"
                    className="w-full text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
                  />
                </div>

              </div>

              {/* Submit Button */}
              <div className="mt-3 sm:mt-2.5 pt-2 sm:pt-0 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 hover:from-blue-950 hover:via-indigo-800 hover:to-purple-700 rounded-xl shadow-md shadow-indigo-600/30 hover:shadow-lg hover:shadow-indigo-600/40 transition-all cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Jobs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Quick Keyword Chips */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-600">Popular:</span>
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-purple-50 hover:text-purple-700 text-slate-600 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-purple-200"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Key Trust Signals */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero spam, verified recruiters</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Instant automated skill scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>Privacy-first resume intelligence</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech CSS Visual Card + AI Statistics Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gradient frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-500 opacity-20 blur-xl -z-10" />

              {/* Main Candidate AI Match Preview Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xl shadow-indigo-950/10 relative">
                
                {/* Header of Visual */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/30">
                      AM
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 leading-tight">Alex Morgan</h4>
                      <p className="text-xs font-medium text-slate-500">MCA Grad • Full-Stack & AI</p>
                    </div>
                  </div>

                  {/* AI Match Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>98% Match</span>
                  </div>
                </div>

                {/* Job Recommendation Showcase */}
                <div className="mt-4 p-4 rounded-2xl bg-slate-50/90 border border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                    <span className="font-semibold text-purple-700">Recommended Match</span>
                    <span className="text-slate-400">High Compatibility</span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-900">Senior AI Systems Engineer</h5>
                  <p className="text-xs text-slate-600 mt-0.5">NeuralWave AI • Bangalore (Hybrid)</p>

                  {/* Match Progress Bar */}
                  <div className="mt-3">
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span className="text-slate-600">Skill Competency Index</span>
                      <span className="text-indigo-600 font-bold">98.4%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 rounded-full w-[98%]" />
                    </div>
                  </div>

                  {/* Matched Skill Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md">
                      <CheckCircle2 className="w-3 h-3 text-indigo-600" /> PyTorch
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md">
                      <CheckCircle2 className="w-3 h-3 text-indigo-600" /> React.js
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md">
                      <CheckCircle2 className="w-3 h-3 text-indigo-600" /> LLMs & RAG
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Tailwind CSS
                    </span>
                  </div>
                </div>

                {/* AI Matching Statistics Card */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <Brain className="w-4 h-4 text-purple-600" />
                      <span>CareerAI Matching Engine Stats</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-purple-600 tracking-wider">Live</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100/80">
                      <p className="text-base font-extrabold text-purple-900 leading-tight">94%</p>
                      <p className="text-[10px] font-medium text-purple-700 mt-0.5">Match Accuracy</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100/80">
                      <p className="text-base font-extrabold text-blue-900 leading-tight">10x</p>
                      <p className="text-[10px] font-medium text-blue-700 mt-0.5">Faster Hiring</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100/80">
                      <p className="text-base font-extrabold text-indigo-900 leading-tight">15k+</p>
                      <p className="text-[10px] font-medium text-indigo-700 mt-0.5">Matches Made</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Mini Badge Left */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-xl items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">4.9 / 5 Rating</p>
                  <p className="text-[10px] text-slate-500">From 12,000+ candidate reviews</p>
                </div>
              </div>

              {/* Floating Mini Badge Right */}
              <div className="hidden sm:flex absolute -top-5 -right-4 bg-white px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-xl items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-ping" />
                <p className="text-xs font-bold text-slate-900">Real-time Skill Vectors</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
