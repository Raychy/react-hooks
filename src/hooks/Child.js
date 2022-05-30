import React, { useEffect } from "react";

const Child= ({ returnComment })=> {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("Raychy")}</div>;
}

export default Child;