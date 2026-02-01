"use client";

import { useEffect, useRef } from "react";

interface Confetti {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  size: number;
  shape: "circle" | "square" | "triangle" | "star";
}

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const confetti: Confetti[] = [];
    const colors = [
      "#FF6B00", // FPT Orange
      "#E63946", // FPT Red
      "#FFD700", // Gold
      "#FF1493", // Deep Pink
      "#00CED1", // Dark Turquoise
      "#FF4500", // Orange Red
      "#9400D3", // Dark Violet
      "#32CD32", // Lime Green
      "#FF69B4", // Hot Pink
      "#4169E1", // Royal Blue
    ];

    const shapes: Array<"circle" | "square" | "triangle" | "star"> = ["circle", "square", "triangle", "star"];

    // Draw different shapes
    const drawShape = (shape: string, size: number) => {
      switch (shape) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "square":
          ctx.fillRect(-size / 2, -size / 2, size, size);
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -size / 2);
          ctx.lineTo(-size / 2, size / 2);
          ctx.lineTo(size / 2, size / 2);
          ctx.closePath();
          ctx.fill();
          break;
        case "star":
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
            const x = Math.cos(angle) * size / 2;
            const y = Math.sin(angle) * size / 2;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
          break;
      }
    };

    // Create confetti
    const createConfetti = () => {
      const x = Math.random() * canvas.width;
      const startY = -20;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];

      confetti.push({
        x,
        y: startY,
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 2 + 2,
        color,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        size: 8 + Math.random() * 8,
        shape,
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw confetti
      for (let i = confetti.length - 1; i >= 0; i--) {
        const c = confetti[i];

        // Update position
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.2; // Gravity
        c.vx *= 0.99; // Air resistance
        c.rotation += c.rotationSpeed;

        // Remove confetti that fell off screen
        if (c.y > canvas.height + 50) {
          confetti.splice(i, 1);
          continue;
        }

        // Draw confetti with rotation
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((c.rotation * Math.PI) / 180);
        ctx.fillStyle = c.color;
        drawShape(c.shape, c.size);
        ctx.restore();
      }

      // Create new confetti periodically
      if (Math.random() < 0.15 && confetti.length < 100) {
        createConfetti();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
    />
  );
}
