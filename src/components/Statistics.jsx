import React from 'react';
import { 
  Briefcase, 
  Building2, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  BarChart2 
} from 'lucide-react';
import { platformStatistics } from '../data/jobsData';

export default function Statistics() {
  const iconMap = {
    'total-jobs': Briefcase,
    'registered-companies': Building2,
    'active-candidates': Users,
    'successful-matches': CheckCircle2
  };

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header / Label */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-100 gap-3">
          <div>
            <div className="flex items-center gap-2 text-purple-700 text-xs font-bold uppercase tracking-wider mb-1">
              <BarChart2 className="w-4 h-4" />
              <span>Platform Statistics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Powering Careers at Enterprise Scale
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
            Live telemetry data from the CareerAI matching network across key technology hubs.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platformStatistics.map((stat) => {
            const IconComponent = iconMap[stat.id] || TrendingUp;

            return (
              <div
                key={stat.id}
                className="group relative p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-slate-200/50 hover:border-purple-200 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Background Accent Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-transparent to-blue-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 group-hover:bg-purple-600 group-hover:text-white text-purple-700 flex items-center justify-center transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {stat.change}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1 group-hover:text-indigo-900 transition-colors">
                      {stat.value}
                    </h3>
                    <p className="text-sm font-bold text-slate-700">
                      {stat.label}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {stat.subtext}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
