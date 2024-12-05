"use client"
import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { ChevronRight, BarChart2, PieChart, TrendingUp, Users, Shield, Zap, ArrowDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
}

export default function HomePage() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const scaleSpring = useSpring(scale, springConfig)
  const ySpring = useSpring(y, springConfig)

  const isInView = useInView(targetRef, { once: true })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] to-[#1E1E1E] text-[#d0d0d0]">
      <main>
        <section ref={targetRef} className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20">
          <motion.div 
            className="text-center z-10 max-w-4xl mx-auto px-4"
            style={{ opacity, scale: scaleSpring, y: ySpring }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1DB954] to-[#1ED760]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Your Financial Future, Reimagined
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Navigate your financial journey with precision and confidence. Let FinanceFlow be your compass to wealth and prosperity in an ever-changing economic landscape.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-[#1DB954] hover:bg-[#1ED760] text-black px-8 py-6 text-lg">
                <Link href="/signup">
                  Start Your Journey <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-black px-8 py-6 text-lg">
                <Link href="#features">
                  Explore Features
                </Link>
              </Button>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {[
                { title: "Smart Investing", description: "AI-powered investment strategies tailored to your goals", icon: BarChart2 },
                { title: "Real-time Insights", description: "Up-to-the-minute market data and personalized alerts", icon: Zap },
                { title: "Secure & Compliant", description: "Bank-level security and regulatory compliance", icon: Shield },
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-[#1A1A1A] border-[#333]">
                    <CardHeader>
                      <item.icon className="h-8 w-8 text-[#1DB954] mb-2" />
                      <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[...Array(100)].map((_, i) => (
              <div 
                key={i} 
                className="absolute rounded-full bg-[#1DB954]"
                style={{
                  width: Math.random() * 10 + 5 + 'px',
                  height: Math.random() * 10 + 5 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  opacity: Math.random() * 0.5 + 0.1,
                }}
              />
            ))}
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="h-8 w-8 text-[#1DB954]" />
          </motion.div>
        </section>

        <motion.section 
          id="features" 
          className="py-32 space-y-12"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Powerful Features for Your Financial Success
          </motion.h2>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Advanced Portfolio Analysis", description: "Gain deep insights into your investments with our cutting-edge analytical tools", icon: BarChart2 },
              { title: "Dynamic Asset Allocation", description: "Optimize your portfolio in real-time with AI-driven rebalancing strategies", icon: PieChart },
              { title: "Predictive Performance Tracking", description: "Stay ahead with our predictive algorithms for investment performance", icon: TrendingUp },
              { title: "Comprehensive Risk Assessment", description: "Understand and manage your risk exposure with our advanced risk models", icon: Shield },
              { title: "Intelligent Tax Optimization", description: "Maximize your returns with our smart tax-loss harvesting techniques", icon: Zap },
              { title: "Personalized Financial Advice", description: "Receive tailored recommendations from our AI financial advisors", icon: Users },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-[#1A1A1A] border-[#333] hover:border-[#1DB954] transition-colors group h-full">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-[#1DB954] mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-2xl font-semibold mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-lg">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="py-32 bg-[#1A1A1A]"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              Why Choose FinanceFlow?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-4 text-[#1DB954]">Innovative Technology</h3>
                <p className="text-lg">Our cutting-edge AI and machine learning algorithms provide you with the most advanced financial tools available in the market.</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-4 text-[#1DB954]">Personalized Experience</h3>
                <p className="text-lg">We tailor our services to your unique financial situation and goals, ensuring a truly personalized wealth management experience.</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-4 text-[#1DB954]">Transparency and Security</h3>
                <p className="text-lg">Your trust is our top priority. We maintain the highest standards of transparency in our operations and state-of-the-art security for your data.</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-4 text-[#1DB954]">Continuous Innovation</h3>
                <p className="text-lg">We're constantly evolving our platform to stay ahead of market trends and provide you with the best financial tools and insights.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="py-32"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              variants={fadeInUp}
            >
              Ready to Transform Your Financial Future?
            </motion.h2>
            <motion.p 
              className="text-xl mb-12 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Join thousands of satisfied users who have already taken control of their finances with FinanceFlow. Start your journey to financial freedom today.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button asChild size="lg" className="bg-[#1DB954] hover:bg-[#1ED760] text-black px-8 py-6 text-lg">
                <Link href="/signup">
                  Get Started Now <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-[#1A1A1A] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#1DB954]">FinanceFlow</h3>
              <p className="text-sm text-gray-400">Empowering your financial future through innovative technology and personalized solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#1DB954]">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-gray-400 hover:text-[#1DB954]">About Us</Link></li>
                <li><Link href="/features" className="text-sm text-gray-400 hover:text-[#1DB954]">Features</Link></li>
                <li><Link href="/pricing" className="text-sm text-gray-400 hover:text-[#1DB954]">Pricing</Link></li>
                <li><Link href="/contact" className="text-sm text-gray-400 hover:text-[#1DB954]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#1DB954]">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-[#1DB954]">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-gray-400 hover:text-[#1DB954]">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-sm text-gray-400 hover:text-[#1DB954]">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#1DB954]">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://twitter.com/financeflow" className="text-sm text-gray-400 hover:text-[#1DB954]">Twitter</a></li>
                <li><a href="https://linkedin.com/company/financeflow" className="text-sm text-gray-400 hover:text-[#1DB954]">LinkedIn</a></li>
                <li><a href="https://facebook.com/financeflow" className="text-sm text-gray-400 hover:text-[#1DB954]">Facebook</a></li>
                <li><a href="https://instagram.com/financeflow" className="text-sm text-gray-400 hover:text-[#1DB954]">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">© 2023 FinanceFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

