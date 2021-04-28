import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Link } from "gatsby"
import PiumaLogo from "../components/PiumaLogo"
import Audio from "../components/Audio"
import sitemap from "../constant/sitemap"
import piuma2 from "../assets/piuma1oriz.svg"

const meditazioni = ({ data }) => {
  const {
    allContentfulAudioSample: { nodes: tracks },
  } = data
  const position = sitemap.med
  const title = "Meditazioni"
  return (
    <>
      <SEO
        title={title}
        description={`${title} |  Le meditazioni soniche sono interamente autoprodotte da Ilaria Serena (testo e voce) e Paolo Catalano (musiche medicali per l’anima).
I testi sono pensati per affinare l’immaginazione, ovvero la capacità di “creare quello che non c’è”.. Questo significa risvegliare la capacità di ideare, provvedere a soluzioni, stimolare motivazione e ispirazione. 
Mentre la mentre “crea”, la musica agisce da cura per l’animo con i suoi suoni armonici e sperimentali.`}
      />
      <Layout title={title} position={position}>
        <article className="body">
          <div className="center-grid">
            <PiumaLogo />
          </div>
          <div className="padding-center">
            <p>
              <span>Meditazioni Soniche</span>
            </p>

            <p>
              Le meditazioni soniche sono interamente autoprodotte da Ilaria
              Serena (testo e voce) e Paolo Catalano (musiche medicali per
              l’anima). I testi sono pensati per affinare l’immaginazione,
              ovvero la capacità di “creare quello che non c’è”.. Questo
              significa risvegliare la capacità di ideare, provvedere a
              soluzioni, stimolare motivazione e ispirazione. Mentre la mentre
              “crea”, la musica agisce da cura per l’animo con i suoi suoni
              armonici e sperimentali.
            </p>
            <p>
              Le meditazioni del gruppo “Basi”, sono creazioni libere dedicate
              ai cinque elementi: il corpo{" "}
              <strong className="blue"> - Forme Geometriche - </strong>, la
              mente <strong className="blue"> - Fiamma - </strong>, le emozioni{" "}
              <strong className="blue"> - le Virtù - </strong>, l’animo{" "}
              <strong className="blue"> - Stella dell’anima - </strong>, il
              respiro <strong className="blue"> - Espansione</strong>. Le
              meditazioni <strong>Punto</strong> e <strong>Spirale</strong>,
              sono liberamente ispirate da due racconti della raccolta
              “Cosmicomiche” di Italo Calvino (1923 - 1985) , rispettivamente
              “Tutto in un Punto” e “La Spirale”, per aiutare ad espandere la
              propria percezione del corpo nello spazio e del corpo come
              “forma”.
            </p>
            <p>
              Ehm… scusate, sono Dixcorso. Ci tengo a precisare…fin qui, tutto
              molto romantico e profondo. Ma io sono un tipo della generazione
              xyz..non mi perdo in chiacchiere! Vado a ritmo con la vita. Quindi
              preparati all’idea che queste meditazioni non sono meditazioni.
              sono riflessioni soniche medicali contemporanee. Capito più o
              meno? Ascolta i campioni che ho caricato per te!
            </p>
            <center id="med">
              <div className="center-grid">
                <img
                  src={piuma2}
                  alt="piuma"
                  style={{
                    width: "40%",
                  }}
                />
              </div>

              <h2>Sample</h2>
              {tracks.map(track => {
                return <Audio key={track.contentfulid} {...track} />
              })}
            </center>
            <p>
              Torna ai{" "}
              <span>
                <Link to="/prezzi/#med">Prezzi</Link>
              </span>{" "}
            </p>
          </div>
        </article>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allContentfulAudioSample(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        contentfulid
        title
        duration
        track {
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
  }
`
export default meditazioni
