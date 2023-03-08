import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import myModel from '../assets/models/deskScene9.glb';
import * as THREE from 'three';
import url from "../assets/videos/latestGithubVideo-ykdevelops.mov";
import url2 from "../assets/videos/latestYTVideo-ykdevelops.mov";
import img from "../assets/videos/resume2.png"
function Image() {
    const texture = useLoader(THREE.TextureLoader, img)
    return (
        <mesh position={[0.35, 0.665, 0.12]} rotation={[0
            , 0.51, 0]}>
            <planeBufferGeometry attach="geometry" args={[0.7, 0.89]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}

function Video({ src }) {
    const [video] = useState(() => {
        const vid = document.createElement("video");
        vid.src = src;
        vid.crossOrigin = "Anonymous";
        vid.loop = true;
        vid.muted = true;
        vid.play();
        return vid;
    });

    return (
        <mesh position={[-0.35, 0.91, 0.51]} rotation={[0
            , 0.51, 0]}>
            <planeGeometry args={[0.9, 0.4]} />
            <meshStandardMaterial side={THREE.DoubleSide}>
                <videoTexture attach="map" args={[video]} />
            </meshStandardMaterial>
        </mesh>
    );
}
function Video2({ src }) {
    const [video] = useState(() => {
        const vid = document.createElement("video");
        vid.src = src;
        vid.crossOrigin = "Anonymous";
        vid.loop = true;
        vid.muted = true;
        vid.play();
        return vid;
    });

    return (
        <mesh position={[-0.35, 0.46, 0.51]} rotation={[0
            , 0.51, 0]}>
            <planeGeometry args={[0.9, 0.5]} />
            <meshStandardMaterial side={THREE.DoubleSide}>
                <videoTexture attach="map" args={[video]} />
            </meshStandardMaterial>
        </mesh>
    );
}

export default function CanvasR3F() {
    const [isLoading, setIsLoading] = useState(true);
    const controlsRef = useRef();
    const gltf = useGLTF(myModel);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const handleModelLoad = () => {
        setIsLoading(false);
    };

    return (
        <div id="canvas-container" style={{ top: 0, height: '100vh', position: 'relative' }}>
            {isLoading && <div className="loading-spinner">Loading...</div>}
            {!isLoading && (
                <Canvas camera={{ fov: 5.1, position: [30, -30, 0], maxPolarAngle: Math.PI / 3 }} onCreated={handleModelLoad}>
                    <OrbitControls
                        ref={controlsRef}
                        enablePan={false}
                        enableRotate={true}
                        enableZoom={true}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 2}
                        minAzimuthAngle={0.1}
                        maxAzimuthAngle={Math.PI / 4}
                    />
                    <mesh position={[-0.3, -1.7, 0.25]} rotation={[0, 200, 0]}>
                        <primitive object={gltf.scene} />
                    </mesh>
                    <group>
                        <Video src={url} />
                        <Video2 src={url2} />
                    </group>
                    <Image />
                    <pointLight color={0xffffe6} intensity={1} position={[10, 10, 4]} />
                    <pointLight color={0xffffe6} intensity={1} position={[-10, 10, 0]} />
                </Canvas>
            )}
        </div>
    );
}
