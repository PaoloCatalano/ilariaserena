import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"

const News = ({ home }) => {
  const { all, latest } = useStaticQuery(graphql`
    {
      all: allContentfulNews(sort: { fields: updatedAt, order: DESC }) {
        nodes {
          createdAt(formatString: "MMMM Do YYYY")
          c: childContentfulNewsContenutoTextNode {
            contenuto
          }
        }
      }
      latest: allContentfulNews(
        sort: { fields: updatedAt, order: DESC }
        limit: 1
      ) {
        nodes {
          createdAt(formatString: "MMMM Do YYYY")
          c: childContentfulNewsContenutoTextNode {
            contenuto
          }
        }
      }
    }
  `)
  const oneNews = latest.nodes
  const allNews = all.nodes
  console.log(oneNews[0].c.contenuto)
  return (
    <div className="news">
      <h1 className="news-title">{`${
        home ? "dixcorso latest news" : "news"
      }`}</h1>
      <div className="news-contenuto">
        {home ? (
          <article>
            <ReactMarkdown linkTarget="_blank">
              {oneNews[0].c.contenuto}
            </ReactMarkdown>
            <section>{oneNews[0].createdAt}</section>
          </article>
        ) : (
          allNews.map((news, index) => {
            console.log(news.c.contenuto)

            return (
              <article key={index}>
                <ReactMarkdown linkTarget="_blank">
                  {news.c.contenuto}
                </ReactMarkdown>
                <section>{news.createdAt}</section>
              </article>
            )
          })
        )}
      </div>
      {home && (
        <Link to="/crescita-evoluzione/#allNews" className="allNews-link">
          ALL NEWS
        </Link>
      )}
    </div>
  )
}

export default News
