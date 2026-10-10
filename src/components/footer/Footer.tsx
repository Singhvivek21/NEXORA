import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  const serviceLinks = [
    { name: "AI Engineering & GenAI", href: "#services" },
    { name: "Intelligent Automation", href: "#services" },
    { name: "Custom Software & APIs", href: "#services" },
    { name: "Data & Analytics", href: "#services" },
    { name: "Machine Learning (MLOps)", href: "#services" },
    { name: "Cloud & DevOps Reliability", href: "#services" },
  ];

  const solutionLinks = [
    { name: "AI Document Intelligence", href: "#solutions" },
    { name: "Workflow Automation Engine", href: "#solutions" },
    { name: "MLOps Monitoring Dashboard", href: "#solutions" },
    { name: "BusinessOS Command Center", href: "#solutions" },
    { name: "Industry Architecture", href: "#industries" },
  ];

  const companyLinks = [
    { name: "About Nexora", href: "#about" },
    { name: "Engineering Blueprint", href: "#engineering" },
    { name: "Delivery Process", href: "#process" },
    { name: "Discuss a Project", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#04060B] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center border border-white/20">
                <span className="text-white font-extrabold text-base">N</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                NEXORA
              </span>
            </Link>

            <p className="text-sm text-slate-300 font-medium">
              Build. Automate. Scale.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Nexora helps businesses modernize operations, automate workflows, and build scalable digital products through AI engineering, custom software, data, and cloud technology.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400 font-medium">
                Systems &amp; Client Deployments 100% Operational
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Capabilities
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Solutions
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {solutionLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Connect Column */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Company
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400 mb-6">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-3">
              Direct Inquiries
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:contact@nexora.agency"
                aria-label="Email Nexora"
                className="w-8 h-8 rounded-lg bg-[#0F1424] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#0F1424] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.72a1.45 1.45 0 0 0-1.49 1.45 1.45 1.45 0 0 0 1.49 1.44 1.45 1.45 0 0 0 1.48-1.44 1.45 1.45 0 0 0-1.48-1.45Z" />
                </svg>
              </a>
              <a
                href="https://github.com/Singhvivek21/NEXORA"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-[#0F1424] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 Nexora. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>SOC2 Ready Design</span>
            <span>Zero Data Leakage Architecture</span>
            <span>ACID Verified Pipelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
