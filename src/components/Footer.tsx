import { Link } from "react-router-dom";
import { InstagramIcon, LinkedInIcon, FacebookIcon } from "./SocialIcons";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/unswdigisoc/?hl=en",
  linkedin: "https://www.linkedin.com/company/unsw-digisoc/?originalSubdomain=au",
  facebook: "https://www.facebook.com/unswdigitalsociety/",
};

const RUBRIC_URL = "https://campus.hellorubric.com/?s=6334";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <img src="/digisocLogo.jpeg" alt="DigiSoc" />
              <h3>
                UNSW <span className="gradient-text">DigiSoc</span>
              </h3>
            </div>
            <p>
              Empowering UNSW students interested in all things digital by
              building the skills required to succeed.
            </p>
            <div className="footer-socials">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon size={18} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Pages</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/events">Events</Link>
              <Link to="/team">Team</Link>
              <Link to="/contact">Join Us</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-links">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="mailto:digisoc@unsw.edu.au">Email Us</a>
              <a href={RUBRIC_URL} target="_blank" rel="noopener noreferrer">
                <img src="/rubric logo.png" alt="" width="20" height="20" />
                Find Us on Rubric
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; DigiSoc 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
