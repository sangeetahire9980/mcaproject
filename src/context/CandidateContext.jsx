import React, { useState, useMemo } from 'react';
import { CandidateContext } from './candidateContextDef';
import { 
  initialCandidateProfile, 
  initialApplications, 
  candidateSkillsList, 
  missingSkillsGap, 
  recommendedCourses, 
  careerImprovementTips,
  candidateNotifications
} from '../data/candidateData';
import { sampleJobsData } from '../data/jobsData';

export function CandidateProvider({ children }) {
  const [profile, setProfile] = useState(initialCandidateProfile);
  const [applications, setApplications] = useState(initialApplications);
  const [savedJobIds, setSavedJobIds] = useState([1, 4, 7]);
  const [notifications, setNotifications] = useState(candidateNotifications);
  const [toastMessage, setToastMessage] = useState(null);

  // Dynamic profile completion calculation
  const profileCompletion = useMemo(() => {
    let completion = 85;
    profile.missingItems.forEach((item) => {
      if (item.completed) {
        if (item.id === 'github') completion += 5;
        if (item.id === 'cert') completion += 10;
      }
    });
    return Math.min(completion, 100);
  }, [profile.missingItems]);

  // Apply to job handler
  const applyToJob = (job) => {
    // Check if already applied
    const existing = applications.find((a) => a.jobId === job.id);
    if (existing) {
      setToastMessage({
        title: 'Already Applied',
        message: `You have already applied for "${job.title}" at ${job.company}.`,
        type: 'info'
      });
      return false;
    }

    const newApp = {
      id: `app-${Date.now()}`,
      jobId: job.id,
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      appliedDate: 'Just now (Demo)',
      status: 'Applied',
      matchScore: job.matchScore || 94,
      notes: 'Application submitted via CareerAI Candidate Dashboard (Demo Mode).'
    };

    setApplications((prev) => [newApp, ...prev]);
    setToastMessage({
      title: 'Application Submitted!',
      message: `Your profile was submitted to ${job.company} with a ${job.matchScore || 94}% match score!`,
      type: 'success'
    });
    return true;
  };

  // Toggle Save Job handler
  const toggleSaveJob = (jobId) => {
    setSavedJobIds((prev) => {
      const isSaved = prev.includes(jobId);
      if (isSaved) {
        setToastMessage({
          title: 'Removed from Saved',
          message: 'Job removed from your saved list.',
          type: 'info'
        });
        return prev.filter((id) => id !== jobId);
      } else {
        setToastMessage({
          title: 'Job Saved!',
          message: 'Job bookmarked to your saved collection.',
          type: 'success'
        });
        return [...prev, jobId];
      }
    });
  };

  // Toggle profile missing item
  const toggleMissingItem = (itemId) => {
    setProfile((prev) => ({
      ...prev,
      missingItems: prev.missingItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    }));
  };

  // Update profile details
  const updateProfile = (updatedFields) => {
    setProfile((prev) => ({ ...prev, ...updatedFields }));
    setToastMessage({
      title: 'Profile Updated',
      message: 'Your candidate profile changes have been saved.',
      type: 'success'
    });
  };

  // Mark notification read
  const markNotificationRead = (notifId) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notifId ? { ...n, unread: false } : n))
    );
  };

  // Clear toast
  const clearToast = () => setToastMessage(null);

  const value = {
    profile,
    profileCompletion,
    applications,
    savedJobIds,
    jobs: sampleJobsData,
    skills: candidateSkillsList,
    missingSkills: missingSkillsGap,
    courses: recommendedCourses,
    improvementTips: careerImprovementTips,
    notifications,
    toastMessage,
    applyToJob,
    toggleSaveJob,
    toggleMissingItem,
    updateProfile,
    markNotificationRead,
    clearToast
  };

  return (
    <CandidateContext.Provider value={value}>
      {children}
    </CandidateContext.Provider>
  );
}
