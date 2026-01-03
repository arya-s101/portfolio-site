import FirstPost from "../../../assets/ascent/first-post.png";
import SignamaxPost from "../../../assets/ascent/signamax-post.png";
import BluetickPost from "../../../assets/ascent/bluetick-post.png";
import Thumbnail from "../../../assets/ascent/thumbnail.png";

export function AscentSection() {
  const projectData = {
    title: "Ascent Automation",
    subtitle: "SOCIAL MEDIA",
    sections: [
      {
        id: 1,
        image: FirstPost,
        ratio: "square--ascent",
        description:
          "Ascent Automation's first Instagram post; it serves a dual purpose of introducing the concept of business automation and communicating the purpose of the company. The design was created from a Canva template.",
      },
      {
        id: 2,
        image: SignamaxPost,
        ratio: "square--ascent",
        description:
          "A client spotlight post for Signamax, a company that provides end-to-end fiber and copper solutions and more. I used their brand colours along with our design template to make the post more visually pleasing.",
      },
      {
        id: 3,
        image: BluetickPost,
        ratio: "square--ascent",
        description:
          "A client spotlight post for Bluetick Chauffeur Services; while not directly designed by me (it was made after my internship at Ascent ended), it uses the client spotlight template that I pioneered.",
      },
      {
        id: 4,
        image: Thumbnail,
        ratio: "horizontal",
        description:
          "The thumbnail for Ascent Automation's video tutorial on Zapier-Botpress Integration; I iterated upon an existing Canva template, changing the colours and adding graphics to make it more visually captivating as well as relevant to the video content.",
      },
    ],
  };

  return (
    <div className="board-canvas">
      <div className="center-title-box--ascent">
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
