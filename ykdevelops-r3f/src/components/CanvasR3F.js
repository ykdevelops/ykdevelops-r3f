import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import myModel from '../assets/models/deskScene5.glb'; // import the .glb file

export default function CanvasR3F() {
    const gltf = useGLTF(myModel);
    return (
        <div
            id="canvas-container"
            style={{ top: 0, height: '100vh', position: 'relative' }}
        >
            <Canvas camera={{ fov: 5.1, position: [30, -30, 0], maxPolarAngle: Math.PI / 3 }}>
                <OrbitControls
                    enablePan={false}
                    enableRotate={true}
                    enableZoom={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                    minAzimuthAngle={0.1}
                    maxAzimuthAngle={Math.PI / 4}
                />
                <mesh position={[0, -1.7, 0.25]} rotation={[0, 200, 0]}>
                    <primitive object={gltf.scene} />
                </mesh>
                <pointLight color={0xffffe6} intensity={1} position={[10, 10, 4]} />
                <pointLight color={0xffffe6} intensity={1} position={[-10, 10, 0]} />
            </Canvas>

        </div>
    )
}
