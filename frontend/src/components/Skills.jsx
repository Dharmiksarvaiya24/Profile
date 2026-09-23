import React from "react";
import { Code2, Server, Wrench, Palette } from "lucide-react";
import "./css/sections.css";
import useScrollAnimation, { useScrollAnimationAll } from "../hooks/useScrollAnimation";

const skillCategories = [
    {
        title: "Frontend",
        icon: <Code2 size={18} />,
        skills: ["React.js","Vue.js","JavaScript","HTML5", "CSS3", "Vite", "Tailwind CSS",],
    },
    {
        title: "Backend",
        icon: <Server size={18} />,
        skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs", "SQL"],
    },
    {
        title: "Tools & DevOps",
        icon: <Wrench size={18} />,
        skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vercel","AWS","Docker","Cloud Flare"],
    },
    {
        title: "Design",
        icon: <Palette size={18} />,
        skills: ["Figma", "Responsive Design", "UI/UX", "CSS Animations", "Canva"],
    },
];

// Different animation per category card
const categoryAnimations = [
    "scroll-slide-left",
    "scroll-slide-right",
    "scroll-slide-left",
    "scroll-slide-right",
];

export default function Skills() {
    const headerRef = useScrollAnimation({ threshold: 0.2 });
    const gridRef = useScrollAnimationAll({ selector: ".scroll-item" });

    return (
        <section className="section-container" id="skills">
            <div className="section-header scroll-fade-down" ref={headerRef}>
                <div className="section-icon-wrapper">
                    <Code2 size={20} />
                </div>
                <h2 className="section-title">Skills</h2>
                <p className="section-subtitle">Technologies I work with</p>
            </div>

            <div className="skills-grid" ref={gridRef}>
                {skillCategories.map((category, index) => (
                    <div
                        className={`skill-category glass-card-section scroll-item ${categoryAnimations[index]} scroll-glow`}
                        key={index}
                    >
                        <div className="skill-category-header">
                            <span className="skill-category-icon">{category.icon}</span>
                            <h3 className="skill-category-title">{category.title}</h3>
                        </div>
                        <div className="skill-tags">
                            {category.skills.map((skill, i) => (
                                <span className="skill-tag" key={i}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
