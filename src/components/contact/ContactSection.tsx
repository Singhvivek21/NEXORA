"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  Building,
  Mail,
  User,
  Phone,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceNeeded: "Custom Software",
    budget: "₹5L - ₹15L",
    timeline: "1 - 3 months",
    message: ""
  });

  const serviceOptions = [
    "Website",
    "Web Application",
    "Mobile App",
    "AI",
    "Automation",
    "Data & Analytics",
    "Cloud",
    "Custom Software",
    "Other"
  ];

  const budgetOptions = [
    "Under ₹5L",
    "₹5L - ₹15L",
    "₹15L - ₹40L",
    "₹40L+",
    "Flexible / Exploring"
  ];

  const timelineOptions = [
    "Immediate (< 1 month)",
    "1 - 3 months",
    "3 - 6 months",
    "Flexible / Planning phase"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulated API call latency
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#080B14] border-t border-white/[0.08]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 21: High-Impact Final CTA Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET&apos;S TALK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Have a business problem technology can solve?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us what you&apos;re trying to build, automate or improve. We&apos;ll help you explore the right solution.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Response within 24 hours</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct access to Senior Architects</span>
            </span>
          </div>
        </div>

        {/* Section 22: Premium Contact Form */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 md:p-12 bg-[#0B0F1E] border border-white/10 shadow-2xl backdrop-blur-xl">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Inquiry Received Successfully
              </h3>
              <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. A Nexora Technical Partner will review your requirements for <strong className="text-blue-300">{formData.company || "your business"}</strong> and respond within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: "",
                      company: "",
                      email: "",
                      phone: "",
                      serviceNeeded: "Custom Software",
                      budget: "₹5L - ₹15L",
                      timeline: "1 - 3 months",
                      message: ""
                    });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-xs font-semibold text-slate-200 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Your Name <span className="text-blue-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#11172A] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Company / Organization <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Apex Logistics"
                    className="w-full bg-[#11172A] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Work Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@apexlogistics.com"
                    className="w-full bg-[#11172A] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Phone (optional) */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Phone Number <span className="text-slate-500 font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#11172A] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* What do you need dropdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="serviceNeeded" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    What do you need? <span className="text-blue-400">*</span>
                  </label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full bg-[#11172A] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#11172A] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Approximate Budget (optional) */}
                <div>
                  <label htmlFor="budget" className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Approximate Budget <span className="text-slate-500 font-normal">(optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-[#11172A] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b} className="bg-[#11172A] text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Timeline (optional) */}
                <div>
                  <label htmlFor="timeline" className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Project Timeline <span className="text-slate-500 font-normal">(optional)</span>
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-[#11172A] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer"
                  >
                    {timelineOptions.map((t) => (
                      <option key={t} value={t} className="bg-[#11172A] text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  Describe the business problem or product requirement <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what process you want to automate, what software you need built, or what friction your team is currently facing..."
                  className="w-full bg-[#11172A] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  Strict confidentiality guaranteed. We sign mutual NDAs upon request.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Start a Conversation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
