import React from "react"
import { BiEuro } from "react-icons/bi"
const Carta = ({title, price, once, subtitle}) => {
  return (
    <div className="card">

      <div className="card-title">
        <h3> {title}</h3>
      </div>

      <div className="card-price">
        <BiEuro className="icon" />
        <div className='numero'>{price}</div>
        <div className="zeri">00</div>
        {once && <div className='once'>una volta</div>}
      </div>

      <div className="card-subtitle">{subtitle}</div>
    </div>
  )
}


export default Carta
