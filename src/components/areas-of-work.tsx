"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { 
  Building2, 
  ShieldCheck, 
  Search, 
  Users, 
  Scale, 
  FileCheck, 
  TrendingUp, 
  ClipboardCheck, 
  CheckCircle2, 
  MapPin, 
  Calendar 
} from "lucide-react";

export function AreasOfWork() {
  const [activeTab, setActiveTab] = useState("all");

  const workAreas = [
    {
      id: "valuation",
      category: "valuation",
      title: "Property Valuation & Asset Appraisal",
      icon: Building2,
      institution: "IDFC FIRST Bank / Muthoot / Adroit",
      logo: "/logos/idfc.svg",
      description: "Market value estimation of land, residential buildings, commercial offices, shopping malls, and industrial factories across Tamil Nadu.",
      highlights: [
        "Estimating market values based on physical inspection & comparative market sales.",
        "Surveying interior dimensions, unit counts, structural amenities, and building condition.",
        "Commercial and factory asset research to determine fair market & realizable values.",
      ],
      tags: ["Property Valuation", "Commercial Malls", "Factories & Offices", "Land Estimation"],
    },
    {
      id: "mortgage",
      category: "banking",
      title: "Mortgage Valuation & Credit Concurrence",
      icon: FileCheck,
      institution: "ICICI Bank / Muthoot Homefin",
      logo: "/logos/icici.svg",
      description: "Document verification and technical vetting for home loan and mortgage credit recommendations.",
      highlights: [
        "Mandatory document verification for mortgage valuation based on specific product type.",
        "Approving internal and vendor valuation reports for housing loan disbursals.",
        "Ensuring technical concurrence and credit policy adherence across all submitted cases.",
      ],
      tags: ["Mortgage Valuation", "Credit Approval", "Document Vetting", "Housing Loans"],
    },
    {
      id: "audits",
      category: "audits",
      title: "Internal Technical Audits & Quality Control",
      icon: ShieldCheck,
      institution: "IDFC FIRST Bank",
      logo: "/logos/idfc.svg",
      description: "Systematic sampling and internal technical audits to maintain report accuracy and prevent valuation inflation.",
      highlights: [
        "Collecting random sample cases to evaluate valuation report quality and compliance.",
        "Identifying operational gaps and implementing corrective action plans.",
        "Enforcing strict concurrence standards across external vendor partners.",
      ],
      tags: ["Technical Audits", "Sample Case Review", "Concurrence", "Quality Control"],
    },
    {
      id: "vendor",
      category: "banking",
      title: "Vendor Empanelment & SLA Management",
      icon: Users,
      institution: "IDFC FIRST Bank / Muthoot",
      logo: "/logos/muthoot.svg",
      description: "End-to-end management of external valuation vendors, SLA monitoring, TAT tracking, and billing validation.",
      highlights: [
        "Empaneling valuation vendors based on regulatory & technical competence standards.",
        "Monitoring Turnaround Time (TAT) and validating monthly vendor invoices against SLAs.",
        "Conducting training sessions and review meetings with empaneled vendor partners.",
      ],
      tags: ["Vendor SLA", "Empanelment", "TAT Monitoring", "Billing Audit"],
    },
    {
      id: "realestate",
      category: "realestate",
      title: "Real Estate Market Dynamics & Intelligence",
      icon: TrendingUp,
      institution: "IDFC FIRST Bank / ICICI Bank",
      logo: "/logos/idfc.svg",
      description: "Structured market intelligence tracking macro/micro-level trends, price fluctuations, and area transaction rates.",
      highlights: [
        "Monitoring local real estate price trends, supply/demand, and transaction velocity.",
        "Synthesizing market intelligence to inform credit risk thresholds.",
        "Keeping abreast of government infrastructure and urban development announcements.",
      ],
      tags: ["Market Analysis", "Macro & Micro Trends", "Price Intelligence", "Transaction Metrics"],
    },
    {
      id: "risk",
      category: "audits",
      title: "Risk Assessment & Boundary Dispute Analysis",
      icon: Scale,
      institution: "Adroit / ICICI Bank",
      logo: "/logos/adroit.svg",
      description: "In-depth risk assessment evaluating property legal disputes, boundary overlaps, and asset security risks.",
      highlights: [
        "Analyzing potential legal, land-use, or boundary disputes surrounding property sales.",
        "Identifying high-risk areas or non-conforming property usages.",
        "Structuring risk mitigation recommendations for bank credit committees.",
      ],
      tags: ["Risk Assessment", "Dispute Analysis", "Boundary Survey", "Credit Safety"],
    },
    {
      id: "compliance",
      category: "realestate",
      title: "Banking Compliance & DCR Norms Verification",
      icon: ClipboardCheck,
      institution: "ICICI Bank / IDFC FIRST Bank",
      logo: "/logos/icici.svg",
      description: "Verifying master plans, land-use classifications, layout approvals, and Development Control Regulations (DCR).",
      highlights: [
        "Checking property compliance with master plans and Development Control Regulations.",
        "Verifying land-use classifications (residential, commercial, industrial, agricultural).",
        "Ensuring complete regulatory adherence to local municipal & town planning norms.",
      ],
      tags: ["DCR Norms", "Master Plan", "Zoning Rules", "Banking Compliance"],
    },
    {
      id: "inspection",
      category: "valuation",
      title: "High-Volume Property Site Inspection",
      icon: Search,
      institution: "ICICI Bank / Mars Construction",
      logo: "/logos/icici.svg",
      description: "Executing rapid, high-accuracy field site inspections (~120+ property audits per month).",
      highlights: [
        "Executing physical visits to ~120+ property cases per month with high TAT efficiency.",
        "Capturing detailed measurement records, layout photos, and amenity details.",
        "On-site verification of physical existence, boundaries, and structural condition.",
      ],
      tags: ["120+ Visits/mo", "Site Inspection", "Physical Verification", "Field Survey"],
    },
  ];

  const filteredAreas = activeTab === "all"
    ? workAreas
    : workAreas.filter((item) => item.category === activeTab);

  return (
    <section id="areas-of-work" className="py-24 relative bg-[#020610]/90">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/4 size-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/80 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-cyan-500/10">
              PROFESSIONAL SCOPE &amp; DOMAINS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Areas of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Work &amp; Expertise</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4 font-light">
              Core professional domains representing Santhana Krishnan G&apos;s valuation engineering and banking audit practice.
            </p>
          </div>
        </BlurFade>

        {/* Tab Filter Bar */}
        <BlurFade delay={0.15} className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            {[
              { id: "all", label: "All Areas" },
              { id: "valuation", label: "Valuation & Inspection" },
              { id: "banking", label: "Banking & SLAs" },
              { id: "audits", label: "Technical Audits & Risk" },
              { id: "realestate", label: "Real Estate & DCR" },
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

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAreas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <BlurFade key={item.id} delay={0.2 + idx * 0.08}>
                <TiltCard className="h-full p-6 sm:p-8 flex flex-col justify-between bg-[#040e1a]/90 border-slate-800 hover:border-cyan-500/50 transition-all group">
                  {idx === 0 && (
                    <BorderBeam size={200} duration={12} colorFrom="#00f0ff" colorTo="#3b82f6" />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                          <Icon className="size-5" />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="size-6 rounded-md bg-white p-0.5 border border-slate-200 flex items-center justify-center">
                            <Image src={item.logo} alt={item.institution} width={18} height={18} className="object-contain size-full" />
                          </div>
                          <span className="text-xs font-mono text-cyan-300 font-semibold">
                            {item.institution}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {item.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs font-light text-slate-300">
                          <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </BlurFade>
            );
          })}
        </div>

      </div>
    </section>
  );
}
