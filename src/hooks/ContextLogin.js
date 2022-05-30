import React,{useContext} from 'react'
import { AppContext } from './UseContextHook'

const ContextLogin = () => {
     const {setUsername} = useContext(AppContext)
  return (
    <div>
         <input type="text" onChange={(e)=>setUsername(e.target.value)} />
    </div>
  )
}

export default ContextLogin