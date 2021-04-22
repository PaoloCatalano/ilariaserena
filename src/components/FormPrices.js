import React from "react"
import { useForm, ValidationError } from "@formspree/react"

const FormPrezzi = () => {
  const [state, handleSubmit] = useForm("booking")

  if (state.succeeded) {
    return (
      <div className="form-prezzi">
        <h1>Thank you!</h1>
      </div>
    )
  }

  return (
    <div className="form-prezzi">
      <form
        id="fs-frm"
        name="booking"
        acceptCharset="utf-8"
        onSubmit={handleSubmit}
      >
        <fieldset id="fs-frm-inputs"></fieldset>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First and Last"
          required
        />
        <ValidationError field="name" prefix="Name" errors={state.errors} />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@domain.tld"
          required
        />
        <ValidationError field="email" prefix="Email" errors={state.errors} />
        <fieldset id="fs-frm-selects">
          <label htmlFor="service">Choose the service</label>
          <select name="service" id="service" required>
            <option defaultValue=""></option>
            <option value="thetaHealing">ThetaHealing</option>
            <option value="dixcorso">Dixcorso</option>
            <option value="Sonic Therapy">Sonic Therapy</option>
            <option value="counseling">Counseling</option>
            <option value="Meditations">Meditations</option>
            <option value="Events">Events</option>
          </select>
          <ValidationError
            field="service"
            prefix="Service"
            errors={state.errors}
          />
        </fieldset>
        <label htmlFor="message">More Details</label>
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
        <ValidationError errors={state.errors} />
      </form>
    </div>
  )
}

export default FormPrezzi
