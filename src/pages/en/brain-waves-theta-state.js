import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import PiumaLogo from "../../components/PiumaLogo"
import { Link, useStaticQuery, graphql } from "gatsby"

const brainWavesThetaState = () => {
  const title = "States and Waves"
  const link = "/onde-cerebrali-stato-theta/"
  return (
    <>
      {" "}
      <SEO
        title={title}
        description={`${title} | Brain activity consists of a massive exchange of information between neurons which emit different frequencies based on the cognitive states. These frequencies are categorized into five main states corresponding to the different levels of consciousness and awareness. Theta waves, Alpha waves, Beta waves, Gamma waves, Delta waves`}
      />
      <Layout title={title} link={link} lang>
        <article className="body padding1">
          <div className="center-grid">
            <PiumaLogo />
          </div>
          <div className="padding-center">
            <p>
              <span>Theta State and other brain waves</span>
            </p>
            <p className="padding1">
              Brain activity consists of a massive exchange of information
              between neurons which emit different frequencies based on the
              cognitive states. These frequencies are categorized into five main
              states corresponding to the different levels of consciousness and
              awareness.
            </p>
            <p>
              <strong className="blue">Theta state</strong> is experienced
              during deep meditation, deep relaxation, dreaming and hypnotic
              state. Its frequency is between 4 and 7 Hz. In Theta state, we are
              able to connect with the subconscious part of ourself from an
              intuitive prospective. This state is a powerful tool for
              manifesting.
            </p>
            <p>
              <strong className="blue">Beta waves</strong> are emitted when we
              are alert: we are in Beta state while reasoning and using logic,
              when we are focused on the outside world and while performing
              cognitive tasks. Beta weaves’s frequency is between 14 and 28 Hz
              (cycles per second).
            </p>
            <p>
              <strong className="blue">Alpha brain waves</strong> are
              experienced when we meditate, when our mind is calm and resting.
              For instance, during guided meditation, focusing on visualization,
              we emit Alpha brain waves. The frequency is between 7 and 14 Hz.
            </p>
            <p>
              <strong className="blue">Gamma waves</strong>: these brainwaves
              have a very high frequency and are very beneficial to humans. We
              emit them while learning and processing informations. The
              frequency of this state is between 40 and 5.000 HZ. While emitting
              Delta waves, we experience feelings like happiness, empathy,
              compassion and love for everything and everyone. In this state, we
              are also capable of enhancing our memory and physical performance.
            </p>
            <p>
              <strong className="blue">Delta waves</strong> are experienced
              during deepest meditation and deep sleep and represent a state
              where healing has space to take place in the body. We also emit
              Delta waves when experiencing synchronicity: for instance the
              phone is ringing and somehow we know who is calling. We think of
              someone that we haven’t see in a while and we suddenly meet
              her/him. During this state, our brainwaves are slow to a frequency
              of 0 to 4 Hz.
            </p>
            <p>
              <span>
                {" "}
                <Link to="/en/what-is-thetahealing/#links">
                  Back to ThetaHealing®
                </Link>{" "}
              </span>
            </p>
          </div>
        </article>
      </Layout>
    </>
  )
}

export default brainWavesThetaState
