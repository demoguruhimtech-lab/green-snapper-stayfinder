import type { LucideIcon } from "lucide-react";

interface AmenityCardProps {
  icon: LucideIcon;
  title: string;
  note?: string;
}

export function AmenityCard({ icon: Icon, title, note }: AmenityCardProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
          {note ?? "To be confirmed with the property"}
        </p>
      </div>
    </div>
  );
}
