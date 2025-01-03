import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import { ChevronRight, TrendingUp, Briefcase, UserPlus, LogIn } from 'lucide-react'

import { Button } from "@/components/ui/button"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="bg-[#1A1A1A] p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#1DB954]">FinanceFlow</Link>
          <div className="space-x-4">
            <Button asChild variant="ghost">
              <Link className="text-[#d0d0d0]" href="/market-data"><TrendingUp className="mr-2 h-4 w-4" /> Market Data</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link className="text-[#d0d0d0]" href="/questions"><TrendingUp className="mr-2 h-4 w-4" /> Questions</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link className="text-[#d0d0d0]"  href="/update-portfolio"><Briefcase className="mr-2 h-4 w-4" /> Update Portfolio</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link  className="text-[#d0d0d0]" href="/portfolio/1"><Briefcase className="mr-2 h-4 w-4" /> Personal Portfolio</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg">
              <Link className="text-[#d0d0d0]" href="/auth"><LogIn className="mr-2 h-4 w-4" /> Log Out</Link>
            </Button>
            {/* <Button asChild>
              <Link className="text-[#d0d0d0]" href="/yug"><UserPlus className="mr-2 h-4 w-4" /> Profile</Link>
            </Button> */}
            
          </div>
        </div>
      </nav>

        {children}</body>
    </html>
  );
}
