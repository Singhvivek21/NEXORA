"use client";

import React, { useState } from "react";
import { 
  GraduationCap, 
  Stethoscope, 
  ShoppingBag, 
  Rocket, 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  TrendingUp, 
  FileText 
} from "lucide-react";
import { cn } from "@/lib/utils";

type IndustryKey = "EDUCATION" | "HEALTHCARE" | "RETAIL" | "STARTUPS" | "PROFESSIONAL SERVICES";

export default function IndustryExperience() {
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>("HEALTHCARE");

  const industries: { id: IndustryKey; label: string; icon: React.ElementType }[] = [
    { id: "HEALTHCARE", label: "HEALTHCARE", icon: Stethoscope },
    { id: "EDUCATION", label: "EDUCATION", icon: GraduationCap },
    { id: "RETAIL", label: "RETAIL", icon: ShoppingBag },
    { id: "STARTUPS", label: "STARTUPS", icon: Rocket },
    { id: "PROFESSIONAL SERVICES", label: "PROFESSIONAL SERVICES", icon: Briefcase },
  ];

  return (
    <section id="industries" className="relative py-24 md:py-32 bg-[#06080E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono font-medium text-violet-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ADAPTIVE INDUSTRY ARCHITECTURE</span>
          </div>
          <h2 className="section-headline font-extrabold text-white tracking-tight">
            Technology built for your industry.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Switch between sectors below to preview how our modular UI systems and backend pipelines dynamically adapt to specific operational workflows.
          </p>
        </div>

        {/* Industry Switcher Buttons */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#090D1A] border border-white/[0.08] max-w-3xl mb-8">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isSelected = activeIndustry === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveIndustry(ind.id)}
                className={cn(
                  "flex-1 py-2.5 px-4 rounded-xl text-xs font-mono font-bold tracking-wider transition-all flex items-center justify-center gap-2 shrink-0",
                  isSelected
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{ind.label}</span>
              </button>
            );
          })}
        </div>

        {/* Live UI Preview Frame */}
        <div className="rounded-3xl bg-[#090D1A] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          {/* HEALTHCARE PREVIEW */}
          {activeIndustry === "HEALTHCARE" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase text-violet-400">CLINICAL OPERATING SYSTEM</span>
                  <h3 className="text-xl font-bold text-white mt-1">Patient Consultations &amp; HIPAA EHR</h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  0 No-Shows Today
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <span className="text-slate-400 font-mono text-[10px]">DOCTOR APPOINTMENTS</span>
                  <p className="text-base font-bold text-white">Dr. Ananya Sen (Cardiology)</p>
                  <p className="text-slate-300">14 Consultations scheduled • 2 slots open</p>
                  <div className="pt-2 text-[10px] text-emerald-400 font-mono">Automated WhatsApp SMS Reminders Sent</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <span className="text-slate-400 font-mono text-[10px]">DIAGNOSTIC TELEMETRY</span>
                  <p className="text-base font-bold text-white">Encrypted Patient Vault</p>
                  <p className="text-slate-300">38 Lab reports delivered directly to patient mobile portal</p>
                  <div className="pt-2 text-[10px] text-blue-400 font-mono">End-to-End AES-256 Encryption</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <span className="text-slate-400 font-mono text-[10px]">PHARMACY INVENTORY</span>
                  <p className="text-base font-bold text-white">Stock Auto-Replenish</p>
                  <p className="text-slate-300">Live batch expiry audit: 0 critical stock-outs</p>
                  <div className="pt-2 text-[10px] text-violet-400 font-mono">Real-time Distributor API</div>
                </div>
              </div>
            </div>
          )}

          {/* EDUCATION PREVIEW */}
          {activeIndustry === "EDUCATION" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase text-violet-400">UNIFIED CAMPUS LMS</span>
                  <h3 className="text-xl font-bold text-white mt-1">Student, Faculty &amp; Parent Portal</h3>
                </div>
                <span className="text-xs font-mono text-cyan-400">1,240 Enrolled Learners</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <p className="font-bold text-white">Interactive Assessment Engine</p>
                  <p className="text-slate-300">Adaptive quizzes with instant grading &amp; feedback synthesis.</p>
                  <span className="text-[10px] text-emerald-400 font-mono block">94.2% On-time submission</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <p className="font-bold text-white">Fee Schedule Automation</p>
                  <p className="text-slate-300">Split installment plans with Razorpay automated recurring debits.</p>
                  <span className="text-[10px] text-blue-400 font-mono block">Zero manual reconciliation</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <p className="font-bold text-white">Live Attendance Tracker</p>
                  <p className="text-slate-300">Biometric classroom readers synced directly with parent SMS dispatch.</p>
                  <span className="text-[10px] text-cyan-400 font-mono block">Daily audit at 09:15 AM</span>
                </div>
              </div>
            </div>
          )}

          {/* RETAIL PREVIEW */}
          {activeIndustry === "RETAIL" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase text-violet-400">OMNICHANNEL COMMERCE</span>
                  <h3 className="text-xl font-bold text-white mt-1">High-Speed Headless Storefront &amp; POS</h3>
                </div>
                <span className="text-xs font-mono text-emerald-400">420ms Page Transitions</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <p className="font-bold text-white">Warehouse Inventory Sync</p>
                  <p className="text-slate-300">Online store, physical retail POS, and warehouse stock unified in real time.</p>
                  <span className="text-[10px] text-cyan-400 font-mono block">Sub-second WebSocket delta</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <p className="font-bold text-white">Cart Abandonment Recovery</p>
                  <p className="text-slate-300">Intelligent automated WhatsApp discount nudges for high-intent shoppers.</p>
                  <span className="text-[10px] text-emerald-400 font-mono block">+24.8% recovered revenue</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <p className="font-bold text-white">Dynamic Pricing Engine</p>
                  <p className="text-slate-300">Rule-based tiered B2B wholesale discounts based on client order volume.</p>
                  <span className="text-[10px] text-indigo-400 font-mono block">Automated tax invoices</span>
                </div>
              </div>
            </div>
          )}

          {/* STARTUPS PREVIEW */}
          {activeIndustry === "STARTUPS" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase text-violet-400">SCALEUP PRODUCT INCUBATION</span>
                  <h3 className="text-xl font-bold text-white mt-1">Full-Stack SaaS MVP to Series A</h3>
                </div>
                <span className="text-xs font-mono text-indigo-400">Ready for Investor DD</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <p className="font-bold text-white">Multi-Tenant Architecture</p>
                  <p className="text-slate-300">Row-level security with isolated tenant boundaries in PostgreSQL.</p>
                  <span className="text-[10px] text-emerald-400 font-mono block">SOC2 compliance ready</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <p className="font-bold text-white">Stripe Metered Billing</p>
                  <p className="text-slate-300">Usage-based consumption tracking, seat management, and self-serve upgrades.</p>
                  <span className="text-[10px] text-blue-400 font-mono block">Zero manual billing friction</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <p className="font-bold text-white">High Velocity CI/CD</p>
                  <p className="text-slate-300">Automated GitHub Actions staging and production deployment in 90 seconds.</p>
                  <span className="text-[10px] text-cyan-400 font-mono block">Zero-downtime rollouts</span>
                </div>
              </div>
            </div>
          )}

          {/* PROFESSIONAL SERVICES PREVIEW */}
          {activeIndustry === "PROFESSIONAL SERVICES" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase text-violet-400">CLIENT OPERATIONS PORTAL</span>
                  <h3 className="text-xl font-bold text-white mt-1">Legal, Accounting &amp; Advisory Hub</h3>
                </div>
                <span className="text-xs font-mono text-emerald-400">Zero Email Chaos</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <p className="font-bold text-white">Secure Document Vault</p>
                  <p className="text-slate-300">Encrypted client file exchange with tamper-evident digital sign-off.</p>
                  <span className="text-[10px] text-emerald-400 font-mono block">Full audit log</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <p className="font-bold text-white">Automated Retainer Billing</p>
                  <p className="text-slate-300">Automatic generation of GST-compliant invoices and time ledger audits.</p>
                  <span className="text-[10px] text-blue-400 font-mono block">Tally &amp; Zoho Sync</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2">
                  <p className="font-bold text-white">Matter &amp; Project Milestones</p>
                  <p className="text-slate-300">Clients track live deliverable status without emailing the team for updates.</p>
                  <span className="text-[10px] text-violet-400 font-mono block">-70% repetitive emails</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
