import React from "react";
import App from "./App";
// import "./components/footer.css";
import "./style.css";
import Policy from "./pages/Policy";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Pdf from "./images/Futurecombinations.pdf";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from 'react-i18next';
import IconL from "./images/linkedin.png";
import IconF from "./images/facebook.png";
import IconI from "./images/insta.png";

function Appa(){
    const { t, i18n } = useTranslation();

    
      // var loader = document.getElementById("preloader");
       window.addEventListener("load", function(){

        setTimeout(()=>{
          var loader = document.getElementById("preloader");
          loader.className += " hidden"; //class="loader hidden"
          loader.style.display = "none";

          }, 1000)
      })
    
    return(
        <div> 
          <div id="preloader"></div>
            {/* <div className="streep"></div> */}
            <Router>
               <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/privacy-policy" element={<Policy/>}/>                        
                </Routes>
            
            <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">ijjridijdrijdrjirdij rdjirdij rdijjidr ijrdjidrij ijrdijrdij kekoed okedoked okedokde jheerj rurur uhrfhurf hrfuh frhuuhfr jiijrf ijfrij rfijkjfrji ijfr rfrf ijfrij rfijkjfrji ijfr rfrf.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Services</h6>
            <ul class="footer-links">
              <li><a href="#Sectiontwo">Wordpress</a></li>
              <li><a href="#Sectiontwo">Code</a></li>
              <li><a href="#Sectiontwo">DTP</a></li>
              
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#sectionone">About Us</a></li>
              <li><a href="#Sectionsix">Contact Us</a></li>
              <li><a href = {Pdf} target = "_blank">Algemene Voorwaarden</a></li>
              <li><Link to="/privacy-policy"><p className="footer-text-link">Privacy Policy</p></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by future combinations.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
            <li><a target="_blank" class="linkedin" href="https://www.linkedin.com/"><i><img className="iconff" src={IconL}></img></i></a></li>   
              <li><a target="_blank" class="facebook" href="https://www.facebook.com/"><i><img className="iconff" src={IconF}></img></i></a></li>
              <li><a target="_blank" class="twitter" href="https://www.instagram.com/"><i><img className="iconff" src={IconI}></img></i></a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
        
        </Router>
            {/* <CookieConsent debug={true}
            location="bottom"
            style={{background: '#141c25', textAlign: 'left', height: '150px'}}
            buttonStyle={{color: 'black', background: 'white', fontSize: '20px'}}
            buttonText="OKE IK GA AKKOORD!"
            
            >Wij maken gebruik van cookies om uw website bezoek zo prettig mogelijk te maken. Meer weten over de cookies die wij gebruiken? Lees dan ons <a href="/privacy-policy">privacy beleid.</a></CookieConsent> */}
        
        </div>
       
       
    );
   
}
export default Appa;