"use client";

import React, { useState, useEffect } from "react";
import { 
  Cpu, 
  GitBranch, 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Activity, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CapabilityNode {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  bgGlow: string;
  activeMetric: string;
  coords: { x: number; y: number };
}

export default function HeroVisual() {
  const [activeNode, setActiveNode] = useState<string>("ai");
  const [simulatedRevenue, setSimulatedRevenue] = useState(482500);
  const [activeWorkflows, setActiveWorkflows] = useState(42);

  // Periodic subtle counter pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedRevenue((prev) => prev + Math.floor(Math.random() * 1200) - 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nodes: CapabilityNode[] = [
    {
      id: "ai",
      name: "AI & RAG",
      category: "Cognitive",
      icon: Cpu,
      color: "text-cyan-400",
      borderColor: "border-cyan-500/40",
      bgGlow: "bg-cyan-500/10",
      activeMetric: "99.4% intent accuracy",
      coords: { x: 20, y: 15 }
    },
    {
      id: "automation",
      name: "AUTOMATION",
      category: "Workflows",
      icon: GitBranch,
      color: "text-indigo-400",
      borderColor: "border-indigo-500/40",
      bgGlow: "bg-indigo-500/10",
      activeMetric: "3,480 hrs saved/mo",
      coords: { x: 80, y: 15 }
    },
    {
      id: "software",
      name: "SOFTWARE",
      category: "Custom Platforms",
      icon: Code2,
      color: "text-blue-400",
      borderColor: "border-blue-500/40",
      bgGlow: "bg-blue-500/10",
      activeMetric: "Microservices Architecture",
      coords: { x: 10, y: 55 }
    },
    {
      id: "data",
      name: "DATA",
      category: "Intelligence",
      icon: Database,
      color: "text-emerald-400",
      borderColor: "border-emerald-500/40",
      bgGlow: "bg-emerald-500/10",
      activeMetric: "< 50ms Query latency",
      coords: { x: 90, y: 55 }
    },
    {
      id: "cloud",
      name: "CLOUD",
      category: "DevOps",
      icon: Cloud,
      color: "text-violet-400",
      borderColor: "border-violet-500/40",
      bgGlow: "bg-violet-500/10",
      activeMetric: "99.99% Guaranteed uptime",
      coords: { x: 25, y: 88 }
    },
    {
      id: "mobile",
      name: "MOBILE",
      category: "iOS & Android",
      icon: Smartphone,
      color: "text-rose-400",
      borderColor: "border-rose-500/40",
      bgGlow: "bg-rose-500/10",
      activeMetric: "Offline-first sync",
      coords: { x: 75, y: 88 }
    },
  ];

  const currentActive = nodes.find((n) => n.id === activeNode) || nodes[0];

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square md:aspect-[4/3] rounded-3xl p-6 md:p-8 bg-[#0B0F1D]/80 border border-white/10 backdrop-blur-xl shadow-2xl shadow-blue-950/40 overflow-hidden group">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Header bar of the command center */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          </div>
          <span className="text-xs font-mono text-slate-400 tracking-wider">
            NEXORA ENGINE :: SYSTEM ARCHITECTURE
          </span>
        </div>
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono font-medium text-emerald-300">
            ALL CAPABILITIES ACTIVE
          </span>
        </div>
      </div>

      {/* SVG Connecting Vector Rays between BUSINESS center and peripheral nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="rayGradient" x1="50%" y1="50%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Center coordinates 50%, 50% */}
        <line x1="50%" y1="50%" x2="22%" y2="20%" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="50%" y1="50%" x2="78%" y2="20%" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="50%" y1="50%" x2="16%" y2="52%" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="50%" y1="50%" x2="84%" y2="52%" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="50%" y1="50%" x2="28%" y2="82%" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="50%" y1="50%" x2="72%" y2="82%" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Pulsing ring around center */}
        <circle cx="50%" cy="50%" r="52" fill="none" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="1.5" />
        <circle cx="50%" cy="50%" r="76" fill="none" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" strokeDasharray="3 4" />
      </svg>

      {/* Central Node: BUSINESS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <div className="relative group/center cursor-pointer">
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-2xl blur-md opacity-75 group-hover/center:opacity-100 transition-opacity animate-pulse-slow" />
          <div className="relative px-5 py-4 rounded-xl bg-[#0F1426] border border-white/30 text-center shadow-xl">
            <div className="flex items-center justify-center gap-1.5 mb-0.5">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase">
                Core Hub
              </span>
            </div>
            <p className="text-base sm:text-lg font-black tracking-widest text-white">
              BUSINESS
            </p>
            <p className="text-[10px] text-slate-400 font-mono">
              Centralized Ops
            </p>
          </div>
        </div>
      </div>

      {/* Capability Nodes */}
      {nodes.map((node) => {
        const Icon = node.icon;
        const isSelected = activeNode === node.id;

        return (
          <button
            key={node.id}
            type="button"
            onClick={() => setActiveNode(node.id)}
            style={{
              top: `${node.coords.y}%`,
              left: `${node.coords.x}%`,
              transform: "translate(-50%, -50%)",
            }}
            className={cn(
              "absolute z-20 group/node text-left focus:outline-none transition-all duration-300",
              isSelected ? "scale-110 z-30" : "hover:scale-105 opacity-85 hover:opacity-100"
            )}
          >
            <div
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md border transition-all duration-300",
                isSelected
                  ? "bg-[#151D33] border-blue-400 shadow-lg shadow-blue-500/20 ring-2 ring-blue-500/30"
                  : "bg-[#0B1020]/90 border-white/10 hover:border-white/20 shadow-md"
              )}
            >
              <div className={cn("p-1.5 rounded-lg", node.bgGlow)}>
                <Icon className={cn("w-4 h-4", node.color)} />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-bold text-white tracking-wider">
                  {node.name}
                </p>
                <p className="text-[9px] text-slate-400 font-mono">
                  {node.category}
                </p>
              </div>
            </div>
          </button>
        );
      })}

      {/* Floating Active Insight Card in lower visual area */}
      <div className="absolute bottom-4 left-6 right-6 z-20 hidden md:flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#0F1424]/90 border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          <span className="text-xs text-slate-300">
            Selected Capability: <strong className="text-white font-semibold">{currentActive.name}</strong>
          </span>
          <span className="text-xs text-slate-500">|</span>
          <span className="text-xs font-mono text-cyan-300">
            {currentActive.activeMetric}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <span>Active Workflows: <strong className="text-emerald-400">{activeWorkflows}</strong></span>
          <span>Synced Vol: <strong className="text-blue-300">₹{(simulatedRevenue / 100000).toFixed(2)}L</strong></span>
        </div>
      </div>
    </div>
  );
}
