import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.css';
import Hamburger from './Hamburger';

export default function Navbar() {
    const [showHamburger, setShowHamburger] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const timerRef = useRef(null);

    const handleDropdownClick = () => {
        setShowHamburger(!showHamburger);
    };

    const handleMouseMove = (event) => {
        const y = event.clientY;
        setShowNavbar(y <= 100);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setShowNavbar(false);
        }, 1000);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const navbarStyle = {
        transform: `translateY(${showNavbar ? 0 : '-100%'})`,
        transition: 'transform 0.3s ease',
    };

    return (
        <div className='navbar' style={navbarStyle}>
            <div className='mid-section'>
                <div className='title-row'>
                    <div className='head-title'>Youssef Khalil</div>
                </div>
                <div className='head-dropdown' onClick={handleDropdownClick}>
                    <div className='ham-icon'></div>
                    <div className={`hamburger-menu ${showHamburger ? "open" : ""}`}>
                        <Hamburger />
                    </div>
                </div>
            </div>
        </div>
    );
}
