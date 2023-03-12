import React, { useRef, useState, Suspense, useCallback } from 'react';
import myModel from '../../assets/models/deskScene12.glb';
import '../../styles/loader.css'
import Resume from './Resume'
import GithubVideo from './GithubVideo';
import YoutubeVideo from './YoutubeVideo';
import VscodeVideo from './VscodeVideo';
import ChromeDev from './ChromeDev.js';
import { Canvas } from '@react-three/fiber'
import { Bounds, useBounds, OrbitControls, useGLTF } from '@react-three/drei'

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

    return (
        <div id="canvas-container" style={{ top: 0, width: '100vw', height: '100vh', position: 'relative' }}>

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

                <mesh position={[-0.3, -2.3, 0.25]} rotation={[0, 300, 0]}>
                    <primitive object={gltf.scene} />
                </mesh>
                <Suspense fallback={null}>
                    <Bounds fit clip observe margin={1}>
                        <SelectToZoom>
                            <ChromeDev />
                            <GithubVideo />
                            <YoutubeVideo />
                            <VscodeVideo />
                            <Resume />
                        </SelectToZoom>
                    </Bounds>
                </Suspense>
                <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />

                <pointLight color={0xffffe6} intensity={1} position={[10, 10, 4]} />
                <pointLight color={0xffffe6} intensity={0.1} position={[-10, 10, 0]} />
            </Canvas>
        </div>
    );
}
