import PatientFacingHomePage from "../../../assets/Cura/patient-facing-home-page.png";
import NurseFacingHomePage from "../../../assets/Cura/nurse-facing-home-page.png";
import ContentPlusPage from "../../../assets/Cura/content-plus-page.png";
import NewsPlusPage from "../../../assets/Cura/news-plus-page.png";

export function CuraSection() {
  const projectData = {
    title: "Cura",
    subtitle: "WEB DESIGN",
    sections: [
      {
        id: 1,
        image: PatientFacingHomePage,
        ratio: "less-horizontal",
        description:
          "The patient-facing homepage; I designed the original version of this page (along with the rest) during McHacks 12, as a future design direction for the platform, and then iterated on it later on.",
      },
      {
        id: 2,
        image: NurseFacingHomePage,
        ratio: "even-less-horizontal",
        description:
          "The nurse-facing homepage; I designed this page to prioritize quick access to patient entry and triage management, ensuring that nurses can efficiently manage their tasks and provide optimal care.",
      },
      {
        id: 3,
        image: NewsPlusPage,
        ratio: "square",
        description:
          "The home page for News Plus, a service that could provide patients with access to an aggregated news feed while in the hospital informed and engaged during their stay.",
      },
      {
        id: 4,
        image: ContentPlusPage,
        ratio: "squarish",
        description:
          "The home page for Content Plus, a service that could give patients access to multiple famous streaming services while in the hospital, through potential licensing deals with said services.",
      },
    ],
  };

  return (
    <div className="board-canvas">
      <div className="center-title-box--cura">
        <h1 className="center-title">{projectData.title}</h1>
        <h2 className="center-subtitle">{projectData.subtitle}</h2>
      </div>

      <div className="evidence-card-list">
        {projectData.sections.map((section) => (
          <div
            key={section.id}
            className={`evidence-card evidence-card--${section.ratio}`}
          >
            <div className="evidence-image">
              <img src={section.image} alt={`Evidence ${section.id}`} />
            </div>

            <div className="evidence-text">
              <p className="evidence-description">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
