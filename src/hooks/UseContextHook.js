import React, {createContext, useState} from 'react'
import ContextLogin from './ContextLogin'
import ContextUsername from './ContextUsername'


export const AppContext = createContext(null)
const UseContextHook = () => {
     const [username, setUsername] = useState("")
  return (
    <div>
         <AppContext.Provider value={{username, setUsername}}>
         <h2>UseContextHook</h2>
         <ContextLogin/>
         <ContextUsername />
         </AppContext.Provider>
    </div>
  )
}

export default UseContextHook