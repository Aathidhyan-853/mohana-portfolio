import { useEffect, useRef, useState } from "react";
<img src="/profile.webp" alt="Profile" />
import useFadeIn from "../hooks/useFadeIn";
import "./Hero.css";

const roles = ["Digital Marketer", "AI/ML Enthusiast"];

const Hero = () => {
  useFadeIn(); // 🔥 fade-in / fade-out enable

  const imageRef = useRef(null);
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* TYPING EFFECT */
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 45 : 85;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  /* IMAGE SCALE */
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      const scale = scrollY < 200 ? 1.08 - scrollY * 0.0004 : 1;
      imageRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero fade-section" id="hero">
      <div className="hero-left">
        {/* TITLE */}
        <div className="hero-title-group">
          <p className="hero-intro">I am</p>
          <h1 className="hero-name">Mohana Lakshmi B</h1>
          <p className="hero-role">
            <strong>{text}</strong>
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="hero-desc">
          I’m a growth-oriented Digital Marketer with strong foundations in SEO,
          content, and performance marketing, open to global opportunities.
        </p>

        <p className="hero-sub">
          I focus on building visibility, improving search performance, and
          creating content that supports real business goals.
        </p>

        {/* CENTERED BLOCK */}
        <div className="hero-center-block">
          <p className="hero-availability">
            Available for <strong>Remote / International roles</strong>
          </p>

          <div className="hero-cta">
            {/* 🔥 both buttons same style */}
            <a href="#contact" className="btn outline">
              Hire Me
            </a>
            <a href="#projects" className="btn outline">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="hero-right">
        <div className="image-wrapper">
          <div className="image-shadow"></div>
          <div className="image-card" ref={imageRef}>
            <img
              src={profile}
              alt="Mohana Lakshmi B – Digital Marketer Portfolio"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
