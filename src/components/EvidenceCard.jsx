function EvidenceCard({ evidence, onExamine }) {
  return (
    <article className="evidence-card">

      <div className="evidence-number">
        EVIDENCE #{String(evidence.evidenceID).padStart(2, "0")}
      </div>

      <div className="evidence-icon">
        🔎
      </div>

      <h2>{evidence.title}</h2>

      <div className="evidence-location">
        📍 {evidence.location}
      </div>

      <p>
        {evidence.description}
      </p>

      <button
        className="evidence-button"
        onClick={() => onExamine(evidence)}
      >
        EXAMINE EVIDENCE
        <span>→</span>
      </button>

    </article>
  );
}

export default EvidenceCard;