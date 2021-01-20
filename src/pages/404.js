import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/Seo"


const ErrorPage = () => {
  const title = "404 Error Page"
    return (
      <>
        <SEO title={title} description={title} />
        <Layout title={title} position={0}>
          <article className="body">
            <h2> La pagina non esiste </h2>
            <h2> This page doesn't exist </h2>
          </article>
        </Layout>
      </>
    )
}

export default ErrorPage
