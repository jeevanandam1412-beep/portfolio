"use client";

import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "AWS DevOps Course / Cloud & DevOps Trainee",
      organization: "FITA Academy, Chennai",
      location: "Chennai, Tamil Nadu",
      period: "July 2024 – Sept 2024",
      badge: "Professional Training",
      points: [
        "Completed comprehensive practical training covering AWS infrastructure, VPC networking, EC2, S3 storage, and IAM access control.",
        "Hands-on containerization and orchestration using Docker and Kubernetes, including manifests, deployments, and services.",
        "Implemented Jenkins CI/CD automation pipelines, GitHub integration, and Ansible configuration management.",
        "Set up real-time monitoring and alerting with Amazon CloudWatch metrics, alarms, and system log streams.",
      ],
    },
    {
      role: "Trainee – Quality Check & Cluster Operations",
      organization: "Doosan Bobcat India Pvt. Ltd.",
      location: "Gummidipoondi, Tamil Nadu",
      period: "June 2024",
      badge: "Industry Internship",
      points: [
        "Assisted with quality inspections, cluster operations, and production monitoring; supported robotic welding operations adhering strictly to industrial safety and compliance procedures.",
        "Contributed to data analysis activities to identify production process bottlenecks and support continuous quality improvement initiatives.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-20 relative bg-slate-950/40">
      <div className="container mx-auto px-4 max-w-5xl">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-3">
              CAREER &amp; EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Hands-On Work &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Training Experience</span>
            </h2>
          </div>
        </BlurFade>

        <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-8 sm:space-y-12">
          {experiences.map((item, idx) => (
            <BlurFade key={idx} delay={0.2 + idx * 0.1}>
              <div className="relative group">
                
                {/* Timeline Node Icon */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-5 size-8 sm:size-10 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30">
                  <Briefcase className="size-3.5 sm:size-5" />
                </div>

                {/* Experience Card */}
                <MagicCard className="relative p-5 sm:p-8 bg-slate-950/90 border-cyan-500/30">
                  <BorderBeam size={160} duration={10} colorFrom="#00f0ff" colorTo="#7000ff" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{item.role}</h3>
                      <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                        <Award className="size-4" />
                        <span>{item.organization}</span>
                        {item.badge && (
                          <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-500/30">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                        <Calendar className="size-3.5 text-cyan-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                        <MapPin className="size-3.5 text-cyan-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                        <CheckCircle2 className="size-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </MagicCard>

              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
