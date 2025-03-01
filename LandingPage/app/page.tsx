"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, FlaskRoundIcon as Flask, Microscope, BookOpen, Beaker, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div
      className={`flex flex-col min-h-screen transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Flask className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PRAYOG</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#equipment" className="text-sm font-medium hover:text-primary">
              Experiments
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary">
              Our Team
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="http://127.0.0.1:5500/Prayog/html5/che121.html">
              <Button variant="outline" size="sm" className="hidden md:flex">
                Chat with SIFRA
              </Button>
            </Link>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with new scientist illustration */}
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#6c5ce7] to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={fadeIn.transition}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    <span className="meeting">Meet</span> <span className="surfing">SIFRA</span>: Your AI LabMate Advisor
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    Experience real-time lab guidance with SIFRA, your intelligent lab companion that helps you understand experiments, correct mistakes, and learn interactively - just like talking to a real person.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="secondary">
                    Start Experimenting
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="http://127.0.0.1:5500/Prayog/html5/che121.html">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-[#554080] text-white border-white/20 hover:bg-[#554080]/30"
                    >
                      Chat with SIFRA
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/login-VLs3X2zdryeOKGLEBOxRmSOv7gdSAY.gif"
                  alt="Scientists working in a laboratory"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* New Features Section with Equipment Banner */}
        <section className="py-12 md:py-24 lg:py-32 bg-[#f8fafc]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How SIFRA Assists You</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">Real-time guidance for your laboratory experiments</p>
            </motion.div>
            <motion.div
              className="relative h-32 md:h-48 lg:h-64 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resetPassword-NEXgr1ZgxW0pMY5SXkXlGjAY1CM7U6.gif"
                alt="Laboratory Equipment"
                fill
                className="object-contain"
              />
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-time Guidance",
                  description: "Get instant feedback and corrections during experiments",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/funny-fDVwDUjBZKJZj2b1xZYmls7nz5pac5.gif",
                },
                {
                  title: "Interactive Learning",
                  description: "Natural conversation interface for seamless interaction",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/error-8xSqzttLIAkHAN3z2Mf5HLR2yCgTpn.gif",
                },
                {
                  title: "Smart Analysis",
                  description: "Advanced AI-powered experiment analysis and suggestions",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/activationModal-aD3YIDXoJDqDGO12YW8R9HZh8xHjiL.gif",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Updated Services Section with Dynamic Layout */}
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#f1f5f9]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">PRAYOG's Capabilities</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Comprehensive lab assistance powered by advanced AI
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-time Monitoring",
                  description: "Instant feedback on experiment procedures and safety",
                  icon: <Beaker className="h-10 w-10" />,
                  color: "from-blue-500/20 to-blue-600/20",
                },
                {
                  title: "Concept Explanation",
                  description: "Clear, interactive explanations of scientific concepts",
                  icon: <BookOpen className="h-10 w-10" />,
                  color: "from-purple-500/20 to-purple-600/20",
                },
                {
                  title: "Error Detection",
                  description: "Immediate identification and correction of mistakes",
                  icon: <Microscope className="h-10 w-10" />,
                  color: "from-indigo-500/20 to-indigo-600/20",
                },
                {
                  title: "Interactive Learning",
                  description: "Premium NLP conversation Experience",
                  icon: <Users className="h-10 w-10" />,
                  color: "from-cyan-500/20 to-cyan-600/20",
                },
                {
                  title: "Progress Tracking",
                  description: "Detailed analysis of your learning journey",
                  icon: <ChevronRight className="h-10 w-10" />,
                  color: "from-teal-500/20 to-teal-600/20",
                },
                {
                  title: "Custom Guidance",
                  description: "Personalized assistance for your specific needs",
                  icon: <Flask className="h-10 w-10" />,
                  color: "from-sky-500/20 to-sky-600/20",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`p-8 rounded-2xl bg-gradient-to-br ${service.color} border border-white/20 backdrop-blur-sm`}
                  >
                    <div className="mb-4 text-primary">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Updated Team Section with New Illustrations */}
        <section className="py-12 md:py-24 lg:py-32 bg-[#f8fafc]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">The minds behind <strong>PRAYOG</strong></p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "Harsh",
                  role: "AI and LabMateDeveloper",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/funny-fDVwDUjBZKJZj2b1xZYmls7nz5pac5.gif",
                },
                {
                  name: "Aakansh",
                  role: "Blockchain Developer",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/error-8xSqzttLIAkHAN3z2Mf5HLR2yCgTpn.gif",
                },
                {
                  name: "Vijval",
                  role: "LLM and RagModel Developer",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/login-VLs3X2zdryeOKGLEBOxRmSOv7gdSAY.gif",
                },
                {
                  name: "Dipanshi",
                  role: "Research & Content (RnD)",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/activationModal-aD3YIDXoJDqDGO12YW8R9HZh8xHjiL.gif",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section with New Design */}
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#f8fafc] to-white">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Started with SIFRA</h2>
                  <p className="text-muted-foreground">Have questions? We're here to help.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Flask className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">GitHub</h3>
                      <p className="text-muted-foreground">Work In Progress</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Microscope className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email Us</h3>
                      <p className="text-muted-foreground">Work In Progress</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Beaker className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Call Us</h3>
                      <p className="text-muted-foreground">Work In Progress</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form className="space-y-4 p-6 rounded-2xl bg-white shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <input className="w-full p-3 rounded-lg border bg-background" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input className="w-full p-3 rounded-lg border bg-background" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <input className="w-full p-3 rounded-lg border bg-background" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      className="w-full p-3 rounded-lg border bg-background min-h-[150px]"
                      placeholder="Your message here..."
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Updated Footer */}
      <footer className="border-t py-12 bg-gradient-to-b from-background to-[#f8fafc]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Flask className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">SIFRA</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Revolutionizing laboratory learning through AI-powered real-time guidance.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Chemical Analysis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Biological Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Material Testing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Educational Programs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">© 2025 SIFRA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

