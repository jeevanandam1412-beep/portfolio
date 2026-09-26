"use client";

import React, { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { 
  Building2, 
  Search, 
  ShieldCheck, 
  Users, 
  Scale, 
  TrendingUp, 
  CheckCircle2, 
  Layers, 
  Award,
  ChevronRight
} from "lucide-react";

const capabilities = [
  {
    id: "valuation",
    title: "PROPERTY VALUATION",
    subtitle: "Residential, Commercial & Industrial Asset Estimations",
    icon: Building2,
    highlights: [
      "Land & building structural market estimation",
      "Commercial properties (Offices, Malls, Factories)",
      "Comparative market transaction analysis",
      "Interior & exterior architectural surveying",
    ],
    scope: "Bank & Enterprise Grade",
    status: "Active Practice",
  },
  {
    id: "realestate",
    title: "REAL ESTATE",
    subtitle: "Land Use, Master Plans & Development Norms",
    icon: Search,
    highlights: [
      "Development Control Regulations (DCR) verification",
      "Master plan & zoning classification analysis",
      "Dispute research surrounding land & property sales",
      "Monitoring government development projects",
    ],
    scope: "Regional & Urban Development",
    status: "Active Practice",
  },
  {
    id: "audits",
    title: "TECHNICAL AUDITS",
    subtitle: "Sample Case Audits & Workflow Concurrence",
    icon: ShieldCheck,
    highlights: [
      "Collecting sample cases for quality audits",
      "Technical concurrence & report verification",
      "Operational gap identification & corrective action",
      "120+ monthly property site visits & vetting",
    ],
    scope: "IDFC & ICICI Banking Audits",
    status: "Active Practice",
  },
  {
    id: "vendor",
    title: "VENDOR MANAGEMENT",
    subtitle: "Empanelment, SLA Compliance & Billing Audits",
    icon: Users,
    highlights: [
      "Vendor empanelment & SLA standard enforcement",
      "Turnaround Time (TAT) monitoring & optimization",
      "Validating vendor billing against agreed SLAs",
      "Stakeholder meetings & vendor training sessions",
    ],
    scope: "Pan-Vendor Empanelment",
    status: "Active Practice",
  },
  {
    id: "risk",
    title: "RISK & COMPLIANCE",
    subtitle: "Asset Governance & Mortgage Risk Mitigation",
    icon: Scale,
    highlights: [
      "Mortgage document verification by product type",
      "Risk assessment metrics & credit recommendations",
      "Banking policy adherence & audit readiness",
      "Boundary & legal asset dispute mitigation",
    ],
    scope: "Institutional Credit Risk",
    status: "Active Practice",
  },
  {
    id: "market",
    title: "MARKET ANALYSIS",
    subtitle: "Macro & Micro Real Estate Dynamics",
    icon: TrendingUp,
    highlights: [
      "Macro & micro-level real estate intelligence",
      "Price trend tracking & transaction metrics",
      "Comparative local market price benchmarks",
      "Strategic valuation report synthesis",
    ],
    scope: "Market Intelligence Engine",
    status: "Active Practice",
  },
];

export function ProfessionalCapabilities() {
  const [activeCapability, setActiveCapability] = useState(capabilities[0]);

  return (
    <section className="py-20 relative bg-[#020610]">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-cyan-500/10">
              ARCHITECTURAL COMPETENCY MATRIX
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Capabilities</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-4 font-light">
              Structured architectural capabilities built on banking standards, real estate market intelligence, and technical audits.
            </p>
          </div>
        </BlurFade>

        {/* Interactive Capability Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Selection List */}
          <div className="lg:col-span-5 space-y-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              const isSelected = activeCapability.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCapability(item)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan-950/90 to-[#041224] border-cyan-400 shadow-xl shadow-cyan-500/20"
                      : "bg-[#040e1a]/80 border-slate-800/80 hover:border-cyan-500/40"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`size-10 rounded-xl flex items-center justify-center border transition-all ${
                      isSelected ? "bg-cyan-500 text-slate-950 border-cyan-300" : "bg-cyan-950/80 text-cyan-400 border-cyan-500/30"
                    }`}>
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold tracking-wide font-mono ${isSelected ? "text-cyan-300" : "text-white group-hover:text-cyan-200"}`}>
                        {item.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-light truncate block max-w-[200px] sm:max-w-[260px]">
                        {item.scope}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`size-4 transition-transform ${isSelected ? "text-cyan-400 translate-x-1" : "text-slate-600"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Stage Detail Panel */}
          <div className="lg:col-span-7">
            <div className="h-full p-8 rounded-3xl bg-[#030c18]/95 border border-cyan-500/30 backdrop-blur-xl shadow-2xl flex flex-col justify-between relative overflow-hidden">
              {/* Subtle background CAD grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-2xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                      {React.createElement(activeCapability.icon, { className: "size-6" })}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        {activeCapability.title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 font-semibold">
                        {activeCapability.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold">
                    {activeCapability.status}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">
                    Core Operational Pillars:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCapability.highlights.map((point, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/20 flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 leading-relaxed font-light">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Award className="size-4 text-cyan-400" />
                  <span>FRAMEWORK: BANKING &amp; REAL ESTATE</span>
                </span>
                <span className="text-cyan-400 font-bold">VERIFIED PRACTICE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
