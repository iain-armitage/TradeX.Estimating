
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PlanLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pathParts = pathname.split('/');
  const quoteId = pathParts[2];

  const activeTab = (path: string) =>
    pathname.includes(path)
      ? 'text-blue-600 border-b-2 border-blue-600'
      : 'text-gray-600';

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Shared Header with Tabs */}
      <div className="flex justify-between items-start p-6 bg-white border-b">
        <div>
          <h1 className="text-2xl font-semibold">Quote #{quoteId} – Plan Viewer</h1>
          <div className="mt-2 flex space-x-4">
            <Link href={`/quotes/${quoteId}/overview`} className={activeTab('overview') + ' text-sm px-4 py-1'}>Overview</Link>
            <Link href={`/quotes/${quoteId}/plans`} className={activeTab('plans') + ' text-sm px-4 py-1'}>Plans</Link>
            <Link href={`/quotes/${quoteId}/worksheet`} className={activeTab('worksheet') + ' text-sm px-4 py-1'}>Worksheet</Link>
          </div>
        </div>
        <div className="text-right text-sm">
          <p>Date Created: 12/09/2023</p>
          <p className="text-red-500">Due Date: 15/09/2023</p>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
