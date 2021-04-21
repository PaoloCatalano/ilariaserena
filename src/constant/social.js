import React from "react"
import { FaWhatsapp } from "react-icons/fa"
import { ImFacebook2 } from "react-icons/im"
import { FiMail } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa"


const email = "ilariaserenag@gmail.com"
const number = "393701535245"

export const socials = [
  {
    id: 1,
    text: `${email}`,
    url: `<mailto:$>email</mailto:$>`,
    icon: <FiMail className="icon" />,
  },
  {
    id: 2,
    text: `+${number}`,
    url: `https://wa.me/${number}`,
    icon: <FaWhatsapp className="icon" />,
  },
  {
    id: 3,
    text: "Ilaria Serena",
    url: "https://www.facebook.com/ilaria.serena.904",
    icon: <ImFacebook2 className="icon" />,
  },
  {
    id: 4,
    text: "ilari.ah",
    url: "https://www.instagram.com/ilari.ah",
    icon: <FaInstagram className="icon" />,
  },
]

const tempSocials = socials.map(({id, text, url, icon}) => {
  return (
    <li key={id}>
      <a
        href={url}
      >
          {icon}
      </a>
        {text}
    </li>
  )
})
export default () => {
  return (
    <ul>
      {tempSocials}
    </ul>
  )
}
