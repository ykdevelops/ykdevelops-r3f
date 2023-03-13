import React from 'react';
import img from "../../assets/videos/youtubeVideo.png";
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
export default function YoutubeVideo() {
    const texture = useLoader(THREE.TextureLoader, img);

    return (
        <mesh position={[0.3, -0.16, 0.3801]} rotation={[0
            , -0.02, 0]}>
            <planeGeometry attach="geometry" args={[0.7, 0.45]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
}
