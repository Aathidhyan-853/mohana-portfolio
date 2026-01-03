import useFadeIn from "../hooks/useFadeIn";
import "./Resume.css";

const Resume = () => {
  useFadeIn();

  return (
    <section className="resume fade-section" id="resume">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>

        <p className="resume-desc">
          My resume reflects a solid foundation in digital marketing, content
          optimization, and analytics, combined with project-based learning and
          internship exposure. I am keen to apply my skills in practical
          environments and grow within a professional team.
        </p>

        <div className="resume-cta">
          <a
            href="/resume/Mohana Lakshmi B Resume.pdf"
            download
            className="btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
