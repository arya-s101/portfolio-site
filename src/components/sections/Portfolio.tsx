import Button from "../ui/Button";
import { Outlet, useMatch } from "react-router-dom";

import cura from "../../assets/DesignPortfolioPage/cura.jpg";
import clc from "../../assets/DesignPortfolioPage/clc.png";
import ascent from "../../assets/DesignPortfolioPage/ascent.png";

export function Portfolio() {
  const isIndex = useMatch("/design");

  const portfolioItems = [
    {
      id: 1,
      title: "CLC@UofT",
      description:
        "Spearheading the visual identity of the new Computational Linguistics Club at the University of Toronto.",
      image: [clc],
      nav: "clc",
    },
    {
      id: 2,
      title: "Cura",
      description:
        "Designed a future UI redesign for Cura, a patient-facing healthcare app (built at McHacks 12) that streamlines the ER experience, providing real-time updates on wait times and other useful features.",
      image: [cura],
      nav: "cura",
    },
    {
      id: 3,
      title: "Ascent Automation",
      description:
        "Handled the branding and social media for Ascent Automation, a startup focused on creating innovative business automation solutions for MSMEs.",
      image: [ascent],
      nav: "ascent",
    },
  ];

  return (
    <div className="page-container">
      <main className="main-content">
        <div className="content-wrapper">
          {isIndex && (
            <>
              <h1 className="page-title">DESIGN PORTFOLIO</h1>
              <div className="portfolio-list">
                {portfolioItems.map((item) => (
                  <Button
                    key={item.id}
                    to={item.nav}
                    className="portfolio-card"
                  >
                    <div className="portfolio-images">
                      <div className="portfolio-image-main">
                        <img src={item.image[0]} alt={item.title} />
                      </div>
                    </div>

                    <div className="portfolio-content">
                      <h2 className="portfolio-title">{item.title}</h2>
                      <p className="portfolio-description">
                        {item.description}
                      </p>
                    </div>
                  </Button>
                ))}
              </div>
            </>
          )}

          <Outlet />
        </div>
      </main>
    </div>
  );
}
