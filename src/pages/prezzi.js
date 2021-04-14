import React from "react"
import Layout from "../components/Layout"
import Carta from "../components/Carta"
import SEO from "../components/Seo"
import sitemap from "../constant/sitemap"

const prezzi = () => {
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
          <div id="thetaHealing"></div>
          <div className="circle2 title center-grid">
            <h2>thetaHeiling</h2>
          </div>
          <section className="contenitore-card">
            <Carta
              title="ThetaHealing Singola Sessione"
              price="75"
              once={true}
              subtitle="Sessione di un’ora"
            />
            <Carta
              title="Pacchetto ThetaHealing"
              price="175"
              once={false}
              subtitle="Pacchetto di Tre Sessioni"
            />
          </section>
          <article className="sezione-prezzi">
            <ul className="prezzi">
              <li>
                Una sessione dura circa 60 minuti e può essere eseguita di
                persona, al telefono o in chat video.
              </li>
              <li>
                Tutto quello che devi fare è essere in una posizione comoda e
                rilassarti.
              </li>

              <li>
                Ti consiglio di bere molta acqua il giorno della sessione,
                aiuterà il tuo corpo a rimanere pulito per accettare una
                guarigione più profonda.
              </li>
            </ul>
          </article>
          <div id="crescita"></div>
          <div className="square1 title center-grid">
            <h2>Crescita</h2>
          </div>
          <section className="contenitore-card">
            <Carta
              title="Crescita Evoluzione (una seduta)"
              price="40"
              once={true}
              subtitle="Sessione di 30 minuti circa"
            />
            <Carta
              title="Pacchetto Crescita Evoluzione"
              price="60"
              once={false}
              subtitle="Pacchetto di Tre Sessioni"
            />
          </section>
          <article className="sezione-prezzi">
            <ul className="prezzi">
              <li>
                Una sessione dura circa 30 minuti e può essere eseguita di
                persona, al telefono o in chat video.
              </li>
              <li>
                Tutto quello che devi fare è essere in una posizione comoda e
                rilassarti.
              </li>
            </ul>
          </article>
          <div id="soundTherapy"></div>
          <div className="cube1 title center-grid">
            <h2> soundTherapy</h2>
          </div>
          <section className="contenitore-card">
            <Carta
              title="Terapia del Diapason (una seduta)"
              price="20"
              once={true}
              subtitle="Sessione di 30 minuti circa"
            />
            <Carta
              title="Pacchetto Terapia del Diapason"
              price="60"
              once={false}
              subtitle="Pacchetto di Tre Sessioni"
            />
          </section>
          <article className="sezione-prezzi">
            <ul className="prezzi">
              <li>
                Una sessione dura circa 30 minuti e può essere eseguita di
                persona, al telefono o in chat video.
              </li>
              <li>
                Tutto quello che devi fare è essere in una posizione comoda e
                rilassarti.
              </li>
            </ul>
          </article>
        </article>
      </Layout>
    </>
  )
}

export default prezzi
