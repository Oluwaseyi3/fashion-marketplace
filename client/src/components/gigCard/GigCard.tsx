import React from 'react'
import {AiOutlineStar} from "react-icons/ai"
const GigCard = ({item} : any) => {
    console.log(item);
    
  return (
    <div className='flex flex-col w-[300px] h-[100%] gap-3 my-5 border-[2px] drop-shadow-lg rounded-lg'>
      <div className='w-full h-[70%]'>
        <img src={item.img} alt="" className='w-full h-full'/>
      </div>
      <div className='flex justify-start gap-3 p-2'>
        <img src={item.pp} className='rounded-[50%] w-[20%] h-[50px]
            0%]' alt=""/>
        <div className='text-[24px]'>{item.username}</div>
      </div>
      <div className='flex items-center p-2 gap-2'><AiOutlineStar/> {item.star}</div>
      
    </div>
  )
}

export default GigCard