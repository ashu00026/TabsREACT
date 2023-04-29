import React, { useState } from "react";
import Job from "./Job";
import Buttons from "./Buttons";

function Jobs({ data }) {
  // console.log(data);
  const [current, setCurrent] = useState(1);
  const details = data.filter((job) => {
    return job.order === current;
  });
  //   const [job, setJob] = useState(details);
  const handleClick = (order) => {
    setCurrent(order);
  };
  // console.log(details);

  return (
    <div>
      <Buttons data={data} handleClick={handleClick} />
      <Job {...details[0]} />
    </div>
  );
}

export default Jobs;
