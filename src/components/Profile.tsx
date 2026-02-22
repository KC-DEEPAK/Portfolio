import profilePic from "../assets/profile.jpg";

function Profile() {
  return (
    <section id="profile" className="profile">
      <div className="profile-container">

        <div className="profile-image">
          <img src={profilePic} alt="Deepak KC" />
        </div>

        <div className="profile-content">
          <h2>About Me</h2>
          <p>
            I'm Deepak KC, a passionate Full Stack Developer who loves building
            modern web applications with React, Java, and Node.js.
          </p>

          <div className="profile-skills">
            <span>React</span>
            <span>Java</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>GSAP</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Profile;