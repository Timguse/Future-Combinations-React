import React from "react";
import "./styles/styleSectiontwo.css";
import icon from "../images/logod-grey.jpg";
import { useTranslation } from 'react-i18next';
import iconWhy from "../images/why.jpg";

function Sectiontwo() {
    const { t, i18n } = useTranslation();

    return (
        <div className="sectiontwo">
            <div className="icon2">
                <img src={icon}></img>
            </div>
            <div className="textSectiontwo">
                <h1>{t("ourstory.1")}</h1><br />
                <b>{t("ourstory.2")}</b>
                <br /><br />
                <p>
                    {t("ourstory.3")}
                </p>
            </div>

        </div>
    );
}
export default Sectiontwo;
