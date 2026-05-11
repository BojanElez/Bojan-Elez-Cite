"use client";

import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.unobserve(section);
  }, []);


  const projects = [
    {
      title: "[Project 1 Name]",
      description: "Replace with actual project description from your resume or portfolio. Include the problem it solves, your role, and the impact it had.",
      image: "/api/placeholder/400/250",
      category: "Web App",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL"],
      features: [
        "Feature 1 that showcases your skills",
        "Feature 2 highlighting technical complexity",
        "Feature 3 demonstrating user experience focus"
      ],
      github: "https://github.com/bojanelez/project-1",
      demo: "https://project-1-demo.vercel.app",
      status: "Completed"
    },
    {
      title: "[Project 2 Name]",
      description: "Add your second most impressive project here. Focus on different technical skills than the first project to show versatility.",
      image: "/api/placeholder/400/250",
      category: "Frontend",
      technologies: ["Vue.js", "JavaScript", "Node.js", "MongoDB", "Express"],
      features: [
        "Responsive design with mobile-first approach",
        "Real-time functionality implementation", 
        "Performance optimization techniques applied"
      ],
      github: "https://github.com/bojanelez/project-2",
      demo: "https://project-2-demo.netlify.app",
      status: "Completed"
    },
    {
      title: "[Project 3 Name]",
      description: "Include a third project that demonstrates different aspects of your skillset. This could be a personal project or something from work (if permitted).",
      image: "/api/placeholder/400/250",
      category: "Full Stack",
      technologies: ["React", "Python", "Django", "PostgreSQL", "AWS"],
      features: [
        "Full-stack architecture design",
        "API development and integration",
        "Cloud deployment and DevOps"
      ],
      github: "https://github.com/bojanelez/project-3",
      demo: "https://project-3-demo.herokuapp.com",
      status: "In Progress"
    },
    {
      title: "[Open Source Contribution]",
      description: "If you have open source contributions, feature one here. Explain the project you contributed to and the specific improvements you made.",
      image: "/api/placeholder/400/250",
      category: "Open Source",
      technologies: ["JavaScript", "React", "Jest", "GitHub Actions"],
      features: [
        "Bug fixes and feature enhancements",
        "Documentation improvements",
        "Community collaboration and code review"
      ],
      github: "https://github.com/open-source-project/repo",
      demo: "https://open-source-project.org",
      status: "Ongoing"
    },
    {
      title: "[Personal/Learning Project]",
      description: "Add a personal project or something you built while learning new technologies. This shows your passion for continuous learning.",
      image: "/api/placeholder/400/250",
      category: "Learning",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma"],
      features: [
        "Modern development practices",
        "Experimental features exploration",
        "Personal skill development"
      ],
      github: "https://github.com/bojanelez/personal-project",
      demo: "https://personal-project.vercel.app",
      status: "Completed"
    },
    {
      title: "[Client/Freelance Project]",
      description: "If you have client work or freelance projects (with permission), showcase one here to demonstrate real-world application of your skills.",
      image: "/api/placeholder/400/250",
      category: "Client Work",
      technologies: ["React", "Firebase", "Stripe", "Material-UI"],
      features: [
        "Client requirement analysis and implementation",
        "Payment integration and security",
        "Responsive design and accessibility"
      ],
      github: "https://github.com/bojanelez/client-project",
      demo: "https://client-project-demo.com",
      status: "Completed"
    }
  ];

  const categories = ["All", "Web App", "Frontend", "Full Stack", "Open Source", "Learning", "Client Work"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="projects-section"
    >
      <div className="projects-container">
        <div className={`projects-header ${
            isVisible ? "projects-header-visible" : "projects-header-hidden"
          }`}>
          <div className="projects-title">
            <h2 className="projects-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="projects-subtitle">
              A showcase of my recent work, demonstrating various technologies and problem-solving approaches
            </p>

            <div className="projects-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`projects-filter-btn ${
                    filter === category
                      ? "project-filter-active"
                      : "project-filter-inactive"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`project-card ${
                  isVisible
                    ? "project-card-visible"
                    : "project-card-hidden"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="project-image-container">
                  <div className="project-image-content">
                    <div className="project-image-emoji">🚀</div>
                    <div className="project-image-text">Project Screenshot</div>
                  </div>
                  
                  <div className="project-status-badge">
                    <span className={`project-status ${
                      project.status === "Completed" 
                        ? "project-status-completed"
                        : project.status === "In Progress"
                        ? "project-status-progress"
                        : "project-status-ongoing"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-card-header">
                    <div className="project-title-wrapper">
                      <h3 className="project-title">
                        {project.title}
                      </h3>
                      <span className="project-category-badge">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="project-description">
                      {project.description}
                    </p>
                  </div>

                  <div className="project-features-section">
                    <h4 className="project-features-title">
                      Key Features:
                    </h4>
                    <ul className="project-features">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="project-feature-item">
                          <div className="project-feature-dot"></div>
                          <span className="project-feature-text">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-technologies-section">
                    <h4 className="project-technologies-title">
                      Technologies:
                    </h4>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="project-tech-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-github"
                    >
                      <svg className="project-link-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-demo"
                    >
                      <svg className="project-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-note">
            <div className="projects-note-card">
              <h3 className="projects-note-title">
                📝 Important Note
              </h3>
              <p className="projects-note-text">
                Please replace all placeholder projects above with your actual projects from your resume or portfolio. 
                Include real project names, descriptions, technologies used, and working links to GitHub repositories and live demos.
              </p>
              <p className="projects-note-text">
                Consider showcasing 4-6 of your best projects that demonstrate different skills and technologies. 
                If you&apos;re early in your career, include personal projects, coursework, or open source contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
