import React, { useEffect, useRef, useCallback } from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import PiumaLogo from "../../components/PiumaLogo"
import Symbol from "../../components/Symbol"
import sitemap from "../../constant/sitemap"
import News from "../../components/News"

const DixcorsoEN = () => {
  const position = sitemap.dixcorso
  const title = "Dixcorso"
  const zen = useRef(null)
  const cat = useRef(null)
  const mega = useRef(null)

  const checkWindow = useCallback(() => {
    if (typeof window !== "undefined") {
      return window.pageYOffset
    }
  }, [])

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      //cat
      if (window.pageYOffset > cat.current.offsetTop) {
        cat.current.classList.add("giu")
      } else cat.current.classList.remove("giu")
      //zen
      const scroll = window.scrollY
      zen.current.style.transform = `rotate(${scroll}deg)`
      //mega effect
      const fontSize = scroll / 50
      if (
        window.pageYOffset > mega.current.offsetTop - window.innerHeight &&
        fontSize < 60
      ) {
        mega.current.style.fontSize = `${fontSize}px`
      } else {
        mega.current.style.fontSize = `large`
      }
      //end effects
    })
    return () => {
      window.removeEventListener("scroll", event)
    }
    // eslint-disable-next-line
  }, [checkWindow])

  return (
    <>
      <SEO
        title={title}
        lang="en"
        description={`${title} | Hi, my name is Dixcorso! All my friends call me just Dix! They defined me as a "special one… ". The new vision of a personal growth magazine ”sounds almost epochal! Besides, they even proudly renamed me as Mega-Zen. Oh yes, they say that the word ZEN means reflection, thought. And in fact… I like it. I am a mega thought ... I join up similar minds ... but I love science and I want to define myself as a catalyst ... it sounds important and because it causes an increase of a reaction speed, without apparently taking part in it and without changing its balance`}
      />
      <Layout title={title} lang={true} position={position}>
        <article className="body">
          <Symbol symbol="square1" title="The New Dawn Of Communication" />
          <div className="center-grid">
            <div className="padding1 padding-center textAlign">
              <p>
                Hi, my name is Dixcorso! All my friends call me just Dix! They
                defined me as a "special one… ". The new vision of a personal
                growth magazine ”sounds almost epochal! Besides, they even
                proudly renamed me as Mega-Zen. Yes, they say that the word{" "}
                <strong ref={zen} className="blue zen">
                  ZEN
                </strong>{" "}
                <span style={{ color: "white" }}>ZEN</span> means reflection,
                thought. And in fact… I like it. I am a mega thought ... I join
                up similar minds ... but I love science and I want to define
                myself as a{" "}
                <strong className="blue catalizzatore" ref={cat}>
                  catalyst
                </strong>{" "}
                <span style={{ color: "white" }}>catalyst</span>
                ... it sounds important and because it causes an increase of a
                reaction speed, without apparently taking part in it and without
                changing its balance
              </p>

              <p>
                Yes, I feel just like that! I am an irrepressible flow of ideas,
                perspectives, reflections, projects, visions that embrace
                science, philosophy, art, music and culture in general, with a
                single purpose ... to promote harmony, guided by love for
                humanity.
              </p>
              <p>
                Don't laugh, I didn't call myself as a Messiah or a Prophet!
                Hahahaha, I love you! So I'm your follower, your passion for
                life is so great and I am sure you also become emotional. I
                mean… I just want to say that I am a romantic one… I love life
                in all its forms… and it has many. Therefore, with a pleased
                smile I remind you that I am defined a{" "}
                <span ref={mega} className="mega">
                  mega
                </span>{" "}
                thought.
              </p>
            </div>
            <div className="center-grid">
              <PiumaLogo />
            </div>
          </div>
          <div id="allNews"></div>
          <News />
        </article>
      </Layout>
    </>
  )
}

export default DixcorsoEN
