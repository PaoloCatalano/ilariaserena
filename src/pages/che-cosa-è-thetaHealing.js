import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Symbol from "../components/Symbol"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import sitemap from "../constant/sitemap"
import piuma2 from "../assets/piuma1oriz.svg"

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
  //viaggio in se stessi
  const position = sitemap.thetahealing
  const title = "thetaHealing"

  return (
    <>
      <SEO
        title={title}
        description={`${title} |  Il ThetaHealing® è un percorso di crescita che inizia dalla
                consapevolezza di un limite interiore, e finisce con il
                superamento di questo limite. La parte più affascinante però,
                non é il risultato, quanto il percorso, un percorso che si basa
                sulla scoperta dell’intuizione e della Creatività individuale,
                il ThetaHealing é quindi una riscoperta del proprio potenziale
                attraverso un viaggio in se stessi.`}
      />
      <Layout title={title} position={position}>
        <article className="body">
          <Symbol symbol="circle2" title="Cos’è il ThetaHealing" />
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
            <div className="cloud padding1 padding-center flex">
              <div className="space-bottom"></div>
              <i className="gold on-azure">
                Il ThetaHealing® è un percorso di crescita che inizia dalla
                consapevolezza di un limite interiore, e finisce con il
                superamento di questo limite. La parte più affascinante però,
                non é il risultato, quanto il percorso, un percorso che si basa
                sulla scoperta dell’intuizione e della Creatività individuale,
                il ThetaHealing é quindi una riscoperta del proprio potenziale
                attraverso un viaggio in se stessi.
              </i>
              {/* <h3>
                “Se vuoi scoprire i segreti dell’Universo, pensa in termini di
                energia, frequenza e vibrazioni”... N. Tesla
              </h3> */}
            </div>
          </div>
          <div className="padding1 padding-center">
            <p>
              Praticare ThetaHealing® significa riconoscere e utilizzare le
              capacità intuitive innate che ognuno di noi possiede ma che nella
              vita quotidiana, dove altre priorità impegnano il nostro tempo,
              non riusciamo a integrare e applicare. Queste ci permettono di
              entrare in comunicazione e interazione diretta con la parte piuù
              autentica che eé in noi, quella dove chiarezza, salute, successo e
              soluzioni risiedono.
            </p>
            <p>
              La tecnica viene fondata dalla statunitense Vianna Stibal nel
              1995, a seguito di un percorso personale di guarigione. Vianna,
              insieme al marito Guy, sono fondatori del THInK Institute Of
              Knowledge in Montana, USA.
            </p>
            <p>
              Il lavoro del ThetaHealing si occupa di individuare modelli e
              schemi mentali (chiamati credenze o programmi) che, radicati in
              alcuni aspetti dell’essere,possono costituire un ostacolo e spesso
              sono la causa di molti squilibri, fisici, emotivi e mentali.
              Queste credenze possono risiedere in quattro livelli dell’essere:
              <span>
                {" "}
                <Link to="/sistema-credenze">
                  genetico, subconscio, storico e dell’anima
                </Link>{" "}
              </span>
              in stato cerebrale Theta, è possibile rimuoverle per lasciare
              spazio a nuovi modelli, più sani e benefici.
            </p>
          </div>

          <div className="circle3 title center-grid">
            <h2 className=""> Stato Theta e altre onde cerebrali</h2>
          </div>
          <div className="col-2 center-grid padding1 padding-center col-special-pic-1">
            <div>
              <p>
                L’attività cerebrale consiste in un massiccio scambio di
                informazioni tra neuroni i quali emettono frequenze che variano
                al variare degli stati cognitivi. Le frequenze emesse dal
                cervello sono raggruppate in cinque stati principali ai quali
                corrispondono livelli differenti di coscienza e consapevolezza.
              </p>
              <p style={{ marginBottom: "4rem" }}>
                Le onde Theta sono frequenze la cui vibrazione è tra i 4 e 8
                Herz (oscillazioni al secondo). Queste sono associate alle
                capacità del cervello artistiche e creative. Emettiamo onde
                Theta durante stati di coscienza alterati quali l’ipnosi, quando
                sogniamo durante durante la fase REM e quando “fantastichiamo a
                occhi aperti”. Le onde Theta ci connettono con il subconscio, la
                parte della nostra mente che giace tra il conscio e l’inconscio
                ed è la parte dove le nostre credenze risiedono e gestiscono la
                maggior parte dei nostri comportamenti. Con il ThetaHealing
                riusciamo a raggiungere questo stato da vigili, pienamente
                coscienti dell’esperienza e attivi partecipatori.
              </p>
              <div className="margin1 padding2" id="links">
                <p>Per approfondire visita questi link:</p>
                <p>
                  <span>
                    {" "}
                    <Link to="/onde-cerebrali-stato-theta">
                      Stato Theta e altre onde cerebrali
                    </Link>{" "}
                  </span>
                </p>
                <p>
                  <span>
                    <Link to="/come-funziona-una-seduta/">
                      Come funziona una seduta di ThetaHealing®
                    </Link>
                  </span>
                </p>
                <p>
                  <span>
                    <Link to="/sistema-credenze">
                      Il sistema delle credenze
                    </Link>
                  </span>
                </p>
              </div>
            </div>
            <div className="align-grid">
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
                “La felicità della tua vita dipende dalla qualità dei tuoi
                pensieri”... Marco Aurelio
              </h3>
            </div>
          </div>
        </article>
      </Layout>
    </>
  )
}

export default ThetaHealing
