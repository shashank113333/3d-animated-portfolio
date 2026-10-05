import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${position.x - (isPointer ? 24 : 16)}px, ${position.y - (isPointer ? 24 : 16)}px, 0)`,
        }}
      >
        <div
          className={`rounded-full border border-cyan-400/60 transition-all duration-300 ${
            isPointer
              ? 'w-12 h-12 bg-cyan-500/15 border-cyan-400 glow-cyan scale-110'
              : 'w-8 h-8 bg-transparent border-cyan-400/40'
          }`}
        />
      </div>

      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-cyan-400 glow-cyan" />
      </div>
    </>
  );
};
