import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CandidateProvider } from '../../context/CandidateContext';
import { useCandidate } from '../../context/useCandidate';
import CandidateSidebar from '../../components/candidate/CandidateSidebar';
import CandidateHeader from '../../components/candidate/CandidateHeader';
import { CheckCircle2, Bookmark, Info, X } from 'lucide-react';

function DashboardContent() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { toastMessage, clearToast } = useCandidate();

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 flex selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. Sidebar (Fixed on desktop, drawer on mobile) */}
      <CandidateSidebar 
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* 2. Main Content Area */}
      <div className="flex-1 lg:pl-72 flex flex-col min-w-0 transition-all duration-300">
        
        {/* Header */}
        <CandidateHeader 
          onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
        />

        {/* Dynamic Route Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
            <div className="bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 max-w-md">
              <div className="w-8 h-8 rounded-xl bg-purple-600/30 text-purple-400 flex items-center justify-center shrink-0">
                {toastMessage.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : toastMessage.type === 'bookmark' ? (
                  <Bookmark className="w-4 h-4 text-purple-400 fill-purple-400" />
                ) : (
                  <Info className="w-4 h-4 text-blue-400" />
                )}
              </div>
              <div className="flex-1 pr-2">
                <p className="text-xs font-bold text-white">{toastMessage.title}</p>
                <p className="text-[11px] text-slate-300 mt-0.5">{toastMessage.message}</p>
              </div>
              <button
                type="button"
                onClick={clearToast}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default function DashboardLayout() {
  return (
    <CandidateProvider>
      <DashboardContent />
    </CandidateProvider>
  );
}
