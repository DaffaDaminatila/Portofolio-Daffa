import React from 'react';

const BackgroundAnimation = () => {
    // Generate random positions and sizes for background orbs
    const orbs = Array.from({ length: 20 }).map((_, i) => ({
        id: `orb-${i}`,
        size: Math.random() * 400 + 100 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        delay: Math.random() * 5 + 's',
        duration: Math.random() * 10 + 20 + 's',
        color: i % 3 === 0 ? 'rgba(139, 92, 246, 0.08)' : (i % 3 === 1 ? 'rgba(59, 130, 246, 0.08)' : 'rgba(236, 72, 153, 0.05)')
    }));

    // Generate shooting stars
    const stars = Array.from({ length: 6 }).map((_, i) => ({
        id: `star-${i}`,
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        delay: Math.random() * 10 + 's'
    }));

    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: -5, pointerEvents: 'none', background: 'var(--bg-dark)' }}>

            {/* Moving Grid */}
            <div className="bg-grid"></div>

            {/* Floating Orbs */}
            {orbs.map(orb => (
                <div
                    key={orb.id}
                    className="position-absolute rounded-circle floating"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: orb.left,
                        top: orb.top,
                        background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                        filter: 'blur(50px)',
                        animationDelay: orb.delay,
                        animationDuration: orb.duration,
                        opacity: 0.8
                    }}
                />
            ))}

            {/* Shooting Stars */}
            {stars.map(star => (
                <div
                    key={star.id}
                    className="shooting-star"
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDelay: star.delay
                    }}
                ></div>
            ))}
        </div>
    );
};

export default BackgroundAnimation;
