const Header = () => {
    return (
        <header class="header" id="header">
        <nav class="nav container">


        {/* Top left logo */}
          <a href="/#" class="nav-logo">Amin Riyad</a>
        {/* Top left logo */}


        {/* Nvaigation Bar */}
          <div class="nav-menu" id="nav-menu">
            <ul class="nav-list grid">
              {/* Home */}
              <li class="nav-item">
                <a href="#home" class="nav-link active-link">
                  <i class="uil uil-estate nav-icon"></i>Home
                </a>
              </li>
              {/* Home */}
            {/* Portfolio */}
              <li class="nav-item">
                <a href="#portfolio" class="nav-link">
                  <i class="uil uil-scenery nav-icon"></i> Portfolio
                </a>
              </li>
              {/* Portfolio */}
              {/* Contact */}
              <li class="nav-item">
                <a href="#contact" class="nav-link">
                  <i class="uil uil-message nav-icon"></i> Contact
                </a>
              </li>
            </ul>
            <i class="uil uil-times nav-close" id="nav-close"></i>
          </div>
              {/* Contact */}

          {/* Nvaigation Bar */}


          {/* Theme Changer */}
          <div class="nav-buttons">
            <i class="uil uil-moon change-theme uil-sun" id="theme-button"></i>
            <div class="nav-toggle" id="nav-toggle">
              <i class="uil uil-apps"></i>
            </div>
          </div>
            {/* Theme Changer */}
        </nav>
    </header>
    );
}
 
export default Header;