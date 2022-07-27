import React from "react";
import App from "./App";
import "./components/footer.css";
import Policy from "./pages/Policy";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Pdf from "./images/Futurecombinations.pdf";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from 'react-i18next';

function Appa(){
    const { t, i18n } = useTranslation();

    
    return(
        <div>
                   <Router>
                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="/privacy-policy" element={<Policy/>}/>
                        
                    </Routes>
                
                <div className="footer">
            <div className="vaklinks">
                <br/>
                <div className="linkjes-footer">
                    <a href="/#home"><p className="footer-text-link">Home</p></a>
                    <Link to="/privacy-policy"><p className="footer-text-link">Privacy Policy</p></Link>
                    <a href = {Pdf} target = "_blank">Algemene Voorwaarden</a>
                </div>
            </div>
            <div className="vakmidden">
                <br/><br/>
            <p>info@kkddk.nl</p>
            <p>069839383938</p>
            </div>
            <div className="vakrechts">
                <br/><br/>
                <div className="icon-solcial"></div>
                <div className="icon-solcial"></div>
                <div className="icon-solcial"></div><br/><br/>
                <h6 className="footer-tekst-future">@future combinations</h6>
            </div>
        
        </div>
        </Router>
            <CookieConsent debug={true}
            location="bottom"
            style={{background: '#141c25', textAlign: 'left', height: '150px'}}
            buttonStyle={{color: 'black', background: 'white', fontSize: '20px'}}
            buttonText="OKE IK GA AKKOORD!"
            
            >Wij maken gebruik van cookies om uw website bezoek zo prettig mogelijk te maken. Meer weten over de cookies die wij gebruiken? Lees dan ons <a href="/privacy-policy">privacy beleid.</a></CookieConsent>
        </div>
    );
}
export default Appa;