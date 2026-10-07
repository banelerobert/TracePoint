function CaseCard({ caseData }) {
  return (
    <article className="main-case-card">

      {/* CARD HEADER */}
      <div className="main-case-header">

        <div>

          <span>CONFIDENTIAL CASE FILE</span>

          <h2>{caseData.caseName}</h2>

        </div>

        <div className="case-status-badge">

          <span></span>

          {caseData.status}

        </div>

      </div>


      {/* CARD BODY */}
      <div className="main-case-body">

        {/* DESCRIPTION */}
        <div className="case-information">

          <div className="case-information-icon">
            ◈
          </div>

          <div>

            <h3>CASE DESCRIPTION</h3>

            <p>
              {caseData.description}
            </p>

          </div>

        </div>


        {/* STATUS */}
        <div className="case-information">

          <div className="case-information-icon">
            ◉
          </div>

          <div>

            <h3>INVESTIGATION STATUS</h3>

            <p>
              The case is currently classified as{" "}
              <strong>{caseData.status}</strong>.
            </p>

          </div>

        </div>

      </div>


      {/* CARD FOOTER */}
      <div className="main-case-footer">

        <span>
          TRACEPOINT INVESTIGATIONS
        </span>

        <span>
          CONFIDENTIAL
        </span>

        <span>
          CASE #001
        </span>

      </div>

    </article>
  );
}

export default CaseCard;