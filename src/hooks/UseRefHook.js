import React,{useRef}  from 'react'

const UseRefHook = () => {
     const inputRef = useRef(null);
     const onClick = ()=>{
          console.log(inputRef.current.value);
          inputRef.current.focus()
          inputRef.current.value = ""

     }
  return (
    <div>
         <h2>UseRefHook</h2>
         <input  type="text" placeholder='example...' ref={inputRef}  />
         <button type='button' onClick={onClick}>Chnage Name</button>
    </div>
  )
}

export default UseRefHook