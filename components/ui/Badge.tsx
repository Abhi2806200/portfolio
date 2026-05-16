import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export default function Badge({ children, className, glow = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-mono rounded-full border border-white/10 text-text-muted bg-white/5 tracking-wide",
        glow && "border-accent/30 text-accent bg-accent/5",
        className
      )}
    >
      {children}
    </span>
  );
}
