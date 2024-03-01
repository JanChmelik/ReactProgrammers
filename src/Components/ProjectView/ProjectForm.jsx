import React from "react";
import "./ProjectForm.css";
//
function ProjectForm({ validation, inModel, handleChange, handleResetClick }) {
  return (
    <div>
      <h3>Your task</h3>
      <form action="">
        <label htmlFor="linesOfCode">
          {`lines of code`}
          <input
            type="number"
            min={0}
            placeholder="0"
            name="length"
            value={inModel.length}
            onChange={handleChange}
            id="linesOfCode"
          />
        </label>
        <label htmlFor="timeLimit">
          {`time limit [days]`}
          <input
            type="number"
            min={1}
            // placeholder="1"
            name="days"
            value={inModel.days}
            onChange={handleChange}
            id="timeLimit"
          />
        </label>
        <button
          type="button"
          className={validation ? "green" : "red"}
          disabled={!validation}
          onClick={handleResetClick}>
          Do it
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;
