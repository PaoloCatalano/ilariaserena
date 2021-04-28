import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Link } from "gatsby"
import PiumaLogo from "../components/PiumaLogo"
const Seduta = () => {
  const link = "/en/how-does-a-session-work"
  const title = "Seduta"

  return (
    <>
      <SEO
        title={title}
        description={`${title} |  La seduta di ThetaHealing inizia nel momento stesso in cui prenoti un incontro: gli aspetti
              di te che più hanno bisogno di guarigione iniziano già a
              risolversi poiché quando dici di si a un cambiamento positivo e
              benefico, sperimenti immediatamente un’apertura e una
              predisposizione a liberarti di ciò che sei pronto a guarire:
              inizierai già a elaborare tutto ciò che è necessario attraverso
              stati d’animo, ricordi o esperienze insolite. Quindi non
              preoccuparti se noterai qualcosa di diverso in te: è un buon
              segno!`}
      />
      <Layout title={title} link={link}>
        <article className="body">
          <div className="center-grid">
            <PiumaLogo />
          </div>
          <div className="padding-center">
            <p>
              <span>Come si svolge una seduta</span>
            </p>
            <div className="padding1">
              <p>
                La seduta di{" "}
                <span>
                  <Link to="/che-cosa-è-thetaHealing/">ThetaHealing</Link>
                </span>{" "}
                inizia nel momento stesso in cui prenoti un incontro: gli
                aspetti di te che più hanno bisogno di guarigione iniziano già a
                risolversi poiché quando dici di si a un cambiamento positivo e
                benefico, sperimenti immediatamente un’apertura e una
                predisposizione a liberarti di ciò che sei pronto a guarire:
                inizierai già a elaborare tutto ciò che è necessario attraverso
                stati d’animo, ricordi o esperienze insolite. Quindi non
                preoccuparti se noterai qualcosa di diverso in te: è un buon
                segno!
              </p>
              <p>
                La seduta prosegue con una breve meditazione per raggiungere lo
                stato Theta: una visualizzazione guidata di pochi minuti molto
                piacevole e rilassante. Segue un'analisi sul sitema i credenze
                che sono alla radice del tuo problema. Una volta individuate le
                credenze da cambiare, con il tuo permesso, queste vengono
                rimosse e sostituite con altre credenze positive e utili al tuo
                benessere.
              </p>
              <p>
                L’incontro termina con la fase di “integrazione”, dove si
                consolidano tutti i cambiamenti apportati durante la seduta
                dedicando qualche minuto di riflessione agli insegnamenti
                positivi che i programmi eliminati contengono: è una fase molto
                positiva e liberatoria.
              </p>
              <p>
                Una seduta dura circa un’ora e si svolge in posizione comoda,
                seduti o stesi. Si può fare ThetaHealing anche a distanza,
                attraverso il telefono o il computer.
              </p>
            </div>
            <p>
              <span>Cosa può fare il ThetaHealing per te</span>
            </p>
            <div className="padding1">
              <p>
                Il ThetaHealing può aiutare a identificare schemi mentali e
                modelli che sono limitanti e costituiscono degli ostacoli per
                tuo benessere, la tua salute e la realizzazione dei tuoi
                desideri.
              </p>
              <p>
                Attraverso il ThetaHealing, inizierai un percorso di scoperta di
                chi sei veramente e di come il tuo subconscio sia intelligente e
                lavori in tuo favore così ome il tuo spirito e la tua mente per
                il tuo meglio sempre.
              </p>
              <p>
                <span>
                  <Link to="/prezzi/#thetaHealing">
                    Oggi offro a te il ThetaHealing come percorso di guarigione,
                    crescita, miglioramento e trasformazione.
                  </Link>
                </span>
              </p>
            </div>
            <div className="title cloud center-grid">
              <div className=" center-grid">
                <p>Ti lascio con una frase di Mark Twain:</p>
                <h3 className="gold on-azure center-text padding1">
                  " I due giorni più importanti della vita sono quello in cui
                  sei nato e quello in cui capisci perché."
                </h3>
              </div>
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

export default Seduta
