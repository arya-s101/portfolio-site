import { Mail, Linkedin, Github } from "lucide-react";

export function ContactInfo() {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <h1 className="page-title">CONTACT</h1>
        <div className="contact-box">
          <div className="contact-item">
            <Mail size={32} color="#0a0a0a" />
            <div>
              <a
                href="mailto:arya.contactmail123@gmail.com"
                className="contact-link"
              >
                <p className="contact-label">Gmail</p>
              </a>
            </div>
          </div>

          <div className="contact-item">
            <Linkedin size={32} color="#0a0a0a" />
            <div>
              <a
                href="https://www.linkedin.com/in/arya-saravanan-539a16276/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <p className="contact-label">Arya Saravanan</p>
              </a>
            </div>
          </div>

          <div className="contact-item">
            <Github size={32} color="#0a0a0a" />
            <div>
              <a
                href="https://github.com/arya-s101"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <p className="contact-label">arya-s101</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
