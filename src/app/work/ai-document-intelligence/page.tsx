"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  FileCheck,
  Cpu,
  Layers,
  Check,
  RefreshCw
} from "lucide-react";
import { capabilityProjects } from "@/data/projects";

export default function AiDocumentIntelligenceDemoPage() {
  const project = capabilityProjects.find((p) => p.slug === "ai-document-intelligence")!;
  const [extractedData, setExtractedData] = useState({
    invoiceNumber: "NX-INV-2026-8819",
    vendorName: "Apex Heavy Freight Ltd",
    gstin: "27AAACA1234F1Z8",
    invoiceDate: "2026-09-18",
    currency: "INR (₹)",
    items: [
      { desc: "Industrial Sensor Node Array", qty: 20, rate: 12500, amount: 250000 },
      { desc: "Field Gateway Router v4", qty: 5, rate: 18000, amount: 90000 },
      { desc: "Cold Storage Cloud Telemetry License", qty: 1, rate: 44500, amount: 44500 }
    ],
    subtotal: 384500,
    taxGst18: 69210,
    grandTotal: 453710,
    confidence: "99.4%"
  });

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
          <span className="text-xs font-mono text-indigo-400 uppercase">Capability Showcase</span>
        </div>

        {/* Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-3">
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
              <p className="text-xs font-semibold text-indigo-400 mt-0.5">{h.label}</p>
              <p className="text-[11px] text-slate-400 mt-1">{h.sub}</p>
            </div>
          ))}
        </div>

        {/* Interactive Application Simulator */}
        <div className="rounded-3xl bg-[#0B0F1D] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
            <div className="flex items-center gap-3">
              <FileCheck className="w-5 h-5 text-indigo-400" />
              <span className="text-sm font-bold text-white">
                Multi-Stage Ingestion &amp; Structured JSON Engine
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Confidence Score: {extractedData.confidence}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Input document preview */}
            <div className="p-5 rounded-xl bg-[#11172A] border border-white/[0.06] space-y-4">
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold">
                Source Document Preview: Scanned Tax Invoice
              </span>
              <div className="p-4 rounded-lg bg-[#0C1120] border border-dashed border-white/20 text-xs text-slate-300 font-mono space-y-2">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-bold text-white">{extractedData.vendorName}</span>
                  <span>TAX INVOICE</span>
                </div>
                <p>Invoice No: {extractedData.invoiceNumber}</p>
                <p>GSTIN: {extractedData.gstin}</p>
                <p>Date: {extractedData.invoiceDate}</p>
                <div className="py-2 border-y border-white/10 text-[11px] space-y-1">
                  {extractedData.items.map((it, i) => (
                    <div key={i} className="flex justify-between">
                      <span>{it.desc} x {it.qty}</span>
                      <span>₹{it.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between font-bold text-white">
                  <span>Grand Total (incl 18% GST):</span>
                  <span>₹{extractedData.grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Structured Schema Output */}
            <div className="p-5 rounded-xl bg-[#11172A] border border-white/[0.06] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-indigo-400 font-semibold">
                  Parsed Output Schema (JSON Schema Validated)
                </span>
                <span className="text-[10px] font-mono text-slate-400">Validated in 1.4s</span>
              </div>
              <pre className="p-4 rounded-lg bg-[#080C14] border border-white/[0.06] text-xs font-mono text-emerald-400 overflow-x-auto max-h-80 leading-relaxed">
{`{
  "status": "VALIDATED",
  "documentType": "INVOICE",
  "vendor": {
    "name": "${extractedData.vendorName}",
    "gstin": "${extractedData.gstin}",
    "verifiedRegistry": true
  },
  "invoiceNumber": "${extractedData.invoiceNumber}",
  "financials": {
    "currency": "INR",
    "subtotal": ${extractedData.subtotal},
    "taxRate": 0.18,
    "taxAmount": ${extractedData.taxGst18},
    "grandTotal": ${extractedData.grandTotal}
  },
  "erpSyncStatus": "QUEUED_FOR_TALLY_SAP",
  "confidence": 0.994
}`}
              </pre>
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
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
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
