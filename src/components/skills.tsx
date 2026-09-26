"use client";

import React from "react";
import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";
import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";
import { Building2, ShieldCheck, ClipboardCheck, TrendingUp, Users, FileCheck, HardHat, Scale } from "lucide-react";

const skillGroups = [
  {
    category: "Mortgage Valuation & Banking Operations",
    icon: ShieldCheck,
    skills: [
      { name: "Property Valuations", desc: "Residential, commercial & land market estimations", icon: Building2 },
      { name: "Technical Audits", desc: "Sample case reviews & quality compliance audits", icon: ClipboardCheck },
      { name: "Vendor Management", desc: "Empanelment, TAT monitoring & billing validation", icon: Users },
      { name: "Risk Assessment", desc: "Macro/micro metrics & risk mitigation modeling", icon: Scale },
      { name: "Technical Concurrence", desc: "End-to-end case workflow & report approval", icon: FileCheck },
      { name: "Market Intelligence", desc: "Real estate dynamics, price trends & transaction metrics", icon: TrendingUp },
    ],
  },
  {
    category: "Regulatory Compliance & Civil Engineering",
    icon: HardHat,
    skills: [
      { name: "DCR Norms & Master Plans", desc: "Development Control Regulations & land use verification", icon: ShieldCheck },
      { name: "Document Vetting", desc: "Mortgage legal/technical document validation", icon: FileCheck },
      { name: "Site Inspection & Survey", desc: "Exterior & interior layout dimension surveying", icon: Building2 },
      { name: "Commercial Estimation", desc: "Offices, shopping centers & factory valuations", icon: TrendingUp },
      { name: "Civil Site Supervision", desc: "Labor management, material budgeting & progress safety", icon: HardHat },
      { name: "Dispute Analysis", desc: "Boundary & valuation dispute research", icon: Scale },
    ],
  },
];

const companyMarquee = [
  { name: "IDFC FIRST Bank", desc: "Technical Manager", logo: "/logos/idfc.svg" },
  { name: "Muthoot Homefin", desc: "Assistant Manager III", logo: "/logos/muthoot.svg" },
  { name: "ICICI Bank", desc: "Technical Officer", logo: "/logos/icici.svg" },
  { name: "Adroit Technical", desc: "Technical Engineer", logo: "/logos/adroit.svg" },
  { name: "Mars Construction", desc: "Site Engineer (ADB)", logo: "/logos/mars.svg" },
  { name: "Property Valuation", desc: "Land, Building & Commercial", logo: "/logos/idfc.svg" },
  { name: "Technical Audit", desc: "Quality & SLA Concurrence", logo: "/logos/icici.svg" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-cyan-500/10">
              TECHNICAL &amp; CORE SKILLS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Domain Expertise &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Core Competencies</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4 font-light">
              Deep expertise in technical valuation, banking audit frameworks, vendor SLA enforcement, real estate intelligence, and civil engineering.
            </p>
          </div>
        </BlurFade>

        {/* Marquee Carousel with Official Logos */}
        <BlurFade delay={0.2} className="mb-16">
          <div className="relative w-full overflow-hidden rounded-2xl glass-panel p-4 border border-cyan-500/20">
            <Marquee pauseOnHover className="[--duration:28s]">
              {companyMarquee.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 px-6 py-3 rounded-xl bg-slate-900/90 border border-cyan-500/20 shadow-lg backdrop-blur-md hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="size-10 relative flex items-center justify-center rounded-lg overflow-hidden bg-white p-1 border border-slate-200 shrink-0">
                    <Image src={item.logo} alt={item.name} width={36} height={36} className="object-contain size-full" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white font-mono">{item.name}</span>
                    <span className="text-xs text-slate-400 font-light">{item.desc}</span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* Skill Groups Grid */}
        <div className="space-y-12">
          {skillGroups.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <BlurFade key={group.category} delay={0.3 + groupIdx * 0.1}>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                    <GroupIcon className="size-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white tracking-wide">{group.category}</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {group.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <TiltCard
                          key={skill.name}
                          className="p-6 flex flex-col justify-between bg-[#040e1a]/80 border-slate-800 hover:border-cyan-500/50 group"
                        >
                          <div>
                            <div className="size-12 mb-4 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                              <Icon className="size-6" />
                            </div>
                            <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-xs text-slate-400 font-light leading-relaxed">
                              {skill.desc}
                            </p>
                          </div>
                        </TiltCard>
                      );
                    })}
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>

      </div>
    </section>
  );
}
