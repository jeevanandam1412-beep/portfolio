"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 8,
  direction = "up",
  inView = false,
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewRef = useInView(ref, { once: true, margin: "-50px" });
  const isVisible = !inView || inViewRef;

  const defaultVariants: Variants = {
    hidden: {
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
      x: direction === "left" ? offset : direction === "right" ? -offset : 0,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      filter: `blur(0px)`,
    },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
