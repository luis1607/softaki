import "./App.css";
import About from "./components/about/About.tsx";
import BtnHelp from "./components/btn-help/BtnHelp.tsx";
import Discover from "./components/discover/Discover.tsx";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/header/Header.tsx";
import OurMembers from "./components/our-menbers/OurMembers.tsx";
import WeAddress from "./components/we-address/WeAddress.tsx";
import WhyWe from "./components/why-we/WhyWe.tsx";

function App() {
  return (
    <div className="items-center justify-center ">
      <Header />
      <div className="w-full mt-16 sm:mt-24 h-h-container-web">
        <About id="section1" />
      </div>
      <div className="h-h-container-web lg:h-h-container-mobile">
        <WhyWe id="section2" />
      </div>
      <div className="lg:h-h-container-mobile h-h-container-web">
        <WeAddress id="section3" />
      </div>
      <div className=" lg:h-h-container-mobile">
        <Discover id="section4" />
      </div>

      <div className="lg:h-h-container-mobile h-h-container-web">
        <OurMembers id="section5" />
      </div>
      <BtnHelp />

      <Footer />
    </div>
  );
}

export default App;
