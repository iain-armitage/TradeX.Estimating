'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  LayoutDashboard, FileText, Users, ClipboardCheck, FileArchive,
  BarChart2, Settings, Bot
} from 'lucide-react';
import './globals.css';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Quotes', href: '/quotes', icon: FileText },
  { name: 'Contacts', href: '/contacts', icon: Users },
  { name: 'Tasks', href: '/tasks', icon: ClipboardCheck },
  { name: 'Documents', href: '/documents', icon: FileArchive },
  { name: 'Reports', href: '/reports', icon: BarChart2 },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Dex', href: '/dex', icon: Bot },
];

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100 text-gray-900">
        <aside className={`bg-white shadow-md p-4 ${collapsed ? 'w-20' : 'w-64'} transition-all`}>
          <div className="flex justify-between items-center mb-6">
            <div className={`text-2xl font-bold text-blue-600 ${collapsed ? 'hidden' : 'block'}`}>
              TradeX
            </div>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-sm text-gray-500"
              aria-label="Toggle Sidebar"
            >
              {collapsed ? '→' : '←'}
            </button>
          </div>
          <nav className="flex flex-col space-y-2">
            {navItems.map(({ name, href, icon: Icon }) => {
              const active = pathname.startsWith(href);
              return (
                <Link
                  key={name}
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-100 transition ${
                    active ? 'bg-blue-100 font-semibold text-blue-600' : ''
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {!collapsed && <span>{name}</span>}
                </Link>
              );
            })}
          </nav>
        </aside>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </body>
    </html>
  );
}
