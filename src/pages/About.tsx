import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="page-header">
        <div
          className="blob blob-purple animate-pulse"
          style={{ width: 400, height: 400, top: -100, right: -100 }}
        />
        <div className="container">
          <h1>
            About <span className="gradient-text">DigiSoc</span>
          </h1>
          <p>
            Learn about who we are, what we stand for, and why we&apos;re
            passionate about digital.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-content">
          <p>
            The <strong>UNSW Digital Society (DigiSoc)</strong> is a
            student-driven community that empowers students interested in all
            things digital. Whether it&apos;s web development, UI/UX design,
            data analytics, cloud computing, or digital marketing, DigiSoc
            provides the platform to learn, connect, and grow.
          </p>
          <p>
            Founded with the vision of bridging the gap between university
            education and industry expectations, DigiSoc runs workshops, panels,
            hackathons, and social events that equip members with practical
            skills and valuable connections.
          </p>
          <p>
            We believe every UNSW student — regardless of faculty or experience
            level — should have the opportunity to explore the digital world and
            build the skills required to succeed in the modern economy.
          </p>

          <div className="about-values">
            <h2 style={{ marginBottom: "2rem" }}>
              Our <span className="gradient-text">Values</span>
            </h2>
            <div className="grid-2">
              <div className="card value-item">
                <h3>Accessibility</h3>
                <p>
                  We welcome students from every background and skill level.
                  There are no prerequisites to joining DigiSoc.
                </p>
              </div>
              <div className="card value-item">
                <h3>Community</h3>
                <p>
                  We foster genuine relationships between students and industry
                  professionals through collaborative events.
                </p>
              </div>
              <div className="card value-item">
                <h3>Innovation</h3>
                <p>
                  We stay ahead of digital trends and bring cutting-edge topics
                  to our members through workshops and hackathons.
                </p>
              </div>
              <div className="card value-item">
                <h3>Empowerment</h3>
                <p>
                  We equip students with practical skills, portfolio projects,
                  and the confidence to pursue their digital ambitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2>
            Want to be part of{" "}
            <span className="gradient-text">something bigger</span>?
          </h2>
          <p>
            Whether you want to attend events, collaborate on projects, or lead
            the society, there&apos;s a place for you.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Join DigiSoc
            </Link>
            <Link to="/events" className="btn btn-outline">
              See Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
