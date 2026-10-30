"use client";

import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { Cloud, ShieldCheck, Server, Cpu, Database, Activity, CheckCircle2 } from "lucide-react";

export function About() {
  const highlights = [
    { title: "Cloud Infrastructure", desc: "Building & deploying scalable AWS EC2, VPC, S3 & RDS environments.", icon: Cloud },
    { title: "Containerization", desc: "Dockerizing microservices and managing clusters with Kubernetes.", icon: Server },
    { title: "IAM & Security", desc: "Configuring fine-grained IAM policies, Security Groups & Cognito authentication.", icon: ShieldCheck },
    { title: "Monitoring & Ops", desc: "CloudWatch metric alarms, Nginx reverse proxying & PM2 process supervision.", icon: Activity },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-3">
              ABOUT ME
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Building Cloud Foundations <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">That Scale Reliably.</span>
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-6">
            <BlurFade delay={0.2} className="h-full">
              <MagicCard className="h-full flex flex-col justify-between p-5 sm:p-8 bg-slate-950/90 border-cyan-500/20">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Cpu className="size-6 text-cyan-400" />
                    <span>Cloud &amp; DevOps Engineer</span>
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 font-light">
                    I&apos;m <strong className="text-white font-semibold">Jeevanandam M</strong>, an entry-level Cloud and DevOps Engineer with AWS DevOps training and hands-on project experience deploying cloud-native applications on AWS.
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    Project technologies include <span className="text-cyan-300">Amazon EC2, VPC, RDS, EKS, ECR, Application Load Balancer, Docker, Kubernetes, Helm, Nginx,</span> and <span className="text-cyan-300">GitHub</span>. Foundational knowledge of CI/CD, Jenkins, Ansible, Linux, networking, monitoring, and cloud security. Seeking an entry-level Cloud or DevOps role.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-cyan-400 block mb-3 font-semibold">CORE COMPETENCIES &amp; SOFT SKILLS</span>
                  <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0" />
                      <span>Problem Solving</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0" />
                      <span>Team Collaboration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0" />
                      <span>Continuous Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0" />
                      <span>Time Management</span>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          </div>

          {/* 4 Feature Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <BlurFade key={item.title} delay={0.2 + idx * 0.1}>
                  <MagicCard className="h-full p-6 flex flex-col justify-start bg-slate-950/70 border-slate-800 hover:border-cyan-500/40">
                    <div className="size-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400">
                      <Icon className="size-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                  </MagicCard>
                </BlurFade>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
