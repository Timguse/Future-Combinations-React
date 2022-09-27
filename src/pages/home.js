import React from "react";
import "./styles/styleHome.css";
import Title from "../images/Naamloos-1.jpg";
import button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
function Home(){
    return (
        
        <div className="home">
            <div className="ttt">
            <div className="div-text-img">
            <img className="title" src={Title}></img><br/>
            <p className="introtext">Website laten maken?</p><br/>
            <a  href="#sectionone">
                <button className='butoondh'>
                    wie zijn wij
                </button>            
            </a>
            </div>
            </div>
            
        </div>
    );
}
export default Home;