import React from "react"
import { Link } from "gatsby"

const Service = ({ en, link, title, symbol }) => {
  return (
    <div className="service">
      <Link to={link}>
        <div className="service-back center-grid">
          <p className="service-title">{title}</p>

          <div
            className={`${symbol} service-top title upper center-grid`}
            style={{ backgroundSize: "70%" }}
          >
            <div className="hidden-title upper">{title}</div>
          </div>

          <div className="info center">
            {en ? "more information..." : "per saperne di più..."}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Service
