import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'
import url from "../../assets/videos/vscode-ykdevelops.mov";
import fallbackURL from "../../assets/videos/vscode-ykdevelops.png";
export default function VscodeVideo2() {
    const size = useAspect(1800, 1000)
    return (
        <mesh position={[-1.372, -0.01, 0.465]} rotation={[0, 0.45, 0]}>
            <planeGeometry args={[0.5, 1.01]} />
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