import React, { useLayoutEffect, useEffect } from "react";

const UseLayoutEffectHook = () => {
  useEffect(() => {
    console.log("use effect ");
  }, []);
  useLayoutEffect(() => {
    console.log("use layout effect");
  }, []);

  return (
    <div>
      <h2>UseLayoutEffectHook</h2>
      <p>It is called before the useEffect. UseLayoutEffect is called b4 the page is rendered</p>
    </div>
  );
};

export default UseLayoutEffectHook;
