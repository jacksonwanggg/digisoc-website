import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { InstagramIcon, LinkedInIcon, FacebookIcon } from "./SocialIcons";
import ThemeToggle from "./ThemeToggle";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/unswdigisoc/?hl=en",
  linkedin: "https://www.linkedin.com/company/unsw-digisoc/?originalSubdomain=au",
  facebook: "https://www.facebook.com/unswdigitalsociety/",
};

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/events", label: "Events" },
  { path: "/team", label: "Team" },
  { path: "/contact", label: "Join Us" },
];

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [stagger, setStagger] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const played = sessionStorage.getItem("digisoc-entrance-played");
    if (!played) {
      setStagger(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""} ${stagger ? "navbar-stagger" : ""}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">
            <img src="/digisocLogo.jpeg" alt="DigiSoc" className="logo-icon" />
            DigiSoc
          </Link>

          <div className="navbar-links">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="navbar-right">
            <div className="navbar-socials">
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
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button
          className="mobile-menu-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {NAV_ITEMS.map((item) => (
          <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)}>
            {item.label}
          </Link>
        ))}
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <div className="mobile-menu-socials">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </>
  );
}
