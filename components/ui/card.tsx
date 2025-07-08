import * as React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white shadow rounded-lg">{children}</div>;
}

export function CardContent({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}