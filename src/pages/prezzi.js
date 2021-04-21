import React from "react"
import Layout from "../components/Layout"
import Carta from "../components/Carta"
import SEO from "../components/Seo"
import Prezzo from "../components/Prezzo"
import FormPrezzi from "../components/FormPrezzi"
import sitemap from "../constant/sitemap"
import piuma2 from "../assets/piuma2.svg"

const prezzi = ({
  data: {
    contentfulPrezzi: {
      thetahealing: { thetahealing },
      terapiaSonica: { terapiaSonica },
      meditazioni: { meditazioni },
      counseling: { counseling },
      dixcorso: { dixcorso },
      eventi: { eventi },
    },
  },
}) => {
  const position = sitemap.prezzi
  const title = "Prezzi"
  return (
    <>
      <SEO title={title} description={title} />

      <Layout title={title} position={position}>
        <article className="prezzi body">
          <div className="center-grid">
            <h2>PRONTI PER IL CAMBIAMENTO?</h2>
          </div>
          <FormPrezzi />
          <h2
            style={{
              margin: "5rem",
              textTransform: "uppercase",
              borderBottom: "solid 1px  var(--gold)",
            }}
          >
            I servizi
          </h2>
          <div className="center-grid">
            <img src={piuma2} alt="piuma ilaria serena" className="simboli" />
          </div>
          <Prezzo id="thetaHealing" titolo="thetaHealing" desc={thetahealing} />
          <Prezzo id="crescita" titolo="dixcorso" desc={dixcorso} />
          <Prezzo
            id="soundTherapy"
            titolo="terapia sonica"
            desc={terapiaSonica}
          />
          <Prezzo titolo="counseling" desc={counseling} />
          <Prezzo titolo="meditazioni" desc={meditazioni} />
          <Prezzo titolo="eventi" desc={eventi} />
        </article>
      </Layout>
    </>
  )
}
export const query = graphql`
  {
    contentfulPrezzi {
      counseling: childContentfulPrezziCounselingTextNode {
        counseling
      }
      dixcorso: childContentfulPrezziDixcorsoTextNode {
        dixcorso
      }
      eventi: childContentfulPrezziEventiTextNode {
        eventi
      }
      meditazioni: childContentfulPrezziMeditazioniTextNode {
        meditazioni
      }
      terapiaSonica: childContentfulPrezziTerapiaSonicaTextNode {
        terapiaSonica
      }
      thetahealing: childContentfulPrezziThetahealingTextNode {
        thetahealing
      }
    }
  }
`

export default prezzi
