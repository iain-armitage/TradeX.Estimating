
'use client';

export default function TakeoffViewerPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Main Viewer Area */}
      <div className="flex-1 flex flex-col bg-gray-100">

        {/* Tab Header */}
        <div className="flex items-center px-4 py-2 bg-white border-b">
          <span className="text-sm font-medium mr-6">Sheets:</span>
          <div className="space-x-2">
            <button className="text-sm bg-gray-200 px-3 py-1 rounded">Ground Floor</button>
            <button className="text-sm hover:bg-gray-100 px-3 py-1 rounded">First Floor</button>
            <button className="text-sm hover:bg-gray-100 px-3 py-1 rounded">Roof Plan</button>
            <button className="text-sm hover:bg-gray-100 px-3 py-1 rounded">Sections</button>
          </div>
          <div className="ml-auto flex items-center space-x-2 text-sm">
            <label>Scale:</label>
            <select className="border rounded px-2 py-1 text-sm">
              <option>1:100</option>
              <option>1:50</option>
              <option>1:200</option>
            </select>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-4 px-4 py-2 bg-gray-50 border-b text-sm">
          <button title="Select">🖱️</button>
          <button title="Count">🔢</button>
          <button title="Length">📏</button>
          <button title="Area">📐</button>
          <button title="Pan">🖐️</button>
          <button title="Zoom In">➕</button>
          <button title="Zoom Out">➖</button>
        </div>

        {/* Plan Canvas */}
        <div className="flex-1 overflow-auto bg-white flex justify-center items-center">
          <img src="/mock-plan.jpg" alt="Plan" className="max-w-full h-auto border rounded shadow" />
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-80 bg-white border-l p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg">Bill of Quantities</h2>
          <button className="text-xs px-2 py-1 bg-green-600 text-white rounded">+ Add Stage</button>
        </div>

        <div className="space-y-3 text-sm">
          <div className="border-b pb-2">
            <h3 className="font-semibold text-gray-800 mb-1">Drainage</h3>
            <ul className="text-gray-700 space-y-1">
              <li>100mm PVC Pipe – 42.5m</li>
              <li>Floor Waste – 6ea</li>
              <li>Gully Trap – 4ea</li>
            </ul>
          </div>
          <div className="border-b pb-2">
            <h3 className="font-semibold text-gray-800 mb-1">Hot/Cold Water</h3>
            <ul className="text-gray-700 space-y-1">
              <li>15mm Copper Pipe – 28.3m</li>
              <li>Mixer Tap – 3ea</li>
              <li>Water Heater – 1ea</li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <button className="text-xs bg-gray-100 border px-3 py-1 mr-2">+ Count</button>
          <button className="text-xs bg-gray-100 border px-3 py-1 mr-2">+ Length</button>
          <button className="text-xs bg-gray-100 border px-3 py-1">+ Area</button>
        </div>
      </div>
    </div>
  );
}
