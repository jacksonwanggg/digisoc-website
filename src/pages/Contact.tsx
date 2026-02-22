import { InstagramIcon, LinkedInIcon, FacebookIcon } from "../components/SocialIcons";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/unswdigisoc/?hl=en",
  linkedin: "https://www.linkedin.com/company/unsw-digisoc/?originalSubdomain=au",
  facebook: "https://www.facebook.com/unswdigitalsociety/",
};

export default function Contact() {
  return (
    <>
      <section className="page-header">
        <div
          className="blob blob-purple animate-pulse"
          style={{ width: 400, height: 400, top: -100, left: -100 }}
        />
        <div className="container">
          <h1>
            Get <span className="gradient-text">Involved</span>
          </h1>
          <p>
            Connect with us, follow our socials, and join the DigiSoc community.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Join the Community</h3>
              <p>
                Whether you&apos;re a first-year looking to explore digital or a
                final-year ready to lead, DigiSoc has a place for you. Follow us
                on socials, attend our events, and become part of UNSW&apos;s
                premier digital community.
              </p>

              <h3>How to Join</h3>
              <p>
                Membership is open to all UNSW students. Sign up through our
                SpArc page during O-Week or any time during the semester. It&apos;s
                free!
              </p>

              <h3>Get in Touch</h3>
              <p>
                Have a question, partnership idea, or just want to say hi? Reach
                out through any of our channels.
              </p>
            </div>

            <div>
              <div className="contact-links">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <InstagramIcon size={24} />
                  <div>
                    <strong>Instagram</strong>
                    <br />
                    @unswdigisoc
                  </div>
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <LinkedInIcon size={24} />
                  <div>
                    <strong>LinkedIn</strong>
                    <br />
                    UNSW DigiSoc
                  </div>
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <FacebookIcon size={24} />
                  <div>
                    <strong>Facebook</strong>
                    <br />
                    UNSW Digital Society
                  </div>
                </a>
                <a
                  href="mailto:digisoc@unsw.edu.au"
                  className="contact-link-item"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <strong>Email</strong>
                    <br />
                    digisoc@unsw.edu.au
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2>
            Let&apos;s build the{" "}
            <span className="gradient-text">digital future</span> together.
          </h2>
          <p>
            Follow us, attend events, and become part of something incredible.
          </p>
        </div>
      </section>
    </>
  );
}
