import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Seduta = () => {
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
   const position = 2;
  const title = "Come funziona una seduta"

  return (
    <>
      <SEO title={title} description={title} />
      <Layout title={title} position={position}>
        <article className="body">
          <p>
            <span>Come si svolge una seduta</span>
          </p>
          <p>
            La seduta di{" "}
            <span>
              <Link to="/che-cosa-è-thetaHealing/">ThetaHealing</Link>
            </span>{" "}
            inizia nel momento stesso in cui prenoti un incontro: gli aspetti di
            te che più hanno bisogno di guarigione iniziano già a risolversi
            poiché quando dici di si a un cambiamento positivo e benefico,
            sperimenti immediatamente un’apertura e una predisposizione a
            liberarti di ciò che sei pronto a guarire: inizierai già a elaborare
            tutto ciò che è necessario attraverso stati d’animo, ricordi o
            esperienze insolite. Quindi non preoccuparti se noterai qualcosa di
            diverso in te: è un buon segno!
          </p>
          <p>
            La seduta vera e propria inizia con una breve meditazione per
            raggiungere lo stato Theta: una visualizzazione guidata di pochi
            minuti molto piacevole e rilassante. In seguito riceverai uno “scan”
            ovvero una lettura energetica dei tuoi chakra per poi passare a
            lavorare sul sistema di credenze che sono alla radice del tuo
            problema. Una volta individuate le credenze da cambiare, con il tuo
            permesso, queste vengono rimosse e sostituite con altre credenze
            positive e utili al tuo benessere.
          </p>
          <p>
            L’incontro termina con la fase di “integrazione”, dove si
            consolidano tutti i cambiamenti apportati durante la seduta
            dedicando qualche minuto di riflessione agli insegnamenti positivi
            che i programmi eliminati contengono: è una fase molto positiva e
            liberatoria.
          </p>
          <p>
            Una seduta dura circa un’ora e si svolge in posizione comoda, seduti
            o stesi. Si può fare ThetaHealing anche a distanza, attraverso il
            telefono o il computer.
          </p>
          <p>
            <span>Cosa può fare il ThetaHealing per te</span>
          </p>
          <p>
            Il ThetaHealing ti può aiutare a identificare rapidamente programmi
            che sono limitanti e costituiscono degli ostacoli per tuo benessere,
            la tua salute e la realizzazione dei tuoi desideri.
          </p>
          <p>
            Attraverso il ThetaHealing, inizierai un percorso di scoperta di chi
            sei veramente e ti renderai conto che qualsiasi cosa desideri
            realizzare, è possibile manifestarla. Scoprirai anche di come il tuo
            subconscio sia intelligente e lavori per il tuo meglio sempre, così
            come il tuo spirito e la tua mente. Ogni blocco e programma che
            rimuoverai, scoprirai che ti è servito a uno scopo e riuscirai a
            trarne lezioni positive, da ogni singola esperienza.
          </p>
          <p>
            <span>
              <Link to="/prezzi/">
                Oggi offro a te il ThetaHealing come percorso di guarigione,
                crescita, miglioramento e trasformazione.
              </Link>
            </span>
          </p>
          <p>
            Il mio scopo è quello di aiutarti a rimuovere tutti i blocchi che in
            questo momento ti stanno prevenendo dal vivere la vita che davvero
            desideri, che ti separano dal chi sei veramente e da cosa vuoi
            raggiungere. Voglio aiutarti a rendere i tuoi desideri realtà e
            vivere la tua vita sentendoti vivo, libero e pieno di gioia, sempre,
            ogni singolo istante!
          </p>

          <p>Ti lascio con una frase di Mark Twain:</p>
          <div className="center">
            <Img
              className="img"
              fluid={allPics.pics.nodes[position].picture.fluid}
              alt="Ilaria Serena"
              fadeIn={true}
            />
          </div>
          <h2>
            " I due giorni più importanti della vita sono quello in cui sei nato
            e quello in cui capisci perché."
          </h2>
        </article>
      </Layout>
    </>
  )
}

export default Seduta
