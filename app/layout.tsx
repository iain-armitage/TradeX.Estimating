import './globals.css';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'TradeX Estimating',
  description: 'TradeX Estimating SaaS Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 bg-lightGrey min-h-screen p-6">{children}</main>
      </body>
    </html>
  );
}