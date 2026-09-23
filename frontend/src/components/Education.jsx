import React from "react";
import { GraduationCap } from "lucide-react";
import "./css/sections.css";
import useScrollAnimation, { useScrollAnimationAll } from "../hooks/useScrollAnimation";

const education = [
    {
        degree: "Bachelor of Engineering",
        field: "Computer Science & Engineering",
        institution: "RRIT Bengaluru",
        year: "2023 – 2027 (Expected)",
        description:
            "Pursuing B.E. in Computer Science with focus on web technologies, data structures, and software engineering. Active participant in technical clubs and hackathons.",
        current: true,
    },
    {
        degree: "Diploma in Computer Science",
        field: "Computer Science",
         institution: "Gujarat Technological University",
        year: "2021 – 2023",
        description:
            "Completed diploma in computer science with a strong foundation in computer science and engineering.",
        current: false,
    },
    {
        degree: "Secondary School (10th)",
        field: "General",
        institution: "Gujarat Board",
        year: "2021",
        description:
            "Completed secondary school education with excellent academic performance and early interest in technology.",
        current: false,
    },
];

export default function Education() {
    const headerRef = useScrollAnimation({ threshold: 0.2 });
    const timelineRef = useScrollAnimationAll({ selector: ".scroll-item" });

    return (
        <section className="section-container" id="education">
            <div className="section-header scroll-rotate-in" ref={headerRef}>
                <div className="section-icon-wrapper">
                    <GraduationCap size={20} />
                </div>
                <h2 className="section-title">Education</h2>
                <p className="section-subtitle">My academic background</p>
            </div>

            <div className="timeline" ref={timelineRef}>
                {education.map((edu, index) => (
                    <div
                        className={`timeline-item scroll-item scroll-flip-up scroll-glow ${edu.current ? "timeline-current" : ""}`}
                        key={index}
                    >
                        <div className="timeline-dot">
                            <div className="timeline-dot-inner" />
                        </div>
                        <div className="timeline-content glass-card-section">
                            <div className="timeline-header">
                                <div>
                                    <h3 className="timeline-role">{edu.degree}</h3>
                                    <span className="timeline-company">{edu.field}</span>
                                </div>
                                <span className="timeline-duration">
                                    {edu.current && <span className="current-badge">Current</span>}
                                    {edu.year}
                                </span>
                            </div>
                            <p className="timeline-institution">{edu.institution}</p>
                            <p className="timeline-description">{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
