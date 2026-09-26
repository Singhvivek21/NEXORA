"use client";

import React, { useState, useEffect } from "react";
import { 
  GitBranch, 
  Sparkles, 
  ArrowDown, 
  ArrowRight, 
  CheckCircle, 
  UserCheck, 
  MessageSquare, 
  Calendar, 
  BarChart, 
  Zap, 
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AutomationSection() {
  const steps = [
    {
      id: 1,
      title: "Lead Submitted",
      system: "Web / Form Hook",
      description: "Prospect submits interest form with requirements and timeline.",
      icon: Zap,
      timing: "T + 0.0s",
      badge: "Inbound Event"
    },
    {
      id: 2,
      title: "CRM Updated",
      system: "Postgres / Hubspot API",
      description: "Contact entity created, enriched with domain data, tagged by budget.",
      icon: Layers,
      timing: "T + 0.4s",
      badge: "Data Sync"
    },
    {
      id: 3,
      title: "Salesperson Assigned",
      system: "Routing Engine",
      description: "Algorithm routes deal based on industry specialization and timezone.",
      icon: UserCheck,
      timing: "T + 0.8s",
      badge: "Load Balancing"
    },
    {
      id: 4,
      title: "WhatsApp Notification",
      system: "Cloud API",
      description: "Sales lead receives instant personalized WhatsApp intro & portfolio deck.",
      icon: MessageSquare,
      timing: "T + 1.2s",
      badge: "Instant Delivery"
    },
    {
      id: 5,
      title: "Follow-up Scheduled",
      system: "Calendar Agent",
      description: "Automated 48h checkpoint placed in rep calendar if no response.",
      icon: Calendar,
      timing: "T + 1.5s",
      badge: "Auto Safeguard"
    },
    {
      id: 6,
      title: "Analytics Updated",
      system: "Real-time BI",
      description: "Pipeline conversion rates, CAC metrics, and revenue projection updated.",
      icon: BarChart,
      timing: "T + 1.8s",
      badge: "Telemetry"
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  // Automatic sequencer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="relative py-24 md:py-32 bg-[#080B14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPERATIONAL AUTOMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Turn repetitive work into intelligent workflows.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            If your team repeatedly performs the same manual process, we can explore how technology can automate it.
          </p>
        </div>

        {/* Animated Workflow Visual Display */}
        <div className="rounded-3xl bg-[#0B0F1D] border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-8 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Live Execution Simulation: Automated Inbound Sales Sequence
                </h3>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Zero human data-entry required • Total execution duration: 1.8 seconds
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Step:</span>
              <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 font-mono text-xs font-bold border border-blue-500/30">
                0{activeStep + 1} / 06
              </span>
            </div>
          </div>

          {/* Stepper Node Pipeline */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeStep === idx;
              const isCompleted = idx < activeStep;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative group",
                    isCurrent
                      ? "bg-[#141B30] border-blue-400 shadow-xl shadow-blue-500/15 ring-2 ring-blue-500/30 scale-105 z-10"
                      : isCompleted
                      ? "bg-[#0E1424] border-white/10 opacity-90"
                      : "bg-[#090D1A] border-white/[0.06] opacity-60 hover:opacity-90"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={cn(
                          "w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs transition-colors",
                          isCurrent
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/50"
                            : "bg-[#182038] text-slate-300"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {step.timing}
                      </span>
                    </div>

                    <span className="text-[9px] font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-1">
                      {step.badge}
                    </span>
                    <h4 className="text-sm font-bold text-white tracking-tight leading-snug">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>{step.system}</span>
                    {isCurrent && (
                      <span className="text-emerald-400 font-semibold">Active</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Highlight Bar */}
          <div className="mt-8 p-4 rounded-xl bg-[#0F1629] border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <Zap className="w-5 h-5 text-blue-400 shrink-0 hidden sm:block" />
              <p className="text-xs sm:text-sm text-slate-200">
                <strong className="text-white">Active Stage: {steps[activeStep].title}.</strong>{" "}
                {steps[activeStep].description}
              </p>
            </div>
            <a
              href="#contact"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 shrink-0"
            >
              <span>Automate your team&apos;s workflow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
