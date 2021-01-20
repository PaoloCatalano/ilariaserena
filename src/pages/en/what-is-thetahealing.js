import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import { useStaticQuery, graphql } from "gatsby"
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

    const position = 1
  const title = "What is ThetaHealing®"
  return (
    <>
      <SEO
        title={title}
        description={`${title} | Welcome to my website and thank you for choosing it and wanting to know more about ThetaHealing!`}
        lang="en"
      />
      <Layout title={title} lang={true} position={position}>
        <article className="body">
          <h2
            style={{
              textTransform: "capitalize",
            }}
          >
            discovering the power of connecting to the creator of all there is
          </h2>
          <p>
            <span>What is ThetaHealing</span>
          </p>
          <p>
            ThetaHealing® is an energy healing technique founded in 1995 by
            Vianna Stibal, in Idaho USA. ThetaHealing is based on meditation and
            direct communication to the Creator of All There Is or Creation
            Energy.
          </p>
          <p>
            Despite of your religious beliefs, there is an intuitive capacity
            that everyone of us is endowed with and that, when used, allows to
            bring and manifest positive changes in life, allowing you to become
            co-creator and director of your own reality.
          </p>
          <p>
            The idea is that when you experience difficulties in life,
            illnesses, disorders, unhappiness or any kind of issue that does not
            allow you to experience life in the way you want, it’s because of
            some blocks, habits or beliefs programs residing in your
            subconscious that are preventing you to experience what you desire.
          </p>
          <p>
            Through the direct communication with Creator, it is possible to
            quickly find out about the root of these blocks, remove them and ask
            for a change to take place by re-programming your being with
            appropriate, life affirming believes.
          </p>
          <p>
            The technique takes the name from the Theta brain waves, a state of
            mind that you experience more often than you think: you are in Theta
            state while asleep or simply while you are lost in thoughts or
            daydreaming…Think for example of when you are sitting in your car
            waiting for the light to turn green and get absorbed by thoughts…
            you are in Theta state! Who practices yoga or meditation experiences
            this state constantly.
          </p>
          <p>
            When applied through the ThetaHealing technique, you learn to use it
            at will and with the aim to consciously heal body, mind and soul.
            The reason why this work is that in Theta state, we are able to
            connect with the inner essence of ourself, that is the Creator
            itself through which we find guidance and answers.
          </p>
          <p>
            <span>The brain waves</span>
          </p>
          <p>
            At the roots of all our thoughts, emotions and behaviors there is
            the communication between neurons within our brain. Masses of
            neurons that communicate to each other emit frequencies and these
            are divided into five types: Beta, Alpha, Theta, Delta and Gamma.
            Each type represents a specific level of brain activity and state of
            consciousness.
          </p>
          <p>
            <strong className="blue">Theta state</strong> is experienced during
            deep meditation, deep relaxation, dreaming and hypnotic state. Its
            frequency is between 4 and 7 Hz. In Theta state, we are able to
            connect with the subconscious part of ourself from an intuitive
            prospective. This state is a powerful tool for manifesting.
          </p>
          <p>
            <strong className="blue">Beta waves</strong> are emitted when we are
            alert: we are in Beta state while reasoning and using logic, when we
            are focused on the outside world and while performing cognitive
            tasks. Beta weaves’s frequency is between 14 and 28 Hz (cycles per
            second).
          </p>
          <p>
            <strong className="blue">Alpha brain waves</strong> are experienced
            when we meditate, when our mind is calm and resting. For instance,
            during guided meditation, focusing on visualization, we emit Alpha
            brain waves. The frequency is between 7 and 14 Hz.
          </p>
          <p>
            <strong className="blue">Gamma waves</strong>: these brainwaves have
            a very high frequency and are very beneficial to humans. We emit
            them while learning and processing informations. The frequency of
            this state is between 40 and 5.000 HZ. While emitting Delta waves,
            we experience feelings like happiness, empathy, compassion and love
            for everything and everyone. In this state, we are also capable of
            enhancing our memory and physical performance.
          </p>
          <p>
            <strong className="blue">Delta waves</strong> are experienced during
            deepest meditation and deep sleep and represent a state where
            healing has space to take place in the body. We also emit Delta
            waves when experiencing synchronicity: for instance the phone is
            ringing and somehow we know who is calling. We think of someone that
            we haven’t see in a while and we suddenly meet her/him. During this
            state, our brainwaves are slow to a frequency of 0 to 4 Hz.
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
            “The happiness of your life depends upon the quality of your
            thoughts”... Marcus Aurelius
          </h2>
          <p>
            <span>The Belief System</span>
          </p>
          <p>
            The way we live life and the choices we make are influenced by the
            way we think and what we believe about ourself, at both conscious
            and unconscious level. Since the moment we are born, our
            personalities are formed and influenced by the teachings of our
            parents, the school, the society and the sum of all the experiences
            we make. This package of informations inherited or acquired during
            life, create a system of convictions in ourselves. Some of them are
            positive and healthy while other can be traumatic and unhealthy,
            leading thus to unhappiness, sickness and dissatisfaction.
          </p>
          <p>
            In ThetaHealing, it is believed that there are four levels where
            these beliefs reside and these are:
          </p>
          <ul>
            <li>
              <span>Genetic level</span>: this is what is passed on to us from
              our ancestors. These are informations contained in our DNA and can
              be accessed through the pineal gland;
            </li>
            <li>
              <span>Core beliefs</span>: these are beliefs that we learn and
              accept as truth during our childhood. They are held in frontal
              lobe of the brain;
            </li>
            <li>
              <span>Soul beliefs</span>: they concerns all what we are. These
              beliefs are carried starting from the heart chackra;
            </li>
            <li>
              <span>History belief</span>: these are held in our auric field and
              concern memories from past lives and collective consciousness.
            </li>
          </ul>
          <p>
            These four levels of beliefs have a huge impact on the reality we
            live because we are what we focus on: the world we live in, is
            offered to us with milliards of possibilities. The only reason why
            we are unable to find the right one for us that makes us happy,
            healthy and fulfilled is because we cannot see them at all if we
            hold beliefs programs that limit our minds. For instance, if you
            carry the program of poverty in your genetic line, you will
            unconsciously only focus on poor choices. Once you change the
            program, you will be able to see the right opportunities for you.
          </p>
          <p>
            This is true regarding health as well. There is no such a thing as
            incurable disease, but there is such a thing as belief about a
            disease.
          </p>
          <p>
            The human body is in a constant state of regeneration, from the
            skeleton to the skin. If you are sick and yet still alive, it is
            because your body is regenerating and working constantly to find the
            right balance to function. What is than that causes sickness? It is
            what we believe and think about our sickness at conscious and
            unconscious level. Every disease starts at emotional level. If you
            think about it, all the emotions that you experience in your life
            affect your body because every thought and emotion is processed by
            the nervous system which is connected to all the organs of the body.
          </p>
          <p>
            When you experience stress, this is transmitted through all your
            body. All the emotions, transmitted through the nervous system to
            all the organs, produce a chemistry in the body: positive emotions
            produce chemicals that enhance life and strengthen the immune
            system, while negative emotions produce chemicals that reduce life,
            weaken the immune response and cause sickness.
          </p>
        </article>
      </Layout>
    </>
  )
}

export default ThetaHealing
