"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { CareerProgression } from "@/components/career-progression";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Award 
} from "lucide-react";

export function Experience() {
  // State to handle accordion toggle for each experience card
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({
    0: true, // IDFC FIRST Bank expanded by default
  });

  const toggleExpand = (idx: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const experiences = [
    {
      organization: "IDFC FIRST Bank",
      role: "Technical Manager",
      logo: "/logos/idfc.svg",
      location: "Ambattur, Chennai",
      period: "August 2026 – Present",
      isCurrent: true,
      summary: "Leading internal technical audits, vendor empanelment SLAs, case concurrence, and real estate market dynamics intelligence across commercial & mortgage valuation cases.",
      responsibilities: [
        "Conduct internal technical audits by collecting sample cases to ensure quality, accuracy, and compliance of vendor valuation reports.",
        "Streamline end-to-end case workflow from initiation and vendor allocation to final report submission and technical concurrence.",
        "Manage vendor empanelment, monitor TAT performance, and validate billing as per agreed service-level standards.",
        "Monitor and analyze real estate market dynamics through structured market intelligence, including macro and micro-level indicators, transaction trends, and risk assessment metrics.",
        "Conduct regular meetings and training sessions with internal stakeholders and empaneled vendors to enhance process alignment and performance standards.",
        "Collect and analyze feedback, identify operational gaps, and implement corrective measures to resolve process challenges and improve efficiency.",
      ],
      tags: ["Technical Audits", "Vendor Empanelment", "SLA & Billing Audit", "Real Estate Intelligence", "Case Concurrence"],
    },
    {
      organization: "Muthoot Homefin (India) Limited",
      role: "Technical Manager (Assistant Manager III)",
      logo: "/logos/muthoot.svg",
      location: "Chennai, India",
      period: "March 2026 – July 2026",
      isCurrent: false,
      summary: "Managed housing finance mortgage valuations, site inspection approvals, and empaneled vendor quality control.",
      responsibilities: [
        "Assess property values through site inspection and market comparison methodologies.",
        "Approving valuation reports of internal team and external vendors ensuring quality and TAT compliance.",
        "Manage vendors and ensure adherence to strict banking standards and risk parameters.",
      ],
      tags: ["Property Valuation", "Valuation Approval", "Vendor SLA", "TAT Compliance"],
    },
    {
      organization: "ICICI Bank",
      role: "Technical Officer (Assistant Manager II)",
      logo: "/logos/icici.svg",
      location: "Chennai, India",
      period: "February 2023 – February 2026",
      isCurrent: false,
      summary: "Executed high-volume site inspections (~120+ property visits/mo), mortgage document vetting, DCR verification, and credit recommendations.",
      responsibilities: [
        "Providing quality reports with TAT and visiting around 120nos of reports for the month.",
        "Verifying the documents which is mandatory for mortgage valuation based on product type.",
        "Vetting vendors reports and ensure adherence to banking standards and recommend for approval.",
        "Aware about market price and real estate related news and verify the master plan, land use classification and also DCR norms.",
      ],
      tags: ["~120 Visits/mo", "Mortgage Doc Vetting", "DCR Norms", "Land Use Verification", "Credit Approval"],
    },
    {
      organization: "Adroit Technical Services Pvt Ltd",
      role: "Technical Engineer",
      logo: "/logos/adroit.svg",
      location: "Chennai, India",
      period: "December 2021 – January 2023",
      isCurrent: false,
      summary: "Valuation engineering for land, residential, and complex commercial assets (shopping centers, factories, offices).",
      responsibilities: [
        "Estimating the market value of land, buildings, and commercial properties such as offices, shopping centers, and factories.",
        "Inspect and measure the exterior and interior of the property.",
        "Conducting research into clients' assets and analyzing the usage of the property.",
        "Survey the interior of the property to identify the number of units, and amenities of the property.",
        "Compare the property's selling value to other buildings in the area.",
        "Analyzing potential disputes around land and property sales.",
        "Keeping up to date with the property market and being aware of any potential government development projects.",
      ],
      tags: ["Commercial Valuation", "Factories & Offices", "Interior Survey", "Dispute Analysis", "Govt Projects"],
    },
    {
      organization: "Mars Construction",
      role: "Junior Site Engineer (ADB-SWD-GCC Project)",
      logo: "/logos/mars.svg",
      location: "Chennai, India",
      period: "June 2021 – November 2021",
      isCurrent: false,
      summary: "Site execution for Asian Development Bank - Storm Water Drain project under Greater Chennai Corporation.",
      responsibilities: [
        "Execute the works what they planned and organized for the project.",
        "Monitored and managed labour and materials in the site.",
        "Handle daily reports related to the work progress and safety of the labour.",
        "Calculate and arrangements of materials in the site for daily work basis and responsible for work finished in given period.",
      ],
      tags: ["ADB SWD GCC Project", "Civil Engineering", "Labor Safety", "Material Budgeting", "Site Execution"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#020610]/90">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-cyan-500/10">
              CAREER &amp; PROFESSIONAL EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Enterprise Banking &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Technical Track Record</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4 font-light">
              Detailed chronological record of technical management, property valuation, internal audits, and civil engineering projects.
            </p>
          </div>
        </BlurFade>

        {/* Visual Career Progression Flow */}
        <BlurFade delay={0.15}>
          <CareerProgression />
        </BlurFade>

        {/* Vertical Animated Timeline Stage */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-10 mt-12">
          {experiences.map((item, idx) => {
            const isExpanded = expandedCards[idx];

            return (
              <BlurFade key={item.organization + idx} delay={0.2 + idx * 0.1}>
                <div className="relative group">
                  
                  {/* Timeline Node - Official Company Logo Badge */}
                  <div className="absolute -left-[37px] sm:-left-[53px] top-6 size-14 rounded-2xl bg-white p-1.5 border-2 border-cyan-400 flex items-center justify-center shadow-xl shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300 z-20">
                    <div className="relative size-full rounded-xl overflow-hidden bg-white p-0.5 flex items-center justify-center">
                      <Image
                        src={item.logo}
                        alt={`${item.organization} Logo`}
                        width={44}
                        height={44}
                        className="object-contain size-full"
                      />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className={`relative rounded-3xl p-6 sm:p-8 bg-[#040e1a]/95 border transition-all duration-300 ${
                    item.isCurrent ? "border-cyan-500/60 shadow-2xl shadow-cyan-950/50" : "border-slate-800 hover:border-cyan-500/40"
                  }`}>
                    {item.isCurrent && (
                      <BorderBeam size={200} duration={12} colorFrom="#00f0ff" colorTo="#3b82f6" />
                    )}
                    
                    {/* Top Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800/80">
                      <div className="flex items-center gap-4">
                        {/* Company Logo Emblem */}
                        <div className="size-14 rounded-2xl bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-md">
                          <Image
                            src={item.logo}
                            alt={item.organization}
                            width={44}
                            height={44}
                            className="object-contain size-full"
                          />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {item.role}
                            </h3>
                            {item.isCurrent && (
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40 animate-pulse">
                                Present Position
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-cyan-400 font-semibold text-base">
                            <Building2 className="size-4 shrink-0" />
                            <span>{item.organization}</span>
                          </div>
                        </div>
                      </div>

                      {/* Date & Location Badges */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                        <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800">
                          <Calendar className="size-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800">
                          <MapPin className="size-3.5 text-cyan-400" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Short Professional Summary */}
                    <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Expand / Collapse Responsibilities Accordion Button */}
                    <div className="mb-4">
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-950 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 transition-all shadow-md"
                      >
                        <span>{isExpanded ? "Hide Responsibilities" : "View Responsibilities"}</span>
                        {isExpanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                      </button>
                    </div>

                    {/* Expandable Bullet Points Accordion */}
                    {isExpanded && (
                      <div className="space-y-3 mb-6 p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/20 animate-in fade-in slide-in-from-top-2 duration-300">
                        <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                          Key Responsibilities &amp; Achievements:
                        </h4>
                        <ul className="space-y-2.5">
                          {item.responsibilities.map((pt, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                              <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Skills/Domains Chips */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-lg bg-cyan-950/50 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                          #{tag}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
