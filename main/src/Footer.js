const Footer = () => {
    return (
        <footer class="footer">
    <div class="footer-bg">
        <div class="footer-container container grid">
        <div>
            <h1 class="footer-title">Amin Riyad</h1>
            <span class="footer-subtitle">Software Engineer | CS Student</span>
        </div>
        <ul class="footer-links">
            <li>
            <a href="#portfolio" class="footer-link">Portfolio</a>
            </li>
            <li>
              <a href="#contact" class="footer-link">Contact</a>
            </li>
          </ul>
          <div class="footer-socials">
            <a
              href="https://www.linkedin.com/in/AbumattarSA"
              rel="noreferrer"
              target="_blank"
              class="footer-social"
            >
              <i class="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://github.com/AbumattarSA"
              rel="noreferrer"
              target="_blank"
              class="footer-social"
            >
              <i class="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
        <p class="footer-copyright">
          &#169; Amin Riyad 2022. All rights reserved.
        </p>
      </div>
    </footer>
     );
}
 
export default Footer;