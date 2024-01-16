import { useState } from 'react'
import './App.css'

function App() {
const [color,changeColor]=useState('olive')
  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>changeColor('teal')} className='rounded-full outline-none m-1 px-4 py-1 text-white shadow-lg' style={{backgroundColor:"teal"}}>Teal</button>
            <button onClick={()=>changeColor('purple')} className='rounded-full outline-none m-1 px-4 py-1 text-white shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={()=>changeColor('blue')} className='rounded-full outline-none m-1 px-4 py-1 text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>changeColor('green')} className='rounded-full outline-none m-1 px-4 py-1 text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>changeColor('grey')} className='rounded-full outline-none m-1 px-4 py-1 text-white  shadow-lg' style={{backgroundColor:"grey"}}>Grey</button>
            <button onClick={()=>changeColor('orange')} className='rounded-full outline-none m-1 px-4 py-1 text-white shadow-lg' style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=>changeColor('red')} className='rounded-full outline-none m-1 px-4 py-1 text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>changeColor('cyan')} className='rounded-full outline-none m-1 px-4 py-1 text-white shadow-lg' style={{backgroundColor:"cyan"}}>Indigo</button>
          </div>
        </div>
      </div>
  )
}

export default App
