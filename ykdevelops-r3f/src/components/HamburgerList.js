import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import '../styles/navbar.css';

export default function HamburgerList(props) {
    const location = useLocation();
    const active = location.pathname.split('/').pop() || 'studio';

    return (
        <div className="hamburger">
            <Link className={classNames('dropdown-link', { active: active === 'about' })} to="/about">
                <div className='ham-item'> About</div>
            </Link>
            <Link className={classNames('dropdown-link', { active: active === 'resume' })} to="/resume">
                <div className='ham-item'>Resume</div>
            </Link>
            <Link className={classNames('dropdown-link', { active: active === 'projects' })} to="/projects">
                <div className='ham-item'>Projects</div>
            </Link>
            <Link className={classNames('dropdown-link', { active: active === 'studio' })} to="/">
                <div className='ham-item'>Virtual Studio</div>
            </Link>
        </div>
    );
}