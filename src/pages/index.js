import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import SEO from "../components/Seo"


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
  const position = 0;

  return (
    <>
      <SEO title="Home" description={`Home | ${subtitle}`} />
      <Layout title={title} subtitle={subtitle} position={position}>
        <article className="body side">
          <h2>Trasforma, Guarisci, Crea la vita che sogni.</h2>
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
              Benvenuti sulla mia pagina web e grazie per aver scelto di voler
              scoprire di più sul{" "}
              <span>
                <Link to="/che-cosa-è-thetaHealing/">ThetaHealing</Link>
              </span>
              ! Vorrei farti sapere che, a prescindere da quanto questa tecnica
              sia quella giusta per te, rappresenta un passo importantissimo!
              Hai deciso di aprirti al cambiamento, di guarire, di crescere e,
              soprattutto, hai deciso che è ora di realizzare i tuoi desideri
              per davvero! Hai il potere di modificare qualsiasi causa che
              impedisce ai tuoi bisogni di essere soddisfatti e ai tuoi
              obiettivi di essere raggiunti. Hai la possibilità, in qualsiasi
              momento, di cambiare, di guarire, di scoprire chi sei e di
              realizzare ciò che desideri.
            </p>
          </div>
          <p>
            Ci sono molti percorsi che puoi intraprendere: la psicologia, la
            medicina alternativa, la meditazione, lo yoga, le discipline
            olistiche e molto altro. Il{" "}
            <span>
              <Link to="/che-cosa-è-thetaHealing/">ThetaHealing</Link>
            </span>{" "}
            è uno dei percorsi in grado di aiutarti a rimuovere i blocchi che
            sono alla radice di insoddisfazioni, malattie, difficoltà e
            quant’altro ti stia prevenendo di vivere la vita che sogni. Sappi
            che gli strumenti per realizzare il cambiamento che desideri ci sono
            e che{" "}
            <span>
              <Link to="/come-funziona-una-seduta/">
                non sei solo in questo percorso!
              </Link>
            </span>
          </p>
        </article>
      </Layout>
    </>
  )
}
