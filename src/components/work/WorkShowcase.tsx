"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle, 
  Layers, 
  ShieldAlert, 
  Terminal,
  Zap
} from "lucide-react";
import { capabilityProjects } from "@/data/projects";

export default function WorkShowcase() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#06080F]">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAPABILITY DEMONSTRATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              See what we can build.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Interactive architecture and software showcases designed to demonstrate our engineering, design, and performance standards.
            </p>
          </div>

          {/* Clarity Disclaimer Badge (Content Rule: Never fabricate fake client names or logos) */}
          <div className="shrink-0 p-3.5 rounded-xl bg-[#0F1424] border border-white/10 max-w-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="font-semibold">PROOF-OF-CAPABILITY MODELS</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1 leading-snug">
              These are live technical demonstrations built by Nexora to show system mechanics and user interfaces before kickoff.
            </p>
          </div>
        </div>

        {/* 5 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-2xl p-6 bg-[#0B0F1E] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div>
                {/* Header & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    DEMO 0{idx + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tag Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#141B30] border border-white/[0.08] text-[10px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Architecture Highlights */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] grid grid-cols-3 gap-2 text-center">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                      <p className="text-xs font-bold text-white">{h.value}</p>
                      <p className="text-[9px] font-mono text-slate-400 truncate">{h.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <Link
                  href={project.demoRoute}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-blue-600 text-white text-xs font-semibold tracking-wide border border-white/10 hover:border-blue-500 transition-all group/btn"
                >
                  <span>View Demo &amp; Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
