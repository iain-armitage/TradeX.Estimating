import { ReactNode } from 'react';

interface SheetProps {
  children: ReactNode;
  open: boolean;
  onOpenChange?: () => void;
}

export function Sheet({ children, open, onOpenChange }: SheetProps) {
  // Optional: trigger callback on close (e.g., escape key or overlay click)
  return open ? (
    <div className="fixed inset-0 bg-black/30" onClick={onOpenChange}>
      {children}
    </div>
  ) : null;
}

export function SheetContent({ children, side = 'right', className = '' }: { children: ReactNode; side?: string; className?: string }) {
  return <div className={`fixed top-0 ${side}-0 w-80 h-full bg-white shadow-lg p-4 ${className}`}>{children}</div>;
}

export function SheetHeader({ children }: { children: ReactNode }) {
  return <div className="mb-4 border-b pb-2">{children}</div>;
}

export function SheetTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}
