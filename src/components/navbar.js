import React from "react";
import "./navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    const { t, i18n } = useTranslation();

    function handleclick(lang){
        i18n.changeLanguage(lang);
    }
   
    return (
        <div className="navbar">
            <br/><br/><br/>
        
    <header>
        <a href="/">
            <h3>Logo</h3>
        </a>
        <nav ref={navRef}> 
            <a href="#sectionone" onClick={showNavbar}>{t('navbar.1')}</a>
            <a href="#Sectiontwo" onClick={showNavbar}>{t('navbar.2')}</a>
            <a href="#Sectionthree" onClick={showNavbar}>{t('navbar.3')}</a>
            <a href="#Sectionfour" onClick={showNavbar}>{t('navbar.4')}</a>
            <a href="#Sectionfive" onClick={showNavbar}>{t('navbar.5')}</a>
            <a href="#Sectionsix" onClick={showNavbar}>{t('navbar.6')}</a>
            <button className="ennl-button" onClick={()=>handleclick('nl')}>
                Nederlands
            </button>
            <button className="ennl-button" onClick={()=>handleclick('en')}>
                engels
            </button>
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