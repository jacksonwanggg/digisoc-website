import { useRef, useState, useCallback, useEffect } from "react";
import type { TeamMember } from "../data/team";

interface ExecCarouselProps {
  members: TeamMember[];
}

export default function ExecCarousel({ members }: ExecCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0, hasMoved: false });

  const totalCards = members.length;
  const cardWidth = 280 + 24;

  const updateActiveIndex = useCallback(() => {
    if (!trackRef.current) return;
    const scrollPos = trackRef.current.scrollLeft;
    const idx = Math.round(scrollPos / cardWidth);
    setActiveIndex(Math.min(idx, totalCards - 1));
  }, [cardWidth, totalCards]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => track.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  const scrollTo = useCallback((direction: "left" | "right") => {
    if (!trackRef.current) return;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }, [cardWidth]);

  const scrollToDot = useCallback((index: number) => {
    if (!trackRef.current) return;
    trackRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  }, [cardWidth]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    dragState.current = {
      startX: e.pageX - trackRef.current.offsetLeft,
      scrollLeft: trackRef.current.scrollLeft,
      hasMoved: false,
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = x - dragState.current.startX;
    if (Math.abs(walk) > 5) dragState.current.hasMoved = true;
    trackRef.current.scrollLeft = dragState.current.scrollLeft - walk;
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="exec-carousel" aria-label="Executive team carousel">
      <button
        className="exec-carousel-arrow left"
        onClick={() => scrollTo("left")}
        aria-label="Scroll left"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div
        ref={trackRef}
        className={`exec-carousel-track ${isDragging ? "dragging" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {members.map((member) => (
          <div key={member.id} className="exec-carousel-card">
            <div className="exec-avatar" style={{ background: member.color }}>
              <div className="exec-avatar-ring" />
              {getInitials(member.name)}
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      <button
        className="exec-carousel-arrow right"
        onClick={() => scrollTo("right")}
        aria-label="Scroll right"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="exec-carousel-dots">
        {members.map((_, i) => (
          <button
            key={i}
            className={`exec-carousel-dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => scrollToDot(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
