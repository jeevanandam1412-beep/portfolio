"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, User, Briefcase, Cpu, Layers, GraduationCap, Mail, Sparkles } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300">
      <nav
        className={cn(
          "flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full glass-pill transition-all duration-300 shadow-2xl shadow-cyan-950/40",
          scrolled ? "bg-slate-950/90 border-cyan-500/30 scale-100" : "bg-slate-950/70 scale-105"
        )}
      >
        <Link
          href="#hero"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors mr-1 sm:mr-2 border border-cyan-500/20 bg-cyan-950/40"
        >
          <Terminal className="size-3.5" />
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
                  "relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                  isActive
                    ? "text-white bg-cyan-500/20 border border-cyan-400/40 shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                )}
              >
                <Icon className="size-3.5" />
                <span className="hidden md:inline">{item.name}</span>
              </a>
            );
          })}
        </div>

        <a
          href="#projects"
          className="ml-1 sm:ml-2 flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-semibold text-slate-950 hover:brightness-110 transition-all shadow-md shadow-cyan-500/20"
        >
          <Sparkles className="size-3.5" />
          <span className="hidden sm:inline">Architecture</span>
        </a>
      </nav>
    </header>
  );
}
