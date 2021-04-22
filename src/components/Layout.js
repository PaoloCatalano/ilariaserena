import React from "react"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ScrollArrow from "../components/ScrollArrow"
import { FormspreeProvider } from "@formspree/react"

const Layout = ({ children, title, subtitle, lang, position, link }) => {
  return (
    <FormspreeProvider project="1662037312390823110">
      <div>
        <NavBar en={lang} position={position} link={link} />
        <Header title={title} subtitle={subtitle} />
        <div className="vertical center-grid"></div>
        {children}
        <div className="space"></div>
        <ScrollArrow />
        <Footer en={lang} />
      </div>
    </FormspreeProvider>
  )
}
export default Layout
