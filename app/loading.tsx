import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Učitavanje"
      className="flex min-h-[60vh] items-center justify-center"
    >
      <Loader2 size={32} className="animate-spin text-accent" />
    </div>
  );
}
