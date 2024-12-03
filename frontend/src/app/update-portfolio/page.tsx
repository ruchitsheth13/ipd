'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown, DollarSign, BarChart2, IndianRupee } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const dummyData = {
  stocks: [
    { symbol: 'AAPL', name: 'Apple Inc.', currentPrice: 150.25, change: 2.5, recommendation: 'Hold' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', currentPrice: 2800.75, change: -1.2, recommendation: 'Buy' },
    { symbol: 'MSFT', name: 'Microsoft Corporation', currentPrice: 305.50, change: 1.8, recommendation: 'Sell' },
  ],
  mutualFunds: [
    { symbol: 'VFIAX', name: 'Vanguard 500 Index Fund', currentPrice: 400.20, change: 0.8, recommendation: 'Buy' },
    { symbol: 'FXAIX', name: 'Fidelity 500 Index Fund', currentPrice: 150.75, change: 0.5, recommendation: 'Hold' },
  ],
  bonds: [
    { name: '10-Year Treasury', yield: 1.5, recommendation: 'Buy' },
    { name: '30-Year Treasury', yield: 2.1, recommendation: 'Hold' },
  ],
}

export default function PortfolioUpdatePage() {
  const [activeTab, setActiveTab] = useState('stocks')

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] to-[#1E1E1E] text-[#d0d0d0] p-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portfolio Update Recommendations
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Card className="bg-[#1A1A1A] border-none mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Market Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#2C2C2C] border-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
                  <IndianRupee className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rs. 245,678.90</div>
                  <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-[#2C2C2C] border-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Market Trend</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Bullish</div>
                  <p className="text-xs text-muted-foreground">Major indices up by 1.2%</p>
                </CardContent>
              </Card>
              <Card className="bg-[#2C2C2C] border-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
                  <BarChart2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Moderate</div>
                  <p className="text-xs text-muted-foreground">Based on your profile</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stocks">Stocks</TabsTrigger>
            <TabsTrigger value="mutualFunds">Mutual Funds</TabsTrigger>
            <TabsTrigger value="bonds">Bonds</TabsTrigger>
          </TabsList>
          <TabsContent value="stocks">
            <Card className="bg-[#1A1A1A] border-none">
              <CardHeader>
                <CardTitle>Stock Recommendations</CardTitle>
                <CardDescription>Based on market analysis and your risk profile</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Symbol</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Current Price</TableHead>
                      <TableHead>Change</TableHead>
                      <TableHead>Recommendation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyData.stocks.map((stock) => (
                      <TableRow key={stock.symbol}>
                        <TableCell className="font-medium">{stock.symbol}</TableCell>
                        <TableCell>{stock.name}</TableCell>
                        <TableCell>Rs. {stock.currentPrice.toFixed(2)}</TableCell>
                        <TableCell className={stock.change > 0 ? 'text-green-500' : 'text-red-500'}>
                          {stock.change > 0 ? <ArrowUpRight className="inline mr-1" /> : <ArrowDownRight className="inline mr-1" />}
                          {Math.abs(stock.change)}%
                        </TableCell>
                        <TableCell>
                          <Button variant={stock.recommendation === 'Buy' ? 'default' : stock.recommendation === 'Sell' ? 'destructive' : 'secondary'} size="sm">
                            {stock.recommendation}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mutualFunds">
            <Card className="bg-[#1A1A1A] border-none">
              <CardHeader>
                <CardTitle>Mutual Fund Recommendations</CardTitle>
                <CardDescription>Diversify your portfolio with these funds</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Symbol</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>NAV</TableHead>
                      <TableHead>Change</TableHead>
                      <TableHead>Recommendation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyData.mutualFunds.map((fund) => (
                      <TableRow key={fund.symbol}>
                        <TableCell className="font-medium">{fund.symbol}</TableCell>
                        <TableCell>{fund.name}</TableCell>
                        <TableCell>Rs. {fund.currentPrice.toFixed(2)}</TableCell>
                        <TableCell className={fund.change > 0 ? 'text-green-500' : 'text-red-500'}>
                          {fund.change > 0 ? <ArrowUpRight className="inline mr-1" /> : <ArrowDownRight className="inline mr-1" />}
                          {Math.abs(fund.change)}%
                        </TableCell>
                        <TableCell>
                          <Button variant={fund.recommendation === 'Buy' ? 'default' : fund.recommendation === 'Sell' ? 'destructive' : 'secondary'} size="sm">
                            {fund.recommendation}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="bonds">
            <Card className="bg-[#1A1A1A] border-none">
              <CardHeader>
                <CardTitle>Bond Recommendations</CardTitle>
                <CardDescription>Stable income options for your portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Yield</TableHead>
                      <TableHead>Recommendation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dummyData.bonds.map((bond, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{bond.name}</TableCell>
                        <TableCell>{bond.yield}%</TableCell>
                        <TableCell>
                          <Button variant={bond.recommendation === 'Buy' ? 'default' : bond.recommendation === 'Sell' ? 'destructive' : 'secondary'} size="sm">
                            {bond.recommendation}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <Button size="lg" className="bg-[#1DB954] hover:bg-[#1ED760] text-black">
          Apply Recommendations
        </Button>
      </motion.div>
    </div>
  )
}