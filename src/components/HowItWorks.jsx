import React from 'react';
import { 
  FileUp, 
  Cpu, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';
import { howItWorksSteps } from '../data/jobsData';

export default function HowItWorks() {
  const iconComponents = {
    FileUp,
    Cpu,
    Target,
    CheckCircle2
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-50/70 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-100/40 via-blue-100/30 to-indigo-100/40 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Intelligent Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            How Career<span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">AI</span> Works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our multi-stage pipeline transforms traditional unstructured job searching into an accurate, AI-optimized matching experience.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          
          {/* Subtle connecting line across desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-200 via-indigo-300 to-blue-200 -translate-y-12 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {howItWorksSteps.map((stepItem) => {
              const IconComp = iconComponents[stepItem.iconName] || FileUp;

              return (
                <div
                  key={stepItem.step}
                  className="group bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2"
                >
                  <div>
                    {/* Top Step Number Badge and Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-900 via-indigo-700 to-purple-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-300">
                        <IconComp className="w-7 h-7" />
                      </div>

                      <span className="text-2xl font-black text-slate-200 group-hover:text-purple-600/40 transition-colors tracking-tighter">
                        {stepItem.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-900 transition-colors mb-3 leading-snug">
                      {stepItem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {stepItem.description}
                    </p>
                  </div>

                  {/* Bottom Metric Pill */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-purple-700 bg-purple-50/60 px-3 py-2 rounded-xl">
                    <Zap className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>{stepItem.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Feature Sub-banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Trained on over 2.5 million verified tech resumes & job descriptions
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Continuous feedback loops ensure candidates match roles where their actual competencies align with company tech stacks.
              </p>
            </div>
          </div>

          <a
            href="#jobs"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            <span>Explore Matching Positions</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
