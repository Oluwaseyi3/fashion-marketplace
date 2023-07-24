import React from 'react'

type Card = {
    item: any
  }


const CartCard = ({item}: Card) => {
    console.log(item);
    
    
  return (
    <div className='max-w-[252px] max-h-[344px] text-white rounded-[5px] cursor-pointer' >
      <img src={item.img} className='w-full h-full' alt="card image"/>
      <span className='font-[300] absolute text-black text-[104px] top-[15px] left-[15px]'>{item.desc}</span>
      <span className='font-[500] absolute text-[24px] top-[40px] left-[15px]'>{item.title}</span>
    </div>
  )
}

export default CartCard