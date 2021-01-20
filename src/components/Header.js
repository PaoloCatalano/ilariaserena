import React from "react"

const Header = ({ title, subtitle }) => {
  const titolo = "titolo"
  return (
    <div className="header">
      <div className="header-title">
        <h1>{title || titolo}</h1>
        {subtitle && <h3>{subtitle}</h3>}
      </div>
    </div>
  )
}

export default Header
