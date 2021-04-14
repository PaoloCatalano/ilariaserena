import React, { useEffect, useRef } from "react"
const Symbol = ({ symbol, title }) => {
  const elementRef = useRef(null)
  const checkWindow = () => {
    if (typeof window !== "undefined") {
      return window.pageYOffset
    }
  }
  const checkScroll = () => {
    if (window.pageYOffset > elementRef.current.offsetTop - 400) {
      elementRef.current.classList.add("effect")
    } else elementRef.current.classList.remove("effect")
  }
  useEffect(() => {
    window.addEventListener("scroll", checkScroll)
    return () => {
      window.removeEventListener("scroll", checkScroll)
    }
  }, [checkWindow])
  return (
    <div
      className={`${symbol} title center-grid before-effect`}
      ref={elementRef}
    >
      <h2>{title}</h2>
    </div>
  )
}

export default Symbol
