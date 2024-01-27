import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function GitHub() {
  const data=useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/SarthakMisal')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       setData(data)
  //     })
  // }, [])
  return (
    // <div className="bg-orange-500 text-center font-bold text-3xl"><h1 className='p-8'>Welcome To gitHub</h1></div>
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl font-bold">
      <div className="h-1/6"><h1>GitHub Live Profile</h1></div>
      <div className='h-3/6 flex'>

        <img src={data.avatar_url} className='rounded-full w-1/6 ml-24' alt="ownerImage" />
        <h1 className='w-1/6 ml-8 my-14 text-4xl'>{data.name}</h1>
        <h1 className='w-1/6 -ml-72 my-28 font-normal text-2xl'>{data.location}</h1>
        <h1 className='w-1/6 ml-36 my-20 font-bold text-3xl'>Followers : {data.followers}</h1>
        <h1 className='w-1/6 ml-24 my-20 font-bold text-3xl'>Following : {data.following}</h1>
      </div>
      <div className="w-2/6">
      </div>
    </div>
  )
}

export default GitHub

export const gitHubInfoLoader= async ()=>{
  const response =await fetch('https://api.github.com/users/SarthakMisal')
  return response.json()
}