import React from 'react'
import qr from '../assets/qr.svg'
function Qr() {
  return (
    <div className='flex-center flex-col '>
        <div className='relative w-[85vw] h-[40vh] flex-center bg-primary rounded-bl-full rounded-br-full'>
            <img src={qr} alt="" className='absolute -bottom-20 w-64 p-4  bg-white rounded-lg '/>
        </div>
        <h2 className="mt-24 text-center text-secondary">
        Let's <span className="text-primary">Scan</span> to Login!
      </h2>
      <p className='mt-10 text-center w-96 text-secondary'>Please scan this qr code with your phone to login in your account...</p>
    </div>
  )
}

export default Qr