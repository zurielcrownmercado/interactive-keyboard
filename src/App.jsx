import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const keyData = [
  { id: "google", logo: "/logos/google.png", url: "https://www.google.com" },
  { id: "youtube", logo: "/logos/youtube.png", url: "https://www.youtube.com" },
  { id: "twitter", logo: "/logos/twitter.png", url: "https://www.twitter.com" },
  { id: "linkedin", logo: "/logos/linkedin.png", url: "https://www.linkedin.com" },
  { id: "microsoft", logo: "/logos/microsoft.png", url: "https://www.microsoft.com" },
  { id: "dropbox", logo: "/logos/dropbox.png", url: "https://www.dropbox.com" },
  { id: "amazon", logo: "/logos/amazon.png", url: "https://www.amazon.com" },
  { id: "facebook", logo: "/logos/facebook.png", url: "https://www.facebook.com" },
  { id: "figma1", logo: "/logos/figma.png", url: "https://www.figma.com" },
  { id: "figma2", logo: "/logos/figma.png", url: "https://www.figma.com" },
  { id: "pinterest", logo: "/logos/pinterest.png", url: "https://www.pinterest.com" },
  { id: "instagram", logo: "/logos/instagram.png", url: "https://www.instagram.com" },
  { id: "github", logo: "/logos/github.png", url: "https://www.github.com" },
  { id: "notion", logo: "/logos/notion.png", url: "https://www.notion.so" },
  { id: "spotify", logo: "/logos/spotify.png", url: "https://www.spotify.com" },
  { id: "chrome", logo: "/logos/chrome.png", url: "https://www.google.com/chrome" },
];

function Key({ position, logo, url }) {
  const texture = useTexture(logo);
  return (
    <mesh
      position={position}
      onClick={() => window.open(url, "_blank")}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1, 0.3, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function MicrositeKeyboard() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Canvas shadows camera={{ position: [0, 6, 12], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} castShadow />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} enablePan={false} />
          {keyData.map((key, index) => {
            const row = Math.floor(index / 4);
            const col = index % 4;
            return (
              <Key
                key={key.id}
                logo={key.logo}
                url={key.url}
                position={[col * 1.4 - 2.1, -row * 1.4 + 1.5, 0]}
              />
            );
          })}
        </Suspense>
      </Canvas>
    </div>
  );
}