import React, { useContext } from "react";
import { AppContext } from "./UseContextHook";

const ContextUsername = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h2>User:{username} </h2>
    </div>
  );
};

export default ContextUsername;
