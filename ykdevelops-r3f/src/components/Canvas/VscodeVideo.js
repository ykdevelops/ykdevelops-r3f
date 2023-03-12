import React, { useState } from 'react';
import * as THREE from 'three';
import url from "../../assets/videos/vscode-ykdevelops.mov";
export default function VscodeVideo() {
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
        <mesh position={[-1.25, 0.0011, 0.46]} rotation={[0, 0.45, 0]}>
            <planeGeometry args={[0.5, 1.01]} />
            <meshStandardMaterial side={THREE.DoubleSide}>
                <videoTexture attach="map" args={[video]} />
            </meshStandardMaterial>
        </mesh>
    );
}
