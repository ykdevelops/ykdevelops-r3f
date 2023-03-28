import React from 'react'
import currentFile from '../assets/videos/resume.pdf';
import '../styles/resume.css'
export default function Resume() {
    return (
        <div className='resume-page'>
            <iframe
                src={currentFile}
                title="Resume PDF"
                style={{ paddingTop: '50px', width: '100vw', height: '100vh', border: 'none', backgroundColor: '#323639' }}
            />
        </div>
    )
}