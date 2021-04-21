import React from "react"
import Layout from "../../components/Layout"
import Card from "../../components/Card"
import SEO from "../../components/Seo"
import sitemap from "../../constant/sitemap"

const prezzi = () => {
  const position = sitemap.prezzi
  const title = "Prices"
  return (
    <>
      <SEO
        title={title}
        description={`${title} | Welcome to my website! READY FOR A CHANGE?`}
        lang="en"
      />
      <Layout title={title} position={position} lang={true}>
        <article className="prezzi body">
          <div className="center-grid">
            <h2>READY FOR A CHANGE?</h2>
          </div>
          <div id="thetaHealing"></div>
          <div className="circle2 title center-grid">
            <h2>thetaHeiling</h2>
          </div>
          <section className="contenitore-card">
            <Card
              title="TethaHealing Once"
              price="81"
              once={true}
              subtitle="One Hour Session"
            />
            <Card
              title="ThetaHealing Package"
              price="195"
              once={false}
              subtitle="Three Sessions Package"
            />
          </section>
          <article className="sezione-prezzi">
            <ul className="prezzi">
              <li>
                A session last about 60 minutes and can be done in person, over
                the phone or video chat.
              </li>
              <li>
                All you will need to do is to be in a comfortable position and
                just relax.
              </li>
              <div id="sound"></div>
              <li>
                I recommend you to drink plenty of water on the day of the
                session, it will helps your body to stay clean to accept a
                deeper healing.
              </li>
            </ul>
          </article>
          <div id="growth"></div>
          <div className="square1 title center-grid">
            <h2>Growth</h2>
          </div>
          <section className="contenitore-card">
            <Card
              title="Growth Evolution Once"
              price="81"
              once={true}
              subtitle="One Hour Session"
            />
            <Card
              title="Growth Evolution Package"
              price="195"
              once={false}
              subtitle="Three Sessions Package"
            />
          </section>
          <article className="sezione-prezzi">
            <ul className="prezzi">
              <li>
                A session last about 60 minutes and can be done in person, over
                the phone or video chat.
              </li>
              <li>
                All you will need to do is to be in a comfortable position and
                just relax.
              </li>
              <li>
                I recommend you to drink plenty of water on the day of the
                session, it will helps your body to stay clean to accept a
                deeper healing.
              </li>
            </ul>
          </article>
          <div id="soundTherapy"></div>
          <div className="cube1 title center-grid">
            <h2> soundTherapy</h2>
          </div>
          <section className="contenitore-card">
            <Card
              title="Sound Therapy (One Session)"
              price="20"
              once={true}
              subtitle="About 30 minutes"
            />
            <Card
              title="Sound Therapy Package"
              price="60"
              once={false}
              subtitle="Three Sessions Package"
            />
          </section>
          <article className="sezione-prezzi">
            <ul className="prezzi">
              <li>
                A session last about 30 minutes and can be done in person, over
                the phone or video chat.
              </li>
              <li>
                All you will need to do is to be in a comfortable position and
                just relax.
              </li>
            </ul>
          </article>
        </article>
      </Layout>
    </>
  )
}

export default prezzi
