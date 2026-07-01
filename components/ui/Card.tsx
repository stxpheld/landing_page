import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-[var(--radius-card)] border p-6 sm:p-8 transition-all duration-300 ${
        dark
          ? "border-white/10 bg-white/[0.04]"
          : "border-line bg-white hover:border-ink/20 hover:shadow-[0_16px_40px_-24px_rgba(26,26,46,0.35)]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
