import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import sitemap from "../../constant/sitemap"
import piuma2 from "../../assets/piuma1oriz.svg"
import Symbol from "../../components/Symbol"

const ThetaHealing = () => {
  const allPics = useStaticQuery(graphql`
    {
      pics: allContentfulPictures(
        filter: { picture: { title: { eq: "mano" } } }
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

  const position = sitemap.thetahealing
  const title = "ThetaHealing"
  return (
    <>
      <SEO
        title={title}
        description={`${title} | ThetaHealing® is an energy healing technique founded in 1995 by
            Vianna Stibal, in Idaho USA. ThetaHealing is based on meditation and
            direct communication to the Creator of All There Is or Creation
            Energy.`}
        lang="en"
      />
      <Layout title={title} lang={true} position={position}>
        <article className="body">
          <Symbol symbol="circle2" title="What is ThetaHealing" />{" "}
          <div className="col-2 center-grid">
            <div className="center-grid">
              <img
                src={piuma2}
                alt="piuma"
                style={{
                  width: "40%",
                }}
              />
            </div>
            <div className="title cloud padding1 padding-center center-grid">
              <div className=" center-grid">
                <h3 className="gold on-azure center-text padding1 upper">
                  discovering the power of connecting to the creator of all
                  there is
                </h3>
              </div>
            </div>
          </div>
          <div className="padding1 padding-center">
            <p>
              ThetaHealing® is an energy healing technique founded in 1995 by
              Vianna Stibal, in Idaho USA. ThetaHealing is based on meditation
              and direct communication to the Creator of All There Is or
              Creation Energy.
            </p>
            <p>
              Despite of your religious beliefs, there is an intuitive capacity
              that everyone of us is endowed with and that, when used, allows to
              bring and manifest positive changes in life, allowing you to
              become co-creator and director of your own reality.
            </p>
            <p>
              The idea is that when you experience difficulties in life,
              illnesses, disorders, unhappiness or any kind of issue that does
              not allow you to experience life in the way you want, it’s because
              of some blocks, habits or beliefs programs residing in your
              subconscious that are preventing you to experience what you
              desire.
            </p>
            <p>
              Through the direct communication with Creator, it is possible to
              quickly find out about the root of these blocks, remove them and
              ask for a change to take place by re-programming your being with
              appropriate, life affirming believes.
            </p>
            <p>
              The technique takes the name from the Theta brain waves, a state
              of mind that you experience more often than you think: you are in
              Theta state while asleep or simply while you are lost in thoughts
              or daydreaming…Think for example of when you are sitting in your
              car waiting for the light to turn green and get absorbed by
              thoughts… you are in Theta state! Who practices yoga or meditation
              experiences this state constantly.
            </p>
            <p>
              When applied through the ThetaHealing technique, you learn to use
              it at will and with the aim to consciously heal body, mind and
              soul. The reason why this work is that in Theta state, we are able
              to connect with the inner essence of ourself, that is the Creator
              itself through which we find guidance and answers.
            </p>
          </div>
          <div className="circle3 title center-grid">
            <h2 className="">The brain waves</h2>
          </div>
          <div className="col-2 center-grid padding1 padding-center col-special-pic-1">
            <div>
              <p style={{ marginBottom: "4rem" }}>
                At the roots of all our thoughts, emotions and behaviors there
                is the communication between neurons within our brain. Masses of
                neurons that communicate to each other emit frequencies and
                these are divided into five types: Beta, Alpha, Theta, Delta and
                Gamma. Each type represents a specific level of brain activity
                and state of consciousness.
              </p>
              <div className="margin1 padding2" id="links">
                <p>For further information please follow the links below:</p>
                <p>
                  <span>
                    {" "}
                    <Link to="/en/brain-waves-theta-state">
                      Theta state and other brain waves
                    </Link>{" "}
                  </span>
                </p>
                <p>
                  <span>
                    <Link to="/en/how-does-a-session-work/">
                      How does a session work?
                    </Link>
                  </span>
                </p>
                <p>
                  <span>
                    <Link to="/en/the-belief-system">The Belief System</Link>
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="frame-img" style={{ height: 360, width: 250 }}>
                <Img
                  style={{
                    height: "auto",
                    width: 250,
                    margin: "10px 0 0 10px",
                  }}
                  className="img"
                  fluid={allPics.pics.nodes[0].picture.fluid}
                  alt="Ilaria Serena"
                  fadeIn={true}
                  backgroundColor="white"
                />
              </div>
            </div>
          </div>
          <div className="title cloud center-grid">
            <div className=" center-grid">
              <h3 className="gold on-azure center-text padding1">
                “The happiness of your life depends upon the quality of your
                thoughts”... Marcus Aurelius
              </h3>
            </div>
          </div>
        </article>
      </Layout>
    </>
  )
}

export default ThetaHealing
