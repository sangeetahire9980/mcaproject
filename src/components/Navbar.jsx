import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Menu, 
  X, 
  Bookmark, 
  ArrowRight, 
  LogIn
} from 'lucide-react';

export default function Navbar({ savedJobsCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Find Jobs', href: '#jobs' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Career Guidance', href: '#guidance' },
    { name: 'About Us', href: '#about' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                handleNavClick('#home');
              }
            }}
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-900 via-indigo-700 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-slate-900 flex items-center">
                Career<span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">AI</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500 -mt-1">
                AI Career Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Saved Jobs Indicator */}
            <button
              type="button"
              onClick={() => handleNavClick('#jobs')}
              className="relative p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 text-sm font-medium"
              title="View Saved Jobs"
            >
              <Bookmark className="w-4 h-4 text-purple-600" />
              <span className="hidden lg:inline text-xs">Saved</span>
              {savedJobsCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-purple-600 rounded-full">
                  {savedJobsCount}
                </span>
              )}
            </button>

            {/* Login Link */}
            <Link
              to="/login"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>

            {/* Register / Get Started Link */}
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 hover:from-blue-950 hover:via-indigo-800 hover:to-purple-700 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 active:scale-98 transition-all cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            {savedJobsCount > 0 && (
              <button
                type="button"
                onClick={() => handleNavClick('#jobs')}
                className="relative p-2 text-slate-700"
              >
                <Bookmark className="w-5 h-5 text-purple-600" />
                <span className="absolute top-1 right-1 w-4 h-4 text-[10px] font-bold text-white bg-purple-600 rounded-full flex items-center justify-center">
                  {savedJobsCount}
                </span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-lg text-left cursor-pointer"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center cursor-pointer block"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 rounded-xl shadow-md text-center cursor-pointer block"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
