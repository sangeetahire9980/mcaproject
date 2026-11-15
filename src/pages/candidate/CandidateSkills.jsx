import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Zap, 
  Target, 
  ArrowRight
} from 'lucide-react';
import { useCandidate } from '../../context/useCandidate';
import { Link } from 'react-router-dom';

export default function CandidateSkills() {
  const { skills, missingSkills, profile } = useCandidate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'AI & ML', 'Languages', 'Tools', 'Databases'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Skill Analysis & Competency Matrix
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Deep multi-vector analysis comparing your skills against live market requirements for <strong className="text-purple-700">{profile.targetRole}</strong>.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-xs font-bold text-purple-800 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-purple-600" />
            <span>Target Match Potential: 98%</span>
          </span>
        </div>
      </div>

      {/* Target Job Skill Gap Visualization (Requirement 7) */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-600" />
              <h3 className="text-base font-extrabold text-slate-900">
                Target Role Skill Gap Benchmark
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Side-by-side comparison: Your Current Proficiency vs Market Expectation for Senior/Lead roles
            </p>
          </div>

          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            5 Key Skill Gaps Identified
          </span>
        </div>

        {/* Skill Gap Visual Comparison Bars */}
        <div className="space-y-6">
          {missingSkills.map((gap) => (
            <div key={gap.name} className="p-4 sm:p-5 bg-slate-50/70 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{gap.name}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{gap.recommendation}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    gap.priority === 'High' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {gap.priority} Priority
                  </span>
                  <span className="text-xs font-extrabold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-lg">
                    {gap.impact}
                  </span>
                </div>
              </div>

              {/* Side-by-side Progress Visual */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-600">Your Current Level: <strong className="text-slate-900">{gap.currentProficiency}%</strong></span>
                  <span className="text-purple-700">Market Target: <strong className="text-purple-900">{gap.targetProficiency}%</strong> (Gap: -{gap.gap}%)</span>
                </div>

                <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  {/* Target Goal marker background */}
                  <div 
                    className="absolute top-0 bottom-0 left-0 bg-purple-200/80 rounded-full"
                    style={{ width: `${gap.targetProficiency}%` }}
                  />
                  {/* Current Candidate level */}
                  <div 
                    className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-900 to-indigo-600 rounded-full"
                    style={{ width: `${gap.currentProficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <Link
            to="/candidate/career-guidance"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-purple-600 hover:text-purple-800"
          >
            <span>View Hand-Picked Learning Pathways to Close Gaps</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Candidate Verified Skills List (Requirement 7) */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">
              Verified Candidate Skills ({skills.length})
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Extracted from your resume, projects, and self-assessments.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name} 
              className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-bold text-slate-900">{skill.name}</span>
                </div>
                <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                  {skill.category}
                </span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-slate-500">
                  <span>Proficiency: {skill.level}</span>
                  <span className="text-indigo-600 font-bold">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-900 via-indigo-600 to-purple-600 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
