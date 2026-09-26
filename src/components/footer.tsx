"use client";

import React from "react";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#01040a] border-t border-slate-800/80 py-12 text-slate-400">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Role */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="size-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white tracking-tight">Santhana Krishnan G</h3>
          </div>
          <p className="text-xs font-mono text-cyan-300 font-semibold mb-1">Technical Manager</p>
          <p className="text-xs text-slate-400 font-light">Property Valuation • Real Estate • Banking</p>
        </div>

        {/* Quick Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
          <a href="mailto:santhanakrish8991@gmail.com" className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors">
            <Mail className="size-3.5 text-cyan-400" />
            <span>santhanakrish8991@gmail.com</span>
          </a>
          <a href="tel:+919894450229" className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors">
            <Phone className="size-3.5 text-cyan-400" />
            <span>9894450229</span>
          </a>
          <span className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="size-3.5 text-cyan-400" />
            <span>Ambattur, Chennai</span>
          </span>
        </div>

      </div>

      <div className="container mx-auto px-4 max-w-6xl mt-8 pt-6 border-t border-slate-900 text-center text-[11px] font-mono text-slate-600">
        © {new Date().getFullYear()} Santhana Krishnan G. All rights reserved. Built with Next.js &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
