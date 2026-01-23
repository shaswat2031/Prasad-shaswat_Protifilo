import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const FloatingShapes = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const shapes = containerRef.current.children;
        const ctx = gsap.context(() => {
            Array.from(shapes).forEach((shape, i) => {
                // Randomize initial position
                gsap.set(shape, {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    rotation: Math.random() * 360,
                    opacity: 0.1 + Math.random() * 0.2,
                    scale: 0.5 + Math.random() * 0.5
                });

                // Animate endlessly
                gsap.to(shape, {
                    x: `+=${Math.random() * 400 - 200}`,
                    y: `+=${Math.random() * 400 - 200}`,
                    rotation: `+=${Math.random() * 360}`,
                    duration: 10 + Math.random() * 20,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Create a set of shapes (circles, squares, triangles via SVGs)
    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Shapes */}
            {[...Array(15)].map((_, i) => (
                <div key={i} className="absolute text-portfolio-primary/20">
                    {i % 3 === 0 ? (
                        <div className="w-16 h-16 border-2 border-current rounded-full" />
                    ) : i % 3 === 1 ? (
                        <div className="w-12 h-12 border-2 border-current rotate-45" />
                    ) : (
                        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-t-[34px] border-t-current border-r-[20px] border-r-transparent" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default FloatingShapes;
