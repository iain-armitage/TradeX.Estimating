export default function QuotesPage() {
  const mockQuotes = [
    { id: 1, project: 'Office Complex A', client: 'ABC Builders', status: 'Draft', date: '2025-07-01', value: '$120,000' },
    { id: 2, project: 'Shopping Mall B', client: 'XYZ Group', status: 'Sent', date: '2025-06-28', value: '$450,000' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Quotes</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border p-2">Quote ID</th>
            <th className="border p-2">Project</th>
            <th className="border p-2">Client</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {mockQuotes.map((quote) => (
            <tr key={quote.id}>
              <td className="border p-2">{quote.id}</td>
              <td className="border p-2">{quote.project}</td>
              <td className="border p-2">{quote.client}</td>
              <td className="border p-2">{quote.status}</td>
              <td className="border p-2">{quote.date}</td>
              <td className="border p-2">{quote.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
