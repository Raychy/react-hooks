import React, { useEffect , useState} from "react";

const UseEffectHook = () => {
     const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
          setData(data[0].email);
          console.log('api called');
      });
  }, []);

  return (
    <div>
      <h2>UseEffectHook</h2>
      <p>{data} </p>
    </div>
  );
};

export default UseEffectHook;
