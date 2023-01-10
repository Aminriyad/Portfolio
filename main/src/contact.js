import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

const Contact = () => {

  var center = {
    marign: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    padding: '150px 0'
  }
  const [state, handleSubmit] = useForm("xzbqbjeo")
  if (state.succeeded) {
    return <p style={center}>Thanks for joining!</p>;
}
    return (
    <section className={"contact section" } id="contact">
    <h2 className={"section-title"}>Contact</h2>
    <div className={"contact-container container grid"}>
      <div>
        <div className={"contact-information"}>
          <i className={"uil uil-envelope contact-icon"}></i>

          <div>
            <h3 className={"contact-title"}>Email</h3>
            <span className={"contact-subtitle"}>
              <a className={"clear-link" } href="mailto:AminRiyad@hotmail.com">Aminriyad@hotmail.com</a>
            </span>
          </div>
        </div>
        <div className={"contact-information"}>
          <i className={"uil uil-map-marker contact-icon"}></i>

          <div>
            <h3 className={"contact-title"}>Location</h3>
            <span className={"contact-subtitle"}>Dallas, TX (willing to relocate)</span>
          </div>
        </div>
      </div>

      <form className={"contact-form grid" }onSubmit={handleSubmit}>
        <div className={"contact-inputs grid"}>
          <div className={"contact-content"}>
            <label className={"contact-label"}>Name</label>
            <input type="text" className={"contact-input" }/>
          </div>
          <div className={"contact-content"}>
            <label htmlfor="email" className={"contact-label"}>Email</label>
            <input type="email" name="email" id='email' className={"contact-input"} />
            <ValidationError prefix="Email" field="email"errors={state.errors}/>
          </div>
          <div className={"contact-content"}>
            <label className={"contact-label"}>Message</label>
            <textarea
              name="message"
              id="messege"
              cols="0"
              rows="7"
              className={"contact-input"}/>
            <ValidationError prefix="Message" field="message"errors={state.errors}/>
          </div>
          <div>
            <button type="submit" className={"button flex-button"} disabled={state.submitting}>
              Send message
              <i className={"uil uil-message icon-button"}></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </section> );
}
 
export default Contact;