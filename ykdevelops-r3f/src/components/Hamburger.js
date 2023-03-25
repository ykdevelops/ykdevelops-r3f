import React from 'react';
import classNames from 'classnames';
import '../styles/navbar.css';

export default function Hamburger() {
    // Get the current URL path and extract the last part
    const path = window.location.pathname;
    let active = path.split('/').pop();
    console.log("this is active:" + active);
    if (active === "") {
        active = 'studio';
    }

    return (
        <div className="hamburger">
            <a
                className={classNames('dropdown-link', { active: active === 'about' })}
                href="/about"
            >
                <div className='ham-item'> About</div>

            </a>
            <a
                className={classNames('dropdown-link', { active: active === 'resume' })}
                href="/resume"
            >
                <div className='ham-item'>Resume</div>

            </a>
            <a
                className={classNames('dropdown-link', { active: active === 'projects' })}
                href="/projects"
            >
                <div className='ham-item'>Projects</div>

            </a>
            <a
                className={classNames('dropdown-link', { active: active === 'studio' })}
                href="/"
            >
                <div className='ham-item'>Studio</div>

            </a>
        </div>
    );
}
