import React, { useState, useRef, useEffect } from "react"
import { ImMenu4 } from "react-icons/im"
import LinkList from '../constant/links'
import LinkListEn from '../constant/links-en'


const Navbar = ({en, position}) => {

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
            onClick={() => {
              setShowLinks(false)
            }}
          ></div>
          <div className="title-navbar">ilaria serena</div>
          <button className="nav-toggle" onClick={toggleLinks}>
            <ImMenu4 className={`icona-menu ${showLinks && "icone-active"}`} />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <div
            ref={linksRef}
            onClick={() => {
              setShowLinks(false)
            }}
          >
            {en ? (
              <LinkListEn position={position} />
            ) : (
              <LinkList position={position} />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
