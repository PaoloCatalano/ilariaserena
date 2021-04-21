import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        siteDesc: description
        image
        url
        siteTitle: title
        FacebookUsername
        InstagramUsername
      }
    }
  }
`

const SEO = ({ title, description, lang }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDesc,
    image,
    url,
    siteTitle,
    FacebookUsername,
    InstagramUsername,
  } = site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{ lang: `${lang || "it"}` }}
      title={`${siteTitle} | ${title}`}
    >
      <meta
        name="description"
        content={`${siteTitle} | ${description} | ${siteDesc}`}
      />
      <meta name="image" content={image} />
      <meta name="facebookUsername" content={FacebookUsername} />
      <meta name="instagramUsername" content={InstagramUsername} />
      <link rel="alternate" hreflang="en" href={`${url}/en/`} />
      <link rel="alternate" hreflang="it" href={`${url}`} />
    </Helmet>
  )
}

export default SEO
