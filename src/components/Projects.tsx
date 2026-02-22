function Projects() {
  const projectData = [
    {
      title: "Smart Price Analysis",
      desc: "Crop price prediction system.",
    },
    {
      title: "Student Management",
      desc: "CRUD app using Java + MySQL.",
    },
    {
      title: "AI-Power Intellegence",
      desc: "React + Node mini store.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;