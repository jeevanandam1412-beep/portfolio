"use client";

import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { TiltCard } from "@/components/ui/tilt-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { 
  Building2, 
  Search, 
  Users, 
  ShieldCheck, 
  AlertTriangle, 
  FileCheck2, 
  TrendingUp, 
  UserCheck 
} from "lucide-react";

const expertiseCards = [
  {
    title: "Property Valuation",
    desc: "Comprehensive market estimation of land, residential buildings, commercial offices, shopping centers, and industrial factories.",
    icon: Building2,
    badge: "Asset Appraisal",
  },
  {
    title: "Property Inspection",
    desc: "Rigorous interior and exterior physical surveys, measuring structural dimensions, unit counts, amenities, and condition.",
    icon: Search,
    badge: "Field Audit",
  },
  {
    title: "Vendor Management",
    desc: "End-to-end empanelment, SLA monitoring, Turnaround Time (TAT) tracking, vendor training, and billing validation.",
    icon: Users,
    badge: "SLA Control",
  },
  {
    title: "Technical Audits",
    desc: "Internal technical audit workflows, sampling valuation cases, enforcing report concurrence, and resolving operational gaps.",
    icon: ShieldCheck,
    badge: "Quality Assurance",
  },
  {
    title: "Risk Assessment",
    desc: "Evaluating macro & micro-level property risk indicators, boundary dispute research, and credit safety recommendations.",
    icon: AlertTriangle,
    badge: "Risk Mitigation",
  },
  {
    title: "Banking Compliance",
    desc: "Adherence to institutional mortgage valuation standards, vetting mandatory loan product documents, and DCR norms.",
    icon: FileCheck2,
    badge: "Regulatory Standards",
  },
  {
    title: "Real Estate Market Analysis",
    desc: "Tracking property market price movements, transaction trends, master plan modifications, and government development projects.",
    icon: TrendingUp,
    badge: "Market Intelligence",
  },
  {
    title: "Stakeholder Coordination",
    desc: "Cross-functional alignment across internal credit teams, business units, senior leadership, and external vendor partners.",
    icon: UserCheck,
    badge: "Cross-Functional",
  },
];

export function CoreExpertise() {
  return (
    <section id="expertise" className="py-24 relative bg-[#020814]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 size-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-cyan-500/10">
              DOMAINS &amp; COMPETENCIES
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Expertise</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4 font-light">
              Specialized technical skills developed across banking operations, real estate valuation, and civil engineering infrastructure.
            </p>
          </div>
        </BlurFade>

        {/* 8 React Bits Spotlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <BlurFade key={item.title} delay={0.15 + idx * 0.08}>
                <TiltCard className="h-full">
                  <MagicCard className="h-full p-6 flex flex-col justify-between bg-[#041021]/90 border-slate-800 hover:border-cyan-500/50 group transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all shadow-lg">
                          <Icon className="size-6" />
                        </div>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-cyan-400/80">
                      <span>VERIFIED COMPETENCY</span>
                      <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    </div>
                  </MagicCard>
                </TiltCard>
              </BlurFade>
            );
          })}
        </div>

      </div>
    </section>
  );
}
