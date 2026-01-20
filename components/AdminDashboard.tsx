import React, { useEffect, useState } from 'react';
import { api } from '../lib/api';
import { RSVPData } from '../types';
import { X, Trash2, Users, Download, RefreshCw } from 'lucide-react';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [rsvps, setRsvps] = useState<RSVPData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const data = await api.getRSVPs();
    setRsvps(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to remove this guest?')) {
      await api.deleteRSVP(id);
      fetchData();
    }
  };

  const handleExportCSV = () => {
    if (rsvps.length === 0) {
        alert("No data to export.");
        return;
    }

    // Define CSV Headers
    const headers = ["ID", "Full Name", "Phone", "Email", "Guests", "Registration Date"];
    
    // Map data to CSV rows
    const rows = rsvps.map(r => [
        r.id,
        `"${r.name}"`, // Quote strings to handle commas
        `"${r.phone}"`,
        `"${r.email}"`,
        r.guests,
        `"${new Date(r.timestamp).toLocaleString()}"`
    ]);

    // Join headers and rows
    const csvContent = [
        headers.join(","),
        ...rows.map(r => r.join(","))
    ].join("\n");

    // Create a Blob and link to download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Adlai_RSVP_List_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  const totalGuests = rsvps.reduce((acc, curr) => acc + curr.guests, 0);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-100 flex flex-col animate-fade-in">
      {/* Toolbar */}
      <div className="bg-slate-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="font-bold text-xl">Staff Dashboard</h1>
            <span className="px-3 py-1 bg-adlai-green text-xs font-bold rounded-full text-white uppercase tracking-wider">
              Backend Access
            </span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 font-medium">Total Registrations</span>
                <div className="p-2 bg-blue-50 text-adlai-blue rounded-lg"><Users size={20}/></div>
              </div>
              <p className="text-4xl font-bold text-slate-900">{rsvps.length}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 font-medium">Expected Headcount</span>
                <div className="p-2 bg-green-50 text-adlai-green rounded-lg"><Users size={20}/></div>
              </div>
              <p className="text-4xl font-bold text-slate-900">{totalGuests}</p>
            </div>
            {/* Export Card */}
            <div className="bg-adlai-blue p-6 rounded-2xl shadow-sm border border-blue-900 text-white flex flex-col justify-between">
                <div>
                    <h3 className="font-bold text-lg mb-1">Export Data</h3>
                    <p className="text-blue-200 text-sm">Download guest list for check-in.</p>
                </div>
                <button 
                    onClick={handleExportCSV}
                    className="mt-4 w-full bg-white/10 hover:bg-white/20 transition-colors py-2 rounded-lg flex items-center justify-center gap-2 font-semibold"
                >
                    <Download size={18} /> Download CSV
                </button>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-800">Recent RSVPs</h2>
              <button onClick={fetchData} className="p-2 text-slate-400 hover:text-adlai-blue transition-colors">
                <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4">Guest Name</th>
                    <th className="px-6 py-4">Contact</th>
                    <th className="px-6 py-4">Party Size</th>
                    <th className="px-6 py-4">Registration Date</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                        Loading backend data...
                      </td>
                    </tr>
                  ) : rsvps.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                        No RSVPs received yet.
                      </td>
                    </tr>
                  ) : (
                    rsvps.map((rsvp) => (
                      <tr key={rsvp.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-900">{rsvp.name}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span>{rsvp.phone}</span>
                            <span className="text-xs text-slate-400">{rsvp.email}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-adlai-blue">
                            {rsvp.guests} Guest{rsvp.guests > 1 ? 's' : ''}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500">
                          {new Date(rsvp.timestamp).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={() => handleDelete(rsvp.id)}
                            className="text-red-400 hover:text-red-600 transition-colors"
                            title="Delete Record"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;