"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openSearch = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Engineering", href: "#engineering" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "py-3 bg-[#06080E]/92 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/50"
            : "py-5 sm:py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Wordmark */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform border border-white/20">
                <span className="text-white font-extrabold text-lg tracking-wider">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight leading-none group-hover:text-blue-400 transition-colors">
                  NEXORA
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 leading-tight">
                  Technology Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#0A0E1A]/85 px-4 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action: Search Trigger & "Discuss a Project" CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={openSearch}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#0A0E1A] hover:bg-[#141B30] border border-white/10 text-xs text-slate-400 hover:text-white transition-colors"
                title="Search capabilities (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px] font-mono">Search</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/[0.08] text-[9px] font-mono text-slate-300 border border-white/10">
                  ⌘K
                </kbd>
              </button>

              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 border border-white/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu & Search Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={openSearch}
                aria-label="Search"
                className="p-2 rounded-lg bg-[#0F1424] border border-white/[0.1] text-slate-300 hover:text-white"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg bg-[#0F1424] border border-white/[0.1] text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#06080E]/98 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 px-3">
              Navigation
            </p>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-200 hover:text-white rounded-xl hover:bg-white/[0.06] transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.1] space-y-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl shadow-blue-600/30"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-center text-xs text-slate-500 font-mono">
              Build. Automate. Scale.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
