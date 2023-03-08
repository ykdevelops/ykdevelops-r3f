import React from 'react'
import '../styles/navbar.css';

export default function Hamburger() {
    return (
        <div className='hamburger'>
            <a className='dropdown-link' href="/about">About</a>
            <a className='dropdown-link' href="/resume">Resume</a>
            <a className='dropdown-link' href="/prrojects">Projects</a>
        </div>
    )
}
