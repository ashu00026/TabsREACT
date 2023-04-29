import React from "react";
import Duties from "./Duties";

function Job({ company, dates, duties, title }) {
  // console.log(company, dates, duties, title);
  return (
    <div className="job-desc">
      <h5>{title}</h5>
      <span className="job-date">{dates}</span>
      <h4 className="job-company">{company}</h4>
      <Duties duties={duties} />
    </div>
  );
}

export default Job;
