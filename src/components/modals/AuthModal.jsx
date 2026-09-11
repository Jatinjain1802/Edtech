// src/components/modals/AuthModal.jsx
import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Mail, Lock, User, CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * LEARNING POINT (Form State & Controlled Components):
 * In React, form inputs are controlled components when their `value` is bound to state 
 * and updated via an `onChange` handler.
 */
export const AuthModal = ({ isOpen, onClose, initialMode = 'signup' }) => {
  const [mode, setMode] = useState(initialMode); // 'login' or 'signup'
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'signup' ? 'Create Your Account' : 'Welcome Back to EduPulse'}
      maxWidth="max-w-md"
    >
      <div className="space-y-5">
        {/* Toggle Mode Pills */}
        <div className="flex p-1 bg-slate-100 rounded-full">
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 text-xs font-bold rounded-full transition-all ${
              mode === 'signup' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 py-2 text-xs font-bold rounded-full transition-all ${
              mode === 'login' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Sign In
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h4 className="text-xl font-bold text-slate-900 font-heading">
              {mode === 'signup' ? 'Account Created Successfully!' : 'Welcome Back!'}
            </h4>
            <p className="text-xs text-slate-500">Redirecting to your student dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <Button type="submit" variant="gradient" size="md" className="w-full mt-2" icon={ArrowRight}>
              {mode === 'signup' ? 'Get Started Free' : 'Sign In'}
            </Button>

            <p className="text-center text-xs text-slate-400 mt-3">
              By joining, you agree to EduPulse Terms of Service & Privacy Policy.
            </p>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default AuthModal;
