import { t } from "i18next";
import React from "react";
import "./styles/styleSectionsix.css";

function Sectionsix(){
    return(
        <div className="sectionsix">
           <div class="contain">

<div class="wrapper">

  <div class="form">
    <h4>{t("contact.1")}</h4>
    <h2 className="form-headline">{t("contact.2")}</h2>
    <form id="submit-form" action="">
      <p>
        <input id="name" class="form-input" type="text" placeholder={t("contact.3")}></input>
        <small className="name-error"></small>
      </p>
      <p>
        <input id="email" class="form-input" type="email" placeholder={t("contact.4")}></input>
        <small className="name-error"></small>
      </p>
      <p className="full-width">
        <input id="company-name" className="form-input" type="text" placeholder={t("contact.5")} required></input>
        <small></small>
      </p>
      <p className="full-width">
        <textarea  minlength="20" id="message" cols="30" rows="7" placeholder={t("contact.6")} required></textarea>
        <small></small>
      </p>
      <p className="full-width">
      </p>
      <p className="full-width">
        <input type="submit" className="submit-btn" value={t("contact.8")} onclick="checkValidations()"></input>
      </p>
    </form>
  </div>

  <div class="contacts contact-wrapper">

    <ul className="text-contact">
      <li>{t("contact.9")}</li>
      <span class="hightlight-contact-info"><br/>
        <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">info@demo.com</span></li>
      </span>
    </ul>
  </div>
</div>
</div>
           </div>
    
    );
}
export default Sectionsix;