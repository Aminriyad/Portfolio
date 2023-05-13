import Footer from "./Footer";
import Header from "./Header";
import Main from "./main";
import Projects from "./Project";
import Contact from "./Contact";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {

    return (
  <div className={"dark-theme"}>
    {/* <!--Navigation menu --> */}
    <Header/>
    <main className={"main"}>
    <Main/>
    <Projects/>
    <Contact/>
    </main>
    <Footer/>
    {/* <a href="/#" class="scroll-to-top" id="scroll-up">
      <i class="uil uil-arrow-up scroll-to-top-icon"></i>
    </a> */}
    <ToastContainer/>
</div>
);
}
export default App;