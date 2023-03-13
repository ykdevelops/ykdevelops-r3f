import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.css';
import Hamburger from './Hamburger';

export default function Navbar() {
    const [showHamburger, setShowHamburger] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const timerRef = useRef(null);
    const [title, setTitle] = useState('Youssef Khalil');
    const [isYkDevelops, setIsYkDevelops] = useState(false);

    const handleDropdownClick = () => {
        setShowHamburger(!showHamburger);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsYkDevelops((prevIsYkDevelops) => !prevIsYkDevelops);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [isYkDevelops]);

    useEffect(() => {
        setTitle(isYkDevelops ? 'Ykdevelops' : 'Youssef Khalil');
    }, [isYkDevelops]);

    const navbarStyle = {
        transform: `translateY(${showNavbar ? 0 : '-100%'})`,
        transition: 'transform 0.3s ease',
    };

    return (
        <div className='navbar' style={navbarStyle}>
            <div className='mid-section'>
                <div className='title-row'>
                    <a href='/' className='head-title'>
                        {title}
                    </a>
                </div>
                <div className='head-dropdown' onClick={handleDropdownClick}>
                    <div className='ham-icon'></div>
                    <div className={`hamburger-menu ${showHamburger ? 'open' : ''}`}>
                        <Hamburger />
                    </div>
                </div>
            </div>
        </div>
    );
}
