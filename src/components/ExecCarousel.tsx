import { useRef, useState, useCallback, useEffect } from "react";
import type { TeamMember } from "../data/team";
import { getExecPhotoUrl } from "../data/team";

interface ExecCarouselProps {
  members: TeamMember[];
}

export default function ExecCarousel({ members }: ExecCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [, setActiveIndex] = useState(0);
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
              {member.photo ? (
                <img src={getExecPhotoUrl(member.photo)} alt="" className="exec-avatar-img" />
              ) : (
                getInitials(member.name)
              )}
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="exec-linkedin"
                aria-label={`${member.name} on LinkedIn`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
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

    </div>
  );
}
