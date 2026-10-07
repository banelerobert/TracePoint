import { useEffect, useState } from "react";
import SuspectCard from "../components/SuspectCard";

function Suspects() {
  const [suspects, setSuspects] = useState([]);
  const [selectedSuspect, setSelectedSuspect] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7266/api/suspects")
      .then((response) => response.json())
      .then((data) => setSuspects(data))
      .catch((error) => console.error("Error fetching suspects:", error));
  }, []);

  return (
    <main className="detective-page">

      {/* PAGE HEADER */}
      <section className="detective-page-header">

        <p>TRACEPOINT INVESTIGATIONS</p>

        <h1>SUSPECTS</h1>

        <div className="gold-line"></div>

        <span>IDENTIFY THE PERSON RESPONSIBLE</span>

      </section>


      {/* SUSPECTS CONTENT */}
      <section className="detective-content">

        <div className="detective-intro">

          <span>PERSONS OF INTEREST</span>

          <h2>THE SUSPECTS</h2>

          <p>
            Review each suspect carefully. Examine their occupation,
            background and connection to the investigation.
          </p>

        </div>


        {/* SUSPECT CARDS */}
        <div className="suspects-grid">

          {suspects.map((suspect) => (
            <SuspectCard
              key={suspect.suspectID}
              suspect={suspect}
              onSelect={setSelectedSuspect}
            />
          ))}

        </div>


        {/* SELECTED SUSPECT */}
        {selectedSuspect && (

          <div className="selected-suspect">

            <div className="selected-icon">
              ✓
            </div>

            <div>

              <span>SELECTED SUSPECT</span>

              <h2>{selectedSuspect.name}</h2>

              <p>
                You have selected this person as the most likely
                suspect. Continue to examine the evidence before
                submitting your conclusion.
              </p>

            </div>

          </div>

        )}

      </section>

    </main>
  );
}

export default Suspects;