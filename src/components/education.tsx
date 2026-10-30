"use client";

import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from "lucide-react";

export function Education() {
  const educations = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Electronics and Instrumentation Engineering",
      institution: "SRM Valliammai Engineering College",
      location: "Chennai, Tamil Nadu",
      period: "2023 – 2026",
      score: "CGPA: 7.75 / 10",
      featured: true,
      highlights: [
        "Core coursework in control systems, instrumentation automation, embedded systems, and computing fundamentals.",
        "Specialized transition and dedicated training in Cloud Infrastructure, DevOps pipelines, and Container Orchestration.",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science & Mathematics Stream",
      institution: "Vivekananda Matric Higher Secondary School",
      location: "Tamil Nadu",
      period: "2020 – 2022",
      score: "78%",
      featured: false,
      highlights: [
        "Completed higher secondary education with strong fundamentals in Physics, Chemistry, and Mathematics.",
      ],
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      field: "General Secondary Curriculum",
      institution: "Vivekananda Matric Higher Secondary School",
      location: "Tamil Nadu",
      period: "2019 – 2020",
      score: "92.8%",
      featured: false,
      highlights: [
        "Achieved top academic performance of 92.8% in secondary matriculation examinations.",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="container mx-auto px-4 max-w-5xl">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-3">
              ACADEMIC BACKGROUND
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Education &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Qualifications</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-4 font-light">
              Formal academic milestones and engineering education listed in the official resume.
            </p>
          </div>
        </BlurFade>

        <div className="space-y-6">
          {educations.map((item, idx) => (
            <BlurFade key={idx} delay={0.2 + idx * 0.1}>
              <MagicCard
                className={`p-6 sm:p-8 bg-slate-950/90 ${
                  item.featured ? "border-cyan-500/40" : "border-slate-800"
                }`}
              >
                {item.featured && (
                  <BorderBeam size={180} duration={12} colorFrom="#00f0ff" colorTo="#7000ff" />
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <GraduationCap className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {item.degree}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm sm:text-base">
                        {item.field}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mt-1">
                        <span className="text-slate-300 font-semibold">{item.institution}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="size-3 text-cyan-400" />
                          {item.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3 text-cyan-400" />
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                    <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs sm:text-sm font-extrabold font-mono shadow-md">
                      {item.score}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 pt-1">
                  {item.highlights.map((hl, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm font-light leading-relaxed"
                    >
                      <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
