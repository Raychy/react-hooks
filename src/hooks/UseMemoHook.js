/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState, useMemo } from "react";

const UseMemoHook = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // console.log("api called");
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);
  return (
    <div>
      <h2>UseMemoHook</h2>
      <div> {getLongestName}</div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h5> toggle </h5>}
    </div>
  );
};

export default UseMemoHook;
