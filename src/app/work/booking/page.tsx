"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar as CalendarIcon, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  Clock,
  ShieldCheck,
  UserCheck,
  Check
} from "lucide-react";
import { capabilityProjects } from "@/data/projects";

export default function BookingDemoPage() {
  const project = capabilityProjects.find((p) => p.slug === "booking")!;
  const [selectedSlot, setSelectedSlot] = useState<string>("10:30 AM");
  const [confirmed, setConfirmed] = useState(false);

  const slots = ["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"];

  return (
    <div className="min-h-screen bg-[#06080F] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Capabilities</span>
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-xs font-mono text-violet-400 uppercase">Capability Showcase</span>
        </div>

        {/* Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>LIVE CAPABILITY DEMONSTRATION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="mt-2 text-base sm:text-lg text-slate-300">
              {project.tagline}
            </p>
          </div>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider transition-all shadow-lg shadow-blue-600/30 shrink-0"
          >
            <span>Request a Solution Like This</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          {project.highlights.map((h, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#0B0F1D] border border-white/[0.08]">
              <p className="text-2xl font-bold text-white">{h.value}</p>
              <p className="text-xs font-semibold text-violet-400 mt-0.5">{h.label}</p>
              <p className="text-[11px] text-slate-400 mt-1">{h.sub}</p>
            </div>
          ))}
        </div>

        {/* Interactive Application Simulator */}
        <div className="rounded-3xl bg-[#0B0F1D] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-5 h-5 text-violet-400" />
              <span className="text-sm font-bold text-white">
                Multi-Timezone Scheduling &amp; Hold Deposit Workflow
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Two-Way Calendar Sync Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Slot selector */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold">
                Select Time Slot (Asia/Kolkata GMT+5:30)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {slots.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setSelectedSlot(s);
                      setConfirmed(false);
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono font-semibold border transition-all ${
                      selectedSlot === s
                        ? "bg-violet-600 text-white border-violet-500 shadow-lg shadow-violet-600/30"
                        : "bg-[#11172A] text-slate-300 border-white/[0.08] hover:border-white/20"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#11172A] border border-white/[0.06] space-y-2 text-xs text-slate-300">
                <p className="font-semibold text-white">Consultation Service: Executive Architecture Review</p>
                <p className="text-[11px] text-slate-400">Duration: 45 Minutes • Video via Google Meet</p>
                <p className="text-[11px] text-emerald-400 font-mono">Automated WhatsApp &amp; Calendar invites generated</p>
              </div>

              <button
                type="button"
                onClick={() => setConfirmed(true)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-xs tracking-wider shadow-lg shadow-violet-600/25 hover:from-violet-500 hover:to-indigo-500 transition-all"
              >
                {confirmed ? "Slot Reserved & Confirmed" : `Reserve ${selectedSlot} Slot`}
              </button>
            </div>

            {/* Confirmation status preview */}
            <div className="p-6 rounded-2xl bg-[#11172A] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-violet-400 font-semibold">
                  Event Dispatch Telemetry
                </span>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Google Calendar Event Created</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Payment Gateway Hold Authorized</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Confirmation Dispatched</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>24h &amp; 1h Reminder Automations Queued</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] font-mono text-slate-400">
                <span>Webhook payload latency: <strong className="text-emerald-400">380ms</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="p-6 rounded-2xl bg-[#0B0F1D] border border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">Architecture Blueprint</h3>
            <ul className="space-y-3">
              {project.architecture.map((arch, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B0F1D] border border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#141B30] border border-white/[0.08] text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
