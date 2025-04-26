"use client"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Smoothness factor
      wheelMultiplier: 0.5, // Adjusts scroll speed
    })

    // Log scroll event data (for debugging)
    lenis.on("scroll", (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy() // Cleanup on unmount to avoid memory leaks
    }
  }, [])

  return <>{children}</>
}

export default SmoothScroll
