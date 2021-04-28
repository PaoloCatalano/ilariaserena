import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PiumaLogo from "../components/PiumaLogo"
import Symbol from "../components/Symbol"
import sitemap from "../constant/sitemap"
import News from "../components/News"

const Dixcorso = () => {
  const position = sitemap.dixcorso
  const title = "Dixcorso"
  return (
    <>
      <SEO
        title={title}
        description={`${title} | Ciao piacere,
Mi chiamo Discorso, per gli amici Dix.. Mi hanno definito uno speciale…”la nuova visione di magazine di crescita personale”,  suona quasi epocale! E poi, mi hanno pure ribattezzato fieramente come Mega-Zen. Eh si, dicono che la parola zen , significa riflessione, pensiero. E in effetti…mi piace. Io, sono un mega pensiero…unisco menti affini…ma amo la scienza e mi voglio definire come catalizzatore..suona importante e poi significa, tra l’altro, il catalizzatore, provoca,un aumento della velocità di una reazione, senza apparentemente prendervi parte e senza modificarne l'equilibrio`}
      />
      <Layout title={title} position={position}>
        <article className="body">
          <Symbol symbol="square1" title="The New Dawn Of Communication" />
          <div className="center-grid">
            <div className="padding1 padding-center">
              <p>
                Ciao piacere, Mi chiamo Discorso, per gli amici Dix.. Mi hanno
                definito "uno speciale…". La nuova visione di magazine di
                crescita personale”, suona quasi epocale! E poi, mi hanno pure
                ribattezzato fieramente come Mega-Zen. Eh si, dicono che la
                parola <strong className="blue">ZEN</strong>, significa
                riflessione, pensiero. E in effetti…mi piace. Io, sono un mega
                pensiero…unisco menti affini…ma amo la scienza e mi voglio
                definire come <strong className="blue">catalizzatore</strong>
                …suona importante e poi significa, tra l’altro, il
                catalizzatore, provoca un aumento della velocità di una
                reazione, senza apparentemente prendervi parte e senza
                modificarne l'equilibrio
              </p>

              <p>
                Ecco, io mi sento proprio così! Sono un flusso incontenibile di
                idee, prospettive, riflessioni, progetti, visioni che
                abbracciano scienza, filosofia, arte , musica e cultura in
                generale, con un solo scopo…promuovere l’armonia, guidato
                dall’amore per l’umanità.
              </p>
              <p>
                Non ridere, non mi sono mica definito Messia o Profeta!
                Hahahaha, ti adoro! Perció sono tuo follower, é talmente tale la
                tua passione per la vita, che anche a te capita di lasciarti
                prendere emotivamente. Insomma…io voglio solo dire che sono uno
                romantico…amo la vita in tutte le sue forme…e ne ha tante.
                Perciò, con un sorriso compiaciuto ti ricordo che mi sono
                definito un mega pensiero.
              </p>
            </div>
            <div className="center-grid">
              <PiumaLogo />
            </div>
          </div>
          <div id="allNews"></div>
          <News />
        </article>
      </Layout>
    </>
  )
}

export default Dixcorso
