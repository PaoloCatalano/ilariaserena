import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
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
  const title = "Availability Calendar"
  return (
    <>
      <SEO
        title={title}
        description={`${title} | Welcome to my website and thank you for choosing it and wanting to know more about ThetaHealing!`}
        lang="en"
      />
      <Layout title={title} position={6} lang={true}>
        <article className="body">
          <a
            className="space-bottom grid"
            href="https://ilariaserena-calendar.netlify.app/"
          >
            <h2>Check the calendar to select the day I am available!</h2>
            <FcCalendar className="icon big" />
          </a>
          <div className="center">
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
