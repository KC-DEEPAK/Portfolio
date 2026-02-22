import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray<HTMLElement>(".skill-bar-fill").forEach((bar) => {
      const width = bar.getAttribute("data-width");

      gsap.to(bar, {
        width: width || "0%",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skill">
        <p>Java</p>
        <div className="skill-bar">
          <div className="skill-bar-fill" data-width="90%"></div>
        </div>
      </div>

      <div className="skill">
        <p>React</p>
        <div className="skill-bar">
          <div className="skill-bar-fill" data-width="85%"></div>
        </div>
      </div>

      <div className="skill">
        <p>Spring Boot</p>
        <div className="skill-bar">
          <div className="skill-bar-fill" data-width="80%"></div>
        </div>
      </div>

      <div className="skill">
        <p>MySQL</p>
        <div className="skill-bar">
          <div className="skill-bar-fill" data-width="75%"></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;