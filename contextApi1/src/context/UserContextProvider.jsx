import React from 'react'
// var Context1=React.createContext()
import UserContext from './UserContext'
export default ({children})=>{
    const [User, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{User, setUser}}>
            <h1>{children}</h1>
        </UserContext.Provider>
    )
}