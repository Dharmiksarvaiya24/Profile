import React from "react";
import { Briefcase } from "lucide-react";
import "./css/sections.css";

const experiences = [
  {
    role: "SDE Intern",
    company: "FlutterFlirt Pvt. Ltd.",
    duration: "FEB 2026 – Present",
    description:
      "Developed scalable full-stack applications, integrated REST APIs with databases, and collaborated through Git-based agile workflows.",
    current: true,
  },
  {
    role: "Student Intern",
    company: "Tops Technologies Pvt. Ltd.",
    duration: "FEB 2023 – MAR 2023",
    description:
      "Contributed to full-stack web development using modern technologies, AWS, and Git, helping build and optimize real-world applications.",
    current: false,
  },
]

export default function Experience() {
  return (
    <section className="section-container" id="experience">
      <div className="section-header">
        <div className="section-icon-wrapper">
          <Briefcase size={20} />
        </div>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            className={`timeline-item ${exp.current ? "timeline-current" : ""}`}
            key={index}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="timeline-dot">
              <div className="timeline-dot-inner" />
            </div>
            <div className="timeline-content glass-card-section">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <span className="timeline-duration">
                  {exp.current && <span className="current-badge">Current</span>}
                  {exp.duration}
                </span>
              </div>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
