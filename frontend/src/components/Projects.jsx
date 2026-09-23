import React from "react";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import "./css/sections.css";
import useScrollAnimation, { useScrollAnimationAll } from "../hooks/useScrollAnimation";

const projects = [
    {
        title: "Trident Jewellery",
        description:
            "\tDeveloped the live client website tridendesgining.in using React with responsive design, optimized UI/UX, lazy loading for faster performance, and reusable component architecture for scalable and efficient frontend development.",
        liveLink: "https://www.tridentdesigning.in/",
    },
      {
        title: "UniDrive",
        description:
            "Architected a multi-tenant OAuth 2.0 system managing independent token lifecycles across multiple Google accounts, unified into a single real-time workspace.",
        
        liveLink: "https://www.unidrive.dharmik.live",
    },
    {
        title: "GrowwDigit",
        description:
            "Build a Digital merketing agency help businesses grow online through branding, marketing, and performance-driven digital solutions.",
       
        liveLink: "https://growwdigit.in/",
    },
    {
        title: "GitHub PR Review Bot",
        description:
            "Replaced GitHub Copilot's code review feature The moment a PR is opened, it automatically Pulls the code changes from the diff Sends them to an LLM with a review prompt Posts inline comments directly on the PR — like a senior engineer reviewing your code",
        liveLink: "#",
        githubLink: "https://github.com/Dharmiksarvaiya24/Github-copilot-replica-workflow",
    },
];

// Cycle through animation types for each card
const cardAnimations = [
    "scroll-flip-up",
    "scroll-rotate-in",
    "scroll-scale-up",
    "scroll-rotate-in-left",
];

export default function Projects() {
    const headerRef = useScrollAnimation({ threshold: 0.2 });
    const gridRef = useScrollAnimationAll({ selector: ".scroll-item" });
    const linkRef = useScrollAnimation({ threshold: 0.3 });

    return (
        <section className="section-container" id="projects">
            <div className="section-header scroll-scale-up" ref={headerRef}>
                <div className="section-icon-wrapper">
                    <FolderGit2 size={20} />
                </div>
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">Things I've built</p>
            </div>

            <div className="projects-grid" ref={gridRef}>
                {projects.map((project, index) => (
                    <div
                        className={`project-card glass-card-section scroll-item ${cardAnimations[index % cardAnimations.length]} scroll-glow`}
                        key={index}
                    >
                        <div className="project-card-accent" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="tech-stack">
                            {project.techStack?.map((tech, i) => (
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
                className="more-projects-link scroll-fade-up"
                ref={linkRef}
            >
                 GitHub →
            </a>
        </section>
    );
}
