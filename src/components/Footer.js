import React from "react"
import Socials from "../constant/social"
import LogoTheta from "../constant/logoTheta"
import Newsletters from "./Newsletters"


const Footer = ({ en }) => {
  return (
    <footer className="footer">
      <div>
        <article className='article-footer'>
          <section>
            <Newsletters en={en} />
          </section>
          <section>
            <div className="section-footer">{en ? "Contacts" : "Contatti"}</div>
            <Socials />
          </section>
        </article>
            <div className="section-footer space-bottom">
              {en ? "My ThetaHealing Home Page" : "La mia pagina ThetaHealing"}
            </div>
        <LogoTheta />
        <h4>
          copyright&copy;{new Date().getFullYear()} <span> Ilaria Serena</span>{" "}
          all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
