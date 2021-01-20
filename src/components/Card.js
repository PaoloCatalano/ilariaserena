import React from "react"
import { BiDollar } from "react-icons/bi"
const Card = ({ title, price, once, subtitle }) => {
  return (
    <div className="card">
      <div className="card-title">
        <h3> {title}</h3>
      </div>

      <div className="card-price">
        <BiDollar className="icon" />
        <div className="numero">{price}</div>
        <div className="zeri">00</div>
        {once && <div className="once">once</div>}
      </div>

      <div className="card-subtitle">{subtitle}</div>
    </div>
  )
}

export default Card
