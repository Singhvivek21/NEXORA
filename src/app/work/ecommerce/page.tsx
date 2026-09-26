"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  ShoppingCart, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  Zap,
  CreditCard,
  Package,
  Layers
} from "lucide-react";
import { capabilityProjects } from "@/data/projects";

export default function EcommerceDemoPage() {
  const project = capabilityProjects.find((p) => p.slug === "ecommerce")!;
  const [cartCount, setCartCount] = useState(2);
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "shipping" | "confirmed">("cart");

  return (
    <div className="min-h-screen bg-[#06080F] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Capabilities</span>
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-xs font-mono text-cyan-400 uppercase">Capability Showcase</span>
        </div>

        {/* Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>LIVE CAPABILITY DEMONSTRATION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="mt-2 text-base sm:text-lg text-slate-300">
              {project.tagline}
            </p>
          </div>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider transition-all shadow-lg shadow-blue-600/30 shrink-0"
          >
            <span>Request a Solution Like This</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          {project.highlights.map((h, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#0B0F1D] border border-white/[0.08]">
              <p className="text-2xl font-bold text-white">{h.value}</p>
              <p className="text-xs font-semibold text-cyan-400 mt-0.5">{h.label}</p>
              <p className="text-[11px] text-slate-400 mt-1">{h.sub}</p>
            </div>
          ))}
        </div>

        {/* Interactive Application Simulator */}
        <div className="rounded-3xl bg-[#0B0F1D] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-bold text-white">Sub-second Headless Storefront Simulator</span>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Lighthouse 98/100
            </span>
          </div>

          {/* Checkout Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-5 rounded-xl bg-[#11172A] border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">01. Live Catalog</span>
              <div className="p-3 rounded-lg bg-[#161F33] border border-white/[0.06] space-y-1">
                <p className="text-sm font-bold text-white">Performance Wireless Rig</p>
                <p className="text-xs text-slate-300">₹8,499 • In Stock (42 units)</p>
                <button
                  type="button"
                  onClick={() => setCartCount((c) => c + 1)}
                  className="mt-2 text-[11px] px-3 py-1 rounded bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
                >
                  + Add to Cart
                </button>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#11172A] border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono text-indigo-400 uppercase font-semibold">02. Instant Cart</span>
              <div className="p-3 rounded-lg bg-[#161F33] border border-white/[0.06] space-y-2">
                <div className="flex justify-between text-xs text-white">
                  <span>Cart Items ({cartCount})</span>
                  <span className="font-bold text-emerald-400">₹{(cartCount * 8499).toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-slate-400">Automated discount rule applied: FREE EXPEDITED SHIPPING</p>
                <button
                  type="button"
                  onClick={() => setCheckoutStep("confirmed")}
                  className="w-full text-center text-xs py-2 rounded bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
                >
                  Simulate Instant Checkout
                </button>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#11172A] border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">03. Order Fulfillment</span>
              <div className="p-3 rounded-lg bg-[#161F33] border border-white/[0.06] space-y-2">
                <p className="text-xs text-white">Status: {checkoutStep === "confirmed" ? "Dispatched" : "Awaiting Checkout"}</p>
                <p className="text-[10px] text-slate-400">
                  {checkoutStep === "confirmed"
                    ? "Webhook sent to warehouse ERP. WhatsApp tracking dispatch active."
                    : "Two-way inventory reservation locks cart for 10 minutes."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="p-6 rounded-2xl bg-[#0B0F1D] border border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">Architecture Blueprint</h3>
            <ul className="space-y-3">
              {project.architecture.map((arch, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B0F1D] border border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#141B30] border border-white/[0.08] text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
