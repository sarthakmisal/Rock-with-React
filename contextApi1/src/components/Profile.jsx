import React from 'react'
import UserContext from '../context/UserContext'
export default () => {
    const { User } = React.useContext(UserContext)
    // console.log(User)
    if (!User) return <div>Kindly LogIn</div>
    return <div>Welcome {User.username}</div>
}