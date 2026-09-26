"use client";

import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { TiltCard } from "@/components/ui/tilt-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { GraduationCap, Calendar, Building2, Languages, Globe, BookOpen, Award, CheckCircle2 } from "lucide-react";

export function Education() {
  const educationList = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Civil Engineering",
      institution: "R.M.K Engineering College / Anna University",
      period: "2017 – 2020",
      highlights: [
        "Structural Engineering & Structural Analysis",
        "Building Estimation & Cost Valuation",
        "Land Surveying & Geotechnical Engineering",
        "Concrete Technology & Fluid Mechanics",
      ],
      badge: "Degree",
    },
    {
      degree: "Diploma in Civil Engineering",
      field: "Civil Engineering",
      institution: "Vel Tech Polytechnic College / DOTE TN",
      period: "2014 – 2017",
      highlights: [
        "Civil Construction Practices & Building Codes",
        "CAD Drafting & Structural Blueprint Reading",
        "Land Surveying & Material Testing",
        "Construction Safety & Site Management",
      ],
      badge: "Diploma",
    },
  ];

  const languages = [
    { name: "English", proficiency: "Fluent", level: "Professional & Business", badge: "Primary" },
    { name: "Tamil", proficiency: "Fluent", level: "Native & Regional", badge: "Native" },
    { name: "Hindi", proficiency: "Basic", level: "Conversational Understanding", badge: "Working" },
  ];

  return (
    <section id="education" className="py-24 relative bg-[#020814]">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/3 size-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-cyan-500/10">
              ACADEMIC FOUNDATION &amp; LANGUAGES
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Civil Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Education</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4 font-light">
              Formal civil engineering qualification providing the structural background for property valuation, site inspection, and technical audits.
            </p>
          </div>
        </BlurFade>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {educationList.map((item, idx) => (
            <BlurFade key={item.degree} delay={0.2 + idx * 0.1}>
              <TiltCard className="h-full">
                <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#041021]/90 border-slate-800 hover:border-cyan-500/50 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-md">
                        <GraduationCap className="size-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                          <Calendar className="size-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm mb-3 font-mono">
                      {item.field}
                    </p>
                    <p className="text-slate-300 text-sm font-medium mb-6 flex items-center gap-2">
                      <Building2 className="size-4 text-cyan-400 shrink-0" />
                      <span>{item.institution}</span>
                    </p>

                    <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800/80">
                      <h4 className="text-xs font-mono text-slate-400 uppercase font-bold">Key Focus Areas:</h4>
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                          <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Award className="size-3.5 text-cyan-400" />
                      <span>OFFICIAL QUALIFICATION</span>
                    </span>
                    <span className="text-cyan-400 font-bold">{item.badge}</span>
                  </div>
                </MagicCard>
              </TiltCard>
            </BlurFade>
          ))}
        </div>

        {/* Languages Section */}
        <BlurFade delay={0.4}>
          <div className="p-8 rounded-3xl bg-[#030d1a]/90 border border-cyan-500/20 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <Languages className="size-6 text-cyan-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Language Proficiency</h3>
                <p className="text-xs font-mono text-slate-400">Multilingual communication for stakeholder &amp; vendor coordination</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold text-white">{lang.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                        {lang.badge}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-cyan-400 mb-1">{lang.proficiency}</p>
                    <p className="text-xs text-slate-400 font-light">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
