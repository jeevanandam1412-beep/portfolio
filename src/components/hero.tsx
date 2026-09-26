"use client";

import React from "react";
import Image from "next/image";
import { SpotlightBackground } from "@/components/ui/spotlight-background";
import { SplitText } from "@/components/ui/split-text";
import { ShinyText } from "@/components/ui/shiny-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ArrowRight, Download, Building2, ShieldCheck, Mail, Phone, MapPin, Compass, FileCheck, Layers } from "lucide-react";

export function Hero() {
  return (
    <SpotlightBackground id="hero" className="min-h-screen flex items-center justify-center pt-28 pb-16">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/60 backdrop-blur-md mb-6 shadow-lg shadow-cyan-500/10">
                <Building2 className="size-4 text-cyan-400 animate-pulse" />
                <ShinyText text="TECHNICAL MANAGER • BANKING TECHNICAL OPERATIONS" speed={4} className="text-xs font-mono tracking-widest uppercase font-bold" />
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                <SplitText text="SANTHANA KRISHNAN G" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500" />
              </h1>
            </BlurFade>

            <BlurFade delay={0.25}>
              <h2 className="text-lg sm:text-xl font-mono text-cyan-300 font-semibold mb-6 flex flex-wrap items-center gap-2">
                <span>Property Valuation</span>
                <span className="text-slate-600">•</span>
                <span>Real Estate</span>
                <span className="text-slate-600">•</span>
                <span>Banking Technical Operations</span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-light">
                Experienced <strong className="text-cyan-300 font-semibold">Technical Manager</strong> with strong expertise in site inspections, vendor SLA management, internal technical audits, and regulatory compliance. Proficient in conducting detailed market analysis, risk assessment, and preparing accurate valuation reports for credit approvals at <span className="text-cyan-300 font-medium">IDFC FIRST Bank</span>, <span className="text-cyan-300 font-medium">Muthoot Homefin</span>, and <span className="text-cyan-300 font-medium">ICICI Bank</span>.
              </p>
            </BlurFade>

            {/* Quick Contact Line */}
            <BlurFade delay={0.35}>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-8 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <a href="mailto:santhanakrish8991@gmail.com" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                  <Mail className="size-3.5 text-cyan-400" />
                  <span>santhanakrish8991@gmail.com</span>
                </a>
                <span className="text-slate-700 hidden sm:inline">|</span>
                <a href="tel:+919894450229" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                  <Phone className="size-3.5 text-cyan-400" />
                  <span>9894450229</span>
                </a>
                <span className="text-slate-700 hidden sm:inline">|</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="size-3.5 text-cyan-400" />
                  <span>Ambattur, Chennai</span>
                </span>
              </div>
            </BlurFade>

            {/* Primary Action Buttons */}
            <BlurFade delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a href="#experience">
                  <ShimmerButton className="font-semibold text-white px-6 py-3">
                    <span>View Experience</span>
                    <ArrowRight className="size-4" />
                  </ShimmerButton>
                </a>
                <a href="#contact">
                  <button className="px-6 py-3 rounded-full text-sm font-semibold text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-cyan-300 bg-cyan-950/50 backdrop-blur-md transition-all shadow-lg hover:shadow-cyan-500/20">
                    Contact Me
                  </button>
                </a>
                <a
                  href="/Santhana_Krishnan_CV.pdf"
                  download="Santhana_Krishnan_CV.pdf"
                  className="px-5 py-3 rounded-full text-xs font-mono text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-slate-700 bg-slate-900/60 backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <Download className="size-3.5 text-cyan-400" />
                  <span>CV (PDF)</span>
                </a>
              </div>
            </BlurFade>

            {/* Quick Metrics */}
            <BlurFade delay={0.5}>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 w-full">
                <div className="flex flex-col">
                  <div className="flex items-center text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                    <NumberTicker value={5} />
                    <span>+ Yrs</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 font-mono">Banking &amp; Audit Exp</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                    <NumberTicker value={120} />
                    <span>+ /mo</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 font-mono">ICICI Site Visits</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                    <NumberTicker value={100} />
                    <span>%</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 font-mono">TAT &amp; SLA Compliance</span>
                </div>
              </div>
            </BlurFade>

          </div>

          {/* Right Architectural Blueprint & Profile Photo Stage */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <BlurFade delay={0.3} direction="left">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                
                {/* Blueprint Technical Box Graphic */}
                <div className="relative rounded-3xl p-4 bg-[#030c1a]/90 border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
                  <BorderBeam size={220} duration={10} colorFrom="#00f0ff" colorTo="#3b82f6" />
                  
                  {/* Technical Header CAD markers */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyan-500/20 text-[10px] font-mono text-cyan-400/80">
                    <span className="flex items-center gap-1">
                      <Compass className="size-3 text-cyan-400" />
                      <span>CAD: VALUATION_SURVEY.DWG</span>
                    </span>
                    <span className="bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                      GRID: 0.1M
                    </span>
                  </div>

                  {/* Image Container with Crosshair Blueprint overlay */}
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-cyan-500/20">
                    <Image
                      src="/santhanam.png"
                      alt="Santhana Krishnan G - Technical Manager"
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* CAD Blueprint Blueprint Grid Overlay lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                    
                    {/* Corner Blueprint Markers */}
                    <div className="absolute top-2 left-2 text-[9px] font-mono text-cyan-400/90 bg-slate-950/80 px-1.5 py-0.5 rounded border border-cyan-500/30">
                      N 13° 06&apos; 42&quot; E 80° 09&apos; 21&quot;
                    </div>
                    <div className="absolute top-2 right-2 text-[9px] font-mono text-cyan-400/90 bg-slate-950/80 px-1.5 py-0.5 rounded border border-cyan-500/30">
                      DCR-PASSED
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020814] via-transparent to-transparent opacity-80" />

                    {/* Bottom Floating Technical Info Card */}
                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#041224]/95 backdrop-blur-md border border-cyan-500/40 shadow-xl">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-white">Santhana Krishnan G</span>
                        <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300">
                        <span>Technical Manager</span>
                        <span className="text-slate-400">IDFC FIRST Bank</span>
                      </div>
                    </div>
                  </div>

                  {/* CAD Bottom Dimension Info bar */}
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-cyan-500/20 text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <FileCheck className="size-3 text-cyan-400" />
                      <span>CIVIL ENG • B.E.</span>
                    </span>
                    <span className="text-cyan-400 font-bold">100% AUDIT ACCURACY</span>
                  </div>

                </div>

              </div>
            </BlurFade>
          </div>

        </div>
      </div>
    </SpotlightBackground>
  );
}
