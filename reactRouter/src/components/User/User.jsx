import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
const {user_id}=useParams()
  return (
    <div className='bg-orange-500 hover:text-4xl text-3xl font-bold text-white text-center py-5'><h1>User Id from Url : {user_id}</h1></div>
  )
}

export default User