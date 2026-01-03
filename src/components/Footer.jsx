import { useEffect, useState } from "react";
import "./Footer.css";
import logo from "../assets/MG.webp";

const Footer = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [expandFooter, setExpandFooter] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    const footer = document.getElementById("footer-full");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowPreview(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setExpandFooter(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (contact) observer.observe(contact);
    if (footer) footerObserver.observe(footer);

    return () => {
      observer.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* 🔹 STICKY PREVIEW (ONLY NAME + ROLE) */}
      {showPreview && !expandFooter && (
        <div className="footer-preview">
          <h4 className="footer-preview-name">Mohana Lakshmi B</h4>
          <p className="footer-preview-role">
            Digital Marketer | SEO • Content • Performance Marketing
          </p>
        </div>
      )}

      {/* 🔹 FULL FOOTER */}
      <footer
        id="footer-full"
        className={`footer ${expandFooter ? "show" : ""}`}
      >
        <div className="footer-container">
          <h3 className="footer-name">Mohana Lakshmi B</h3>

          <p className="footer-role">
            Digital Marketer | SEO • Content • Performance Marketing
          </p>

          <p className="footer-desc">
            I help brands grow through search-optimized content, data-driven
            insights, and consistent digital execution.
          </p>

          {/* 🔥 CONNECT WITH ROUND LOGO */}
          <div className="footer-connect">
            <div className="connect-header">
              <div className="connect-logo">
                <img src={logo} alt="MG Logo" />
              </div>
              <span className="connect-title">Connect With Me</span>
            </div>

            <div className="footer-links">
              <a href="https://www.linkedin.com/in/mohanalakshmi2004/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=monalakshmi.2004@gmail.com">Email</a>
              <a
                href="https://wa.me/9342432741"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <p className="footer-availability">
            Open to <strong>Remote & Global Opportunities</strong>
          </p>

          <p className="footer-copy">
            © 2025 Mohana Lakshmi B. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
