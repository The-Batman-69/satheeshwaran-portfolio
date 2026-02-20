import React, { useEffect, useState } from 'react';

export const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full pointer-events-none z-50 mix-blend-screen"
      style={{
        left: position.x - 12,
        top: position.y - 12,
        filter: 'blur(8px)',
        opacity: 0.6,
        transition: 'all 0.1s ease-out'
      }}
    />
  );
};
