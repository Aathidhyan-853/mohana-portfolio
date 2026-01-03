import { useEffect, useState, useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";
import "./Skills.css";

const skills = [
  { name: "SEO (On-page, Off-page, Technical)", level: 85 },
  { name: "Content Marketing & Optimization", level: 90 },
  { name: "Social Media Marketing (SMM)", level: 80 },
  { name: "PPC Advertising (Google, Meta, LinkedIn Ads)", level: 70 },
  { name: "Email Marketing (Basics)", level: 65 },
  { name: "HTML & CSS", level: 60 }
];

const Skills = () => {
  useFadeIn();
  const [activeIndex, setActiveIndex] = useState(null);
  const modalRef = useRef(null);

  /* LOCK / UNLOCK SCROLL */
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeIndex]);

  /* progress bar animation */
  useEffect(() => {
    const section = document.querySelector(".skills");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".skill-fill").forEach((bar) => {
            bar.style.width = bar.dataset.level + "%";
          });
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /* close on outside click */
  useEffect(() => {
    const handleClick = (e) => {
      if (
        activeIndex !== null &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [activeIndex]);

  return (
    <section className="skills fade-section" id="skills">
      {/* BACKDROP */}
      {activeIndex !== null && (
        <div className="skills-backdrop"></div>
      )}

      <div className="skills-container">
        <h2 className="skills-title">Skills & Expertise</h2>

        <p className="skills-subtitle">
          I bring hands-on experience across SEO, content, social media, and
          performance marketing, with a strong analytical mindset and a constant
          drive to learn and optimize.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              onClick={() => setActiveIndex(index)}
            >
              <div className="skill-face front">
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    data-level={skill.level}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL POPUP */}
      {activeIndex !== null && (
        <div className="skill-modal">
          <div className="skill-modal-card" ref={modalRef}>
            <h4>{skills[activeIndex].name}</h4>
            <p>{skills[activeIndex].level}% Proficiency</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
