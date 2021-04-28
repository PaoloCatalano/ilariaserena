import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"

const News = ({ home, homeEN }) => {
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
  return (
    <div className="news">
      <h1 className="news-title">{`${
        home ? "dixcorso latest news" : "news"
      }`}</h1>
      <div className="news-contenuto">
        {home ? (
          <article>
            <div className="markdown">
              <ReactMarkdown linkTarget="_blank">
                {oneNews[0].c.contenuto}
              </ReactMarkdown>
            </div>
            <section>{oneNews[0].createdAt}</section>
          </article>
        ) : (
          allNews.map((news, index) => {
            return (
              <article key={index}>
                <div className="markdown">
                  <ReactMarkdown linkTarget="_blank">
                    {news.c.contenuto}
                  </ReactMarkdown>
                </div>
                <section>{news.createdAt}</section>
              </article>
            )
          })
        )}
      </div>
      {home &&
        (homeEN ? (
          <Link to="/en/dixcorso/#allNews" className="allNews-link">
            ALL NEWS
          </Link>
        ) : (
          <Link to="/dixcorso/#allNews" className="allNews-link">
            TUTTE LE NEWS
          </Link>
        ))}
    </div>
  )
}

export default News
