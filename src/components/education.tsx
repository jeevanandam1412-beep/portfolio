"use client";

import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-3">
              ACADEMIC BACKGROUND
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Education &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Qualifications</span>
            </h2>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <MagicCard className="p-8 bg-slate-950/90 border-cyan-500/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 mb-6 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="size-14 rounded-2xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <GraduationCap className="size-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Bachelor of Engineering (B.E.)
                  </h3>
                  <p className="text-cyan-400 font-medium text-base">
                    Electronics &amp; Instrumentation Engineering
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-sm font-extrabold font-mono shadow-md">
                  CGPA: 7.75 / 10
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <Award className="size-5 text-cyan-400 shrink-0" />
                <span>Focus: Embedded Systems, Signal Processing, Control Automation</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <BookOpen className="size-5 text-cyan-400 shrink-0" />
                <span>Specialized Transition to Cloud Computing &amp; DevOps</span>
              </div>
            </div>
          </MagicCard>
        </BlurFade>
      </div>
    </section>
  );
}
