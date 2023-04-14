import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import '../styles/navbar.css';

export default function HamburgerList(props) {
    const location = useLocation();
    const active = location.pathname.split('/').pop() || 'about';

    return (
        <div className="hamburger">
            <Link className={classNames('dropdown-link', { active: active === 'about' })} to="/" onClick={() => props.toggle()}>
                <div className='ham-item'> About</div>
            </Link>
            {/* <Link className={classNames('dropdown-link', { active: active === 'resume' })} to="/resume" onClick={() => props.toggle()}>
                <div className='ham-item'>Resume</div>
            </Link> */}
            {/* <Link className={classNames('dropdown-link', { active: active === 'projects' })} to="/projects" onClick={() => props.toggle()}>
                <div className='ham-item'>Projects</div>
            </Link> */}
            <Link className={classNames('dropdown-link', { active: active === 'studio' })} to="/studio" onClick={() => props.toggle()}>
                <div className='ham-item'>Virtual Studio</div>
            </Link>
        </div>
    );
}