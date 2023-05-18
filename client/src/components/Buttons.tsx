import React from 'react'

interface Navprops{
    title: string;
}

const Buttons: React.FC<Navprops> = ({title}) => {
  return (
    <button  type='button' className='py-2 px-6 rounded bg-black font-poppins font-medium text-[18px] text-white outline-none'>
        {title}
    </button>
  )
}

export default Buttons