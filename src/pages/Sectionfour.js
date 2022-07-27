import React from "react";
import "./styles/styleSectionfour.css";
import tim from "../images/profile-picture.png";

function Sectionfour(){
    return (
        <div className="sectionfour">
            <br/>
            <div className="sectionfour-blok">
                <div className="profielafbeeldingvlak">
                    <div className="tim">
                        <img className="profielfoto" src={tim}></img>
                       <br/><br/>
                        <h2>Tim Guse</h2>
                        <br/>
                        <p>efqwgrgeirgeijr gjijdeij ijdeijde ijijd</p>
                        <p>Software Developer</p>
                        <br/>
                        <div className="socialmedia-locatie">
                            <div className="socialmedia-icons"></div>
                            <div className="socialmedia-icons"></div>
                            <div className="socialmedia-icons"></div>
                        </div>
                    </div>
                    <div className="max">
                        <img className="profielfoto1" src={tim}></img>
                        <br/><br/>
                        <h2>Max Jansen</h2>
                        <br/>
                        <p>efqwgrgeirgeijr gjijdeij ijdeijde ijijd</p>
                        <p>Software Developer</p>
                        <br/>
                        <div className="socialmedia-locatie">
                            <div className="socialmedia-icons"></div>
                            <div className="socialmedia-icons"></div>
                            <div className="socialmedia-icons"></div>
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