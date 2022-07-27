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



function App() {
  const { t, i18n } = useTranslation();

    
  return (
    <div className="App">
      <Navbar/>
      
mmmmm
      <a href="#Sectionsix">
      <div className="afspraak-maken">
        <p className="reclame-text">{t('afspraakMaken.1')}</p>
      </div>
      </a>
      <Home/>
      <div id="sectionone"><Sectionone/></div>
      <div id="Sectiontwo"><Sectionthree/></div>
      <div id="Sectionthree"><Sectiontwo/></div>
      <div id="Sectionfour"><Sectionfour/></div>
      <div id="Sectionfive"><Sectionfive/></div>
      <div id="Sectionsix"><Sectionsix/></div>
          
    </div>
    
  );
  
  

    
  
}

export default App;
