import React from "react";

function Duties({ duties }) {
  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <div key={index}>
            <p>{duty}</p>;
          </div>
        );
      })}
    </div>
  );
}

export default Duties;
