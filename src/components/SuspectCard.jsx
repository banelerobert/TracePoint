function SuspectCard({ suspect, onSelect }) {

 const suspectImages = {
  "Alex Morgan": "/images/alex-morgan.jpeg",
  "Jamie Smith": "/images/jamie-smith.jpeg",
  "Taylor Williams": "/images/taylor-williams.jpeg"
};

  return (
    <article className="suspect-card">

      <div className="suspect-number">
        SUSPECT #{String(suspect.suspectID).padStart(2, "0")}
      </div>

      {/* SUSPECT PHOTO */}
      <div className="suspect-photo">
        <img
          src={suspectImages[suspect.name]}
          alt={`Portrait of ${suspect.name}`}
        />
      </div>

      <h2>{suspect.name}</h2>

      <div className="suspect-occupation">
        {suspect.occupation}
      </div>

      <div className="suspect-divider"></div>

      <p>
        {suspect.description}
      </p>

      <button
        className="suspect-button"
        onClick={() => onSelect(suspect)}
      >
        SELECT SUSPECT
        <span>→</span>
      </button>

    </article>
  );
}

export default SuspectCard;