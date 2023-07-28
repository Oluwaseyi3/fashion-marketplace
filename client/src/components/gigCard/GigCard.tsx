import React from 'react'
import {AiOutlineStar, AiOutlineHeart} from "react-icons/ai"
const GigCard = ({item} : any) => {
    console.log(item);
    
  return (
    <div className='flex py-1 flex-col w-[270px] justify-between h-[90%] max-h-[500px] gap-3 my-10 border-[2px] drop-shadow-lg rounded-lg'>
      <div className='w-full max-h-[250px]'>
        <img src={item.img} alt="" className='w-full h-full'/>
      </div>
      <div className='flex justify-start gap-3 p-2'>
        <img src={item.pp} className='rounded-[50%] w-[20%] h-[50px]
            ' alt=""/>
        <div className='text-[24px]'>{item.username}</div>
      </div>
      <div className='text-[20px] p-3'>{item.desc}</div>
      <div className='flex items-center px-2 gap-2'><AiOutlineStar/> {item.star}</div>
       <div className='flex justify-between px-3'
       ><AiOutlineHeart className=""/>
        <div className='text-[24px]'>${item.price}</div>
       </div>
    </div>
  )
}

export default GigCard