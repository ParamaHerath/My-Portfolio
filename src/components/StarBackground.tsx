import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number, y: number, radius: number, speed: number, alpha: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < 250; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 1.5,
          speed: Math.random() * 1.0 + 0.2,
          alpha: Math.random() * 0.8 + 0.2
        });
      }
    };

    const drawAndMove = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        star.y -= star.speed;
        star.x -= star.speed; // Move leftwards as well for the top-left trajectory

        // Respawn when off-screen (top or left)
        if (star.y < 0 || star.x < 0) {
          // Distribute new spawns randomly along either the bottom or right edge
          if (Math.random() > 0.5) {
            star.x = canvas.width;
            star.y = Math.random() * canvas.height;
          } else {
            star.x = Math.random() * canvas.width;
            star.y = canvas.height;
          }
        }
      });
      animationFrameId = requestAnimationFrame(drawAndMove);
    };

    window.addEventListener('resize', resize);
    resize();
    initStars();
    drawAndMove();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-60" />;
};

export default StarBackground;