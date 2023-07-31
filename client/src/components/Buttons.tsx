import React from 'react'

interface Navprops{
    title: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    width? : string;
    
}

const Buttons: React.FC<Navprops> = ({title, onClick, width}) => {
  return (
    <button  type='button' onClick={onClick} className={`py-2 px-6 rounded bg-purple-700 font-poppins font-medium text-[18px] text-white outline-none ${width}`}>
        {title}
    </button>
  )
}

export default Buttons