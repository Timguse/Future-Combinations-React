import React from "react";
import "./styles/styleSectionone.css";
import icon from "../images/13706.png";
import iconPopetje from "../images/poppetjes-icon.jpg";
import { useTranslation } from 'react-i18next';

function Sectionone(){
    const { t, i18n } = useTranslation();

    return (
        <div className="sectionone">
            <div className="text_sectionOne">
            <h1>{t("wieZijnWij.1")}</h1><br/>
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b>
            <br/><br/>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
           <div className="icon">
                <img className="iconPopetje-afbeelding" src={iconPopetje}></img>
           </div>
        </div>
    );
}
export default Sectionone;

