import { ReactNode } from 'react';

interface TabsProps {
  children: ReactNode;
  defaultValue: string;
  className?: string;
}

export function Tabs({ children, defaultValue, className = '' }: TabsProps) {
  return <div className={className}>{children}</div>;
}

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="flex space-x-2 border-b pb-2">{children}</div>;
}

export function TabsTrigger({ children, value }: { children: ReactNode; value: string }) {
  return <button className="px-4 py-2 border rounded">{children}</button>;
}

export function TabsContent({ children, value }: { children: ReactNode; value: string }) {
  return <div className="pt-4">{children}</div>;
}
