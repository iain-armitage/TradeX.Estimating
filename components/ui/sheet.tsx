import { ReactNode } from 'react';

interface SheetProps {
  children: ReactNode;
  open: boolean;
  onOpenChange?: () => void;
}

export function Sheet({ children, open, onOpenChange }: SheetProps) {
  return open ? (
    <div className="fixed inset-0 bg-black/30" onClick={onOpenChange}>
      {children}
    </div>
  ) : null;
}
