import heroBg from "../assets/hero-bg.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          👋 I'm <span className="highlight">Deepak KC</span>
        </h1>

        <h2>Full Stack Developer | AI Enthusiast</h2>

        <p>
          Passionate about building modern web applications with React,
          Java, and Node.js. Focused on clean architecture and performance.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Get In Touch</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;