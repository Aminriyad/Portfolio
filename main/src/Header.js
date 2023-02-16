import { Icon } from '@iconify/react';
import { useState } from 'react';
const Header = () => {
  const [Mooon, setMoon]= useState(true);
  const sun = document.getElementById('theme-button1');
  const moon = document.getElementById('theme-button2');
  // const footer = document.getElementsByClassName("footer")
  // const header = document.getElementById('header')
  // const name = document.getElementById('home-title')
  const whiter = document.querySelectorAll('#whiter')
    const aminer = ()=> {
      if(Mooon === true){//when we want moon,we dont have it, cuz we're on sun
      setMoon(false);
      moon.style.visibility="visible";
      sun.style.visibility="hidden";
      document.body.style.backgroundColor="rgb(22,22,39)";
      document.body.style.transition="0.3s";
      // document.getElementsByClassName("section-title").style.Color="White";
      // footer.style.backgroundColor="#0E0E1B"
      whiter.style.Color = "#FBFBFE";
    }
    else{//when we want sun
      setMoon(true)
      sun.style.visibility="visible";
      moon.style.visibility="hidden";
      document.body.style.backgroundColor="#FBFBFE";
      document.body.style.transition="0.3s";
      whiter.style.Color = "#FBFBFE";
    }
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
                <a href="#Projects" className={"nav-link"}>
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