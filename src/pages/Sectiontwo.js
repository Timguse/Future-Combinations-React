import React from "react";
import "./styles/styleSectiontwo.css";
import icon from "../images/13706.png";
import { useTranslation } from 'react-i18next';
import iconWhy from "../images/why.jpg";

function Sectiontwo(){
    const { t, i18n } = useTranslation();

    return (
        <div className="sectiontwo">
            <div className="icon2">
                <img src={icon}></img>
           </div>
            <div className="textSectiontwo">
            <h1>{t("WaaromOns.1")}</h1><br/>
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b>
            <br/><br/>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
           
        </div>
    );
}
export default Sectiontwo;
