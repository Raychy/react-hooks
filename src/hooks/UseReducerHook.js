import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        showText: state.showText,
      };

    case "TOGGLESHOWTEXT":
      return {
        count: state.count,
        showText: !state.showText,
      };
    default:
      return state;
  }
};
const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: false,
  });
  return (
    <div>
      <h2>UseReducerHook </h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLESHOWTEXT" });
        }}
      >
        click to count
      </button>
      <h4>{state.count} </h4>
      {state.showText && <p> This is a text</p>}
    </div>
  );
};

export default UseReducerHook;
