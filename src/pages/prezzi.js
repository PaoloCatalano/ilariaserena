import React from "react"
import Layout from "../components/Layout"
import Carta from "../components/Carta"
import SEO from "../components/Seo"
import sitemap from "../constant/sitemap"

const prezzi = () => {
  const position = sitemap.prezzi
  const title = "Prezzi"
  return (
    <>
      <SEO title={title} description={title} />

      <Layout title={title} position={position}>
        <article className="prezzi body">
          <div className="center-grid">
            <h2>PRONTI PER IL CAMBIAMENTO?</h2>
          </div>
          ...............................................
          <div id="thetaHealing"></div>
          ...............................................
          <div id="crescita"></div>
          ...............................................
          <div id="soundTherapy"></div>
        </article>
      </Layout>
    </>
  )
}

export default prezzi
