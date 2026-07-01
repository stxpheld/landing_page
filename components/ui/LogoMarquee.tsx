/**
 * Carrousel horizontal infini (PRD §4.3). Logos en placeholders texte ;
 * remplacer par de vrais <Image> (PNG transparent) le moment venu.
 */
export function LogoMarquee({ logos }: { logos: string[] }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="marquee-mask overflow-hidden">
      <ul className="flex w-max animate-marquee items-center gap-12 sm:gap-16">
        {doubled.map((logo, i) => (
          <li
            key={i}
            aria-hidden={i >= logos.length}
            className="shrink-0 font-display text-xl font-bold text-white/55 grayscale transition hover:text-white hover:grayscale-0 sm:text-2xl"
          >
            {logo}
          </li>
        ))}
      </ul>
    </div>
  );
}
