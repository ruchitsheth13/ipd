"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight} from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] to-[#1E1E1E] text-[#d0d0d0]">
     
      <main className="container mx-auto px-4 py-16 text-center">
        <motion.h1 
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Path to Your Future Dreams
        </motion.h1>
        <motion.p 
          className="text-xl mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Navigate your financial journey with precision and confidence. Let FinanceFlow be your compass to wealth and prosperity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-[#1DB954] hover:bg-[#1ED760] text-black">
            <Link href="/signup">
              Start Your Journey <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </main>

      <footer className="absolute bottom-0 w-full bg-[#1A1A1A] p-4 text-center text-sm text-gray-400">
        © 2023 FinanceFlow. All rights reserved.
      </footer>
    </div>
  )
}