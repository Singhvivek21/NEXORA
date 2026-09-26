"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

interface StoryNodeProps {
  label: string;
  stepNumber: string;
  subtext: string;
}

export default function ScrollStorySpine({ label, stepNumber, subtext }: StoryNodeProps) {
  return (
    <div className="relative py-10 flex flex-col items-center justify-center pointer-events-none">
      {/* Top connector vertical ray */}
      <div className="w-px h-12 bg-gradient-to-b from-transparent via-blue-500/40 to-blue-500/80" />

      {/* Pill node */}
      <div className="relative my-2 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0D1222] border border-blue-500/30 shadow-lg shadow-blue-500/10 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-widest">
          {stepNumber} :: {label}
        </span>
        <span className="text-slate-600 font-mono">•</span>
        <span className="text-[10px] font-mono text-slate-400">
          {subtext}
        </span>
      </div>

      {/* Bottom connector vertical ray with arrow */}
      <div className="w-px h-12 bg-gradient-to-b from-blue-500/80 via-blue-500/40 to-transparent flex items-center justify-center">
        <ArrowDown className="w-3.5 h-3.5 text-blue-400 translate-y-6 opacity-75" />
      </div>
    </div>
  );
}
