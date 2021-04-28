import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PiumaLogo from "../components/PiumaLogo"
import Symbol from "../components/Symbol"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import sitemap from "../constant/sitemap"

const Diapason = () => {
  const allPics = useStaticQuery(graphql`
    {
      pics: allContentfulPictures(
        filter: { picture: { title: { eq: "diapason1" } } }
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
  const position = sitemap.diapason
  const title = "Diapason"

  return (
    <>
      <SEO
        title={title}
        description={`${title} | I diapason terapeutici sono accordati su delle frequenze che
                apportano benefici al corpo, la mente e lo spirito, secondo
                quello che è il principio della risonanza. Il corpo umano,
                attraverso le sue attività biologiche, emette delle frequenze e
                queste variano a seconda dello stato di salute mentale e fisica
                della persona. Con i diapason, si può intervenire per
                armonizzare le frequenze del corpo che sono “scordate”. Le
                dissonanze accorrono quando siamo stressati, soffriamo di
                disturbi e patologie, ma anche a causa dell’elettrosmog e di
                altri fattori geofisici.`}
      />
      <Layout title={title} position={position}>
        <article className="body">
          <Symbol
            symbol="ottagono1"
            title="Ristabilire la salute, l’armonia e l’equilibrio interiore."
          />
          <div className="col-2 center-grid">
            <div className="padding1 padding-left">
              <p>
                Il diapason è uno strumento che serve a produrre suoni
                persistenti e semplici. È una sorgente sonora che vibra a delle
                specifiche frequenze. Probabilmente conoscerai il diapason usato
                per accordare la chitarra, che emette la nota LA, la quale vibra
                alla frequenza di 440 Hz.
              </p>

              <p>
                I diapason terapeutici sono accordati su delle frequenze che
                apportano benefici al corpo, la mente e lo spirito, secondo
                quello che è il principio della risonanza. Il corpo umano,
                attraverso le sue attività biologiche, emette delle frequenze e
                queste variano a seconda dello stato di salute mentale e fisica
                della persona. Con i diapason, si può intervenire per
                armonizzare le frequenze del corpo che sono “scordate”. Le
                dissonanze accorrono quando siamo stressati, soffriamo di
                disturbi e patologie, ma anche a causa dell’elettrosmog e di
                altri fattori geofisici.
              </p>
            </div>
            <div className="center-grid">
              <PiumaLogo />
            </div>
          </div>
          <div className="col-2 center-grid">
            <div className="frame-img" style={{ height: 459, width: 345 }}>
              <Img
                style={{
                  height: "auto",
                  width: 345,
                  margin: "10px 0 0 10px",
                }}
                className="img"
                fluid={allPics.pics.nodes[0].picture.fluid}
                alt="Ilaria Serena diapason soundtherapy"
                fadeIn={true}
                backgroundColor="white"
              />
            </div>
            <div className="padding1 padding-right">
              <p>
                I diapason che utilizzo al momento sono{" "}
                <strong>Sonic Slider</strong> (in foto), ed è stato ideato dalla
                terapeuta statunitense{" "}
                <a
                  href="https://www.eileenmckusick.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eileen Day McKusick
                </a>
                . È accordato sulla 12° armonica (93.96 Hz) della
                <a
                  href="https://it.wikipedia.org/wiki/Risonanza_Schumann"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Risonanza Schumann
                </a>
                , un gruppo di frequenze estremamente basse del campo
                elettromagnetico terrestre, la cui nota fondamentale è 7.83 Hz.
                La 12° armonica corrisponde alla frequenza dell’atmosfera.
              </p>
              <p>
                Accordare il corpo umano usando la risonanza Schumann, significa
                riportarlo a delle frequenze più naturali, che promuovono il
                funzionamento delle attività biologiche e rigenerano le energie
                vitali. Gli effetti benefici della terapia con il Sonic Slider,
                sono molteplici: migliora l’umore, riduce il dolore, supporta il
                sistema linfatico, favorisce il sonno, aiuta con la perdita di
                peso, allevia il mal di testa, le infiammazioni alla cervicale,
                acquieta i sintomi premestruali, riduce le tensioni, migliora la
                tonicità muscolare, è benefico a tutti gli apparati del corpo e
                in particolare: digestivo, circolatorio, endocrino e nervoso. In
                generale, il diapason infonde vitalità e benessere.
              </p>
              <p>
                <span>Planetary Chakra Set</span>: un set di diapason accordati
                secondo l’Ottava Cosmica di Hans Cousto, fabbricati dalla Meinl,
                produzione tedesca. Il suono del sistema solare racchiuso in 7
                pezzi. Ogni diapason è abbinato a uno dei 7 centri energetici
                del corpo umano (chakra). Lavorando sull'armonia globale del
                corpo, il set rappresenta una vera e propria occasione di
                "rigenerazione istantanea". Dolori, stanchezza, fiacchezza,
                senso di confusione mentale, ansia, insonnia, sovrappeso,
                invecchiamento cellulare, sono solo alcuni degli effetti
                benefici di questo straordinario set.
              </p>
              <p>
                <span>Fiore della vita</span>: sempre di frabbricazione tedesca
                Meinl, questo diapasono emette una frequenza di 128 Hz, che
                stimola "la vitalità", l'espressione del sé e la rigenerazione
                ossea e cellulare.
              </p>
            </div>
          </div>
          <div className="crazy1 title center-grid">
            <h2>Info e Costi di una seduta di Sonic Slider</h2>
          </div>
          <div className="padding1 padding-center">
            <p>
              La terapia prevede sedute che durano 30/35 minuti circa. Riguardo
              alla frequenza, questa dipende dall’esito del primo incontro. Gli
              effetti benefici possono essere immediati e risolutivi già dopo la
              prima seduta. Tuttavia, se è la prima volta che si sperimenta una
              terapia con il diapason, consiglio almeno tre sedute (una volta
              alla settimana). Durante la prima seduta si viene soprattutto a
              conoscenza dello strumento e dei suoi effetti; la seconda serve a
              familiarizzare con l’esperienza, mentre la terza permette di
              lasciarsi andare completamente e accettare più profondamente i
              benefici del trattamento.
            </p>
            <div className="padding1">
              <p>
                <span>
                  <Link to="/prezzi/#soundTherapy">
                    Il costo di una seduta è di 20 euro.
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </article>
      </Layout>
    </>
  )
}

export default Diapason
