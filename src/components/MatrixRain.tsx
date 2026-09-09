import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFpythondefclassreturnifelseforwhileimportprintTrueFalseNone';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns).fill(1).map(() => Math.random() * -100);

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright head of the drop
        const brightness = Math.random();
        if (brightness > 0.95) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#00ff41';
          ctx.shadowBlur = 10;
        } else if (brightness > 0.8) {
          ctx.fillStyle = '#4ade80';
          ctx.shadowColor = '#22c55e';
          ctx.shadowBlur = 5;
        } else {
          ctx.fillStyle = `rgba(34, 197, 94, ${0.3 + Math.random() * 0.5})`;
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        // Reset drop when it reaches bottom with randomness
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5 + Math.random() * 0.5;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
