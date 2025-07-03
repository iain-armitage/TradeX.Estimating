
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeTab = (path: string) => pathname.includes(path) ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600';

  return (
    <div className="p-6">
      {/* Shared Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Quote #1045 – Commercial Fit-Out</h1>
          <p className="text-green-600 font-medium">Draft</p>
          <div className="mt-2 flex space-x-4">
            <Link href="overview" className={activeTab('overview') + ' text-sm px-4 py-1'}>Overview</Link>
            <Link href="plans" className={activeTab('plans') + ' text-sm px-4 py-1'}>Plans</Link>
            <Link href="worksheet" className={activeTab('worksheet') + ' text-sm px-4 py-1'}>Worksheet</Link>
          </div>
        </div>
        <div className="text-right">
          <div className="mb-2">
            <button className="border border-gray-400 px-4 py-1 text-sm rounded mr-2">Export</button>
            <button className="border border-gray-400 px-4 py-1 text-sm rounded">Convert to Project</button>
          </div>
          <p className="text-sm">Date Created: 12/09/2023</p>
          <p className="text-sm text-red-500">Due Date: 15/09/2023</p>
        </div>
      </div>

      {/* Page Content */}
      <div>{children}</div>
    </div>
  );
}
