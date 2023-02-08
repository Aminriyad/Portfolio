const Footer = () => {
const year =new Date().getFullYear()
return (
        <footer className={"footer"}>
    <div className={"footer-bg"}>
        <div className={"footer-container container grid"}>
        <div>
            <h1 className={"footer-title"}>Amin Riyad</h1>
            <span className={"footer-subtitle"}>Software Engineer | CS Student</span>
        </div>
        <ul className={"footer-links"}>
            <li>
            <a href="#portfolio" className={"footer-link"}>Portfolio</a>
            </li>
            <li>
              <a href="#contact" className={"footer-link"}>Contact</a>
            </li>
          </ul>
          <div className={"footer-socials"}>
            <a
              href="https://www.linkedin.com/in/mike-r-0b9a47229/"
              rel="noreferrer"
              target="_blank"
              className={"footer-social"}
            >
              <i className={"uil uil-linkedin-alt"}></i>
            </a>
            <a
              href="https://github.com/Aminriyad"
              rel="noreferrer"
              target="_blank"
              className={"footer-social"}
            >
              <i className={"uil uil-github-alt"}></i>
            </a>
          </div>
        </div>
        <p className={"footer-copyright"}>
          &#169; Amin Riyad {year}. All rights reserved.
        </p>
      </div>
    </footer>
     );
}
 
export default Footer;