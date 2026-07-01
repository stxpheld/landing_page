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
          : "border-line bg-surface hover:border-white/20 hover:shadow-[0_20px_50px_-28px_rgba(139,123,255,0.4)]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
