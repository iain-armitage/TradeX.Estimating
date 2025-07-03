'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function QuoteDetailsLayout() {
  const tabs = ['overview', 'plans', 'worksheet'];
  const pathname = usePathname();
  const quoteId = pathname.split('/')[2];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Quote #{quoteId}</h1>
      <div className="flex space-x-4 border-b mb-6">
        {tabs.map((tab) => (
          <Link
            key={tab}
            href={`/quotes/${quoteId}/${tab}`}
            className={`pb-2 capitalize ${
              pathname.includes(tab)
                ? 'border-blue-600 border-b-2 text-blue-600 font-semibold'
                : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            {tab}
          </Link>
        ))}
      </div>
      <p className="text-gray-500">Select a tab above to view quote content.</p>
    </div>
  );
}
