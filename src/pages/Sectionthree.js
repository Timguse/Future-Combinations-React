import React from "react";
import "./styles/styleSectionthree.css";
import Icon1 from "../images/wordpress.png";
import Icon2 from "../images/coding-icon.png";
import Icon3 from "../images/dtp1.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Sectionthree(){
    AOS.init();
    function popUp(){
        var popup = document.createElement('div');
        popup.className = 'popup';
        popup.id = 'test';
        var cancel = document.createElement('div');
        cancel.className = 'cancel';
        cancel.innerHTML = 'X';
        cancel.onclick = function (e) { popup.parentNode.removeChild(popup) };
        var message = document.createElement('span');
        message.innerHTML = "<p id='text-span1'>Bij Future combinations ontwikkelen we alle websites in WordPress. Dit is een Content Management System (CMS), een systeem waarmee je zelf wijzigingen op je website kan doorvoeren zonder dat daar technische kennis voor nodig is. WordPress is wereldwijd het meest gebruikte CMS, waardoor er vele webdesign oplossingen beschikbaar zijn voor allerhande toepassingen. Van een eenvoudige website tot een uitgebreide webshop, het kan allemaal binnen WordPress.</p>";
        popup.appendChild(message);                                    
        popup.appendChild(cancel);
        document.body.appendChild(popup);
        }
        function popUp1(){
            var popup = document.createElement('div');
            popup.className = 'popup';
            popup.id = 'test';
            var cancel = document.createElement('div');
            cancel.className = 'cancel';
            cancel.innerHTML = 'X';
            cancel.onclick = function (e) { popup.parentNode.removeChild(popup) };
            var message = document.createElement('span');
            message.innerHTML = "<p id='text-span1'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>";
            popup.appendChild(message);
            popup.appendChild(cancel);
            document.body.appendChild(popup);
            }
            function popUp2(){
                var popup = document.createElement('div');
                popup.className = 'popup';
                popup.id = 'test';
                var cancel = document.createElement('div');
                cancel.className = 'cancel';
                cancel.innerHTML = 'X';
                cancel.onclick = function (e) { popup.parentNode.removeChild(popup) };
                var message = document.createElement('span');
                message.innerHTML = "<p id='text-span1'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>";
                popup.appendChild(message);
                popup.appendChild(cancel);
                document.body.appendChild(popup);
                }
    return (
        <div className="sectionthree">
            <div className="space"></div>
            <div className="seconddiv-sectionthree">
            <div className="service">
                <div className="serviceblok" data-aos="fade-left"  data-aos-duration="100000">
                    <div className="iconafbeelding">
                        <img className="afbeelding-icons" src={Icon1}></img>
                    </div>
                    <br/>
                    <h2>Website</h2>
                    <br/>
                    <p className="tekst-service">krachtige en unieke websites, geheel op maat voor jouw bedrijf. Gemaakt in wordpress of helemaal geschreven met webtalen. </p>
                    <button onClick={popUp}>lees meer</button>

                </div>
                <div className="serviceblok" data-aos="fade-left" data-aos-duration="100000">
                <div className="iconafbeelding">
                    <img className="afbeelding-icons"  src={Icon2}></img>
                </div>
                <br/>
                <h2>Webdesign</h2>
                <br/>
                <p className="tekst-service">Elke website die wij ontwerpen heeft een uniek design, volledig in lijn met jouw huisstijl. Lees meer over webdesign.
                </p>
                    <button onClick={popUp1}>lees meer</button>

                </div>
                <div className="serviceblok" data-aos="fade-left" data-aos-duration="100000">
                <div className="iconafbeelding">
                    <img className="afbeelding-icons"  src={Icon3}></img>
                </div>
                <br/>
                <h2>Webshop</h2>
                <br/>
                <p className="tekst-service">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum.</p>
                <button onClick={popUp2}>lees meer</button>

                </div>
            </div>
            </div>
        </div>
    );
}
export default Sectionthree;