"use client";

import React from "react";
import { TiltCard } from "@/components/ui/tilt-card";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { 
  ShieldCheck, 
  Building2, 
  TrendingUp, 
  CheckCircle2, 
  ClipboardCheck, 
  Users, 
  Compass, 
  Scale, 
  FileCheck, 
  PieChart, 
  Award,
  Layers
} from "lucide-react";

export function About() {
  const highlights = [
    {
      title: "Technical Audits & Concurrence",
      desc: "Collecting sample cases and conducting internal technical audits to guarantee valuation report quality, accuracy, and credit compliance.",
      icon: ShieldCheck,
      tag: "Audit Quality",
    },
    {
      title: "Vendor Empanelment & SLA Tracking",
      desc: "Empaneling external valuation vendors, monitoring Turnaround Time (TAT), and validating billing as per agreed service-level agreements.",
      icon: Users,
      tag: "Vendor SLA",
    },
    {
      title: "Real Estate Market Intelligence",
      desc: "Monitoring macro & micro-level indicators, transaction trends, and property risk metrics to support strategic credit approvals.",
      icon: TrendingUp,
      tag: "Market Dynamics",
    },
    {
      title: "DCR Norms & Master Plan Verification",
      desc: "Vetting property master plans, land-use classifications, and Development Control Regulations (DCR) to eliminate legal & structural risks.",
      icon: Compass,
      tag: "Regulatory Control",
    },
  ];

  const summaryPillars = [
    { label: "Site Inspection Expertise", sub: "120+ Monthly Audits", icon: Building2 },
    { label: "Banking Compliance", sub: "IDFC / Muthoot / ICICI", icon: FileCheck },
    { label: "Budget & TAT Control", sub: "SLA & Billing Audit", icon: PieChart },
    { label: "Cross-Functional Leadership", sub: "Stakeholder Alignment", icon: Award },
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 size-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-cyan-500/10">
              PROFESSIONAL SUMMARY &amp; PROFILE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Driving Banking Excellence Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Rigorous Technical Valuation &amp; Risk Audits
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4 font-light">
              Bridging civil engineering precision with enterprise banking frameworks to safeguard mortgage assets and streamline valuation workflows.
            </p>
          </div>
        </BlurFade>

        {/* Pillars Ribbon */}
        <BlurFade delay={0.15} className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {summaryPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="p-4 rounded-2xl bg-[#030d1a]/80 border border-cyan-500/20 backdrop-blur-md flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-mono">{p.label}</h4>
                    <span className="text-[11px] text-cyan-300/80 font-mono">{p.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Main Summary Bio Card */}
          <div className="lg:col-span-6">
            <BlurFade delay={0.2} className="h-full">
              <MagicCard className="h-full flex flex-col justify-between p-8 bg-[#040e1a]/90 border-cyan-500/30">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                      <Building2 className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        Santhana Krishnan G
                      </h3>
                      <span className="text-xs font-mono text-cyan-400 font-semibold">Technical Manager • Civil Engineer</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                    <p>
                      Technical manager with strong expertise in site inspections, vendor management, internal audits, and regular compliance. Proficient in conducting detailed market analysis and risk assessment, and in preparing accurate valuation reports to support credit approvals and effective asset management decisions.
                    </p>
                    <p>
                      Experienced in working within banking frameworks, ensuring strict adherence to policies and quality standards. Demonstrates strong leadership capabilities with hands-on experience in budget management and cross-functional stakeholder coordination across leading banking &amp; financial institutions.
                    </p>
                  </div>
                </div>

                {/* Key Qualifications Check Grid */}
                <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                    <span>Vendor SLA &amp; TAT Audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                    <span>Real Estate Valuation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                    <span>Mortgage Document Vetting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                    <span>DCR &amp; Land Use Verification</span>
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          </div>

          {/* Right 4 Highlight Feature Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <BlurFade key={item.title} delay={0.2 + idx * 0.1}>
                  <TiltCard className="h-full p-6 flex flex-col justify-between bg-[#040e1a]/80 border-slate-800 hover:border-cyan-500/50 group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="size-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                          <Icon className="size-5" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </TiltCard>
                </BlurFade>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
