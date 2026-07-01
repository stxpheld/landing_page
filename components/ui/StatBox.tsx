export function StatBox({
  value,
  label,
  dark = false,
}: {
  value: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className={`font-display text-3xl font-extrabold sm:text-4xl ${dark ? "text-white" : "text-ink"}`}
      >
        {value}
      </span>
      <span className={`text-sm ${dark ? "text-white/60" : "text-muted"}`}>
        {label}
      </span>
    </div>
  );
}
