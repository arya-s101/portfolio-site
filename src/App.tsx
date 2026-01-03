import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { SkillsPage } from "./pages/SkillsPage";
import { ContactsPage } from "./pages/ContactsPage";
import { DesignPortfolioPage } from "./pages/DesignPortfolioPage";

import { AscentPage } from "./pages/PortfolioEntries/AscentPage";
import { CLCPage } from "./pages/PortfolioEntries/CLCPage";
import { CuraPage } from "./pages/PortfolioEntries/CuraPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/design" element={<DesignPortfolioPage />}>
          <Route path="clc" element={<CLCPage />} />
          <Route path="cura" element={<CuraPage />} />
          <Route path="ascent" element={<AscentPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
