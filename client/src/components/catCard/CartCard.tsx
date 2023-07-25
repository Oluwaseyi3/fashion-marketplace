import React from 'react'
import { Link } from 'react-router-dom'

type Card = {
    item: any
  }


const CartCard = ({item}: Card) => {
    console.log(item);
    
    
  return (
    <Link to="/gigs?cat=design ">
    <div className='max-w-[260px]  max-h-[344px] text-white rounded-[5px] relative cursor-pointer' >
      <img src={item.img} className='w-full h-full' alt="card image"/>
      <div className='p-2'>
      <span className='font-[500] absolute  text-[24px] top-[15px] w-full left-[15px] '>{item.desc}</span>
      <span className='font-[500] absolute  text-[24px] top-[60px] w-full p-1 left-[15px]'>{item.title}</span>
      </div>
     
    </div>
    </Link>
  )
}

export default CartCard