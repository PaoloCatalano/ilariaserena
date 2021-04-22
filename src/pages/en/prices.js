import React from "react"
import Layout from "../../components/Layout"
import Card from "../../components/Card"
import SEO from "../../components/Seo"
import sitemap from "../../constant/sitemap"
import Prezzo from "../../components/Prezzo"
import FormPrices from "../../components/FormPrices"
import piuma2 from "../../assets/piuma2.svg"
import { graphql } from "gatsby"

const prices = ({
  data: {
    contentfulPrices: {
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
  const title = "Prices"

  return (
    <>
      <SEO
        title={title}
        description={`${title} | Welcome to my website! READY FOR A CHANGE?`}
        lang="en"
      />
      <Layout title={title} position={position} lang={true}>
        <article className="prezzi body">
          <div className="center-grid">
            <h2>READY FOR A CHANGE?</h2>
            <h2>BOOK NOW</h2>
          </div>
          <FormPrices />
          <h2
            style={{
              margin: "5rem",
              textTransform: "uppercase",
              borderBottom: "solid 1px  var(--gold)",
            }}
          >
            Services
          </h2>
          <div className="center-grid">
            <img src={piuma2} alt="piuma ilaria serena" className="simboli" />
          </div>
          <Prezzo id="thetaHealing" titolo="thetaHealing" desc={thetahealing} />
          <Prezzo id="dixcorso" titolo="dixcorso" desc={dixcorso} />
          <Prezzo
            id="soundTherapy"
            titolo="Sonic Terapy"
            desc={terapiaSonica}
          />
          <Prezzo titolo="counseling" desc={counseling} />
          <Prezzo titolo="meditations" desc={meditazioni} />
          <Prezzo titolo="events" desc={eventi} />
        </article>
      </Layout>
    </>
  )
}
export const query = graphql`
  {
    contentfulPrices {
      counseling: childContentfulPricesCounselingTextNode {
        counseling
      }
      dixcorso: childContentfulPricesDixcorsoTextNode {
        dixcorso
      }
      eventi: childContentfulPricesEventiTextNode {
        eventi
      }
      meditazioni: childContentfulPricesMeditazioniTextNode {
        meditazioni
      }
      terapiaSonica: childContentfulPricesTerapiaSonicaTextNode {
        terapiaSonica
      }
      thetahealing: childContentfulPricesThetahealingTextNode {
        thetahealing
      }
    }
  }
`
export default prices
