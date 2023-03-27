import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'
import url from "../../assets/videos/japan-river.mp4";
import fallbackURL from "../../assets/videos/mountain.jpg";
export default function WindowBackVideo() {
    const size = useAspect(1800, 1000)
    return (
        <mesh position={[0.5, 0, -1]} rotation={[0, 0, 0]}>
            <planeGeometry args={[9, 6]} />
            <FallbackMaterial url={fallbackURL} />
        </mesh>
    )
}

function FallbackMaterial({ url }) {
    const texture = useTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}