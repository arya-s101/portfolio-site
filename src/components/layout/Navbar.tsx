import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <nav className="nav">
            <div className="navbar-left">
              <NavLink to="/" className="navbar-logo">
                <h2 className="site-title">A.S.</h2>
              </NavLink>
            </div>

            <div className="navbar-right">
              <NavLink to="/experience" className="nav-link">
                Things I've Done
              </NavLink>
              <NavLink to="/projects" className="nav-link">
                Software Showcase
              </NavLink>
              <NavLink to="/skills" className="nav-link">
                Skills
              </NavLink>
              <NavLink to="/design" className="nav-link">
                Design Portfolio
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
