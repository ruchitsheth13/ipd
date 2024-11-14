'use client'

import { ArrowDown, ArrowUp, Newspaper } from 'lucide-react'
import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const dummyData = [
  { date: '2023-01-01', value: 100 },
  { date: '2023-02-01', value: 120 },
  { date: '2023-03-01', value: 110 },
  { date: '2023-04-01', value: 130 },
  { date: '2023-05-01', value: 140 },
  { date: '2023-06-01', value: 135 },
]

export default function AssetDetailPage() {
  const [timeframe, setTimeframe] = useState('1M')

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main className="container mx-auto px-4 py-8 text-gray-100">
        <Card className="bg-[#1E1E1E] border-none mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-gray-100">AAPL</CardTitle>
            <CardDescription className="text-gray-100">Apple Inc.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-4xl font-bold text-gray-100">$150.25</p>
                <p className="text-[#1DB954] flex items-center text-gray-100">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  2.5% (+$3.75)
                </p>
              </div>
              <Button>Add to Portfolio</Button>
            </div>
            <Tabs value={timeframe} onValueChange={setTimeframe}>
              <TabsList>
                <TabsTrigger value="1D">1D</TabsTrigger>
                <TabsTrigger value="1W">1W</TabsTrigger>
                <TabsTrigger value="1M">1M</TabsTrigger>
                <TabsTrigger value="3M">3M</TabsTrigger>
                <TabsTrigger value="1Y">1Y</TabsTrigger>
                <TabsTrigger value="5Y">5Y</TabsTrigger>
              </TabsList>
            </Tabs>
            <ChartContainer
              config={{
                value: {
                  label: "Stock Price",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[400px] mt-4"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dummyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip />
                  <Line type="monotone" dataKey="value" stroke="#4ADE80" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-[#1E1E1E] border-none">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-100">
              <Newspaper className="mr-2 h-6 w-6 text-[#1DB954]" />
              Latest News
            </CardTitle>
          </CardHeader>
          <CardContent>
            {[1, 2, 3].map((item) => (
              <Card key={item} className="mb-4 bg-[#2C2C2C] border-none">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-100">News Headline {item}</CardTitle>
                  <CardDescription className="text-gray-100">Source • 2 hours ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-100">Brief summary of the news article...</p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
