import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ThetaHealing = () => {
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

  const position = 1;
  const title = "Che cos'è il thetaHealing®"

  return (
    <>
      <SEO title={title} description={title} />
      <Layout title={title} position={position}>
        <article className="body">
          <h2>
            “Se vuoi scoprire i segreti dell’Universo, pensa in termini di
            energia, frequenza e vibrazioni”... N.Tesla
          </h2>
          <p>
            <span>Cos’è il ThetaHealing</span>
          </p>
          <p>
            Praticare ThetaHealing® significa riconoscere e utilizzare le
            capacità intuitive innate che ognuno di noi possiede ma che nella
            vita quotidiana, dove altre priorità impegnano il nostro tempo, non
            riusciamo a integrare e applicare. Queste ci permettono di entrare
            in comunicazione e interazione diretta con la fonte Divina che è in
            noi, al fine di guarire e manifestare i nostri desideri.
          </p>
          <p>
            La tecnica è stata fondata dalla statunitense Vianna Stibal nel
            1995, a seguito di un percorso personale di guarigione che le ha
            permesso di sviluppare un metodo semplice e rapido di connessione
            con il “<i>Creatore di Tutto ciò che è</i>”. Vianna oggi viaggia nel
            mondo per divulgare e insegnare ThetaHealing e insieme al marito,
            Guy, è fondatrice del “THinK ThetaHealing Institute of Knwoledge®”.
          </p>
          <p>
            Attraverso il ThetaHealing siamo in grado di riattivare delle
            capacità cognitive che amplificano il nostro stato di coscienza e
            permettono l’accesso a informazioni che la mente in stato vigile non
            è in grado di assimilare. Riusciamo a vedere il nostro percorso di
            vita con chiarezza, a individuare le cause di un disturbo e a
            cambiare qualsiasi cosa ci stia creando difficoltà nella vita:
            malattie, stress, problemi familiari, disturbi emotivi,
            insoddisfazioni. Riconoscendo la radice di un problema, siamo capaci
            di liberarcene e lasciare spazio alla manifestazione di una nuova
            realtà. Lavorare con il ThetaHealing significa fare un percorso di
            crescita personale, intenso e profondo, che lavora nel tempo,
            gradualmente, proprio perché appunto, è una crescita.
          </p>
          <p>
            <span>Lo onde cerebrali e lo stato Theta</span>
          </p>
          <p>
            L’attività cerebrale consiste in un massiccio scambio di
            informazioni tra neuroni. Questa attività neuronale emette
            vibrazioni la cui frequenza varia a seconda di cosa diciamo o
            pensiamo e delle attività che svolgiamo. Le frequenze emesse dal
            cervello sono raggruppate in cinque stati principali (Alpha, Beta,
            Theta, Delta e Gamma) ai quali corrispondono livelli differenti di
            coscienza e consapevolezza.
          </p>
          <p>
            <strong className="blue">Onde Theta</strong>: il ThetaHealing lavora
            sulle frequenze chiamate Theta la cui vibrazione è tra i 4 e 8 Herz.
            Queste sono associate alle capacità del cervello artistiche e
            creative. Emettiamo onde Theta durante stati di coscienza alterati
            quali l’ipnosi, quando sogniamo durante durante la fase REM e quando
            “fantastichiamo a occhi aperti”. Le onde Theta ci connettono con il
            subconscio, la parte della nostra mente che giace tra il conscio e
            l’inconscio ed è la parte dove le nostre credenze risiedono e
            gestiscono la maggior parte dei nostri comportamenti. Con il
            ThetaHealing riusciamo a raggiungere questo stato da vigili,
            pienamente coscienti dell’esperienza e attivi partecipatori.
          </p>
          <p>
            <strong className="blue">Onde Beta</strong>: sono emesse quando
            siamo vigili e svolgiamo le attività quotidiane, quando usiamo la
            logica, quando parliamo, . Le frequenze variano tra i 14 e 28 Hz.
          </p>
          <p>
            <strong className="blue">Onde Alpha</strong>: queste hanno una
            frequenza che varia tra i 7 e i 14 Hz e sono emesse durante stati di
            rilassamento, ad esempio quando pratichiamo meditazione guidata con
            visualizzazioni. Queste costituiscono un ponte tra le frequenze Beta
            e Theta: permettono la memorizzazione di ciò che proviamo in stato
            Theta. Ad esempio, se passiamo da uno stato meditativo profondo
            (Theta) a quello vigile (Beta) ma non riusciamo a ricordare i
            dettagli della meditazione, significa che non abbiamo emesso onde
            Alpha a sufficienza: è mancato il ponte tra il conscio e il
            subconscio.
          </p>
          <p>
            <strong className="blue">Onde Gamma</strong>: sono onde con una
            frequenza molto alta, che varia tra i 40 e 5000 Hz. Quando emettiamo
            onde Gamma, proviamo emozioni quali felicità, empatia, compassione e
            amore. In questo stato cerebrale, anche le nostre capacità cognitive
            sono potenziate, quali memoria e le capacità di apprendimento: sono
            onde che emettiamo durante stati mistici e di iperconcentrazione.
            Nel ThetaHealing si ritiene che in stato Gamma/Theta, sia possibile
            manifestare guarigioni istantanee.
          </p>
          <p>
            <strong className="blue">Onde Delta</strong>: sono emesse durante
            stati di sonno profondissimo, senza sogni. Le frequenze variano tra
            1 e 3 Hz.
          </p>
          <div className="center">
            <Img
              className="img"
              fluid={allPics.pics.nodes[position].picture.fluid}
              alt="Ilaria Serena"
              fadeIn={true}
            />
          </div>
          <h2>
            “La felicità della tua vita dipende dalla qualità dei tuoi
            pensieri”... Marco Aurelio
          </h2>
          <p>
            <span>Il sistema di credenze nel ThetaHealing</span>
          </p>
          <p>
            Il modo in cui viviamo le nostre vite e le scelte che compiamo, sono
            influenzate dal modo in cui pensiamo e dalle credenze che abbiamo
            riguardo a noi stessi, sia livello conscio che, e soprattutto,
            inconscio. Dal momento in cui nasciamo, le nostre personalità si
            formano sulla base di tanti fattori, quali gli insegnamenti dei
            nostri genitori, la scuola, la società e ogni singola esperienza che
            viviamo. Questo “pacchetto” di informazioni, ereditate o acquisite
            durante la nostra esistenza, creano un sistema di convinzioni e
            credenze. Alcune di queste sono positive per la nostra salute e
            crescita, altre possono essere traumatiche, tossiche e negative,
            causando così infelicità, malattie e problemi.
          </p>
          <p>
            Il ThetaHealing sostiene che vi siano quattro livelli dove queste
            credenze si sviluppano e risiedono nel nostro essere e questi sono:
          </p>
          <ul>
            <li>
              <span>il livello genetico</span>: sono tutte le credenze ereditate
              dai nostri antenati, dalla famiglia e dai genitori. Sono impresse
              nel DNA e vi si può accedere attraverso la ghiandola pineale;
            </li>
            <li>
              <span>il livello “base”</span>: riguarda le credenze sviluppatesi
              attraverso la società, ovvero tutti gli insegnamenti che abbiamo
              appreso relazionandoci con la società nella quale cresciamo.
              Queste credenze si depositano nella zona frontale del cervello;
            </li>
            <li>
              <span>il livello dell’anima</span>: sono credenze che formano
              tutto il nostro essere nel suo insieme, rappresentano l’essenza di
              noi e risiedono nel cuore espandendosi lungo tutti i chackra;
            </li>
            <li>
              <span>il livello storico</span>: riguarda le memorie che portiamo
              da vite passate e sono contenute nel campo aurico.
            </li>
          </ul>
          <p>
            <span>
              <Link to="/come-funziona-una-seduta/">
                Lavorare con il ThetaHealing
              </Link>
            </span>{" "}
            significa portare cambiamenti istantanei lavorando su questi quattro
            livelli, simultaneamente o singolarmente, a seconda di dove i
            blocchi risiedono.
          </p>
        </article>
      </Layout>
    </>
  )
}

export default ThetaHealing
