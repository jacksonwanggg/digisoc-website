import { useEffect, useState } from "react";

const COLORS = ["#6C5CE7", "#A855F7", "#FF6584", "#43E8C3"];
const SHAPE_COUNT = 20;

interface ShapeConfig {
  id: number;
  x: string;
  y: string;
  size: number;
  color: string;
  burstX: string;
  burstY: string;
  burstRot: string;
  shape: "circle" | "triangle" | "square" | "hexagon";
  delay: number;
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createShapeConfigs(): ShapeConfig[] {
  return Array.from({ length: SHAPE_COUNT }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const distance = randomBetween(200, 600);
    return {
      id: i,
      x: "50%",
      y: "50%",
      size: randomBetween(8, 24),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      burstX: `${Math.cos(angle) * distance}px`,
      burstY: `${Math.sin(angle) * distance}px`,
      burstRot: `${randomBetween(-360, 360)}deg`,
      shape: (["circle", "triangle", "square", "hexagon"] as const)[Math.floor(Math.random() * 4)],
      delay: randomBetween(0, 200),
    };
  });
}

function getShapeStyle(shape: ShapeConfig["shape"], size: number): React.CSSProperties {
  switch (shape) {
    case "circle":
      return { width: size, height: size, borderRadius: "50%" };
    case "square":
      return { width: size, height: size, borderRadius: "2px" };
    case "triangle":
      return {
        width: 0, height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid currentColor`,
        background: "transparent",
      };
    case "hexagon":
      return { width: size, height: size, borderRadius: "30%", transform: "rotate(45deg)" };
  }
}

export default function EntranceAnimation() {
  const [shapes, setShapes] = useState<ShapeConfig[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const played = sessionStorage.getItem("digisoc-entrance-played");
    if (played) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    sessionStorage.setItem("digisoc-entrance-played", "1");
    setShapes(createShapeConfigs());
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setShapes([]);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible || shapes.length === 0) return null;

  return (
    <div className="entrance-shapes-container" aria-hidden="true">
      {shapes.map((s) => (
        <div
          key={s.id}
          className="entrance-shape"
          style={{
            left: s.x,
            top: s.y,
            color: s.color,
            background: s.shape !== "triangle" ? s.color : undefined,
            opacity: 0.7,
            animationDelay: `${s.delay}ms`,
            "--burst-x": s.burstX,
            "--burst-y": s.burstY,
            "--burst-rot": s.burstRot,
            ...getShapeStyle(s.shape, s.size),
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
