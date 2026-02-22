import ImagePlaceholder from "./ImagePlaceholder";
import ScrollReveal from "./ScrollReveal";

const GALLERY_ITEMS = [
  "DigiSoc Event Photo 1",
  "Workshop Photo",
  "Social Night",
  "Hackathon Team",
  "Industry Night",
  "Team Building",
];

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
          {GALLERY_ITEMS.map((label, i) => (
            <ScrollReveal key={label} delay={i * 80}>
              <ImagePlaceholder
                width="100%"
                height="220px"
                label={label}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
