const Contact = () => {
    return ( <section class="contact section" id="contact">
    <h2 class="section-title">Contact</h2>
    <div class="contact-container container grid">
      <div>
        <div class="contact-information">
          <i class="uil uil-envelope contact-icon"></i>

          <div>
            <h3 class="contact-title">Email</h3>
            <span class="contact-subtitle"
              ><a class="clear-link" href="mailto:AbumattarSA@pm.me"
                >AbumattarSA@pm.me</a
              ></span
            >
          </div>
        </div>
        <div class="contact-information">
          <i class="uil uil-map-marker contact-icon"></i>

          <div>
            <h3 class="contact-title">Location</h3>
            <span class="contact-subtitle"
              >Manchester, UK (willing to relocate)</span
            >
          </div>
        </div>
      </div>

      <form
        action="https://formspree.io/f/xoqylzrq"
        method="POST"
        class="contact-form grid"
      >
        <div class="contact-inputs grid">
          <div class="contact-content">
            <label for="" class="contact-label">Name</label>
            <input type="text" class="contact-input" />
          </div>
          <div class="contact-content">
            <label for="" class="contact-label">Email</label>
            <input type="email" name="_replyto" class="contact-input" />
          </div>
          <div class="contact-content">
            <label for="" class="contact-label">Message</label>
            <textarea
              name="message"
              id=""
              cols="0"
              rows="7"
              class="contact-input"
            ></textarea>
          </div>
          <div>
            <button type="submit" class="button flex-button">
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