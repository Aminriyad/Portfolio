import { Icon } from '@iconify/react';
import { useState } from 'react';
const Header = () => {
  const [Moon, setMoon]= useState(true);
  const sun = document.getElementById('theme-button1');
  const moon = document.getElementById('theme-button2');
  // const footer = document.getElementsByClassName("footer")
  // const header = document.getElementById('header')
  // const name = document.getElementById('home-title')
  // const whiter = document.querySelectorAll('#whiter')
    const aminer = ()=> {
      if(Moon === true){//when we want moon,we dont have it, cuz we're on sun
      moon.style.visibility="visible";
      sun.style.visibility="hidden";
      document.body.style.backgroundColor="rgb(22,22,39)";
      // footer.style.backgroundColor="#0E0E1B"
      // whiter.style.Color = "Black";
    setMoon(false);}
    else{//when we want sun
      sun.style.visibility="visible";
      moon.style.visibility="hidden";
      document.body.style.backgroundColor="#FBFBFE";
      // footer.style.backgroundColor="#5757E0"

      // whiter.style.Color = "#FBFBFE";

      setMoon(true)}
    }

    return (
        <header className={"header"} id="header">
        <nav className={"nav container"}>


        {/* Top left logo */}
          <a href="/#" className={"nav-logo"} id="whiter">Amin Riyad</a>
        {/* Top left logo */}


        {/* Nvaigation Bar */}
          <div className={"nav-menu" } id="nav-menu">
            <ul className={"nav-list grid"}>
              {/* Home */}
              <li className={"nav-item"}>
                <a href="#home" className={"nav-link active-link"}>
                  <i className={"uil uil-estate nav-icon"}></i>Home
                </a>
              </li>
              {/* Home */}
            {/* Portfolio */}
              <li className={"nav-item"}>
                <a href="#projects" className={"nav-link"}>
                  <i className={"uil uil-scenery nav-icon"}></i> Projects
                </a>
              </li>
              {/* Portfolio */}
              {/* Contact */}
              <li className={"nav-item"}>
                <a href="#Contact" className={"nav-link"}>
                  <i className={"uil uil-message nav-icon"}></i> Contact
                </a>
              </li>
            </ul>
            <i className={"uil uil-times nav-close"} id="nav-close"></i>
          </div>
              {/* Contact */}

          {/* Nvaigation Bar */}


          {/* Theme Changer */}
          <div className={"nav-buttons"}>
             {/* <i className={"uil uil-moon change-theme uil-sun"} id="theme-button"></i> */}
            <Icon onClick={aminer} className={"uil "} style={{position: "absolute"}}icon="ph:moon-bold" color="#5757e0" id="theme-button1"/>
            <Icon onClick={aminer} className={"uil"} style={{visibility:"hidden"}}icon="ph:sun" color="#5757e0" id="theme-button2"/>
            {/* <div className={"nav-toggle" }id="nav-toggle">
              <i className={"uil uil-apps"}></i>
            </div> */}
          </div>
            {/* Theme Changer */}
        </nav>
    </header>
    );
}

export default Header;