'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const financialGoals = [
  { title: "Marriage", icon: "💍", color: "bg-pink-500" },
  { title: "Child's Education", icon: "🎓", color: "bg-blue-500" },
  { title: "Home Purchase", icon: "🏠", color: "bg-green-500" },
  { title: "Retirement", icon: "🌴", color: "bg-yellow-500" },
  { title: "Travel", icon: "✈️", color: "bg-purple-500" },
  { title: "Start a Business", icon: "💼", color: "bg-red-500" },
]

export default function UserInputPage() {
  const [riskAppetite, setRiskAppetite] = useState(50)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] to-[#1E1E1E] text-white p-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Financial Profile
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-[#1A1A1A] border-none">
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="30" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input id="occupation" placeholder="Software Engineer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="income">Annual Income</Label>
                  <Input id="income" type="number" placeholder="75000" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-[#1A1A1A] border-none">
            <CardHeader>
              <CardTitle>Financial Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="savings">Total Savings</Label>
                  <Input id="savings" type="number" placeholder="50000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="debt">Total Debt</Label>
                  <Input id="debt" type="number" placeholder="20000" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="risk-appetite">Risk Appetite</Label>
                <Slider
                  id="risk-appetite"
                  min={0}
                  max={100}
                  step={1}
                  value={[riskAppetite]}
                  onValueChange={(value) => setRiskAppetite(value[0])}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Low Risk</span>
                  <span>Medium Risk</span>
                  <span>High Risk</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="investment-experience">Investment Experience</Label>
                <Select>
                  <SelectTrigger id="investment-experience">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-[#1A1A1A] border-none">
            <CardHeader>
              <CardTitle>Financial Goals</CardTitle>
              <CardDescription>Select your financial goals and set target amounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {financialGoals.map((goal, index) => (
                  <Card key={index} className={`${goal.color} text-white cursor-pointer transition-transform hover:scale-105`}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="text-2xl mr-2">{goal.icon}</span>
                        {goal.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Input type="number" placeholder="Target Amount" className="bg-white/20 border-none text-white placeholder-white/60" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center"
        >
          <Button size="lg" className="bg-[#1DB954] hover:bg-[#1ED760] text-black">
            Save and Continue
          </Button>
        </motion.div>
      </div>
    </div>
  )
}