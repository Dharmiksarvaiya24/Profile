"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import "./css/background.css"

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* Background Video with Blur */}
      <div className="background-wrapper">
        <video autoPlay loop muted playsInline className="portfolio-video">
          <source src="/profile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay */}
        <div className="gradient-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        <div className="card-container">
          {/* Glassmorphic Card */}
          <div className="glass-card">
            {/* Top Accent Line */}
            <div className="accent-line"></div>

            {/* Profile Photo */}
            <div className="profile-photo-wrapper">
              <div className="photo-ring">
                <img
                  src="https://i.ibb.co/fVzWrDRt/Profile.png"
                  alt="Profile photo"
                  className="profile-photo"
                />
              </div>
            </div>

            {/* Name */}
            <h1 className="profile-name">Dharmik Sarvaiya</h1>

            {/* Title with Accent */}
            <div className="title-section">
              <p className="profile-title">
                Pursuing Bachelor of Engineering
              </p>
              <span className="title-accent">@ RRIT Bengaluru</span>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Social Icons */}
            <div className="social-section">
              <p className="social-label">Connect</p>
              <div className="social-icons">
                <a
                  href="https://github.com/Dharmiksarvaiya24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://in.linkedin.com/in/dharmiksarvaiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
               <a href="mailto:dharmik.be@gmail.com" className="social-icon" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
