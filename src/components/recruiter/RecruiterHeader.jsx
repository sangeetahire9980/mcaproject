import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, Bell, Building2, X, ChevronDown } from 'lucide-react';
import { useRecruiter } from '../../context/useRecruiter';

const HARDCODED_NOTIFICATIONS = [
  {
    id: 1,
    title: 'New application received',
    description: 'Priya Sharma applied for Senior React Developer',
    time: '2 min ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Interview scheduled',
    description: 'Technical interview with Rahul Mehta confirmed for tomorrow',
    time: '1 hr ago',
    unread: true,
  },
  {
    id: 3,
    title: 'Shortlisted candidate update',
    description: 'Anjali Verma accepted the interview invitation',
    time: '3 hr ago',
    unread: true,
  },
];

export default function RecruiterHeader({ onOpenMobileSidebar }) {
  const { recruiterUser } = useRecruiter();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/recruiter/applicants?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const avatarInitials =
    recruiterUser?.avatar ||
    (recruiterUser?.name
      ? recruiterUser.name
          .split(' ')
          .map((n) => n[0])
          .join('')
          .slice(0, 2)
          .toUpperCase()
      : 'R');

  return (
    <header className="sticky top-0 z-30 h-20 bg-white/95 backdrop-blur-md border-b border-slate-200/90 flex items-center px-4 sm:px-6 gap-4">
      {/* Mobile Hamburger */}
      <button
        type="button"
        onClick={onOpenMobileSidebar}
        className="lg:hidden p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors shrink-0"
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Page Title Area */}
      <div className="hidden sm:flex flex-col justify-center min-w-0 flex-shrink-0">
        <h1 className="text-sm font-bold leading-tight truncate">
          <span className="text-slate-800">Welcome back, </span>
          <span className="bg-gradient-to-r from-blue-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {recruiterUser?.name || 'Recruiter'}
          </span>
        </h1>
        <p className="text-[11px] text-slate-500 truncate leading-tight mt-0.5">
          Manage your talent pipeline with AI-powered insights
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className="hidden md:flex items-center gap-2 bg-slate-100 hover:bg-slate-200/70 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-300 rounded-xl px-3 py-2 transition-all w-56 lg:w-72"
      >
        <Search className="w-4 h-4 text-slate-400 shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search applicants..."
          className="bg-transparent text-xs text-slate-700 placeholder-slate-400 outline-none w-full"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </form>

      {/* Right Actions */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Notification Bell */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowNotifications((prev) => !prev)}
            className="relative p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {/* Badge */}
            <span className="absolute top-1 right-1 w-4 h-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
              3
            </span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/80 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-800">Notifications</span>
                <button
                  type="button"
                  onClick={() => setShowNotifications(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Close notifications"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {HARDCODED_NOTIFICATIONS.map((notif) => (
                  <div
                    key={notif.id}
                    className="px-4 py-3 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-indigo-500 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-800 truncate">{notif.title}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed line-clamp-2">
                          {notif.description}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1">{notif.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2.5 border-t border-slate-100 bg-slate-50/60">
                <button
                  type="button"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Avatar + Role */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-900 to-purple-700 text-white font-bold flex items-center justify-center text-xs shadow-sm shrink-0 cursor-pointer hover:scale-105 transition-transform">
            {avatarInitials}
          </div>
          <div className="hidden lg:flex flex-col min-w-0">
            <span className="text-xs font-bold text-slate-800 truncate leading-tight">
              {recruiterUser?.name || 'Recruiter'}
            </span>
            <span className="text-[10px] text-slate-500 truncate leading-tight">
              {recruiterUser?.role || 'HR Manager'}
            </span>
          </div>
          <ChevronDown className="hidden lg:block w-3.5 h-3.5 text-slate-400 shrink-0" />
        </div>
      </div>
    </header>
  );
}
