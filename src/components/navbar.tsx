"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { User, Briefcase, ShieldCheck, GraduationCap, Mail, Download, Building2, Menu, X, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Building2 },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Expertise", href: "#expertise", icon: ShieldCheck },
  { name: "Areas of Work", href: "#areas-of-work", icon: Layers },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-4 transition-all duration-300">
      <nav
        className={cn(
          "flex items-center justify-between w-full max-w-6xl px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 backdrop-blur-xl border border-cyan-500/20 shadow-2xl shadow-cyan-950/40",
          scrolled ? "bg-[#020814]/90 border-cyan-500/40" : "bg-[#020814]/70"
        )}
      >
        {/* Brand Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-all border border-cyan-500/30 bg-cyan-950/60"
        >
          <Building2 className="size-4 text-cyan-400 shrink-0" />
          <span className="tracking-tight uppercase">santhana<span className="text-cyan-200">.krishnan</span></span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                  isActive
                    ? "text-white bg-cyan-500/20 border border-cyan-400/40 shadow-md shadow-cyan-500/20 font-bold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                )}
              >
                <Icon className="size-3.5" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="/Santhana_Krishnan_CV.pdf"
            download="Santhana_Krishnan_CV.pdf"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 text-xs font-bold text-slate-950 hover:brightness-110 transition-all shadow-md shadow-cyan-500/20"
            title="Download Santhana Krishnan G Resume (PDF)"
          >
            <Download className="size-3.5" />
            <span className="hidden sm:inline">Download CV</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 bg-[#020814]/95 border border-cyan-500/30 rounded-2xl p-4 backdrop-blur-2xl shadow-2xl z-50 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                  isActive
                    ? "text-white bg-cyan-500/20 border border-cyan-400/30 font-bold"
                    : "text-slate-300 hover:bg-slate-900"
                )}
              >
                <Icon className="size-4 text-cyan-400" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
