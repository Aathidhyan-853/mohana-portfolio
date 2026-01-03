import useFadeIn from "../hooks/useFadeIn";
import "./About.css";

const About = () => {
  useFadeIn();

  return (
    <section className="about fade-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <p className="about-desc">
          I help brands strengthen their online presence through SEO-driven
          content, data-backed decisions, and clean execution.
        </p>

        <p className="about-sub">
          As a fresher, I bring high learning velocity, strong fundamentals, and a
          mindset aligned with measurable outcomes.  I adapt quickly, test
          continuously, and optimize for impact rather than assumptions.
        </p>

        <div className="about-cta">
          <a
            href="/resume/Mohana Lakshmi B Resume.pdf"
            className="btn"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
