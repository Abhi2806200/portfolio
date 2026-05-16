import { cn } from "@/lib/utils";

interface MarqueeTextProps {
  items: string[];
  reverse?: boolean;
  className?: string;
}

export default function MarqueeText({ items, reverse = false, className }: MarqueeTextProps) {
  const doubled = [...items, ...items];

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div
        className={cn(
          "inline-flex gap-8",
          reverse ? "animate-marquee-rev" : "animate-marquee"
        )}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm font-mono text-text-muted tracking-widest uppercase flex items-center gap-8"
          >
            {item}
            <span className="text-accent opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
