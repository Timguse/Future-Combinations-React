import "./navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import React, { useState } from "react";
import i18n from "i18next";
import { withTranslation, WithTranslation } from 'react-i18next';
import {Form} from 'react-bootstrap';
import logoddd from "../images/logod.jpg";

function Navbar(){
    
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    const { t, i18n } = useTranslation();

    function a(){
        if(document.getElementById('b').textContent === 'nl'){
            document.getElementById('b').innerHTML = 'en';
            i18n.changeLanguage('en');

        }else{
            document.getElementById('b').innerHTML = 'nl';

            i18n.changeLanguage('nl');

        }
    }

    return (
        <div className="navbar">
            <br/><br/><br/>
    <header>
        <a href="/">
            <img className="logoddd" src={logoddd}></img>
        </a>
        <nav ref={navRef}> 
            <a href="#sectionone" onClick={showNavbar}>{t('navbar.1')}</a>
            <a href="#Sectiontwo" onClick={showNavbar}>{t('navbar.2')}</a>
            <a href="#Sectionthree" onClick={showNavbar}>{t('navbar.3')}</a>
            <a href="#Sectionfour" onClick={showNavbar}>{t('navbar.4')}</a>
            <a href="#Sectionsix" onClick={showNavbar}>{t('navbar.6')}</a>
            <button id="b" className="ennl-button" onClick={a}>en</button>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
            </button>

        </nav>

        <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
        </button>
        </header>
    </div>
    
);
    } 
export default Navbar;