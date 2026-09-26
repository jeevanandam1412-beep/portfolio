"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { CheckCircle2, ExternalLink } from "lucide-react";

export function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const caseStudies = [
    {
      id: "idfc",
      category: "banking",
      title: "IDFC First Bank Technical Audit & Workflow System",
      company: "IDFC First Bank",
      logo: "/logos/idfc.svg",
      role: "Technical Manager",
      description: "Established comprehensive internal technical audit procedures and streamlined the end-to-end valuation workflow from case initiation and vendor allocation to final concurrence.",
      highlights: [
        "Collected sample cases for internal technical audits to guarantee report quality & compliance.",
        "Empaneled vendors, monitored Turnaround Time (TAT) metrics, and validated monthly billing SLAs.",
        "Monitored macro/micro market indicators, real estate transaction trends, and risk assessment metrics.",
        "Conducted training sessions with empaneled vendors to align with IDFC First Bank policies.",
      ],
      tags: ["Technical Audit", "Vendor SLA", "TAT Management", "Market Intelligence", "Concurrence"],
    },
    {
      id: "icici",
      category: "banking",
      title: "ICICI Bank High-Volume Inspection & Document Vetting",
      company: "ICICI Bank",
      logo: "/logos/icici.svg",
      role: "Technical Officer (Assistant Manager II)",
      description: "Executed high-volume site inspections (~120+ property visits per month) and verified technical/legal documentation for mortgage loan approvals.",
      highlights: [
        "Delivered quality valuation reports with strict TAT compliance across 120+ monthly site visits.",
        "Verified mandatory documents required for mortgage valuation based on specific product types.",
        "Vetted external vendor reports and recommended qualified cases for credit approval.",
        "Analyzed real estate market prices, master plans, land use classification, and DCR norms.",
      ],
      tags: ["120+ Visits/mo", "Mortgage Valuation", "Document Vetting", "DCR Norms", "Land Use"],
    },
    {
      id: "muthoot",
      category: "banking",
      title: "Muthoot Homefin Mortgage Valuation Approval",
      company: "Muthoot Homefin (India) Limited",
      logo: "/logos/muthoot.svg",
      role: "Technical Manager (AM III)",
      description: "Managed property valuation approvals for internal and empaneled vendor reports, ensuring adherence to housing finance regulations and risk thresholds.",
      highlights: [
        "Assessed property market values through physical inspection and comparative market analysis.",
        "Approved internal and vendor valuation reports ensuring highest quality and SLA compliance.",
        "Enforced strict banking standards across empaneled vendor valuation partners.",
      ],
      tags: ["Property Valuation", "SLA Compliance", "Housing Finance", "Risk Mitigation"],
    },
    {
      id: "adroit",
      category: "valuation",
      title: "Commercial & Industrial Property Valuation Engine",
      company: "Adroit Technical Services Pvt Ltd",
      logo: "/logos/adroit.svg",
      role: "Technical Engineer",
      description: "Estimated market values for complex asset classes including commercial offices, shopping centers, industrial factories, and raw land across Tamil Nadu.",
      highlights: [
        "Estimated market value of land, residential buildings, offices, shopping malls & factories.",
        "Inspected and surveyed interior layout dimensions, unit counts, and architectural amenities.",
        "Researched client asset usage and executed comparative market selling analysis.",
        "Analyzed potential boundary and legal disputes surrounding land and property transactions.",
      ],
      tags: ["Commercial Valuation", "Industrial Factories", "Surveying", "Dispute Resolution"],
    },
    {
      id: "mars",
      category: "civil",
      title: "ADB-SWD-GCC Civil Infrastructure Project",
      company: "Mars Construction",
      logo: "/logos/mars.svg",
      role: "Junior Site Engineer",
      description: "Supervised site execution for the Asian Development Bank - Storm Water Drain project under Greater Chennai Corporation (ADB-SWD-GCC).",
      highlights: [
        "Executed planned civil construction works according to project schedules.",
        "Monitored and managed daily site labor, machinery, and raw material inventory.",
        "Prepared daily progress and labor safety reports to ensure target deadlines were met.",
        "Calculated daily material requirements and optimized supply chain delivery.",
      ],
      tags: ["ADB Infrastructure", "Storm Water Drain", "GCC Chennai", "Civil Supervision"],
    },
  ];

  const filteredCases = activeTab === "all" 
    ? caseStudies 
    : caseStudies.filter((item) => item.category === activeTab);

  return (
    <section id="projects" className="py-24 relative bg-[#020610]/80">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-cyan-500/10">
              KEY PROJECTS &amp; CASE PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Major Case Studies &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Key Achievements</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4 font-light">
              Detailed breakdown of technical audit frameworks, valuation systems, and civil infrastructure projects executed.
            </p>
          </div>
        </BlurFade>

        {/* Tab Filters */}
        <BlurFade delay={0.2} className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            {[
              { id: "all", label: "All Projects" },
              { id: "banking", label: "Banking & Audits" },
              { id: "valuation", label: "Property Valuations" },
              { id: "civil", label: "Civil Infrastructure" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-lg shadow-cyan-500/20 font-bold"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </BlurFade>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((item, idx) => (
            <BlurFade key={item.id} delay={0.2 + idx * 0.1}>
              <TiltCard className="h-full p-8 flex flex-col justify-between bg-[#040e1a]/90 border-slate-800 hover:border-cyan-500/50 transition-all group">
                {idx === 0 && (
                  <BorderBeam size={200} duration={12} colorFrom="#00f0ff" colorTo="#7000ff" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-white p-1 border border-slate-200 flex items-center justify-center">
                        <Image src={item.logo} alt={item.company} width={24} height={24} className="object-contain size-full" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
                        {item.company}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-semibold">{item.role}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-slate-300 text-xs font-light">
                        <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/80">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                      #{tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </BlurFade>
          ))}
        </div>

      </div>
    </section>
  );
}
