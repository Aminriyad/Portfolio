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
    <section class="contact section" id="contact">
    <h2 class="section-title">Contact</h2>
    <div class="contact-container container grid">
      <div>
        <div class="contact-information">
          <i class="uil uil-envelope contact-icon"></i>

          <div>
            <h3 class="contact-title">Email</h3>
            <span class="contact-subtitle">
              <a class="clear-link" href="mailto:AminRiyad@hotmail.com">Aminriyad@hotmail.com</a>
            </span>
          </div>
        </div>
        <div class="contact-information">
          <i class="uil uil-map-marker contact-icon"></i>

          <div>
            <h3 class="contact-title">Location</h3>
            <span class="contact-subtitle">Dallas, TX (willing to relocate)</span>
          </div>
        </div>
      </div>

      <form class="contact-form grid" onSubmit={handleSubmit}>
        <div class="contact-inputs grid">
          <div class="contact-content">
            <label class="contact-label">Name</label>
            <input type="text" class="contact-input" />
          </div>
          <div class="contact-content">
            <label htmlFor="email" class="contact-label">Email</label>
            <input type="email" name="email" id='email' class="contact-input" />
            <ValidationError prefix="Email" field="email"errors={state.errors}/>
          </div>
          <div class="contact-content">
            <label for="" class="contact-label">Message</label>
            <textarea
              name="message"
              id="messege"
              cols="0"
              rows="7"
              class="contact-input"
          />
            <ValidationError prefix="Message" field="message"errors={state.errors}/>
          </div>
          <div>
            <button type="submit" class="button flex-button" disabled={state.submitting}>
              Send message
              <i class="uil uil-message icon-button"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </section> );
}
 
export default Contact;