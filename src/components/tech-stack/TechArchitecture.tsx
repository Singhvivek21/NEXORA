"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Sparkles, 
  ArrowDown, 
  Layers, 
  Cpu, 
  Database, 
  Cloud, 
  Globe, 
  Server, 
  ShieldCheck,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ArchitectureLayer {
  id: string;
  name: string;
  role: string;
  technologies: string[];
  specs: string;
  icon: React.ElementType;
}

export default function TechArchitecture() {
  const [activeLayerId, setActiveLayerId] = useState<string>("app");

  const layers: ArchitectureLayer[] = [
    {
      id: "client",
      name: "CLIENT & PRESENTATION LAYER",
      role: "Cross-platform touchpoints engineered for sub-second hydration and fluid UX",
      technologies: ["Next.js 15 (App Router)", "TypeScript", "Tailwind CSS", "React 19", "React Native", "Progressive Web Apps"],
      specs: "98+ Google Lighthouse Performance • Zero Cumulative Layout Shift",
      icon: Globe
    },
    {
      id: "app",
      name: "APPLICATION & RUNTIME LAYER",
      role: "Server-side execution, edge streaming and sandboxed computation",
      technologies: ["Node.js / Bun Runtime", "Python (FastAPI)", "Go Microservices", "Vercel Edge Network", "Docker Containerization"],
      specs: "Sub-40ms Edge response • Automatic horizontal elasticity",
      icon: Server
    },
    {
      id: "api",
      name: "API GATEWAY & PROTOCOLS",
      role: "Secure event routing, rate-limiting, schema validation, and webhooks",
      technologies: ["RESTful APIs", "GraphQL", "gRPC Internals", "WebSockets (Real-Time)", "Kafka Event Bus", "BullMQ Queues"],
      specs: "Zod Schema Type-Safety • TLS 1.3 End-to-End Encryption",
      icon: Zap
    },
    {
      id: "intelligence",
      name: "COGNITIVE & SERVICE CORE",
      role: "Domain AI, automated task orchestrators, and third-party integrations",
      technologies: ["LangChain & LlamaIndex", "Private LLMs (OpenAI / Anthropic)", "Stripe Payments", "Twilio / WhatsApp Cloud API"],
      specs: "Zero Data Leak Vector Boundaries • Isolated Worker Queues",
      icon: Cpu
    },
    {
      id: "persistence",
      name: "PERSISTENCE & CLOUD DEVOPS",
      role: "ACID-compliant storage, vector retrieval, and multi-region failover",
      technologies: ["PostgreSQL (Prisma ORM)", "pgvector Embeddings", "Redis In-Memory Cache", "AWS / Cloudflare", "Kubernetes"],
      specs: "99.99% Guaranteed SLA Uptime • Automated Daily Encrypted Snapshots",
      icon: Database
    }
  ];

  const currentLayer = layers.find((l) => l.id === activeLayerId) || layers[1];

  return (
    <section id="engineering" className="relative py-24 md:py-32 bg-[#06080E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-STACK ARCHITECTURE BLUEPRINT</span>
          </div>
          <h2 className="section-headline font-extrabold text-white tracking-tight">
            How we engineer software systems.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We don&apos;t just string together random frameworks. Every Nexora system is built around a disciplined, layered architecture engineered for fault tolerance.
          </p>
        </div>

        {/* Layered Interactive Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vertical Stack (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              const isSelected = activeLayerId === layer.id;

              return (
                <div key={layer.id} className="flex flex-col items-center">
                  <div
                    onClick={() => setActiveLayerId(layer.id)}
                    onMouseEnter={() => setActiveLayerId(layer.id)}
                    className={cn(
                      "w-full cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group",
                      isSelected
                        ? "bg-[#11172A] border-blue-500/60 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/40 -translate-y-0.5"
                        : "bg-[#0A0E1A] border-white/[0.08] hover:border-white/20 hover:bg-[#0F1424]"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                          isSelected
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                            : "bg-[#141B30] text-slate-400 group-hover:text-white"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-blue-400 font-bold tracking-wider">
                          LAYER 0{idx + 1}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-white tracking-tight font-mono">
                          {layer.name}
                        </h3>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                        Inspect
                      </span>
                    </div>
                  </div>

                  {idx < layers.length - 1 && (
                    <div className="w-px h-3 bg-blue-500/30 my-0.5" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Layer Inspector Detail (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl p-6 sm:p-7 bg-[#090D1A] border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase text-cyan-400">LAYER SPECIFICATION</span>
                  <h4 className="text-lg font-bold text-white mt-0.5">{currentLayer.name}</h4>
                </div>
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {currentLayer.role}
              </p>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-2 font-semibold">
                  Technologies Employed:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentLayer.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#141B32] border border-white/[0.08] text-xs font-mono text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-emerald-400">
                <span className="text-slate-400 block mb-0.5">Performance Guarantee:</span>
                <strong>{currentLayer.specs}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
