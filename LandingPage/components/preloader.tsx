"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time or wait for resources to load
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // 2.5 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#6c5ce7] transition-opacity duration-500">
          <div className="relative flex flex-col items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landing-68wUkxOKO1oYoGf0D0DTNSMFVtygcJ.gif"
              alt="Loading"
              width={400}
              height={400}
              className="animate-pulse"
            />
            <div className="mt-4 flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-white animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-3 w-3 rounded-full bg-white animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-3 w-3 rounded-full bg-white animate-bounce"></div>
            </div>
            <p className="mt-4 text-white text-xl font-medium">Loading Science Lab...</p>
          </div>
        </div>
      )}
    </>
  )
}

