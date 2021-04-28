import React from "react"
import ReactMarkdown from "react-markdown"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
const Prezzo = ({ id, titolo, desc, link, descLink }) => {
  const location = useLocation()

  const english = location.pathname.includes("en")

  return (
    <div id={id || null} className="prezzi-container">
      <h2>{titolo}</h2>
      {link && (
        <div style={{ display: "grid", placeItems: "center" }}>
          <Link
            to={link}
            style={{ textTransform: "capitalize", textDecoration: "underline" }}
          >
            {descLink}
          </Link>
        </div>
      )}

      <ReactMarkdown
        className={english ? "sezione-prezzi dollar" : "sezione-prezzi"}
      >
        {desc}
      </ReactMarkdown>
      <div className="underline"></div>
    </div>
  )
}

export default Prezzo
