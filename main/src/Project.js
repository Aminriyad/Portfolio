import Pic  from "./Black.png"
import HBA from "./img/HBA.png"
import chat from "./img/chat.png"

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
      <section id={"Projects"}>
        <br />
        <br />
        <br />
        <br />
<div>
<h2 className={"section-title"} id="whiter">Projects</h2>
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
        <div className={"portfolio-content grid swiper-slide"} >
          <img className={"portfolio-img"}src={HBA} alt=""/>
          <img className={"portfolio-img"}src={HBA} alt=""/>

          <div className={"portfolio-data"}>
            <h3 className={"portfolio-title"} id="whiter">Home Budgeting Application</h3>
            <h3 className={"portfolio-subtitle"}>
              Tech used : React, JavaScript, TypeScript, Local Storage
            </h3>
            <p className={"portfolio-description"}>
              A user friendly Home budgeting app for everyone to achive financial freedom, stores all your data locally so you have acess to it at anytime, and delete it at anytime, it's safe, simple, and easy to use for everyone.
            </p>
            <a
              target="_blank" rel="noreferrer"
              href="https://github.com/Aminriyad/Mr.Budget"
              className={"button flex-button button-small portfolio-button"}
            >
              Demo
              <i className={"uil uil-arrow-right icon-button"}></i>
            </a>
            <a
            rel="noreferrer"
              target="_blank"
              href="https://github.com/Aminriyad/Mr.Budget"
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
    <div className={"portfolio-content grid swiper-slide"} >
          <img src={chat} alt="" className={"portfolio-img"} style={{height:"13rem",width:"35rem"}}/>

          <div className={"portfolio-data"}>
            <h3 className={"portfolio-title"}>Full-Stack Messaging App</h3>
            <h3 className={"portfolio-subtitle"}>
              Tech used:  React, Javascript, TypeScript , Node JS, Express JS, MonogoDB, Tailwind, Axios
            </h3>
            <p className={"portfolio-description"}>
              A Full-Stack web application the allows you to send and receive messages, pictures, videos, and files, and is supported with a password of your choice to guarantee saftey, and Privacy of you data.
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
              href="https://github.com/Aminriyad/Chatting-app"
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