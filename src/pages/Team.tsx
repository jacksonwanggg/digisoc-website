import ExecCarousel from "../components/ExecCarousel";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ScrollReveal from "../components/ScrollReveal";
import { team } from "../data/team";

export default function Team() {
  return (
    <>
      <section className="page-header">
        <div
          className="blob blob-cyan animate-pulse"
          style={{ width: 400, height: 400, top: -100, right: -100 }}
        />
        <div className="container">
          <h1>
            The <span className="gradient-text">Team</span>
          </h1>
          <p>
            Meet the passionate executives who make DigiSoc possible.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <ExecCarousel members={team} />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{ marginTop: "4rem", textAlign: "center" }}>
              <h2 className="section-title" style={{ marginBottom: "2rem" }}>
                About the <span className="gradient-text">Team</span>
              </h2>
              <ImagePlaceholder
                width="100%"
                height="300px"
                label="Team Group Photo"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
