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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-3">
              ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Building Cloud Foundations <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">That Scale Reliably.</span>
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-6">
            <BlurFade delay={0.2} className="h-full">
              <MagicCard className="h-full flex flex-col justify-between p-8 bg-slate-950/90 border-cyan-500/20">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Cpu className="size-6 text-cyan-400" />
                    <span>Electronics & Instrumentation Engineer</span>
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
                    I&apos;m <strong className="text-white font-semibold">Jeevanandam M</strong>, an Electronics and Instrumentation Engineering graduate based in Chennai, specializing in <strong className="text-cyan-300">Cloud Computing and DevOps Engineering</strong>.
                  </p>
                  <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
                    Through hands-on AWS DevOps training and practical microservices projects, I have developed strong foundational expertise in provisioning cloud infrastructure, automated application deployment, load balancing, security configuration, and real-time monitoring.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                    <span>AWS DevOps Trained</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                    <span>Linux Administration</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                    <span>Container Microservices</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                    <span>CI/CD Pipeline Setup</span>
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
