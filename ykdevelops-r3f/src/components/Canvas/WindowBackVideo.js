import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'
import url from "../../assets/videos/japan-river.mp4";
import fallbackURL from "../../assets/videos/cyberpunk.png";
export default function WindowBackVideo() {
    const size = useAspect(1800, 1000)
    return (
        <mesh position={[0.5, 0, -1]} rotation={[0, 0, 0]}>
            <planeGeometry args={[9, 6]} />
            <Suspense fallback={<FallbackMaterial url={fallbackURL} />}>
                <VideoMaterial url={url} />
            </Suspense>
        </mesh>
    )
}
function VideoMaterial({ url }) {
    const texture = useVideoTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
    const texture = useTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}