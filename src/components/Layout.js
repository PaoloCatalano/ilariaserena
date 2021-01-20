import React from "react"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ScrollArrow from '../components/ScrollArrow'
const Layout = ({ children, title, subtitle, lang, position }) => {
  return (
    <div>
      <NavBar en={lang} position={position} />
      <Header title={title} subtitle={subtitle} />
      {children}
      <div className='space'></div>
      <ScrollArrow />
      <Footer en={lang} />
    </div>
  )
}

export default Layout
