import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border bg-white shadow">{children}</div>;
}

export function CardContent({ children, className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  );
}
