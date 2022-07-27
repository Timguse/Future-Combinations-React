import React from "react";
import "./styles/styleSectionfive.css";
import { useTranslation } from 'react-i18next';

function sectionfive(){
    const { t, i18n } = useTranslation();

    return (
        <div className="sectionfive">
            <div className="sectionfivelinks">
                
            </div>
            <div className="sectionfiverechts">
                <br/><br/>
                <h2>{t('sectionfive.1')}</h2>
                <br/><br/>
                <h5>{t('sectionfive.2')}</h5>
                <p>{t('sectionfive.3')}</p><br/>
                <h5>{t('sectionfive.4')}</h5>
                <p>{t('sectionfive.5')}</p><br/>
                <h5>{t('sectionfive.6')}</h5>
                <p>{t('sectionfive.7')}</p>
            </div>
        </div>
    );
}
export default sectionfive;