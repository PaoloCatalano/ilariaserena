import React, { useRef, useEffect } from "react"

const Header = ({ title, subtitle }) => {
  const titolo = "Ilaria Serena"
  const titleRef = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      titleRef.current.classList.add("effect")
    }, 100)
  }, [])

  return (
    <div className="header circle1 center-grid">
      <div className="header-title" ref={titleRef}>
        <h1>{title || titolo}</h1>
        {subtitle && <h3 className="center-grid">{subtitle}</h3>}
      </div>
    </div>
  )
}

export default Header
