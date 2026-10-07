import { useEffect, useState } from "react";
import InvestigationForm from "../components/InvestigationForm";

function Investigation() {
  const [suspects, setSuspects] = useState([]);
  const [selectedSuspect, setSelectedSuspect] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://localhost:7266/api/suspects")
      .then((response) => response.json())
      .then((data) => setSuspects(data))
      .catch((error) => console.error("Error fetching suspects:", error));
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");

    const investigation = {
      caseID: 1,
      suspectID: parseInt(selectedSuspect),
      conclusion: conclusion,
      dateStarted: new Date().toISOString()
    };

    try {
      const response = await fetch(
        "https://localhost:7266/api/investigations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(investigation)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit investigation.");
      }

      const data = await response.json();

      console.log("Investigation saved:", data);

      setMessage("Investigation submitted successfully!");

      setSelectedSuspect("");
      setConclusion("");

    } catch (error) {

      console.error("Error submitting investigation:", error);

      setMessage(
        "There was an error submitting the investigation."
      );
    }
  }

  return (
    <main className="detective-page">

      {/* PAGE HEADER */}
      <section className="detective-page-header">

        <p>TRACEPOINT INVESTIGATIONS</p>

        <h1>INVESTIGATION</h1>

        <div className="gold-line"></div>

        <span>SUBMIT YOUR FINAL CONCLUSION</span>

      </section>


      {/* FORM CONTENT */}
      <section className="detective-content">

        <div className="detective-intro">

          <span>FINAL REPORT</span>

          <h2>SUBMIT INVESTIGATION</h2>

          <p>
            Select the suspect you believe is responsible and explain
            the evidence that supports your conclusion.
          </p>

        </div>


        <div className="investigation-panel">

          <div className="investigation-panel-header">

            <div>

              <span>TRACEPOINT</span>

              <h2>CONFIDENTIAL CASE REPORT</h2>

            </div>

            <div className="case-number">
              CASE #001
            </div>

          </div>


          <InvestigationForm
            suspects={suspects}
            selectedSuspect={selectedSuspect}
            setSelectedSuspect={setSelectedSuspect}
            conclusion={conclusion}
            setConclusion={setConclusion}
            onSubmit={handleSubmit}
          />


          {message && (

            <div
              className={
                message.includes("successfully")
                  ? "success-message"
                  : "error-message"
              }
            >
              {message}
            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default Investigation;