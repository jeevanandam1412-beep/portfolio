"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { Layers, Server, ShieldCheck, Cpu, Maximize2, X, ExternalLink, CheckCircle2, Boxes, Eye } from "lucide-react";

export function Projects() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isEksLightboxOpen, setIsEksLightboxOpen] = useState(false);
  const [isEksDetailsOpen, setIsEksDetailsOpen] = useState(false);

  const chips = [
    "AWS EC2", "VPC", "RDS", "ALB", "Auto Scaling", "Nginx", "PM2", "Node.js", "Next.js", "GitHub", "Reverse Proxy", "Load Balancing"
  ];

  const eksChips = [
    "Python", "Flask", "Docker", "Kubernetes", "AWS EKS", "Amazon ECR", "EC2", "VPC", "IAM", "Helm", "AWS Load Balancer Controller", "Application Load Balancer"
  ];

  return (
    <section id="projects" className="py-20 relative bg-slate-950/60">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-3">
              FEATURED WORK &amp; ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Cloud Projects &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">System Architecture</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-4 font-light">
              Real deployment architectures, Kubernetes containerization, and production cloud infrastructure on AWS.
            </p>
          </div>
        </BlurFade>

        {/* ============================================================ */}
        {/* PROJECT 1: Guess the Number Gaming App – AWS EKS */}
        {/* ============================================================ */}
        <div id="project-eks" className="mb-20">
          <BlurFade delay={0.2}>
            <div className="flex flex-col items-start mb-10">
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-3">
                KUBERNETES &amp; CONTAINER ORCHESTRATION
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Guess the Number Gaming App – <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AWS EKS</span>
              </h3>
              <p className="text-slate-400 text-base max-w-3xl mt-3 font-light">
                Built and deployed a simple Python Flask &quot;Guess the Number&quot; gaming application on Amazon EKS using Docker and Kubernetes.
              </p>
            </div>
          </BlurFade>

          {/* Project 1 Feature Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Card 1: EKS Application & Kubernetes Orchestration */}
            <div className="lg:col-span-7">
              <BlurFade delay={0.3} className="h-full">
                <MagicCard className="h-full p-8 flex flex-col justify-between bg-slate-950/90 border-cyan-500/30">
                  <BorderBeam size={200} duration={12} colorFrom="#00f0ff" colorTo="#7000ff" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
                        Kubernetes &amp; Containerization
                      </span>
                      <Boxes className="size-6 text-cyan-400" />
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-4">
                      Guess the Number Gaming App – AWS EKS
                    </h4>
                    
                    <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
                      Built and deployed a simple Python Flask &quot;Guess the Number&quot; gaming application on Amazon EKS using Docker and Kubernetes. Automated ingress routing through the AWS Load Balancer Controller with zero downtime deployment.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                        <span>Python Flask web application containerized with Docker &amp; pushed to Amazon ECR</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                        <span>Kubernetes Deployment with 2 replicas &amp; NodePort Service in gaming namespace</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                        <span>AWS Load Balancer Controller installed via Helm provisioning internet-facing ALB</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                        <span>Configured OIDC &amp; IAM roles for service account permissions</span>
                      </div>
                    </div>

                    {/* Action Buttons: View Details & GitHub */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <button
                        onClick={() => setIsEksDetailsOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-semibold text-xs transition-all shadow-md shadow-cyan-500/20 active:scale-95"
                      >
                        <Eye className="size-3.5" />
                        <span>View Details</span>
                      </button>
                      
                      <a
                        href="https://github.com/jeevanandam1412-beep/python-based-gaming-app-deployed-by-eks.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-white font-medium text-xs transition-all active:scale-95"
                      >
                        <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>GitHub Repository</span>
                        <ExternalLink className="size-3 text-slate-400" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                    {eksChips.slice(0, 6).map((chip) => (
                      <span key={chip} className="px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                        {chip}
                      </span>
                    ))}
                  </div>
                </MagicCard>
              </BlurFade>
            </div>

            {/* Card 2: Cluster Management & Infrastructure */}
            <div className="lg:col-span-5">
              <BlurFade delay={0.4} className="h-full">
                <MagicCard className="h-full p-8 flex flex-col justify-between bg-slate-950/80 border-slate-800 hover:border-cyan-500/40">
                  <div>
                    <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400">
                      <Server className="size-6" />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-4">
                      Cluster Management &amp; Networking
                    </h4>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                      Engineered a secure custom VPC with public and private subnets, NAT Gateway, dedicated EC2 management host, and AWS Application Load Balancer for internet traffic.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <span className="size-1.5 rounded-full bg-cyan-400" />
                        <span>Custom Multi-AZ VPC &amp; NAT Gateway</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <span className="size-1.5 rounded-full bg-cyan-400" />
                        <span>Dedicated EC2 Management Host (kubectl, Helm, eksctl)</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <span className="size-1.5 rounded-full bg-cyan-400" />
                        <span>OIDC Provider &amp; IAM Role Controller Integration</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <span className="size-1.5 rounded-full bg-cyan-400" />
                        <span>Private Worker-Node Isolated Networking</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                    {eksChips.slice(6).map((chip) => (
                      <span key={chip} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        {chip}
                      </span>
                    ))}
                  </div>
                </MagicCard>
              </BlurFade>
            </div>

          </div>

          {/* PROJECT 1 (EKS) ARCHITECTURE DIAGRAM SHOWCASE */}
          <div className="pt-8 border-t border-slate-800/80">
            <BlurFade delay={0.5}>
              <div className="flex flex-col items-start mb-8">
                <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase mb-1">
                  AWS EKS DEPLOYMENT SCHEMATIC
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold text-white">
                  Guess the Number Application – Architecture on AWS EKS
                </h4>
                <p className="text-slate-400 text-sm mt-2 font-mono">
                  Traditional AWS Load Balancer Controller Method • Developer → ECR → EKS → Ingress → ALB → Internet Users
                </p>
              </div>

              {/* Architecture Image Container */}
              <div className="relative group rounded-2xl overflow-hidden glass-panel p-3 border border-cyan-500/30 shadow-2xl">
                <BorderBeam size={250} duration={15} colorFrom="#00f0ff" colorTo="#7000ff" />
                
                <div
                  onClick={() => setIsEksLightboxOpen(true)}
                  className="relative w-full h-[350px] sm:h-[480px] lg:h-[550px] rounded-xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center group"
                >
                  <Image
                    src="/eks-architecture-diagram.jpg"
                    alt="Guess the Number Application – Architecture on AWS EKS"
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm">
                    <div className="px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-400/50 backdrop-blur-md flex items-center gap-2 shadow-xl">
                      <Maximize2 className="size-4 text-cyan-400" />
                      <span>Click to Expand Architecture Diagram</span>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* ============================================================ */}
        {/* PROJECT 2: Cloud-Native E-Commerce Microservices Platform */}
        {/* ============================================================ */}
        <div id="project-ecommerce" className="pt-24 mt-20 border-t border-slate-800/90">
          <BlurFade delay={0.2}>
            <div className="flex flex-col items-start mb-10">
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full mb-3">
                MICROSERVICES &amp; CLOUD OPERATIONS
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Cloud-Native E-Commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Microservices Platform</span>
              </h3>
              <p className="text-slate-400 text-base max-w-3xl mt-3 font-light">
                Architected and deployed a multi-service e-commerce platform using decoupled User, Product, and Order microservices with a modern Next.js frontend application.
              </p>
            </div>
          </BlurFade>

          {/* Project 2 Feature Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Card 1: Microservices Platform */}
            <div className="lg:col-span-7">
              <BlurFade delay={0.3} className="h-full">
                <MagicCard className="h-full p-8 flex flex-col justify-between bg-slate-950/90 border-cyan-500/30">
                  <BorderBeam size={200} duration={12} colorFrom="#00f0ff" colorTo="#7000ff" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
                        Cloud-Native Deployment
                      </span>
                      <Layers className="size-6 text-cyan-400" />
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-4">
                      Cloud-Native E-Commerce Microservices Platform
                    </h4>
                    
                    <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
                      Architected and deployed a multi-service e-commerce platform using decoupled <strong className="text-cyan-300">User, Product, and Order microservices</strong> with a modern Next.js frontend application.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                        <span>Decoupled Node.js REST API microservices architecture</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                        <span>Managed PostgreSQL database instance via AWS RDS</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                        <span>Automated process management with PM2 and zero downtime</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                    {chips.slice(0, 7).map((chip) => (
                      <span key={chip} className="px-2.5 py-1 rounded-md bg-slate-900 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                        {chip}
                      </span>
                    ))}
                  </div>
                </MagicCard>
              </BlurFade>
            </div>

            {/* Card 2: Architecture & Operations */}
            <div className="lg:col-span-5">
              <BlurFade delay={0.4} className="h-full">
                <MagicCard className="h-full p-8 flex flex-col justify-between bg-slate-950/80 border-slate-800 hover:border-cyan-500/40">
                  <div>
                    <div className="size-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400">
                      <Server className="size-6" />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-4">
                      Architecture &amp; Cloud Operations
                    </h4>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                      Configured VPC subnets, Application Load Balancers (ALB), and Auto Scaling groups to achieve high availability and fault-tolerant horizontal scaling under dynamic user traffic.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <span className="size-1.5 rounded-full bg-cyan-400" />
                        <span>Nginx Reverse Proxy &amp; SSL Termination</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <span className="size-1.5 rounded-full bg-cyan-400" />
                        <span>Multi-AZ VPC &amp; Security Group Isolation</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <span className="size-1.5 rounded-full bg-cyan-400" />
                        <span>CloudWatch Real-Time Alarms &amp; Logging</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                    {chips.slice(7).map((chip) => (
                      <span key={chip} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        {chip}
                      </span>
                    ))}
                  </div>
                </MagicCard>
              </BlurFade>
            </div>

          </div>

          {/* SYSTEM ARCHITECTURE DIAGRAM SHOWCASE - PROJECT 2 */}
          <div id="architecture" className="pt-8 border-t border-slate-800/80">
            <BlurFade delay={0.5}>
              <div className="flex flex-col items-start mb-8">
                <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase mb-1">
                  AWS DEPLOYMENT SCHEMATIC
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold text-white">
                  Cloud-Native Microservices Architecture Diagram
                </h4>
              </div>

              {/* Architecture Image Container */}
              <div className="relative group rounded-2xl overflow-hidden glass-panel p-3 border border-cyan-500/30 shadow-2xl">
                <BorderBeam size={250} duration={15} colorFrom="#00f0ff" colorTo="#7000ff" />
                
                <div
                  onClick={() => setIsLightboxOpen(true)}
                  className="relative w-full h-[350px] sm:h-[480px] lg:h-[550px] rounded-xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center group"
                >
                  <Image
                    src="/architecture-diagram.jpg"
                    alt="Cloud-Native E-Commerce Microservices AWS Architecture Diagram"
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm">
                    <div className="px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-400/50 backdrop-blur-md flex items-center gap-2 shadow-xl">
                      <Maximize2 className="size-4 text-cyan-400" />
                      <span>Click to Expand Architecture Diagram</span>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

      </div>

      {/* Project 1 Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-slate-900 rounded-2xl border border-cyan-500/40 p-4 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <h4 className="text-lg font-bold text-white font-mono">
                Cloud-Native E-Commerce Architecture Diagram (High Resolution)
              </h4>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            
            <div className="relative w-full h-[70vh]">
              <Image
                src="/architecture-diagram.jpg"
                alt="Cloud Architecture High Resolution"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Project 2 EKS Details Modal */}
      {isEksDetailsOpen && (
        <div
          onClick={() => setIsEksDetailsOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-2xl border border-cyan-500/40 p-6 sm:p-8 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 mb-6 border-b border-slate-800 shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
                    Project Overview
                  </span>
                  <span className="px-3 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                    Amazon EKS
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Guess the Number Gaming App – AWS EKS
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Built and deployed a simple Python Flask &quot;Guess the Number&quot; gaming application on Amazon EKS using Docker and Kubernetes.
                </p>
              </div>
              <button
                onClick={() => setIsEksDetailsOpen(false)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0 ml-4"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto pr-2 space-y-6 text-sm">
              {/* Architecture Flow Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/20">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-bold">
                  System Architecture Flow
                </span>
                <div className="font-mono text-xs text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800 space-y-2 overflow-x-auto leading-relaxed">
                  <div>
                    <span className="text-cyan-300 font-semibold block mb-1">Developer to Internet Users Flow:</span>
                    Developer/Laptop ➔ Docker Build ➔ Amazon ECR ➔ Amazon EKS (gaming namespace) ➔ Deployment (2 replicas) ➔ Kubernetes NodePort Service ➔ Ingress ➔ AWS Load Balancer Controller ➔ AWS Application Load Balancer ➔ Internet Users
                  </div>
                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-cyan-300 font-semibold block mb-1">Management EC2:</span>
                    AWS CLI + kubectl + eksctl + Helm ➔ EKS Cluster
                  </div>
                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-cyan-300 font-semibold block mb-1">OIDC + IAM:</span>
                    AWS Load Balancer Controller ➔ AWS permissions
                  </div>
                </div>
              </div>

              {/* Implementation Details */}
              <div>
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-cyan-400" />
                  <span>Project Implementation Details</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {[
                    "Created a simple Python Flask gaming application.",
                    "Created a Dockerfile and containerized the application.",
                    "Built the Docker image and pushed it to Amazon ECR.",
                    "Created a custom AWS VPC with public and private subnets.",
                    "Configured Internet Gateway, NAT Gateway and route tables.",
                    "Created an Amazon EKS cluster.",
                    "Deployed the application using Kubernetes YAML files.",
                    "Created a Kubernetes Deployment with 2 replicas.",
                    "Created a Kubernetes NodePort Service.",
                    "Configured OIDC and IAM for the AWS Load Balancer Controller.",
                    "Installed the AWS Load Balancer Controller using Helm.",
                    "Created a Kubernetes Ingress.",
                    "Exposed the application using an internet-facing AWS Application Load Balancer.",
                    "Used a separate EC2 management server for AWS CLI, kubectl, eksctl and Helm."
                  ].map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                      <span className="size-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span className="text-slate-300 text-xs leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Layers className="size-4 text-cyan-400" />
                  <span>Project Features</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Python Flask web application",
                    "Docker container",
                    "Amazon ECR image",
                    "Kubernetes Deployment (2 replicas)",
                    "Kubernetes Service",
                    "Kubernetes Ingress",
                    "AWS Load Balancer Controller",
                    "OIDC and IAM",
                    "Helm",
                    "AWS Application Load Balancer",
                    "Private worker-node networking"
                  ].map((feature, idx) => (
                    <div key={idx} className="px-3 py-2 rounded-lg bg-slate-950/80 border border-cyan-500/20 text-xs text-slate-300 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-base font-bold text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {eksChips.map((chip) => (
                    <span key={chip} className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 mt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <a
                href="https://github.com/jeevanandam1412-beep/python-based-gaming-app-deployed-by-eks.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Open GitHub Repository</span>
                <ExternalLink className="size-3.5 text-slate-400" />
              </a>

              <button
                onClick={() => {
                  setIsEksDetailsOpen(false);
                  setIsEksLightboxOpen(true);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors"
              >
                <Maximize2 className="size-3.5" />
                <span>View Full Architecture Diagram</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project 2 Lightbox Modal */}
      {isEksLightboxOpen && (
        <div
          onClick={() => setIsEksLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-slate-900 rounded-2xl border border-cyan-500/40 p-4 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <h4 className="text-lg font-bold text-white font-mono">
                Guess the Number Application – Architecture on AWS EKS (High Resolution)
              </h4>
              <button
                onClick={() => setIsEksLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            
            <div className="relative w-full h-[70vh]">
              <Image
                src="/eks-architecture-diagram.jpg"
                alt="Guess the Number Application – Architecture on AWS EKS"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

