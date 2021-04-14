import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import sitemap from "../../constant/sitemap"

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
  const position = sitemap.crescita
  const title = "Growth"
  return (
    <>
      <SEO
        title={title}
        description={`${title} | Welcome to my website and thank you for choosing it and wanting to know more about ThetaHealing!`}
        lang="en"
      />
      <Layout title={title} lang={true} position={position}>
        <article className="body">
          <p>
            <span>My personal story</span>
          </p>
          <p>
            My journey with{" "}
            <span>
              <Link to="/en/what-is-thetahealing/">ThetaHealing</Link>
            </span>{" "}
            started in 2012, when I attended the first class called “Basic DNA”
            in Colorado, USA. I enjoyed ThetaHealing but I was a timid
            practitioner for a while. It was in 2017 that I started to truly
            understand the benefits of it. That year, I was diagnosed with an
            autoimmune disease called Grave’s disease which affects the thyroid
            gland. What happens with Grave’s disease, it that the immune system
            starts to attack the thyroid gland, causing an over production of
            hormones, with potential serious risks for the overall health of the
            body. The thyroid affects the function of all the organs in the
            body, it causes toxicity and in the worst cases, it can lead to
            death
          </p>
          <p>
            Before this diagnose, I had never heard of this type of disease. I
            knew what the thyroid is, but I had no idea of how this tiny organ
            is in control of so many things in the body: metabolism, hormones,
            mood, brain performance, memory and body functions: in few words, I
            had noticed that I was feeling out of control and, discovering more
            about the thyroid gland, I stared to understand why I was going
            through such a difficult time.
          </p>
          <p>
            After few weeks of starting medical treatment, the doctors had
            already planned for me the removal of the organ: it seemed to them
            to be the most natural thing to do. I was supposed to live for the
            rest of my life taking a pill of artificial hormones once a day in
            order to replace the thyroid function.
          </p>
          <p>
            My life depending from a pill? I was shocked, especially because
            what was really going on with the gland was an inflammation. How can
            my body be incapable to recover from an inflammation? I refused to
            remove my thyroid.
          </p>
          <p>
            I than started to experience all kind of treatments: homeopathy,
            natural medicine, acupuncture, food supplements and more. I even
            went to a lady’s house that would charge me 700 Euros a day to
            follow up with a program to heal my disease but nothing, absolutely
            nothing was working.
          </p>
          <p>
            It was only when I deeply embraced the ThetaHealing journey that I
            started to discover the reason why I couldn’t heal. I was holding
            inside so many believes that were not serving me in a positive,
            healthy way. Most of them where coming from my family and from
            other’s people opinion about me. I was unable to express my true
            self and be myself with my own opinion. I was pleasing others all
            the time. My mom was suspicious about alternative medicine and
            everyone around me was so concerned that I could die and I was
            trying so hard to choose my own path , but because I thought I had
            to please others, my personal opinion did not count. I was
            sabotaging myself all the time. I was involved in love relationship
            that were empty and lacking of true appreciation and respect. This
            was all because I did not know my value and did not know how to love
            myself and appreciate who I am.
          </p>
          <p>
            When I than started the journey of clearing beliefs about myself, I
            started to see enormous changes
          </p>
          <p>
            My thyroid condition improved dramatically and most of all, I
            experienced a profound change in my personality. I finally started
            to discover who I am, what I desire and how to get it. I have come
            to the realization that I am not a victim of the outside world but I
            am creating my own reality and I can at will create anything I want
            and be anything I want.
          </p>
          <div className="center">
            <Img
              className="img"
              fluid={allPics.pics.nodes[position].picture.fluid}
              alt="Ilaria Serena"
              fadeIn={true}
            />
          </div>
          <p>
            For me, undertaking ThetaHealing has been a journey of
            self-discovery that brought me to feel happy and grateful, powerful,
            healthy and free.
          </p>
        </article>
      </Layout>
    </>
  )
}

export default Storia
