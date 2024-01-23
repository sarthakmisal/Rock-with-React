import React, { useState, useRef, useEffect } from 'react'

function OtpInput({ length = 4, onOtpSubmit = (otp) => { } }) {
    const [otp, setotp] = useState(new Array(length).fill(""))
    // console.log({ otp })
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    }, [])
    onOtpSubmit = (otp) => {
        console.log("Success", otp)
    }
    const inputRefs = useRef([])

    const handleChange = (ind, e) => {
        // console.log(e.key)
        const value = e.target.value
        if (isNaN(value)) return

        const newOtp = [...otp]

        // ALLOW ONLY ONE IKNPUT
        newOtp[ind] = value.substring(value.length - 1)
        setotp(newOtp)

        // SUBMIT TRIGGER 
        const combinedOtp = newOtp.join("")
        if (combinedOtp.length === length) onOtpSubmit(combinedOtp)
        
        // MOVER CURSOR TO NEXT ONE
        if (inputRefs.current[ind + 1] && value && ind < length - 1) inputRefs.current[ind+1].focus()

        // else    inputRefs.current[otp.indexOf("")].focus()


        // JUMPING TO THE INDEX WHICH IS EMPTY
        // if(ind>0&&otp[ind-1])   inputRefs.current[otp.indexOf("")].focus()

    }

    const handleKeyDown = (ind, e) => {
        console.log(e.key)
        if (e.key == " ") return
        // BACKSPACE SHIFT CURSOR
        if (e.key == 'Backspace' && !otp[ind] && ind > 0&&inputRefs.current[ind-1]) inputRefs.current[ind - 1].focus()
    }
    const handleClick = (ind, e) => {
        inputRefs.current[ind].setSelectionRange(1, 1)
        if (ind > 0 && otp[ind]) {
            inputRefs.current[otp.indexOf("")].focus()

        }
    }
    // console.log("Input Refs ",{ inputRefs })
    return (
        <div className="w-full">

            <div className='mt-5 flex w-full'>
                {
                    otp.map((val, ind) => {
                        return <input type='text' value={val} key={ind}
                            ref={(input) => (inputRefs.current[ind] = input)}
                            onChange={(e) => { handleChange(ind, e) }}
                            onClick={(e) => handleClick(ind, e)}
                            onKeyDown={(e) => handleKeyDown(ind, e)}
                            className=' overflow-visible py-5 outline rounded mx-3  text-center text-2xl w-14'
                        />
                    })
                }
            </div>
        </div>
    )
}

export default OtpInput