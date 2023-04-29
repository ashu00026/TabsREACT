import React from "react";

function Buttons({ data, handleClick }) {
  return (
    <div className="btn-container">
      {data.map((entry) => {
        return (
          <button
            className="job-btn"
            key={entry.id}
            onClick={() => handleClick(entry.order)}
          >
            {entry.company}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
