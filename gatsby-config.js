/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: "Ilaria Serena",
    description:
      "Trasforma, Guarisci, Crea la vita che sogni. Benvenuti sulla mia pagina web. Grazie per aver scelto di voler scoprire di più sul ThetaHealing! A prescindere da quanto questa tecnica sia quella giusta per te,hai rappresenta un passo importantissimo! Hai deciso di aprirti al cambiamento, di guarire, di crescere e di realizzare i tuoi desideri per davvero!",
    url: "https://ilariaserena.netlify.app", // No trailing slash allowed!
    image: "/Header.png", // Path to your image you placed in the 'static' folder
    FacebookUsername: "Ilaria Serena",
    InstagramUsername: "ilari.ah",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `n1y5p4gy06kl`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
