import React from 'react'
import Buttons from '../../components/Buttons'

const Gigs = () => {
  return (
    <div>
        <div className="container mx-auto flex flex-col gap-5">
            <div>finesse & Mobile Apps</div>
            <div className='font-500 text-[40px]'>Mobile Engineers</div>
            <div className=''>Explore and build the best apps</div>
             <div className='flex items-center justify-between'>
             <div className='flex items-center gap-3 '>Budget
            <input className="p-2 h-[30px] border-[2px] w-[20%]" placeholder=" min" />
            <input className="p-2 h-[30px] border-[2px] w-[20%]" placeholder=" max" />
             </div>

             <div className='flex items-center gap-3'>
                 <div>Filter by</div>
                <div><Buttons title="Top Selling"/></div> 
             </div>
             </div>
        </div>
    </div>
  )
}

export default Gigs