export function Experiences() {
  const experiences = [
    {
      role: "Director of Design",
      company: "Computational Linguistics Club U of T",
      date: "JULY 2025 - Present",
      description:
        "Spearheading the visual identity and design strategy for the Computational Linguistics Club at the University of Toronto.",
      highlights: [
        "Designed the club logo, brand palette and an overall visual identity for memorability",
        "Creating promotional content for social media, culminating in over 13k cumulative views on Instagram",
        "Creating other club materials, such as presentations for club events, to maximise engagement",
      ],
    },
    {
      role: "Design and Marketing Intern",
      company: "Kuuraii",
      date: "MAY 2025 - JULY 2025",
      description:
        "Handled some of the design, marketing and SEO side of things in the context of a young e-commerce startup.",
      highlights: [
        "Designed promotional (story) content for the Instagram page of their sister company, TIE Bags",
        "Improved the B2B profile of the company by creating a proficient company profile document and also revamping their LinkedIn page",
        "Oversaw the SEO operations for the website (contracted to an outside firm) through regular check-ins",
      ],
    },
    {
      role: "Web and Social Media Intern",
      company: "Ascent Automations",
      date: "JUNE 2024 - AUG 2024",
      description:
        "Assisted with web design and social media management for a business automation company.",
      highlights: [
        "Designed over 50% of the initial company website using Wix, and also designed the logo using Canva",
        "Created social media posts and a general post template for the company’s Instagram page, @ascentautomations, resulting in 85+ page likes",
        "Edited video content for the company’s Youtube channel, resulting in 180+ views",
      ],
    },
    {
      role: "Volunteer Data Analyst",
      company: "Zoo Outreach Organisation",
      date: "JUNE 2023 - DEC 2023",
      description:
        "Analysed Data for a wildlife conservation NGO based in India to help understand their output.",
      highlights: [
        "Worked in a team of 2 to analyse patterns and trends from the articles and papers published in the organisation’s research journal (Journal of Threatened Taxa)",
        "Used Excel tools to filter and refine from hundreds of data entries, and then used the data to come up with a suitable conclusion",
        "Represented the data processed and the conclusions made in the form of a presentation and a review paper",
      ],
    },
    {
      role: "Trainee",
      company: "OREOPS Framework Pvt. Ltd.",
      date: "APRIL 2023 - MAY 2023",
      description:
        "Completed a short-term training program on low-code application development.",
      highlights: [
        "Learnt about the process of low-code app development through the in-house low-code platform (Sterlo)",
        "Designed 7+ proof-of-concept apps in the process of learning the ropes of the platform",
        "Provided feedback on the functionality of the platform itself to help improve the user experience",
      ],
    },
  ];

  return (
    <div className="page-container">
      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="page-title">THINGS I'VE DONE</h1>
          <div className="experience-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <div className="experience-date">{exp.date}</div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-highlights">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
