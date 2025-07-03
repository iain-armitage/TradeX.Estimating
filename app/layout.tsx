import '../styles/globals.css';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Quotes', path: '/quotes' },
    { name: 'Projects', path: '/projects' },
    { name: 'Documents', path: '/documents' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Settings', path: '/settings' },
    { name: 'Dex', path: '/dex' },
  ];

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="flex h-screen">
          <aside className="w-64 bg-white shadow-lg p-4 hidden md:block">
            <h1 className="text-xl font-bold mb-6 text-blue-600">TradeX</h1>
            <nav className="space-y-2">
              {navItems.map(({ name, path }) => (
                <Link key={name} href={path}>
                  <span className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === path ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'
                  }`}>
                    {name}
                  </span>
                </Link>
              ))}
            </nav>
          </aside>
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
