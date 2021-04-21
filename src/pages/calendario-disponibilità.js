import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { FcCalendar } from "react-icons/fc"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Calendario = () => {
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
  const title = "Calendario disponibilità"
  return (
    <>
      <SEO title={title} description={title} />
      <Layout title={title} position={6}>
        <article className="body">
          <a
            className="space-bottom grid"
            href="https://ilariaserena-calendar.netlify.app/"
          >
            <h2>
              Dai un'occhiata al calendario per vedere i giorni di
              disponibilità!
            </h2>
            <FcCalendar className="icon big" />
          </a>
             <div className='center'>
           <Img
              className="img"
              fluid={allPics.pics.nodes[4].picture.fluid}
              alt="Ilaria Serena"
              fadeIn={true}
            />
          </div>
        </article>
      </Layout>
    </>
  )
}

export default Calendario
