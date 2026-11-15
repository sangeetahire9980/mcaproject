import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  CheckCircle2
} from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Container with Navy and Purple Gradient */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white p-8 sm:p-14 lg:p-16 shadow-2xl overflow-hidden border border-indigo-900/50">
          
          {/* Subtle Background Glow circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span>Join 180,000+ Tech Professionals</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
              Ready to Take the Next Step in Your Career?
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Unlock intelligent job matching, uncover high-impact skill gaps, and accelerate your recruitment pipeline with CareerAI's neural career intelligence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-98 transition-all cursor-pointer"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5 text-indigo-600" />
              </Link>

              <a
                href="#jobs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
              >
                <span>Browse Sample Jobs</span>
              </a>
            </div>

            {/* Highlights Below CTA */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free for candidates</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Instant profile scoring</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>No spam or unvetted recruiters</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
