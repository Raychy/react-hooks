import React, { useRef } from "react";
import Button from "./Button";

const ImperativeHandleHook = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <h2>ImperativeHandleHook</h2 >
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button from Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImperativeHandleHook;
