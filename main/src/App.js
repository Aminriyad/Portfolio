import Footer from "./Footer";
import Header from "./Header";
import Main from "./main";
import Projects from "./Project";
import smoothscroll from 'smoothscroll-polyfill';
import Contact from "./contact";

const App = () => {
    smoothscroll.polyfill();

    return (
    <div class="dark-theme">
    {/* <!--Navigation menu --> */}
<Header/>

    <main class="main">
    <Main/>
    <Projects/>
    <Contact/>
    </main>
    <Footer/>

    {/* <a href="/#" class="scroll-to-top" id="scroll-up">
      <i class="uil uil-arrow-up scroll-to-top-icon"></i>
    </a> */}
</div>
);
}
export default App;