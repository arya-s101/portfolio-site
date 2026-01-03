export function Skills() {
  const skills = [
    "Javascript",
    "Python",
    "Java",
    "C",
    "SB3",
    "AWS",
    "Figma",
    "HTML/CSS",
    "React",
    "Git",
    "Canva",
    "Audacity",
  ];

  return (
    <div className="page-container">
      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="page-title">SKILLS</h1>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                {skill.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
