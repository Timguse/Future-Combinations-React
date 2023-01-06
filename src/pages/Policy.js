import React from "react";
import Navbar from "../components/navbar";
import "./styles/privacy.css";
import { useTranslation } from 'react-i18next';

function Policy(){
    const { t, i18n } = useTranslation();

    return(
        <div>
            <Navbar/>
        <div id="textvlak">
            <br/>
            <h3>{t("privacy.1")}</h3>
            <p>{t("privacy.2")}</p>
            <p>{t("privacy.3")}</p>
            <p>{t("privacy.4")}</p>
            <br/>
            <h3>{t("privacy.5")}</h3>
            <p>{t("privacy.6")}</p>
        </div>
        </div>
    );
}
export default Policy;