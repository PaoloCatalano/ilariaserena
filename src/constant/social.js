import React from "react"
import { FaWhatsapp } from "react-icons/fa"
import { ImFacebook2, ImSoundcloud } from "react-icons/im"
import { FiMail } from "react-icons/fi"
import { FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa"

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
  {
    id: 5,
    text: "Ilaria Serena",
    url: "https://www.youtube.com/channel/UCo5aa85y9T09lGR-9iE8LOA/videos",
    icon: <FaYoutube className="icon" />,
  },
  {
    id: 6,
    text: "@ilaria_serena",
    url: "https://t.me/ocxid",
    icon: <FaTelegram className="icon" />,
  },
  {
    id: 7,
    text: "larry-lee-spears",
    url: "https://soundcloud.com/larry-lee-spears",
    icon: <ImSoundcloud className="icon" />,
  },
]

const tempSocials = socials.map(({ id, text, url, icon }) => {
  return (
    <li key={id}>
      <a href={url} className="a-social">
        {icon}
        {text}
      </a>
    </li>
  )
})
export default () => {
  return <ul>{tempSocials}</ul>
}
