import React from 'react'
import {AiOutlineStar} from "react-icons/ai"

const Gig = () => {
  return (
    <div className='grid grid-cols-2 container mx-auto'>
        <div className='flex flex-col gap-4 justify-between'>
          <div className='text-[24px] '>
            FINESSE <span>&gt; &gt; </span>MOBILE APPS
          </div> 

          <div className='text-[40px] font-bold'>
             I will create ai generated art for you
          </div> 

          <div className='flex gap-3 items-center justify-start py-4'>
            <div><img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-[50px] h-[50px] rounded-[100%]'/></div>
            <div className='text-[24px] '>Anna Bell</div>
            <div className='flex gap-2 '>
               <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/>
            </div>
          </div>
        </div>



        <div>here</div>
    </div>
  )
}

export default Gig