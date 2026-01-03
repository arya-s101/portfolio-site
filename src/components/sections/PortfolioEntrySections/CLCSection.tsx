import CLCLogo from "../../../assets/clc/clc-logo.png";
import MeetTheExecs from "../../../assets/clc/meet-the-execs.png";
import Poster from "../../../assets/clc/Poster.png";
import Presentation from "../../../assets/clc/presentation.png";

export function CLCSection() {
  const projectData = {
    title: "CLC @ U of T",
    subtitle: "BRANDING",
    sections: [
      {
        id: 1,
        image: CLCLogo,
        ratio: "square--clc",
        description:
          "My first task as the Director of Design was to design the club's logo, along with a matching brand identity; I started with a doodle-style image of the brain (taken from Canva) and used it to create the logo, while adopting its primary colours for the club's branding.",
      },
      {
        id: 2,
        image: MeetTheExecs,
        ratio: "square--clc",
        description:
          "The 'Meet the Execs' post was where I first truly flexed my design muscle, using handwritten fonts and coloured borders to create a scrapbook-style aesthetic that was both approachable and engaging. This post has received the most engagement out of all the posts I designed for CLC.",
      },
      {
        id: 3,
        image: Poster,
        ratio: "vertical",
        description:
          "This was the poster I designed for CLC's first paper discussion ever; I used bold fonts, brand colours, and a clean layout to create an eye-catching and informative poster that effectively communicated the event details.",
      },
      {
        id: 4,
        image: Presentation,
        ratio: "horizontal",
        description:
          "This was the cover page of the presentation I designed for the same paper discussion. I used a clean layout, brand colours, and bold fonts to create a professional and engaging cover page that set the tone for the rest of the presentation.",
      },
    ],
  };

  return (
    <div className="board-canvas">
      <div className="center-title-box--clc">
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
