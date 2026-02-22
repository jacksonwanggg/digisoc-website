import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import ExecCarousel from "../components/ExecCarousel";
import Gallery from "../components/Gallery";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCard from "../components/AnimatedCard";
import FloatingOrbs from "../components/FloatingOrbs";
import MagneticButton from "../components/MagneticButton";
import { events } from "../data/events";
import { team } from "../data/team";

export default function Home() {
  const featuredEvents = events.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="section home-about-preview">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">
              Who is <span className="gradient-text">DigiSoc</span>?
            </h2>
            <p className="section-subtitle">
              We are the UNSW Digital Society — a student-run community dedicated
              to equipping students with the digital skills, industry connections,
              and creative experiences they need to thrive.
            </p>
          </ScrollReveal>
          <div className="grid-3">
            <ScrollReveal delay={0}>
              <AnimatedCard className="" delay={0}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3>Learn</h3>
                  <p>
                    Hands-on workshops covering web dev, cloud, design, data, and
                    more.
                  </p>
                </div>
              </AnimatedCard>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <AnimatedCard className="" delay={0}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3>Connect</h3>
                  <p>
                    Network with industry professionals and fellow students who
                    share your passion.
                  </p>
                </div>
              </AnimatedCard>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <AnimatedCard className="" delay={0}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <h3>Grow</h3>
                  <p>
                    Build your portfolio, land internships, and kickstart your
                    digital career.
                  </p>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={300}>
            <div className="section-link">
              <Link to="/about" className="btn btn-outline">
                Learn More About Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Gallery />

      <section className="section home-events-preview">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="section-subtitle">
              From workshops to hackathons, there&apos;s always something happening at
              DigiSoc.
            </p>
          </ScrollReveal>
          <div className="grid-3">
            {featuredEvents.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 100}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="section-link">
              <Link to="/events" className="btn btn-outline">
                View All Events
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section home-team-preview">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="section-subtitle">
              The dedicated executives making it all happen.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ExecCarousel members={team} />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="section-link">
              <Link to="/team" className="btn btn-outline">
                View Full Team
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section cta-section">
        <FloatingOrbs variant="cta" />
        <div className="container">
          <ScrollReveal>
            <h2>
              Ready to <span className="gradient-text gradient-text-pulse">Get Involved</span>?
            </h2>
            <p>
              Join hundreds of UNSW students building their digital future with
              DigiSoc.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="cta-buttons">
              <Link to="/contact">
                <MagneticButton className="btn-primary">
                  Join the Community
                </MagneticButton>
              </Link>
              <Link to="/events">
                <MagneticButton className="btn-outline">
                  Browse Events
                </MagneticButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
