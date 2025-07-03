
'use client';
import Link from 'next/link';

const Sidebar = () => {
  const topLinks = ['dashboard', 'contacts', 'quotes', 'tasks'];
  const bottomLinks = ['documents', 'reports', 'settings'];

  return (
    <div className="w-64 h-screen bg-[#1C1C1C] text-white flex flex-col justify-between p-4">
      <div>
        <div className="text-xl font-bold mb-6">TradeX</div>
        {topLinks.map(link => (
          <Link key={link} href={`/${link}`}>
            <div className="capitalize py-2 hover:bg-[#017EFF] px-2 rounded">{link}</div>
          </Link>
        ))}
      </div>
      <div>
        {bottomLinks.map(link => (
          <Link key={link} href={`/${link}`}>
            <div className="capitalize py-2 hover:bg-[#017EFF] px-2 rounded">{link}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
