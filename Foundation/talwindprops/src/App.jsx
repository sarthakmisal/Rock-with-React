import Card from './conponent/card'
import './App.css'
import { useState } from 'react'
const arr=[{uname:'Prasad',marks:[33,42,54,29]},{uname:"Sarthak",marks:[38,25,48,19,44]},
{uname:"Suraj",marks:[53,85,87,97,54]},{uname:"Rahul",marks:[32,26,85,91,74]}
];
const ram={uname:"Misal",age:21}
function App(){
  const [count,incCount]=useState(5)
  return (
    <>
    <Card real="Sarthak Misal" btn="Show GitHub" desc="Little bit on path bt needs to hard work"/>
    <Card real="Prasad Ausarkar" btn="Show Linked In" desc="Likes to be live like ANonymous bt is impressive"/>
    <h1 className='p-5 rounded-xl bg-red-500'>Count is {count}</h1>
    <button className='m-5' onClick={()=>incCount((count)=>count+1)}>Increase</button>
    <button className='m-5' onClick={()=>incCount((count)=>count-1)}>Decrease</button>
    </>
  )
}
export default App