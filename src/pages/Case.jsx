import { useEffect, useState } from "react";
import { Link } from "react-router";
import CaseCard from "../components/CaseCard";

function Case() {
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7266/api/cases/1")
      .then((response) => response.json())
      .then((data) => setCaseData(data))
      .catch((error) => console.error("Error fetching case:", error));
  }, []);

  if (!caseData) {
    return (
      <main className="case-page">
        <div className="case-loading">
          LOADING CASE FILE...
        </div>
      </main>
    );
  }

  return (
    <main className="case-page">

      {/* CASE PAGE TITLE */}
      <section className="case-page-header">

        <p className="case-small-title">
          TRACEPOINT INVESTIGATIONS
        </p>

        <h1>CASE FILE</h1>

        <div className="case-gold-line"></div>

        <p className="case-reference">
          CASE #001 &nbsp; | &nbsp; ACTIVE INVESTIGATION
        </p>

      </section>


      {/* CASE INFORMATION */}
      <section className="case-content">

        <div className="case-intro">

          <p>CURRENT INVESTIGATION</p>

          <h2>{caseData.caseName}</h2>

          <div className="case-intro-line"></div>

          <span>
            Review the case details before examining the suspects
            and evidence.
          </span>

        </div>


        {/* MAIN CASE CARD */}
        <CaseCard caseData={caseData} />


        {/* NAVIGATION BUTTONS */}
        <div className="case-actions">

          <Link to="/suspects">
            <button className="case-action-button">
              <span className="case-action-icon">👤</span>

              <div>
                <small>STEP 01</small>
                <strong>VIEW SUSPECTS</strong>
              </div>

              <b>→</b>
            </button>
          </Link>


          <Link to="/evidence">
            <button className="case-action-button">
              <span className="case-action-icon">🔎</span>

              <div>
                <small>STEP 02</small>
                <strong>VIEW EVIDENCE</strong>
              </div>

              <b>→</b>
            </button>
          </Link>

        </div>


        {/* CASE NOTICE */}
        <div className="case-notice">

          <div className="case-notice-symbol">
            !
          </div>

          <div>
            <h3>INVESTIGATOR'S NOTICE</h3>

            <p>
              This case is currently open. Examine all available
              information carefully before submitting your final
              conclusion.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Case;