"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, User, Briefcase, Cpu, Layers, GraduationCap, Mail, Sparkles, Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Projects & Arch", href: "#projects", icon: Layers },
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
      {/* Desktop / Tablet Floating Pill Navbar */}
      <nav
        className={cn(
          "hidden md:flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full glass-pill transition-all duration-300 shadow-2xl shadow-cyan-950/40",
          scrolled ? "bg-slate-950/90 border-cyan-500/30 scale-100" : "bg-slate-950/75 scale-105"
        )}
      >
        <Link
          href="#hero"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors mr-1 sm:mr-2 border border-cyan-500/20 bg-cyan-950/40"
        >
          <img
            src="/icons/aws/aws-cloud.svg"
            alt="AWS Cloud"
            className="size-4 object-contain rounded"
          />
          <span>jeevanandam<span className="text-cyan-200">@cloud</span></span>
        </Link>

        <div className="flex items-center gap-0.5 sm:gap-1">
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
                    ? "text-white bg-cyan-500/20 border border-cyan-400/40 shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                )}
              >
                <Icon className="size-3.5" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

        <a
          href="#projects"
          className="ml-1 sm:ml-2 flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-semibold text-slate-950 hover:brightness-110 transition-all shadow-md shadow-cyan-500/20"
        >
          <Sparkles className="size-3.5" />
          <span>Architecture</span>
        </a>
      </nav>

      {/* Mobile Top Navigation Bar */}
      <div className="flex md:hidden w-full max-w-md items-center justify-between px-4 py-2.5 rounded-2xl glass-pill bg-slate-950/90 border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
        <Link
          href="#hero"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400"
        >
          <img
            src="/icons/aws/aws-cloud.svg"
            alt="AWS Cloud"
            className="size-4 object-contain rounded"
          />
          <span>jeevanandam<span className="text-cyan-200">@cloud</span></span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="/Jeevanandam_M_Resume.pdf"
            download="Jeevanandam_M_Resume.pdf"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-500/30"
          >
            <Download className="size-3" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 top-[68px] z-40 bg-slate-950/85 backdrop-blur-xl p-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-200 flex flex-col justify-between overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl glass-panel bg-slate-900/95 border border-cyan-500/30 p-4 shadow-2xl space-y-1.5"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="size-4 text-cyan-400" />
                    <span>{item.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">→</span>
                </a>
              );
            })}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20"
              >
                <Sparkles className="size-3.5" />
                <span>View Architecture Diagrams</span>
              </a>

              <a
                href="/Jeevanandam_M_Resume.pdf"
                download="Jeevanandam_M_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-950 text-cyan-300 border border-cyan-500/30 font-semibold text-xs"
              >
                <Download className="size-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
