"use client";

import React from "react";
import Image from "next/image";
import { Particles } from "@/components/ui/particles";
import { ShinyText } from "@/components/ui/shiny-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ArrowRight, Download, Server, Cloud, Cpu, ShieldCheck, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Particles Canvas */}
      <Particles className="absolute inset-0 z-0" quantity={60} color="#00c8ff" />

      {/* Radial Glow Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md mb-6 shadow-lg shadow-cyan-500/10">
                <Cloud className="size-4 text-cyan-400 animate-pulse" />
                <ShinyText text="Cloud Computing & DevOps Engineer • Chennai, India" speed={4} className="text-xs sm:text-sm font-mono tracking-wide" />
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
                Jeeva<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">nandam M</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-light">
                Aspiring <strong className="text-cyan-300 font-semibold">Cloud & DevOps Engineer</strong> with hands-on AWS DevOps training and practical experience architecting cloud-native microservices applications using <span className="text-cyan-300">AWS</span>, <span className="text-cyan-300">Linux</span>, <span className="text-cyan-300">Docker</span>, <span className="text-cyan-300">Kubernetes</span>, and automated <span className="text-cyan-300">CI/CD pipelines</span>.
              </p>
            </BlurFade>

            {/* CTA Buttons */}
            <BlurFade delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a href="#projects">
                  <ShimmerButton className="font-semibold text-white">
                    <span>View Architecture & Project</span>
                    <ArrowRight className="size-4" />
                  </ShimmerButton>
                </a>
                <a href="#contact" className="px-6 py-3 rounded-full text-sm font-medium text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-900/50 backdrop-blur-md transition-all">
                  Get in Touch
                </a>
              </div>
            </BlurFade>

            {/* Quick Metrics */}
            <BlurFade delay={0.5}>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 w-full">
                <div className="flex flex-col">
                  <div className="flex items-center text-2xl sm:text-3xl font-extrabold text-cyan-400">
                    <NumberTicker value={3} />
                    <span>+</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 font-mono">Microservices Deployed</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center text-2xl sm:text-3xl font-extrabold text-cyan-400">
                    <NumberTicker value={7.75} decimalPlaces={2} />
                  </div>
                  <span className="text-xs text-slate-400 mt-1 font-mono">B.E. CGPA (out of 10)</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center text-2xl sm:text-3xl font-extrabold text-cyan-400">
                    <NumberTicker value={20} />
                    <span>+</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 font-mono">AWS Services & Tools</span>
                </div>
              </div>
            </BlurFade>

          </div>

          {/* Right Profile Photo Stage */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <BlurFade delay={0.3} direction="left">
              <div className="relative group size-64 sm:size-80 lg:size-96 flex items-center justify-center">
                
                {/* Outer Glow Halo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow" />
                
                {/* Orbit Ring */}
                <div className="absolute -inset-4 rounded-full border border-cyan-500/20 border-dashed animate-spin-slow" />

                {/* Profile Card Frame */}
                <div className="relative size-full rounded-3xl overflow-hidden p-2 bg-slate-900/90 border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
                  <BorderBeam size={180} duration={12} colorFrom="#00f0ff" colorTo="#7000ff" />
                  <div className="relative size-full rounded-2xl overflow-hidden bg-slate-950">
                    <Image
                      src="/profile-photo.png"
                      alt="Jeevanandam M - Cloud & DevOps Engineer"
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-xs font-mono text-emerald-300">Open to Opportunities</span>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">Chennai</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </BlurFade>
          </div>

        </div>
      </div>
    </section>
  );
}
