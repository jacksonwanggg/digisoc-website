import { type ReactNode, useEffect, useState } from "react";
import { useTilt } from "../hooks/useTilt";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  onClick,
}: AnimatedCardProps) {
  const [canHover, setCanHover] = useState(false);
  const { ref, shineRef, tiltHandlers } = useTilt<HTMLDivElement>();

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      className={`tilt-card${onClick ? " tilt-card-clickable" : ""}`}
      style={style}
      onClick={onClick}
      {...(canHover ? tiltHandlers : {})}
    >
      <div
        ref={ref}
        className={`card card-shimmer tilt-card-inner ${className}`}
      >
        {children}
        {canHover && (
          <div ref={shineRef} className="tilt-card-shine" />
        )}
      </div>
    </div>
  );
}
