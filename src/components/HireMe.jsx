import React from 'react'
// import Icons from './icons'
import { circular, circularadobe, frontend } from '../assets'
const HireMe = () => {
  return (
    <div className='fixed left-1 bottom-4 flex items-center overflow-hidden justify-center'>
      <div className='w-48 h-auto flex items-center relative justify-center'>
        <img src={frontend} className="animate-spin-slow" alt="" />

        <a href="#contact" className='flex items-center justify-center absolute 
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#915eff] text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full'>
          Hire Me
        </a>
      </div>
    </div>
  )
}

export default HireMe