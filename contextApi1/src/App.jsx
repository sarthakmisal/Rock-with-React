// import './App.css'
import React, { useContext } from "react"
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
function App() {
  return (
    <>
      <div className="place-content-center bg-slate-300 flex place-items-center  h-screen">
        <div className="flex flex-col  rounded-xl    w-1/4">
          <UserContextProvider>
            <Login />
            <Profile />
          </UserContextProvider>
        </div>
      </div>

    </>
  )
}

export default App
