import type { Metadata } from "next";
import "./globals.css";

import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Ringoz",
  description: "Utilitary Memo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add any head content, like meta tags, here */}
      </head>
      <body className="bg-gray-100 text-gray-900">
        {/* Sidebar */}
        <aside className="w-64 h-full bg-gray-100 p-6 fixed">
          <h3 className="text-xl font-semibold mb-4 text-black">Dashboard Navigation</h3>
          <nav>
            <ul>
              <li className="mb-4">
                <Link href="/dashboard">
                    <HomeIcon className="h-6 w-6 text-black" />
                </Link>
              </li>
              <li>
                <Link href="/notes/1">
                  <button className="w-full py-2 px-4 rounded-lg bg-blue-500 text-black mb-3">
                    Note 1
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/notes/2">
                  <button className="w-full py-2 px-4 rounded-lg bg-blue-500 text-black mb-3">
                    Note 2
                  </button>
                </Link>
              </li>
              {/* Add more note buttons as needed */}
            </ul>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-6 ml-64">
          <header>
            <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}