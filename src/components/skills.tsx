"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";
import { Cpu, Cloud, Terminal, Shield, Sparkles } from "lucide-react";

// Skill Categories Data
const skillGroups = [
  {
    category: "AWS Cloud Services",
    icon: Cloud,
    skills: [
      { name: "EC2", alt: "Amazon EC2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "S3", alt: "Amazon S3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line-wordmark.svg" },
      { name: "VPC", alt: "AWS VPC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "RDS", alt: "AWS RDS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "ALB", alt: "Application Load Balancer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Auto Scaling", alt: "AWS Auto Scaling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line-wordmark.svg" },
      { name: "CloudWatch", alt: "Amazon CloudWatch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "IAM", alt: "AWS IAM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Route 53", alt: "AWS Route 53", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "CloudFront", alt: "AWS CloudFront", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line-wordmark.svg" },
      { name: "Cognito", alt: "AWS Cognito", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "EBS", alt: "Elastic Block Store", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    ],
  },
  {
    category: "DevOps & Development Tools",
    icon: Terminal,
    skills: [
      { name: "Docker", alt: "Docker Containerization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", alt: "Kubernetes Orchestration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Jenkins", alt: "Jenkins CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Ansible", alt: "Ansible Automation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
      { name: "Nginx", alt: "Nginx Web Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      { name: "Node.js", alt: "Node.js Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Next.js", alt: "Next.js React Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Git / GitHub", alt: "Git Source Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Linux / Ubuntu", alt: "Linux OS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "SSH / CLI", alt: "Bash Terminal CLI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "JavaScript", alt: "JavaScript ES6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
];

const marqueeLogos = [
  { name: "AWS Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-3">
              TECHNICAL EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Skills, Tools &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">App Ecosystem</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-4 font-light">
              Hands-on experience with modern cloud infrastructure, container orchestration, CI/CD automation, and web application stacks.
            </p>
          </div>
        </BlurFade>

        {/* Magic Marquee Carousel */}
        <BlurFade delay={0.2} className="mb-16">
          <div className="relative w-full overflow-hidden rounded-2xl glass-panel p-4 border border-cyan-500/20">
            <Marquee pauseOnHover className="[--duration:30s]">
              {marqueeLogos.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/80 border border-cyan-500/20 shadow-md backdrop-blur-md hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="size-8 relative flex items-center justify-center">
                    <img src={logo.icon} alt={logo.name} className="size-full object-contain" />
                  </div>
                  <span className="text-sm font-semibold text-white font-mono">{logo.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* Skill Groups Grid */}
        <div className="space-y-12">
          {skillGroups.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <BlurFade key={group.category} delay={0.3 + groupIdx * 0.1}>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                    <GroupIcon className="size-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white tracking-wide">{group.category}</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {group.skills.map((skill) => (
                      <MagicCard
                        key={skill.name}
                        className="p-4 flex flex-col items-center justify-center text-center bg-slate-950/80 border-slate-800 hover:border-cyan-500/50 group"
                      >
                        <div className="size-12 mb-3 relative flex items-center justify-center p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                          <img
                            src={skill.icon}
                            alt={skill.alt}
                            className="size-full object-contain filter drop-shadow-[0_0_8px_rgba(0,200,255,0.2)]"
                          />
                        </div>
                        <span className="text-xs font-medium text-slate-200 font-mono group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                      </MagicCard>
                    ))}
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
