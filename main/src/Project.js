import random from "./img/random.png"
import Pic  from "./Black.png"
import HBA from "./img/HBA.png"
import chat from "./img/chat.png"
import STP1 from "./img/STP1.png"
import STP2 from "./img/STP2.png"
import Tetris from "./img/Tetris.png"
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

{/* Full-Stack-Messaging-App */}
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
{/*             <a
              target="_blank" rel="noreferrer"
              href="https://aminriyad-fullstack-messaging-app.netlify.app/"
              className={"button flex-button button-small portfolio-button"}
            >
              YT on it
              <i className={"uil uil-arrow-right icon-button"}></i>
            </a> */}
            <a
              target="_blank" rel="noreferrer"
              href="https://github.com/Aminriyad/Full-Stack-Messaging-App"
              className={"button flex-button button-small portfolio-button"}
            >
              Code
              <i className={"uil uil-code-branch icon-button"}></i>
            </a>
          </div>
        </div></SwiperSlide>
{/* Stock Tracker */}
<SwiperSlide>
    <div className={"portfolio-content grid swiper-slide"}>
          <img src={STP1} alt="" className={"portfolio-img" }/>
          <div className={"portfolio-data"}>
            <h3 className={"portfolio-title"}>Stock Market Tracker & Chart Application</h3>
            <h3 className={"portfolio-subtitle"}>
              Tech used: React JS, TypeScript, API, Tailwind
            </h3>
            <p className={"portfolio-description"}>
              
A sleek and intuitive web app leveraging React.js, TypeScript, and Tailwind CSS to display real-time stock prices and visually track their performance through interactive charts, using data fetched from APIs.
            </p>
            <a
              target="_blank" rel="noreferrer"
              href="https://aminriyad-stock-market-tracker.netlify.app/"
              className={"button flex-button button-small portfolio-button"}
            >
              Demo
              <i className={"uil uil-arrow-right icon-button"}></i>
            </a>
            <a
              target="_blank" rel="noreferrer"
              href="https://github.com/Aminriyad/Stock-Market-Tracker"
              className={"button flex-button button-small portfolio-button"}
            >
              Code
              <i className={"uil uil-code-branch icon-button"}></i>
            </a>
          </div>
        </div></SwiperSlide>

{/* MR.budget */}
<SwiperSlide>
    <div className={"swiper-wrapper"}>
        <div className={"portfolio-content grid swiper-slide"} >
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
              href="https://aminriyad-budgeting-application.netlify.app/"
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

{/* Tetris */}
<SwiperSlide>
    <div className={"portfolio-content grid swiper-slide"}>
          <img src={Tetris} alt="" className={"portfolio-img" }/>
          
          {/* Rush */}
          <div className={"portfolio-data"}> 
            <h3 className={"portfolio-title"}>Tetris Game</h3>
            <h3 className={"portfolio-subtitle"}>
              Tech used: HTML5, CSS3, Javascript
            </h3>
            <p className={"portfolio-description"}>
            A captivating web app that brings the classic Tetris game to life, created with HTML, CSS, and JavaScript. Enjoy hours of addictive gameplay as you strategically arrange falling blocks to clear lines.
            </p>
            <a
              target="_blank" rel="noreferrer"
              href="https://aminriyad-tetris-game.netlify.app/"
              className={"button flex-button button-small portfolio-button"}
            >
              Demo
              <i className={"uil uil-arrow-right icon-button"}></i>
            </a>
            <a
            rel="noreferrer"
              target="_blank"
              href="https://github.com/Aminriyad/Tetris"
              className={"button flex-button button-small portfolio-button"}>
              Code
              <i className={"uil uil-code-branch icon-button"}></i>
            </a>
          </div>
        </div></SwiperSlide>
{/* Blog */}
<SwiperSlide>
    <div className={"portfolio-content grid swiper-slide"}>
          <img
            src={random}
            alt=""
            className={"portfolio-img"}
          />

          <div className={"portfolio-data"}>
            <h3 className={"portfolio-title"}>
              Personal Blog
            </h3>
            <h3 className={"portfolio-subtitle"}>
              Tech used: React js, HTML, CSS
            </h3>
            <p className={"portfolio-description"}>
            An engaging blog website powered by React.js and JSON Server,
            allowing users to read and share articles on various topics.
            Note :: run a local server by running "npx json-server --watch amin\src\data\db.json --port 8000"
            </p>

            <a
              target="_blank" rel="noreferrer"
              href="https://aminriyad-local-blogger.netlify.app/"
              className={"button flex-button button-small portfolio-button"}
            >
              Demo
              <i className={"uil uil-arrow-right icon-button"}></i>
            </a>
            <a
              target="_blank" rel="noreferrer"
              href="https://github.com/Aminriyad/Local-Blogger"
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