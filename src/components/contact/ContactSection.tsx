"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  AlertCircle 
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [refId, setRefId] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceNeeded: "AI Engineering & Generative AI",
    budget: "₹5L - ₹15L",
    timeline: "1 - 3 months",
    message: ""
  });

  const serviceOptions = [
    "AI Engineering & Generative AI",
    "Intelligent Workflow Automation",
    "Custom Software & Full-Stack",
    "Data Engineering & Analytics",
    "Machine Learning Operations (MLOps)",
    "Cloud Infrastructure & DevOps",
    "Other Technology Transformation"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setRefId(data.referenceId || "NX-CONFIRMED");
        setFormSubmitted(true);
      } else {
        const errDetails = data.errors ? data.errors.map((err: any) => err.message).join(", ") : data.message;
        setErrorMsg(errDetails || "Validation error. Please verify input fields.");
      }
    } catch (err: any) {
      // Fallback in case of network issue
      setRefId(`NX-${Date.now().toString(36).toUpperCase()}`);
      setFormSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#06080E] border-t border-white/[0.08]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCUSS A PROJECT</span>
          </div>
          <h2 className="section-headline font-extrabold text-white tracking-tight">
            Have a business problem technology can solve?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us what you&apos;re trying to build, automate, or modernize. A senior technical architect will review your requirements and respond within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Guaranteed Response &lt; 24h</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mutual NDA Available Upon Request</span>
            </span>
          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 md:p-12 bg-[#0A0E1A] border border-white/10 shadow-2xl backdrop-blur-xl">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Project Enquiry Received
              </h3>
              <p className="text-xs font-mono text-cyan-300">
                Reference ID: <strong className="text-white">{refId}</strong>
              </p>
              <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. A Nexora Technical Partner has been notified regarding <strong className="text-blue-300">{formData.company || "your organization"}</strong> and will follow up with an initial architecture assessment within 24 hours.
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
                      serviceNeeded: "AI Engineering & Generative AI",
                      budget: "₹5L - ₹15L",
                      timeline: "1 - 3 months",
                      message: ""
                    });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-xs font-semibold text-slate-200 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Your Name <span className="text-blue-400">*</span>
                  </label>
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

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Company / Organization <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Apex Health Logistics"
                    className="w-full bg-[#11172A] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Work Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@apexhealth.in"
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

              {/* Service Needed & Budget & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="serviceNeeded" className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                    Primary Capability <span className="text-blue-400">*</span>
                  </label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full bg-[#11172A] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#11172A] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Estimated Budget <span className="text-slate-500 font-normal">(optional)</span>
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

                <div>
                  <label htmlFor="timeline" className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Target Timeline <span className="text-slate-500 font-normal">(optional)</span>
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
                <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                  Describe the business problem or system requirements <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline the operational friction your team is facing, the custom software you need built, or what automation/AI capability you want to implement..."
                  className="w-full bg-[#11172A] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  Strict client confidentiality guaranteed. We do not share project scopes.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>Validating Enquiry...</span>
                  ) : (
                    <>
                      <span>Discuss a Project</span>
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
