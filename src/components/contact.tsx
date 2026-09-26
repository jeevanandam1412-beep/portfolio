"use client";

import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { Mail, Phone, MapPin, Download, Send, Sparkles, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#020610]">
      
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 size-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-cyan-500/10">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Connect</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4 font-light">
              For professional opportunities, technical valuation discussions, or collaboration.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Contact Details Card */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.2} className="h-full">
              <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#041021]/90 border-cyan-500/30">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Building2 className="size-6 text-cyan-400" />
                    <span>Direct Professional Contacts</span>
                  </h3>

                  <div className="space-y-6 mb-8">
                    {/* Email */}
                    <a href="mailto:santhanakrish8991@gmail.com" className="flex items-center gap-4 group p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all">
                      <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all shrink-0">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400">Email Address</span>
                        <p className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          santhanakrish8991@gmail.com
                        </p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a href="tel:+919894450229" className="flex items-center gap-4 group p-3 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all">
                      <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all shrink-0">
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400">Phone Number</span>
                        <p className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          +91 9894450229
                        </p>
                      </div>
                    </a>

                    {/* Location */}
                    <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                      <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400">Location</span>
                        <p className="text-base font-semibold text-white">
                          Ambattur, Chennai, Tamil Nadu, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-cyan-400" />
                    <span>CONFIDENTIAL &amp; PROFESSIONAL INQUIRIES</span>
                  </span>
                  <span className="text-cyan-400 font-bold">OPEN TO DISCUSSIONS</span>
                </div>
              </MagicCard>
            </BlurFade>
          </div>

          {/* Action Callout Card */}
          <div className="lg:col-span-5">
            <BlurFade delay={0.3} className="h-full">
              <MagicCard className="h-full p-8 flex flex-col justify-between bg-[#041021]/80 border-slate-800">
                <div>
                  <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400">
                    <Sparkles className="size-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">Professional Collaboration</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    Available for Technical Manager, Valuation Lead, and Banking Technical Risk leadership positions. Reach out directly via email or download my complete CV.
                  </p>

                  <div className="space-y-3 mb-6 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                      <span>Technical Audits &amp; Valuation Concurrence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                      <span>Vendor Empanelment &amp; SLA Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                      <span>Real Estate Market Intelligence</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <a href="mailto:santhanakrish8991@gmail.com" className="w-full block">
                    <ShimmerButton className="w-full justify-center font-semibold text-white py-3.5">
                      <Send className="size-4" />
                      <span>Send Direct Email</span>
                    </ShimmerButton>
                  </a>

                  <a
                    href="/Santhana_Krishnan_CV.pdf"
                    download="Santhana_Krishnan_CV.pdf"
                    className="w-full py-3.5 rounded-full text-xs font-mono font-bold text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-cyan-300 bg-cyan-950/40 backdrop-blur-md transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Download className="size-4 text-cyan-400" />
                    <span>Download CV (PDF)</span>
                  </a>
                </div>
              </MagicCard>
            </BlurFade>
          </div>

        </div>

      </div>
    </section>
  );
}
