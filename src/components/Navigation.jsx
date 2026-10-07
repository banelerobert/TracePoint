import { NavLink } from "react-router";
import Logo from "./Logo";

function Navigation() {
  return (
    <>
      {/* TOP HEADER */}
     <header className="top-header">
  <div className="header-container">
    <Logo />

    <div className="header-info">
      <div className="info-icon">☎</div>
      <div>
        <h4>CALL US</h4>
        <p>+27 81 639 0026</p>
      </div>
    </div>

    <div className="header-info">
      <div className="info-icon">✉</div>
      <div>
        <h4>EMAIL US</h4>
        <p>info@tracepoint.com</p>
      </div>
    </div>

    <div className="header-contact">
      <button>CONTACT US</button>

      <div className="social-icons">
  <a
    href="https://www.facebook.com/profile.php?id=61554429772090"
    target="_blank"
    rel="noopener noreferrer"
  >
    f
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61554429772090"
    target="_blank"
    rel="noopener noreferrer"
  >
    𝕏
  </a>
</div>
    </div>
  </div>
</header>


      {/* NAVIGATION */}
      <nav className="main-nav">

        <div className="nav-container">

          <NavLink to="/" end>
            HOME
          </NavLink>

          <NavLink to="/case">
            CASE
          </NavLink>

          <NavLink to="/suspects">
            SUSPECTS
          </NavLink>

          <NavLink to="/evidence">
            EVIDENCE
          </NavLink>

          <NavLink to="/investigation">
            INVESTIGATION
          </NavLink>

          <NavLink to="/investigation">
            SUBMIT CONCLUSION
          </NavLink>

        </div>

      </nav>
    </>
  );
}

export default Navigation;