"use client"
import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp, Briefcase, Landmark } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MarketDataPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#d0d0d0]">
      <main className="container mx-auto px-4 py-8 text-[#d0d0d0]">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-[#d0d0d0]">Market Data</h1>
        </motion.h1>
        
        <motion.section initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }} className="mb-12">
          <Card className="bg-[#1E1E1E] border-none">
            <CardHeader>
              <CardTitle className="flex items-center text-[#1DB954]">
                <TrendingUp className="mr-2 h-6 w-6" />
                Top Performing Stocks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'NVDA'].map((symbol) => (
                    <TableRow key={symbol}>
                      <TableCell className="font-medium">{symbol}</TableCell>
                      <TableCell>Company Name</TableCell>
                      <TableCell>Rs.000.00</TableCell>
                      <TableCell className="text-[#1DB954]">+0.00%</TableCell>
                      <TableCell>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/asset/${symbol}`}>
                            Details
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.section>

        <section className="mb-12">
          <Card className="bg-[#1E1E1E] border-none">
            <CardHeader>
              <CardTitle className="flex items-center text-[#1DB954]">
                <Briefcase className="mr-2 h-6 w-6" />
                Top Mutual Funds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['VFIAX', 'FXAIX', 'SWPPX', 'VTSAX', 'SWTSX'].map((symbol) => (
                  <Card key={symbol} className="bg-[#2C2C2C] border-none">
                    <CardHeader>
                      <CardTitle className="text-lg text-[#d0d0d0]">{symbol}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-2 text-[#d0d0d0]">Fund Name</p>
                      <p className="text-lg font-bold mb-2 text-[#d0d0d0]">Rs. 000.00</p>
                      <p className="text-sm text-[#1DB954]">+0.00%</p>
                      <Button asChild variant="ghost" size="sm" className="mt-4">
                        <Link href={`/asset/${symbol}`}>
                          Details
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-[#1E1E1E] border-none">
            <CardHeader>
              <CardTitle className="flex items-center text-[#1DB954]">
                <Landmark className="mr-2 h-6 w-6" />
                Top Bonds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bond</TableHead>
                    <TableHead>Yield</TableHead>
                    <TableHead>Maturity</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {['10-Year Treasury', '30-Year Treasury', '5-Year Treasury', '2-Year Treasury', '3-Month Treasury'].map((bond) => (
                    <TableRow key={bond}>
                      <TableCell className="font-medium text-[#d0d0d0]">{bond}</TableCell>
                      <TableCell className="text-[#d0d0d0]">0.00%</TableCell>
                      <TableCell className="text-[#d0d0d0]">00/00/0000</TableCell>
                      <TableCell>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/asset/${bond.toLowerCase().replace(' ', '-')}`}>
                            Details
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}