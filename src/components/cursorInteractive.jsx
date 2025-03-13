import React, { useEffect, useState } from 'react';

const InteractiveMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Adiciona listeners para elementos interativos
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="fixed w-64 h-64 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 blur-3xl z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        background: isHovering
          ? 'radial-gradient(circle, rgba(192, 132, 252, 0.6) 0%, rgba(99, 102, 241, 0.4) 100%)'
          : 'radial-gradient(circle, rgba(192, 132, 252, 0.4) 0%, rgba(99, 102, 241, 0.2) 100%)',
        transform: isHovering ? 'scale(1.2)' : 'scale(1)',
      }}
    ></div>
  );
};

export default InteractiveMouse;