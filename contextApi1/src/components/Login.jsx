import React from "react";
import UserContext from "../context/UserContext";
export default ()=>{
    const [username,setUsername]=React.useState("")
    const [password,setPassword]=React.useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Verifying")
        setTimeout(()=>{
            console.log("Logging In ")
            setUser({username,password})
        },1000)
    }
    const {setUser}=React.useContext(UserContext)
    return(
        <>
            <input className="p-2 m-1 rounded-md outline-none w-full" autoFocus onChange={(e)=>setUsername(e.target.value)} type="text" value={username}  placeholder="Enter UserName"/>
            <input className="p-2 m-1 rounded-md outline-none w-full" onChange={(e)=>setPassword(e.target.value)} type="password" value={password}  placeholder="Enter Password"/>
            <button onClick={handleSubmit} className="m-2 w-full bg-black text-white font-bold p-3 rounded-xl">LogIn</button>
            
        </>
    )
}