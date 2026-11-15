import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import JobCategories from '../components/JobCategories';
import FeaturedJobs from '../components/FeaturedJobs';
import HowItWorks from '../components/HowItWorks';
import CareerDevelopment from '../components/CareerDevelopment';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ApplyModal from '../components/ApplyModal';
import NotificationToast from '../components/NotificationToast';

export default function LandingPage() {
  // Search and Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Saved Jobs State (persisted in local state)
  const [savedJobIds, setSavedJobIds] = useState([1, 4]);

  // Modal State for Quick Apply
  const [applyingJob, setApplyingJob] = useState(null);

  // Toast Notification State
  const [toast, setToast] = useState(null);

  // Handlers
  const handleToggleSaveJob = (job) => {
    if (savedJobIds.includes(job.id)) {
      setSavedJobIds((prev) => prev.filter((id) => id !== job.id));
      setToast({
        title: 'Removed from Saved',
        message: `"${job.title}" removed from your bookmarked jobs.`,
        type: 'bookmark'
      });
    } else {
      setSavedJobIds((prev) => [...prev, job.id]);
      setToast({
        title: 'Saved Successfully',
        message: `"${job.title}" added to your saved positions.`,
        type: 'bookmark'
      });
    }
  };

  const handleSearchTrigger = () => {
    const jobsSection = document.querySelector('#jobs');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplySuccess = (job) => {
    setToast({
      title: 'Application Sent',
      message: `Your profile has been forwarded to ${job.company}.`,
      type: 'apply'
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        savedJobsCount={savedJobIds.length}
      />

      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          locationQuery={locationQuery}
          setLocationQuery={setLocationQuery}
          onSearch={handleSearchTrigger}
        />

        {/* 3. Platform Statistics Section */}
        <Statistics />

        {/* 4. Popular Job Categories Section */}
        <JobCategories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 5. Featured Jobs Section */}
        <FeaturedJobs
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          locationQuery={locationQuery}
          setLocationQuery={setLocationQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          savedJobIds={savedJobIds}
          onToggleSaveJob={handleToggleSaveJob}
          onApplyJob={setApplyingJob}
        />

        {/* 6. How CareerAI Works Section */}
        <HowItWorks />

        {/* 7. Career Development & Skill Gap Section */}
        <CareerDevelopment />

        {/* 8. Call To Action Section */}
        <CTASection />

      </main>

      {/* 9. Comprehensive Footer */}
      <Footer />

      {/* Modals & Feedback Notifications */}
      <ApplyModal
        job={applyingJob}
        onClose={() => setApplyingJob(null)}
        onSubmitSuccess={handleApplySuccess}
      />

      <NotificationToast
        notification={toast}
        onDismiss={() => setToast(null)}
      />

    </div>
  );
}
