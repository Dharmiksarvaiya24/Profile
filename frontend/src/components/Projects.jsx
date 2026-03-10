import React from "react";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import "./css/sections.css";

const projects = [
    {
        title: "Trident Jewellery",
        description:
            "	Developed the live client website tridendesgining.in using React with responsive design, optimized UI/UX, lazy loading for faster performance, and reusable component architecture for scalable and efficient frontend development.",
        techStack: ["React", "Vite", "Tailwind", "Cloud Flare"],
        liveLink: "https://www.tridentdesigning.in/",
        githubLink: "#",
    },
    {
        title: "PointZ - Reward System",
        description:
            "Developed PointZ, a MERN stack–based social reward platform where users earn points for completing positive tasks, enable friend-controlled point editing for accountability, and redeem points for customizable rewards",
        techStack: ["Vue", "Node.js", "Express", "MongoDB"],
        liveLink: "pointz-gamma.vercel.app/",
        githubLink: "https://github.com/Dharmiksarvaiya24/Pointz",
    },
    {
        title: "Live Voting app - Websocket",
        description:
            "Developed a real-time voting application using React, Node.js, Express, and Socket.IO. Implemented features for seamless user experience and efficient voting.",
        techStack: ["Vue", "Node.js", "Express", "MongoDB", "Socket.IO"],
        liveLink: "socket-three-delta.vercel.app",
        githubLink: "https://github.com/Dharmiksarvaiya24/socket",
    },
    {
        title: "GitHub PR Review Bot",
        description:
            "A productivity application with drag-and-drop task organization, priority labels, due date tracking, and team collaboration features.",
        techStack: ["GitHub Actions", "JSON", "Javascript", "Cloud Flare", "Lamma API"],
        liveLink: "#",
        githubLink: "https://github.com/Dharmiksarvaiya24/git-action",
    },
];

export default function Projects() {
    return (
        <section className="section-container" id="projects">
            <div className="section-header">
                <div className="section-icon-wrapper">
                    <FolderGit2 size={20} />
                </div>
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">Things I've built</p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        className="project-card glass-card-section"
                        key={index}
                        style={{ animationDelay: `${index * 0.12}s` }}
                    >
                        <div className="project-card-accent" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="tech-stack">
                            {project.techStack.map((tech, i) => (
                                <span className="tech-tag" key={i}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                aria-label="View source code"
                            >
                                <Github size={16} />
                                <span>Code</span>
                            </a>
                            {project.liveLink && project.liveLink !== "#" && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link project-link-primary"
                                    aria-label="View live demo"
                                >
                                    <ExternalLink size={16} />
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <a
                href="https://github.com/Dharmiksarvaiya24"
                target="_blank"
                rel="noopener noreferrer"
                className="more-projects-link"
            >
                 GitHub →
            </a>
        </section>
    );
}
