import React from "react";
import "./styles/styleSectionthree.css";
import webdesign from "../images/designicon.png";
import Icon2 from "../images/coding-icon.png";
import advies from "../images/adviesicon1.png";
import apparaten from "../images/aparatenicon1.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

function Sectionthree(){
    AOS.init();
    const { t, i18n } = useTranslation();

    return (
        <div className="sectionthree">
            <div className="space"></div>
            <div className="seconddiv-sectionthree">
            <div className="service">
                <div className="serviceblok" data-aos="fade-left"  data-aos-duration="100000">
                    <div className="iconafbeelding">
                        <img className="afbeelding-icons" src={Icon2}></img>
                    </div>
                    <br/>
                    <h2>{t("diensten.1")}</h2>
                    
                    <p className="tekst-service">{t("diensten.5")} </p>
                </div>
                <div className="serviceblok" data-aos="fade-left" data-aos-duration="100000">
                <div className="iconafbeelding">
                    <img className="afbeelding-icons" src={webdesign}></img>
                </div>
                <br/>
                <h2>{t("diensten.2")}</h2>
                <p className="tekst-service">{t("diensten.6")}
                </p>
                </div>
                <div className="serviceblok" data-aos="fade-left" data-aos-duration="100000">
                <div className="iconafbeelding">
                    <img className="afbeelding-icons" src={advies}></img>
                </div><br/>
                <h2>{t("diensten.3")}</h2>
                <p className="tekst-service">{t("diensten.7")}
                </p>
                </div>
                <div className="serviceblok" data-aos="fade-left" data-aos-duration="100000">
                <div className="iconafbeelding">
                    <img className="afbeelding-icons-aparaten" src={apparaten}></img>
                </div>
                <br/>
                <h2>{t("diensten.4")}</h2>
                <p className="tekst-service">{t("diensten.8")}

</p>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Sectionthree;