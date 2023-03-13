import React, { useState } from 'react';
import * as THREE from 'three';
import url from "../../assets/videos/cyberpunk.mp4";
export default function WindowBack() {
    const [video] = useState(() => {
        const vid = document.createElement("video");
        vid.src = url;
        vid.crossOrigin = "Anonymous";
        vid.loop = true;
        vid.muted = true;
        vid.play();
        return vid;
    });

    return (
        <mesh position={[0.5, 0, -1]} rotation={[0, 0, 0]}>
            <planeGeometry args={[9, 6]} />
            <meshStandardMaterial side={THREE.DoubleSide}>
                <videoTexture attach="map" args={[video]} />
            </meshStandardMaterial>
        </mesh>
    );
}
