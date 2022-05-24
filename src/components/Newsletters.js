import React from "react"
import { RiMailSendLine } from "react-icons/ri"

const Newsletters = ({ en }) => {
  return (
    <div className="newsletter">
      <div className="newletter-title">
        <RiMailSendLine className="icon" />
        <label htmlFor="email-address">
          {en ? "Subscribe to my Newsletter" : "Iscriviti alla mia Newsletter"}
        </label>
      </div>
      <form
        id="fs-frm"
        name="simple-contact-form"
        acceptCharset="utf-8"
        action="https://formspree.io/f/mbjpwgrz"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="example@email.eg"
            required
          />
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <input type="submit" value={en ? "Send" : "Invia"} />
      </form>
    </div>
  )
}

export default Newsletters
