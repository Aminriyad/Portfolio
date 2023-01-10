const Main = () => {
    return (
        <section className={"home section" }id="home">
        <div className={"home-container container grid"}>
          <div className={"home-content grid"}>
            <div className={"home-social"}>
            <a
                href="https://www.linkedin.com/in/mike-r-0b9a47229/"
                target="_blank"
                rel="noreferrer"
                className={"social-icon"}
              >
                <i className={"uil uil-linkedin-alt"}></i>
              </a>
              <a
                href="https://github.com/Aminriyad"
                target="_blank"
                rel="noreferrer"
                className={"social-icon"}
              >
                <i className={"uil uil-github-alt"}></i>
              </a>
            </div>
            <div className={"home-data"}>
              <h1 className={"home-title"}>Amin Riyad</h1>
              <h3 className={"home-subtitle"}>Software Engineer | CS Student</h3>
              <a href="#contact" className={"button flex-button"}>
                Contact me<i className={"uil uil-message icon-button"}></i>
              </a>
            </div>
          </div>
        </div>
      </section>
);
}
export default Main;