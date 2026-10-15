export function KadaekMonogram({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kadaek Monogram Mark"
    >
      {/* Outer Square */}
      <rect x="5" y="5" width="90" height="90" stroke="currentColor" strokeWidth="8" />

      {/* Vertical Stem */}
      <line x1="33" y1="5" x2="33" y2="95" stroke="currentColor" strokeWidth="8" />

      {/* Main Diagonal Slash (architectural K geometry) */}
      <line x1="33" y1="55" x2="95" y2="5" stroke="currentColor" strokeWidth="8" />
      <line x1="33" y1="55" x2="80" y2="95" stroke="currentColor" strokeWidth="8" />

      {/* Secondary Accent Slash */}
      <line x1="5" y1="95" x2="95" y2="40" stroke="currentColor" strokeWidth="8" />
    </svg>
  );
}

export function KadaekBrand({
  monogramSize = "w-7 h-7",
  showSubtitle = false,
  inverted = false,
}: {
  monogramSize?: string;
  showSubtitle?: boolean;
  inverted?: boolean;
}) {
  const colorClass = inverted ? "text-white" : "text-[#101C2C]";
  return (
    <div className="flex items-center gap-3">
      <KadaekMonogram className={`${monogramSize} ${colorClass} shrink-0`} />
      <span className={`font-heading text-xl font-extrabold tracking-[0.16em] uppercase ${colorClass} leading-none`}>
        KADAEK
      </span>
    </div>
  );
}
