import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  Search, 
  Bell, 
  Bookmark, 
  Clock, 
  X
} from 'lucide-react';
import { useCandidate } from '../../context/useCandidate';

export default function CandidateHeader({ onOpenMobileSidebar }) {
  const { profile, notifications, savedJobIds } = useCandidate();
  const [headerSearch, setHeaderSearch] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (headerSearch.trim()) {
      navigate(`/candidate/jobs?q=${encodeURIComponent(headerSearch.trim())}`);
    } else {
      navigate('/candidate/jobs');
    }
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 h-20 px-4 sm:px-8 flex items-center justify-between gap-4">
      
      {/* Left: Mobile Toggle & Welcome Message */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Welcome back, <span className="bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 bg-clip-text text-transparent">{profile.name}</span>
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active Candidate
            </span>
          </div>
          <p className="text-xs text-slate-500 hidden md:block">
            AI has analyzed your profile and discovered new tailored opportunities today.
          </p>
        </div>
      </div>

      {/* Middle: Search Bar */}
      <div className="hidden md:flex flex-1 max-w-md mx-4">
        <form onSubmit={handleSearchSubmit} className="w-full relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={headerSearch}
            onChange={(e) => setHeaderSearch(e.target.value)}
            placeholder="Search matching jobs, skills, or roles..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
          />
        </form>
      </div>

      {/* Right: Actions, Notifications & Profile Avatar */}
      <div className="flex items-center gap-2 sm:gap-3 relative">
        
        {/* Saved Jobs Quick Pill */}
        <Link
          to="/candidate/jobs?tab=saved"
          className="relative p-2 text-slate-600 hover:text-purple-600 hover:bg-slate-50 rounded-xl transition-colors hidden sm:flex items-center gap-1.5 text-xs font-semibold"
          title="View Saved Jobs"
        >
          <Bookmark className="w-4 h-4 text-purple-600" />
          <span className="hidden xl:inline">Saved</span>
          {savedJobIds.length > 0 && (
            <span className="w-5 h-5 text-[10px] font-bold text-white bg-purple-600 rounded-full flex items-center justify-center">
              {savedJobIds.length}
            </span>
          )}
        </Link>

        {/* Notifications Bell */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
            aria-label="View notifications"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-purple-600 rounded-full ring-2 ring-white" />
            )}
          </button>

          {/* Notifications Dropdown */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl border border-slate-200 shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-900">Notifications</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                    {unreadCount} New
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setNotificationsOpen(false)}
                  className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto my-2">
                {notifications.map((item) => (
                  <div key={item.id} className="py-2.5 hover:bg-slate-50 px-2 rounded-xl transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-bold text-slate-800 leading-tight">
                        {item.title}
                      </p>
                      <span className="text-[10px] text-slate-400 shrink-0 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {item.time}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100 text-center">
                <Link
                  to="/candidate/applications"
                  onClick={() => setNotificationsOpen(false)}
                  className="text-xs font-bold text-purple-600 hover:text-purple-800"
                >
                  View All Application Milestones →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Profile Avatar & Link */}
        <Link
          to="/candidate/profile"
          className="flex items-center gap-2 p-1 sm:pl-2 sm:pr-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 via-indigo-700 to-purple-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md shadow-indigo-600/20">
            {profile.avatarLetter}
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold text-slate-900 leading-tight">
              {profile.name}
            </p>
            <p className="text-[10px] text-purple-700 font-semibold">
              Profile 85%+
            </p>
          </div>
        </Link>

      </div>

    </header>
  );
}
