import React from "react"

const Audio = ({
  title,
  contentfulid: id,
  duration,
  track: { file: audio },
}) => {
  const { contentType, fileName, url } = audio
  return (
    <div>
      <figcaption>
        {id}. <strong className="blue"> {title}</strong> |{" "}
        <span style={{ color: "var( --grigio-medio)" }}>{duration} min</span>
      </figcaption>

      <audio controls name={fileName}>
        <source src={url} type={contentType} />
        <track src={url} kind="captions" srcLang="it" label={title} />
        Sorry, your browser doesn't support embedded audio.
      </audio>
    </div>
  )
}

export default Audio
