import React from 'react';
import img from "../../assets/videos/resume2.png";
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export default function Resume() {
    const texture = useLoader(THREE.TextureLoader, img);

    return (
        <mesh position={[1.12, 0.066, 0.393]} rotation={[0
            , -0.02, 0]}>
            <planeGeometry attach="geometry" args={[0.7, 0.89]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
}