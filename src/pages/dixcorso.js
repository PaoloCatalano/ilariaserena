import React, { useEffect, useRef, useCallback } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PiumaLogo from "../components/PiumaLogo"
import Symbol from "../components/Symbol"
import sitemap from "../constant/sitemap"
import News from "../components/News"

const Dixcorso = () => {
  const position = sitemap.dixcorso
  const title = "Dixcorso"
  const zen = useRef(null)
  const cat = useRef(null)
  const mega = useRef(null)

  const checkWindow = useCallback(() => {
    if (typeof window !== "undefined") {
      return window.pageYOffset
    }
  }, [])

  const event = () => {
    //catalyz effect
    if (window.pageYOffset > cat.current.offsetTop) {
      cat.current.classList.add("giu")
    } else cat.current.classList.remove("giu")

    //zen effect
    const scroll = window.scrollY
    zen.current.style.transform = `rotate(${scroll}deg)`

    //mega effect
    const fontSize = scroll / 50
    if (
      window.pageYOffset > mega.current.offsetTop - window.innerHeight &&
      fontSize < 60
    ) {
      mega.current.style.fontSize = `${fontSize}px`
    } else {
      mega.current.style.fontSize = `large`
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", event)
    return () => {
      window.removeEventListener("scroll", event)
    }
    // eslint-disable-next-line
  }, [checkWindow])

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
            <div className="padding1 padding-center textAlign">
              <p>
                Ciao piacere, Mi chiamo Discorso, per gli amici Dix.. Mi hanno
                definito "uno speciale... ". La nuova visione di magazine di
                crescita personale”, suona quasi epocale! E poi, mi hanno pure
                ribattezzato fieramente come Mega-Zen. Eh si, dicono che la
                parola{" "}
                <strong ref={zen} className="blue zen">
                  ZEN
                </strong>{" "}
                <span className="hidden-text">ZEN</span> significa
                riflessione, pensiero. E in effetti... mi piace. Io, sono un
                mega pensiero... unisco menti affini... ma amo la scienza e mi
                voglio definire come &nbsp;
                <strong className="blue catalizzatore" ref={cat}>
                  catalizzatore
                </strong>{" "}
                <span className="hidden-text">catalizzatore</span>
                ... suona importante e poi significa, tra l’altro, il
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
                definito un{" "}
                <span ref={mega} className="mega">
                  mega
                </span>{" "}
                pensiero.
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
