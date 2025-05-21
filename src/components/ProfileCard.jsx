"use client"

import { useEffect, useState } from "react"
import "./ProfileCard.css"

const ProfileCard = ({ playerInfo }) => {
  const [animationActive, setAnimationActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setAnimationActive(true)

    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className="profile-card">
      <div className={`profile-image-container ${animationActive ? "animate" : ""}`}>
        <div className="profile-image-frame">
          <img src="/images/lanes/perfil_mobal.jpeg" alt="Foto de perfil" className="profile-image" />
        </div>
      </div>

      <div className="profile-info">
        <h2 className="profile-name">{playerInfo.name}</h2>

        {isMobile ? (
          // Diseño móvil con la estructura solicitada
          <div className="profile-details">
            {/* Primera fila: ID a la izquierda, País a la derecha */}
            <div className="profile-detail-row">
              <div className="profile-detail">
                <span className="detail-label">ID:</span>
                <span className="detail-value">{playerInfo.id}</span>
              </div>
              <div className="profile-detail">
                <span className="detail-label">País:</span>
                <span className="detail-value">{playerInfo.country}</span>
              </div>
            </div>

            {/* Segunda fila: Nivel centrado */}
            <div className="profile-detail-center">
              <span className="detail-label">Nivel:</span>
              <div className="level-container">
                <span className="level-value">{playerInfo.level}</span>
                <div className="level-icon">
                  <span className="star-icon">★</span>
                </div>
              </div>
            </div>

            {/* Tercera fila: Clan a la izquierda, Ubicación a la derecha */}
            <div className="profile-detail-row">
              <div className="profile-detail">
                <span className="detail-label">Clan:</span>
                <span className="detail-value">{playerInfo.clan}</span>
              </div>
              <div className="profile-detail">
                <span className="detail-label">Ubicación:</span>
                <span className="detail-value">{playerInfo.location}</span>
              </div>
            </div>
          </div>
        ) : (
          // Diseño para pantallas grandes (grid)
          <div className="profile-details">
            <div className="profile-detail">
              <span className="detail-label">ID:</span>
              <span className="detail-value">{playerInfo.id}</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">País:</span>
              <span className="detail-value">{playerInfo.country}</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Nivel:</span>
              <div className="level-container">
                <span className="level-value">{playerInfo.level}</span>
                <div className="level-icon">
                  <span className="star-icon">★</span>
                </div>
              </div>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Clan:</span>
              <span className="detail-value">{playerInfo.clan}</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Ubicación:</span>
              <span className="detail-value">{playerInfo.location}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileCard
