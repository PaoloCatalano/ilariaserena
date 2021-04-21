import React from "react"
import ReactMarkdown from "react-markdown"

const Prezzo = ({ id, titolo, desc }) => {
  return (
    <div id={id || null} className="prezzi-container">
      <h2>{titolo}</h2>
      <ReactMarkdown className="sezione-prezzi">{desc}</ReactMarkdown>
      <div className="underline"></div>
    </div>
  )
}

export default Prezzo
