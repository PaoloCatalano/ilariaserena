import React from "react"
import { Link } from "gatsby"
// import { linksEn } from "../constant/links-en"

export const linksIt = [
  {
    text: "home",
    url: "/",
  },
  {
    text: "thetaHealing",
    url: "/che-cosa-è-thetaHealing/",
  },
  {
    text: "dixcorso",
    url: "/crescita-evoluzione/",
  },
  {
    text: "suonoterapia",
    url: "/la-terapia-del-diapason/",
  },
  {
    text: "prezzi",
    url: "/prezzi/",
  },
]
export const linksEn = [
  {
    text: "home",
    url: "/en/home/",
  },
  {
    text: "ThetaHealing",
    url: "/en/what-is-thetahealing/",
  },
  {
    text: "dixcorso",
    url: "/en/growth-evolution/",
  },
  {
    text: "soundtherapy",
    url: "/en/tuning-fork-sound-therapy/",
  },
  {
    text: "prices",
    url: "/en/prices/",
  },
]

//mappare ogni elemnto dell'array links

export default ({ position, link, en }) => {
  const [translation, settranslation] = React.useState("/404/")
  const [links, setlinks] = React.useState(linksIt)

  React.useEffect(() => {
    if (link) {
      settranslation(link)
    }

    if (position || position === 0) {
      settranslation(linksEn[position].url)
    }
    if ((position || position === 0) && en) {
      settranslation(linksIt[position].url)
    }
    if (en) {
      setlinks(linksEn)
    }
  }, [link, position, en])

  //navbar
  const tempLinks = links.map((link, index) => {
    return (
      <li key={index}>
        <Link to={link.url} activeStyle={{ color: "#a88b13" }}>
          {link.text}
        </Link>
      </li>
    )
  })

  //navbar + bottone lingua
  return (
    <>
      <ul className="links">{tempLinks}</ul>
      <div className="underline"></div>

      <Link to={translation} className="center-grid center-text upper">
        {!en ? "en" : "it"}
      </Link>
    </>
  )
}
