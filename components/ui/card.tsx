
import React from 'react';
import classNames from 'classnames';

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={classNames('rounded-xl border bg-white p-4 shadow', className)}>{children}</div>;
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-2 font-semibold">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
