"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wrapper d'animation d'apparition au scroll, réutilisé par toutes les sections.
 * Respecte `prefers-reduced-motion` (géré nativement par Framer Motion + CSS global).
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionTag>
  );
}
