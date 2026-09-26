"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Zap, ShieldCheck } from "lucide-react";
import HeroCommandInterface from "./HeroCommandInterface";

export default function Hero() {
  const headlineWords = [
    "We",
    "build",
    "what",
    "your",
    "business",
    "needs",
    "next.",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#06080E]">
      {/* Background radial gradients and precision tech grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-tech opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-highlight opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0D1222] border border-blue-500/30 text-xs font-mono font-medium text-blue-300 mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="tracking-widest uppercase font-semibold">NEXORA / TECHNOLOGY PARTNER</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">ENGINEERED FOR SCALE</span>
          </div>

          {/* Staggered Editorial Headline */}
          <h1 className="hero-headline font-extrabold text-white tracking-tight flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4">
            {headlineWords.map((word, idx) => (
              <span
                key={idx}
                className="inline-block transition-all duration-700 ease-out animate-in fade-in slide-in-from-bottom-2 fill-mode-both"
                style={{
                  animationDelay: `${idx * 80}ms`,
                }}
              >
                {word === "next." ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          {/* Supporting Line */}
          <p className="mt-6 text-base sm:text-xl font-medium text-slate-300 tracking-wide max-w-2xl mx-auto leading-relaxed">
            Software · AI · Automation · Data · Cloud
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            From websites and custom software to AI and cloud infrastructure—we design and build technology around the way your business actually works.
          </p>

          {/* Primary CTA and Secondary */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 border border-white/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#product-architect"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-medium text-slate-200 bg-[#0F1424]/90 hover:bg-[#151D33] hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md transition-all"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Architect Your Product</span>
            </a>
          </div>
        </div>

        {/* Section 8: Interactive Floating Command Interface */}
        <div className="mt-14 sm:mt-16">
          <HeroCommandInterface />
        </div>
      </div>
    </section>
  );
}
