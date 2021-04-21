import React, { useState, useRef, useEffect } from "react"
import { ImMenu4 } from "react-icons/im"
import LinkList from "../constant/links"

const Navbar = ({ en, position, link }) => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = "0px"
    }
  }, [showLinks])

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div
            aria-label="navbar"
            role="button"
            tabIndex="0"
            onClick={() => {
              setShowLinks(false)
            }}
            onKeyDown={() => {
              setShowLinks(false)
            }}
          ></div>
          <div className="title-navbar">ilaria serena</div>
          <button className="nav-toggle" onClick={toggleLinks}>
            <ImMenu4 className={`icona-menu ${showLinks && "icone-active"}`} />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <div ref={linksRef}>
            {en ? (
              <LinkList position={position} link={link} en />
            ) : (
              <LinkList position={position} link={link} />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
