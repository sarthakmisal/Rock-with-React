import { useEffect, useCallback,useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [numAllowed,setNum]=useState(false)
  const [charAllowed,setChar]=useState(false)
  const [pass,setPass]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numAllowed)  str+="1234567890"
    if(charAllowed) str+="!@#$%^&*()_+-{}[]|"
    for(let i=1;i<=length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length)+1)
    }
    setPass(pass)
  },[length,numAllowed,charAllowed,setPass])
  const passRef=useRef(null)

useEffect(()=>{passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator])
const copytoClip=useCallback(()=>{
  window.navigator.clipboard.writeText(pass);
  passRef.current?.select();
  // passRef.current?.setSelectionRange(0,3)
},[pass])
  return (
    <>
      <div className="p-10 pl-10 pr-10  h-full max-h-full w-full max-w-md shadow-md rounded-lg px-4 my-8 text-white bg-gray-700 text-center justify-items-center">
        <h1 className='text-2xl mb-5'>Random Password Generator</h1>
        <div className="p-5 flex shadow rounded-lg overflow-hidden mb-4">
          <input id='main' type="text" value={pass} 
          className='text-red-700 text-lg outline-none w-full  py-2 px-10 bg-white'
          ref={passRef} placeholder='Password' readOnly />
          <button onClick={copytoClip()} id='copy' className='bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input onChange={(e)=>setLength(e.target.value)} type="range" min={6} max={100} value={length} className='cursor-pointer' />
            <label className='text-orange'>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numAllowed} id='numInput' 
            onChange={()=>setNum(!numAllowed)} />Numbers
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' 
            onChange={()=>setChar((prev)=>!prev)} />Characters
          </div>
        </div>
      </div>
    </>
  )
}

export default App
