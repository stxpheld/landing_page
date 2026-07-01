"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type Item = { q: string; a: string };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-[var(--radius-card)] border border-line bg-surface">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-sans text-base font-medium text-ink sm:text-lg">
                  {item.q}
                </span>
                <Plus
                  size={20}
                  className={`shrink-0 text-indigo transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-6 pb-5 text-muted"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
