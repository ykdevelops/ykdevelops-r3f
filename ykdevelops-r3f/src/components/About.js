import React from 'react';
import '../styles/about.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { Suspense } from 'react';

const About = () => {
    return (
        <div className='about-page'>

            <div className='headshot-row'>
                <Suspense fallback={<div className='loading-image'></div>}>
                    <img className='headshot' src="/headshot.jpeg" alt="headshot" />
                </Suspense>
                <h2 className='welcome-statement'>
                    <div>Hello,</div>
                    <div>I'm Youssef!</div>
                </h2>
            </div>

            <div className='yellow-box-row'>
                <div className='yellow-box'>
                    <div className='icon-column' >
                        <a href="https://linkedin.com/in/ykdevelops" className='icon-row'><FaLinkedin className="about-social-icon" /> </a>
                        <a href="https://github.com/ykdevelops" className='icon-row'><FaGithubSquare className="about-social-icon" /></a>
                        <a href="https://www.youtube.com/channel/UCRIft9RM1NOq6m0MIJeiJJg" className='icon-row'><FaYoutubeSquare className="about-social-icon" /></a>
                    </div>
                    <div className='description-column'>
                        <p className='description-text'>
                            As a developer with over a year of experience, I specialize in creating responsive web applications using Javascript frameworks like React and Vue. I am passionate about staying up-to-date with the latest online technologies and using them to create innovative and engaging user experiences.
                        </p>
                        <p className='description-text'>
                            Recently, I have been exploring React Three Fiber and am excited about the endless possibilities it presents for creating visually stunning web applications. My commitment to delivering high-quality work is second to none, and I am confident that my skills and expertise will be a valuable asset to your team.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
