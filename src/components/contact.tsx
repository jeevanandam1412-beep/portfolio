"use client";

import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { Mail, Phone, MapPin, FileText, Send, Sparkles, Globe } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 relative bg-slate-950/60">
      <div className="container mx-auto px-4 max-w-5xl">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-3">
              LET&apos;S CONNECT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Open to New <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cloud Opportunities</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-4 font-light">
              Seeking an entry-level Cloud Computing or DevOps Engineering opportunity to apply AWS, Linux, automation, and infrastructure skills.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

          {/* Contact Details Card */}
          <div className="md:col-span-7">
            <BlurFade delay={0.2} className="h-full">
              <MagicCard className="h-full p-8 flex flex-col justify-between bg-slate-950/90 border-cyan-500/30">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                  <div className="space-y-6 mb-8">
                    <a href="mailto:jeevanandam1412@gmail.com" className="flex items-center gap-4 group">
                      <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400">Email Address</span>
                        <p className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          jeevanandam1412@gmail.com
                        </p>
                      </div>
                    </a>

                    <a href="tel:+918610692312" className="flex items-center gap-4 group">
                      <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400">Phone Number</span>
                        <p className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          +91 8610692312
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400">Location</span>
                        <p className="text-base font-semibold text-white">
                          Chennai, Tamil Nadu, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-mono"
                  >
                    <svg className="size-4 fill-cyan-400" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.28.61-2.25 1.78-2.25 1.1 0 1.57.82 1.57 2.22v4.96h2.79m-13.3-10.2a1.63 1.63 0 0 0 0-3.26 1.63 1.63 0 0 0 0 3.26m-1.4 10.2h2.79v-8.37H4.3v8.37z" /></svg>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-mono"
                  >
                    <svg className="size-4 fill-cyan-400" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" /></svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </MagicCard>
            </BlurFade>
          </div>

          {/* Quick Action Card */}
          <div className="md:col-span-5">
            <BlurFade delay={0.3} className="h-full">
              <MagicCard className="h-full p-8 flex flex-col justify-between bg-slate-950/80 border-slate-800">
                <div>
                  <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400">
                    <Sparkles className="size-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">Direct Engagement</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    Interested in discussing Cloud &amp; DevOps roles, AWS infrastructure setup, or reviewing my portfolio code? Send a direct email or message.
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="mailto:jeevanandam0809@gmail.com" className="w-full">
                    <ShimmerButton className="w-full justify-center">
                      <Send className="size-4" />
                      <span>Send Direct Email</span>
                    </ShimmerButton>
                  </a>
                </div>
              </MagicCard>
            </BlurFade>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Jeevanandam M. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with</span>
            <span className="text-cyan-400 font-bold">Next.js &amp; Magic UI</span>
          </p>
        </div>

      </div>
    </section>
  );
}
