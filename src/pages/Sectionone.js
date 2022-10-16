import React from "react";
import "./styles/styleSectionone.css";
import icon from "../images/13706.png";
import iconPopetje from "../images/poppetjes-icon.jpg";
import { useTranslation } from 'react-i18next';

function Sectionone() {
    const { t, i18n } = useTranslation();
    return (
        <div className="sectionone">
            <div className="text_sectionOne">
                <h1>{t("wieZijnWij.1")}</h1><br /><b>
                Een nieuwe website laten maken doe je niet zomaar even. Het is een investering voor de lange termijn. Een goede website is meer dan alleen een online visitekaartje.</b><br/><br/> Bij Future combinations maken we websites die er niet alleen goed uit zien maar vooral ook voor meer omzet zorgen! Hoe uitgebreid of juist eenvoudig je website of webshop ook wordt, de basis moet altijd op orde zijn. Bij ons ben je zeker van een website die technisch goed in elkaar zit.<br/> Bij ons ben je helemaal eigen baas over je  website. Hij staat op je eigen domeinnaam en we bouwen de website met WordPress of coderen het met react of php afhankelijk van de website.</div>
            <div className="icon">
                <img className="iconPopetje-afbeelding" src={iconPopetje}></img>
            </div>
        </div>
    );
}
export default Sectionone;

