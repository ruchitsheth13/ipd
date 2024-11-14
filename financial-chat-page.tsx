'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, PhoneCall, Video, Calendar } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

const financialTerms = [
  { term: 'Bull Market', definition: 'A market characterized by rising prices and optimism.' },
  { term: 'Bear Market', definition: 'A market characterized by falling prices and pessimism.' },
  { term: 'Diversification', definition: 'Spreading investments across various financial instruments to reduce risk.' },
  { term: 'Liquidity', definition: 'The ease with which an asset can be converted into cash.' },
  { term: 'Volatility', definition: 'The degree of variation in trading prices over time.' },
];

const advisors = [
  { name: 'Sarah Johnson', specialty: 'Retirement Planning', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Michael Chen', specialty: 'Investment Strategies', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Emily Rodriguez', specialty: 'Tax Optimization', image: '/placeholder.svg?height=100&width=100' },
];

export default function FinancialChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
      setInput('');
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { id: Date.now(), text: getBotResponse(input), sender: 'bot' }]);
      }, 1500);
    }
  };

  const getBotResponse = (input: string) => {
    const lowercaseInput = input.toLowerCase();
    const matchedTerm = financialTerms.find(term => lowercaseInput.includes(term.term.toLowerCase()));
    if (matchedTerm) {
      return `${matchedTerm.term}: ${matchedTerm.definition}`;
    }
    return "I'm sorry, I don't have information about that specific term. Can you try asking about another financial concept?";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] to-[#1E1E1E] text-white p-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Financial Advisor Chat
      </motion.h1>

      <Tabs defaultValue="chatbot" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="chatbot">AI Chatbot</TabsTrigger>
          <TabsTrigger value="advisors">Human Advisors</TabsTrigger>
        </TabsList>
        <TabsContent value="chatbot">
          <Card className="bg-[#1A1A1A] border-none">
            <CardHeader>
              <CardTitle>Chat with FinBot</CardTitle>
              <CardDescription>Ask about financial terms and get instant answers</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] overflow-y-auto space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                      <Avatar>
                        <AvatarFallback>{message.sender === 'user' ? <User /> : <Bot />}</AvatarFallback>
                      </Avatar>
                      <div className={`p-3 rounded-lg ${message.sender === 'user' ? 'bg-[#1DB954] text-black' : 'bg-[#2C2C2C]'}`}>
                        {message.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2"
                >
                  <Avatar>
                    <AvatarFallback><Bot /></AvatarFallback>
                  </Avatar>
                  <div className="p-3 rounded-lg bg-[#2C2C2C]">
                    <span className="typing-animation">...</span>
                  </div>
                </motion.div>
              )}
            </CardContent>
            <CardFooter>
              <div className="flex w-full space-x-2">
                <Input
                  placeholder="Ask about a financial term..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-grow"
                />
                <Button onClick={handleSend} className="bg-[#1DB954] hover:bg-[#1ED760] text-white">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="advisors">
          <Card className="bg-[#1A1A1A] border-none">
            <CardHeader>
              <CardTitle>Connect with Human Advisors</CardTitle>
              <CardDescription>Schedule a call or video chat with our expert financial advisors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {advisors.map((advisor, index) => (
                  <Card key={index} className="bg-[#2C2C2C] border-none">
                    <CardHeader>
                      <Avatar className="w-20 h-20 mx-auto">
                        <AvatarImage src={advisor.image} alt={advisor.name} />
                        <AvatarFallback>{advisor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-center mt-2">{advisor.name}</CardTitle>
                      <CardDescription className="text-center">{advisor.specialty}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center space-x-2">
                        <Button variant="outline" size="sm">
                          <PhoneCall className="mr-2 h-4 w-4" />
                          Call
                        </Button>
                        <Button variant="outline" size="sm">
                          <Video className="mr-2 h-4 w-4" />
                          Video
                        </Button>
                        <Button variant="outline" size="sm">
                          <Calendar className="mr-2 h-4 w-4" />
                          Schedule
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
