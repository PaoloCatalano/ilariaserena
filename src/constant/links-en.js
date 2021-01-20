import React from "react"
import { Link } from "gatsby"
import flag from "../assets/it.png"
import {links} from "../constant/links"


export const linksEn = [
  {
    id: 1,
    text: "home",
    url: "/en/home/",
  },
  {
    id: 2,
    text: "what is ThetaHealing",
    url: "/en/what-is-thetahealing/",
  },
  {
    id: 3,
    text: "how does a session work",
    url: "/en/how-does-a-session-work/",
  },
  {
    id: 4,
    text: "My personal story",
    url: "/en/my-personal-story/",
  },
  {
    id: 5,
    text: "Tuning Fork Sound Therapy",
    url: "/en/tuning-fork-sound-therapy/",
  },
  {
    id: 6,
    text: "prices",
    url: "/en/prices/",
  },
  {
    id: 7,
    text: "availability calendar",
    url: "/en/availability-calendar/",
  },
]
//mappare ogni elemnto dell'array En
const tempLinks = linksEn.map(link => {
  return (
    <li key={link.id}>
      <Link
        to={link.url}
        activeStyle={{ color: "#efc46d", fontWeight: "bold" }}

        id={link.id}
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
        <Link
          to={links[position].url}
          style={{ display: "inline-flex" }}
        >
          <img
            src={flag}
            alt="italian flag"
            style={{ width: 31, height: 16.3, margin: "1px 10px 5px 0" }}
          />
          italiano
        </Link>
      </li>
    </ul>
  )
}
