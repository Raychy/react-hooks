import React from 'react'
import './App.css';
import ImperativeHandleHook from './hooks/ImperativeHandleHook';
import UseCallbackHook from './hooks/UseCallbackHook';
import UseContextHook from './hooks/UseContextHook';
import UseEffectHook from './hooks/UseEffectHook';
import UseLayoutEffectHook from './hooks/UseLayoutEffectHook';
import UseMemoHook from './hooks/UseMemoHook';
import UseReducerHook from './hooks/UseReducerHook';
import UseRefHook from './hooks/UseRefHook';
import UseStateHook from './hooks/UseStateHook';


function App() {
  return (
    <div className="App">
     <UseStateHook />
     <hr />
     <UseReducerHook />
     <hr />
     <UseEffectHook />
     <hr />
     <UseRefHook />
     <hr />
     <UseLayoutEffectHook />
     <hr />
     <ImperativeHandleHook />
     <hr />
     <UseContextHook />
     <hr />
     <UseMemoHook />
     <hr />
     <UseCallbackHook />
     <hr />
    </div>
  );
}

export default App;
