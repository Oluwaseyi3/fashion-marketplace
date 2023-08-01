import { Button } from '@mui/material'
import React, {useState} from 'react'
import axios from 'axios'
import newRequest from '../../utils/newRequest.ts'
import Buttons from '../../components/Buttons'

const Login = () => {
   
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState<any>("")

const handleSubmit = async(e: any) => {
  e.preventDefault()

  try {
    const res = await newRequest.post('auth/login', {
     username, password
    })
    console.log(res.data);
    
  } catch (err) {
    setError(err)
    console.log(error);
    
  }
}
  return (

    <div className=' flex flex-col text-white bg-black justify-center items-center w-full'>
      <form>
        <div>
        
        </div>
       <div className='flex flex-col justify-between items-start gap-6 min-w-[300px] p-5'>
       <div className='text-[40px] font-700'>
           Sign In
        </div>
        <div className='text-[24px]'>
           Username
        </div>
        <div className='w-full'>
          <input className='w-full text-black p-1 font-light bg-white border-2 rounded-md peer 
                 outline-none transition disabled:opacity-70  ' placeholder='maryjane' onChange={e=>setUsername(e.target.value)} />
        </div>
        <div className='text-[24px]' >
           Password
        </div>
        <div className='w-full'>
          <input type="password" className=' w-full text-black p-1 font-light bg-white border-2 rounded-md peer 
                 outline-none transition disabled:opacity-70  ' placeholder='maryjane@gmail.com'
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