import React, { useRef, useEffect } from "react"
import Layout from "../components/Layout"
import Symbol from "../components/Symbol"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import SEO from "../components/Seo"
import News from "../components/News"
import sitemap from "../constant/sitemap"
import Service from "../components/Service"
import piuma from "../assets/piuma1.svg"
import piuma2 from "../assets/piuma2.svg"

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
      <SEO title="Home" description={`Home | ${subtitle}`} />
      <Layout title={title} subtitle={subtitle} position={position}>
        <article className="body">
          <Symbol symbol="sphere" title="Espandi la tua visione" />
          {/* <div
            className="sphere title center-grid before-effect"
            ref={elementRef}
          >
          ..
            <h2>Espandi la tua visione</h2>
          </div> */}
          <News home />
          <div className="center-grid">
            <img src={piuma2} alt="piuma ilaria serena" className="simboli" />
          </div>
          <div className="col-2 center-grid left-shift space-bottom">
            <div
              className="frame-img  justify-right"
              style={{ height: 459, width: 345 }}
            >
              <Img
                style={{
                  height: "auto",
                  width: 345,
                  margin: "10px 0 0 10px",
                }}
                className="img"
                fluid={allPics.pics.nodes[0].picture.fluid}
                alt="Ilaria Serena"
                fadeIn={true}
                backgroundColor="white"
              />
            </div>
            <div className="padding1 padding4 padding-right">
              <p>
                Benvenuti sulla mia pagina web e grazie per aver scelto di voler
                scoprire di più sul{" "}
                <span>
                  <Link to="/che-cosa-è-thetaHealing/">ThetaHealing</Link>
                </span>
                ! Vorrei farti sapere che, a prescindere da quanto questa
                tecnica sia quella giusta per te, rappresenta un passo
                importantissimo! Hai deciso di aprirti al cambiamento, di
                guarire, di crescere e, soprattutto, hai deciso che è ora di
                realizzare i tuoi desideri per davvero! Hai il potere di
                modificare qualsiasi causa che impedisce ai tuoi bisogni di
                essere soddisfatti e ai tuoi obiettivi di essere raggiunti. Hai
                la possibilità, in qualsiasi momento, di cambiare, di guarire,
                di scoprire chi sei e di realizzare ciò che desideri.
              </p>

              <p>
                Ci sono molti percorsi che puoi intraprendere: la psicologia, la
                medicina alternativa, la meditazione, lo yoga, le discipline
                olistiche e molto altro. Il{" "}
                <span>
                  <Link to="/che-cosa-è-thetaHealing/">ThetaHealing</Link>
                </span>{" "}
                è uno dei percorsi in grado di aiutarti a rimuovere i blocchi
                che sono alla radice di insoddisfazioni, malattie, difficoltà e
                quant’altro ti stia prevenendo di vivere la vita che sogni.
                Sappi che gli strumenti per realizzare il cambiamento che
                desideri ci sono e che{" "}
                <span>
                  <Link to="/come-funziona-una-seduta/">
                    non sei solo in questo percorso!
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <div className="center-grid space-bottom">
            <img src={piuma} alt="piuma ilaria serena" className="simboli" />
          </div>
          <h2 className="center-text">I MIEI SERVIZI</h2>
          <div className="underline"></div>
          <div className="contenitore-servizi flex">
            <Service
              title="thetaHealing"
              symbol="circle2"
              link="/che-cosa-è-thetaHealing/"
            />
            <Service
              title="Dixcorso"
              symbol="square1"
              link="/crescita-evoluzione/"
            />
            <Service
              title="soundTherapy"
              symbol="cube1"
              link="/la-terapia-del-diapason/"
            />
          </div>
        </article>
      </Layout>
    </>
  )
}
