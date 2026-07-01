import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <ScrollReveal
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-2xl"}`}
    >
      {eyebrow && (
        <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-indigo">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[44px] ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg ${dark ? "text-white/70" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
