import { Icon } from '@iconify/react';

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
            <a href="#Projects" className={"footer-link"}>Projects</a>
            </li>
            <li>
              <a href="#Contact" className={"footer-link"}>Contact</a>
            </li>
          </ul>
          <div className={"footer-socials"}>
{/*             <a
              href="https://www.linkedin.com/"
              rel="noreferrer"
              target="_blank"
              className={"footer-social"}
            >
              <Icon icon="uil:linkedin-alt" color="white" />
            </a> */}
            <a
              href="https://github.com/Aminriyad"
              rel="noreferrer"
              target="_blank"
              className={"footer-social"}
            >
              <Icon icon="uil:github-alt" color="white" />
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