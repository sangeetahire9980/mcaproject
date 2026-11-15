import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  RotateCcw
} from 'lucide-react';
import { useCandidate } from '../../context/useCandidate';

export default function CandidateResume() {
  const { profile } = useCandidate();
  const [isParsing, setIsParsing] = useState(false);
  const [parseSuccess, setParseSuccess] = useState(false);

  const handleSimulateReParse = () => {
    setIsParsing(true);
    setParseSuccess(false);
    setTimeout(() => {
      setIsParsing(false);
      setParseSuccess(true);
    }, 1000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            My Resume & AI Parser Intelligence
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your parsed CV and view extracted technical competency entities.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>ATS Compatibility: 92%</span>
          </span>
        </div>
      </div>

      {/* Current Resume Info Card */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <FileText className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-extrabold text-slate-900">
                {profile.resumeName}
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Verified
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-3">
              <span>Size: {profile.resumeSize}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                Updated: {profile.resumeLastUpdated}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleSimulateReParse}
            disabled={isParsing}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <RotateCcw className={`w-4 h-4 ${isParsing ? 'animate-spin' : ''}`} />
            <span>{isParsing ? 'Analyzing Entities...' : 'Re-Run AI Parser'}</span>
          </button>

          <a
            href="#download"
            onClick={(e) => {
              e.preventDefault();
              alert('Downloading parsed resume demo copy (Alex_Morgan_MCA_Resume_2026.pdf)...');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-indigo-700 transition-colors shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {parseSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-xs text-emerald-900 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <p className="font-bold">Resume Semantic Re-Indexing Complete</p>
            <p className="mt-0.5">All 14 technical skills, degree credentials, and project highlights have been refreshed in the candidate matching index.</p>
          </div>
        </div>
      )}

      {/* Upload Drag & Drop Box */}
      <div className="p-8 bg-slate-50/70 rounded-3xl border-2 border-dashed border-slate-300 text-center hover:border-purple-400 transition-all cursor-pointer">
        <div className="w-14 h-14 rounded-2xl bg-white text-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-xs">
          <Upload className="w-7 h-7" />
        </div>
        <h4 className="text-base font-bold text-slate-900">
          Upload Updated Resume
        </h4>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
          Drag and drop your PDF or DOCX file here, or click to browse from your device.
        </p>
        <span className="text-[11px] text-slate-400 mt-3 inline-block">
          Supported formats: .pdf, .docx, .rtf (Max size: 5MB)
        </span>
      </div>

      {/* AI Parsed Extraction Breakdown */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h3 className="text-base font-extrabold text-slate-900">
              AI Parser Extracted Entities
            </h3>
          </div>
          <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg">
            99.2% Extraction Confidence
          </span>
        </div>

        {/* Grid of Extracted Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Extracted Education */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Education Credential
            </span>
            <p className="text-sm font-bold text-slate-800">
              {profile.degree}
            </p>
            <p className="text-xs text-slate-500">
              {profile.university} (Class of {profile.graduationYear})
            </p>
            <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
              CGPA: {profile.cgpa}
            </span>
          </div>

          {/* Extracted Projects */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Featured Capstone Projects
            </span>
            <p className="text-sm font-bold text-slate-800">
              CareerAI Matching Platform
            </p>
            <p className="text-xs text-slate-500">
              Tech: React 19, Tailwind CSS, Semantic Scoring
            </p>
            <p className="text-xs font-semibold text-indigo-700 pt-1">
              + Distributed Task Microservice
            </p>
          </div>

          {/* Extracted Skills Count */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Identified Proficiencies
            </span>
            <p className="text-2xl font-black text-slate-900">
              14 Technical Skills
            </p>
            <p className="text-xs text-slate-500">
              Top tags: React, Node.js, Python, PyTorch, Tailwind CSS, PostgreSQL
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
