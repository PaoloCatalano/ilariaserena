import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import sitemap from "../constant/sitemap"

const Crescita = () => {
  const allPics = useStaticQuery(graphql`
    {
      pics: allContentfulPictures(
        sort: { fields: picture___title, order: ASC }
      ) {
        nodes {
          picture {
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  `)
  const position = sitemap.crescita
  const title = "Crescita"
  return (
    <>
      <SEO title={title} description={title} />
      <Layout title={title} position={position}>
        <article className="body">
          <p>
            <span>Crescita | Evoluzione Personale</span>
          </p>
        </article>
      </Layout>
    </>
  )
}

export default Crescita
