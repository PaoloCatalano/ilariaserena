import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Prezzo from "../components/Prezzo"
import FormPrezzi from "../components/FormPrezzi"
import piuma2 from "../assets/piuma2.svg"
import sitemap from "../constant/sitemap"
import { graphql } from "gatsby"

const prezzi = ({
  data: {
    contentfulPrezzi: {
      thetahealing: { thetahealing },
      terapiaSonica: { terapiaSonica },
      meditazioni: { meditazioni },
      // counseling: { counseling },
      // dixcorso: { dixcorso },
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
            <div className="form-prezzi">
              <form>
                <a
                  href="https://ilariaserena.setmore.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <input
                    type="button"
                    value="PRENOTA ADESSO"
                    style={{ margin: 0, backgroundColor: "var(--medio3)" }}
                  />
                </a>
              </form>
            </div>
          </div>

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
          <Prezzo
            id="thetaHealing"
            titolo="thetaHealing"
            desc={thetahealing}
            link="/come-funziona-una-seduta"
            descLink="come funziona una seduta?"
          />
          {/* <Prezzo id="dixcorso" titolo="dixcorso" desc={dixcorso} /> */}
          <Prezzo
            id="soundTherapy"
            titolo="terapia sonica"
            desc={terapiaSonica}
            link="/la-terapia-del-diapason"
            descLink="scopri di piú"
          />
          {/* <Prezzo titolo="counseling" desc={counseling} /> */}
          <Prezzo
            titolo="meditazioni"
            id="med"
            desc={meditazioni}
            link="/meditazioni/#med"
            descLink="Vai ai Sample"
          />
          <Prezzo titolo="eventi" desc={eventi} />
          <h2>RICHIEDI INFORMAZIONI</h2>
          <FormPrezzi />
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
