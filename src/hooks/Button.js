import React, { forwardRef, useState, useImperativeHandle } from "react";
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Button from child
      </button>
      {toggle && <span>Toggle</span>}
    </div>
  );
});

export default Button;
