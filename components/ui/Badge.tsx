import type { ReactNode } from "react";

type Tone = "neutral" | "indigo" | "signal" | "dark";

const tones: Record<Tone, string> = {
  neutral: "bg-white border-line text-muted",
  indigo: "bg-indigo/10 border-indigo/20 text-indigo",
  signal: "bg-signal/15 border-signal/30 text-ink",
  dark: "bg-white/10 border-white/20 text-white",
};

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[var(--radius-badge)] border px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
