import { Link } from "react-router-dom";
import { useRef, useEffect, useCallback, useState } from "react";
import StarField from "./StarField";
import FloatingOrbs from "./FloatingOrbs";
import MagneticButton from "./MagneticButton";

const RUBRIC_URL = "https://campus.hellorubric.com/?s=6334";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);
  const [stagger, setStagger] = useState(false);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
    const played = sessionStorage.getItem("digisoc-entrance-played");
    if (!played) {
      setStagger(true);
    } else {
      setStagger(true);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!canHover || !parallaxRef.current) return;

      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = ((clientX - centerX) / centerX) * -3;
      const offsetY = ((clientY - centerY) / centerY) * -3;

      const blobs = parallaxRef.current.querySelectorAll<HTMLElement>(".blob");
      const grid = parallaxRef.current.querySelector<HTMLElement>(".hero-grid");

      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 1.5;
        blob.style.transform = `translate3d(${offsetX * factor}px, ${offsetY * factor}px, 0)`;
      });

      if (grid) {
        grid.style.transform = `translate3d(${offsetX * 0.5}px, ${offsetY * 0.5}px, 0)`;
      }
    },
    [canHover]
  );

  return (
    <section
      className="hero"
      ref={parallaxRef}
      onMouseMove={handleMouseMove}
    >
      <div className="hero-photo-bg">
        <div className="photo-placeholder-inner">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span>DigiSoc Group Photo</span>
        </div>
      </div>
      <div className="hero-overlay" />

      <StarField count={50} />
      <FloatingOrbs variant="hero" />
      <div className="hero-grid" />

      <div className={`container hero-content ${stagger ? "hero-stagger" : ""}`}>
        <img src="/digisocLogo.jpeg" alt="DigiSoc Logo" className="hero-logo" />
        <span className="hero-badge">UNSW Digital Society</span>
        <h1>
          Empowering the Next Generation of{" "}
          <span className="gradient-text">Digital Leaders</span>
        </h1>
        <p>
          The UNSW Digital Society aims to empower students interested in all
          things digital by building the skills required to succeed in today&apos;s
          tech-driven world.
        </p>
        <div className="hero-buttons">
          <Link to="/events">
            <MagneticButton className="btn-primary">
              Explore Events
            </MagneticButton>
          </Link>
          <Link to="/contact">
            <MagneticButton className="btn-outline">
              Join Us
            </MagneticButton>
          </Link>
          <a href={RUBRIC_URL} target="_blank" rel="noopener noreferrer">
            <MagneticButton className="btn-rubric">
              <img src="/rubric logo.png" alt="" width="20" height="20" />
              Find Us on Rubric
              <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </MagneticButton>
          </a>
        </div>
      </div>
    </section>
  );
}
