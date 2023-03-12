import React from 'react'
import currentFile from '../assets/videos/resume.pdf';
export default function Resume() {
    return (
        <div>
            <iframe
                src={currentFile}
                title="Resume PDF"
                style={{ paddingTop: '100px', width: '100vw', height: '100vh', border: 'none', backgroundColor: '#323639' }}
            />
        </div>
    )
}