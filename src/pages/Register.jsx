import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  ArrowRight,
  ArrowLeft,
  ShieldAlert
} from 'lucide-react';

export default function Register() {
  // Form fields
  const [accountType, setAccountType] = useState('candidate'); // 'candidate' | 'recruiter'
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validation
  const validate = () => {
    const newErrors = {};

    // Account Type
    if (!accountType || (accountType !== 'candidate' && accountType !== 'recruiter')) {
      newErrors.accountType = 'Please select a valid account type.';
    }

    // Full Name
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    // Email
    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Phone Number
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s-]{10,15}$/.test(phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits).';
    }

    // Password
    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    } else if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
      newErrors.password = 'Password must contain both letters and numbers.';
    }

    // Confirm Password
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    // Terms & Conditions
    if (!agreeTerms) {
      newErrors.agreeTerms = 'You must accept the Terms of Service and Privacy Policy.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate validation verification without fake backend calls or localStorage storage
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'info',
        message: `Validation passed for ${accountType === 'candidate' ? 'Candidate' : 'Recruiter'} registration! Passwords match and all fields are verified. (Backend registration endpoint will be integrated in the next development phase).`
      });
    }, 900);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 flex flex-col justify-between selection:bg-purple-100 selection:text-purple-900">
      
      {/* Top Header */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 via-indigo-700 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center">
              Career<span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">AI</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500 -mt-1">
              AI Career Intelligence
            </span>
          </div>
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-indigo-600 px-3.5 py-2 rounded-xl hover:bg-white/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Main Registration Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/40 relative">
          
          {/* Header */}
          <div className="mb-8 text-center max-w-lg mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Public Account Registration</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Create Your CareerAI Account
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Select your role and begin leveraging AI semantic matching.
            </p>
          </div>

          {/* Submission Status Banner */}
          {submitStatus && (
            <div className="mb-6 p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-start gap-3 text-left">
              <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div className="text-xs text-indigo-900">
                <p className="font-bold">Form Validation Result:</p>
                <p className="mt-0.5 leading-relaxed">{submitStatus.message}</p>
              </div>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* 1. Account Type Selection (Candidate or Recruiter) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                Account Type <span className="text-purple-600">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Candidate Option */}
                <div
                  onClick={() => setAccountType('candidate')}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                    accountType === 'candidate'
                      ? 'border-indigo-600 bg-indigo-50/40 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    accountType === 'candidate'
                      ? 'bg-gradient-to-tr from-blue-900 via-indigo-700 to-purple-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-slate-900">Candidate</h4>
                      {accountType === 'candidate' && (
                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Job Seeker, MCA student or tech professional seeking AI-matched roles.
                    </p>
                  </div>
                </div>

                {/* Recruiter Option */}
                <div
                  onClick={() => setAccountType('recruiter')}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                    accountType === 'recruiter'
                      ? 'border-indigo-600 bg-indigo-50/40 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    accountType === 'recruiter'
                      ? 'bg-gradient-to-tr from-blue-900 via-indigo-700 to-purple-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-slate-900">Recruiter / Employer</h4>
                      {accountType === 'recruiter' && (
                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Hiring manager or talent acquisition leader searching for verified candidates.
                    </p>
                  </div>
                </div>

              </div>

              {/* Security Policy Notice: Admin role cannot be created through public registration */}
              <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-500">
                <ShieldAlert className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-700">Role Notice:</strong> Only Candidate and Recruiter accounts can be created through public registration. Administrator accounts are pre-provisioned through internal security protocols.
                </p>
              </div>
            </div>

            {/* 2. Personal Information: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div>
                <label 
                  htmlFor="reg-fullname" 
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Full Name <span className="text-purple-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-fullname"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: null }));
                    }}
                    placeholder={accountType === 'candidate' ? 'e.g. Alex Morgan' : 'e.g. Sarah Jenkins'}
                    className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="flex items-center gap-1 text-xs text-rose-600 font-medium mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label 
                  htmlFor="reg-email" 
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Email Address <span className="text-purple-600">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
                    }}
                    placeholder="name@example.com"
                    className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                      errors.email
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="flex items-center gap-1 text-xs text-rose-600 font-medium mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

            </div>

            {/* 3. Phone Number */}
            <div>
              <label 
                htmlFor="reg-phone" 
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Phone Number <span className="text-purple-600">*</span>
              </label>
              <div className="relative">
                <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="reg-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: null }));
                  }}
                  placeholder="+91 98765 43210"
                  className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                    errors.phone
                      ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                      : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="flex items-center gap-1 text-xs text-rose-600 font-medium mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* 4. Password & Confirm Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Password */}
              <div>
                <label 
                  htmlFor="reg-password" 
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Password <span className="text-purple-600">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
                    }}
                    placeholder="Min 8 characters (letters & numbers)"
                    className={`w-full pl-11 pr-11 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                      errors.password
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="flex items-center gap-1 text-xs text-rose-600 font-medium mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.password}</span>
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label 
                  htmlFor="reg-confirm-password" 
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Confirm Password <span className="text-purple-600">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: null }));
                    }}
                    placeholder="Re-enter your password"
                    className={`w-full pl-11 pr-11 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                      errors.confirmPassword
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-100'
                        : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                    aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="flex items-center gap-1 text-xs text-rose-600 font-medium mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.confirmPassword}</span>
                  </p>
                )}
              </div>

            </div>

            {/* 5. Terms & Conditions Checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => {
                    setAgreeTerms(e.target.checked);
                    if (errors.agreeTerms) setErrors((prev) => ({ ...prev, agreeTerms: null }));
                  }}
                  className="mt-0.5 w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-slate-300"
                />
                <span className="text-xs sm:text-sm text-slate-600 leading-snug">
                  I agree to CareerAI's{' '}
                  <span className="font-semibold text-purple-600 hover:text-purple-800">Terms of Service</span>{' '}
                  and{' '}
                  <span className="font-semibold text-purple-600 hover:text-purple-800">Privacy Policy</span>.
                </span>
              </label>
              {errors.agreeTerms && (
                <p className="flex items-center gap-1 text-xs text-rose-600 font-medium mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.agreeTerms}</span>
                </p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 hover:from-blue-950 hover:via-indigo-800 hover:to-purple-700 shadow-md shadow-indigo-600/30 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Information...</span>
                </>
              ) : (
                <>
                  <span>Register as {accountType === 'candidate' ? 'Candidate' : 'Recruiter'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

          </form>

          {/* Switch to Login */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs sm:text-sm text-slate-500">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-bold text-purple-600 hover:text-purple-800 transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-slate-400">
        © 2026 CareerAI. All rights reserved. Developed as an MCA Final-Year Project.
      </footer>

    </div>
  );
}
