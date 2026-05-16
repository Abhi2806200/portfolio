"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  variant?: "filled" | "ghost";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  variant = "filled",
  href,
  onClick,
  children,
  className,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide transition-all duration-300 cursor-none";

  const variants = {
    filled:
      "bg-accent text-background hover:bg-accent-dim hover:rounded-2xl hover:shadow-[0_0_24px_rgba(255,255,255,0.2)]",
    ghost:
      "border border-accent text-accent hover:bg-accent/10 hover:rounded-2xl",
  };

  const cls = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
