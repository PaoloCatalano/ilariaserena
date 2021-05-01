import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import { Link } from "gatsby"
import PiumaLogo from "../../components/PiumaLogo"
import Audio from "../../components/Audio"
import sitemap from "../../constant/sitemap"
import piuma2 from "../../assets/piuma1oriz.svg"

const meditazioni = ({ data }) => {
  const {
    allContentfulAudioSample: { nodes: tracks },
  } = data
  const position = sitemap.med
  const title = "Meditations"

  const testo = `Uhm, excuse me, it’s Dixcorso here. I want to clarify… so far, all very romantic and profound, well done. But I'm the dude of the “xyz generation” .. I don't get lost in “ballade”! I am “on” with the rhythm of Life. So! Be prepared at the idea that these meditations are not meditations. they are contemporary medical sonic trips. Got it more or less? Listen to the samples that I have uploaded for you!`.split(
    " "
  )

  return (
    <>
      <SEO
        title={title}
        description={`${title} |  The sonic meditations are entirely self-produced by Ilaria Serena (text and voice) and Paolo Catalano (medical music for the soul).
The texts are designed to sharpen imagination, or the ability to "create what does not exist (yet!)” .. This means awakening the ability to create an idea, provide for solutions, stimulate motivation and inspiration.
While the mind "creates", the music acts as a cure for the soul with its harmonic and experimental sounds.`}
      />
      <Layout title={title} lang={true} position={position}>
        <article className="body">
          <div className="center-grid">
            <PiumaLogo />
          </div>
          <div className="padding-center">
            <p>
              <span>Sonic Meditations</span>
            </p>
            <p>
              The sonic meditations are entirely self-produced by Ilaria Serena
              (text and voice) and Paolo Catalano (medical music for the soul).
              The texts are designed to sharpen imagination, or the ability to
              "create what does not exist (yet!)” .. This means awakening the
              ability to create an idea, provide for solutions, stimulate
              motivation and inspiration. While the mind "creates", the music
              acts as a cure for the soul with its harmonic and experimental
              sounds.
            </p>
            <p>
              The meditations of the group “Base” are freely inspired creations
              dedicated to the 5 elements: the body{" "}
              <strong className="blue"> - Forme Geometriche - </strong>, the
              mind <strong className="blue"> - Fiamma - </strong>, the emotions{" "}
              <strong className="blue"> - Le Virtù - </strong> and the soul{" "}
              <strong className="blue"> - Stella dell’Anima - </strong> and the
              breath <strong className="blue"> - Espansione</strong>.{" "}
              <strong>Il Punto</strong> and <strong>Spirale</strong> tracks are
              freely inspired by two tales of the Italian writer Italo Calvino
              (1923 - 1985) from the book "Cosmicomiche”, respectively named
              “Tutto in un Punto“ and “LA Spirale“. The purpose of the
              meditations is to help expanding one's perception of the body in
              the space and of the body as a “shape”.
            </p>
            <p className="dixappear">
              {/* Uhm ... excuse-me, it’s Dixcorso here. I want to clarify… so far,
              all very romantic and profound, well done. But I'm the dude of the
              “xyz generation” .. I don't get lost in “ballade”! I am “on” with
              the rhythm of Life. So! Be prepared at the idea that these
              meditations are not meditations. they are contemporary medical
              sonic trips. Got it more or less? Listen to the samples that I
              have uploaded for you! */}
              {testo.map((t, index) => {
                return (
                  <text className="colorful" key={index}>
                    {t}&nbsp;
                    <span> </span>
                  </text>
                )
              })}
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
              <h2>Samples</h2>
              {tracks.map(track => {
                return <Audio key={track.contentfulid} {...track} />
              })}
            </center>
            <p>
              Back to{" "}
              <span>
                <Link to="/en/prices/#med">Prices</Link>
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
