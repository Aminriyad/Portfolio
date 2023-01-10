import Footer from "./Footer";
import Header from "./Header";
import Main from "./main";
import Projects from "./Project";
import smoothscroll from 'smoothscroll-polyfill';
import Contact from "./contact";
import SwiperCore, { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
import { createContext } from "react";


const App = () => {
  smoothscroll.polyfill();
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const ThemeContext = createContext(null)
  const [Theme, setTheme]=useState("light")
  const toggleTheme = () =>{
    setTheme((curr)=>(curr ==="light"? "dark" :"light"))
  };
    return (
<ThemeContext.Provider value={{Theme,toggleTheme}}>
  <div class={"dark-theme"} id={Theme}>
    {/* <!--Navigation menu --> */}
    <Header/>
    <main class={"main"}>
    <Main/>
    <Projects/>
    <Contact/>
    </main>
    <Footer/>

    {/* <a href="/#" class="scroll-to-top" id="scroll-up">
      <i class="uil uil-arrow-up scroll-to-top-icon"></i>
    </a> */}
</div></ThemeContext.Provider>
);
}
export default App;