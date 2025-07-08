// components/ui/card.tsx
import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border p-4 shadow">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-2 text-sm text-gray-600">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold text-gray-900">{children}</h2>;
}
