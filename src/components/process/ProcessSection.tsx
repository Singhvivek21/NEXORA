"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Compass, 
  Cpu, 
  PenTool, 
  Code, 
  Rocket, 
  ShieldCheck
} from "lucide-react";
import { processSteps, ProcessStep } from "@/data/process";
import { cn } from "@/lib/utils";

const stepIcons: Record<string, React.ElementType> = {
  "01": Compass,
  "02": Cpu,
  "03": PenTool,
  "04": Code,
  "05": Rocket,
  "06": ShieldCheck,
};

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#080B14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From first conversation to production.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A disciplined, milestone-driven engineering methodology that guarantees transparent velocity without surprise delays.
          </p>
        </div>

        {/* 6 Connected Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[step.step] || Code;
            const isHovered = activeStep === step.step;

            return (
              <div
                key={step.step}
                onMouseEnter={() => setActiveStep(step.step)}
                className={cn(
                  "rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group",
                  isHovered
                    ? "bg-[#11172A] border-blue-500/50 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/30 -translate-y-1"
                    : "bg-[#0B0F1D]/80 border-white/[0.08] hover:border-white/20"
                )}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-slate-400 group-hover:text-blue-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#141B30] border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {step.name}
                  </h3>
                  <p className="text-xs font-mono text-blue-400 mt-1">
                    {step.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                    <span className="uppercase tracking-wider">Deliverables</span>
                    <span className="text-blue-300 font-semibold">{step.duration}</span>
                  </div>
                  {step.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
