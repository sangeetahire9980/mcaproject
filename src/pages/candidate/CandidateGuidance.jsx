import React from 'react';
import { 
  Compass, 
  BookOpen, 
  Star, 
  Clock, 
  Zap, 
  ExternalLink,
  Award
} from 'lucide-react';
import { useCandidate } from '../../context/useCandidate';

export default function CandidateGuidance() {
  const { courses, improvementTips, missingSkills, profile } = useCandidate();

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Personalized Career Guidance & Pathways
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            AI-recommended roadmap to accelerate your trajectory from <strong className="text-slate-800">MCA Graduate</strong> to <strong className="text-purple-700">{profile.targetRole}</strong>.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-purple-600" />
            <span>AI Trajectory Roadmap</span>
          </span>
        </div>
      </div>

      {/* Career Trajectory Pathway Flow */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl shadow-xl space-y-6">
        <div>
          <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block mb-1">
            Target Career Milestone Progression
          </span>
          <h3 className="text-xl sm:text-2xl font-black">
            Full Stack AI Engineering Pathway
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 space-y-2">
            <span className="text-[10px] font-bold text-emerald-300 uppercase">Phase 1 (Completed)</span>
            <h4 className="text-sm font-bold text-white">Full Stack Core</h4>
            <p className="text-xs text-slate-300">React.js, Node.js, SQL, REST APIs, Tailwind CSS</p>
          </div>

          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border-2 border-purple-400 space-y-2 shadow-lg">
            <span className="text-[10px] font-bold text-purple-300 uppercase">Phase 2 (In Progress)</span>
            <h4 className="text-sm font-bold text-white">AI / ML Integration</h4>
            <p className="text-xs text-slate-200">PyTorch, LLM Fine-Tuning, RAG, Python Pipelines</p>
          </div>

          <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 space-y-2">
            <span className="text-[10px] font-bold text-amber-300 uppercase">Phase 3 (Next Goal)</span>
            <h4 className="text-sm font-bold text-white">Cloud & DevOps</h4>
            <p className="text-xs text-slate-300">Docker, Kubernetes, AWS, Pinecone Vector DB</p>
          </div>

          <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 space-y-2">
            <span className="text-[10px] font-bold text-slate-300 uppercase">Phase 4 (Target)</span>
            <h4 className="text-sm font-bold text-white">Senior AI Architect</h4>
            <p className="text-xs text-slate-300">High-throughput microservices & system architecture</p>
          </div>
        </div>
      </div>

      {/* Suggested Skills to Learn (Requirement 8) */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-5">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-600" />
            <span>High-Value Skills to Learn Next</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Ranked by impact on your candidate match score and salary potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {missingSkills.slice(0, 3).map((item) => (
            <div key={item.name} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">{item.name}</span>
                <span className="text-[11px] font-extrabold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">
                  {item.impact}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.recommendation}
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-slate-600 border-t border-slate-200/60">
                <span>Priority: <strong className="text-rose-600">{item.priority}</strong></span>
                <span>Target: <strong>{item.targetProficiency}%</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Relevant Courses (Requirement 8) */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span>Curated Learning Modules & Certifications</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Targeted curriculums designed to close your identified skill gaps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                    Bridges: {course.targetGap}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <h4 className="text-base font-extrabold text-slate-900 leading-snug mb-1">
                  {course.title}
                </h4>
                <p className="text-xs font-medium text-slate-500 mb-2">
                  Provider: {course.provider} • Level: {course.level}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </span>

                <a
                  href="#course-link"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Demo Course Link: Opening syllabus for "${course.title}" from ${course.provider}`);
                  }}
                  className="inline-flex items-center gap-1.5 font-bold text-purple-600 hover:text-purple-800"
                >
                  <span>Explore Syllabus</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Improvement Recommendations (Requirement 8) */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            <span>Actionable Career Improvement Recommendations</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Practical steps tailored to MCA final-year students to elevate interview conversion rates.
          </p>
        </div>

        <div className="space-y-3">
          {improvementTips.map((tip) => (
            <div key={tip.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                    {tip.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {tip.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {tip.description}
                </p>
              </div>

              <span className="text-xs font-bold text-purple-700 bg-purple-100 px-3 py-1.5 rounded-xl shrink-0 text-center">
                {tip.status}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
