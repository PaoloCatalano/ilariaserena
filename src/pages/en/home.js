import React from "react"
import Layout from "../../components/Layout"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import SEO from "../../components/Seo"


export default function Home() {
const allPics = useStaticQuery(graphql`
  {
    pics: allContentfulPictures(sort: { fields: picture___title, order: ASC }) {
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

  const title = "Ilaria Serena"
  const subtitle = "ThetaHealing and massage therapy"
    const position = 0

  return (
    <>
      <SEO
        title="Home"
        description={`Home | ${subtitle} | Welcome to my website and thank you for choosing it and wanting to know more about ThetaHealing!`}
        lang="en"
      />
      <Layout title={title} subtitle={subtitle} lang={true} position={position}>
        <article className="body side">
          <h2>Empower, Heal, Create the life you dream of.</h2>
          <div>
            <div className="center">
              <Img
                className="img"
                fluid={allPics.pics.nodes[position].picture.fluid}
                alt="Ilaria Serena"
                fadeIn={true}
              />
            </div>
            <p>
              Welcome to my website and thank you for choosing it and wanting to
              know more about{" "}
              <span>
                <Link to="/en/what-is-thetahealing/">ThetaHealing</Link>
              </span>
              ! I want you to realize that, weather this technique resonates
              with you or not, it represents a step toward opening to healing
              and wanting to bring positive changes in your life! We have the
              power to change all behaviors and patterns that are not serving us
              in a positive way. We can, at any moment and at will, shift and
              become a different self, the one we wish to be. There are many
              ways to bring changes in life: some people choose alternative
              therapies like meditation, yoga or energy healing. ThetaHealing is
              one of the path that you can undertake to remove the beliefs and
              block that your conscious and unconscious mind hold and that are
              not leading you to{" "}
              <span>
                <Link to="/en/how-does-a-session work/">
                  happiness, joy and fulfillment.
                </Link>
              </span>
            </p>
          </div>
        </article>
      </Layout>
    </>
  )
}
