import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Storia = () => {
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
   const position = 3;
  const title = "La mia storia"
  return (
    <>
      <SEO title={title} description={title} />
      <Layout title={title} position={position}>
        <article className="body">
          <p>
            <span>La mia storia personale</span>
          </p>
          <p>
            Il mio percorso con il{" "}
            <span>
              <Link to="/che-cosa-è-thetaHealing/">ThetaHealing</Link>
            </span>{" "}
            è iniziato nel 2012, quando ho frequentato il corso base di
            praticante negli Stati Uniti, in Colorado.
          </p>
          <p>
            Sono stata affascinata dalla tecnica sin dall’inizio, ma sono stata
            una ThetaHealer “timida” per diverso tempo.
          </p>
          <p>
            È stato nel 2017 che ho veramente iniziato a sperimentare i benefici
            del ThetaHealing, durante un periodo molto difficile della mia vita.
            Ero estremamente insoddisfatta in generale di come andassero le cose
            e mi sembrava di vivere una vita fatta di routine, senza emozioni e
            senza un vero scopo; non riuscivo godermi niente ed ero sempre in
            difficoltà economiche. Non sapevo cosa volevo veramente e in più
            vivevo relazioni amorose dolorose e tristi. Niente sembrava andare
            per il verso giusto e passavo di disastro in disastro. Infine,
            durante questo periodo fui diagnosticata con una malattia
            autoimmune, la malattia di Grave, che affligge la tiroide. Questa,
            definita come ipertiroidismo, prevede una produzione eccessiva di
            ormoni tiroidei che sono tossici per il corpo e che causano disturbi
            e squilibri a tutti i sistemi, compreso quello cardiaco. Nei casi
            più gravi, l’ipertiroidismo può condurre alla morte.
          </p>
          <p>
            Prima della diagnosi, non avevo mai sentito parlare di
            ipertiroidismo, sapevo cos’è la tiroide, ma non avevo idea di quanto
            il sistema endocrino influenzasse tutto l’organismo, il metabolismo,
            l’umore, le capacità cognitive e la memoria.
          </p>
          <p>
            La medicina tradizionale, è ancora alla ricerca di una cura efficace
            per questa malattia per cui spesso si ricorre all’operazione: entro
            poche settimane dalla diagnosi, il dottore aveva già previsto per me
            la rimozione definitiva dell’organo: questo avrebbe significato
            sostituire la funzione della tiroide con l’assunzione di una pillola
            giornaliera per il resto della mia vita.
          </p>
          <p>
            Mi sembrava assurdo dover eliminare un organo talmente importante
            per l’equilibrio corporeo e mentale e dover essere gestita a vita da
            una pillola, soprattutto perché l’ipertiroidismo, in fondo, non è
            altro che un’infiammazione! Mi rifiutai all’idea dell’operazione e
            iniziai a provare qualsiasi forma di terapia alternativa: omeopatia,
            medicina naturale, medicina cinese, agopuntura, cristalloterapia. Ma
            niente, nulla mi aiutava a stare meglio. Ero tuttavia fermamente
            convinta che ogni problema fisico nasce a livello emozionale e
            sapevo che questa malattia era nata proprio in un periodo nel quale
            ero estremamente insoddisfatta e le mie emozioni erano profondamente
            negative.
          </p>
          <p>
            Fu infatti solo quando iniziai a{" "}
            <span>
              <Link to="/come-funziona-una-seduta/">
                lavorare constantemente con il ThetaHealing
              </Link>
            </span>{" "}
            , rimuovendo credenze limitanti e traumi del passato, così come
            tutte le emozioni legate alla tiroide, che iniziai a sperimentare
            enormi miglioramenti e dove tutte le terapie sperimentate iniziarono
            a dare risultati, fino alla guarigione totale.
          </p>
          <div className='center'>
           <Img
              className="img"
              fluid={allPics.pics.nodes[position].picture.fluid}
              alt="Ilaria Serena"
              fadeIn={true}
            />
          </div>
          <p>
            Il ThetaHealing mi ha aiutato non solo a guarire fisicamente, ma a
            scoprire chi sono veramente e cosa desidero. Mi ha aiutato a
            liberarmi di una serie di comportamenti e atteggiamenti deleteri e
            che mi rendevano infelice. Ho iniziato a vivere e vedere la vita da
            una prospettiva completamente nuova, che in precedenza neanche avrei
            immaginato potesse esistere. Ho imparato a dire no alle cose che non
            mi facevano bene e che non volevo e a dire si a quelle che erano
            importanti per me. È stato un percorso ricco di sorprese positive e
            soddisfazioni.
          </p>
          <p>
            <span>
              <Link to="/prezzi/">
                Oggi offro a te il ThetaHealing come percorso di guarigione,
                crescita, miglioramento e trasformazione.
              </Link>
            </span>
          </p>
        </article>
      </Layout>
    </>
  )
}

export default Storia
