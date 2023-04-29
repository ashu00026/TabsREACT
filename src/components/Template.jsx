import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";

function Template({ url }) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    // console.log("called");
    const response = await fetch(url);
    // console.log(response);
    if (!response.ok) {
      setIsError(true);
      setIsLoading(false);
      return;
    }
    // console.log(isLoading);
    const data = await response.json();
    setIsLoading(false);
    setData(data);
    // console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h4>someThing is Wrong.</h4>;
  }
  return (
    <div>
      <Jobs data={data} />
    </div>
  );
}

export default Template;
