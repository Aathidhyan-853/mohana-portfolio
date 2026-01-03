import useFadeIn from "../hooks/useFadeIn";
import "./Certificates.css";

const Certificates = () => {
  useFadeIn();

  return (
    <section className="certificates fade-section" id="certificates">
      <div className="certificates-container">
        {/* H2 */}
        <h2 className="certificates-title">Certificates</h2>

        <div className="certificates-content">
          {/* CERTIFICATE */}
          <div className="certificate-block">
            <h4>Remote Intern – Octanet</h4>
            <p>
              Developed a landing page for food services with a focus on
              structure, usability, and conversion flow.
            </p>
          </div>

          {/* ACHIEVEMENT */}
          <div className="certificate-block">
            <h4>Achievement</h4>
            <p>
              Runner-up in a National Level Technical Symposium for the Swing
              project at the Info Institute of Engineering College, Coimbatore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
