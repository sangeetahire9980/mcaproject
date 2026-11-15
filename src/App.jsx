import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

// Candidate Portal Pages
import DashboardLayout from './pages/candidate/DashboardLayout';
import CandidateDashboard from './pages/candidate/CandidateDashboard';
import CandidateProfile from './pages/candidate/CandidateProfile';
import CandidateResume from './pages/candidate/CandidateResume';
import CandidateJobs from './pages/candidate/CandidateJobs';
import CandidateApplications from './pages/candidate/CandidateApplications';
import CandidateSkills from './pages/candidate/CandidateSkills';
import CandidateGuidance from './pages/candidate/CandidateGuidance';
import CandidateSettings from './pages/candidate/CandidateSettings';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Candidate Dashboard Routes */}
        <Route path="/candidate" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/candidate/dashboard" replace />} />
          <Route path="dashboard" element={<CandidateDashboard />} />
          <Route path="profile" element={<CandidateProfile />} />
          <Route path="resume" element={<CandidateResume />} />
          <Route path="jobs" element={<CandidateJobs />} />
          <Route path="applications" element={<CandidateApplications />} />
          <Route path="skills" element={<CandidateSkills />} />
          <Route path="career-guidance" element={<CandidateGuidance />} />
          <Route path="settings" element={<CandidateSettings />} />
        </Route>

        {/* Catch-all redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
