import React, { useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, Torus, Octahedron } from '@react-three/drei';
import gsap from 'gsap';

const AnimatedShape = ({ position, color, args, type }) => {
    const meshRef = useRef();

    // GSAP animation for entrance
    useLayoutEffect(() => {
        gsap.from(meshRef.current.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: 2,
            ease: "elastic.out(1, 0.3)",
            delay: Math.random() * 1
        });
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Constant gentle rotation
        meshRef.current.rotation.x = t * 0.2;
        meshRef.current.rotation.y = t * 0.3;

        // Slight pulse
        const scale = 1 + Math.sin(t * 1.5) * 0.05;
        meshRef.current.scale.set(scale, scale, scale);
    });

    const Material = (
        <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
        />
    );

    if (type === 'torus') {
        return (
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <Torus args={args} ref={meshRef} position={position}>
                    {Material}
                </Torus>
            </Float>
        );
    }

    if (type === 'octahedron') {
        return (
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1}>
                <Octahedron args={args} ref={meshRef} position={position}>
                    {Material}
                </Octahedron>
            </Float>
        )
    }

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={args} ref={meshRef} position={position}>
                {Material}
            </Sphere>
        </Float>
    );
};

const MouseTracker = () => {
    const { camera, mouse } = useThree();

    useFrame(() => {
        // Parallax camera movement based on mouse
        gsap.to(camera.position, {
            x: mouse.x * 0.5,
            y: mouse.y * 0.5,
            duration: 1,
            overwrite: "auto"
        });
        camera.lookAt(0, 0, 0);
    });
    return null;
}

const ThreeBackground = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 5] }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#EA2F14" />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4A90E2" />

                <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

                {/* Main Sphere (Right side typically) */}
                <AnimatedShape type="sphere" position={[2.5, 0, -1]} args={[1, 64, 64]} color="#EA2F14" />

                {/* Secondary Shapes */}
                <AnimatedShape type="torus" position={[-3, 1.5, -2]} args={[0.6, 0.2, 16, 32]} color="#4A90E2" />
                <AnimatedShape type="octahedron" position={[-2, -2, -1]} args={[0.8]} color="#ffffff" />

                <MouseTracker />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
