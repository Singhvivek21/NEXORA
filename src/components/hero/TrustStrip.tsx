"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TrustStrip() {
  const steps = [
    { label: "Discovery", sub: "Deep Audit" },
    { label: "Design", sub: "Prototypes & UX" },
    { label: "Development", sub: "Clean Architecture" },
    { label: "AI & Automation", sub: "Workflow Intelligence" },
    { label: "Deployment", sub: "Zero-Downtime Cloud" },
    { label: "Support", sub: "24/7 SLA Scaling" }
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="relative border-y border-white/[0.08] bg-[#0A0E1A]/80 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Lead Statement */}
          <div className="flex items-center gap-3 shrink-0 text-center lg:text-left">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
            <p className="text-base sm:text-lg font-semibold tracking-tight text-white">
              One technology partner.{" "}
              <span className="text-blue-400 font-normal">From idea to production.</span>
            </p>
          </div>

          {/* Stepper Pipeline */}
          <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <div className="flex items-center justify-start lg:justify-end gap-2 sm:gap-3 min-w-max">
              {steps.map((item, idx) => {
                const isActive = idx === activeStep;
                return (
                  <React.Fragment key={item.label}>
                    <div
                      className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-300",
                        isActive
                          ? "bg-blue-600/20 border-blue-500/50 shadow-lg shadow-blue-500/10 text-white"
                          : "bg-white/[0.02] border-white/[0.06] text-slate-400"
                      )}
                    >
                      <span
                        className={cn(
                          "w-5 h-5 rounded-full text-[10px] font-mono font-bold flex items-center justify-center transition-colors",
                          isActive ? "bg-blue-500 text-white" : "bg-white/[0.08] text-slate-400"
                        )}
                      >
                        {idx + 1}
                      </span>
                      <div className="flex flex-col text-left">
                        <span className={cn("text-xs font-semibold", isActive ? "text-white" : "text-slate-300")}>
                          {item.label}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono hidden sm:block">
                          {item.sub}
                        </span>
                      </div>
                    </div>

                    {idx < steps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
