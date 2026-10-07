import { useEffect, useState } from "react";
import EvidenceCard from "../components/EvidenceCard";

function Evidence() {
  const [evidence, setEvidence] = useState([]);
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7266/api/evidence")
      .then((response) => response.json())
      .then((data) => setEvidence(data))
      .catch((error) => console.error("Error fetching evidence:", error));
  }, []);

  return (
    <main className="detective-page">

      {/* PAGE HEADER */}
      <section className="detective-page-header">

        <p>TRACEPOINT INVESTIGATIONS</p>

        <h1>EVIDENCE</h1>

        <div className="gold-line"></div>

        <span>EVERY DETAIL MATTERS</span>

      </section>


      {/* EVIDENCE CONTENT */}
      <section className="detective-content">

        <div className="detective-intro">

          <span>CASE EVIDENCE</span>

          <h2>EXAMINE THE CLUES</h2>

          <p>
            Investigate each piece of evidence and determine what
            information it reveals about the missing prototype.
          </p>

        </div>


        <div className="evidence-grid">

          {evidence.map((item) => (
            <EvidenceCard
              key={item.evidenceID}
              evidence={item}
              onExamine={setSelectedEvidence}
            />
          ))}

        </div>


        {/* SELECTED EVIDENCE */}
        {selectedEvidence && (

          <div className="evidence-details">

            <div className="evidence-details-header">

              <span>EVIDENCE EXAMINATION</span>

              <h2>{selectedEvidence.title}</h2>

            </div>

            <div className="evidence-details-body">

              <div className="evidence-detail-icon">
                🔎
              </div>

              <div>

                <h3>DESCRIPTION</h3>

                <p>
                  {selectedEvidence.description}
                </p>

                <h3>LOCATION</h3>

                <p>
                  {selectedEvidence.location}
                </p>

              </div>

            </div>

          </div>

        )}

      </section>

    </main>
  );
}

export default Evidence;