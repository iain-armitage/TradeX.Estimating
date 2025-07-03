'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to TradeX Estimating</h1>
      <p className="text-gray-600 mb-6">Your estimating dashboard is ready.</p>
      <Link href="/quotes">
        <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
          Go to Quotes
        </button>
      </Link>
    </main>
  );
}
