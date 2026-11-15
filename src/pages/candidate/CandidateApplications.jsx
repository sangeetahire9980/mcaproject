import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Filter
} from 'lucide-react';
import { useCandidate } from '../../context/useCandidate';

export default function CandidateApplications() {
  const { applications } = useCandidate();
  const [statusFilter, setStatusFilter] = useState('All');

  const statuses = ['All', 'Interview', 'Shortlisted', 'Under Review', 'Applied', 'Rejected'];

  const filteredApplications = useMemo(() => {
    if (statusFilter === 'All') return applications;
    return applications.filter((app) => app.status === statusFilter);
  }, [applications, statusFilter]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Interview':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Shortlisted':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Applied':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Rejected':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            My Job Applications Tracking
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time pipeline tracker across your submitted job requisitions (Demo Mode).
          </p>
        </div>

        <Link
          to="/candidate/jobs"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-indigo-700 transition-colors cursor-pointer w-fit"
        >
          <span>Find More Openings</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Pipeline Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-400 block mb-1">Total Applied</span>
          <span className="text-2xl font-black text-slate-900">{applications.length}</span>
        </div>
        <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-2xl">
          <span className="text-xs font-semibold text-purple-700 block mb-1">Interview Rounds</span>
          <span className="text-2xl font-black text-purple-900">
            {applications.filter((a) => a.status === 'Interview').length}
          </span>
        </div>
        <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
          <span className="text-xs font-semibold text-emerald-700 block mb-1">Shortlisted</span>
          <span className="text-2xl font-black text-emerald-900">
            {applications.filter((a) => a.status === 'Shortlisted').length}
          </span>
        </div>
        <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl">
          <span className="text-xs font-semibold text-blue-700 block mb-1">Under Review</span>
          <span className="text-2xl font-black text-blue-900">
            {applications.filter((a) => a.status === 'Under Review').length}
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" />
          Filter by Status:
        </span>
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setStatusFilter(status)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              statusFilter === status
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Applications Table Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">Position & Company</th>
                <th className="py-4 px-4">Location</th>
                <th className="py-4 px-4">Offered Package</th>
                <th className="py-4 px-4">AI Match</th>
                <th className="py-4 px-4">Date Applied</th>
                <th className="py-4 px-4">Recruiter Status</th>
                <th className="py-4 px-6">Notes / Feedback</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredApplications.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-extrabold text-slate-900 text-sm">{app.title}</p>
                    <p className="text-xs text-slate-500 font-medium">{app.company}</p>
                  </td>
                  <td className="py-4 px-4 text-slate-600 font-medium">
                    {app.location}
                  </td>
                  <td className="py-4 px-4 font-bold text-slate-800">
                    {app.salary}
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md text-xs">
                      {app.matchScore}%
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-500">
                    {app.appliedDate}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadge(app.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {app.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-500 max-w-xs leading-relaxed">
                    {app.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
