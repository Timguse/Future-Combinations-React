import React from "react";
import "./styles/styleHome.css";
import Title from "../images/FC-Logo-Text-Black.svg";
import button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
function Home(){
    return (
        <div className="home">
            <div className="div-text-img">
            <img className="title" src={Title}></img>
            <p className="introtext">ijjridijdrijdrjirdij rdjirdij rdijjidr ijrdjidrij ijrdijrdij kekoed okedoked okedokde jheerj rurur uhrfhurf hrfuh frhuuhfr jiijrf ijfrij rfijkjfrji ijfr rfrf  </p><br/>
            <a  href="#sectionone">
                <button className="btn btn-secondary">Wat wij doen</button>
            </a>
            </div>
            
        </div>
    );
}
export default Home;