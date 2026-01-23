import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        // Hide default cursor
        document.body.style.cursor = 'none';

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Initial position
        gsap.set([cursor, follower], { xPercent: -50, yPercent: -50 });

        const moveCursor = (e) => {
            // Direct update for the main cursor dot (no lag)
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });

            // Smooth update for the follower ring (lag)
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                ease: "power3.out"
            });
        };

        const handleHoverStart = () => {
            gsap.to(cursor, { scale: 0.5, duration: 0.3 });
            gsap.to(follower, { scale: 3, opacity: 0.5, backgroundColor: '#EA2F14', duration: 0.3 });
        };

        const handleHoverEnd = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(follower, { scale: 1, opacity: 1, backgroundColor: 'transparent', duration: 0.3 });
        };

        window.addEventListener('mousemove', moveCursor);

        // Add interactions for links and buttons
        const links = document.querySelectorAll('a, button, [role="button"]');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleHoverStart);
            link.addEventListener('mouseleave', handleHoverEnd);
        });

        // Observer to handle new elements (like after route changes)
        const observer = new MutationObserver(() => {
            const newLinks = document.querySelectorAll('a, button, [role="button"]');
            newLinks.forEach(link => {
                // Remove old listeners to avoid duplicates (optional, but good practice)
                link.removeEventListener('mouseenter', handleHoverStart);
                link.removeEventListener('mouseleave', handleHoverEnd);
                // Add listeners
                link.addEventListener('mouseenter', handleHoverStart);
                link.addEventListener('mouseleave', handleHoverEnd);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', moveCursor);
            observer.disconnect();

            links.forEach(link => {
                link.removeEventListener('mouseenter', handleHoverStart);
                link.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-portfolio-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border-2 border-portfolio-primary rounded-full pointer-events-none z-[9998] mix-blend-difference transition-colors duration-300"
            />
        </>
    );
};

export default CustomCursor;
