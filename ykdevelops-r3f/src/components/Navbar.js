import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.css';
import HamburgerList from './HamburgerList';
import Hamburger from 'hamburger-react'

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true);
    const timerRef = useRef(null);
    const [title, setTitle] = useState('Youssef Khalil');
    const [isYkDevelops, setIsYkDevelops] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleDropdownClick = () => {
        setOpen(!isOpen);
        setIsActive(!isActive);
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

    return (
        <div className='navbar'>
            <div className='mid-section'>
                <div className='title-row'>
                    <a href='/' className='head-title'>
                        {title}
                    </a>
                </div>
                <div className='head-dropdown'>
                    <div
                        className={`ham-icon ${isActive ? 'ham-icon-active' : ''}`}
                        onClick={() => handleDropdownClick()}
                    />
                    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
                        <HamburgerList />
                    </div>
                </div>
            </div>
        </div>
    );
}
