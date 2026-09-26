"use client";

import React, { useState } from "react";
import { 
  Rocket, 
  GraduationCap, 
  Stethoscope, 
  ShoppingBag, 
  Briefcase, 
  Building2, 
  Coins, 
  Factory,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { industriesData, IndustryItem } from "@/data/industries";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Building2,
  Coins,
  Factory,
};

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState<string>(industriesData[0].id);

  const selectedIndustry = industriesData.find((i) => i.id === activeTab) || industriesData[0];

  return (
    <section id="industries" className="relative py-24 md:py-32 bg-[#080B14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono font-medium text-violet-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INDUSTRY SPECIALIZATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Technology built for your industry.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Every sector has distinct operational rhythms. We design architectures that conform to your business reality.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {industriesData.map((item) => {
            const Icon = iconMap[item.icon] || Rocket;
            const isSelected = activeTab === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "cursor-pointer rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group",
                  isSelected
                    ? "bg-[#11172A] border-violet-500/50 shadow-xl shadow-violet-500/10 ring-1 ring-violet-500/30"
                    : "bg-[#0B0F1D]/80 border-white/[0.07] hover:border-white/20 hover:bg-[#0E1528]"
                )}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#141B30] border border-white/10 flex items-center justify-center text-violet-400 group-hover:scale-105 group-hover:text-violet-300 transition-all mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-violet-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {item.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-1.5">
                  <p className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                    Focus Areas:
                  </p>
                  {item.keySolutions.map((sol, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      <span>{sol}</span>
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
