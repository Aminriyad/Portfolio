import Pic  from "./Black.png"
//    dont forget to add this margin-bottom: 3rem;
// import SwiperCore, {
//   Pagination,
//   Navigation
// } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper"; // added navigation and replaced EffectCoverflow with EffectFade
SwiperCore.use([Navigation, Pagination, EffectFade]); // configure the new modules as needed
SwiperCore.use([Pagination]);


const Projects = () => {
    return (
      <section id={"projects"}>
        <br />
        <br />
        <br />
        <br />
<div>
<h2 className={"section-title"}>Projects</h2>
    <Swiper
        className={Swiper}
        effect="flip"
        loop="true"
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
    >

{/* Recipedia */}
<SwiperSlide>
    <div className={"swiper-wrapper"}>
        <div className={"portfolio-content grid swiper-slide"}>
          <img className={"portfolio-img"}src={Pic} alt=""/>

          <div className={"portfolio-data"}>
            <h3 className={"portfolio-title"}>Recipedia</h3>
            <h3 className={"portfolio-subtitle"}>
              Tech used: React, Express, Node, Axios, MySQL, Spoonacular
              API, Google sign-in
            </h3>
            <p className={"portfolio-description"}>
              A revolutionary recipe recommendation website which tailors to
              your expectations.
            </p>
            <a
              target="_blank" rel="noreferrer"
              href="https://w8-recipedia.netlify.app/"
              className={"button flex-button button-small portfolio-button"}
            >
              Demo
              <i className={"uil uil-arrow-right icon-button"}></i>
            </a>
            <a
            rel="noreferrer"
              target="_blank"
              href="https://github.com/W8-Recipedia/Recipedia"
              className={"button flex-button button-small portfolio-button"}
            >
              Code
              <i className={"uil uil-code-branch icon-button"}></i>
              </a>
            </div>

          </div>
          </div></SwiperSlide>
{/* DevMatch */}
<SwiperSlide>
    <div className={"portfolio-content grid swiper-slide"}>
          <img src={Pic} alt="" className={"portfolio-img"} />

          <div className={"portfolio-data"}>
            <h3 className={"portfolio-title"}>DevMatch</h3>
            <h3 className={"portfolio-subtitle"}>
              Tech used: Ruby on Rails, PostgreSQL, Stripe, jQuery, MailGun
            </h3>
            <p className={"portfolio-description"}>
              A full-stack web application that includes e-commerce, contact
              forms, user accounts and profiles.
            </p>
            <a
              target="_blank" rel="noreferrer"
              href="https://dev-matcher.herokuapp.com/"
              className={"button flex-button button-small portfolio-button"}
            >
              Demo
              <i className={"uil uil-arrow-right icon-button"}></i>
            </a>
            <a
              target="_blank" rel="noreferrer"
              href="https://github.com/Aminriyad"
              className={"button flex-button button-small portfolio-button"}
            >
              Code
              <i className={"uil uil-code-branch icon-button"}></i>
            </a>
          </div>
        </div></SwiperSlide>
{/* Blog */}
<SwiperSlide>
    <div className={"portfolio-content grid swiper-slide"}>
          <img src={Pic} alt="" className={"portfolio-img" }/>

          <div className={"portfolio-data"}>
            <h3 className={"portfolio-title"}>Blog</h3>
            <h3 className={"portfolio-subtitle"}>
              Tech used: Ruby on Rails, AWS Cloud9 IDE
            </h3>
            <p className={"portfolio-description"}>
              A software-as-a-service blogging platform that incorporates
              search functionality, an admin panel and more.
            </p>
            <a
              target="_blank" rel="noreferrer"
              href="https://railsblogg.herokuapp.com/"
              className={"button flex-button button-small portfolio-button"}
            >
              Demo
              <i className={"uil uil-arrow-right icon-button"}></i>
            </a>
            <a
              target="_blank" rel="noreferrer"
              href="https://github.com/AbumattarSA/Rails_Blog"
              className={"button flex-button button-small portfolio-button"}
            >
              Code
              <i className={"uil uil-code-branch icon-button"}></i>
            </a>
          </div>
        </div></SwiperSlide>
{/* Rush */}
<SwiperSlide>
    <div className={"portfolio-content grid swiper-slide"}>
          <img src={Pic} alt="" className={"portfolio-img" }/>
          
          {/* Rush */}
          <div className={"portfolio-data"}> 
            <h3 className={"portfolio-title"}>Rush</h3>
            <h3 className={"portfolio-subtitle"}>
              Tech used: Python, Tkinter GUI module
            </h3>
            <p className={"portfolio-description"}>
              A game where the aim is to collect as many coins as possible
              before the time runs out or you get caught by a guard.
            </p>
            <a
            rel="noreferrer"
              target="_blank"
              href="https://github.com/AbumattarSA/Rush"
              className={"button flex-button button-small portfolio-button"}>
              Code
              <i className={"uil uil-code-branch icon-button"}></i>
            </a>
          </div>
        </div></SwiperSlide>
{/* Interphase (12 hour Hackathon project) */}
<SwiperSlide>
    <div className={"portfolio-content grid swiper-slide"}>
          <img
            src={Pic}
            alt=""
            className={"portfolio-img"}
          />

          <div className={"portfolio-data"}>
            <h3 className={"portfolio-title"}>
              Interphase (12 hour Hackathon project)
            </h3>
            <h3 className={"portfolio-subtitle"}>
              Tech used: HTML, CSS, JavaScript, Markdown
            </h3>
            <p className={"portfolio-description"}>
              A project for individuals who aren't tech savvy but are
              enthusiastic to get started with programming
            </p>
            <a
              target="_blank" rel="noreferrer"
              href="https://thecodingbridge.github.io/Interphase/"
              className={"button flex-button button-small portfolio-button"}
            >
              Demo
              <i className={"uil uil-arrow-right icon-button"}></i>
            </a>
            <a
              target="_blank" rel="noreferrer"
              href="https://github.com/TheCodingBridge/Interphase"
              className={"button flex-button button-small portfolio-button"}
            >
              Code
              <i className={"uil uil-code-branch icon-button"}></i>
            </a>
          </div>
        </div></SwiperSlide>


</Swiper>
</div>
</section>
);
}

export default Projects;