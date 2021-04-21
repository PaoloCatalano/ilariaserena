import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import PiumaLogo from "../components/PiumaLogo"

const SistemaCredenze = () => {
  const allPics = useStaticQuery(graphql`
    {
      pics: allContentfulPictures(
        sort: { fields: picture___title, order: ASC }
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
  const link = "/en/the-belief-system/"
  const title = "credenze"
  return (
    <>
      <SEO
        title={title}
        description={`${title} |  Il modo in cui viviamo le nostre vite e le scelte che compiamo, sono
            influenzate dal modo in cui pensiamo e dalle credenze che abbiamo
            riguardo a noi stessi, sia livello conscio che, e soprattutto,
            inconscio. Dal momento in cui nasciamo, le nostre personalità si
            formano sulla base di tanti fattori, quali gli insegnamenti dei
            nostri genitori, la scuola, la società e ogni singola esperienza che
            viviamo. Questo “pacchetto” di informazioni, ereditate o acquisite
            durante la nostra esistenza, creano un sistema di convinzioni e
            credenze. Alcune di queste sono positive per la nostra salute e
            crescita, altre possono essere traumatiche, tossiche e negative,
            causando così infelicità, malattie e problemi.`}
      />
      <Layout title={title} link={link}>
        <article className="body">
          <div className="center-grid">
            <PiumaLogo />
          </div>
          <div className="padding-center">
            <p>
              <span>Il sistema di credenze nel ThetaHealing</span>
            </p>
            <p className="padding1 ">
              Il modo in cui viviamo le nostre vite e le scelte che compiamo,
              sono influenzate dal modo in cui pensiamo e dalle credenze che
              abbiamo riguardo a noi stessi, sia livello conscio che, e
              soprattutto, inconscio. Dal momento in cui nasciamo, le nostre
              personalità si formano sulla base di tanti fattori, quali gli
              insegnamenti dei nostri genitori, la scuola, la società e ogni
              singola esperienza che viviamo. Questo “pacchetto” di
              informazioni, ereditate o acquisite durante la nostra esistenza,
              creano un sistema di convinzioni e credenze. Alcune di queste sono
              positive per la nostra salute e crescita, altre possono essere
              traumatiche, tossiche e negative, causando così infelicità,
              malattie e problemi.
            </p>
            <p>
              Il{" "}
              <span>
                <Link to="/che-cosa-è-thetaHealing/">ThetaHealing</Link>
              </span>{" "}
              sostiene che vi siano quattro livelli dove queste credenze si
              sviluppano e risiedono nel nostro essere e questi sono:
            </p>
            <ul className="margin1 padding1">
              <li>
                <span>il livello genetico</span>: sono tutte le credenze
                ereditate dai nostri antenati, dalla famiglia e dai genitori.
                Sono impresse nel DNA e vi si può accedere attraverso la
                ghiandola pineale;
              </li>
              <li>
                <span>il livello del subconscio o “base”</span>: riguarda le
                credenze che acquisiamo da quando nasciamo e durante tutto il
                percorso di vita: attraverso la società, la famiglia, gli studi,
                le istituzioni, i viaggi e ogni singola esperienza Queste
                credenze si depositano nella zona frontale del cervello;
              </li>
              <li>
                <span>il livello dell’anima</span>: contiene tutte le esperienze
                che sono state vissute con grande intesitaà emotiva, che in
                qualche modo "hanno lasciato il segno";
              </li>
              <li>
                <span>il livello storico</span>: si intendono come le memorie
                ancestrali impresse nel DNA e che si trasmettono attraverso
                molte epoche.
              </li>
            </ul>
            <div className="margin1 padding1">
              <p>
                <span>
                  <Link to="/come-funziona-una-seduta/">
                    Lavorare con il ThetaHealing
                  </Link>
                </span>{" "}
                significa portare cambiamenti istantanei lavorando su questi
                quattro livelli, simultaneamente o singolarmente, a seconda di
                dove i blocchi risiedono.
              </p>
            </div>
            <p>
              <span>
                {" "}
                <Link to="/che-cosa-è-thetaHealing/#links">
                  Torna alla pagina principale del ThetaHealing®
                </Link>{" "}
              </span>
            </p>
          </div>
        </article>
      </Layout>
    </>
  )
}

export default SistemaCredenze
