import React from "react";
import "./styles/styleHome.css";
import Title from "../images/Naamloos-1.jpg";
import a from "../images/a.png";

import button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from 'react-i18next';

function Home(){
    const { t, i18n } = useTranslation();

    return (
        <div className="home">
            <img className="a" src={a}></img><br/>
            <div className="ttt">
            <div className="vlak">
            </div>
            <div className="div-text-img">
            <img className="title" src={Title}></img><br/>
            <p className="introtext">{t("home.1")}
            </p><br/>
            <a  href="#sectionone">
                <button className='butoondh2'>
                    websites
                </button>            
            </a>
            <a  href="#Sectionsix">
                <button className='butoondh1'>
                    contact
                </button>            
            </a>
            </div>
            </div>
        </div>
    );
}
export default Home;