import { useState } from 'react'
import './App.css'
function App() {
  
  let [Counter,setCount]=useState(5)
  const sub=()=>{
    if(Counter>-20)
      setCount(--Counter)
  }
  const add=()=>{
    if(Counter<20)
      setCount(++Counter)
  }
  return (
    <>
      
      <h1>Sarthak Is here!!</h1> 
      <h2>Counter value : {Counter}</h2>
      <button onClick={add}>Increase</button>     
      <button onClick={sub}>Decrease</button>     

    </>
  )
}

export default App
