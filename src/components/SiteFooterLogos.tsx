import dsatm from "@/assets/dsatm-iqac.png";
import dsi from "@/assets/dsi-logo.png";
import csi from "@/assets/csi-logo.png";

export function InstitutionLogos({ compact = false }: { compact?: boolean }) {
  const items = [
    { src: dsi, alt: "Dayananda Sagar Institutions", label: "Dayananda Sagar Institutions" },
    { src: dsatm, alt: "DSATM IQAC", label: "DSATM · IQAC" },
    { src: csi, alt: "Computer Society of India", label: "Computer Society of India" },
  ];
  return (
    <div className={`flex flex-wrap items-center justify-center gap-6 sm:gap-10 ${compact ? "" : "py-4"}`}>
      {items.map((it) => (
        <div key={it.label} className="flex flex-col items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white p-2 shadow-card grayscale group-hover:grayscale-0 transition-all duration-500">
              <img src={it.src} alt={it.alt} className="h-full w-full object-contain" />
            </div>
          </div>
          <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground text-center max-w-[120px] leading-tight">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
