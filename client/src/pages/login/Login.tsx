import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
       <div className='flex flex-col justify-between items-start gap-3 min-w-[300px] p-5'>
       <div className='text-[40px]'>
           Sign In
        </div>
        <div className='text-[24px]'>
           Username
        </div>
        <div className='w-full'>
          <input className='w-full border-[1px] p-1'/>
        </div>
        <div className='text-[24px] ' >
           Password
        </div>
        <div className='w-full'>
          <input type="password" className='w-full border-[1px] p-1'/>
        </div>
       </div>
    </div>
  )
}

export default Login