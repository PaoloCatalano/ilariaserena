import React, { useState } from "react"
import { IoIosArrowDropupCircle } from "react-icons/io"

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false)
    }
  }

  const checkWindow = () => {
    if (typeof window !== "undefined") {
      return window.pageYOffset
    }
  }

  let windowChecked = checkWindow()

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  //   if (typeof window === "undefined") {
  //     window.pageYOffset = 0
  //   }

  React.useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
    return () => {
      window.removeEventListener("scroll", checkScrollTop)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    windowChecked,
    /**NO window.pageYOffset, because window is not defined */
  ])

  return (
    <div className="scroll-container">
      <IoIosArrowDropupCircle
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      />
    </div>
  )
}

export default ScrollArrow
