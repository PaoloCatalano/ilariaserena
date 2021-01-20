import React from "react"
import Layout from "../../components/Layout"
import Card from "../../components/Card"
import SEO from "../../components/Seo"

const prezzi = () => {
  const title = "Prices"
  return (
    <>
      <SEO
        title={title}
        description={`${title} | Welcome to my website and thank you for choosing it and wanting to know more about ThetaHealing!`}
        lang="en"
      />
      <Layout title={title} position={5} lang={true}>
        <article className="prezzi">
          <h2>READY FOR A CHANGE?</h2>
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
          <article className="body">
            <ul className="prezzi">
              <li>
                A session last about 60 minutes and can be done in person, over
                the phone or video chat.
              </li>
              <li>
                All you will need to do is to be in a comfortable position and
                just relax.
              </li>
          <div id='sound' ></div>
              <li>
                I recommend you to drink plenty of water on the day of the
                session, it will helps your body to stay clean to accept a
                deeper healing.
              </li>
            </ul>
          </article>
          <h2>Terapia del Diapason</h2>
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
          <article className="body">
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
