import React from "react"
import Layout from "../components/Layout"
import Carta from "../components/Carta"
import SEO from "../components/Seo"

const prezzi = () => {

  const title = 'Prezzi'
  return (
    <>
      <SEO title={title} description={title} />

      <Layout title={title} position={5}>
        <article className="prezzi">
          <h2>PRONTI PER IL CAMBIAMENTO?</h2>
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
          <article className="body">
            <ul className="prezzi">
              <li>
                Una sessione dura circa 60 minuti e può essere eseguita di
                persona, al telefono o in chat video.
              </li>
              <li>
                Tutto quello che devi fare è essere in una posizione comoda e
                rilassarti.
              </li>
              <div id="sound"></div>
              <li>
                Ti consiglio di bere molta acqua il giorno della sessione,
                aiuterà il tuo corpo a rimanere pulito per accettare una
                guarigione più profonda.
              </li>
            </ul>
          </article>
          <h2>Terapia del Diapason</h2>
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
          <article className="body">
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
