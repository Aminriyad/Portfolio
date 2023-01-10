import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";


import Pic1 from "./img/blog.png"
import Pic2 from "./img/devmatch.png"
import Pic4 from "./img/interphase.png"
import Pic6 from "./img/recipedia.png"
import Pic7 from "./img/rush.png"

const Projects = () => {
  SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

  // const swiper = useSwiper(".portfolio-container", {
  //   cssMode: true,
  //   loop: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   mousewheel: true,
  //   keyboard: true,
  // });
    return (
    <section class="portfolio section" id="portfolio">
      <img src={"/img/img/blog.png"} alt="" />
      {/* <img src="assets/img" alt="" /> */}
    <h2 class="section-title">Projects</h2>
        <div class="portfolio-container container swiper-container">
        {/* Recipedia */}
      <div class="swiper-wrapper">
        <div class="portfolio-content grid swiper-slide">
          <img
            // src={"https://thumbs.dreamstime.com/b/stocks-shares-businessman-sitting-desk-showing-signboard-text-written-37351133.jpg"}
            src={Pic6}
            alt={""}
            // class="portfolio-img"
          />

          <div class="portfolio-data">
            <h3 class="portfolio-title">Recipedia</h3>
            <h3 class="portfolio-subtitle">
              Tech used: React, Express, Node, Axios, MySQL, Spoonacular
              API, Google sign-in
            </h3>
            <p class="portfolio-description">
              A revolutionary recipe recommendation website which tailors to
              your expectations.
            </p>
            <a
              target="_blank" rel="noreferrer"
              href="https://w8-recipedia.netlify.app/"
              class="button flex-button button-small portfolio-button"
            >
              Demo
              <i class="uil uil-arrow-right icon-button"></i>
            </a>
            <a
            rel="noreferrer"
              target="_blank"
              href="https://github.com/W8-Recipedia/Recipedia"
              class="button flex-button button-small portfolio-button"
            >
              Code
              <i class="uil uil-code-branch icon-button"></i>
              </a>
            </div>

          </div>
        </div>
        {/* DevMatch */}
        <div class="portfolio-content grid swiper-slide">
          <img src={Pic2} alt="" class="portfolio-img" />

          <div class="portfolio-data">
            <h3 class="portfolio-title">DevMatch</h3>
            <h3 class="portfolio-subtitle">
              Tech used: Ruby on Rails, PostgreSQL, Stripe, jQuery, MailGun
            </h3>
            <p class="portfolio-description">
              A full-stack web application that includes e-commerce, contact
              forms, user accounts and profiles.
            </p>
            <a
              target="_blank" rel="noreferrer"
              href="https://dev-matcher.herokuapp.com/"
              class="button flex-button button-small portfolio-button"
            >
              Demo
              <i class="uil uil-arrow-right icon-button"></i>
            </a>
            <a
              target="_blank" rel="noreferrer"
              href="https://github.com/Aminriyad"
              class="button flex-button button-small portfolio-button"
            >
              Code
              <i class="uil uil-code-branch icon-button"></i>
            </a>
          </div>
        </div>
        {/* Blog */}
        <div class="portfolio-content grid swiper-slide">
          <img src={Pic1} alt="" class="portfolio-img" />

          <div class="portfolio-data">
            <h3 class="portfolio-title">Blog</h3>
            <h3 class="portfolio-subtitle">
              Tech used: Ruby on Rails, AWS Cloud9 IDE
            </h3>
            <p class="portfolio-description">
              A software-as-a-service blogging platform that incorporates
              search functionality, an admin panel and more.
            </p>
            <a
              target="_blank" rel="noreferrer"
              href="https://railsblogg.herokuapp.com/"
              class="button flex-button button-small portfolio-button"
            >
              Demo
              <i class="uil uil-arrow-right icon-button"></i>
            </a>
            <a
              target="_blank" rel="noreferrer"
              href="https://github.com/AbumattarSA/Rails_Blog"
              class="button flex-button button-small portfolio-button"
            >
              Code
              <i class="uil uil-code-branch icon-button"></i>
            </a>
          </div>
        </div>
        {/* Rush */}
        <div class="portfolio-content grid swiper-slide">
          <img src={Pic7} alt="" class="portfolio-img" />
          
          {/* Rush */}
          <div class="portfolio-data"> 
            <h3 class="portfolio-title">Rush</h3>
            <h3 class="portfolio-subtitle">
              Tech used: Python, Tkinter GUI module
            </h3>
            <p class="portfolio-description">
              A game where the aim is to collect as many coins as possible
              before the time runs out or you get caught by a guard.
            </p>
            <a
            rel="noreferrer"
              target="_blank"
              href="https://github.com/AbumattarSA/Rush"
              class="button flex-button button-small portfolio-button"
            >
              Code
              <i class="uil uil-code-branch icon-button"></i>
            </a>
          </div>
        </div>
        {/* Interphase (12 hour Hackathon project) */}
        <div class="portfolio-content grid swiper-slide">
          <img
            src={Pic4}
            alt=""
            class="portfolio-img"
          />

          <div class="portfolio-data">
            <h3 class="portfolio-title">
              Interphase (12 hour Hackathon project)
            </h3>
            <h3 class="portfolio-subtitle">
              Tech used: HTML, CSS, JavaScript, Markdown
            </h3>
            <p class="portfolio-description">
              A project for individuals who aren't tech savvy but are
              enthusiastic to get started with programming, so that
              mainstream tutorials don't look so intimidating.
            </p>
            <a
              target="_blank" rel="noreferrer"
              href="https://thecodingbridge.github.io/Interphase/"
              class="button flex-button button-small portfolio-button"
            >
              Demo
              <i class="uil uil-arrow-right icon-button"></i>
            </a>
            <a
              target="_blank" rel="noreferrer"
              href="https://github.com/TheCodingBridge/Interphase"
              class="button flex-button button-small portfolio-button"
            >
              Code
              <i class="uil uil-code-branch icon-button"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="swiper-button-next">
        <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
      </div>
      <div class="swiper-button-prev">
        <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
      </div>
      <div class="swiper-pagination"></div>
  </section>
);
}

export default Projects;