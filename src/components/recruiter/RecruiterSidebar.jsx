import React from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Sparkles,
  LayoutDashboard,
  Building2,
  PlusCircle,
  Briefcase,
  Users,
  UserCheck,
  CalendarCheck,
  BarChart3,
  Settings,
  LogOut,
  X,
  Zap,
  ChevronRight,
} from 'lucide-react';
import { useRecruiter } from '../../context/useRecruiter';

export default function RecruiterSidebar({ mobileOpen, onCloseMobile }) {
  const { recruiterUser, companyProfile, jobs, applicants, interviews } = useRecruiter();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Overview', to: '/recruiter/dashboard', icon: LayoutDashboard },
    { name: 'Company Profile', to: '/recruiter/company-profile', icon: Building2 },
    { name: 'Post a Job', to: '/recruiter/post-job', icon: PlusCircle, highlight: true },
    { name: 'Manage Jobs', to: '/recruiter/manage-jobs', icon: Briefcase, count: jobs.length },
    { name: 'Applicants', to: '/recruiter/applicants', icon: Users, count: applicants.length },
    {
      name: 'Shortlisted',
      to: '/recruiter/shortlisted',
      icon: UserCheck,
      count: applicants.filter((a) => a.status === 'Shortlisted').length,
    },
    { name: 'Interviews', to: '/recruiter/interviews', icon: CalendarCheck, count: interviews.length },
    { name: 'Analytics', to: '/recruiter/analytics', icon: BarChart3 },
    { name: 'Settings', to: '/recruiter/settings', icon: Settings },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  const isCurrentActive = (item) => {
    return location.pathname === item.to;
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 lg:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white border-r border-slate-200/90 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header & Logo */}
        <div>
          <div className="h-20 px-6 border-b border-slate-100 flex items-center justify-between">
            <Link
              to="/recruiter/dashboard"
              onClick={onCloseMobile}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 via-indigo-700 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center">
                  Career<span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">AI</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-700 -mt-1">
                  Recruiter Portal
                </span>
              </div>
            </Link>

            {/* Mobile close button */}
            <button
              type="button"
              onClick={onCloseMobile}
              className="lg:hidden p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-220px)]">
            <p className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Recruiter Menu
            </p>

            {navItems.map((item) => {
              const IconComp = item.icon;
              const active = isCurrentActive(item);

              return (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={onCloseMobile}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all group ${
                    active
                      ? 'bg-gradient-to-r from-blue-900 to-purple-700 text-white shadow-md shadow-indigo-600/20'
                      : item.highlight
                      ? 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50 ring-1 ring-indigo-300 ring-inset'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComp
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        active
                          ? 'text-white'
                          : item.highlight
                          ? 'text-indigo-500 group-hover:text-indigo-600'
                          : 'text-slate-400 group-hover:text-indigo-600'
                      }`}
                    />
                    <span>{item.name}</span>
                  </div>

                  {item.count !== undefined && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}

                  {item.highlight && !active && (
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Profile & Logout Box */}
        <div className="p-4 border-t border-slate-100 space-y-3 bg-slate-50/50">
          {/* AI Powered badge */}
          <div className="p-3 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
              <span className="text-slate-600 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-purple-600" />
                AI-Powered Hiring
              </span>
              <span className="text-indigo-600 font-bold text-[10px] bg-indigo-50 px-2 py-0.5 rounded-full">Active</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Smart candidate matching &amp; analytics enabled
            </p>
          </div>

          {/* User Profile Card */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 flex-1 mr-2 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-900 to-purple-700 text-white font-bold flex items-center justify-center text-xs shadow-xs shrink-0">
                {recruiterUser?.avatar || recruiterUser?.name?.charAt(0) || 'R'}
              </div>
              <div className="truncate">
                {companyProfile?.name && (
                  <p className="text-[9px] font-semibold text-indigo-500 uppercase tracking-wider truncate">
                    {companyProfile.name}
                  </p>
                )}
                <p className="text-xs font-bold text-slate-900 truncate">
                  {recruiterUser?.name || 'Recruiter'}
                </p>
                <p className="text-[10px] text-slate-500 truncate">
                  {recruiterUser?.role || 'HR Manager'}
                </p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              type="button"
              onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer shrink-0"
              title="Logout"
              aria-label="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
