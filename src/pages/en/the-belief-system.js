import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import PiumaLogo from "../../components/PiumaLogo"

const theBeliefSystem = () => {
  const link = "/sistema-credenze/"
  const title = "Belief System"
  return (
    <>
      <SEO
        title={title}
        description={`${title} |  The way we live life and the choices we make are influenced by the
            way we think and what we believe about ourself, at both conscious
            and unconscious level. Since the moment we are born, our
            personalities are formed and influenced by the teachings of our
            parents, the school, the society and the sum of all the experiences
            we make. This package of informations inherited or acquired during
            life, create a system of convictions in ourselves. Some of them are
            positive and healthy while other can be traumatic and unhealthy,
            leading thus to unhappiness, sickness and dissatisfaction.`}
      />
      <Layout title={title} link={link} lang>
        <article className="body">
          <div className="center-grid">
            <PiumaLogo />
          </div>
          <div className="padding-center">
            <p>
              <span>The Belief System</span>
            </p>
            <p className="padding1">
              The way we live life and the choices we make are influenced by the
              way we think and what we believe about ourself, at both conscious
              and unconscious level. Since the moment we are born, our
              personalities are formed and influenced by the teachings of our
              parents, the school, the society and the sum of all the
              experiences we make. This package of informations inherited or
              acquired during life, create a system of convictions in ourselves.
              Some of them are positive and healthy while other can be traumatic
              and unhealthy, leading thus to unhappiness, sickness and
              dissatisfaction.
            </p>
            <p>
              In{" "}
              <span>
                <Link to="/en/what-is-thetahealing/">ThetaHealing</Link>
              </span>
              , it is believed that there are four levels where these beliefs
              reside and these are:
            </p>
            <ul className="margin1 padding1">
              <li>
                <span>Genetic level</span>: this is what is passed on to us from
                our ancestors. These are informations contained in our DNA and
                can be accessed through the pineal gland;
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
                <span>History belief</span>: these are held in our auric field
                and concern memories from past lives and collective
                consciousness.
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
              because your body is regenerating and working constantly to find
              the right balance to function. What is than that causes sickness?
              It is what we believe and think about our sickness at conscious
              and unconscious level. Every disease starts at emotional level. If
              you think about it, all the emotions that you experience in your
              life affect your body because every thought and emotion is
              processed by the nervous system which is connected to all the
              organs of the body.
            </p>
            <p>
              When you experience stress, this is transmitted through all your
              body. All the emotions, transmitted through the nervous system to
              all the organs, produce a chemistry in the body: positive emotions
              produce chemicals that enhance life and strengthen the immune
              system, while negative emotions produce chemicals that reduce
              life, weaken the immune response and cause sickness.
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

export default theBeliefSystem
