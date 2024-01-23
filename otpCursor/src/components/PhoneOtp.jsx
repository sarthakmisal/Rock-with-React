import React, { useState } from 'react'
import OtpInput from './OtpInput'
const phoneOtp = () => {
  const [phoneNumber, setphoneNumber] = useState("")
  const [showOtpInput, setshowOtpInput] = useState(false)
  const handlePhoneNumber = (event) => {
    setphoneNumber(event.target.value)
  }
  const handlePhoneSumbit = (event) => {
    event.preventDefault()
    const regex = /[^0-9]/g;
    
    // VALIDATION
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Format")
      setphoneNumber("")
      return
    }
    console.log("OTP is ",Math.floor(1000+Math.random()*9000))
    setshowOtpInput(!showOtpInput)
  }
  const onOtpSubmit = (e) => {
    alert("LogIn Success")
  }
  return (
    <div className='w-full h-screen flex bg-slate-200  items-center'>
      <div className='w-full max-w-lg mx-auto  border border-gray-60 rounded-lg shadow-xl p-24 backdrop-blur-sm bg-white/30'>
        {!showOtpInput ? (
          <>
            <h1 className='text-center font-bold text-4xl '>Login with Phone</h1>
            <form onSubmit={(e) => handlePhoneSumbit(e)} className='' id='form'>
              <input type="text" className='p-2 rounded-md ml-4  outline-none mt-7' placeholder='Enter Phone Number'
                value={phoneNumber} onChange={handlePhoneNumber} autoFocus
              />
              <button type='submit' className='button  bg-blue-500 p-2 rounded-r-md text-white '>Get OTP</button>
            </form>
          </>
        ) : (
          <>
          <h1 className='text-center font-bold text-4xl '>Verify Phone</h1>
          <div className='my-4'>
            <p>Enter otp sent to {phoneNumber}</p>
            < OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          </div>
          </>
        )}
      </div>
    </div>
  )
}

export default phoneOtp