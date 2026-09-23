"use client"

import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import React, { lazy, Suspense, useRef, useEffect, useCallback } from "react"
import "./css/background.css"
import "./css/scroll-animations.css"
import useScrollAnimation from "../hooks/useScrollAnimation"

// Lazy load sections for performance
const Experience = lazy(() => import("./Experience.jsx"))
const Projects = lazy(() => import("./Projects.jsx"))
const Skills = lazy(() => import("./Skills.jsx"))
const Education = lazy(() => import("./Education.jsx"))

function SectionLoader() {
  return (
    <div className="section-loader">
      <div className="section-loader-spinner" />
    </div>
  )
}

export default function Portfolio() {
  const scrollToContent = () => {
    const el = document.getElementById("experience")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const footerRef = useScrollAnimation({ threshold: 0.3 })

  // --- Seamless video crossfade logic ---
  const videoARef = useRef(null)
  const videoBRef = useRef(null)
  const activeRef = useRef("A") // tracks which video is currently visible

  const crossfade = useCallback(() => {
    const a = videoARef.current
    const b = videoBRef.current
    if (!a || !b) return

    if (activeRef.current === "A") {
      // B takes over
      b.currentTime = 0
      b.play().catch(() => {})
      b.style.opacity = "1"
      a.style.opacity = "0"
      activeRef.current = "B"
    } else {
      // A takes over
      a.currentTime = 0
      a.play().catch(() => {})
      a.style.opacity = "1"
      b.style.opacity = "0"
      activeRef.current = "A"
    }
  }, [])

  useEffect(() => {
    const a = videoARef.current
    const b = videoBRef.current
    if (!a || !b) return

    // Start video A visible, B hidden
    a.style.opacity = "1"
    b.style.opacity = "0"

    let rafId
    const CROSSFADE_BEFORE = 0.8 // seconds before end to start crossfade

    const checkLoop = () => {
      const active = activeRef.current === "A" ? a : b
      if (active.duration && active.currentTime >= active.duration - CROSSFADE_BEFORE) {
        crossfade()
      }
      rafId = requestAnimationFrame(checkLoop)
    }

    rafId = requestAnimationFrame(checkLoop)
    return () => cancelAnimationFrame(rafId)
  }, [crossfade])

  return (
    <div className="portfolio-container">
      {/* Background Video with Seamless Crossfade */}
      <div className="background-wrapper">
        <video
          ref={videoARef}
          autoPlay
          muted
          playsInline
          className="portfolio-video video-crossfade"
        >
          <source src="/profile.mp4" type="video/mp4" />
        </video>
        <video
          ref={videoBRef}
          muted
          playsInline
          className="portfolio-video video-crossfade"
        >
          <source src="/profile.mp4" type="video/mp4" />
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
                <picture>
                  <source srcSet="/profile.webp" type="image/webp" />
                  <img
                    src="/profile.jpeg"
                    alt="Dharmik Sarvaiya"
                    className="profile-photo"
                    width="140"
                    height="140"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
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
                <a href="mailto: connect@dharmik.live" className="social-icon" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            className="scroll-indicator"
            onClick={scrollToContent}
            aria-label="Scroll to content"
          >
            <ChevronDown size={22} />
          </button>
        </div>
      </div>

      {/* Sections below the hero */}
      <div className="sections-wrapper">
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>

        {/* Footer */}
        <footer className="portfolio-footer scroll-fade-up" ref={footerRef}>
          <div className="footer-divider scroll-line-draw" />
          <p className="footer-text">
            Designed & Built by <span className="footer-accent">Dharmik Sarvaiya</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
