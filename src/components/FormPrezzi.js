import React from "react"

const FormPrezzi = () => {
  return (
    <div className="form-prezzi">
      <form
        id="fs-frm"
        name="survey-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/{form_id}"
        method="post"
      >
        <fieldset id="fs-frm-inputs"></fieldset>
        <label for="full-name">Nome</label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required
        />
        <label for="email-address">Email</label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="email@domain.tld"
          required
        />
        <fieldset id="fs-frm-selects">
          <label for="timely">Scegli il servizio</label>
          <select name="timely" id="timely" required>
            <option value="Choose" selected="" disabled="">
              Selezione
            </option>
            <option value="thetaHealing">ThetaHealing</option>
            <option value="dixcorso">Dixcorso</option>
            <option value="terapia sonica">Terapia Sonica</option>
            <option value="counseling">Counseling</option>
            <option value="meditazioni">Meditazioni</option>
            <option value="eventi">Eventi</option>
          </select>
        </fieldset>
        <label for="message">Ulteriori annotazioni</label>
        <textarea
          rows="3"
          name="message"
          id="message"
          placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Survey Responses"
        />
        <input type="submit" value="Prenota Adesso" style={{ margin: 0 }} />
      </form>
    </div>
  )
}

export default FormPrezzi
