import { ArrowRight } from "lucide-react";

export function Software() {
  const projectList = [
    {
      title: "PERSONAL PORTFOLIO WEBSITE",
      description:
        "A responsive portfolio website built with React (Vite), leveraging modern developer tools (including LLMs) to accelerate iteration and debugging. It is deployed on an AWS S3 bucket and served via Amazon CloudFront with a custom domain managed through Route 53.",
      link: "http://aryasaravanan.com",
    },
    {
      title: "SYNK",
      description:
        "A task/habit tracker application built on Java Swing, with an emphasis on Clean Architecture and API integration, for the CSC207 course at U of T.",
      link: "https://github.com/Zain-Mahmoud/synk-207-project",
    },
    {
      title: "CURA",
      description:
        "A McHacks 12 project focused on improving the experience of patients in the ER, built using HTML and Python (Flask).",
      link: "https://devpost.com/software/cura-7zukyh",
    },
    {
      title: "PUBLIC INTEREST LITIGATION APP",
      description:
        "A TechXcelerate Summer Hackathon 2023 project that streamlines the process of filing public interest litigations, built on Python using tkinter and docxtpl.",
      link: "https://devpost.com/software/personal-interest-litigation-app",
    },
    {
      title: "CARD SHUFFLER",
      description:
        "A card shuffling application for the card games UNO and Monopoly Deal, built on Python using the tkinter and random libraries, for my AP Computer Science Principles course.",
      link: "https://devpost.com/software/card-shuffler",
    },
  ];

  return (
    <div className="main-content">
      <div className="content-wrapper">
        <h1 className="page-title">SOFTWARE SHOWCASE</h1>
        <div className="project-list">
          {projectList.map((proj, idx) => (
            <div key={idx} className="project-card">
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-description">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                OPEN <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
