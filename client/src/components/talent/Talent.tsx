import React from 'react'
import {BiSolidRightTopArrowCircle} from 'react-icons/bi'
import work from "../../assets/work.jpg"


const Talent = () => {
  return (
   <div>
     <div className='  grid grid-cols-2 p-10  bg-black text-white  gap-10 w-full'>
       <div className='w-full flex flex-col gap-10'>
          <div className='text-white font-500 text-[50px] '>
           Get Premium Access to our highly skilled professionals
          </div>

          <div className='flex flex-col gap-3'>
            <div className='flex gap-3 font-400 text-[30px]'>
                <BiSolidRightTopArrowCircle/> Discover highly skilled professionals across the continent
            </div>
            <div className='ml-8'>Choose the best hourly rate budgets for your selected projects, with the best freelancers across the African continent </div>
          </div>

          <div className='flex flex-col gap-3'>
            <div className='flex gap-3 font-400 text-[30px]'>
                <BiSolidRightTopArrowCircle/>  Get your tasks completed on the right time
            </div>
            <div className='ml-8'>No delays as we connect you to the right peoples suited for the job </div>
          </div>



         
          <div className='flex flex-col gap-3'>
            <div className='flex gap-3 font-400 text-[30px]'>
                <BiSolidRightTopArrowCircle/> Quick 24/7 Support
            </div>
            <div className='ml-8'>We have a fully functional customer care ready to assist you through any difficulty</div>
          </div>


          
       </div>
       <div className='w-full'>
        <img src={work} alt="" className='w-[100%]'/>
       </div>
    </div>
  
   </div>
  )
}

export default Talent