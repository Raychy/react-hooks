import React, {useState} from 'react'

const UseStateHook = () => {
     let [counter, setCounter] = useState(0),
     incrementCount = ()=>{
          setCounter(counter + 1)
     };
  return (
    <div>
         <h2>UseStateHook</h2>
         <button onClick={incrementCount}>
              click to increment count
         </button>
         <h4>
              Counter: {counter}
         </h4>
         
          </div>
  )
}

export default UseStateHook