import { useEffect, useRef } from "react";

const COLORS = ["#6C5CE7", "#A855F7", "#FF6584", "#43E8C3"];

export default function StarTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supportsHover || reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawn.current < 40) return;
      lastSpawn.current = now;

      if (!containerRef.current) return;

      const particle = document.createElement("div");
      particle.className = "star-particle";

      const size = 4 + Math.random() * 4;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const dx = (Math.random() - 0.5) * 30;
      const dy = (Math.random() - 0.5) * 30;

      particle.style.cssText = `
        left: ${e.clientX - size / 2}px;
        top: ${e.clientY - size / 2}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        --dx: ${dx}px;
        --dy: ${dy}px;
      `;

      containerRef.current.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={containerRef} className="star-trail-container" aria-hidden="true" />;
}
