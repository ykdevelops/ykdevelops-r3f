import React from 'react';
import img from "../../assets/videos/chromeDev.png";
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
export default function ChromeDev({ handleClick }) {
    const texture = useLoader(THREE.TextureLoader, img);

    return (
        <mesh onClick={handleClick} position={[-0.55, 0.06, 0.364]} rotation={[0
            , -0.02, 0]}>
            <planeGeometry attach="geometry" args={[1.0, 0.9]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
}
