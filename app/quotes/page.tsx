'use client';

import Link from 'next/link';

export default function QuotesPage() {
  const mockQuotes = [
    { id: 101, project: 'Office Complex A', client: 'ABC Constructions', status: 'Draft', date: '2025-07-01', value: '$120,000' },
    { id: 102, project: 'Shopping Mall B', client: 'XYZ Group', status: 'Sent', date: '2025-06-28', value: '$450,000' },
    { id: 103, project: 'School Upgrade C', client: 'BuildIt', status: 'Accepted', date: '2025-06-20', value: '$310,000' }
  ];

  const statusColors = {
    Draft: 'bg-yellow-100 text-yellow-800',
    Sent: 'bg-blue-100 text-blue-800',
    Accepted: 'bg-green-100 text-green-800',
    Rejected: 'bg-red-100 text-red-800'
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Quotes</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">+ New Quote</button>
      </div>
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="text-left px-4 py-2">Quote ID</th>
              <th className="text-left px-4 py-2">Project</th>
              <th className="text-left px-4 py-2">Client</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-left px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {mockQuotes.map((quote) => (
              <tr key={quote.id} className="border-t">
                <td className="px-4 py-2 font-medium">
                  <Link href={`/quotes/${quote.id}`} className="text-blue-600 underline">
                    #{quote.id}
                  </Link>
                </td>
                <td className="px-4 py-2">{quote.project}</td>
                <td className="px-4 py-2">{quote.client}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[quote.status]}`}>
                    {quote.status}
                  </span>
                </td>
                <td className="px-4 py-2">{quote.date}</td>
                <td className="px-4 py-2">{quote.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
