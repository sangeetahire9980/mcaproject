import React from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  LayoutDashboard, 
  User, 
  FileText, 
  Search, 
  Send, 
  Sliders, 
  Compass, 
  Settings, 
  LogOut,
  X,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { useCandidate } from '../../context/useCandidate';

export default function CandidateSidebar({ mobileOpen, onCloseMobile }) {
  const { profile, applications, profileCompletion } = useCandidate();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Overview', to: '/candidate/dashboard', icon: LayoutDashboard },
    { name: 'My Profile', to: '/candidate/profile', icon: User },
    { name: 'My Resume', to: '/candidate/resume', icon: FileText },
    { name: 'Find Jobs', to: '/candidate/jobs', icon: Search },
    { 
      name: 'Recommended Jobs', 
      to: '/candidate/jobs?tab=recommended', 
      icon: Sparkles,
      badge: '90%+ Match'
    },
    { 
      name: 'My Applications', 
      to: '/candidate/applications', 
      icon: Send,
      count: applications.length
    },
    { name: 'Skill Analysis', to: '/candidate/skills', icon: Sliders },
    { name: 'Career Guidance', to: '/candidate/career-guidance', icon: Compass },
    { name: 'Settings', to: '/candidate/settings', icon: Settings },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  const isCurrentActive = (item) => {
    if (item.to.includes('?tab=')) {
      return location.pathname === '/candidate/jobs' && location.search.includes('tab=recommended');
    }
    if (item.to === '/candidate/jobs') {
      return location.pathname === '/candidate/jobs' && !location.search.includes('tab=recommended');
    }
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
      <aside className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white border-r border-slate-200/90 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Top Header & Logo */}
        <div>
          <div className="h-20 px-6 border-b border-slate-100 flex items-center justify-between">
            <Link 
              to="/candidate/dashboard" 
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
                  Candidate Portal
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
              Candidate Menu
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
                      ? 'bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 text-white shadow-md shadow-indigo-600/20'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComp className={`w-4 h-4 shrink-0 transition-colors ${
                      active ? 'text-white' : 'text-slate-400 group-hover:text-indigo-600'
                    }`} />
                    <span>{item.name}</span>
                  </div>

                  {item.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      active 
                        ? 'bg-white/20 text-white' 
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {item.badge}
                    </span>
                  )}

                  {item.count !== undefined && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      active 
                        ? 'bg-white/20 text-white' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Profile & Logout Box */}
        <div className="p-4 border-t border-slate-100 space-y-3 bg-slate-50/50">
          
          {/* Quick Profile Completion Meter */}
          <div className="p-3 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
              <span className="text-slate-600 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-purple-600" />
                Profile Strength
              </span>
              <span className="text-indigo-600 font-bold">{profileCompletion}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-900 via-indigo-600 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${profileCompletion}%` }}
              />
            </div>
          </div>

          {/* User Profile Card */}
          <div className="flex items-center justify-between">
            <Link 
              to="/candidate/profile"
              onClick={onCloseMobile}
              className="flex items-center gap-2.5 group flex-1 mr-2"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold flex items-center justify-center text-xs shadow-xs group-hover:scale-105 transition-transform">
                {profile.avatarLetter}
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                  {profile.name}
                </p>
                <p className="text-[10px] text-slate-500 truncate">
                  MCA Final Year
                </p>
              </div>
            </Link>

            {/* Logout Button */}
            <button
              type="button"
              onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
              title="Logout"
              aria-label="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          {/* Back to Public Home link */}
          <Link
            to="/"
            className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-indigo-600 py-1 transition-colors"
          >
            <span>View Public Website</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>

        </div>

      </aside>
    </>
  );
}
