import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'TradeX Estimating',
  description: 'TradeX Estimating Platform',
};

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Quotes', href: '/quotes' },
  { name: 'Contacts', href: '/contacts' },
  { name: 'Tasks', href: '/tasks' },
  { name: 'Documents', href: '/documents' },
  { name: 'Reports', href: '/reports' },
  { name: 'Settings', href: '/settings' },
  { name: 'Dex', href: '/dex' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100 text-gray-900">
        <aside className="w-64 bg-white shadow-md p-4 space-y-4">
          <div className="text-2xl font-bold text-blue-600">TradeX</div>
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:bg-blue-100 rounded px-3 py-2">
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </body>
    </html>
  );
}
