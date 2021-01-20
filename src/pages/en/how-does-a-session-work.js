import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
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
     const position = 2
  const title = "How does a session work"
  return (
    <>
      <SEO
        title={title}
        description={`${title} | Welcome to my website and thank you for choosing it and wanting to know more about ThetaHealing!`}
        lang="en"
      />
      <Layout title={title} position={position} lang={true}>
        <article className="body">
          <p>
            <span>How does a session work</span>
          </p>
          <p>
            During a{" "}
            <span>
              <Link to="/en/what-is-thetahealing/">ThetaHealing</Link>
            </span>{" "}
            session, we will start with a quick guided meditation in order to
            reach the theta state. From there, we will work on the issues that
            you want to resolve, asking Creator for guidance to find out the
            bottom program or belief that is holding you back. At this point,
            with your permission, I will than ask for it to be removed and
            substitute with the right one that will allow the desired changes to
            manifest in your reality.
          </p>
          <p>
            <span>How long does it take for a sessions to work?</span>
          </p>
          <p>
            The healing and the changes that are brought through ThetaHealing®
            happen instantaneously, but the times that it takes for you to
            become aware of it depends on how ready your are to bring them into
            your life. Sometime you will notice instant changes, sometime it
            will take you some days before to notice a change.
          </p>
          <p>
            ThetaHealing is a growing path where you learn to understand who you
            truly are and one of the most amazing things about it is that you
            will discover that your mind, body and soul have always positive
            reasons why they are holding on a block, a disease or a belief
            program. You will understand that all what you create in your life
            always serves you to a purpose.
          </p>
          <p>
            <span>What ThetaHealing can do for you</span>
          </p>
          <p>
            ThetaHealing can help you to quickly identify the programs that are
            not serving you in a positive way and with your permission, they can
            be removed.
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
            Experiencing Thetahealing, you will embrace a journey of discovery
            of your true-self and you will create space for it to express; you
            will realize that all things you wish are possible to achieve.
          </p>
          <p>
            You will also learn how amazing your body, mind and soul are. You
            will be able to see that everything has happened to you has its
            purpose and you will be able to appreciate every single things about
            yourself.
          </p>
        </article>
      </Layout>
    </>
  )
}

export default Seduta
