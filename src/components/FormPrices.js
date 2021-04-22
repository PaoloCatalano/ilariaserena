import React from "react"

const FormPrezzi = () => {
  return (
    <div className="form-prezzi">
      <form
        id="fs-frm"
        name="survey-form"
        acceptCharset="utf-8"
        action="https://formspree.io/f/mbjpwgrz"
        method="post"
      >
        <fieldset id="fs-frm-inputs"></fieldset>
        <label htmlFor="full-name">Name</label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required
        />
        <label htmlFor="email-address">Email Address</label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="email@domain.tld"
          required
        />
        <fieldset id="fs-frm-selects">
          <label htmlFor="timely">Choose the service</label>
          <select name="timely" id="timely" required>
            <option value="Choose" defaultValue="" disabled="">
              Select
            </option>
            <option value="thetaHealing">ThetaHealing</option>
            <option value="dixcorso">Dixcorso</option>
            <option value="terapia sonica">Sonic Therapy</option>
            <option value="counseling">Counseling</option>
            <option value="meditazioni">Meditations</option>
            <option value="eventi">Events</option>
          </select>
        </fieldset>
        <label htmlFor="message">More Info</label>
        <textarea
          rows="3"
          name="message"
          id="message"
          placeholder="Aenean lacinia bibendum nulla sed consectetur."
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Booking Responses"
        />
        <input type="submit" value="Book Now" style={{ margin: 0 }} />
      </form>
    </div>
  )
}

export default FormPrezzi
