import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Preloader from "@/components/preloader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ScienceLab - Advanced Scientific Research & Laboratory Services",
  description:
    "Providing cutting-edge laboratory equipment and scientific expertise for research, education, and industry applications.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader />
        {children}
      </body>
    </html>
  )
}



import './globals.css'