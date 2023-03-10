import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import myModel from '../assets/models/deskScene12.glb';
import * as THREE from 'three';
import url from "../assets/videos/latestGithubVideo-ykdevelops.mov";
import url2 from "../assets/videos/latestYTVideo-ykdevelops.mov";
import url3 from "../assets/videos/vscode-ykdevelops.mov";
import img from "../assets/videos/resume2.png"
import Loader from './Load'
import '../styles/loader.css'
import Model from './Model'
function Resume() {
    const texture = useLoader(THREE.TextureLoader, img)
    return (
        <mesh position={[0.6, 0.06, -0.12]} rotation={[0, 0.5, 0]}>
            <planeBufferGeometry attach="geometry" args={[0.7, 0.88]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}

function GithubVideo({ src }) {
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
        <mesh position={[-0.45, 0.28, 0.5]} rotation={[0
            , 0.5, 0]}>
            <planeGeometry args={[0.75, 0.44]} />
            <meshStandardMaterial side={THREE.DoubleSide}>
                <videoTexture attach="map" args={[video]} />
            </meshStandardMaterial>
        </mesh>
    );
}
function YoutubeVideo({ src }) {
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
        <mesh position={[-0.45, -0.16, 0.5]} rotation={[0
            , 0.51, 0]}>
            <planeGeometry args={[0.75, 0.44]} />
            <meshStandardMaterial side={THREE.DoubleSide}>
                <videoTexture attach="map" args={[video]} />
            </meshStandardMaterial>
        </mesh>
    );
}
function VscodeVideo({ src }) {
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
        <mesh position={[-1.01, -0.009, 0.92]} rotation={[0, 1, 0]}>
            <planeGeometry args={[0.5, 1.01]} />
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
    const githubVideoRef = useRef();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const handleModelLoad = () => {
        setIsLoading(false);
    };

    const handleGithubVideoClick = () => {
        controlsRef.current.target.copy(githubVideoRef.current.position);
    };

    return (
        <div id="canvas-container" style={{ top: 0, height: '100vh', position: 'relative' }}>
            {isLoading && <div className="center"><Loader /></div>}
            <Canvas camera={{ fov: 3.1, position: [30, -30, 0], maxPolarAngle: Math.PI / 3 }} onCreated={handleModelLoad}>
                <OrbitControls
                    ref={controlsRef}
                    enablePan={false}
                    enableRotate={true}
                    enableZoom={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                    minAzimuthAngle={0.1}
                    maxAzimuthAngle={Math.PI / 4}
                    minDistance={10}
                    maxDistance={40}
                />

                <mesh position={[-0.3, -2.3, 0.25]} rotation={[0, 200, 0]}>
                    <primitive object={gltf.scene} />
                </mesh>
                {/* <Model /> */}

                <GithubVideo src={url} ref={githubVideoRef} onClick={handleGithubVideoClick} />
                <YoutubeVideo src={url2} />
                <VscodeVideo src={url3} />

                <Resume />
                <pointLight color={0xffffe6} intensity={1} position={[10, 10, 4]} />
                <pointLight color={0xffffe6} intensity={1} position={[-10, 10, 0]} />
            </Canvas>
        </div>
    );
}
