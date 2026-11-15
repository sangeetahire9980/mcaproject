import { useState } from 'react';
import { RecruiterContext } from './recruiterContextDef';
import {
  initialCompanyProfile,
  initialRecruiterUser,
  initialPostedJobs,
  initialApplicants,
  initialInterviews,
  recruitmentAnalytics,
} from '../data/recruiterData';

function RecruiterProvider({ children }) {
  const [companyProfile, setCompanyProfile] = useState(initialCompanyProfile);
  const [recruiterUser, setRecruiterUser] = useState(initialRecruiterUser);
  const [jobs, setJobs] = useState(initialPostedJobs);
  const [applicants, setApplicants] = useState(initialApplicants);
  const [interviews, setInterviews] = useState(initialInterviews);
  const [analytics, setAnalytics] = useState(recruitmentAnalytics);
  const [toastMessage, setToastMessage] = useState(null);

  const clearToast = () => setToastMessage(null);

  const showToast = (title, message, type = 'success') => {
    setToastMessage({ title, message, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  const updateCompanyProfile = (updates) => {
    setCompanyProfile((prev) => ({ ...prev, ...updates }));
  };

  const postJob = (jobData) => {
    const newJob = { ...jobData, id: 'job-' + Date.now() };
    setJobs((prev) => [...prev, newJob]);
    showToast('Job Posted', 'Your job has been posted successfully.');
  };

  const updateJob = (id, updates) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, ...updates } : job))
    );
  };

  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
    showToast('Job Deleted', 'The job listing has been removed.');
  };

  const toggleJobStatus = (id) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id
          ? { ...job, status: job.status === 'Active' ? 'Paused' : 'Active' }
          : job
      )
    );
    showToast('Job Status Updated', 'The job status has been toggled.');
  };

  const updateApplicantStatus = (candidateId, newStatus) => {
    setApplicants((prev) =>
      prev.map((applicant) =>
        applicant.id === candidateId
          ? { ...applicant, status: newStatus }
          : applicant
      )
    );
  };

  const scheduleInterview = (interviewData) => {
    const interview = { ...interviewData, id: 'int-' + Date.now() };
    setInterviews((prev) => [...prev, interview]);
    showToast('Interview Scheduled', 'The interview has been scheduled successfully.');
  };

  const deleteInterview = (id) => {
    setInterviews((prev) => prev.filter((interview) => interview.id !== id));
  };

  const value = {
    companyProfile,
    recruiterUser,
    jobs,
    applicants,
    interviews,
    analytics,
    toastMessage,
    showToast,
    clearToast,
    updateCompanyProfile,
    postJob,
    updateJob,
    deleteJob,
    toggleJobStatus,
    updateApplicantStatus,
    scheduleInterview,
    deleteInterview,
  };

  return (
    <RecruiterContext.Provider value={value}>
      {children}
    </RecruiterContext.Provider>
  );
}

export default RecruiterProvider;
