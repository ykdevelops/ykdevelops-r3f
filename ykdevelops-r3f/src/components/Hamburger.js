import React from 'react'
import '../styles/navbar.css';

export default function Hamburger() {
    return (
        <div className='hamburger'>
            <a href="/about">About</a>
            <a href="/resume">Resume</a>
            <a href="/prrojects">Projects</a>
        </div>
    )
}
