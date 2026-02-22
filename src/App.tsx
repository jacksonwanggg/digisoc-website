import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";
import EntranceAnimation from "./components/EntranceAnimation";
import StarTrail from "./components/StarTrail";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <EntranceAnimation />
      <StarTrail />
      <MouseGlow />
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
