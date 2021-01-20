import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Diapason = () => {
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
  const position = 4;
  const title = "La Terapia del Diapason"

  return (
    <>
      <SEO title={title} description={title} />
      <Layout title={title} position={position}>
        <article className="body side">
          <h1>Ristabilire la salute, l’armonia e l’equilibrio interiore.</h1>
          <div className="center">
            <Img
              className="img"
              fluid={allPics.pics.nodes[position + 1].picture.fluid}
              alt="Ilaria Serena"
              fadeIn={true}
            />
          </div>
          <p>
            Il diapason è uno strumento che serve a produrre suoni persistenti e
            semplici. È una sorgente sonora che vibra a delle specifiche
            frequenze. Probabilmente conoscerai il diapason usato per accordare
            la chitarra, che emette la nota LA, la quale vibra alla frequenza di
            440 Hz.
          </p>

          <p>{/* SPAZIO */}</p>
          <p>{/* SPAZIO */}</p>
          <p>
            I diapason terapeutici sono accordati su delle frequenze che
            apportano benefici al corpo, la mente e lo spirito, secondo quello
            che è il principio della risonanza. Il corpo umano, attraverso le
            sue attività biologiche, emette delle frequenze e queste variano a
            seconda dello stato di salute mentale e fisica della persona. Con i
            diapason, si può intervenire per armonizzare le frequenze del corpo
            che sono “scordate”. Le dissonanze accorrono quando siamo stressati,
            soffriamo di disturbi e patologie, ma anche a causa dell’elettrosmog
            e di altri fattori geofisici.
          </p>
          <p>
            Il diapason che utilizzo al momento, si chiama{" "}
            <strong>Sonic Slider</strong> (in foto), ed è stato ideato dalla
            terapeuta statunitense{" "}
            <a
              href="https://www.eileenmckusick.com/"
              target="_blank"
              rel="noopener"
            >
              Eileen Day McKusick
            </a>
            . È accordato sulla 12° armonica* (93.96 Hz) della{" "}
            <a
              href="https://it.wikipedia.org/wiki/Risonanza_Schumann"
              target="_blank"
              rel="noopener"
            >
              Risonanza Schumann
            </a>
            , un gruppo di frequenze estremamente basse del campo
            elettromagnetico terrestre, la cui nota fondamentale è 7.83 Hz. La
            12° armonica corrisponde alla frequenza dell’atmosfera.
          </p>
          <p>{/* SPAZIO */}</p>
          <p>{/* SPAZIO */}</p>
          <p>
            Accordare il corpo umano usando la risonanza Schumann, significa
            riportarlo a delle frequenze più naturali, che promuovono il
            funzionamento delle attività biologiche e rigenerano le energie
            vitali. Gli effetti benefici della terapia con il Sonic Slider, sono
            molteplici: migliora l’umore, riduce il dolore, supporta il sistema
            linfatico, favorisce il sonno, aiuta con la perdita di peso, allevia
            il mal di testa, le infiammazioni alla cervicale, acquieta i sintomi
            premestruali, riduce le tensioni, migliora la tonicità muscolare, è
            benefico a tutti gli apparati del corpo e in particolare: digestivo,
            circolatorio, endocrino e nervoso. In generale, il diapason infonde
            vitalità e benessere.
          </p>
          <h3>Info e Costi di una seduta di Sonic Slider.</h3>
          <p>
            La terapia prevede sedute che durano 30/35 minuti circa. Riguardo
            alla frequenza, questa dipende dall’esito del primo incontro. Gli
            effetti benefici possono essere immediati e risolutivi già dopo la
            prima seduta. Tuttavia, se è la prima volta che si sperimenta una
            terapia con il diapason, consiglio almeno tre sedute (una volta alla
            settimana). Durante la prima seduta si viene soprattutto a
            conoscenza dello strumento e dei suoi effetti; la seconda serve a
            familiarizzare con l’esperienza, mentre la terza permette di
            lasciarsi andare completamente e accettare più profondamente i
            benefici del trattamento.
            <span>
              {" "}
              Il mio scopo è quello di aiutarti a rimuovere tutti i blocchi che
              in questo momento ti stanno prevenendo dal vivere la vita che
              davvero desideri, che ti separano dal chi sei veramente e da cosa
              vuoi raggiungere.{" "}
            </span>
            Voglio aiutarti a rendere i tuoi desideri realtà e vivere la tua
            vita sentendoti vivo, libero e pieno di gioia, sempre, ogni singolo
            istante!
          </p>
          <h6>
            * Gli armonici naturali sono una successione di suoni le cui
            frequenze sono multipli di una nota di base, (la nota fondamentale)
          </h6>
          <p>
            <span>
              <Link to="/prezzi/#sound">Il costo di una seduta è di 20 euro.</Link>
            </span>
          </p>
        </article>
      </Layout>
    </>
  )
}

export default Diapason
