import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-content", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <section id="about" className="hero">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a passionate Full Stack Developer skilled in Java, Spring Boot,
          React, and MySQL. I enjoy building scalable and efficient web applications.
        </p>
      </div>
    </section>
  );
}

export default About;