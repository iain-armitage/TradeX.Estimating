export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white p-4">
      <div className="mb-6 text-xl font-bold">TradeX</div>
      <ul className="space-y-4">
        <li>Dashboard</li>
        <li>Contacts</li>
        <li>Quotes</li>
        <li>Tasks</li>
        <li className="mt-auto">
          <ul className="space-y-2">
            <li>Documents</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}