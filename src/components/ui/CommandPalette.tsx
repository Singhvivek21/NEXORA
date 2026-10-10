"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  ArrowRight, 
  X, 
  Cpu, 
  GitBranch, 
  Layers, 
  Code2, 
  Calendar, 
  ShoppingCart, 
  FileText, 
  Zap, 
  Sparkles, 
  PhoneCall 
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Services" | "Solutions & Demos" | "Sections" | "Action";
  href: string;
  icon: React.ElementType;
  badge?: string;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const commands: CommandItem[] = [
    { id: "c-start", title: "Discuss a Project (Enquiry Form)", category: "Action", href: "#contact", icon: PhoneCall, badge: "Priority" },
    { id: "c-solutions", title: "Solutions Showcase (3 Interactive Demos)", category: "Solutions & Demos", href: "#solutions", icon: Sparkles, badge: "Interactive" },
    { id: "c-doc-ai", title: "AI Document Intelligence Demo", category: "Solutions & Demos", href: "#solutions", icon: FileText, badge: "Demo" },
    { id: "c-workflow", title: "Workflow Automation Demo", category: "Solutions & Demos", href: "#solutions", icon: GitBranch, badge: "Demo" },
    { id: "c-mlops", title: "MLOps Monitoring Dashboard Demo", category: "Solutions & Demos", href: "#solutions", icon: Layers, badge: "Demo" },
    { id: "c-architect", title: "Product Architect (Topology Generator)", category: "Sections", href: "#product-architect", icon: Zap, badge: "Configurator" },
    { id: "c-businessos", title: "BusinessOS Command Center", category: "Solutions & Demos", href: "/work/business-os", icon: Layers, badge: "Showcase" },
    { id: "c-services", title: "Engineering Capabilities (6 Core Services)", category: "Services", href: "#services", icon: Sparkles },
    { id: "c-tech", title: "Engineering Architecture Blueprint", category: "Sections", href: "#engineering", icon: Code2 },
    { id: "c-process", title: "6-Step Delivery Process", category: "Sections", href: "#process", icon: Layers },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = query.trim() === ""
    ? commands
    : commands.filter((c) =>
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-[#0A0E1A] border border-white/15 rounded-2xl shadow-2xl shadow-blue-950/60 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search capabilities, demos, services or actions..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.06] text-[10px] font-mono text-slate-400 border border-white/10">
            ESC
          </kbd>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="p-1 rounded-lg hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500 font-mono">
              No matching capabilities found for &quot;{query}&quot;
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.href)}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#141B30] text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#11172A] border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:text-cyan-300 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </p>
                      <span className="text-[10px] font-mono text-slate-500">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
                        {item.badge}
                      </span>
                    )}
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-[#070A12] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <span>NEXORA v2.0 SYSTEM</span>
        </div>
      </div>
    </div>
  );
}
