"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ChevronRight, Building2, HardHat, ShieldCheck, Award, GraduationCap } from "lucide-react";

const progressionSteps = [
  {
    title: "Civil Engineering",
    institution: "R.M.K Engineering / Vel Tech",
    level: "Foundation",
    icon: GraduationCap,
    badge: "B.E. & Diploma",
  },
  {
    title: "Junior Site Engineer",
    institution: "Mars Construction",
    level: "ADB Infrastructure",
    icon: HardHat,
    badge: "Site Execution",
  },
  {
    title: "Technical Engineer",
    institution: "Adroit Technical Services",
    level: "Valuation Engineering",
    icon: Building2,
    badge: "Commercial & Land",
  },
  {
    title: "Technical Officer",
    institution: "ICICI Bank",
    level: "AM II",
    icon: ShieldCheck,
    badge: "120+ Audits/mo",
  },
  {
    title: "Technical Manager",
    institution: "Muthoot Homefin",
    level: "AM III",
    icon: ShieldCheck,
    badge: "Housing Finance",
  },
  {
    title: "Technical Manager",
    institution: "IDFC FIRST Bank",
    level: "Current Executive",
    icon: Award,
    badge: "Present Role",
    isCurrent: true,
  },
];

export function CareerProgression() {
  return (
    <div className="w-full my-12 p-6 sm:p-8 rounded-3xl bg-[#030d1a]/90 border border-cyan-500/20 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Background CAD grid watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center mb-8">
        <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-2">
          PROGRESSIVE LEADERSHIP TRAJECTORY
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Career Evolution &amp; Progression Flow
        </h3>
      </div>

      {/* Interactive Desktop Step Pipeline */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        {progressionSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={step.title + idx}>
              <div
                className={`relative flex flex-col justify-between p-4 rounded-2xl border transition-all duration-300 ${
                  step.isCurrent
                    ? "bg-gradient-to-b from-cyan-950/90 to-[#041528] border-cyan-400/60 shadow-lg shadow-cyan-500/20"
                    : "bg-slate-900/60 border-slate-800 hover:border-cyan-500/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-500 font-bold">0{idx + 1}</span>
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                        step.isCurrent
                          ? "bg-cyan-500 text-slate-950 border-cyan-300 animate-pulse"
                          : "bg-slate-800 text-cyan-400 border-slate-700"
                      }`}
                    >
                      {step.badge}
                    </span>
                  </div>

                  <div className="size-8 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                    <Icon className="size-4" />
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-cyan-300/80 font-medium truncate">
                    {step.institution}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>{step.level}</span>
                  {idx < progressionSteps.length - 1 && (
                    <ChevronRight className="size-3 text-cyan-400 hidden lg:block" />
                  )}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
