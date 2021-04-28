import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Link } from "gatsby"
import PiumaLogo from "../components/PiumaLogo"

const OndeCerebraliStatoTheta = () => {
  const link = "/en/brain-waves-theta-state/"
  const title = "onde e stati"
  return (
    <>
      <SEO
        title={title}
        description={`${title} | L’attività cerebrale consiste in un massiccio scambio di
            informazioni tra neuroni i quali emettono frequenze che variano al
            variare degli stati cognitivi. Le frequenze emesse dal cervello sono
            raggruppate in cinque stati principali ai quali corrispondono
            livelli differenti di coscienza e consapevolezza. Onde Theta, Onde Alpha, Onde Beta, Onde Gamma e Onde Delta`}
      />
      <Layout title={title} link={link}>
        <article className="body padding1">
          <div className="center-grid">
            <PiumaLogo />
          </div>
          <div className="padding-center">
            <p>
              <span>Stato Theta e altre onde cerebrali</span>
            </p>
            <p className="padding1">
              L’attività cerebrale consiste in un massiccio scambio di
              informazioni tra neuroni i quali emettono frequenze che variano al
              variare degli stati cognitivi. Le frequenze emesse dal cervello
              sono raggruppate in cinque stati principali ai quali corrispondono
              livelli differenti di coscienza e consapevolezza.
            </p>
            <p>
              <strong className="blue">Onde Theta</strong>: il ThetaHealing
              lavora sulle frequenze chiamate Theta la cui vibrazione è tra i 4
              e 8 Herz. Queste sono associate alle capacità del cervello
              artistiche e creative. Emettiamo onde Theta durante stati di
              coscienza alterati quali l’ipnosi, quando sogniamo durante durante
              la fase REM e quando “fantastichiamo a occhi aperti”. Le onde
              Theta ci connettono con il subconscio, la parte della nostra mente
              che giace tra il conscio e l’inconscio ed è la parte dove le
              nostre credenze risiedono e gestiscono la maggior parte dei nostri
              comportamenti. Con il ThetaHealing riusciamo a raggiungere questo
              stato da vigili, pienamente coscienti dell’esperienza e attivi
              partecipatori.
            </p>
            <p>
              <strong className="blue">Onde Beta</strong>: sono emesse quando
              siamo vigili e svolgiamo le attività quotidiane, quando usiamo la
              logica, quando parliamo, . Le frequenze variano tra i 14 e 28 Hz.
            </p>
            <p>
              <strong className="blue">Onde Alpha</strong>: queste hanno una
              frequenza che varia tra i 7 e i 14 Hz e sono emesse durante stati
              di rilassamento, ad esempio quando pratichiamo meditazione guidata
              con visualizzazioni. Queste costituiscono un ponte tra le
              frequenze Beta e Theta: permettono la memorizzazione di ciò che
              proviamo in stato Theta. Ad esempio, se passiamo da uno stato
              meditativo profondo (Theta) a quello vigile (Beta) ma non
              riusciamo a ricordare i dettagli della meditazione, significa che
              non abbiamo emesso onde Alpha a sufficienza: è mancato il ponte
              tra il conscio e il subconscio.
            </p>
            <p>
              <strong className="blue">Onde Gamma</strong>: sono onde con una
              frequenza molto alta, che varia tra i 40 e 5000 Hz. Quando
              emettiamo onde Gamma, proviamo emozioni quali felicità, empatia,
              compassione e amore. In questo stato cerebrale, anche le nostre
              capacità cognitive sono potenziate, quali memoria e le capacità di
              apprendimento: sono onde che emettiamo durante stati mistici e di
              iperconcentrazione. Nel ThetaHealing si ritiene che in stato
              Gamma/Theta, sia possibile manifestare guarigioni istantanee.
            </p>
            <p>
              <strong className="blue">Onde Delta</strong>: sono emesse durante
              stati di sonno profondissimo, senza sogni. Le frequenze variano
              tra 1 e 3 Hz.
            </p>
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

export default OndeCerebraliStatoTheta
