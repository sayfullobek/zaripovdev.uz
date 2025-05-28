import React from "react";

const projects = [
  {
    title: "Weather Project",
    description: "Weather Project",
    image: "/assets/weather-img.png",
    github: "https://github.com/yourusername/todo-app",
    demo: "https://yourdemo.com/todo-app",
  },
  {
    title: "Weather App",
    description: "A weather app that shows current weather data.",
    image: "https://via.placeholder.com/300x180",
    github: "https://github.com/yourusername/weather-app",
    demo: "https://yourdemo.com/weather-app",
  },
];

const MyProjects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">Some of the projects I've worked on:</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
