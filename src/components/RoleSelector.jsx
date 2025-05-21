"use client"

import "./RoleSelector.css"

const RoleSelector = ({ roles, selectedRole, onSelectRole }) => {
  // Mapeo de IDs de roles a rutas de imágenes
  const roleImages = {
    jungle: "/images/lanes/jungle.jpeg",
    exp: "/images/lanes/exp.jpeg",
    mid: "/images/lanes/mid.jpg",
    gold: "/images/lanes/gold.jpg",
    roam: "/images/lanes/roam.jpg",
  }

  return (
    <div className="role-selector">
      <h3 className="role-title">Líneas</h3>
      <div className="role-icons">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`role-icon ${selectedRole === role.id ? "selected" : ""}`}
            onClick={() => onSelectRole(role.id)}
          >
            <div className="icon-container">
              {/* Usar imagen de placeholder hasta que el usuario coloque sus imágenes */}
              <img
                src={roleImages[role.id] || "/placeholder.svg"}
                alt={role.name}
                className="role-image"
                onError={(e) => {
                  e.target.src = `/placeholder.svg?height=55&width=55`
                }}
              />
            </div>
            <span className="role-name">{role.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoleSelector
