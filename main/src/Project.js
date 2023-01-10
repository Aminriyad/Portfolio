import Pic1 from "./img/blog.png";
import Pic2 from "./img/devmatch.png";
import Pic4 from "./img/interphase.png";
import Pic6 from "./img/recipedia.png";
import Pic7 from "./img/rush.png";

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
 
//       <Swiper
//         effect="flip"
//         loop="true"
//         navigation
//         pagination={{ clickable: true, dynamicBullets: true }}
//       >

// <SwiperSlide><img src={Pic1} alt="" /><p>Amin</p></SwiperSlide>
// <SwiperSlide><p>Amin2</p></SwiperSlide>
// </Swiper>
<div>Hey</div>
);
}

export default Projects;