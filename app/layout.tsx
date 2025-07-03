import '../styles/globals.css';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const topItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Contacts', path: '/contacts' },
    { name: 'Quotes', path: '/quotes' },
    { name: 'Tasks', path: '/tasks' },
  ];
  const bottomItems = [
    { name: 'Documents', path: '/documents' },
    { name: 'Reports', path: '/reports' },
    { name: 'Settings', path: '/settings' },
    { name: 'Dex', path: '/dex' },
  ];

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="flex h-screen">
          <aside className="w-64 bg-[#0D1B2A] text-white flex flex-col justify-between p-4">
            <div>
              <div className="mb-8 px-2">
                <img src="/logo.png" alt="TradeX Logo" className="h-10 mx-auto" />
              </div>
              <nav className="space-y-2">
                {topItems.map(({ name, path }) => (
                  <Link key={name} href={path}>
                    <span className={`block px-4 py-2 rounded-md text-sm font-medium ${
                      pathname === path ? 'bg-[#017EFF] text-white' : 'text-white hover:bg-[#1E2A38]'
                    }`}>
                      {name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="space-y-2">
              {bottomItems.map(({ name, path }) => (
                <Link key={name} href={path}>
                  <span className={`block px-4 py-2 rounded-md text-sm font-medium ${
                    pathname === path ? 'bg-[#017EFF] text-white' : 'text-white hover:bg-[#1E2A38]'
                  }`}>
                    {name}
                  </span>
                </Link>
              ))}
            </div>
          </aside>
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
