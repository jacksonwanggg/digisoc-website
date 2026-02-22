import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="blob blob-purple hero-blob-1 animate-pulse" />
      <div className="blob blob-pink hero-blob-2 animate-float" />

      <div className="container hero-content">
        <span className="hero-badge">UNSW Digital Society</span>
        <h1>
          Empowering the Next Generation of{" "}
          <span className="gradient-text">Digital Leaders</span>
        </h1>
        <p>
          The UNSW Digital Society aims to empower students interested in all
          things digital by building the skills required to succeed in today's
          tech-driven world.
        </p>
        <div className="hero-buttons">
          <Link to="/events" className="btn btn-primary">
            Explore Events
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  );
}
