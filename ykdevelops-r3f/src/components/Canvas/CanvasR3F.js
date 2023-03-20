import React, { useRef, useEffect, useState, Suspense, useCallback } from 'react';
import myModel from '../../assets/models/deskScene13.gltf';
import '../../styles/loader.css'
import Resume from './Resume'
import GithubVideo from './GithubVideo';
import YoutubeVideo from './YoutubeVideo';
import VscodeVideo from './VscodeVideo';
import ChromeDev from './ChromeDev.js';
import { Canvas } from '@react-three/fiber'
import { Bounds, useBounds, OrbitControls, useGLTF } from '@react-three/drei'
import WindowBack from './WindowBack';
import LoaderMain from '../LoaderMain';
// This component wraps children in a group with a click handler
// Clicking any object will refresh and fit bounds
function SelectToZoom({ children }) {
    const api = useBounds();

    const handleClick = useCallback((event) => {
        const { delta, object } = event;
        event.stopPropagation();
        if (delta <= 2) {
            api.refresh(object).fit();
        }
    }, [api]);

    const handlePointerMissed = useCallback((event) => {
        const { button } = event;
        button === 0 && api.refresh().fit();
    }, [api]);

    return (
        <group onClick={handleClick} onPointerMissed={handlePointerMissed}>
            {children}
        </group>
    );
}


export default function CanvasR3F() {
    const controlsRef = useRef();
    const gltf = useGLTF(myModel);
    const [enableControls, setEnableControls] = useState(true);

    const handleGithubClick = () => {
        setEnableControls(false);
    }
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div id="canvas-container" style={{ top: 0, width: '100vw', height: '100vh', position: 'relative' }}>
            {loading ? (
                <LoaderMain />
            ) : (
                <Canvas dpr={[1, 2]}>
                    {/* <OrbitControls
                    ref={controlsRef}
                    enablePan={enableControls}
                    enableRotate={enableControls}
                    enableZoom={enableControls}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                    minAzimuthAngle={0.1}
                    maxAzimuthAngle={Math.PI / 4}
                /> */}

                    <mesh position={[-0.42, -2.3, 0.25]} rotation={[0, 300, 0]}>
                        <primitive object={gltf.scene} />
                    </mesh>
                    <WindowBack />
                    <Suspense fallback={null}>
                        <Bounds fit clip observe margin={1}>
                            <SelectToZoom>
                                <ChromeDev />
                                <GithubVideo />
                                <YoutubeVideo />
                                <Resume />
                                <VscodeVideo />
                            </SelectToZoom>
                        </Bounds>
                    </Suspense>
                    <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} position={[4, 0, 0]} />


                    <ambientLight intensity={0.5} />
                    <pointLight color={0xffffff} intensity={0.8} position={[0, 5, 0]} />
                    <pointLight color={0xffffff} intensity={0.5} position={[5, 5, 0]} />
                    <pointLight color={0xffffff} intensity={0.5} position={[-5, 5, 0]} />

                    <spotLight color={0xffffff} intensity={1} position={[0, 3, 0]} angle={Math.PI / 4} penumbra={0.5} />
                </Canvas>)}
        </div>
    );
}
