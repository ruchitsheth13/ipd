'use client'

import { ArrowDown, ArrowUp, PieChart, BarChart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { PieChart as RechartsChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const dummyPortfolioData = [
  { name: 'Stocks', value: 50 },
  { name: 'Bonds', value: 30 },
  { name: 'Cash', value: 10 },
  { name: 'Real Estate', value: 10 },
]

const COLORS = ['#4ADE80', '#22D3EE', '#A78BFA', '#FB923C']

export default function PortfolioOverviewPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#d0d0d0]">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#d0d0d0]">Portfolio Overview</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-[#1E1E1E] border-none">
            <CardHeader>
              <CardTitle className="text-[#d0d0d0]">Total Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-2 text-[#d0d0d0]">$1,234,567.89</p>
              <p className="text-[#1DB954] flex items-center text-[#d0d0d0]">
                <ArrowUp className="mr-1 h-4 w-4" />
                5.67% (+$66,123.45)
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1E1E1E] border-none">
            <CardHeader>
              <CardTitle className="flex items-center text-[#d0d0d0]">
                <PieChart className="mr-2 h-6 w-6 text-[#1DB954]" />
                Asset Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  value: {
                    label: "Asset Distribution",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[200px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsChart>
                    <Pie
                      data={dummyPortfolioData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {dummyPortfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </RechartsChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="flex justify-center mt-4 text-[#d0d0d0]">
                {dummyPortfolioData.map((entry, index) => (
                  <div key={`legend-${index}`} className="flex items-center mr-4">
                    <div className="w-3 h-3 mr-1" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1E1E1E] border-none mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-[#d0d0d0]">
              <BarChart className="mr-2 h-6 w-6 text-[#1DB954]" />
              Individual Asset Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[#d0d0d0]">Asset</TableHead>
                  <TableHead className="text-[#d0d0d0]">Value</TableHead>
                  <TableHead className="text-[#d0d0d0]">Performance</TableHead>
                  <TableHead className="text-[#d0d0d0]">Allocation</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {['AAPL', 'GOOGL', 'VFIAX', '10-Year Treasury', 'Real Estate Fund'].map((asset) => (
                  <TableRow key={asset}>
                    <TableCell className="font-medium text-[#d0d0d0]">{asset}</TableCell>
                    <TableCell className="text-[#d0d0d0]">$000,000.00</TableCell>
                    <TableCell className="text-[#1DB954] text-[#d0d0d0]">+0.00%</TableCell>
                    <TableCell className="text-[#d0d0d0]">00.00%</TableCell>
                    <TableCell>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/asset/${asset}`}>
                          <span className="text-[#d0d0d0]">Details</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/input">
              <span className="text-[#d0d0d0]">Update Portfolio</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}