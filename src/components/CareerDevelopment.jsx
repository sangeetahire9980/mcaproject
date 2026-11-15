import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sliders, 
  Compass, 
  BookOpen, 
  LineChart, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  AlertCircle,
  Target
} from 'lucide-react';
import { careerDevelopmentFeatures } from '../data/jobsData';

export default function CareerDevelopment() {
  const [activeTab, setActiveTab] = useState('skill-gap');

  const iconMap = {
    Sliders,
    Compass,
    BookOpen,
    LineChart
  };

  const activeFeature = careerDevelopmentFeatures.find((f) => f.id === activeTab) || careerDevelopmentFeatures[0];

  return (
    <section id="guidance" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>AI Career Accelerator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Intelligent Career Development & Growth
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            CareerAI goes beyond simply finding listings. We empower candidates to uncover skill gaps, benchmark competencies, and follow actionable learning pathways.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {careerDevelopmentFeatures.map((feat) => {
            const IconComp = iconMap[feat.iconName] || Sliders;
            const isCurrent = activeTab === feat.id;

            return (
              <button
                key={feat.id}
                type="button"
                onClick={() => setActiveTab(feat.id)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white border-transparent shadow-lg shadow-indigo-950/20'
                    : 'bg-slate-50 hover:bg-slate-100/80 text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isCurrent
                        ? 'bg-white/10 text-white'
                        : 'bg-white text-indigo-600 shadow-xs'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                  )}
                </div>

                <div>
                  <h4 className={`text-sm sm:text-base font-bold leading-snug ${isCurrent ? 'text-white' : 'text-slate-900'}`}>
                    {feat.title}
                  </h4>
                  <p className={`text-xs mt-1 font-medium ${isCurrent ? 'text-indigo-200' : 'text-slate-500'}`}>
                    {feat.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Feature Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 p-6 sm:p-10 rounded-3xl border border-slate-200">
          
          {/* Left Column: Feature explanation & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>{activeFeature.tag}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              {activeFeature.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {activeFeature.description}
            </p>

            {/* Checklist Highlights */}
            <div className="space-y-3 pt-2">
              {activeFeature.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 hover:from-blue-950 hover:via-indigo-800 hover:to-purple-700 shadow-md shadow-indigo-600/20 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Run Free AI Career Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Interactive Mockup Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xl relative">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Career Competency Radar</h5>
                    <p className="text-xs text-slate-500">Benchmark: Full Stack AI Engineer</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-medium">Readiness Index</span>
                  <span className="text-lg font-black text-indigo-700">88 / 100</span>
                </div>
              </div>

              {/* Skills Progress Bars */}
              <div className="mt-5 space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-800">React.js & Frontend Architecture</span>
                    <span className="text-emerald-600">96% Matched</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[96%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-800">Python, PyTorch & AI Fundamentals</span>
                    <span className="text-emerald-600">90% Matched</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-800">Tailwind CSS & Responsive UI Design</span>
                    <span className="text-emerald-600">95% Matched</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full w-[95%]" />
                  </div>
                </div>

                {/* Skill Gap Alert */}
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 mt-4">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-amber-900 block mb-0.5">
                        Identified Skill Gap: Docker & Container Orchestration
                      </span>
                      <span className="text-amber-800">
                        Adding this skill will boost your match compatibility score by <strong className="text-amber-950">+12%</strong> for Tier-1 companies.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actionable Learning Path Preview */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <Target className="w-4 h-4 text-purple-600" />
                  <span className="font-medium">Curated MCA Student Pathway:</span>
                </div>
                <span className="font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg">
                  3 Modules Recommended
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
