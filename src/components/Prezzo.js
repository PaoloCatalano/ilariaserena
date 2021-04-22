import React from "react"
import ReactMarkdown from "react-markdown"
import { useLocation } from "@reach/router"

const Prezzo = ({ id, titolo, desc }) => {
  const location = useLocation()

  const english = location.pathname.includes("en")

  return (
    <div id={id || null} className="prezzi-container">
      <h2>{titolo}</h2>
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
