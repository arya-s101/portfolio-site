import "../App.css";

import { Bio } from "../components/sections/Bio";
import Explore from "../components/sections/Explore";

export default function LandingPage() {
  return (
      <main className="main-split">
        <Bio />
        <Explore />
      </main>
  );
}
