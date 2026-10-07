function InvestigationForm({
  suspects,
  selectedSuspect,
  setSelectedSuspect,
  conclusion,
  setConclusion,
  onSubmit
}) {
  return (
    <form
      className="investigation-form"
      onSubmit={onSubmit}
    >

      <div className="form-group">

        <label htmlFor="suspect">
          SELECT SUSPECT
        </label>

        <select
          id="suspect"
          value={selectedSuspect}
          onChange={(e) =>
            setSelectedSuspect(e.target.value)
          }
          required
        >

          <option value="">
            -- SELECT A SUSPECT --
          </option>

          {suspects.map((suspect) => (
            <option
              key={suspect.suspectID}
              value={suspect.suspectID}
            >
              {suspect.name}
            </option>
          ))}

        </select>

      </div>


      <div className="form-group">

        <label htmlFor="conclusion">
          INVESTIGATION CONCLUSION
        </label>

        <textarea
          id="conclusion"
          value={conclusion}
          onChange={(e) =>
            setConclusion(e.target.value)
          }
          placeholder="Enter your conclusion and explain the evidence that supports your decision..."
          rows="8"
          required
        />

      </div>


      <button
        type="submit"
        className="submit-investigation-button"
      >
        <span>🔎</span>

        SUBMIT INVESTIGATION

        <strong>→</strong>
      </button>

    </form>
  );
}

export default InvestigationForm;