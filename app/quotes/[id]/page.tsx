'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const tabs = ['Overview', 'Plans', 'Worksheet'];

export default function QuoteDetailsPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Quote #{id}</h1>
      <div className="flex space-x-4 border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white p-4 shadow rounded">
        {activeTab === 'Overview' && (
          <div>
            <p>This is the Overview tab for quote #{id}.</p>
          </div>
        )}
        {activeTab === 'Plans' && (
          <div>
            <p>This is the Plans tab for quote #{id}.</p>
          </div>
        )}
        {activeTab === 'Worksheet' && (
          <div>
            <p>This is the Worksheet tab for quote #{id}.</p>
          </div>
        )}
      </div>
      <div className="mt-6">
        <Link href="/quotes">
          <span className="text-blue-600 hover:underline">&larr; Back to Quotes</span>
        </Link>
      </div>
    </div>
  );
}
