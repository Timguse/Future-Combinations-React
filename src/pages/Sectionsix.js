import { t } from "i18next";
import React, { useRef }  from "react";
import "./styles/styleSectionsix.css";
import emailjs from "emailjs-com";


function sendemail(e){
  e.preventDefault();
  emailjs.sendForm('service_l6as676', 'template_zcuok4e', e.target, 'hK4-FBeVZg8R7V26K')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}

function Sectionsix(){

    return(
        <div className="sectionsix">
           <div class="contain">

<div class="wrapper">

  <div class="form">
    <h4>{t("contact.1")}</h4>
    <h2 className="form-headline">{t("contact.2")}</h2>
    <form id="submit-form" onSubmit={sendemail}>
      <p>
        <input id="name" name="name" class="form-input" type="text" placeholder={t("contact.3")}></input>
        <small className="name-error"></small>
      </p>
      <p>
        <input id="email" name="email" class="form-input" type="email" placeholder={t("contact.4")}></input>
        <small className="name-error"></small>
      </p>
      <p className="full-width">
        <input id="company-name" name="onderwerp" className="form-input" type="text" placeholder={t("contact.5")} required></input>
        <small></small>
      </p>
      <p className="full-width">
        <textarea  minlength="20" name="bericht" id="message" cols="30" rows="7" placeholder={t("contact.6")} required></textarea>
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
        <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">info@futurecombinations.nl</span></li>
      </span>
    </ul>
  </div>
</div>
</div>
           </div>
    
    );
}
export default Sectionsix;