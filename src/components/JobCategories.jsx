import React from 'react';
import { 
  Code2, 
  Database, 
  Brain, 
  Palette, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { jobCategories } from '../data/jobsData';

export default function JobCategories({ selectedCategory, onSelectCategory }) {
  const iconComponents = {
    Code2,
    Database,
    Brain,
    Palette,
    BarChart3,
    ShieldCheck
  };

  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      onSelectCategory('all');
    } else {
      onSelectCategory(categoryId);
    }
    
    const jobsElement = document.querySelector('#jobs');
    if (jobsElement) {
      jobsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Explore Roles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular Job Categories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Explore high-growth tech domains analyzed by our AI model. Select any category to filter available positions.
            </p>
          </div>

          {/* All Categories Reset Button */}
          <button
            type="button"
            onClick={() => {
              onSelectCategory('all');
              const jobsElement = document.querySelector('#jobs');
              if (jobsElement) jobsElement.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-purple-300 hover:text-purple-700'
            }`}
          >
            <span>Show All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobCategories.map((category) => {
            const IconComponent = iconComponents[category.iconName] || Code2;
            const isSelected = selectedCategory === category.id;

            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border text-left ${
                  isSelected
                    ? 'bg-white border-purple-500 ring-2 ring-purple-500/20 shadow-lg -translate-y-1'
                    : 'bg-white border-slate-200/90 hover:border-purple-300 shadow-xs hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-tr from-blue-900 via-indigo-700 to-purple-600 text-white shadow-md shadow-indigo-500/30'
                        : 'bg-purple-50 text-purple-700 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-md'
                    }`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors">
                    {category.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-900 transition-colors mb-1.5">
                  {category.name}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {category.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg">
                    {category.count}
                  </span>

                  <span className="text-xs font-semibold text-slate-400 group-hover:text-purple-600 flex items-center gap-1 transition-colors">
                    {isSelected ? 'Filtered' : 'Filter jobs'}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
