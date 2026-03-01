import ScrollReveal from "./ScrollReveal";

const base = typeof import.meta !== "undefined" && import.meta.env?.BASE_URL ? import.meta.env.BASE_URL : "/";
const GALLERY_IMAGES = [1, 2, 3, 4, 5, 6].map((n) => `${base}galleryShowcase/pic${n}.png`);

export default function Gallery() {
  return (
    <section className="section" style={{ background: "var(--bg-tertiary)" }}>
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="section-subtitle">
            Highlights from our events, workshops, and community moments.
          </p>
        </ScrollReveal>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((src, i) => (
            <ScrollReveal key={src} delay={i * 80}>
              <div className="gallery-item">
                <img src={src} alt={`Gallery ${i + 1}`} className="gallery-img" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
