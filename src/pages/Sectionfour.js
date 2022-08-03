import React from "react";
import "./styles/styleSectionfour.css";
import tim from "../images/profile-picture.png";
import IconL from "../images/linkedin.png";
import IconF from "../images/facebook.png";
import IconI from "../images/insta.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Sectionfour(){
    AOS.init();

    return (
        <div className="sectionfour">
            <br/>
            <div className="sectionfour-blok">
                <div className="profielafbeeldingvlak">
                    <div className="tim" data-aos="fade-left" data-aos-duration="10000">
                        <img className="profielfoto" src={tim}></img>
                       <br/><br/>
                        <h2>Tim Güse</h2>
                        <br/>
                        <p>Software Developer</p>
                        <p>timguse@futurecombinations.nl</p>
                        <br/>
                        <div className="socialmedia-locatie">
                            <div className="socialmedia-icons">
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <img className="icon-l-f-i" src={IconL}></img>
                                </a>
                            </div>
                            <div className="socialmedia-icons">
                                <a href="https://www.facebook.com/" target="_blank">
                                    <img className="icon-l-f-i" src={IconF}></img>
                                </a>
                            </div>
                            <div className="socialmedia-icons">
                            <a href="https://www.instagram.com/" target="_blank">
                                <img className="icon-l-f-i" src={IconI}></img>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="max" data-aos="fade-left" data-aos-duration="10000">
                        <img className="profielfoto1" src={tim}></img>
                        <br/><br/>
                        <h2>Max Jansen</h2>
                        <br/>
                        <p>Software Developer</p>
                        <p>maxjanzen@futurecombinations.nl</p>
                        <br/>
                        <div className="socialmedia-locatie">
                            <div className="socialmedia-icons">
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <img className="icon-l-f-i" src={IconL}></img>
                                </a>
                            </div>
                            <div className="socialmedia-icons">
                                <a href="https://www.facebook.com/" target="_blank">
                                    <img className="icon-l-f-i" src={IconF}></img>
                                </a>
                            </div>
                            <div className="socialmedia-icons">
                            <a href="https://www.instagram.com/" target="_blank">
                                <img className="icon-l-f-i" src={IconI}></img>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profielinformatievlak"></div>
                <div className="profielafbeeldingvlak2"></div>
                <div className="profielinformatievlak2"></div>

            </div>
        </div>
    );
}
export default Sectionfour;