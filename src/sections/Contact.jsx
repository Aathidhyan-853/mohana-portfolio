import useFadeIn from "../hooks/useFadeIn";
import "./Contact.css";

const Contact = () => {
  useFadeIn();

  return (
    <section className="contact fade-section" id="contact">
      <div className="contact-container">
        {/* TITLE */}
        <h2 className="contact-title">Contact Me</h2>

        {/* INTRO */}
        <p className="contact-intro strong">
          Looking for a motivated Digital Marketer (Remote / Global)? Let’s
          connect.
        </p>

        {/* CONTACT CARDS */}
        <div className="contact-cards">
          {/* EMAIL → GMAIL */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=monalakshmi.2004@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="contact-card arrive"
            style={{ animationDelay: "0s" }}
          >
            <div className="icon-circle pulse">✉️</div>
            <span>Email</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/mohanalakshmi2004/"
            target="_blank"
            rel="noreferrer"
            className="contact-card arrive"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="icon-circle pulse">in</div>
            <span>LinkedIn</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/9242432741"
            target="_blank"
            rel="noreferrer"
            className="contact-card arrive"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="icon-circle pulse">💬</div>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* DESCRIPTION */}
        <p className="contact-desc">
          Let’s connect! If you’re looking for a motivated Digital Marketer with
          strong foundations in SEO, content, and performance marketing, I’d be
          excited to collaborate with you.
        </p>

        {/* MAIN CTA → GOOGLE FORM */}
        <a
          href="https://forms.gle/c9bGwytRgu9smBXG7"
          target="_blank"
          rel="noreferrer"
          className="contact-main-btn"
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
};

export default Contact;
