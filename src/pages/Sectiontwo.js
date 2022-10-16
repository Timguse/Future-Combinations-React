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
                <h1>{t("WaaromOns.1")}</h1><br />
                <b><br />
                    Wij zijn future combinations. Wij zijn een serieus webdesign en online web development bureau.

                    Wij ontwikkelen websites op maat, webshops en webapplicaties.</b>
                <br /><br />
                <p> Wij zijn trots op wat we doen.

                    Ons team bestaat uit webdesigners en ontwikkelaars. </p>
            </div>

        </div>
    );
}
export default Sectiontwo;
