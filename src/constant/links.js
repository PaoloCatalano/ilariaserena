import React from "react"
import { Link } from "gatsby"
import flag from '../assets/us.png'
import { linksEn } from "../constant/links-en"


export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "che cosa è thetaHealing",
    url: "/che-cosa-è-thetaHealing/",
  },
  {
    id: 3,
    text: "come funziona una seduta",
    url: "/come-funziona-una-seduta/",
  },
  {
    id: 4,
    text: "la mia storia",
    url: "/la-mia-storia/",
  },
  {
    id: 5,
    text: "La Terapia del Diapason",
    url: "/la-terapia-del-diapason/",
  },
  {
    id: 6,
    text: "prezzi",
    url: "/prezzi/",
  },
  {
    id: 7,
    text: "calendario disponibilità",
    url: "/calendario-disponibilità/",
  },
]
//mappare ogni elemnto dell'array links
const tempLinks = links.map(link => {
  return (
    <li key={link.id}>
      <Link
        to={link.url}
        activeStyle={{ color: "#efc46d", fontWeight: "bold" }}
      >
        {link.text}
      </Link>
    </li>
  )
})

export default ({position}) => {
  return (
    <ul className="links">
      {tempLinks}
      <li>
        <Link to={linksEn[position].url} style={{ display: "inline-flex" }}>
          <img
            src={flag}
            alt="english flag"
            style={{ width: 31, height: 16.3, margin: "1px 10px 5px 0" }}
          />
          english
        </Link>
      </li>
    </ul>
  )
}

