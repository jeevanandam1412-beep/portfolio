"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { Layers, Server, ShieldCheck, Cpu, Maximize2, X, ExternalLink, CheckCircle2 } from "lucide-react";

export function Projects() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const chips = [
    "AWS EC2", "VPC", "RDS", "ALB", "Auto Scaling", "Nginx", "PM2", "Node.js", "Next.js", "GitHub", "Reverse Proxy", "Load Balancing"
  ];

  return (
    <section id="projects" className="py-20 relative bg-slate-950/60">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-3">
              FEATURED WORK &amp; ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Cloud Project &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">System Architecture</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-4 font-light">
              Real deployment architecture and operations for the Cloud-Native E-Commerce Microservices Platform built on AWS.
            </p>
          </div>
        </BlurFade>

        {/* Project Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Card 1: Microservices Platform */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.2} className="h-full">
              <MagicCard className="h-full p-8 flex flex-col justify-between bg-slate-950/90 border-cyan-500/30">
                <BorderBeam size={200} duration={12} colorFrom="#00f0ff" colorTo="#7000ff" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
                      Cloud-Native Deployment
                    </span>
                    <Layers className="size-6 text-cyan-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    Cloud-Native E-Commerce Microservices Platform
                  </h3>
                  
                  <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
                    Architected and deployed a multi-service e-commerce platform using decoupled <strong className="text-cyan-300">User, Product, and Order microservices</strong> with a modern Next.js frontend application.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                      <span>Decoupled Node.js REST API microservices architecture</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                      <span>Managed PostgreSQL database instance via AWS RDS</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                      <span>Automated process management with PM2 and zero downtime</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                  {chips.slice(0, 7).map((chip) => (
                    <span key={chip} className="px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                      {chip}
                    </span>
                  ))}
                </div>
              </MagicCard>
            </BlurFade>
          </div>

          {/* Card 2: Architecture & Operations */}
          <div className="lg:col-span-5">
            <BlurFade delay={0.3} className="h-full">
              <MagicCard className="h-full p-8 flex flex-col justify-between bg-slate-950/80 border-slate-800 hover:border-cyan-500/40">
                <div>
                  <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400">
                    <Server className="size-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    Architecture &amp; Cloud Operations
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    Configured VPC subnets, Application Load Balancers (ALB), and Auto Scaling groups to achieve high availability and fault-tolerant horizontal scaling under dynamic user traffic.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                      <span className="size-1.5 rounded-full bg-cyan-400" />
                      <span>Nginx Reverse Proxy &amp; SSL Termination</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                      <span className="size-1.5 rounded-full bg-cyan-400" />
                      <span>Multi-AZ VPC &amp; Security Group Isolation</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                      <span className="size-1.5 rounded-full bg-cyan-400" />
                      <span>CloudWatch Real-Time Alarms &amp; Logging</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                  {chips.slice(7).map((chip) => (
                    <span key={chip} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                      {chip}
                    </span>
                  ))}
                </div>
              </MagicCard>
            </BlurFade>
          </div>

        </div>

        {/* SYSTEM ARCHITECTURE DIAGRAM SHOWCASE */}
        <div id="architecture" className="pt-8 border-t border-slate-800/80">
          <BlurFade delay={0.4}>
            <div className="flex flex-col items-start mb-8">
              <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase mb-1">
                AWS DEPLOYMENT SCHEMATIC
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Cloud-Native Microservices Architecture Diagram
              </h3>
            </div>

            {/* Architecture Image Container */}
            <div className="relative group rounded-2xl overflow-hidden glass-panel p-3 border border-cyan-500/30 shadow-2xl">
              <BorderBeam size={250} duration={15} colorFrom="#00f0ff" colorTo="#7000ff" />
              
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="relative w-full h-[350px] sm:h-[480px] lg:h-[550px] rounded-xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center group"
              >
                <Image
                  src="/architecture-diagram.jpg"
                  alt="Cloud-Native E-Commerce Microservices AWS Architecture Diagram"
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm">
                  <div className="px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-400/50 backdrop-blur-md flex items-center gap-2 shadow-xl">
                    <Maximize2 className="size-4 text-cyan-400" />
                    <span>Click to Expand Architecture Diagram</span>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-slate-900 rounded-2xl border border-cyan-500/40 p-4 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <h4 className="text-lg font-bold text-white font-mono">
                Cloud-Native E-Commerce Architecture Diagram (High Resolution)
              </h4>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            
            <div className="relative w-full h-[70vh]">
              <Image
                src="/architecture-diagram.jpg"
                alt="Cloud Architecture High Resolution"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
