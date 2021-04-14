import React from "react"
import Layout from "../../components/Layout"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import SEO from "../../components/Seo"
import sitemap from "../../constant/sitemap"
import Service from "../../components/Service"
import piuma from "../../assets/piuma1.svg"
import piuma2 from "../../assets/piuma2.svg"
import Symbol from "../../components/Symbol"

export default function Home() {
  const allPics = useStaticQuery(graphql`
    {
      pics: allContentfulPictures(
        filter: { picture: { title: { eq: "busto" } } }
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

  const title = "Ilaria Serena"
  const subtitle = "ThetaHealing and therapy of sound"
  const position = sitemap.home

  return (
    <>
      <SEO
        title="Home"
        description={`Home | ${subtitle} | Welcome to my website and thank you for choosing it and wanting to know more about ThetaHealing!`}
        lang="en"
      />
      <Layout title={title} subtitle={subtitle} lang={true} position={position}>
        <article className="body">
          <Symbol
            symbol="sphere"
            title="Empower, Heal, Create the life you dream of"
          />
          <div className="center-grid">
            <img src={piuma2} alt="piuma ilaria serena" className="simboli" />
          </div>
          <div className="col-2 center-grid left-shift space-bottom">
            <div
              className="frame-img justify-right"
              style={{ height: 459, width: 345 }}
            >
              <Img
                style={{ height: "auto", width: 345, margin: "10px 0 0 10px" }}
                className="img"
                fluid={allPics.pics.nodes[0].picture.fluid}
                alt="Ilaria Serena"
                fadeIn={true}
                backgroundColor="white"
              />
            </div>
            <div className="padding1 padding4 padding-right">
              <p>
                Welcome to my website and thank you for choosing it and wanting
                to know more about{" "}
                <span>
                  <Link to="/en/what-is-thetahealing/">ThetaHealing</Link>
                </span>
                ! I want you to realize that, weather this technique resonates
                with you or not, it represents a step toward opening to healing
                and wanting to bring positive changes in your life! We have the
                power to change all behaviors and patterns that are not serving
                us in a positive way. We can, at any moment and at will, shift
                and become a different self, the one we wish to be. There are
                many ways to bring changes in life: some people choose
                alternative therapies like meditation, yoga or energy healing.
                ThetaHealing is one of the path that you can undertake to remove
                the beliefs and block that your conscious and unconscious mind
                hold and that are not leading you to{" "}
                <span>
                  <Link to="/en/how-does-a-session work/">
                    happiness, joy and fulfillment.
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <div className="center-grid space-bottom">
            <img src={piuma} alt="piuma ilaria serena" className="simboli" />
          </div>
          <h2 className="center-text">MY SERVICES</h2>
          <div className="underline"></div>
          <div className="contenitore-servizi flex">
            <Service
              title="thetaHealing"
              symbol="circle2"
              en
              link="/en/what-is-thetahealing/"
            />
            <Service
              title="growth"
              symbol="square1"
              en
              link="/en/growth-evolution/"
            />
            <Service
              title="soundTherapy"
              symbol="cube1"
              en
              link="/en/tuning-fork-sound-therapy/"
            />
          </div>
        </article>
      </Layout>
    </>
  )
}
