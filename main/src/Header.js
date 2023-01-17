const Header = () => {
    return (
        <header className={"header"} id="header">
        <nav className={"nav container"}>


        {/* Top left logo */}
          <a href="/#" className={"nav-logo"}>Amin Riyad</a>
        {/* Top left logo */}


        {/* Nvaigation Bar */}
          <div className={"nav-menu" }id="nav-menu">
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
                <a href="#contact" className={"nav-link"}>
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