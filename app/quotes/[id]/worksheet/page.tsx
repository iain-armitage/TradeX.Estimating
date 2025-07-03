
'use client';

export default function WorksheetPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Summary Header */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <p className="text-sm text-gray-600">Total Estimated Cost</p>
          <p className="text-xl font-semibold text-green-700">$12,845.75</p>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <p className="text-sm text-gray-600">Sell Price</p>
          <p className="text-xl font-semibold text-blue-700">$15,420.90</p>
          <button className="text-xs mt-2 px-3 py-1 bg-gray-100 rounded border">Add Markup</button>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <p className="text-sm text-gray-600">Estimated Margin</p>
          <p className="text-xl font-semibold text-green-600">20.1%</p>
          <p className="text-xs text-red-400">-2.5% from target</p>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <p className="text-sm text-gray-600">Estimated Hours</p>
          <p className="text-xl font-semibold text-orange-500">86.5</p>
        </div>
      </div>

      {/* Estimate Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Drainage System ($3,845.00 | 29.9%)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>100mm PVC Pipe — 42.5m @ $12.50/m = $531.25</li>
              <li>Floor Waste — 6ea @ $85.00/ea = $510.00</li>
              <li>Gully Trap — 4ea @ $201.25/ea = $805.00</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Water Supply System ($2,735.50 | 21.3%)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>15mm Copper Pipe — 28.3m @ $9.75/m = $275.93</li>
              <li>Mixer Tap — 3ea @ $125.00/ea = $375.00</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Sanitary System ($1,920.25 | 14.9%)</h3>
            <p className="text-sm text-gray-700">Wall Hung Toilet, Floor Waste, Vanity Basin, etc.</p>
          </div>
        </div>

        {/* Notes + Revisions */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold mb-2">Estimate Notes</h4>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Client requested premium fixtures in master bathroom</li>
              <li>Allowance for council inspections</li>
              <li>Underground drainage to be coordinated with landscaper</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold mb-2">Inclusions</h4>
            <p className="text-sm text-gray-700">• All materials and labor as specified<br/>• Standard fixtures unless noted otherwise</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold mb-2">Exclusions</h4>
            <p className="text-sm text-gray-700">• Tile work for wet areas<br/>• Electrical connections for hot water system</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold mb-2">Revision History</h4>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Updated Drainage Quantities (38.5m to 42.5m) — 22 Jun</li>
              <li>Added Premium Fixtures (Per client request) — 20 Jun 2023</li>
              <li>Initial Estimate Created — 15 Jun 2023</li>
            </ul>
            <button className="mt-2 text-xs px-3 py-1 border rounded bg-gray-100">Add Revision Note</button>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-semibold mb-2">Attachments</h4>
            <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
              <li>Ground Floor Plan (PDF)</li>
              <li>Drainage Layout (JPG)</li>
              <li>Hot Water System Specs (PDF)</li>
            </ul>
            <button className="mt-2 text-xs px-3 py-1 border rounded bg-gray-100">Upload New Attachment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
