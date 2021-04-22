import React from "react"
import { useForm, ValidationError } from "@formspree/react"

const FormPrezzi = () => {
  const [state, handleSubmit] = useForm("booking")

  if (state.succeeded) {
    return (
      <div className="form-prezzi">
        <h1>Grazie!</h1>
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
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome e Cognome"
          required
        />
        <ValidationError field="name" prefix="Name" errors={state.errors} />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@domain.tld"
          required
        />
        <ValidationError field="email" prefix="Email" errors={state.errors} />
        <fieldset id="fs-frm-selects">
          <label htmlFor="servizio">Scegli il servizio</label>
          <select name="servizio" id="servizio" required>
            <option value="Choose" defaultValue="" disabled="">
              Selezione
            </option>
            <option value="thetaHealing">ThetaHealing</option>
            <option value="dixcorso">Dixcorso</option>
            <option value="terapia sonica">Terapia Sonica</option>
            <option value="counseling">Counseling</option>
            <option value="meditazioni">Meditazioni</option>
            <option value="eventi">Eventi</option>
          </select>
          <ValidationError
            field="service"
            prefix="Service"
            errors={state.errors}
          />
        </fieldset>
        <label htmlFor="message">Ulteriori annotazioni</label>
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
          value="Prenotazione"
        />
        <input type="submit" value="Prenota Adesso" style={{ margin: 0 }} />
        <ValidationError errors={state.errors} />
      </form>
    </div>
  )
}

export default FormPrezzi
