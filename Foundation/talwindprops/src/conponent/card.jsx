import React from "react"
function Card({real,desc,btn="Show Profile"}){
    console.log("Props => ")
    console.log(real)
   
    return(
        <>
         <div className="relative h-[250px] w-[400px] rounded-md mb-5">
      <img
        src="hero.svg"
        alt="SProar"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{real||"Name of User"}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {desc}, {real}?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btn} &rarr;
        </button>
      </div>
    </div>
        </>
    )
}
export default Card