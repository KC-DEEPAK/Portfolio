import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ParticlesBackground from "./components/ParticlesBackground";
import Profile from "./components/Profile";
import "./index.css";

function App() {
  useEffect(() => {
    const progress = document.querySelector(".scroll-progress") as HTMLElement;

    const handleScroll = () => {
      const scrolled =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      progress.style.width = scrolled + "%";
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Profile />
      <ParticlesBackground />
      <Projects />
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  );
}

export default App;