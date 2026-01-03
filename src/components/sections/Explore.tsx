import Button from "../ui/Button";
import {
  CalendarRange,
  Award,
  Mail,
  Briefcase,
  Palette,
  ArrowRight,
} from "lucide-react";

export default function Explore() {
  return (
    <div className="explore-section">
      <div className="explore-content">
        <h2 className="explore-title">EXPLORE</h2>

        <div className="button-lists">
          <div className="button-list-1">
            <Button to="/experience" className="nav-button">
              <div className="button-content">
                <CalendarRange size={28} />
                <span>THINGS I'VE DONE</span>
              </div>
              <ArrowRight size={28} />
            </Button>

            <Button to="/skills" className="nav-button">
              <div className="button-content">
                <Award size={28} />
                <span>SKILLS</span>
              </div>
              <ArrowRight size={28} />
            </Button>

            <Button to="/contact" className="nav-button">
              <div className="button-content">
                <Mail size={28} />
                <span>CONTACT</span>
              </div>
              <ArrowRight size={28} />
            </Button>
          </div>

          <div className="button-list-2">
            <Button to="/projects" className="nav-button">
              <div className="button-content">
                <Briefcase size={28} />
                <span>SOFTWARE SHOWCASE</span>
              </div>
              <ArrowRight size={28} />
            </Button>

            <Button to="/design" className="nav-button">
              <div className="button-content">
                <Palette size={28} />
                <span>DESIGN PORTFOLIO</span>
              </div>
              <ArrowRight size={28} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
