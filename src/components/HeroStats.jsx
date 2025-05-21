"use client"

import { useEffect, useState, useRef } from "react"
import "./HeroStats.css"

const HeroStats = ({ hero }) => {
  const [animatedProficiency, setAnimatedProficiency] = useState(0)
  const animationRef = useRef(null)

  useEffect(() => {
    setAnimatedProficiency(0)

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    const startTime = performance.now()
    const duration = 800 // 0.8 segundos para la animación (más rápida)

    const animateProficiency = (currentTime) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      setAnimatedProficiency(Math.floor(progress * hero.proficiency))

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateProficiency)
      }
    }

    animationRef.current = requestAnimationFrame(animateProficiency)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [hero])

  return (
    <div className="hero-stats">
      <div className="hero-info">
        <div className="hero-image-container">
          <img
            src={hero.image || "/placeholder.svg"}
            alt={hero.name}
            className="hero-image"
            onError={(e) => {
              e.target.src = `/placeholder.svg?height=100&width=100`
            }}
          />
        </div>
        <div className="hero-details">
          <h3 className="hero-name">{hero.name}</h3>
          <div className="proficiency-container">
            <div className="proficiency-label">Jugabilidad:</div>
            <div className="proficiency-bar-container">
              <div className="proficiency-bar" style={{ width: `${animatedProficiency}%` }}></div>
              <span className="proficiency-value">{animatedProficiency}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroStats
