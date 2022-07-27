import React from "react";
import "./styles/styleSectionsix.css";

function Sectionsix(){
    return(
        <div className="sectionsix">
           <div class="contain">

<div class="wrapper">

  <div class="form">
    <h4>GET IN TOUCH</h4>
    <h2 className="form-headline">Send us a message</h2>
    <form id="submit-form" action="">
      <p>
        <input id="name" class="form-input" type="text" placeholder="Your Name*"></input>
        <small className="name-error"></small>
      </p>
      <p>
        <input id="email" class="form-input" type="email" placeholder="Your Email*"></input>
        <small className="name-error"></small>
      </p>
      <p className="full-width">
        <input id="company-name" className="form-input" type="text" placeholder="Company Name*" required></input>
        <small></small>
      </p>
      <p className="full-width">
        <textarea  minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
        <small></small>
      </p>
      <p className="full-width">
        <input type="checkbox" id="checkbox" name="checkbox" checked></input> Yes, I would like to receive communications by call / email about Company's services.
      </p>
      <p className="full-width">
        <input type="submit" className="submit-btn" value="Submit" onclick="checkValidations()"></input>
      </p>
    </form>
  </div>

  <div class="contacts contact-wrapper">

    <ul className="text-contact">
      <li>We've driven online revenues of over <span class="highlight-text-grey">$2
          billion</span> for our clients. Ready to know
        how we can help you?</li>
      <span class="hightlight-contact-info">
        <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> info@demo.com</li>
        <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">+91 11 1111 2900</span></li>
      </span>
    </ul>
  </div>
</div>
</div>
           </div>
    
    );
}
export default Sectionsix;