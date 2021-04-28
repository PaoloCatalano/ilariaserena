import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import sitemap from "../../constant/sitemap"
import Symbol from "../../components/Symbol"

import PiumaLogo from "../../components/PiumaLogo"

const Tuning_Fork = () => {
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
  const title = "Sound"

  return (
    <>
      <SEO
        title={title}
        description={`${title}| Therapeutic Tuning Forks emit beneficial frequencies for the mind
            and the body, overall restoring vital energy to the cells and
            promoting optimal biological activity. The human body, indeed, through its biological activity, produce
            electromagnetic waves, thus frequencies. When an individual suffers
            of a pathology, of stress conditions or any kind of issue that
            compromise the optimal function of its systems, the frequencies
            emitted by the body, become “dissonant”. This is also due to
            electromagnetic radiations and geophysical influences of the
            environment. Applying tuning forks , the dissonance can be restored
            to a harmonic sound.`}
        lang="en"
      />
      <Layout title={title} lang={true} position={position}>
        <article className="body">
          <Symbol
            symbol="ottagono1"
            title="Restore health, harmony and interior balance."
          />
          <div className="col-2 center-grid">
            <div className="padding1 padding-left">
              <p>
                Tuning forks are tools used to produce persistent, simple and
                harmonic sounds. They are the source of a range of sounds that
                vibrate at specific frequencies.
              </p>

              <p>
                You may already know the tuning fork used to tune musical
                instruments, like guitar. This fork vibrates at 440 Hz, the
                frequency of the A note.
              </p>
              <p>
                Therapeutic Tuning Forks emit beneficial frequencies for the
                mind and the body, overall restoring vital energy to the cells
                and promoting optimal biological activity.
              </p>

              <p>
                The human body, indeed, through its biological activity, produce
                electromagnetic waves, thus frequencies. When an individual
                suffers of a pathology, of stress conditions or any kind of
                issue that compromise the optimal function of its systems, the
                frequencies emitted by the body, become “dissonant”. This is
                also due to electromagnetic radiations and geophysical
                influences of the environment. Applying tuning forks , the
                dissonance can be restored to a harmonic sound.
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
                alt="Ilaria Serena tuning fork soundtherapy"
                fadeIn={true}
                backgroundColor="white"
              />
            </div>
            <div className="padding1 padding-right">
              <p>
                The type I use for my practice is called{" "}
                <strong>Sonic Slider</strong> (on picture). It is custom made by
                the American sound therapist{" "}
                <a
                  href="https://www.eileenmckusick.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eileen Day McKusick
                </a>
                . This tuning fork is tuned on the 12th harmonics (93.96 Hz) of
                the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Schumann_resonances"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schumann Resonances
                </a>
                , which is, of the waves spectrum, the frequency of our
                atmosphere ( on average, 7.83 Hz).
              </p>
              <p>
                {" "}
                The benefits of the therapy with Sonic slider are multiple:
              </p>
              <p>
                stress relief improves mood general sense of well-being
                alleviates pain improves health conditions relieves emotional
                issues treats skin issues improves muscle tone conditions
                improves headache, teeth grinding, sinus pressure supports the
                functions of all systems in the body (digestive, nervous,
                endocrine etc…)
              </p>
            </div>
          </div>
          <div className="crazy1 title center-grid">
            <h2>Info and prices for a Tuning Fork Session</h2>
          </div>
          <div className="padding1 padding-center">
            <p>
              A session lasts about 35/40 minutes. The number of sessions needed
              depends on your response to each experience. In general, if you
              are new to this therapy, I may suggest to start with three
              sessions, once a week. I believe that the benefits are immediate,
              but the first session seems to be mostly to get to know what is
              all about, the second one helps familiarizing with the experience,
              and than, during the third one, you are able to completely thrust
              the tuning fork and receive the deepest possible benefits from it.
            </p>
            <div className="padding1">
              <p>
                <span>
                  <Link to="/en/prices/#soundTherapy">
                    Discover all the prices for an ONLINE session.
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

export default Tuning_Fork
