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
                {t("wieZijnWij.2")}</b><br/><br/>{t("wieZijnWij.3")}</div>
            <div className="icon">
                <img className="iconPopetje-afbeelding" src={iconPopetje}></img>
            </div>
        </div>
    );
}
export default Sectionone;

