"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FileText, 
  GitBranch, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  Upload, 
  FileCheck, 
  Activity, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Sliders,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

type DemoTab = "document-ai" | "workflow-automation" | "mlops-dashboard";

export default function SolutionsShowcase() {
  const [activeTab, setActiveTab] = useState<DemoTab>("document-ai");

  /* --- DEMO 1: AI DOCUMENT INTELLIGENCE STATE --- */
  const sampleDocs = [
    {
      id: "inv-842",
      name: "Commercial_Tax_Invoice_842.pdf",
      type: "Commercial Tax Invoice",
      fields: {
        vendor: "Apex Heavy Freight Ltd",
        gstin: "27AAACA1234F1Z8",
        invoiceNo: "NX-INV-2026-8819",
        invoiceDate: "2026-09-18",
        currency: "INR (₹)",
        subtotal: "₹3,84,500",
        taxAmount: "₹69,210 (18% GST)",
        grandTotal: "₹4,53,710",
      },
      validation: {
        mathValid: true,
        gstValid: true,
        panMatch: true,
      },
      missingInfo: "None detected. All required tax fields present.",
      summary: "High-value logistics equipment purchase invoice for 20x Industrial Sensor Arrays. Fully reconciled with purchase order PO-9912.",
      recommendedAction: "Auto-approve and queue ERP PO reconciliation for settlement on Net-30 terms.",
      status: "APPROVED"
    },
    {
      id: "contract-110",
      name: "Vendor_Service_Agreement_110.pdf",
      type: "SaaS Service Level Agreement",
      fields: {
        vendor: "CloudStream Systems",
        gstin: "07AABCC5544E1Z1",
        invoiceNo: "SOW-2026-04",
        invoiceDate: "2026-09-22",
        currency: "INR (₹)",
        subtotal: "₹12,00,000",
        taxAmount: "₹2,16,000",
        grandTotal: "₹14,16,000",
      },
      validation: {
        mathValid: true,
        gstValid: true,
        panMatch: false,
      },
      missingInfo: "Missing Certificate of Insurance (COI) schedule for indemnification clause 8.2.",
      summary: "Annual enterprise cloud hosting agreement renewal. Pricing matches negotiated retainer schedule.",
      recommendedAction: "Hold final contract signature until vendor provides updated COI policy document.",
      status: "ACTION_REQUIRED"
    }
  ];

  const [selectedDocId, setSelectedDocId] = useState<string>("inv-842");
  const currentDoc = sampleDocs.find((d) => d.id === selectedDocId) || sampleDocs[0];
  const [processingDoc, setProcessingDoc] = useState(false);

  const simulateDocProcessing = (id: string) => {
    setSelectedDocId(id);
    setProcessingDoc(true);
    setTimeout(() => {
      setProcessingDoc(false);
    }, 400);
  };

  /* --- DEMO 2: WORKFLOW AUTOMATION STATE --- */
  const workflowNodes = [
    {
      id: "trigger",
      name: "1. Trigger",
      role: "Inbound Lead Webhook",
      function: "Listens for JSON webhook payload from marketing site form or partner API.",
      detail: "Triggered on POST /v1/inbound/lead with HMAC SHA-256 signature verification."
    },
    {
      id: "validation",
      name: "2. Data Validation",
      role: "Schema & Email Hygiene",
      function: "Validates payload with Zod schema, verifies MX records, flags disposable domains.",
      detail: "Zod parse passed. MX record resolves to Google Workspace. Disposable domain: False."
    },
    {
      id: "ai-proc",
      name: "3. AI Processing",
      role: "Intent & Scope Scoring",
      function: "Analyzes problem statement, categorizes project urgency, scores budget fit (0-100).",
      detail: "Private LLM assigned Intent Score: 94/100 (Enterprise Tier). Domain classified: HealthTech."
    },
    {
      id: "rules",
      name: "4. Business Rules",
      role: "Account Routing Logic",
      function: "Evaluates routing table: Lead score > 80 routes to Senior Solutions Architect.",
      detail: "Rule matched: Lead Score >= 85 → Priority P1 assignment to Siddharth M. (Timezone GMT+5:30)."
    },
    {
      id: "action",
      name: "5. Human Review / Action",
      role: "Dispatch & Auto-Calendar",
      function: "Syncs record with CRM, sends WhatsApp brief to lead, reserves 48h calendar checkpoint.",
      detail: "CRM record #NX-4829 created. WhatsApp introduction sent. Calendar checkpoint locked."
    }
  ];

  const [simulatingWorkflow, setSimulatingWorkflow] = useState(false);
  const [workflowStep, setWorkflowStep] = useState(4); // 0 to 4
  const [activeWorkflowNode, setActiveWorkflowNode] = useState(0);

  const runWorkflowSimulation = () => {
    setSimulatingWorkflow(true);
    setWorkflowStep(0);
    setActiveWorkflowNode(0);

    const interval = setInterval(() => {
      setWorkflowStep((prev) => {
        if (prev >= 4) {
          clearInterval(interval);
          setSimulatingWorkflow(false);
          return 4;
        }
        setActiveWorkflowNode(prev + 1);
        return prev + 1;
      });
    }, 600);
  };

  /* --- DEMO 3: MLOPS DASHBOARD STATE --- */
  const [activeModelId, setActiveModelId] = useState("fraud-detect-v2.4");
  const models = [
    {
      id: "fraud-detect-v2.4",
      name: "transaction-fraud-detector",
      version: "v2.4.1",
      env: "Production (Blue)",
      f1Score: "99.2%",
      latencyP50: "18ms",
      latencyP99: "38ms",
      volumeHr: "142,400 req/hr",
      driftScore: "0.021 (Normal)",
      status: "HEALTHY",
      lifecycle: "Deployed & Monitored",
      lastTrained: "2026-10-04",
      framework: "PyTorch + ONNX Runtime"
    },
    {
      id: "churn-predictor-v3.1",
      name: "b2b-customer-churn-engine",
      version: "v3.1.0",
      env: "Production (Canary 10%)",
      f1Score: "94.8%",
      latencyP50: "24ms",
      latencyP99: "46ms",
      volumeHr: "34,200 req/hr",
      driftScore: "0.084 (Elevated)",
      status: "DRIFT_ALERT",
      lifecycle: "Retraining Triggered",
      lastTrained: "2026-09-28",
      framework: "XGBoost + Triton"
    },
    {
      id: "doc-classifier-v1.8",
      name: "enterprise-doc-classifier",
      version: "v1.8.4",
      env: "Staging Cluster",
      f1Score: "98.7%",
      latencyP50: "32ms",
      latencyP99: "62ms",
      volumeHr: "12,800 req/hr",
      driftScore: "0.012 (Normal)",
      status: "EVALUATING",
      lifecycle: "Pending Approval Gate",
      lastTrained: "2026-10-09",
      framework: "HuggingFace Transformers"
    }
  ];

  const currentModel = models.find((m) => m.id === activeModelId) || models[0];

  return (
    <section id="solutions" className="relative py-24 md:py-32 bg-[#06080E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAPABILITY SHOWCASE &amp; PROTOTYPES</span>
            </div>
            <h2 className="section-headline font-extrabold text-white tracking-tight">
              Interactive technology prototypes.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Live, working capability demonstrations built to illustrate our architecture, UI standards, and data pipelines before project kickoff.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0F1424] border border-white/10 max-w-sm shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="font-semibold">NEXORA PROTOTYPE BENCHMARK</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1 leading-snug">
              Clearly identified as demonstration mode using deterministic sample business data. Zero real client data is displayed.
            </p>
          </div>
        </div>

        {/* 3 Priority Prototype Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#090D1A] border border-white/[0.08] max-w-3xl mb-10">
          <button
            type="button"
            onClick={() => setActiveTab("document-ai")}
            className={cn(
              "flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shrink-0",
              activeTab === "document-ai"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
            )}
          >
            <FileText className="w-4 h-4" />
            <span>AI Document Intelligence</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("workflow-automation")}
            className={cn(
              "flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shrink-0",
              activeTab === "workflow-automation"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
            )}
          >
            <GitBranch className="w-4 h-4" />
            <span>Workflow Automation</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("mlops-dashboard")}
            className={cn(
              "flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shrink-0",
              activeTab === "mlops-dashboard"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
            )}
          >
            <Layers className="w-4 h-4" />
            <span>MLOps Monitoring Dashboard</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: AI DOCUMENT INTELLIGENCE PROTOTYPE */}
        {/* ========================================================================= */}
        {activeTab === "document-ai" && (
          <div className="rounded-3xl bg-[#090D1A] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase text-cyan-400 font-bold">
                    NEXORA PROTOTYPE :: AI DOCUMENT EXTRACTION &amp; VALIDATION
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Automated OCR, Schema Validation &amp; Workflow Triage
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Sample Document:</span>
                <div className="flex gap-1.5">
                  {sampleDocs.map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => simulateDocProcessing(doc.id)}
                      className={cn(
                        "px-3 py-1 rounded-lg text-xs font-mono transition-all",
                        selectedDocId === doc.id
                          ? "bg-blue-600 text-white shadow"
                          : "bg-[#141B30] text-slate-400 hover:text-white"
                      )}
                    >
                      {doc.id === "inv-842" ? "Commercial Invoice" : "Service Agreement"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Ingestion & Extracted Fields Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Document Metadata & Upload Card (4 Cols) */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-[#0E1324] border border-white/[0.06] space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/[0.06]">
                    <span>Source File</span>
                    <span className="text-emerald-400">OCR Confidence: 99.4%</span>
                  </div>
                  <div className="mt-3 p-4 rounded-xl bg-[#080C14] border border-dashed border-white/20 text-center space-y-2">
                    <FileCheck className="w-8 h-8 text-blue-400 mx-auto" />
                    <p className="text-xs font-bold text-white">{currentDoc.name}</p>
                    <p className="text-[10px] font-mono text-slate-400">
                      Classified: <strong className="text-cyan-300">{currentDoc.type}</strong>
                    </p>
                  </div>

                  {/* Document classification check */}
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex justify-between p-2 rounded bg-[#141B30] text-[11px]">
                      <span className="text-slate-400">Math Reconciliation:</span>
                      <span className={currentDoc.validation.mathValid ? "text-emerald-400 font-mono" : "text-rose-400 font-mono"}>
                        {currentDoc.validation.mathValid ? "Passed (100% Match)" : "Discrepancy"}
                      </span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-[#141B30] text-[11px]">
                      <span className="text-slate-400">Tax Registry GSTIN:</span>
                      <span className={currentDoc.validation.gstValid ? "text-emerald-400 font-mono" : "text-rose-400 font-mono"}>
                        {currentDoc.validation.gstValid ? "Verified Active" : "Invalid Registry"}
                      </span>
                    </div>
                    <div className="flex justify-between p-2 rounded bg-[#141B30] text-[11px]">
                      <span className="text-slate-400">Identity &amp; PAN Audit:</span>
                      <span className={currentDoc.validation.panMatch ? "text-emerald-400 font-mono" : "text-amber-400 font-mono"}>
                        {currentDoc.validation.panMatch ? "Matched Entity" : "Missing Policy Doc"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-400">
                  Deterministic demo dataset • No sensitive data ingested
                </div>
              </div>

              {/* Extracted Key-Value Table (8 Cols) */}
              <div className="lg:col-span-8 p-5 rounded-2xl bg-[#0E1324] border border-white/[0.06] space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-xs font-mono uppercase text-slate-400 font-semibold">
                    Extracted Document Fields (Zod Schema Sanitized)
                  </span>
                  <span className={cn(
                    "px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase",
                    currentDoc.status === "APPROVED" 
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  )}>
                    {currentDoc.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#141B30] border border-white/[0.04]">
                    <span className="text-[10px] text-slate-400 block font-mono">Vendor Name</span>
                    <span className="text-white font-semibold truncate block mt-0.5">{currentDoc.fields.vendor}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141B30] border border-white/[0.04]">
                    <span className="text-[10px] text-slate-400 block font-mono">GSTIN ID</span>
                    <span className="text-cyan-300 font-mono text-[11px] truncate block mt-0.5">{currentDoc.fields.gstin}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141B30] border border-white/[0.04]">
                    <span className="text-[10px] text-slate-400 block font-mono">Document No</span>
                    <span className="text-white font-mono text-[11px] truncate block mt-0.5">{currentDoc.fields.invoiceNo}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141B30] border border-white/[0.04]">
                    <span className="text-[10px] text-slate-400 block font-mono">Issue Date</span>
                    <span className="text-white font-mono text-[11px] block mt-0.5">{currentDoc.fields.invoiceDate}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141B30] border border-white/[0.04]">
                    <span className="text-[10px] text-slate-400 block font-mono">Subtotal</span>
                    <span className="text-white font-mono block mt-0.5">{currentDoc.fields.subtotal}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141B30] border border-white/[0.04]">
                    <span className="text-[10px] text-slate-400 block font-mono">Tax / GST</span>
                    <span className="text-white font-mono block mt-0.5">{currentDoc.fields.taxAmount}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141B30] border border-white/[0.04] col-span-2">
                    <span className="text-[10px] text-slate-400 block font-mono">Grand Total</span>
                    <span className="text-emerald-400 font-mono font-bold block mt-0.5">{currentDoc.fields.grandTotal}</span>
                  </div>
                </div>

                {/* Missing Information & Compliance */}
                <div className="p-3.5 rounded-xl bg-[#090D1A] border border-white/[0.06] text-xs space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                    Missing Information &amp; Anomaly Detection:
                  </span>
                  <p className={currentDoc.status === "APPROVED" ? "text-emerald-300" : "text-amber-300"}>
                    {currentDoc.missingInfo}
                  </p>
                </div>

                {/* Concise Summary & Recommended Action */}
                <div className="p-3.5 rounded-xl bg-[#0F162A] border border-blue-500/20 text-xs space-y-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-blue-300 font-bold block">
                      Concise Executive Summary:
                    </span>
                    <p className="text-slate-200 mt-0.5">{currentDoc.summary}</p>
                  </div>
                  <div className="pt-2 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                      Recommended Next Workflow Action:
                    </span>
                    <p className="text-white font-medium mt-0.5">{currentDoc.recommendedAction}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: WORKFLOW AUTOMATION PROTOTYPE */}
        {/* ========================================================================= */}
        {activeTab === "workflow-automation" && (
          <div className="rounded-3xl bg-[#090D1A] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase text-indigo-400 font-bold">
                    NEXORA PROTOTYPE :: WORKFLOW ORCHESTRATION ENGINE
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Deterministic Event Automation with Human Review Gates
                </h3>
              </div>
              <button
                type="button"
                onClick={runWorkflowSimulation}
                disabled={simulatingWorkflow}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/30 disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{simulatingWorkflow ? "Executing Simulation..." : "Run Live Simulation"}</span>
              </button>
            </div>

            {/* Interactive Visual Node Pipeline: Trigger → Data Validation → AI Processing → Business Rules → Action */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {workflowNodes.map((node, i) => {
                const isSelected = activeWorkflowNode === i;
                const isDone = workflowStep >= i;

                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveWorkflowNode(i)}
                    className={cn(
                      "p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group",
                      isSelected
                        ? "bg-[#141C36] border-indigo-400 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-500/30"
                        : "bg-[#0E1324] border-white/[0.06] hover:bg-[#12182B]"
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-slate-400 font-bold">
                          STEP 0{i + 1}
                        </span>
                        <div className={cn(
                          "w-2 h-2 rounded-full",
                          isDone ? "bg-emerald-400 animate-pulse" : "bg-slate-600"
                        )} />
                      </div>
                      <h4 className="text-xs font-bold text-white tracking-tight">
                        {node.name}
                      </h4>
                      <p className="text-[11px] text-indigo-300 font-mono mt-0.5">
                        {node.role}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>{isDone ? "Complete" : "Queued"}</span>
                      <ArrowRight className="w-3 h-3 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Node Function & Execution Telemetry */}
            <div className="p-5 rounded-2xl bg-[#080C14] border border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase text-indigo-400 font-bold">
                    Active Node: {workflowNodes[activeWorkflowNode].name}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono text-slate-400">Execution Status: 200 OK</span>
                </div>
                <p className="text-sm text-white font-medium">
                  {workflowNodes[activeWorkflowNode].function}
                </p>
                <p className="text-xs text-slate-400">
                  {workflowNodes[activeWorkflowNode].detail}
                </p>
              </div>

              {/* Execution Console Log */}
              <div className="p-3.5 rounded-xl bg-[#0E1324] border border-white/[0.06] font-mono text-xs text-emerald-400 space-y-1 overflow-x-auto">
                <div className="text-[10px] text-slate-400 border-b border-white/[0.06] pb-1 flex justify-between">
                  <span>EXECUTION LOG AUDIT</span>
                  <span>TIME: T + {(activeWorkflowNode * 0.35).toFixed(2)}s</span>
                </div>
                <p className="text-slate-300">&gt; [OK] Inbound signature verified (TLS 1.3)</p>
                <p className="text-slate-300">&gt; [OK] Schema validated: zero missing fields</p>
                <p className="text-cyan-300">&gt; [OK] AI inference latency: 340ms (Intent: 94)</p>
                <p className="text-emerald-400">&gt; [OK] Escalation SLA: Locked in rep calendar</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: MLOPS MONITORING DASHBOARD PROTOTYPE */}
        {/* ========================================================================= */}
        {activeTab === "mlops-dashboard" && (
          <div className="rounded-3xl bg-[#090D1A] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase text-emerald-400 font-bold">
                    NEXORA PROTOTYPE :: MLOPS MODEL GOVERNANCE &amp; MONITORING
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Model Registry, Evaluation Metrics &amp; Data Drift Lifecycle
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Model:</span>
                <select
                  value={activeModelId}
                  onChange={(e) => setActiveModelId(e.target.value)}
                  className="bg-[#141B30] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white font-mono focus:outline-none"
                >
                  {models.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.version})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Model Lifecycle Pipeline Strip: Experiment → Evaluate → Register → Deploy → Monitor → Retrain → Approve */}
            <div className="p-3.5 rounded-xl bg-[#0E1324] border border-white/[0.06] overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-2 min-w-max text-xs font-mono">
                {["Experiment", "Evaluate", "Register", "Deploy", "Monitor", "Retrain", "Approve"].map((stage, idx) => (
                  <React.Fragment key={stage}>
                    <div className={cn(
                      "px-3 py-1 rounded-lg border",
                      (stage === "Monitor" && currentModel.status === "HEALTHY") || (stage === "Retrain" && currentModel.status === "DRIFT_ALERT")
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold"
                        : "bg-[#141B30] text-slate-400 border-white/[0.06]"
                    )}>
                      {stage}
                    </div>
                    {idx < 6 && <span className="text-slate-600 font-bold">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* MLOps Telemetry Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-slate-400 uppercase">MODEL ACCURACY (F1)</span>
                <p className="text-xl font-bold text-white mt-1">{currentModel.f1Score}</p>
                <span className="text-[10px] font-mono text-emerald-400">Evaluated on 50k gold set</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-slate-400 uppercase">INFERENCE LATENCY</span>
                <p className="text-xl font-bold text-cyan-300 mt-1">{currentModel.latencyP50}</p>
                <span className="text-[10px] font-mono text-slate-400">p99: {currentModel.latencyP99}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-slate-400 uppercase">PREDICTION VOLUME</span>
                <p className="text-xl font-bold text-white mt-1">{currentModel.volumeHr}</p>
                <span className="text-[10px] font-mono text-blue-400">Triton Cluster</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06]">
                <span className="text-[10px] font-mono text-slate-400 uppercase">DATA DRIFT (PSI)</span>
                <p className={cn("text-xl font-bold mt-1", currentModel.status === "DRIFT_ALERT" ? "text-amber-400" : "text-emerald-400")}>
                  {currentModel.driftScore}
                </p>
                <span className="text-[10px] font-mono text-slate-400">{currentModel.lifecycle}</span>
              </div>
            </div>

            {/* Model Registry Details & Monitoring Audit */}
            <div className="p-5 rounded-2xl bg-[#080C14] border border-white/[0.08] grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
              <div className="space-y-3 font-mono">
                <span className="text-slate-400 uppercase font-bold text-[10px] block">
                  Model Registry Specification:
                </span>
                <div className="p-3.5 rounded-xl bg-[#0E1324] space-y-1.5 text-slate-300">
                  <p>Model ID: <strong className="text-white">{currentModel.name}</strong></p>
                  <p>Active Semantic Tag: <strong className="text-cyan-300">{currentModel.version}</strong></p>
                  <p>Serving Cluster: <strong className="text-white">{currentModel.env}</strong></p>
                  <p>Runtime Backend: <strong className="text-white">{currentModel.framework}</strong></p>
                  <p>Last Retrained Run: <strong className="text-white">{currentModel.lastTrained}</strong></p>
                </div>
              </div>

              <div className="space-y-3 font-mono">
                <span className="text-slate-400 uppercase font-bold text-[10px] block">
                  Continuous Evaluation &amp; Drift Policy:
                </span>
                <div className="p-3.5 rounded-xl bg-[#0E1324] space-y-1.5 text-slate-300">
                  <p>Kolmogorov-Smirnov Threshold: <strong>p &lt; 0.05</strong></p>
                  <p>Automated Canary Rollout: <strong>10% → 50% → 100%</strong></p>
                  <p>Rollback Condition: <strong>Inference Error Rate &gt; 0.1%</strong></p>
                  <p>Registry Artifacts: <strong>Signed SHA-256 Digest</strong></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
