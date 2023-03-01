import React, { useState } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import myModel from './models/deskScene5.glb'; // import the .glb file

function Popup(props) {

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: '#fff',
        border: '2px solid #000',
        position: 'fixed',
        top: 'calc(50% - 100px)',
        left: 'calc(50% - 100px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Clicked</p>
      <button style={{ position: 'absolute', top: '10px', right: '10px' }}>
        X
      </button>
    </div>
  );
}

function App() {
  const [clicked, setClicked] = useState(false);
  const gltf = useGLTF(myModel);

  const closePopup = () => {
    setTimeout(() => {
      setClicked(false);
    }, 0);
  };

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
      {clicked && <Popup closePopup={closePopup} />}
    </div>
  );
}

export default App;

