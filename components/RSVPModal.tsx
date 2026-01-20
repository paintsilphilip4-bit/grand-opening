import React, { useState } from 'react';
import { X, CheckCircle, Loader2, CalendarCheck } from 'lucide-react';
import { api } from '../lib/api';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await api.submitRSVP(formData);
      setStatus('success');
      // Reset form after delay or keep it success state?
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-adlai-blue p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-white/10 rounded-lg">
               <CalendarCheck size={24} />
            </div>
            <h2 className="text-2xl font-bold">RSVP Confirmation</h2>
          </div>
          <p className="text-blue-100 text-sm">Grand Opening - March 14, 2026</p>
        </div>

        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
              <p className="text-slate-600 mb-8">
                Thank you, {formData.name}. We look forward to welcoming you to Adlai Community Hospital.
              </p>
              <button 
                onClick={onClose}
                className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-adlai-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="e.g. Dr. Kwame Mensah"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-adlai-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="054..."
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Total Guests</label>
                  <input 
                    type="number" 
                    min="1"
                    max="10"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-adlai-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    value={formData.guests}
                    onChange={e => setFormData({...formData, guests: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Email Address (Optional)</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-adlai-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-adlai-green text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 mt-4"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Confirm Attendance"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RSVPModal;
