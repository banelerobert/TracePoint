import { Link } from "react-router";

function Home() {
  return (
    <main>

      {/* =====================================
          HERO SECTION
          ===================================== */}

      <section className="hero">

        <div className="hero-content">

          <p className="welcome">
            WELCOME TO
          </p>

          <h1>
            TRACEPOINT
            <span>INVESTIGATIONS</span>
          </h1>

          <div className="hero-divider">

            <span></span>

            <p>
              THE MISSING PROTOTYPE
            </p>

            <span></span>

          </div>


          <p className="hero-description">
            A prototype has disappeared from a secure
            research laboratory.
            <br />
            It's your mission to uncover the truth.
          </p>


          <Link to="/case">

            <button className="start-button">

              <span className="search-icon">
                🔎
              </span>

              START INVESTIGATION

              <span className="arrow">
                →
              </span>

            </button>

          </Link>

        </div>

      </section>


      {/* =====================================
          QUOTE
          ===================================== */}

      <section className="investigation-quote">

        <span></span>

        <p>
          "In every investigation, details matter.
          In every case, the truth matters more."
        </p>

        <span></span>

      </section>

    </main>
  );
}

export default Home;