import { Button } from '@mui/material'
import React, {useState} from 'react'
import Buttons from '../../components/Buttons'

const Login = () => {
   
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState()

const handleSubmit = (e: any) => {
  e.preventDefault()
}
  return (

    <div className='flex flex-col text-white bg-black justify-center items-center w-full'>
      <form>
       <div className='flex flex-col justify-between items-start gap-6 min-w-[300px] p-5'>
       <div className='text-[40px] font-700'>
           Sign In
        </div>
        <div className='text-[24px]'>
           Username
        </div>
        <div className='w-full'>
          <input className='w-full border-[1px] p-1' placeholder='maryjane' onChange={e=>setUsername(e.target.value)}/>
        </div>
        <div className='text-[24px] ' >
           Password
        </div>
        <div className='w-full'>
          <input type="password" className='w-full border-[1px] p-1' placeholder='maryjane@gmail.com'
          onChange={e=>setPassword(e.target.value)}
          />
        </div>
        <Buttons width="w-full" title='Login' onClick={handleSubmit}/>
       </div>
       </form>
    </div>
  )
}

export default Login