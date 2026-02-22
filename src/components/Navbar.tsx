import { useEffect } from "react";
import { gsap } from "gsap";

function Navbar() {
  useEffect(() => {
    gsap.from(".navbar", {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-logo">Deepak KC</div>
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
      </div>
    </nav>
  );
}

export default Navbar;