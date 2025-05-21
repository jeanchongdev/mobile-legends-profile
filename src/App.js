"use client"

import { useState } from "react"
import "./App.css"
import ProfileCard from "./components/ProfileCard"
import RoleSelector from "./components/RoleSelector"
import HeroStats from "./components/HeroStats"

function App() {
  const [selectedRole, setSelectedRole] = useState(null)

  const playerInfo = {
    id: "1360512513 (1591)",
    name: "JEAN PIERRE 15",
    country: "Japón",
    level: 35,
    clan: "༒ᴠɪʀᴜꜱ",
    location: "Perú",
  }

  const roles = [
    { id: "jungle", name: "Jungla" },
    { id: "exp", name: "Línea EXP" },
    { id: "mid", name: "Línea Media" },
    { id: "gold", name: "Línea de Oro" },
    { id: "roam", name: "Recorredor" },
  ]

  const heroData = {
    jungle: { name: "Alpha", proficiency: 80, image: "/images/heroes/Alpha.webp" },
    exp: { name: "Gatotkaca", proficiency: 78, image: "/images/heroes/Gatotkaca.webp" },
    mid: { name: "Nana", proficiency: 82, image: "/images/heroes/Nana.webp" },
    gold: { name: "Miya", proficiency: 79, image: "/images/heroes/Miya.webp" },
    roam: { name: "Kalea", proficiency: 95, image: "/images/heroes/Kalea.webp" },
  }

  const heroData1 = {
    jungle: { name: "Martis", proficiency: 79, image: "/images/heroes/Martis.webp" },
    exp: { name: "Dyrroth", proficiency: 70, image: "/images/heroes/Dyrroth.webp" },
    mid: { name: "Vexana", proficiency: 80, image: "/images/heroes/Vexana.webp" },
    gold: { name: "Hanabi", proficiency: 78, image: "/images/heroes/Hanabi.webp" },
    roam: { name: "Belerick", proficiency: 80, image: "/images/heroes/Belerick.webp" },
  }

  return (
    <div className="app-container">
      <div className="profile-container">
        <ProfileCard playerInfo={playerInfo} />
        <RoleSelector roles={roles} selectedRole={selectedRole} onSelectRole={setSelectedRole} />
        {selectedRole && <HeroStats hero={heroData[selectedRole]} />}
        {selectedRole && <HeroStats hero={heroData1[selectedRole]} />}
      </div>
    </div>
  )
}

export default App
