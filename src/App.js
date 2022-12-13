import Navbar from "./components/navbar";
import "./style.css";
import Home from "./pages/home";
import Sectionone from "./pages/Sectionone";
import Sectiontwo from "./pages/Sectiontwo";
import Sectionthree from "./pages/Sectionthree";
import Sectionfour from "./pages/Sectionfour";
import Sectionfive from "./pages/Sectionfive";
import Sectionsix from "./pages/Sectionsix";
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



function App() {
  const { t, i18n } = useTranslation();
  AOS.init();
    
  return (
    <div className="App">
      <Navbar/>
      
      <a href="#Sectionsix">
      </a>
      <Home/>
      <div data-aos="fade-in" data-aos-duration="10000" id="sectionone"><Sectionone/></div>
      <div className="divspace"></div>
      <div data-aos="fade-in" data-aos-duration="10000" id="Sectiontwo"><Sectionthree/></div>
      <div data-aos="fade-in" data-aos-duration="10000" id="Sectionthree"><Sectiontwo/></div>
      <div data-aos="fade-in" data-aos-duration="10000" id="Sectionfour"><Sectionfour/></div>
      <div data-aos="fade-in" data-aos-duration="10000" id="Sectionfive"><Sectionfive/></div>
      <div data-aos="fade-in" data-aos-duration="10000" id="Sectionsix"><Sectionsix/></div>
          
    </div>
    
  );
}
export default App;
