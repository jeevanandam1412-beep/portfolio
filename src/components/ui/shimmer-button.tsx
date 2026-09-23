import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--spotlight-color": shimmerColor,
            "--shimmer-size": shimmerSize,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-cyan-500/30 hover:border-cyan-400 bg-gradient-to-r from-cyan-950/80 to-slate-900/80 rounded-full font-medium text-sm backdrop-blur-md",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-shimmer" />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
